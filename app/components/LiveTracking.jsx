// components/LiveTracking.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Navigation,
  Clock,
  Battery,
  Wifi,
  Signal,
  Eye,
  Camera,
  FileText,
  MessageSquare,
  Download,
  Share2,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle,
  Radio,
  Compass,
  Target,
} from "lucide-react";

export function LiveTracking({ agentId = "john_agent", showHistory = true }) {
  const [agentStatus, setAgentStatus] = useState({
    status: "checked-in",
    location: "Sandton CBD",
    battery: 85,
    gpsSignal: "strong",
    lastUpdate: Date.now(),
    currentProperty: "Sandton Apartment",
    duration: "2h 15m",
    nextAppointment: "Morningside Villa at 2:00 PM",
  });

  const [locationHistory, setLocationHistory] = useState([
    {
      time: "09:15 AM",
      location: "Office HQ",
      type: "checkin",
      duration: "0m",
    },
    {
      time: "10:30 AM",
      location: "Sandton Apartment",
      type: "viewing",
      duration: "1h 15m",
    },
    {
      time: "11:45 AM",
      location: "Morningside Villa",
      type: "inspection",
      duration: "45m",
    },
    {
      time: "01:30 PM",
      location: "Client Meeting",
      type: "meeting",
      duration: "1h",
    },
    {
      time: "03:00 PM",
      location: "Bryanston Townhouse",
      type: "viewing",
      duration: "45m",
    },
  ]);

  const [isTracking, setIsTracking] = useState(true);
  const [simulationActive, setSimulationActive] = useState(true);

  // Simulate live tracking updates
  useEffect(() => {
    if (!simulationActive) return;

    const interval = setInterval(() => {
      // Update battery (slow discharge)
      setAgentStatus((prev) => ({
        ...prev,
        battery: Math.max(10, prev.battery - 0.5),
        lastUpdate: Date.now(),
        location: `Moving in ${["Sandton", "Morningside", "Bryanston"][Math.floor(Math.random() * 3)]}`,
      }));

      // Add to history occasionally
      if (Math.random() > 0.8) {
        const locations = [
          "Office",
          "Property Viewing",
          "Client Meeting",
          "Site Inspection",
        ];
        const types = ["checkin", "viewing", "meeting", "inspection"];
        const randomIndex = Math.floor(Math.random() * locations.length);

        setLocationHistory((prev) => [
          {
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            location: locations[randomIndex],
            type: types[randomIndex],
            duration: `${Math.floor(Math.random() * 120) + 15}m`,
          },
          ...prev.slice(0, 9),
        ]);
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [simulationActive]);

  const handleCheckIn = () => {
    setAgentStatus((prev) => ({
      ...prev,
      status: "checked-in",
      location: "Office HQ",
      lastUpdate: Date.now(),
    }));

    setLocationHistory((prev) => [
      {
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        location: "Office HQ",
        type: "checkin",
        duration: "0m",
      },
      ...prev,
    ]);

    alert("Checked in successfully! Tracking started.");
  };

  const handleCheckOut = () => {
    setAgentStatus((prev) => ({
      ...prev,
      status: "checked-out",
      location: "Last known: Sandton CBD",
      lastUpdate: Date.now(),
    }));

    setLocationHistory((prev) => [
      {
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        location: "Checked Out",
        type: "checkout",
        duration: "End of shift",
      },
      ...prev,
    ]);

    alert("Checked out successfully! Tracking paused.");
  };

  const handleReportIssue = () => {
    const issue = prompt("Describe the issue:");
    if (issue) {
      alert(`Issue reported: ${issue}\nManagement has been notified.`);

      // Simulate sending to management
      setLocationHistory((prev) => [
        {
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          location: "Issue Reported",
          type: "alert",
          duration: "Immediate",
        },
        ...prev,
      ]);
    }
  };

  const exportTrackingData = () => {
    const data = {
      agentId,
      status: agentStatus,
      history: locationHistory,
      exportTime: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tracking_${agentId}_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    alert("Tracking data exported successfully!");
  };

  const getStatusColor = (status) => {
    return status === "checked-in"
      ? "text-green-600 bg-green-100"
      : status === "checked-out"
        ? "text-red-600 bg-red-100"
        : "text-yellow-600 bg-yellow-100";
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "checkin":
        return <CheckCircle className="text-green-500" size={16} />;
      case "checkout":
        return <XCircle className="text-red-500" size={16} />;
      case "viewing":
        return <Eye className="text-blue-500" size={16} />;
      case "meeting":
        return <MessageSquare className="text-purple-500" size={16} />;
      case "inspection":
        return <Target className="text-orange-500" size={16} />;
      case "alert":
        return <AlertCircle className="text-red-500" size={16} />;
      default:
        return <MapPin className="text-gray-500" size={16} />;
    }
  };

  const getSignalColor = (signal) => {
    switch (signal) {
      case "strong":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "weak":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Navigation size={24} />
            <div>
              <h3 className="font-bold text-lg">Live Agent Tracking</h3>
              <p className="text-sm opacity-90">Real-time GPS monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              className={isTracking ? "text-green-300" : "text-red-300"}
              size={20}
            />
            <span className="text-sm font-medium">
              {isTracking ? "LIVE" : "PAUSED"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Status Bar */}
        <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full ${agentStatus.status === "checked-in" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
            />
            <span className="font-bold text-lg">
              {agentStatus.status === "checked-in" ? "ON DUTY" : "OFF DUTY"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Battery size={16} />
              <span>{Math.round(agentStatus.battery)}%</span>
            </div>
            <div className="flex items-center gap-1">
              <Signal
                size={16}
                className={getSignalColor(agentStatus.gpsSignal)}
              />
              <span>{agentStatus.gpsSignal.toUpperCase()} GPS</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>
                Updated{" "}
                {Math.floor((Date.now() - agentStatus.lastUpdate) / 60000)}m ago
              </span>
            </div>
          </div>
        </div>

        {/* Map Visualization */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg">Current Location</h4>
                <p className="text-blue-200">{agentStatus.location}</p>
              </div>
              <Compass size={32} className="text-blue-300" />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{agentStatus.duration}</div>
                <div className="text-sm text-blue-300">On Site</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {locationHistory.length}
                </div>
                <div className="text-sm text-blue-300">Stops Today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {agentStatus.currentProperty.split(" ")[0]}
                </div>
                <div className="text-sm text-blue-300">Current Property</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <button
            onClick={
              agentStatus.status === "checked-in"
                ? handleCheckOut
                : handleCheckIn
            }
            className={`p-3 rounded-lg font-bold text-white ${
              agentStatus.status === "checked-in"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {agentStatus.status === "checked-in" ? "CHECK OUT" : "CHECK IN"}
          </button>
          <button className="p-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
            <Camera className="inline mr-2" size={16} />
            TAKE PHOTOS
          </button>
          <button className="p-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700">
            <FileText className="inline mr-2" size={16} />
            FILE REPORT
          </button>
          <button
            onClick={handleReportIssue}
            className="p-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700"
          >
            <AlertCircle className="inline mr-2" size={16} />
            REPORT ISSUE
          </button>
        </div>

        {/* Location History */}
        {showHistory && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold flex items-center gap-2">
                <Clock size={18} />
                Location History
              </h4>
              <div className="flex items-center gap-2">
                <button
                  onClick={exportTrackingData}
                  className="text-sm text-blue-600 flex items-center gap-1"
                >
                  <Download size={14} />
                  Export
                </button>
                <button
                  onClick={() => setSimulationActive(!simulationActive)}
                  className="text-sm text-gray-600 flex items-center gap-1"
                >
                  <RefreshCw size={14} />
                  {simulationActive ? "Pause Sim" : "Resume Sim"}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {locationHistory.map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center">
                      {getTypeIcon(entry.type)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{entry.location}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{entry.time}</span>
                      <span>•</span>
                      <span className="capitalize">{entry.type}</span>
                      {entry.duration && (
                        <>
                          <span>•</span>
                          <span>Duration: {entry.duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{entry.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Management View Only */}
        {!agentId && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="text-yellow-600" size={20} />
              <h5 className="font-bold text-yellow-800">Management View</h5>
            </div>
            <p className="text-sm text-yellow-700">
              You are viewing live tracking data. All agent movements are logged
              and can be reviewed for performance analysis and safety
              monitoring.
            </p>
            <div className="flex gap-3 mt-3">
              <button className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                View All Agents
              </button>
              <button className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                Generate Report
              </button>
              <button className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                Send Alert
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Active Tracking</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Connected to Dashboard</span>
            </div>
          </div>
          <button
            onClick={() => setIsTracking(!isTracking)}
            className={`px-3 py-1 rounded ${isTracking ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {isTracking ? "Tracking Active" : "Tracking Paused"}
          </button>
        </div>
      </div>
    </div>
  );
}
