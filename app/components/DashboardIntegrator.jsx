// components/DashboardIntegrator.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Users,
  Home,
  MapPin,
  Clock,
  Bell,
  Download,
  Upload,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Radio,
  RefreshCw,
} from "lucide-react";

export function DashboardIntegrator({ dashboardType = "agent" }) {
  const [connector] = useState(() => {
    if (typeof window !== "undefined") {
      return window.RealEstateConnector?.getInstance() || null;
    }
    return null;
  });

  const [communications, setCommunications] = useState([]);
  const [agents, setAgents] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    if (!connector) return;

    const handleNewComm = (comm) => {
      setCommunications((prev) => [comm, ...prev.slice(0, 19)]);
      if (comm.type === "message" && !comm.read) {
        setUnreadCount((prev) => prev + 1);
      }
    };

    const handleAgentUpdate = () => {
      if (connector.getAllAgents) {
        setAgents(connector.getAllAgents());
      }
    };

    // Initial load
    if (connector.getRecentCommunications) {
      setCommunications(connector.getRecentCommunications(20));
    }
    if (connector.getAllAgents) {
      setAgents(connector.getAllAgents());
    }

    // Subscribe to events
    connector.on("newCommunication", handleNewComm);
    connector.on("agent:checkin", handleAgentUpdate);
    connector.on("agent:checkout", handleAgentUpdate);
    connector.on("agent:location", handleAgentUpdate);

    return () => {
      connector.off("newCommunication", handleNewComm);
      connector.off("agent:checkin", handleAgentUpdate);
      connector.off("agent:checkout", handleAgentUpdate);
      connector.off("agent:location", handleAgentUpdate);
    };
  }, [connector]);

  const handleCheckIn = () => {
    if (connector?.agentCheckIn) {
      connector.agentCheckIn("john_agent", "Current Location");
    }
  };

  const handleCheckOut = () => {
    if (connector?.agentCheckOut) {
      connector.agentCheckOut("john_agent", "Shift completed");
    }
  };

  const handleSendMessage = () => {
    const message = prompt("Enter your message:");
    if (message && connector?.sendMessage) {
      connector.sendMessage(
        dashboardType === "agent" ? "John Agent" : "Admin",
        dashboardType === "agent" ? "Admin" : "John Agent",
        message,
      );
    }
  };

  const handleExport = () => {
    if (connector?.exportData) {
      connector.exportData("communications");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-500";
      case "checked-out":
        return "bg-red-500";
      case "active":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case "agent_checkin":
        return <CheckCircle className="text-green-500" size={14} />;
      case "agent_checkout":
        return <XCircle className="text-red-500" size={14} />;
      case "property_view":
        return <Eye className="text-blue-500" size={14} />;
      case "message":
        return <MessageSquare className="text-purple-500" size={14} />;
      default:
        return <AlertCircle className="text-gray-500" size={14} />;
    }
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-bold flex items-center gap-2">
          <Radio
            className={isConnected ? "text-green-500" : "text-red-500"}
            size={16}
          />
          Live Integration Panel
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsConnected(!isConnected)}
            className={`p-2 rounded ${isConnected ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {isConnected ? "Connected" : "Disconnected"}
          </button>
          <button
            onClick={handleExport}
            className="p-2 bg-blue-100 text-blue-700 rounded"
          >
            <Download size={16} />
          </button>
        </div>
      </div>

      {/* Agent Status */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-sm text-gray-500">Agent Status</div>
          {agents.map((agent) => (
            <div key={agent.id} className="flex items-center gap-2 mt-2">
              <div
                className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`}
              />
              <span className="font-medium">{agent.name}</span>
              <span className="text-sm text-gray-500">{agent.status}</span>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 p-3 rounded">
          <div className="text-sm text-gray-500">Quick Actions</div>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleCheckIn}
              className="flex-1 bg-green-600 text-white py-1 rounded text-sm"
            >
              Check In
            </button>
            <button
              onClick={handleCheckOut}
              className="flex-1 bg-red-600 text-white py-1 rounded text-sm"
            >
              Check Out
            </button>
            <button
              onClick={handleSendMessage}
              className="flex-1 bg-blue-600 text-white py-1 rounded text-sm"
            >
              Message
            </button>
          </div>
        </div>
      </div>

      {/* Live Communications */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium flex items-center gap-2">
            <MessageSquare size={16} />
            Live Communications
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </h4>
          <span className="text-xs text-gray-500">Real-time</span>
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {communications.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No communications yet
            </div>
          ) : (
            communications.map((comm) => (
              <div
                key={comm.id}
                className={`p-2 rounded border-l-4 ${
                  comm.type === "message" && !comm.read
                    ? "bg-blue-50 border-blue-500"
                    : comm.type === "agent_checkin"
                      ? "bg-green-50 border-green-500"
                      : comm.type === "agent_checkout"
                        ? "bg-red-50 border-red-500"
                        : "bg-gray-50 border-gray-500"
                }`}
              >
                <div className="flex items-start gap-2">
                  {getEventIcon(comm.type)}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{comm.message}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-2">
                      <Clock size={10} />
                      {new Date(comm.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Connection Status */}
      <div className="text-xs text-gray-500 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
          />
          {isConnected ? "Connected to all dashboards" : "Disconnected"}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-1 text-blue-600"
        >
          <RefreshCw size={12} />
          Refresh
        </button>
      </div>
    </div>
  );
}
