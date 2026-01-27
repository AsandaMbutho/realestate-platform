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
  Smartphone,
  Globe,
  Zap,
  Activity,
  Cloud,
  Award as AwardIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Download as DownloadIcon,
  Send,
  X,
  ChevronDown,
  AlertTriangle,
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
  const [showTour, setShowTour] = useState(true);
  const [showCommissionBreakdown, setShowCommissionBreakdown] = useState(false);
  const [demoMode] = useState(true);

  // Enhanced mock data initialization
  useEffect(() => {
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
          interestScore: 94,
          daysOnMarket: 12,
          inquiries: 28,
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
          interestScore: 87,
          daysOnMarket: 8,
          inquiries: 18,
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
          interestScore: 76,
          daysOnMarket: 24,
          inquiries: 12,
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
          priority: "high",
        },
        {
          id: 2,
          name: "Sarah Wilson",
          time: "Yesterday",
          message: "I've signed the documents, please check",
          unread: false,
          avatar: "SW",
          priority: "medium",
        },
        {
          id: 3,
          name: "Robert Chen",
          time: "2 days ago",
          message: "Interested in the penthouse. Available this weekend?",
          unread: false,
          avatar: "RC",
          priority: "high",
        },
        {
          id: 4,
          name: "Lisa Brown",
          time: "3 days ago",
          message: "Thank you for the excellent service!",
          unread: false,
          avatar: "LB",
          priority: "low",
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
        efficiencyScore: 92,
        repeatClients: 65,
        referralRate: 42,
      });

      setAnalyticsData({
        monthlyRevenue: [45000, 52000, 48000, 61000, 58000, 72000, 68000],
        propertyViews: [156, 189, 203, 178, 245, 287, 310],
        clientEngagement: 78,
        topAreas: ["Sandton", "Morningside", "Bryanston", "Rosebank"],
        marketShare: 18,
        leadSources: {
          website: 45,
          referrals: 32,
          social: 15,
          other: 8,
        },
      });

      setReports([
        {
          id: 1,
          name: "Monthly Sales Report",
          date: "Feb 2024",
          size: "2.4 MB",
          type: "sales",
        },
        {
          id: 2,
          name: "Client Acquisition Analysis",
          date: "Jan 2024",
          size: "1.8 MB",
          type: "analytics",
        },
        {
          id: 3,
          name: "Market Trends Q4 2023",
          date: "Dec 2023",
          size: "3.2 MB",
          type: "market",
        },
        { id: 4, name: "Performance Review", date: "Nov 2023", size: "1.5 MB", type: "performance" },
        {
          id: 5,
          name: "Commission Breakdown",
          date: "Oct 2023",
          size: "1.2 MB",
          type: "finance",
        },
      ]);

      setLoading(false);
    }, 500);
  }, []);

  // Enhanced left panel items with better icons
  const leftPanelItems = [
    { id: "overview", icon: <BarChart3 size={20} />, label: "Overview" },
    { id: "properties", icon: <Home size={20} />, label: "Properties" },
    { id: "reports", icon: <FileText size={20} />, label: "Reports" },
    { id: "analytics", icon: <PieChart size={20} />, label: "Analytics" },
    { id: "performance", icon: <TrendingUp size={20} />, label: "Performance" },
    { id: "messages", icon: <MessageSquare size={20} />, label: "Messages", badge: 3 },
    { id: "schedule", icon: <Calendar size={20} />, label: "Schedule" },
    { id: "clients", icon: <Users size={20} />, label: "Clients" },
    { id: "integrations", icon: <Globe size={20} />, label: "Integrations" },
  ];

  // Interactive demo handlers
  const handleDemoFeature = (feature: string) => {
    const messages: Record<string, string> = {
      ai: "AI Assistant: Would analyze your performance patterns and suggest improvement areas based on market trends.",
      mobile: "Mobile App: Full-featured mobile application with offline capabilities and push notifications.",
      integrations: "Integrations: Connect with Zillow, MLS, QuickBooks, and other real estate platforms.",
      automation: "Workflow Automation: Automatically schedule follow-ups, send property updates, and manage documents.",
      insights: "Market Insights: Real-time market analysis and competitive intelligence.",
      predictive: "Predictive Analytics: Forecast property prices and client interest levels.",
    };
    alert(messages[feature] || `Demo: ${feature} feature`);
  };

  // Enhanced commission data
  const commissionData = [
    { month: 'Jan', amount: 120000, deals: 8 },
    { month: 'Feb', amount: 145000, deals: 9 },
    { month: 'Mar', amount: 187000, deals: 12 },
    { month: 'Apr', amount: 165000, deals: 10 },
    { month: 'May', amount: 210000, deals: 14 },
    { month: 'Jun', amount: 245000, deals: 18 },
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
      interestScore: 0,
      daysOnMarket: 0,
      inquiries: 0,
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
        priority: "medium",
      };
      setMessages([newMessage, ...messages]);
      setClientMessages("");
      // Switch to messages tab
      setActiveTab("messages");
    }
  };

  // Enhanced renderTabContent function with all new features
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Demo Mode Banner */}
            {showTour && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white relative">
                <button 
                  onClick={() => setShowTour(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <AwardIcon size={24} className="text-yellow-300" />
                  <div>
                    <h3 className="text-lg font-bold">Interactive Demo Mode</h3>
                    <p className="text-sm opacity-90">Try AI Assistant • Mobile View • Integrations</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Welcome Back, John! <span className="text-green-600">👋</span>
                  </h2>
                  <p className="text-slate-600">
                    You're ranked <span className="font-bold text-blue-600">#2</span> this month. Keep up the great work!
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    <CheckCircle2 size={12} className="inline mr-1" /> Checked In
                  </span>
                  <button 
                    onClick={() => setShowCommissionBreakdown(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-bold text-sm"
                  >
                    <BarChart size={16} /> Commission Analytics
                  </button>
                </div>
              </div>
            </div>

            {/* Commission Breakdown Modal */}
            {showCommissionBreakdown && (
              <div className="bg-white rounded-2xl border shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Commission Breakdown</h3>
                  <button onClick={() => setShowCommissionBreakdown(false)}>
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {commissionData.slice(-3).map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500">{item.month}</p>
                      <p className="text-xl font-bold text-slate-900">R {item.amount.toLocaleString()}</p>
                      <p className="text-xs text-blue-600">{item.deals} deals</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 text-center">
                  Total YTD: R 1,072,000
                </p>
              </div>
            )}

            {/* Demo Controls */}
            <div className="flex items-center gap-4 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl">
              <span className="text-xs font-bold text-blue-600">DEMO MODE</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleDemoFeature('ai')}
                  className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg font-bold hover:bg-blue-200"
                >
                  AI Assistant
                </button>
                <button 
                  onClick={() => handleDemoFeature('mobile')}
                  className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-lg font-bold hover:bg-purple-200"
                >
                  Mobile View
                </button>
                <button 
                  onClick={() => handleDemoFeature('integrations')}
                  className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-lg font-bold hover:bg-green-200"
                >
                  Integrations
                </button>
              </div>
            </div>

            {/* Existing Overview Content */}
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

            {/* Properties & Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  {properties.slice(0, 2).map((property) => (
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
                              {property.tags.slice(0, 2).map((tag, idx) => (
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
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Advanced Analytics
                </h2>
                <p className="text-slate-600">Data-driven insights and market intelligence</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <DownloadIcon size={18} /> Export Data
                </button>
                <button 
                  onClick={() => handleDemoFeature('predictive')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm"
                >
                  <TrendingUpIcon size={18} /> Predictive View
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <EnhancedMetricCard
                title="Market Position"
                value="Top 10%"
                change="+2 positions this month"
                icon={<TrendingUp className="text-green-500" />}
                trend="up"
              />
              <EnhancedMetricCard
                title="Efficiency Score"
                value="92/100"
                change="Team avg: 85"
                icon={<Zap className="text-blue-500" />}
                trend="up"
              />
              <EnhancedMetricCard
                title="Repeat Clients"
                value="65%"
                change="Industry avg: 52%"
                icon={<Users className="text-purple-500" />}
                trend="up"
              />
              <EnhancedMetricCard
                title="Referral Rate"
                value="42%"
                change="+8% this quarter"
                icon={<Share2 className="text-amber-500" />}
                trend="up"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Revenue Analysis */}
                <div className="bg-white rounded-2xl border p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl text-slate-800">Revenue Analysis</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-bold">
                        +24% Growth
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <AgentRevenueChart />
                  </div>
                </div>

                {/* Property Performance */}
                <div className="bg-white rounded-2xl border p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl text-slate-800">Property Performance</h3>
                    <Home size={20} className="text-gray-300" />
                  </div>
                  
                  <div className="space-y-4">
                    {properties.map((property, index) => (
                      <div key={index} className="p-4 border rounded-2xl hover:border-blue-200 transition-colors">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-slate-800">{property.name}</h4>
                          <div className="flex gap-4">
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Eye size={12} /> {property.views}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <MessageSquare size={12} /> {property.inquiries}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Heart size={12} /> Interest: {property.interestScore}%
                          </span>
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500"
                              style={{ width: `${property.interestScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Client Insights */}
                <div className="bg-white rounded-2xl border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">Client Insights</h3>
                    <Users className="text-blue-500" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-800">High Value</span>
                        <span className="text-xs font-bold text-blue-600">8 Clients</span>
                      </div>
                      <p className="text-xs text-slate-600">Avg deal size: R 2.1M</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-800">Repeat Clients</span>
                        <span className="text-xs font-bold text-green-600">65%</span>
                      </div>
                      <p className="text-xs text-slate-600">Higher retention rate</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-800">Referral Rate</span>
                        <span className="text-xs font-bold text-purple-600">42%</span>
                      </div>
                      <p className="text-xs text-slate-600">From existing clients</p>
                    </div>
                  </div>
                </div>

                {/* Performance Tips */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Performance Tips</h3>
                    <Zap className="text-yellow-300" size={20} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <p className="text-xs text-blue-200 mb-1">Improvement Area</p>
                      <p className="text-sm font-bold">Follow-up Timing</p>
                      <p className="text-xs text-amber-300">Respond within 1 hour</p>
                    </div>
                    
                    <div className="p-3 bg-white/10 rounded-xl">
                      <p className="text-xs text-blue-200 mb-1">Opportunity</p>
                      <p className="text-sm font-bold">Luxury Segment</p>
                      <p className="text-xs text-green-300">High commission potential</p>
                    </div>
                    
                    <div className="p-3 bg-white/10 rounded-xl">
                      <p className="text-xs text-blue-200 mb-1">Best Practice</p>
                      <p className="text-sm font-bold">Virtual Tours</p>
                      <p className="text-xs text-blue-300">Increase engagement 3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "performance":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Performance Analytics
                </h2>
                <p className="text-slate-600">Track your metrics and growth over time</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <DownloadIcon size={18} /> Export
                </button>
                <button 
                  onClick={() => handleDemoFeature('insights')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-sm"
                >
                  <TrendingUpIcon size={18} /> View Trends
                </button>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <EnhancedMetricCard
                title="Personal Efficiency"
                value="94%"
                change="+8% this month"
                icon={<Activity className="text-green-500" />}
                trend="up"
              />
              <EnhancedMetricCard
                title="Avg Response Time"
                value="8 min"
                change="-2 min vs last month"
                icon={<Clock className="text-blue-500" />}
                trend="up"
              />
              <EnhancedMetricCard
                title="Client Rating"
                value="4.9/5"
                change="+0.2 from last quarter"
                icon={<Star className="text-amber-500" />}
                trend="up"
              />
              <EnhancedMetricCard
                title="Conversion Rate"
                value="32%"
                change="Team avg: 28%"
                icon={<Percent className="text-purple-500" />}
                trend="up"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Performance Chart */}
                <div className="bg-white rounded-2xl border p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl text-slate-800">Performance Trends</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">
                        Last 6 Months
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <AgentPerformanceChart />
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-white rounded-2xl border p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-xl text-slate-800">Key Metrics</h3>
                    <TargetIcon size={20} className="text-gray-300" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <KPIMetric
                      title="Lead Conversion"
                      current="42%"
                      target="35%"
                      progress={120}
                      color="bg-green-500"
                    />
                    <KPIMetric
                      title="Client Meetings"
                      current="28"
                      target="25"
                      progress={112}
                      color="bg-blue-500"
                    />
                    <KPIMetric
                      title="Deal Value"
                      current="R 2.4M"
                      target="R 2M"
                      progress={120}
                      color="bg-purple-500"
                    />
                    <KPIMetric
                      title="Repeat Clients"
                      current="65%"
                      target="60%"
                      progress={108}
                      color="bg-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Achievement Badges */}
                <div className="bg-white rounded-2xl border p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">Achievements</h3>
                    <Award className="text-amber-400" size={20} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl text-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Star size={16} className="text-blue-600" />
                      </div>
                      <p className="text-xs font-bold text-slate-800">Top Performer</p>
                      <p className="text-[10px] text-slate-500">3 months</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl text-center">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Zap size={16} className="text-green-600" />
                      </div>
                      <p className="text-xs font-bold text-slate-800">Fast Responder</p>
                      <p className="text-[10px] text-slate-500">Avg 8 min</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl text-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <TrendingUp size={16} className="text-purple-600" />
                      </div>
                      <p className="text-xs font-bold text-slate-800">Growth Star</p>
                      <p className="text-[10px] text-slate-500">+24% revenue</p>
                    </div>
                    
                    <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl text-center">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Heart size={16} className="text-amber-600" />
                      </div>
                      <p className="text-xs font-bold text-slate-800">Client Favorite</p>
                      <p className="text-[10px] text-slate-500">4.9 rating</p>
                    </div>
                  </div>
                </div>

                {/* Personal Goals */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800">My Goals</h3>
                    <TargetIcon className="text-blue-500" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <GoalProgress
                      title="Monthly Commission"
                      current="R 125K"
                      target="R 150K"
                      progress={83}
                    />
                    <GoalProgress
                      title="New Clients"
                      current="8"
                      target="12"
                      progress={67}
                    />
                    <GoalProgress
                      title="Property Listings"
                      current="15"
                      target="20"
                      progress={75}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "integrations":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Integrations
                </h2>
                <p className="text-slate-600">Connect with your favorite tools and services</p>
              </div>
              <button 
                onClick={() => handleDemoFeature('integrations')}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-sm"
              >
                <Plus size={18} /> Add Integration
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Zillow API",
                  description: "Sync property listings automatically",
                  status: "connected",
                  icon: "🏠",
                  color: "from-blue-50 to-cyan-50",
                },
                {
                  name: "QuickBooks",
                  description: "Automated commission tracking",
                  status: "connected",
                  icon: "💰",
                  color: "from-green-50 to-emerald-50",
                },
                {
                  name: "MLS",
                  description: "Real-time market data",
                  status: "connected",
                  icon: "📊",
                  color: "from-purple-50 to-pink-50",
                },
                {
                  name: "DocuSign",
                  description: "Electronic document signing",
                  status: "pending",
                  icon: "📝",
                  color: "from-amber-50 to-orange-50",
                },
                {
                  name: "Google Calendar",
                  description: "Sync appointments",
                  status: "connected",
                  icon: "📅",
                  color: "from-red-50 to-rose-50",
                },
                {
                  name: "Mailchimp",
                  description: "Email marketing automation",
                  status: "not-connected",
                  icon: "✉️",
                  color: "from-slate-50 to-gray-50",
                },
              ].map((integration, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${integration.color} rounded-2xl border p-6 hover:shadow-md transition-all`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl">{integration.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">{integration.name}</h3>
                      <p className="text-sm text-slate-600">{integration.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      integration.status === 'connected' 
                        ? 'bg-green-100 text-green-700'
                        : integration.status === 'pending'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {integration.status}
                    </span>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Automation */}
            <div className="bg-white rounded-2xl border p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Workflow Automation</h3>
                  <p className="text-slate-600">Automate repetitive tasks with smart workflows</p>
                </div>
                <button 
                  onClick={() => handleDemoFeature('automation')}
                  className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                >
                  DEMO
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Lead Assignment</p>
                      <p className="text-xs text-slate-500">Auto-assigns based on specialty</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Bell size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">Follow-up Reminders</p>
                      <p className="text-xs text-slate-500">Automated 24-hour follow-ups</p>
                    </div>
                  </div>
                </div>
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

      case "messages":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Messages
              </h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus size={16} /> New Message
              </button>
            </div>

            <div className="bg-white rounded-2xl border p-6">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-xl border ${
                      msg.unread ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        msg.priority === 'high' 
                          ? 'bg-gradient-to-br from-red-400 to-red-500'
                          : msg.priority === 'medium'
                          ? 'bg-gradient-to-br from-blue-400 to-blue-500'
                          : 'bg-gradient-to-br from-green-400 to-green-500'
                      }`}>
                        {msg.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900">{msg.name}</h4>
                            {msg.unread && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                                New
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400">{msg.time}</span>
                        </div>
                        <p className="text-sm text-slate-600">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "schedule":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Schedule
              </h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus size={16} /> Add Event
              </button>
            </div>

            <div className="bg-white rounded-2xl border p-6">
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
          </div>
        );

      case "properties":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Properties
              </h2>
              <button
                onClick={addNewProperty}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus size={16} /> Add Property
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    All Properties
                  </h2>
                  <p className="text-sm text-slate-500">
                    {properties.length} active listings
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <Filter size={16} /> Filter
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
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 capitalize">
              {activeTab}
            </h2>
            <p className="text-slate-500">
              This feature is under development
            </p>
          </div>
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
      {/* Enhanced Left Panel */}
      <div className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-blue-600">Agent Portal</h2>
          <p className="text-xs text-slate-400 mt-1">AI-Powered Dashboard</p>
        </div>

        <div className="flex-1 p-4 space-y-1">
          {leftPanelItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all relative ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600 font-bold border border-blue-100"
                  : "text-slate-500 hover:bg-slate-50 hover:border hover:border-slate-100"
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
              {item.badge && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {activeTab === item.id && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="p-4 border-t mt-auto space-y-4">
          {/* System Health */}
          <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-xs font-bold text-slate-800">System Health</h4>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-green-600">100%</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-500">Real-time sync active</p>
          </div>

          {/* Achievement Badge */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-1">
              <Trophy size={16} className="text-amber-500" />
              <span className="text-xs font-bold text-amber-700">Rank #2</span>
            </div>
            <p className="text-[10px] text-amber-600">
              Top 10% agent • R 85K this month
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
        {/* Enhanced Header */}
        <div className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-600">
                {activeTab.toUpperCase()} • LIVE DATA
              </span>
            </div>
            <div className="relative">
              <Bell size={20} className="text-slate-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
          </div>

          {/* Enhanced User Info */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-sm font-bold text-slate-900">John Smith</p>
              <div className="flex items-center justify-end gap-2">
                <span className="text-[10px] text-slate-400 font-medium uppercase">
                  Senior Agent
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  TOP 10%
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm relative">
              JS
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Enhanced Tab Indicator */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-slate-900 capitalize">
                {activeTab === "overview" ? "Agent Dashboard" : activeTab}
              </h1>
              {activeTab === "overview" && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  LIVE DATA
                </span>
              )}
            </div>
            <p className="text-slate-500">
              {activeTab === "overview"
                ? "AI-powered insights and real-time analytics"
                : `Manage your ${activeTab} with intelligent tools`}
            </p>
          </div>

          {/* Enhanced Metric Cards for Overview */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <EnhancedMetricCard
                title="Total Commission"
                value={`R ${
                  performanceData.commission?.value.toLocaleString() || "0"
                }`}
                change={`${
                  performanceData.commission?.trend === "up" ? "+" : "-"
                }12% this month`}
                icon={<DollarSign className="text-emerald-500" size={24} />}
                trend={performanceData.commission?.trend}
                onClick={() => setShowCommissionBreakdown(true)}
              />
              <EnhancedMetricCard
                title="Target Progress"
                value="21%"
                change="R 125 000 of R 600 000"
                icon={<Target className="text-blue-500" size={24} />}
                trend="up"
                onClick={() => alert("View detailed target analysis")}
              />
              <EnhancedMetricCard
                title="Deals Closed"
                value={performanceData.dealsClosed?.value || "0"}
                change={`Rank: ${performanceData.monthlyRanking || "N/A"} of ${
                  performanceData.totalAgents || "0"
                }`}
                icon={<Trophy className="text-purple-500" size={24} />}
                trend={performanceData.dealsClosed?.trend}
                onClick={() => setActiveTab("performance")}
              />
              <EnhancedMetricCard
                title="Efficiency Score"
                value="92/100"
                change="+8 points this month"
                icon={<Zap className="text-amber-500" size={24} />}
                trend="up"
                onClick={() => handleDemoFeature('ai')}
              />
            </div>
          )}

          {/* Tab Content */}
          <div className={activeTab === "overview" ? "" : "space-y-8"}>
            {renderTabContent()}
          </div>

          {/* Enhanced Messages & Performance (Right Column - Only on overview) */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                {/* Existing properties and schedule content */}
                {/* This will be rendered from the overview case */}
              </div>

              {/* Enhanced Right Column */}
              <div className="space-y-8">
                {/* Enhanced Messages Section */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-slate-800">
                        Client Messages
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full font-bold">
                          {messages.filter((m) => m.unread).length} unread
                        </span>
                        <button className="text-blue-600 hover:text-blue-700">
                          <Plus size={16} />
                        </button>
                      </div>
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
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                            msg.priority === 'high' 
                              ? 'bg-gradient-to-br from-red-400 to-red-500'
                              : msg.priority === 'medium'
                              ? 'bg-gradient-to-br from-blue-400 to-blue-500'
                              : 'bg-gradient-to-br from-green-400 to-green-500'
                          }`}>
                            {msg.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-slate-900 text-sm truncate">
                                  {msg.name}
                                </h4>
                                {msg.priority === 'high' && (
                                  <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                                    High
                                  </span>
                                )}
                              </div>
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
                    <div className="flex gap-2 mb-3">
                      <button className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                        Quick Reply
                      </button>
                      <button className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
                        Schedule
                      </button>
                      <button className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">
                        Templates
                      </button>
                    </div>
                    <textarea
                      value={clientMessages}
                      onChange={(e) => setClientMessages(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl p-3 text-sm text-slate-600 h-24 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                      placeholder="Type your message or use AI assistant..."
                    />
                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={sendMessage}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors text-sm"
                      >
                        Send Message
                      </button>
                      <button 
                        onClick={() => handleDemoFeature('ai')}
                        className="px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:opacity-90 transition-colors text-sm"
                      >
                        AI
                      </button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Performance Metrics */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-slate-800">
                      Performance Insights
                    </h2>
                    <button 
                      onClick={() => setActiveTab("performance")}
                      className="text-xs text-blue-600 font-bold hover:text-blue-700"
                    >
                      View All →
                    </button>
                  </div>
                  <div className="space-y-6">
                    <EnhancedPerformanceMetric
                      label="Conversion Rate"
                      value={`${performanceData.conversionRate?.value || 0}%`}
                      target={`${performanceData.conversionRate?.target || 0}%`}
                      trend={performanceData.conversionRate?.trend}
                      insights="Above team average"
                    />
                    <EnhancedPerformanceMetric
                      label="Client Satisfaction"
                      value={`${
                        performanceData.clientSatisfaction?.value || 0
                      }/5`}
                      target={`${
                        performanceData.clientSatisfaction?.target || 0
                      }/5`}
                      trend={performanceData.clientSatisfaction?.trend}
                      insights="Excellent client feedback"
                    />
                    <EnhancedPerformanceMetric
                      label="Response Time"
                      value={`${performanceData.responseTime?.value || 0} min`}
                      target={`${
                        performanceData.responseTime?.target || 0
                      } min`}
                      trend={performanceData.responseTime?.trend}
                      inverseTrend={true}
                      insights="Faster than target"
                    />
                  </div>
                </div>

                {/* Enhanced Quick Actions */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-slate-800 mb-6">
                    Smart Actions
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <EnhancedActionButton
                      icon={<BarChart className="text-blue-600" size={20} />}
                      label="Analytics"
                      description="View reports"
                      onClick={() => setActiveTab("analytics")}
                    />
                    <EnhancedActionButton
                      icon={<Calendar className="text-emerald-600" size={20} />}
                      label="Schedule"
                      description="Manage calendar"
                      onClick={() => setActiveTab("schedule")}
                    />
                    <EnhancedActionButton
                      icon={<MessageSquare className="text-purple-600" size={20} />}
                      label="Messages"
                      description="AI assistant"
                      onClick={() => setActiveTab("messages")}
                    />
                    <EnhancedActionButton
                      icon={<MapPin className="text-orange-600" size={20} />}
                      label="Location"
                      description="Update status"
                      onClick={() => handleDemoFeature('mobile')}
                    />
                    <EnhancedActionButton
                      icon={<FileText className="text-amber-600" size={20} />}
                      label="Documents"
                      description="E-sign ready"
                      onClick={() => setActiveTab("reports")}
                    />
                    <EnhancedActionButton
                      icon={<Globe className="text-green-600" size={20} />}
                      label="Integrations"
                      description="Connected apps"
                      onClick={() => setActiveTab("integrations")}
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

/* Enhanced Sub-components */

const EnhancedMetricCard = ({ title, value, change, icon, trend, onClick }: any) => (
  <div 
    onClick={onClick}
    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
          {title}
        </p>
        <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
          {value}
        </h3>
      </div>
      <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
    </div>
    <div className="flex justify-between items-center">
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
      <ChevronRight size={12} className="text-slate-300 group-hover:text-blue-400" />
    </div>
  </div>
);

const EnhancedPerformanceMetric = ({
  label,
  value,
  target,
  trend,
  insights,
  inverseTrend = false,
}: any) => {
  const isPositive = inverseTrend ? trend === "down" : trend === "up";
  const percent = Math.min(
    100,
    Math.max(0, (parseFloat(value) / parseFloat(target)) * 100)
  );

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <span className="text-sm font-medium text-slate-700">{label}</span>
          {insights && (
            <p className="text-xs text-slate-400 mt-0.5">{insights}</p>
          )}
        </div>
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

const EnhancedActionButton = ({ icon, label, description, onClick }: any) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl aspect-square gap-3 hover:bg-slate-50 hover:border-blue-200 transition-all group"
  >
    <div className="group-hover:scale-110 transition-transform duration-200">
      {icon}
    </div>
    <div className="text-center">
      <span className="text-xs font-bold text-slate-900 block leading-tight">
        {label}
      </span>
      <span className="text-[10px] text-slate-500">{description}</span>
    </div>
  </button>
);

/* Chart Components */

const AgentPerformanceChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const performanceData = [85, 88, 92, 90, 87, 94];
  const maxValue = Math.max(...performanceData);
  
  return (
    <div className="relative h-48">
      <div className="absolute inset-0 flex items-end">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center">
            <div 
              className="w-6 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-t-lg"
              style={{ height: `${(performanceData[index] / maxValue) * 100}%` }}
            />
            <span className="text-[10px] text-gray-500 mt-1">{month}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        <div className="text-xs font-bold text-slate-700">Performance Score (%)</div>
      </div>
    </div>
  );
};

const AgentRevenueChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const revenueData = [120, 145, 187, 165, 210, 245];
  const maxValue = Math.max(...revenueData);
  
  return (
    <div className="relative h-48">
      <div className="absolute inset-0 flex items-end">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center">
            <div 
              className="w-6 bg-gradient-to-t from-purple-500 to-pink-300 rounded-t-lg"
              style={{ height: `${(revenueData[index] / maxValue) * 100}%` }}
            />
            <span className="text-[10px] text-gray-500 mt-1">{month}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        <div className="text-xs font-bold text-slate-700">Commission (R thousands)</div>
      </div>
    </div>
  );
};

/* New Components */

const KPIMetric = ({ title, current, target, progress, color }: any) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-700">{title}</span>
        <span className="text-xs font-bold text-slate-900">{current}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Target: {target}</span>
        <span className="font-bold">{progress}%</span>
      </div>
    </div>
  );
};

const GoalProgress = ({ title, current, target, progress }: any) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-700">{title}</span>
        <span className="text-xs font-bold text-slate-900">{current} / {target}</span>
      </div>
      <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-blue-200">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-blue-600 font-bold">{progress}% complete</span>
        <span className="text-gray-500">Target</span>
      </div>
    </div>
  );
};

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

// Add missing icons
const Share2 = ({ size, className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const Percent = ({ size, className }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

export default AgentDashboard;