"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart3,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Trophy,
  Clock,
  Calendar,
  MessageSquare,
  Phone,
  User,
  Target,
  ChevronRight,
  Star,
  Home,
  Briefcase,
  FileText,
  PieChart,
  BarChart,
  TrendingDown,
  Award,
  Users,
  Mail,
  Filter,
  Search,
  Download,
  Eye,
  Heart,
  Bell,
  LogOut,
  Plus,
  Building,
  DollarSign,
  Shield,
  Settings,
} from "lucide-react";

const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [properties, setProperties] = useState([]);
  const [messages, setMessages] = useState([]);
  const [performanceData, setPerformanceData] = useState({});
  const [loading, setLoading] = useState(true);
  const [clientMessages, setClientMessages] = useState("");
  const [analyticsData, setAnalyticsData] = useState({});
  const [reports, setReports] = useState([]);

  // Mock data initialization
  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setProperties([
        {
          id: 1,
          name: "Luxury Apartment",
          location: "Sandton",
          price: "R 2 500 000",
          status: "Active",
          views: 156,
          bedrooms: 3,
          bathrooms: 2,
          size: "250m²",
          image:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400",
          tags: ["Pool", "Gym", "Garage"],
        },
        {
          id: 2,
          name: "Modern Penthouse",
          location: "Sandton City",
          price: "R 4 200 000",
          status: "Under Offer",
          views: 89,
          bedrooms: 4,
          bathrooms: 3,
          size: "320m²",
          image:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400",
          tags: ["City View", "Balcony", "Concierge"],
        },
        {
          id: 3,
          name: "Executive Villa",
          location: "Morningside",
          price: "R 18 500 000",
          status: "Active",
          views: 203,
          bedrooms: 5,
          bathrooms: 4,
          size: "450m²",
          image:
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400",
          tags: ["Pool", "Garden", "Security"],
        },
      ]);

      setMessages([
        {
          id: 1,
          name: "Mike Johnson",
          time: "9:30 AM",
          message: "When can we view the Sandton apartment?",
          unread: true,
          avatar: "MJ",
        },
        {
          id: 2,
          name: "Sarah Wilson",
          time: "Yesterday",
          message: "I've signed the documents, please check",
          unread: false,
          avatar: "SW",
        },
        {
          id: 3,
          name: "Robert Chen",
          time: "2 days ago",
          message: "Interested in the penthouse. Available this weekend?",
          unread: false,
          avatar: "RC",
        },
      ]);

      setPerformanceData({
        conversionRate: { value: 28, target: 30, trend: "up" },
        clientSatisfaction: { value: 4.8, target: 4.5, trend: "up" },
        responseTime: { value: 12, target: 15, trend: "down" },
        dealsClosed: { value: 18, target: 15, trend: "up" },
        commission: { value: 452300, target: 400000, trend: "up" },
        monthlyRanking: 2,
        totalAgents: 24,
      });

      setAnalyticsData({
        monthlyRevenue: [45000, 52000, 48000, 61000, 58000, 72000, 68000],
        propertyViews: [156, 189, 203, 178, 245, 287, 310],
        clientEngagement: 78,
        topAreas: ["Sandton", "Morningside", "Bryanston", "Rosebank"],
      });

      setReports([
        {
          id: 1,
          name: "Monthly Sales Report",
          date: "Feb 2024",
          size: "2.4 MB",
        },
        {
          id: 2,
          name: "Client Acquisition Analysis",
          date: "Jan 2024",
          size: "1.8 MB",
        },
        {
          id: 3,
          name: "Market Trends Q4 2023",
          date: "Dec 2023",
          size: "3.2 MB",
        },
        { id: 4, name: "Performance Review", date: "Nov 2023", size: "1.5 MB" },
      ]);

      setLoading(false);
    }, 500);
  }, []);

  // Enhanced left panel items with click functionality
  const leftPanelItems = [
    { id: "overview", icon: <BarChart3 size={20} />, label: "Overview" },
    { id: "properties", icon: <Home size={20} />, label: "Properties" },
    { id: "reports", icon: <FileText size={20} />, label: "Reports" },
    { id: "analytics", icon: <PieChart size={20} />, label: "Analytics" },
    { id: "performance", icon: <TrendingUp size={20} />, label: "Performance" },
    { id: "messages", icon: <MessageSquare size={20} />, label: "Messages" },
    { id: "schedule", icon: <Calendar size={20} />, label: "Schedule" },
    { id: "clients", icon: <Users size={20} />, label: "Clients" },
  ];

  // Function to handle adding new property
  const addNewProperty = () => {
    const newProperty = {
      id: properties.length + 1,
      name: `New Property ${properties.length + 1}`,
      location: "Location TBD",
      price: "R 0",
      status: "Draft",
      views: 0,
      bedrooms: 0,
      bathrooms: 0,
      size: "0m²",
      image: "",
      tags: ["New"],
    };
    setProperties([...properties, newProperty]);
    // Switch to properties tab when adding new property
    setActiveTab("properties");
  };

  // Function to mark message as read
  const markAsRead = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, unread: false } : msg))
    );
  };

  // Function to send new message
  const sendMessage = () => {
    if (clientMessages.trim()) {
      const newMessage = {
        id: messages.length + 1,
        name: "You",
        time: "Just now",
        message: clientMessages,
        unread: false,
        avatar: "JS",
      };
      setMessages([newMessage, ...messages]);
      setClientMessages("");
      // Switch to messages tab
      setActiveTab("messages");
    }
  };

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Welcome Back, John!
              </h2>
              <p className="text-slate-600">
                Here's your dashboard overview for today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-100 rounded-xl">
                    <Trophy className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Current Rank</h3>
                    <p className="text-2xl font-black text-slate-900">#2</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Top 10% of all agents</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <DollarSign className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">This Month</h3>
                    <p className="text-2xl font-black text-slate-900">
                      R 85,240
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">Commission earned</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Active Clients</h3>
                    <p className="text-2xl font-black text-slate-900">24</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500">3 new this week</p>
              </div>
            </div>
          </div>
        );

      case "reports":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Reports & Documents
              </h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download size={16} /> Generate Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-2xl border p-6 hover:border-blue-200 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-100 rounded-xl">
                      <FileText className="text-slate-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">
                        {report.name}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {report.date} • {report.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Analytics Dashboard
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  Monthly Revenue Trend
                </h3>
                <div className="h-48 flex items-end gap-2">
                  {analyticsData.monthlyRevenue?.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(value / 80000) * 100}%` }}
                      />
                      <span className="text-xs text-slate-500 mt-2">
                        W{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-sm">
                  <span className="text-slate-600">Weekly Revenue</span>
                  <span className="font-bold text-slate-900">
                    R{" "}
                    {analyticsData.monthlyRevenue
                      ?.slice(-1)[0]
                      ?.toLocaleString() || "0"}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  Top Areas by Interest
                </h3>
                <div className="space-y-4">
                  {analyticsData.topAreas?.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-slate-700">{area}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                            style={{ width: `${(4 - index) * 25}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-900">
                          {(4 - index) * 25}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "clients":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Client Management
              </h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus size={16} /> Add Client
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border p-6 hover:border-blue-200 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      CL
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Client {i}</h3>
                      <p className="text-sm text-slate-500">Active • Premium</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Properties:</span>
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Last Contact:</span>
                      <span className="font-bold">2 days ago</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200">
                      Message
                    </button>
                    <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                      Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        // Default view (shows properties and schedule)
        return (
          <>
            {/* Properties Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    My Properties
                  </h2>
                  <p className="text-sm text-slate-500">
                    {properties.length} active listings
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <Filter size={16} /> Filter
                  </button>
                  <button
                    onClick={addNewProperty}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <Plus size={16} /> Add New
                  </button>
                </div>
              </div>

              <div className="divide-y">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="p-6 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex gap-4">
                      {property.image && (
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={property.image}
                            alt={property.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-slate-900">
                              {property.name}
                            </h3>
                            <p className="text-sm text-slate-500 flex items-center gap-1">
                              <MapPin size={14} /> {property.location}
                            </p>
                          </div>
                          <span className="text-lg font-black text-blue-700">
                            {property.price}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Home size={14} /> {property.bedrooms} beds
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Briefcase size={14} /> {property.bathrooms} baths
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <span className="font-bold">·</span> {property.size}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            {property.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                property.status === "Active"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : property.status === "Under Offer"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {property.status}
                            </span>
                            <div className="flex items-center gap-1 text-slate-500">
                              <Eye size={14} /> {property.views}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Today's Schedule
                  </h2>
                  <p className="text-sm text-slate-500">3 appointments today</p>
                </div>
                <Calendar className="text-slate-300" size={20} />
              </div>

              <div className="space-y-4">
                <ScheduleItem
                  title="Property Viewing"
                  person="John Doe"
                  location="Sandton Apartment"
                  time="10:00 AM"
                  status="confirmed"
                />
                <ScheduleItem
                  title="Contract Signing"
                  person="Jane Smith"
                  location="Morningside Villa"
                  time="2:00 PM"
                  status="confirmed"
                />
                <ScheduleItem
                  title="Initial Consultation"
                  person="Mike Johnson"
                  location="Virtual Meeting"
                  time="4:30 PM"
                  status="pending"
                />
              </div>
            </div>
          </>
        );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans">
      {/* Left Panel - Navigation */}
      <div className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-blue-600">Agent Portal</h2>
        </div>

        <div className="flex-1 p-4 space-y-1">
          {leftPanelItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                console.log(`Switching to tab: ${item.id}`);
                setActiveTab(item.id);
              }}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600 font-bold border border-blue-100"
                  : "text-slate-500 hover:bg-slate-50 hover:border hover:border-slate-100"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
              {activeTab === item.id && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </button>
          ))}
        </div>

        <div className="p-4 border-t mt-auto">
          <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-1">
              <Trophy size={16} className="text-amber-500" />
              <span className="text-xs font-bold text-amber-700">Rank #2</span>
            </div>
            <p className="text-[10px] text-amber-600">
              Top 10% agent this month
            </p>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-600">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} •
                Online
              </span>
            </div>
            <div className="relative">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <p className="text-sm font-bold text-slate-900">John Smith</p>
              <p className="text-[10px] text-slate-400 font-medium uppercase">
                Senior Real Estate Agent
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              JS
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Tab Indicator */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900 capitalize">
              {activeTab === "overview" ? "Dashboard Overview" : activeTab}
            </h1>
            <p className="text-slate-500">
              {activeTab === "overview"
                ? "Welcome to your agent dashboard"
                : `Manage your ${activeTab} here`}
            </p>
          </div>

          {/* Metric Cards (Only show on overview) */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Commission"
                value={`R ${
                  performanceData.commission?.value.toLocaleString() || "0"
                }`}
                change={`${
                  performanceData.commission?.trend === "up" ? "+" : "-"
                }12% this month`}
                icon={
                  <span className="text-emerald-500 font-bold text-xl">R</span>
                }
                trend={performanceData.commission?.trend}
              />
              <MetricCard
                title="Target Progress"
                value="21%"
                change="R 125 000 of R 600 000"
                icon={<Target className="text-blue-500" size={24} />}
                trend="neutral"
              />
              <MetricCard
                title="Deals Closed"
                value={performanceData.dealsClosed?.value || "0"}
                change={`Rank: ${performanceData.monthlyRanking || "N/A"} of ${
                  performanceData.totalAgents || "0"
                }`}
                icon={<Trophy className="text-purple-500" size={24} />}
                trend={performanceData.dealsClosed?.trend}
              />
              <MetricCard
                title="Current Location"
                value="Sandton CBD"
                change="Johannesburg"
                icon={<MapPin className="text-orange-500" size={24} />}
                trend="neutral"
              />
            </div>
          )}

          {/* Tab Content */}
          <div className={activeTab === "overview" ? "" : "space-y-8"}>
            {renderTabContent()}
          </div>

          {/* Messages & Performance (Right Column - Only on overview) */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">{renderTabContent()}</div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Messages Section */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-slate-800">
                        Client Messages
                      </h2>
                      <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full font-bold">
                        {messages.filter((m) => m.unread).length} unread
                      </span>
                    </div>
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                        size={16}
                      />
                      <input
                        type="text"
                        placeholder="Search messages..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-300"
                      />
                    </div>
                  </div>

                  <div className="divide-y max-h-[300px] overflow-y-auto">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`p-4 hover:bg-slate-50/50 transition-colors cursor-pointer ${
                          msg.unread ? "bg-blue-50/30" : ""
                        }`}
                        onClick={() => markAsRead(msg.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {msg.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-slate-900 text-sm truncate">
                                {msg.name}
                              </h4>
                              <span className="text-xs text-slate-400 whitespace-nowrap">
                                {msg.time}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 truncate">
                              {msg.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t">
                    <textarea
                      value={clientMessages}
                      onChange={(e) => setClientMessages(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm text-slate-600 h-24 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                      placeholder="Type your message..."
                    />
                    <button
                      onClick={sendMessage}
                      className="w-full mt-3 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm"
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-slate-800 mb-6">
                    Performance Metrics
                  </h2>
                  <div className="space-y-6">
                    <PerformanceMetric
                      label="Conversion Rate"
                      value={`${performanceData.conversionRate?.value || 0}%`}
                      target={`${performanceData.conversionRate?.target || 0}%`}
                      trend={performanceData.conversionRate?.trend}
                    />
                    <PerformanceMetric
                      label="Client Satisfaction"
                      value={`${
                        performanceData.clientSatisfaction?.value || 0
                      }/5`}
                      target={`${
                        performanceData.clientSatisfaction?.target || 0
                      }/5`}
                      trend={performanceData.clientSatisfaction?.trend}
                    />
                    <PerformanceMetric
                      label="Avg Response Time"
                      value={`${performanceData.responseTime?.value || 0} min`}
                      target={`${
                        performanceData.responseTime?.target || 0
                      } min`}
                      trend={performanceData.responseTime?.trend}
                      inverseTrend={true}
                    />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-slate-800 mb-6">
                    Quick Actions
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <ActionButton
                      icon={<BarChart3 className="text-blue-600" size={20} />}
                      label="Commission Report"
                      onClick={() => setActiveTab("reports")}
                    />
                    <ActionButton
                      icon={<Calendar className="text-emerald-600" size={20} />}
                      label="Schedule"
                      onClick={() => setActiveTab("schedule")}
                    />
                    <ActionButton
                      icon={
                        <MessageSquare className="text-purple-600" size={20} />
                      }
                      label="New Message"
                      onClick={() => setActiveTab("messages")}
                    />
                    <ActionButton
                      icon={<MapPin className="text-orange-600" size={20} />}
                      label="Update Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* Sub-components */

const MetricCard = ({ title, value, change, icon, trend }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
        {title}
      </p>
      <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-1">{value}</h3>
    <div className="flex items-center gap-1">
      <span
        className={`text-xs font-bold ${
          trend === "up"
            ? "text-emerald-500"
            : trend === "down"
            ? "text-red-500"
            : "text-blue-500"
        }`}
      >
        {trend === "up" ? (
          <TrendingUp size={12} />
        ) : trend === "down" ? (
          <TrendingDown size={12} />
        ) : null}
      </span>
      <p
        className={`text-[11px] font-medium ${
          trend === "up"
            ? "text-emerald-500"
            : trend === "down"
            ? "text-red-500"
            : "text-blue-500"
        }`}
      >
        {change}
      </p>
    </div>
  </div>
);

const ScheduleItem = ({ title, person, location, time, status }: any) => (
  <div className="bg-white border border-slate-100 rounded-xl p-5 hover:border-blue-200 transition-all flex justify-between items-center">
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
        <span
          className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
            status === "confirmed"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status === "confirmed" ? "✓ Confirmed" : "Pending"}
        </span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-slate-600 text-xs">
          <User size={12} /> {person}
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <MapPin size={12} /> {location}
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
          <Clock size={12} /> {time}
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="p-2 border border-blue-100 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
        <Phone size={16} />
      </button>
      <button className="px-3 py-1 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50">
        Reschedule
      </button>
    </div>
  </div>
);

const PerformanceMetric = ({
  label,
  value,
  target,
  trend,
  inverseTrend = false,
}: any) => {
  const isPositive = inverseTrend ? trend === "down" : trend === "up";
  const percent = Math.min(
    100,
    Math.max(0, (parseFloat(value) / parseFloat(target)) * 100)
  );

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-slate-900">{value}</span>
          {trend && (
            <span
              className={`text-xs ${
                isPositive ? "text-emerald-500" : "text-red-500"
              }`}
            >
              {isPositive ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
            </span>
          )}
        </div>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-700 ${
            percent >= 100
              ? "bg-emerald-500"
              : percent >= 80
              ? "bg-blue-500"
              : percent >= 60
              ? "bg-amber-500"
              : "bg-red-500"
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500">
        <span>Target: {target}</span>
        <span>{Math.round(percent)}% of target</span>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, onClick }: any) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl aspect-square gap-3 hover:bg-slate-50 hover:border-blue-200 transition-all group"
  >
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-xs font-medium text-slate-700 text-center leading-tight">
      {label}
    </span>
  </button>
);

export default AgentDashboard;
