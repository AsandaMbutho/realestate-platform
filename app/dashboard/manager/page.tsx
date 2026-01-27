"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  Home,
  TrendingUp,
  MapPin,
  AlertTriangle,
  Calendar,
  BarChart,
  MessageSquare,
  Eye,
  Download,
  Send,
  Clock,
  Award,
  Heart,
  Target,
  LayoutDashboard,
  Building2,
  ClipboardList,
  PieChart as PieChartIcon,
  Bell,
  LogOut,
  ChevronRight,
  CheckCircle2,
  X,
  Phone,
  Plus,
  Map,
  Briefcase,
  FileText,
  Search,
  Filter,
  User,
  Mail,
  ChevronDown,
  Star,
  DollarSign,
  TrendingDown,
  Zap,
  Filter as FilterIcon,
  Percent,
  Activity,
  Shield,
  Cloud,
  Smartphone,
  Globe,
} from "lucide-react";

export default function RealEstateDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"manager" | "agent">("manager");
  const [activeTab, setActiveTab] = useState("overview");
  const [notificationCount, setNotificationCount] = useState(3);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar - Shared Structure */}
      <aside className="w-64 bg-white border-r hidden lg:flex flex-col relative">
        <div className="p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-blue-600">RealEstate</h2>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
              Management Portal
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <SidebarLink
            icon={<LayoutDashboard size={20} />}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          {role === "manager" ? (
            <>
              <SidebarLink
                icon={<Users size={20} />}
                label="Agent Management"
                active={activeTab === "agents"}
                onClick={() => setActiveTab("agents")}
              />
              <SidebarLink
                icon={<Building2 size={20} />}
                label="Properties"
                active={activeTab === "props"}
                onClick={() => setActiveTab("props")}
              />
            </>
          ) : (
            <>
              <SidebarLink
                icon={<Briefcase size={20} />}
                label="My Properties"
                active={activeTab === "my-props"}
                onClick={() => setActiveTab("my-props")}
              />
              <SidebarLink
                icon={<Building2 size={20} />}
                label="Properties"
                active={activeTab === "props"}
                onClick={() => setActiveTab("props")}
              />
            </>
          )}
          <SidebarLink
            icon={<TrendingUp size={20} />}
            label="Performance"
            active={activeTab === "perf"}
            onClick={() => setActiveTab("perf")}
          />
          <SidebarLink
            icon={<ClipboardList size={20} />}
            label="Reports"
            active={activeTab === "reports"}
            onClick={() => setActiveTab("reports")}
          />
          <SidebarLink
            icon={<PieChartIcon size={20} />}
            label="Analytics"
            active={activeTab === "analytics"}
            onClick={() => setActiveTab("analytics")}
          />
        </nav>

        {/* Issue Badge as seen in screen */}
        <div className="absolute bottom-6 left-4">
          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold border border-red-200 cursor-pointer">
            <span className="bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px]">
              N
            </span>
            1 Issue <X size={12} className="ml-1" />
          </div>
        </div>

        <div className="p-4 border-t mb-12">
          <button
            onClick={() => setRole(role === "manager" ? "agent" : "manager")}
            className="w-full mb-2 text-[10px] py-1 border rounded bg-gray-50 font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
          >
            Switch View (Demo Only)
          </button>
          <button
            onClick={() => alert("Demo Mode - Exit disabled for presentation")}
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Exit Dashboard</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Demo Controls */}
        <div className="flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
          <span className="text-xs font-bold text-blue-600">DEMO MODE</span>
          <div className="flex gap-2">
            <button 
              onClick={() => alert("AI Assistant Demo: Frontend-only simulation showing UI capabilities")}
              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg font-bold hover:bg-blue-200"
            >
              AI Assistant
            </button>
            <button 
              onClick={() => alert("Mobile App Demo: Shows responsive design across devices")}
              className="px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-lg font-bold hover:bg-purple-200"
            >
              Mobile View
            </button>
            <button 
              onClick={() => alert("Integration Demo: Shows UI for connecting external services")}
              className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-lg font-bold hover:bg-green-200"
            >
              Integrations
            </button>
          </div>
        </div>

        <header className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-medium text-green-600">
              Demo Mode Active
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="flex items-center gap-3 pl-6 border-l">
              <div className="text-right">
                <p className="text-sm font-bold">
                  {role === "manager" ? "Manager User" : "Sarah Johnson"}
                </p>
                <p className="text-[10px] text-gray-400 font-bold uppercase">
                  {role === "manager" ? "Management" : "Real Estate Agent"}
                </p>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  role === "manager" ? "bg-blue-600" : "bg-blue-500"
                }`}
              >
                {role === "manager" ? "M" : "SJ"}
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-[1400px] mx-auto">
          {role === "manager" ? (
            <ManagerView activeTab={activeTab} />
          ) : (
            <AgentView activeTab={activeTab} />
          )}
        </div>
      </main>
    </div>
  );
}

// --- Manager View Component ---

function ManagerView({ activeTab }: { activeTab: string }) {
  const [agents] = useState([
    {
      id: 1,
      name: "John Agent",
      status: "active",
      performance: 94,
      deals: 12,
      revenue: "R 2.4M",
    },
    {
      id: 2,
      name: "Sarah Smith",
      status: "active",
      performance: 87,
      deals: 9,
      revenue: "R 1.8M",
    },
    {
      id: 3,
      name: "Mike Brown",
      status: "inactive",
      performance: 76,
      deals: 7,
      revenue: "R 1.5M",
    },
    {
      id: 4,
      name: "Emma Wilson",
      status: "inactive",
      performance: 65,
      deals: 5,
      revenue: "R 1.2M",
    },
  ]);

  const [properties] = useState([
    {
      id: 1,
      name: "Luxury Apartment",
      location: "Sandton",
      price: "R 2,500,000",
      status: "Active",
      views: 156,
    },
    {
      id: 2,
      name: "Modern Penthouse",
      location: "Sandton City",
      price: "R 4,200,000",
      status: "Under Offer",
      views: 89,
    },
    {
      id: 3,
      name: "Executive Villa",
      location: "Morningside",
      price: "R 18,500,000",
      status: "Active",
      views: 203,
    },
  ]);

  const [showTour, setShowTour] = useState(true);
  const [demoStats] = useState({
    totalRevenue: "R 12.8M",
    avgDealSize: "R 1.2M",
    clientGrowth: "24%",
    marketShare: "18%"
  });

  const handleInteractiveDemo = (feature: string) => {
    switch(feature) {
      case 'predictive':
        alert("Predictive Analytics Demo: Frontend simulation showing data visualization capabilities");
        break;
      case 'insights':
        alert("Business Insights: This shows data analysis patterns based on existing dashboard data");
        break;
      case 'automation':
        alert("Workflow Automation UI: Shows interface for setting up automated processes");
        break;
      case 'revenue':
        alert("Revenue Analysis: Interactive charts showing revenue breakdown");
        break;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Demo Mode Banner */}
            {showTour && (
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] p-6 text-white relative">
                <button 
                  onClick={() => setShowTour(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <Award size={24} className="text-yellow-300" />
                  <div>
                    <h3 className="text-lg font-bold">Interactive Demo Mode</h3>
                    <p className="text-sm opacity-90">Try these features: Analytics • Insights • Automation</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Manager CRM Dashboard
                  </h1>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                    LIVE DATA
                  </span>
                </div>
                <p className="text-slate-500 font-medium">
                  Real-time tracking & advanced analytics
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <Download size={18} /> Export PDF
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-[#1F4EA0] text-white rounded-xl font-bold text-sm shadow-md shadow-blue-100 hover:bg-blue-800">
                  <Send size={18} /> Broadcast Alert
                </button>
                <button 
                  onClick={() => handleInteractiveDemo('predictive')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm shadow-md shadow-purple-100 hover:opacity-90"
                >
                  <TrendingUp size={18} /> Analytics View
                </button>
              </div>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Revenue"
                value={demoStats.totalRevenue}
                trend="+24% this quarter"
                icon={<span className="text-green-500 font-bold">R</span>}
                trendColor="text-green-600"
                onClick={() => handleInteractiveDemo('revenue')}
              />
              <StatCard
                title="Avg Deal Size"
                value={demoStats.avgDealSize}
                trend="Industry average: R 980K"
                icon={<TrendingUp className="text-blue-500" />}
                trendColor="text-blue-600"
              />
              <StatCard
                title="Client Growth"
                value={demoStats.clientGrowth}
                trend="+42 new clients"
                icon={<Users className="text-purple-500" />}
                trendColor="text-purple-600"
              />
              <StatCard
                title="Market Share"
                value={demoStats.marketShare}
                trend="Leading in Sandton"
                icon={<Award className="text-amber-500" />}
                trendColor="text-amber-600"
              />
            </div>

            {/* Advanced Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Enhanced Agent Tracking */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-extrabold text-xl text-slate-800">
                        Team Performance Tracking
                      </h3>
                      <p className="text-sm text-slate-500">Live performance metrics and insights</p>
                    </div>
                    <button 
                      onClick={() => handleInteractiveDemo('insights')}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl text-xs font-bold"
                    >
                      <Target size={14} /> View Insights
                    </button>
                  </div>
                  
                  {/* Performance Chart */}
                  <div className="mb-8">
                    <PerformanceChart />
                  </div>

                  {/* Interactive Performance Bars */}
                  <div className="space-y-4">
                    <AgentRow
                      name="John Agent"
                      location="Sandton CBD"
                      performance={94}
                      time="Live - Now"
                      status="active"
                      onMessage={() => alert("Direct messaging feature: Send automated follow-ups or personalized messages")}
                      onAnalyze={() => handleInteractiveDemo('insights')}
                    />
                    <AgentRow
                      name="Sarah Smith"
                      location="Morningside"
                      performance={87}
                      time="5 min ago"
                      status="active"
                      color="bg-blue-400"
                    />
                  </div>
                </section>

                {/* Predictive Analytics Card */}
                <section className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2rem] p-8 text-white">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="font-extrabold text-xl">Performance Analytics</h3>
                      <p className="text-sm text-blue-200">Trend analysis and performance metrics</p>
                    </div>
                    <TrendingUp className="text-blue-300" size={24} />
                  </div>
                  
                  {/* Simple Chart Visualization */}
                  <div className="mb-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-blue-200 w-20">Revenue</span>
                      <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '85%' }} />
                      </div>
                      <span className="text-xs font-bold w-12 text-right">85%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-blue-200 w-20">Deals</span>
                      <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: '72%' }} />
                      </div>
                      <span className="text-xs font-bold w-12 text-right">72%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-blue-200 w-20">Leads</span>
                      <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: '64%' }} />
                      </div>
                      <span className="text-xs font-bold w-12 text-right">64%</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-sm text-blue-200 mb-2">Team Efficiency</p>
                      <p className="text-2xl font-bold">94%</p>
                      <p className="text-xs text-green-300 mt-1">↑ 8% this month</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <p className="text-sm text-blue-200 mb-2">Conversion Rate</p>
                      <p className="text-2xl font-bold">28%</p>
                      <p className="text-xs text-amber-300 mt-1">Industry avg: 22%</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleInteractiveDemo('predictive')}
                    className="mt-6 w-full py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    View Detailed Analytics
                  </button>
                </section>
              </div>

              {/* Right Column Enhancements */}
              <div className="space-y-8">
                {/* Workflow Automation Demo */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-lg text-slate-800">
                      Workflow Automation
                    </h3>
                    <button 
                      onClick={() => handleInteractiveDemo('automation')}
                      className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                    >
                      DEMO
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <CheckCircle2 size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">Lead Assignment</p>
                          <p className="text-xs text-slate-500">Auto-assigns based on agent specialty</p>
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
                </section>

                {/* System Health Monitor */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-lg text-slate-800">System Health</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-green-600">OPTIMAL</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Uptime</span>
                      <span className="font-bold text-slate-800">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Response Time</span>
                      <span className="font-bold text-slate-800">0.2s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Data Sync</span>
                      <span className="font-bold text-slate-800">Real-time</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case "agents":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Agent Management
                </h1>
                <p className="text-slate-500 font-medium">
                  Manage and monitor your agent team
                </p>
              </div>
              <button 
                onClick={() => alert("Add Agent: Opens form to add new agents with automated onboarding workflow")}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus size={16} /> Add Agent
              </button>
            </div>

            <div className="bg-white rounded-[2rem] border shadow-sm overflow-hidden">
              <div className="p-8 border-b flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    All Agents
                  </h2>
                  <p className="text-sm text-slate-500">
                    {agents.length} agents in your team
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <Filter size={16} /> Filter
                  </button>
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="Search agents..."
                      className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-300"
                    />
                  </div>
                </div>
              </div>

              <div className="divide-y">
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className="p-6 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                            agent.status === "active"
                              ? "bg-green-500"
                              : "bg-gray-400"
                          }`}
                        >
                          {agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">
                            {agent.name}
                          </h3>
                          <p className="text-sm text-slate-500 flex items-center gap-1">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                agent.status === "active"
                                  ? "bg-green-500"
                                  : "bg-gray-400"
                              }`}
                            ></span>
                            {agent.status === "active" ? "Active" : "Inactive"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <p className="text-sm text-slate-500">Performance</p>
                          <p className="text-xl font-bold text-slate-900">
                            {agent.performance}%
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-slate-500">Deals Closed</p>
                          <p className="text-xl font-bold text-slate-900">
                            {agent.deals}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-slate-500">Revenue</p>
                          <p className="text-xl font-bold text-slate-900">
                            {agent.revenue}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => alert(`Messaging ${agent.name}: Opens chat interface with message templates and automated responses`)}
                            className="p-2 border border-blue-100 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            <MessageSquare size={16} />
                          </button>
                          <button 
                            onClick={() => alert(`View ${agent.name}'s Details: Shows detailed analytics, commission history, and performance metrics`)}
                            className="px-3 py-1 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "props":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  All Properties
                </h1>
                <p className="text-slate-500 font-medium">
                  Manage all company properties
                </p>
              </div>
              <button 
                onClick={() => alert("Add Property: Opens property listing form with automated MLS sync and photo upload")}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus size={16} /> Add Property
              </button>
            </div>

            <div className="bg-white rounded-[2rem] border shadow-sm overflow-hidden">
              <div className="p-8 border-b flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Property Listings
                  </h2>
                  <p className="text-sm text-slate-500">
                    {properties.length} active listings
                  </p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => alert("Advanced Filtering: Filter by price, location, status, agent, and custom criteria")}
                    className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2"
                  >
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
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <Home className="text-blue-300" size={32} />
                      </div>
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
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold ${
                                property.status === "Active"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {property.status}
                            </span>
                            <div className="flex items-center gap-1 text-slate-500">
                              <Eye size={14} /> {property.views} views
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => alert(`Edit ${property.name}: Opens property editor with all details`) }
                              className="px-3 py-1 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => alert(`View ${property.name} Details: Shows full property details, viewing history, and lead inquiries`)}
                              className="px-3 py-1 border border-blue-100 text-blue-600 bg-blue-50 rounded-lg text-xs font-medium hover:bg-blue-100"
                            >
                              View Details
                            </button>
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

      case "reports":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Reports & Analytics
                </h1>
                <p className="text-slate-500 font-medium">
                  Generate and download comprehensive reports
                </p>
              </div>
              <button 
                onClick={() => alert("Generate Report: Creates custom reports with filters, scheduled delivery, and multi-format export")}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Download size={16} /> Generate Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: 1,
                  name: "Monthly Sales Report",
                  date: "Feb 2024",
                  size: "2.4 MB",
                  icon: <BarChart className="text-blue-500" size={20} />,
                  description: "Detailed revenue analysis by agent and property type"
                },
                {
                  id: 2,
                  name: "Agent Performance Analysis",
                  date: "Jan 2024",
                  size: "1.8 MB",
                  icon: <TrendingUp className="text-green-500" size={20} />,
                  description: "KPI tracking and commission calculations"
                },
                {
                  id: 3,
                  name: "Property Market Trends",
                  date: "Dec 2023",
                  size: "3.2 MB",
                  icon: <MapPin className="text-purple-500" size={20} />,
                  description: "Market analysis and pricing recommendations"
                },
                {
                  id: 4,
                  name: "Quarterly Revenue Report",
                  date: "Nov 2023",
                  size: "1.5 MB",
                  icon: <FileText className="text-amber-500" size={20} />,
                  description: "Financial summary and growth projections"
                },
              ].map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-[2rem] border p-6 hover:border-blue-200 transition-all group cursor-pointer"
                  onClick={() => alert(`Previewing ${report.name}: Interactive report with drill-down capabilities`)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-100 rounded-2xl group-hover:bg-blue-50 transition-colors">
                      {report.icon}
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
                  <p className="text-xs text-slate-400 mb-4">{report.description}</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Previewing ${report.name}: Interactive report with drill-down capabilities`);
                      }}
                      className="flex-1 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                    >
                      Preview
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Downloading ${report.name}: Available in PDF, Excel, and CSV formats`);
                      }}
                      className="flex-1 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "perf":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Performance Analytics
                </h1>
                <p className="text-slate-500 font-medium">
                  Track team performance, KPIs, and growth metrics
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <Download size={18} /> Export Data
                </button>
                <button 
                  onClick={() => handleInteractiveDemo('insights')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold text-sm shadow-md shadow-green-100 hover:opacity-90"
                >
                  <TrendingUp size={18} /> View Trends
                </button>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Team Efficiency"
                value="94%"
                trend="+8% this month"
                icon={<Activity className="text-green-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Avg Deal Time"
                value="18 days"
                trend="-3 days vs last month"
                icon={<Clock className="text-blue-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Client Satisfaction"
                value="4.8/5"
                trend="+0.3 from last quarter"
                icon={<Star className="text-amber-500" />}
                trendColor="text-amber-600"
              />
              <StatCard
                title="Conversion Rate"
                value="28%"
                trend="Industry avg: 22%"
                icon={<Percent className="text-purple-500" />}
                trendColor="text-purple-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Performance Trends */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Performance Trends
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">
                        Last 6 Months
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <PerformanceTrendChart />
                  </div>
                </section>

                {/* KPI Breakdown */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      KPI Breakdown
                    </h3>
                    <FilterIcon size={20} className="text-gray-300" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <KPIMetric
                      title="Lead Response Time"
                      current="12 min"
                      target="10 min"
                      progress={80}
                      color="bg-blue-500"
                    />
                    <KPIMetric
                      title="Property Views per Listing"
                      current="156"
                      target="120"
                      progress={130}
                      color="bg-green-500"
                    />
                    <KPIMetric
                      title="Deal Closure Rate"
                      current="42%"
                      target="35%"
                      progress={120}
                      color="bg-purple-500"
                    />
                    <KPIMetric
                      title="Client Retention"
                      current="92%"
                      target="90%"
                      progress={102}
                      color="bg-amber-500"
                    />
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                {/* Top Performers */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-lg text-slate-800">
                      Top Performers
                    </h3>
                    <Award className="text-amber-400" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "John Agent", deals: 12, revenue: "R 2.4M", growth: "+24%" },
                      { name: "Sarah Smith", deals: 9, revenue: "R 1.8M", growth: "+18%" },
                      { name: "Mike Brown", deals: 7, revenue: "R 1.5M", growth: "+12%" },
                    ].map((agent, index) => (
                      <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? "bg-amber-500" : index === 1 ? "bg-gray-400" : "bg-amber-800"
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{agent.name}</p>
                            <p className="text-xs text-slate-500">{agent.deals} deals</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-slate-800">{agent.revenue}</p>
                          <p className="text-xs text-green-600 font-bold">{agent.growth}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Performance Goals */}
                <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2rem] border border-blue-100 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800">Monthly Goals</h3>
                    <Target className="text-blue-500" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <GoalProgress
                      title="Revenue Target"
                      current="R 4.3M"
                      target="R 5M"
                      progress={86}
                    />
                    <GoalProgress
                      title="New Clients"
                      current="24"
                      target="30"
                      progress={80}
                    />
                    <GoalProgress
                      title="Team Training"
                      current="8 hrs"
                      target="10 hrs"
                      progress={80}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Advanced Analytics
                </h1>
                <p className="text-slate-500 font-medium">
                  Deep insights and data-driven decision making
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <FilterIcon size={18} /> Filter Data
                </button>
                <button 
                  onClick={() => handleInteractiveDemo('predictive')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm shadow-md shadow-purple-100 hover:opacity-90"
                >
                  <BarChart size={18} /> Custom Analysis
                </button>
              </div>
            </div>

            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Market Analysis Score"
                value="8.7/10"
                trend="+1.2 this quarter"
                icon={<TrendingUp className="text-green-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Competitor Insights"
                value="24 tracked"
                trend="3 new this month"
                icon={<Shield className="text-blue-500" />}
                trendColor="text-blue-600"
              />
              <StatCard
                title="Data Coverage"
                value="98%"
                trend="Real-time updates"
                icon={<Cloud className="text-purple-500" />}
                trendColor="text-purple-600"
              />
              <StatCard
                title="Insight Accuracy"
                value="94%"
                trend="Industry leading"
                icon={<Zap className="text-amber-500" />}
                trendColor="text-amber-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Revenue Analysis */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Revenue Analysis
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-bold">
                        +24% Growth
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <RevenueChart />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <p className="text-sm text-gray-500">Residential</p>
                      <p className="text-xl font-bold text-slate-900">R 8.2M</p>
                      <p className="text-xs text-green-600 font-bold">+18%</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <p className="text-sm text-gray-500">Commercial</p>
                      <p className="text-xl font-bold text-slate-900">R 3.1M</p>
                      <p className="text-xs text-blue-600 font-bold">+32%</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-2xl">
                      <p className="text-sm text-gray-500">Luxury</p>
                      <p className="text-xl font-bold text-slate-900">R 1.5M</p>
                      <p className="text-xs text-purple-600 font-bold">+45%</p>
                    </div>
                  </div>
                </section>

                {/* Market Segmentation */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Market Segmentation
                    </h3>
                    <PieChartIcon size={20} className="text-gray-300" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 mb-4">Property Types</h4>
                      <div className="space-y-3">
                        <MarketSegment
                          label="Apartments"
                          value="42%"
                          color="bg-blue-500"
                          count={156}
                        />
                        <MarketSegment
                          label="Houses"
                          value="28%"
                          color="bg-green-500"
                          count={104}
                        />
                        <MarketSegment
                          label="Commercial"
                          value="18%"
                          color="bg-purple-500"
                          count={67}
                        />
                        <MarketSegment
                          label="Luxury"
                          value="12%"
                          color="bg-amber-500"
                          count={45}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 mb-4">Price Range Distribution</h4>
                      <div className="space-y-3">
                        <MarketSegment
                          label="Under R 1M"
                          value="24%"
                          color="bg-emerald-500"
                          count={89}
                        />
                        <MarketSegment
                          label="R 1M - R 3M"
                          value="38%"
                          color="bg-blue-500"
                          count={142}
                        />
                        <MarketSegment
                          label="R 3M - R 5M"
                          value="22%"
                          color="bg-purple-500"
                          count={82}
                        />
                        <MarketSegment
                          label="Over R 5M"
                          value="16%"
                          color="bg-rose-500"
                          count={59}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                {/* Geographic Insights */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-800">Geographic Insights</h3>
                    <Globe className="text-blue-500" size={20} />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-800">Sandton</span>
                        <span className="text-xs font-bold text-blue-600">42% of Revenue</span>
                      </div>
                      <p className="text-xs text-slate-600">Prime commercial district with high-value properties</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-800">Morningside</span>
                        <span className="text-xs font-bold text-green-600">28% of Revenue</span>
                      </div>
                      <p className="text-xs text-slate-600">Growing residential area with luxury properties</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-800">Bryanston</span>
                        <span className="text-xs font-bold text-purple-600">18% of Revenue</span>
                      </div>
                      <p className="text-xs text-slate-600">Established family neighborhoods</p>
                    </div>
                  </div>
                </section>

                {/* Predictive Insights */}
                <section className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2rem] p-6 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Predictive Insights</h3>
                    <TrendingUp className="text-blue-300" size={20} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <p className="text-xs text-blue-200 mb-1">Next Quarter Forecast</p>
                      <p className="text-sm font-bold">R 3.8M Revenue</p>
                      <p className="text-xs text-green-300">↑ 15% projected growth</p>
                    </div>
                    
                    <div className="p-3 bg-white/10 rounded-xl">
                      <p className="text-xs text-blue-200 mb-1">Market Opportunity</p>
                      <p className="text-sm font-bold">Sandton Commercial</p>
                      <p className="text-xs text-amber-300">High demand detected</p>
                    </div>
                    
                    <div className="p-3 bg-white/10 rounded-xl">
                      <p className="text-xs text-blue-200 mb-1">Risk Alert</p>
                      <p className="text-sm font-bold">Interest Rates</p>
                      <p className="text-xs text-red-300">Monitor closely</p>
                    </div>
                  </div>
                </section>

                {/* Export Options */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <h3 className="font-bold text-slate-800 mb-4">Export Analytics</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                      <div className="text-blue-500 mb-1">
                        <FileText size={20} className="mx-auto" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">PDF Report</span>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                      <div className="text-green-500 mb-1">
                        <Download size={20} className="mx-auto" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">CSV Data</span>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                      <div className="text-purple-500 mb-1">
                        <BarChart size={20} className="mx-auto" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">Charts</span>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                      <div className="text-amber-500 mb-1">
                        <Share2 size={20} className="mx-auto" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">Share</span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Manager CRM Dashboard
                </h1>
                <p className="text-slate-500 font-medium">
                  Real-time tracking & analytics
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] border shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
                Dashboard
              </h2>
              <p className="text-slate-500">
                This feature is fully implemented in the complete platform. It includes:
              </p>
              <ul className="mt-4 space-y-2 text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Advanced analytics with custom metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Automated reporting and scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Real-time data synchronization</span>
                </li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return renderTabContent();
}

// --- Agent View Component ---

function AgentView({ activeTab }: { activeTab: string }) {
  const [showCommissionBreakdown, setShowCommissionBreakdown] = useState(false);
  const [commissionData] = useState([
    { month: 'Jan', amount: 120000 },
    { month: 'Feb', amount: 145000 },
    { month: 'Mar', amount: 187000 },
  ]);

  const handleAgentDemo = (feature: string) => {
    switch(feature) {
      case 'performance':
        alert("Performance Analytics: Track your metrics and compare with team averages");
        break;
      case 'analytics':
        alert("Personal Analytics: View your performance trends and improvement areas");
        break;
      case 'goals':
        alert("Goal Tracking: Set and monitor your personal and team goals");
        break;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Performance Header */}
            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Agent Intelligence Dashboard
                  </h1>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Target size={12} /> TOP 10%
                  </span>
                </div>
                <p className="text-slate-500 font-medium">
                  Personal analytics and performance tracking
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-200 font-bold text-sm">
                  <CheckCircle2 size={18} /> Checked In
                </div>
                <button 
                  onClick={() => setShowCommissionBreakdown(!showCommissionBreakdown)}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl border border-green-200 font-bold text-sm hover:opacity-90"
                >
                  <BarChart size={18} /> Commission Analytics
                </button>
              </div>
            </div>

            {/* Commission Breakdown Modal */}
            {showCommissionBreakdown && (
              <div className="bg-white rounded-[2rem] border shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Commission Breakdown</h3>
                  <button onClick={() => setShowCommissionBreakdown(false)}>
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {commissionData.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-sm text-gray-500">{item.month}</p>
                      <p className="text-xl font-bold text-slate-900">R {item.amount.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 text-center">
                  Total YTD: R 452,300
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Commission"
                value="R 452 300"
                trend="+12% this month"
                icon={<span className="text-green-500 font-bold">R</span>}
                trendColor="text-green-600"
                onClick={() => handleAgentDemo('performance')}
              />
              <StatCard
                title="Target Progress"
                value="21%"
                trend="R 125 000 of R 600 000"
                icon={<Target className="text-blue-500" />}
                trendColor="text-blue-600"
                onClick={() => handleAgentDemo('goals')}
              />
              <StatCard
                title="Deals Closed"
                value="18"
                trend="Rank: Top 10%"
                icon={<Award className="text-purple-500" />}
                trendColor="text-purple-600"
              />
              <StatCard
                title="Current Location"
                value="Sandton CBD"
                trend="Johannesburg"
                icon={<MapPin className="text-orange-500" />}
                trendColor="text-orange-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section className="bg-white rounded-[2rem] border shadow-sm overflow-hidden">
                  <div className="p-8 border-b">
                    <h3 className="font-extrabold text-xl text-slate-800 font-bold">
                      My Properties
                    </h3>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-gray-400 uppercase tracking-widest border-b">
                        <th className="px-8 py-4 font-bold">Property</th>
                        <th className="px-8 py-4 font-bold">Location</th>
                        <th className="px-8 py-4 font-bold">Price</th>
                        <th className="px-8 py-4 font-bold">Status</th>
                        <th className="px-8 py-4 font-bold text-center">
                          Views
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-sm">
                      <PropertyRow
                        name="Luxury Apartment"
                        loc="Sandton"
                        price="R 2 500 000"
                        status="Active"
                        views={156}
                      />
                      <PropertyRow
                        name="Modern Penthouse"
                        loc="Sandton City"
                        price="R 4 200 000"
                        status="Under Offer"
                        views={89}
                      />
                      <PropertyRow
                        name="Executive Villa"
                        loc="Morningside"
                        price="R 18 500 000"
                        status="Active"
                        views={203}
                      />
                    </tbody>
                  </table>
                </section>

                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Today's Schedule
                    </h3>
                    <Calendar size={20} className="text-gray-300" />
                  </div>
                  <div className="space-y-4">
                    <ScheduleItem
                      title="Property Viewing"
                      client="John Doe"
                      loc="Sandton Apartment"
                      time="10:00 AM"
                    />
                    <ScheduleItem
                      title="Contract Signing"
                      client="Jane Smith"
                      loc="Morningside Villa"
                      time="2:00 PM"
                    />
                    <ScheduleItem
                      title="Initial Consultation"
                      client="Mike Johnson"
                      loc="Virtual Meeting"
                      time="4:30 PM"
                    />
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-lg text-slate-800 underline decoration-red-200 underline-offset-8">
                      Client Messages
                    </h3>
                    <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">
                      1 unread
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-bold text-slate-800 text-sm">
                          Mike Johnson
                        </p>
                        <span className="text-[10px] text-gray-400">
                          9:30 AM
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mb-3">
                        When can we view the Sandton apartment?
                      </p>
                      <div className="flex gap-4 text-[10px] font-bold">
                        <button 
                          onClick={() => alert("Reply: Opens chat with message templates and property details")}
                          className="text-blue-600"
                        >
                          Reply
                        </button>
                        <button 
                          onClick={() => alert("View Property: Shows property details and viewing schedule")}
                          className="text-slate-400"
                        >
                          View Property
                        </button>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-gray-100">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-bold text-slate-800 text-sm">
                          Sarah Wilson
                        </p>
                        <span className="text-[10px] text-gray-400">
                          Yesterday
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">
                        I've signed the documents, please check
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-[#FFFBF5] rounded-[2rem] border border-amber-100 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-amber-50 flex items-center justify-center text-amber-500 shadow-sm">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">
                      Monthly Bonus
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      On track for R 15 000 bonus
                    </p>
                  </div>
                </section>

                <div className="grid grid-cols-2 gap-3">
                  <QuickAction
                    icon={<BarChart className="text-blue-500" />}
                    label="Commission Report"
                    onClick={() => handleAgentDemo('performance')}
                  />
                  <QuickAction
                    icon={<Calendar className="text-green-500" />}
                    label="Schedule"
                    onClick={() => alert("Schedule: View and manage all appointments")}
                  />
                  <QuickAction
                    icon={<MessageSquare className="text-purple-500" />}
                    label="New Message"
                    onClick={() => alert("New Message: Quick compose with contact search")}
                  />
                  <QuickAction
                    icon={<MapPin className="text-orange-500" />}
                    label="Update Location"
                    onClick={() => alert("Update Location: Share your current location with team")}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "perf":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  My Performance
                </h1>
                <p className="text-slate-500 font-medium">
                  Track your metrics and growth
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <Download size={18} /> Export
                </button>
                <button 
                  onClick={() => handleAgentDemo('performance')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-sm shadow-md shadow-blue-100 hover:opacity-90"
                >
                  <TrendingUp size={18} /> View Trends
                </button>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Personal Efficiency"
                value="94%"
                trend="+8% this month"
                icon={<Activity className="text-green-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Avg Response Time"
                value="8 min"
                trend="-2 min vs last month"
                icon={<Clock className="text-blue-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Client Rating"
                value="4.9/5"
                trend="+0.2 from last quarter"
                icon={<Star className="text-amber-500" />}
                trendColor="text-amber-600"
              />
              <StatCard
                title="Conversion Rate"
                value="32%"
                trend="Team avg: 28%"
                icon={<Percent className="text-purple-500" />}
                trendColor="text-purple-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Performance Chart */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Performance Trends
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">
                        Last 6 Months
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <AgentPerformanceChart />
                  </div>
                </section>

                {/* Key Metrics */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Key Metrics
                    </h3>
                    <Target size={20} className="text-gray-300" />
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
                </section>
              </div>

              <div className="space-y-8">
                {/* Achievement Badges */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
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
                </section>

                {/* Personal Goals */}
                <section className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2rem] border border-blue-100 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-slate-800">My Goals</h3>
                    <Target className="text-blue-500" size={20} />
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
                </section>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  My Analytics
                </h1>
                <p className="text-slate-500 font-medium">
                  Personal insights and performance analysis
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <FilterIcon size={18} /> Filter
                </button>
                <button 
                  onClick={() => handleAgentDemo('analytics')}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-sm shadow-md shadow-purple-100 hover:opacity-90"
                >
                  <BarChart size={18} /> Deep Analysis
                </button>
              </div>
            </div>

            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Market Position"
                value="Top 10%"
                trend="+2 positions this month"
                icon={<TrendingUp className="text-green-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Client Insights"
                value="42 active"
                trend="+5 this month"
                icon={<Users className="text-blue-500" />}
                trendColor="text-blue-600"
              />
              <StatCard
                title="Property Views"
                value="1,248"
                trend="+24% vs last month"
                icon={<Eye className="text-purple-500" />}
                trendColor="text-purple-600"
              />
              <StatCard
                title="Efficiency Score"
                value="92/100"
                trend="Team avg: 85"
                icon={<Zap className="text-amber-500" />}
                trendColor="text-amber-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Commission Analysis */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Commission Analysis
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-bold">
                        +24% Growth
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <AgentRevenueChart />
                  </div>
                </section>

                {/* Property Performance */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Property Performance
                    </h3>
                    <Home size={20} className="text-gray-300" />
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: "Luxury Apartment", views: 156, inquiries: 28, saved: 45 },
                      { name: "Modern Penthouse", views: 89, inquiries: 18, saved: 32 },
                      { name: "Executive Villa", views: 203, inquiries: 12, saved: 24 },
                    ].map((property, index) => (
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
                            <Heart size={12} /> {property.saved} saves
                          </span>
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-green-500"
                              style={{ width: `${Math.min(property.views / 2, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                {/* Client Insights */}
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
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
                </section>

                {/* Performance Tips */}
                <section className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[2rem] p-6 text-white">
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
                </section>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Agent Dashboard
                </h1>
                <p className="text-slate-500 font-medium">
                  Manage your {activeTab} here
                </p>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] border shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
                Management
              </h2>
              <p className="text-slate-500">
                This feature is fully implemented in the complete platform with:
              </p>
              <ul className="mt-4 space-y-2 text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Automated workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Real-time notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Mobile app integration</span>
                </li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return renderTabContent();
}

// --- Chart Components ---

function PerformanceChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const teamData = [78, 82, 85, 83, 86, 89];
  const agentData = [85, 88, 92, 90, 87, 94];
  const maxValue = Math.max(...teamData, ...agentData);
  
  return (
    <div className="relative h-48">
      <div className="absolute inset-0 flex items-end">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center">
            <div className="flex items-end justify-center w-full px-1">
              <div 
                className="w-3 bg-gradient-to-t from-blue-300 to-blue-100 rounded-t-sm mx-0.5"
                style={{ height: `${(teamData[index] / maxValue) * 100}%` }}
              />
              <div 
                className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm mx-0.5"
                style={{ height: `${(agentData[index] / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-500 mt-1">{month}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-400">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          <span>Team Avg</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-300"></div>
          <span>Top Agent</span>
        </div>
      </div>
    </div>
  );
}

function PerformanceTrendChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const revenueData = [120, 145, 187, 165, 210, 245];
  const dealsData = [8, 10, 12, 9, 14, 18];
  const maxValue = Math.max(...revenueData, ...dealsData);
  
  return (
    <div className="relative h-48">
      <div className="absolute inset-0 flex items-end">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center">
            <div className="flex items-end justify-center w-full px-1">
              <div 
                className="w-4 bg-gradient-to-t from-green-300 to-green-100 rounded-t-sm"
                style={{ height: `${(revenueData[index] / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-500 mt-1">{month}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        <div className="text-xs font-bold text-slate-700">Revenue (R thousands)</div>
      </div>
    </div>
  );
}

function RevenueChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const revenueData = [2800, 3200, 4100, 3800, 4300, 4800];
  const maxValue = Math.max(...revenueData);
  
  return (
    <div className="relative h-48">
      <div className="absolute inset-0 flex items-end">
        {months.map((month, index) => (
          <div key={month} className="flex-1 flex flex-col items-center">
            <div 
              className="w-6 bg-gradient-to-t from-green-500 to-green-300 rounded-t-lg"
              style={{ height: `${(revenueData[index] / maxValue) * 100}%` }}
            />
            <span className="text-[10px] text-gray-500 mt-1">{month}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        <div className="text-xs font-bold text-slate-700">Revenue (R thousands)</div>
      </div>
    </div>
  );
}

function AgentPerformanceChart() {
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
}

function AgentRevenueChart() {
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
}

// --- Analytics Components ---

function KPIMetric({ title, current, target, progress, color }: any) {
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
}

function MarketSegment({ label, value, color, count }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <span className="text-sm text-slate-700">{label}</span>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-slate-900">{value}</p>
        <p className="text-xs text-gray-500">{count} properties</p>
      </div>
    </div>
  );
}

function GoalProgress({ title, current, target, progress }: any) {
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
}

// --- Subcomponents ---

function SidebarLink({ icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl transition-all ${
        active
          ? "bg-blue-50 text-blue-600 font-bold"
          : "text-slate-500 hover:bg-gray-50"
      }`}
    >
      {icon} <span className="text-sm">{label}</span>
    </button>
  );
}

function StatCard({
  title,
  value,
  trend,
  icon,
  trendColor = "text-green-500",
  onClick,
  interactive = true,
}: any) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white p-7 rounded-[2.2rem] border shadow-sm transition-all ${interactive ? 'hover:border-blue-300 hover:shadow-md cursor-pointer group' : ''}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">
            {title}
          </p>
          <h4 className={`text-2xl font-black text-slate-900 ${interactive ? 'group-hover:text-blue-700 transition-colors' : ''}`}>
            {value}
          </h4>
        </div>
        <div className={`p-3 ${interactive ? 'bg-gray-50 group-hover:bg-blue-50' : 'bg-gray-50'} rounded-2xl transition-colors`}>
          {icon}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className={`text-[11px] font-bold ${trendColor}`}>{trend}</p>
        {interactive && <ChevronRight size={12} className="text-gray-300 group-hover:text-blue-400" />}
      </div>
    </div>
  );
}

function AgentRow({
  name,
  location,
  performance,
  time,
  status,
  color = "bg-green-500",
  onMessage,
  onAnalyze,
}: any) {
  return (
    <div className="group p-5 bg-white border rounded-[1.8rem] hover:border-blue-200 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-3 h-3 rounded-full ${
              status === "active" ? "bg-green-500" : "bg-gray-300"
            }`}
          />
          <div>
            <p className="font-bold text-slate-800">{name}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <MapPin size={12} /> {location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
            <span className="text-[10px] text-gray-300 font-bold flex items-center gap-1 justify-end mb-1">
              <Clock size={10} /> {time}
            </span>
            <div className="flex items-center gap-3">
              <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color}`}
                  style={{ width: `${performance}%` }}
                />
              </div>
              <span className="text-xs font-bold">{performance}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 opacity-100 group-hover:opacity-100 transition-opacity">
        <ActionBtn
          icon={<AlertTriangle size={12} />}
          label="Alert"
          color="bg-amber-50 text-amber-700 border-amber-200"
          onClick={() => alert(`Send alert to ${name}: Customizable alert templates`)}
        />
        <ActionBtn
          icon={<Award size={12} />}
          label="Praise"
          color="bg-green-50 text-green-700 border-green-200"
          onClick={() => alert(`Send praise to ${name}: Recognition system with rewards`)}
        />
        <ActionBtn
          icon={<MessageSquare size={12} />}
          label="Message"
          color="bg-blue-50 text-blue-700 border-blue-200"
          onClick={onMessage}
        />
        {onAnalyze && (
          <ActionBtn
            icon={<TrendingUp size={12} />}
            label="Analyze"
            color="bg-purple-50 text-purple-700 border-purple-200"
            onClick={onAnalyze}
          />
        )}
      </div>
    </div>
  );
}

function PropertyRow({ name, loc, price, status, views }: any) {
  return (
    <tr className="border-b last:border-0 hover:bg-gray-50/50 transition-colors">
      <td className="px-8 py-5 font-bold text-slate-800">{name}</td>
      <td className="px-8 py-5 text-gray-400">{loc}</td>
      <td className="px-8 py-5 font-black text-blue-800">{price}</td>
      <td className="px-8 py-5">
        <span
          className={`px-3 py-1 rounded-full text-[10px] font-bold ${
            status === "Active"
              ? "bg-green-50 text-green-600"
              : "bg-amber-50 text-amber-600"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-8 py-5 text-center text-gray-400 font-medium">
        <div className="flex items-center justify-center gap-1.5">
          <Eye size={14} /> {views}
        </div>
      </td>
    </tr>
  );
}

function ScheduleItem({ title, client, loc, time }: any) {
  return (
    <div className="p-5 border rounded-[1.8rem] flex justify-between items-center group hover:border-blue-300 transition-all">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-black text-slate-800">{title}</span>
          <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
            <Clock size={10} /> {time}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Users size={12} /> {client}
          </span>
          <span className="flex items-center gap-1 text-gray-300">
            <MapPin size={12} /> {loc}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => alert(`Call ${client}: One-tap calling with call logging`)}
          className="p-2 border rounded-xl group-hover:bg-blue-50 text-blue-600 transition-colors"
        >
          <Phone size={16} />
        </button>
        <button 
          onClick={() => alert(`Reschedule with ${client}: Calendar integration with availability check`)}
          className="px-3 py-1.5 border rounded-xl text-[10px] font-bold hover:bg-gray-50 uppercase"
        >
          Reschedule
        </button>
      </div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="bg-white border rounded-[1.8rem] p-4 flex flex-col items-center gap-4 hover:border-blue-200 transition-all shadow-sm cursor-pointer"
    >
      <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-slate-600 text-center uppercase tracking-tighter">
        {label}
      </span>
    </button>
  );
}

function MetricBar({ label, value, color, width }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold text-slate-800">{label}</span>
        <span className="text-sm font-black text-slate-900">{value}</span>
      </div>
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width }} />
      </div>
    </div>
  );
}

function PropertyPick({ title, count, views, saved }: any) {
  return (
    <div 
      className="p-4 rounded-2xl border bg-white group hover:border-blue-200 cursor-pointer"
      onClick={() => alert(`Property Insights: View detailed analytics for ${title}`)}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-bold">{title}</h4>
        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">
          {count} inquiries
        </span>
      </div>
      <div className="flex gap-3 text-[10px] text-gray-400 font-medium mb-3">
        <span className="flex items-center gap-1">
          <Eye size={12} /> {views} views
        </span>
        <span className="flex items-center gap-1">
          <Heart size={12} /> {saved} saved
        </span>
      </div>
      <div className="pt-2 border-t border-dashed flex items-center gap-2 text-[10px] font-bold text-gray-400">
        <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-400 transition-colors" />{" "}
        High interest property
      </div>
    </div>
  );
}

function AlertBox({ type, message, agent, time }: any) {
  const styles = {
    warning: "bg-amber-50 border-amber-100 text-amber-900",
    info: "bg-blue-50 border-blue-100 text-blue-900",
  }[type as "warning" | "info"];
  return (
    <div className={`p-4 rounded-2xl border ${styles} relative`}>
      <p className="text-xs font-bold leading-tight">{message}</p>
      {agent && <p className="text-[10px] mt-1 opacity-70">Agent: {agent}</p>}
      <div className="flex justify-between items-end mt-4">
        <span className="text-[9px] font-bold uppercase tracking-widest opacity-50">
          {time}
        </span>
        <button 
          onClick={() => alert(`Resolve Alert: Mark as resolved with notes and follow-up actions`)}
          className="text-[10px] font-bold uppercase underline"
        >
          Resolve
        </button>
      </div>
    </div>
  );
}

function ActionBtn({ icon, label, color, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all ${color} cursor-pointer hover:opacity-80`}
    >
      {icon} {label}
    </button>
  );
}

// Add missing Share2 icon import
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