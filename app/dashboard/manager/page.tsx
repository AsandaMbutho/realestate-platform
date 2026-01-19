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
  PieChart,
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
} from "lucide-react";

export default function RealEstateDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"manager" | "agent">("manager");
  const [activeTab, setActiveTab] = useState("overview");

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
            icon={<PieChart size={20} />}
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

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
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
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border rounded-xl font-bold text-sm text-slate-600 hover:bg-gray-50">
                  <Download size={18} /> Export
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-[#1F4EA0] text-white rounded-xl font-bold text-sm shadow-md shadow-blue-100 hover:bg-blue-800">
                  <Send size={18} /> Broadcast
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Active Agents"
                value="24"
                trend="+2 today"
                icon={<Users className="text-blue-500" />}
              />
              <StatCard
                title="Client Visits"
                value="174"
                trend="Live updating"
                icon={<Eye className="text-green-500" />}
                trendColor="text-green-600"
              />
              <StatCard
                title="Pending Deals"
                value="18"
                trend="Requires attention"
                icon={<Home className="text-purple-500" />}
                trendColor="text-amber-500"
              />
              <StatCard
                title="Weekly Sales"
                value="R 4 306 192"
                trend="+12% from last week"
                icon={<span className="text-green-500 font-bold">R</span>}
                trendColor="text-green-600"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section className="bg-white rounded-[2rem] border shadow-sm p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-xl text-slate-800">
                      Agent Tracking & Performance
                    </h3>
                    <MapPin size={20} className="text-gray-300" />
                  </div>
                  <div className="space-y-4">
                    <AgentRow
                      name="John Agent"
                      location="Sandton CBD"
                      performance={94}
                      time="5 min ago"
                      status="active"
                    />
                    <AgentRow
                      name="Sarah Smith"
                      location="Morningside"
                      performance={87}
                      time="15 min ago"
                      status="active"
                      color="bg-blue-400"
                    />
                    <AgentRow
                      name="Mike Brown"
                      location="Bryanston"
                      performance={76}
                      time="30 min ago"
                      status="inactive"
                      color="bg-gray-400"
                    />
                    <AgentRow
                      name="Emma Wilson"
                      location="Sandton City"
                      performance={65}
                      time="2 hours ago"
                      status="inactive"
                      color="bg-gray-400"
                    />
                  </div>
                </section>

                <section className="bg-white rounded-[2rem] border shadow-sm p-8 leading-relaxed">
                  <h3 className="font-extrabold text-xl text-slate-800 mb-8">
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                    <MetricBar
                      label="Conversion Rate"
                      value="28%"
                      color="bg-green-500"
                      width="28%"
                    />
                    <MetricBar
                      label="Avg Response Time"
                      value="12 min"
                      color="bg-blue-500"
                      width="60%"
                    />
                    <MetricBar
                      label="Deal Closure Rate"
                      value="42%"
                      color="bg-purple-500"
                      width="42%"
                    />
                    <MetricBar
                      label="Client Satisfaction"
                      value="4.6/5"
                      color="bg-orange-500"
                      width="92%"
                    />
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-lg text-slate-800">
                      Client Picks of the Week
                    </h3>
                    <TrendingUp size={20} className="text-gray-300" />
                  </div>
                  <div className="space-y-4">
                    <PropertyPick
                      title="Luxury Apartment"
                      count={28}
                      views={245}
                      saved={45}
                    />
                    <PropertyPick
                      title="Modern Penthouse"
                      count={18}
                      views={189}
                      saved={32}
                    />
                  </div>
                </section>

                <section className="bg-white rounded-[2rem] border shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-extrabold text-lg text-slate-800">
                      System Alerts
                    </h3>
                    <AlertTriangle size={20} className="text-amber-400" />
                  </div>
                  <div className="space-y-3">
                    <AlertBox
                      type="warning"
                      message="Missed 2 client appointments"
                      agent="Mike Brown"
                      time="2 hours ago"
                    />
                    <AlertBox
                      type="info"
                      message="Sales target exceeded for January"
                      time="1 day ago"
                    />
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
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
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
                          <button className="p-2 border border-blue-100 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            <MessageSquare size={16} />
                          </button>
                          <button className="px-3 py-1 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50">
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
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
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
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100"></div>
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
                            <button className="px-3 py-1 border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:bg-slate-50">
                              Edit
                            </button>
                            <button className="px-3 py-1 border border-blue-100 text-blue-600 bg-blue-50 rounded-lg text-xs font-medium hover:bg-blue-100">
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
                  Generate and download reports
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
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
                },
                {
                  id: 2,
                  name: "Agent Performance Analysis",
                  date: "Jan 2024",
                  size: "1.8 MB",
                },
                {
                  id: 3,
                  name: "Property Market Trends",
                  date: "Dec 2023",
                  size: "3.2 MB",
                },
                {
                  id: 4,
                  name: "Quarterly Revenue Report",
                  date: "Nov 2023",
                  size: "1.5 MB",
                },
              ].map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-[2rem] border p-6 hover:border-blue-200 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-100 rounded-2xl">
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
                    <button className="flex-1 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
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
                Content for {activeTab} is coming soon...
              </p>
            </div>
          </div>
        );
    }
  };

  return renderTabContent();
}

// --- Agent View Component ---

function AgentView({ activeTab }: { activeTab: string }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Agent Dashboard
                </h1>
                <p className="text-slate-500 font-medium">
                  Real-time tracking & client management
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-200 font-bold text-sm">
                  <CheckCircle2 size={18} /> Checked In
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Commission"
                value="R 452 300"
                trend="+12% this month"
                icon={<span className="text-green-500 font-bold">R</span>}
                trendColor="text-green-600"
              />
              <StatCard
                title="Target Progress"
                value="21%"
                trend="R 125 000 of R 600 000"
                icon={<Target className="text-blue-500" />}
                trendColor="text-blue-600"
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
                        <button className="text-blue-600">Reply</button>
                        <button className="text-slate-400">
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
                  />
                  <QuickAction
                    icon={<Calendar className="text-green-500" />}
                    label="Schedule"
                  />
                  <QuickAction
                    icon={<MessageSquare className="text-purple-500" />}
                    label="New Message"
                  />
                  <QuickAction
                    icon={<MapPin className="text-orange-500" />}
                    label="Update Location"
                  />
                </div>
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
                Content for {activeTab} is coming soon...
              </p>
            </div>
          </div>
        );
    }
  };

  return renderTabContent();
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
}: any) {
  return (
    <div className="bg-white p-7 rounded-[2.2rem] border shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">
            {title}
          </p>
          <h4 className="text-2xl font-black text-slate-900">{value}</h4>
        </div>
        <div className="p-3 bg-gray-50 rounded-2xl">{icon}</div>
      </div>
      <p className={`text-[11px] font-bold ${trendColor}`}>{trend}</p>
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
        />
        <ActionBtn
          icon={<Award size={12} />}
          label="Praise"
          color="bg-green-50 text-green-700 border-green-200"
        />
        <ActionBtn
          icon={<MessageSquare size={12} />}
          label="Message"
          color="bg-blue-50 text-blue-700 border-blue-200"
        />
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
        <button className="p-2 border rounded-xl group-hover:bg-blue-50 text-blue-600 transition-colors">
          <Phone size={16} />
        </button>
        <button className="px-3 py-1.5 border rounded-xl text-[10px] font-bold hover:bg-gray-50 uppercase">
          Reschedule
        </button>
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: any) {
  return (
    <button className="bg-white border rounded-[1.8rem] p-4 flex flex-col items-center gap-4 hover:border-blue-200 transition-all shadow-sm">
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
    <div className="p-4 rounded-2xl border bg-white group hover:border-blue-200 cursor-pointer">
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
        <button className="text-[10px] font-bold uppercase underline">
          Resolve
        </button>
      </div>
    </div>
  );
}

function ActionBtn({ icon, label, color }: any) {
  return (
    <button
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[10px] font-bold transition-all ${color}`}
    >
      {icon} {label}
    </button>
  );
}
