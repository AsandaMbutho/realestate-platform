// components/CommunicationPanel.jsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Paperclip,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  MapPin,
  Home,
  User,
  Calendar,
  FileText,
  Bell,
  Search,
  Filter,
  MessageSquare,
  Phone,
  Mail,
  MoreVertical,
} from "lucide-react";

export function CommunicationPanel({
  userType = "agent",
  userId = "john_agent",
  showFull = false,
}) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  // Mock data - replace with connector integration
  const mockMessages = [
    {
      id: 1,
      type: "message",
      from: "Admin",
      to: "John Agent",
      content: "Please schedule viewing for Sandton Apartment",
      timestamp: "2024-02-15T10:30:00",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "system",
      from: "System",
      to: "All",
      content: "Agent John Agent checked in at Sandton CBD",
      timestamp: "2024-02-15T09:15:00",
      read: true,
      priority: "medium",
    },
    {
      id: 3,
      type: "alert",
      from: "Manager",
      to: "All Agents",
      content: "Team meeting at 2 PM today",
      timestamp: "2024-02-15T08:45:00",
      read: false,
      priority: "high",
    },
    {
      id: 4,
      type: "property_update",
      from: "System",
      to: "John Agent",
      content: "New lead generated for Modern Penthouse",
      timestamp: "2024-02-15T08:30:00",
      read: true,
      priority: "medium",
    },
    {
      id: 5,
      type: "client_message",
      from: "David Miller",
      to: "John Agent",
      content: "When can we view the property?",
      timestamp: "2024-02-14T16:20:00",
      read: true,
      priority: "normal",
    },
  ];

  const [communications] = useState(mockMessages);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      type: "message",
      from: userType === "agent" ? "John Agent" : "Admin",
      to: userType === "agent" ? "Admin" : "John Agent",
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
      priority: "normal",
    };

    setMessages([message, ...messages]);
    setNewMessage("");

    // Simulate reply
    setIsTyping(true);
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        type: "message",
        from: userType === "agent" ? "Admin" : "John Agent",
        to: userType === "agent" ? "John Agent" : "Admin",
        content: `Received: "${newMessage}" - will respond shortly`,
        timestamp: new Date().toISOString(),
        read: false,
        priority: "normal",
      };
      setMessages((prev) => [reply, ...prev]);
      setIsTyping(false);
    }, 2000);
  };

  const markAsRead = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: true } : msg)),
    );
  };

  const downloadCommunication = (msg) => {
    const dataStr = JSON.stringify(msg, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `communication_${msg.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "normal":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const getIconForType = (type) => {
    switch (type) {
      case "message":
        return <MessageSquare size={14} />;
      case "system":
        return <Bell size={14} />;
      case "alert":
        return <Bell size={14} className="text-red-500" />;
      case "property_update":
        return <Home size={14} />;
      case "client_message":
        return <User size={14} />;
      default:
        return <MessageSquare size={14} />;
    }
  };

  const filteredMessages =
    filter === "all"
      ? [...communications, ...messages]
      : [...communications, ...messages].filter((msg) => msg.type === filter);

  const unreadCount = filteredMessages.filter((msg) => !msg.read).length;

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="text-blue-600" size={20} />
            <div>
              <h3 className="font-bold">Communications</h3>
              <p className="text-sm text-gray-500">
                {unreadCount} unread • Real-time sync
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-1.5 border rounded-lg text-sm"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded-lg px-3 py-1.5 text-sm"
            >
              <option value="all">All Types</option>
              <option value="message">Messages</option>
              <option value="system">System</option>
              <option value="alert">Alerts</option>
              <option value="property_update">Property Updates</option>
              <option value="client_message">Client Messages</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages List */}
      <div
        className={`${showFull ? "h-[400px]" : "h-[300px]"} overflow-y-auto p-4`}
      >
        {filteredMessages.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare size={32} className="mx-auto mb-2 opacity-50" />
            <p>No messages yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-sm ${
                  msg.read ? "bg-white" : "bg-blue-50"
                } ${selectedMessage?.id === msg.id ? "ring-2 ring-blue-500" : ""}`}
                onClick={() => {
                  setSelectedMessage(msg);
                  if (!msg.read) markAsRead(msg.id);
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded ${getPriorityColor(msg.priority).split(" ")[0]}`}
                    >
                      {getIconForType(msg.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{msg.from}</span>
                        <span className="text-xs text-gray-500">→</span>
                        <span className="font-medium">{msg.to}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded ${getPriorityColor(msg.priority)}`}
                        >
                          {msg.type.replace("_", " ")}
                        </span>
                        {!msg.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700">{msg.content}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-gray-500">
                          {new Date(msg.timestamp).toLocaleString()}
                        </span>
                        {msg.priority === "high" && (
                          <span className="text-xs text-red-600 font-bold">
                            URGENT
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadCommunication(msg);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                      title="Download"
                    >
                      <Download size={14} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        markAsRead(msg.id);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                      title="Mark as read"
                    >
                      <CheckCircle size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isTyping && (
          <div className="p-3 bg-gray-50 rounded-lg border mt-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
              <span className="text-sm text-gray-500">Typing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="2"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-gray-100 rounded">
                  <Paperclip size={16} />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded">
                  <Calendar size={16} />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded">
                  <FileText size={16} />
                </button>
              </div>
              <div className="text-sm text-gray-500">
                Press Enter to send, Shift+Enter for new line
              </div>
            </div>
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="self-end bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Selected Message Details */}
      {selectedMessage && showFull && (
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold">Message Details</h4>
            <button
              onClick={() => setSelectedMessage(null)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <XCircle size={18} />
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">From:</span>
                <p className="font-medium">{selectedMessage.from}</p>
              </div>
              <div>
                <span className="text-gray-500">To:</span>
                <p className="font-medium">{selectedMessage.to}</p>
              </div>
              <div>
                <span className="text-gray-500">Type:</span>
                <p className="font-medium">{selectedMessage.type}</p>
              </div>
              <div>
                <span className="text-gray-500">Priority:</span>
                <p className="font-medium">{selectedMessage.priority}</p>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">Content:</span>
                <p className="mt-1 p-2 bg-white rounded border">
                  {selectedMessage.content}
                </p>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">Timestamp:</span>
                <p>{new Date(selectedMessage.timestamp).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => downloadCommunication(selectedMessage)}
                className="flex-1 bg-blue-600 text-white py-2 rounded text-sm"
              >
                <Download size={14} className="inline mr-2" />
                Download JSON
              </button>
              <button
                onClick={() => alert(`Replying to ${selectedMessage.from}`)}
                className="flex-1 bg-green-600 text-white py-2 rounded text-sm"
              >
                <MessageSquare size={14} className="inline mr-2" />
                Reply
              </button>
              <button
                onClick={() => alert(`Calling ${selectedMessage.from}`)}
                className="flex-1 bg-purple-600 text-white py-2 rounded text-sm"
              >
                <Phone size={14} className="inline mr-2" />
                Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
