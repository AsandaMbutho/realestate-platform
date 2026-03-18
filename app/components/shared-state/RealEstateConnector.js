// shared-state/RealEstateConnector.js
"use client";

import { EventEmitter } from "events";

export class RealEstateConnector extends EventEmitter {
  constructor() {
    super();
    this.state = {
      // Live Agent Tracking
      agents: new Map([
        [
          "john_agent",
          {
            id: "john_agent",
            name: "John Agent",
            status: "checked-in",
            location: "Sandton CBD",
            lastCheckIn: new Date().toISOString(),
            performance: 94,
            currentProperty: "Sandton Apartment",
            battery: 85,
            gpsSignal: "strong",
            coords: { lat: -26.1076, lng: 28.0567 },
            lastUpdate: Date.now(),
          },
        ],
      ]),

      // Communications
      communications: [],

      // Properties (Shared across all dashboards)
      properties: [],

      // Clients
      clients: [],

      // System Messages
      systemMessages: [],

      // Document Store
      documents: new Map(),

      // Real-time events
      realTimeEvents: [],
    };

    // Initialize WebSocket connection
    this.initWebSocket();
    this.startSimulation();
  }

  static instance = null;

  static getInstance() {
    if (!RealEstateConnector.instance) {
      RealEstateConnector.instance = new RealEstateConnector();
    }
    return RealEstateConnector.instance;
  }

  initWebSocket() {
    // For demo, simulate WebSocket with intervals
    setInterval(() => {
      this.simulateRealTimeData();
    }, 5000);

    // Listen for storage events (cross-tab communication)
    if (typeof window !== "undefined") {
      window.addEventListener("storage", (e) => {
        if (e.key === "realestate_broadcast") {
          try {
            const data = JSON.parse(e.newValue);
            this.handleBroadcast(data);
          } catch (err) {
            console.error("Failed to parse broadcast:", err);
          }
        }
      });
    }
  }

  startSimulation() {
    // Simulate agent check-ins/outs
    setInterval(() => {
      const agents = Array.from(this.state.agents.values());
      agents.forEach((agent) => {
        if (Math.random() > 0.7 && agent.status === "checked-in") {
          this.agentCheckOut(agent.id);
        } else if (Math.random() > 0.8 && agent.status === "checked-out") {
          this.agentCheckIn(agent.id);
        }
      });
    }, 30000);

    // Simulate property views
    setInterval(() => {
      const properties = [
        "Sandton Apartment",
        "Modern Penthouse",
        "Executive Villa",
      ];
      const randomProperty =
        properties[Math.floor(Math.random() * properties.length)];
      this.addCommunication({
        type: "property_view",
        agentId: "john_agent",
        property: randomProperty,
        timestamp: new Date().toISOString(),
        viewer: "Client " + Math.floor(Math.random() * 100),
        message: `Viewed ${randomProperty}`,
      });
    }, 45000);
  }

  // AGENT FUNCTIONS
  agentCheckIn(agentId, location = "Sandton CBD") {
    const agent = this.state.agents.get(agentId);
    if (agent) {
      agent.status = "checked-in";
      agent.location = location;
      agent.lastCheckIn = new Date().toISOString();
      agent.lastUpdate = Date.now();

      const comm = {
        id: Date.now(),
        type: "agent_checkin",
        agentId,
        agentName: agent.name,
        timestamp: new Date().toISOString(),
        location,
        message: `${agent.name} checked in at ${location}`,
      };

      this.addCommunication(comm);
      this.broadcastEvent("agent:checkin", comm);
      this.emit("stateChange", this.state);

      return comm;
    }
  }

  agentCheckOut(agentId, notes = "End of shift") {
    const agent = this.state.agents.get(agentId);
    if (agent && agent.status === "checked-in") {
      const checkInTime = new Date(agent.lastCheckIn);
      const now = new Date();
      const duration = Math.round((now - checkInTime) / (1000 * 60)); // minutes

      agent.status = "checked-out";
      agent.lastUpdate = Date.now();

      const comm = {
        id: Date.now(),
        type: "agent_checkout",
        agentId,
        agentName: agent.name,
        timestamp: new Date().toISOString(),
        duration: `${duration} minutes`,
        notes,
        message: `${agent.name} checked out after ${duration} minutes`,
      };

      this.addCommunication(comm);
      this.broadcastEvent("agent:checkout", comm);
      this.emit("stateChange", this.state);

      return comm;
    }
  }

  updateAgentLocation(agentId, location, coords) {
    const agent = this.state.agents.get(agentId);
    if (agent) {
      agent.location = location;
      agent.coords = coords;
      agent.lastUpdate = Date.now();

      this.broadcastEvent("agent:location", {
        agentId,
        location,
        coords,
        timestamp: new Date().toISOString(),
      });
      this.emit("stateChange", this.state);
    }
  }

  // COMMUNICATION FUNCTIONS
  addCommunication(comm) {
    comm.id = comm.id || Date.now();
    comm.timestamp = comm.timestamp || new Date().toISOString();

    this.state.communications.unshift(comm);
    if (this.state.communications.length > 100) {
      this.state.communications = this.state.communications.slice(0, 100);
    }

    // Store in localStorage for cross-tab
    if (typeof window !== "undefined") {
      const recentComms = JSON.parse(
        localStorage.getItem("realestate_comms") || "[]",
      );
      recentComms.unshift(comm);
      if (recentComms.length > 50) {
        recentComms.pop();
      }
      localStorage.setItem("realestate_comms", JSON.stringify(recentComms));
    }

    this.emit("newCommunication", comm);
    return comm;
  }

  sendMessage(from, to, message, type = "message") {
    const comm = {
      id: Date.now(),
      type,
      from,
      to,
      message,
      timestamp: new Date().toISOString(),
      read: false,
    };

    this.addCommunication(comm);
    this.broadcastEvent("message:new", comm);
    return comm;
  }

  // PROPERTY FUNCTIONS
  updateProperty(property) {
    const index = this.state.properties.findIndex((p) => p.id === property.id);
    if (index >= 0) {
      this.state.properties[index] = property;
    } else {
      this.state.properties.push(property);
    }

    this.broadcastEvent("property:update", property);
    this.emit("stateChange", this.state);
    return property;
  }

  scheduleViewing(propertyId, clientName, date, time, agentId) {
    const viewing = {
      id: Date.now(),
      type: "viewing_scheduled",
      propertyId,
      clientName,
      date,
      time,
      agentId,
      status: "scheduled",
      timestamp: new Date().toISOString(),
      message: `Viewing scheduled for ${clientName} at ${time} on ${date}`,
    };

    this.addCommunication(viewing);
    this.broadcastEvent("viewing:scheduled", viewing);
    return viewing;
  }

  // DOCUMENT FUNCTIONS
  uploadDocument(name, type, content, metadata = {}) {
    const docId = `doc_${Date.now()}`;
    const document = {
      id: docId,
      name,
      type,
      content,
      metadata,
      uploadedAt: new Date().toISOString(),
      size: content.length,
      downloads: 0,
    };

    this.state.documents.set(docId, document);

    const comm = {
      id: Date.now(),
      type: "document_upload",
      documentId: docId,
      name,
      timestamp: new Date().toISOString(),
      message: `New document uploaded: ${name}`,
    };

    this.addCommunication(comm);
    this.broadcastEvent("document:upload", comm);
    this.emit("stateChange", this.state);

    return document;
  }

  downloadDocument(docId) {
    const doc = this.state.documents.get(docId);
    if (doc) {
      doc.downloads = (doc.downloads || 0) + 1;
      doc.lastDownload = new Date().toISOString();

      this.broadcastEvent("document:download", {
        docId,
        name: doc.name,
        timestamp: new Date().toISOString(),
      });

      return doc;
    }
    return null;
  }

  // BROADCAST FUNCTIONS
  broadcastEvent(event, data) {
    const broadcast = {
      event,
      data,
      timestamp: new Date().toISOString(),
      source: "connector",
    };

    // Store in localStorage for cross-tab communication
    if (typeof window !== "undefined") {
      localStorage.setItem("realestate_broadcast", JSON.stringify(broadcast));
      // Trigger storage event
      setTimeout(() => {
        localStorage.removeItem("realestate_broadcast");
      }, 100);
    }

    this.emit(event, data);
  }

  handleBroadcast(data) {
    if (data.event && data.data) {
      this.emit(data.event, data.data);
    }
  }

  // GETTER FUNCTIONS
  getAgentStatus(agentId) {
    return this.state.agents.get(agentId);
  }

  getAllAgents() {
    return Array.from(this.state.agents.values());
  }

  getRecentCommunications(limit = 20) {
    return this.state.communications.slice(0, limit);
  }

  getUnreadMessages(userId) {
    return this.state.communications.filter(
      (comm) => comm.type === "message" && comm.to === userId && !comm.read,
    );
  }

  // SIMULATION FUNCTIONS
  simulateRealTimeData() {
    const events = [
      {
        type: "property_view",
        property: "Luxury Apartment",
        views: Math.floor(Math.random() * 5) + 1,
        timestamp: new Date().toISOString(),
      },
      {
        type: "lead_generated",
        source: Math.random() > 0.5 ? "website" : "referral",
        location: "Sandton",
        timestamp: new Date().toISOString(),
      },
      {
        type: "market_update",
        change: (Math.random() - 0.5) * 2,
        area: "Sandton CBD",
        timestamp: new Date().toISOString(),
      },
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    this.addCommunication(randomEvent);

    // Update agent location
    const agent = this.state.agents.get("john_agent");
    if (agent && agent.status === "checked-in") {
      const latOffset = (Math.random() - 0.5) * 0.01;
      const lngOffset = (Math.random() - 0.5) * 0.01;

      this.updateAgentLocation("john_agent", "Moving...", {
        lat: -26.1076 + latOffset,
        lng: 28.0567 + lngOffset,
      });
    }
  }

  // EXPORT FUNCTIONS
  exportData(type = "communications") {
    let data;
    switch (type) {
      case "communications":
        data = this.state.communications;
        break;
      case "agents":
        data = this.getAllAgents();
        break;
      case "properties":
        data = this.state.properties;
        break;
      default:
        data = this.state;
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `realestate_${type}_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    return data;
  }

  // CLEANUP
  disconnect() {
    this.removeAllListeners();
  }
}

// React Hook for using the connector
export function useRealEstateConnector() {
  const [connector] = React.useState(() => RealEstateConnector.getInstance());
  const [state, setState] = React.useState(connector.state);

  React.useEffect(() => {
    const handleStateChange = () => {
      setState({ ...connector.state });
    };

    connector.on("stateChange", handleStateChange);

    return () => {
      connector.off("stateChange", handleStateChange);
    };
  }, [connector]);

  return {
    connector,
    state,
    agentCheckIn: (agentId, location) =>
      connector.agentCheckIn(agentId, location),
    agentCheckOut: (agentId, notes) => connector.agentCheckOut(agentId, notes),
    sendMessage: (from, to, message) =>
      connector.sendMessage(from, to, message),
    updateProperty: (property) => connector.updateProperty(property),
    scheduleViewing: (propertyId, clientName, date, time, agentId) =>
      connector.scheduleViewing(propertyId, clientName, date, time, agentId),
    uploadDocument: (name, type, content, metadata) =>
      connector.uploadDocument(name, type, content, metadata),
    exportData: (type) => connector.exportData(type),
    getRecentCommunications: (limit) =>
      connector.getRecentCommunications(limit),
    getAgentStatus: (agentId) => connector.getAgentStatus(agentId),
  };
}
