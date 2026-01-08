"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Home,
  BarChart3,
  Settings,
  UserSquare2,
  Plus,
  Search,
  Trash2,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Database,
  FileText,
} from "lucide-react";
import { propertiesData } from "@/lib/propertiesData";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  // States for live data management
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "agent",
      status: "active",
      email: "sarah@realestate.com",
      joinDate: "2023-10-12",
    },
    {
      id: 2,
      name: "Mike Williams",
      role: "agent",
      status: "active",
      email: "mike@realestate.com",
      joinDate: "2023-11-05",
    },
    {
      id: 3,
      name: "Lisa Chen",
      role: "agent",
      status: "active",
      email: "lisa@realestate.com",
      joinDate: "2024-01-20",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "agent",
      status: "inactive",
      email: "james@realestate.com",
      joinDate: "2023-08-15",
    },
    {
      id: 6,
      name: "John Client",
      role: "client",
      status: "active",
      email: "john@client.com",
      joinDate: "2024-02-01",
    },
  ]);

  const [systemAlerts, setSystemAlerts] = useState([
    {
      id: 1,
      message: "Server storage reaching 85% threshold",
      priority: "high",
      time: "10m ago",
    },
    {
      id: 2,
      message: "SSL Certificate renewal in 4 days",
      priority: "medium",
      time: "2h ago",
    },
  ]);

  // Derived Values
  const activeProperties = propertiesData.filter(
    (p) => p.status === "Active"
  ).length;

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Actions
  const deleteUser = (id: number) => {
    if (confirm("Permanently revoke access for this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const resolveAlert = (id: number) => {
    setSystemAlerts(systemAlerts.filter((a) => a.id !== id));
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Home size={20} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              RealEstate
            </h2>
          </div>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
            Management Portal
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "users", label: "Team Members", icon: Users },
            { id: "properties", label: "Listings", icon: Home },
            { id: "financial", label: "Financials", icon: BarChart3 },
            { id: "clients", label: "Clients", icon: UserSquare2 },
            { id: "system", label: "System", icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-800">
          <button
            onClick={() => router.push("/")}
            className="w-full flex items-center justify-center space-x-2 py-3 text-sm font-semibold text-slate-400 hover:text-red-400 transition-colors"
          >
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-bold text-slate-800 capitalize">
              {activeTab}
            </h1>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-xs font-medium text-slate-400">
              Environment: Production
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 text-sm rounded-full transition-all outline-none"
              />
              <Search
                className="absolute left-3 top-2 text-slate-400"
                size={14}
              />
            </div>
            <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
              <div className="text-right">
                <p className="text-xs font-bold">Admin Portal</p>
                <p className="text-[10px] text-slate-500 font-medium">
                  System Administrator
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-bold">
                AD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          {activeTab === "overview" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Active Properties",
                    value: activeProperties,
                    sub: `Of ${propertiesData.length} total`,
                    color: "text-blue-600",
                  },
                  {
                    label: "Revenue (MTD)",
                    value: "R524,000",
                    sub: "+12.4% yield",
                    color: "text-green-600",
                  },
                  {
                    label: "Uptime",
                    value: "99.98%",
                    sub: "Last 30 days",
                    color: "text-slate-800",
                  },
                  {
                    label: "Active Agents",
                    value: "18 / 24",
                    sub: "Currently online",
                    color: "text-indigo-600",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
                  >
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className={`text-2xl font-bold mt-2 ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Alerts Section */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold flex items-center space-x-2">
                      <AlertCircle className="text-orange-500" size={18} />
                      <span>System Attention Required</span>
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {systemAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              alert.priority === "high"
                                ? "bg-red-500 animate-pulse"
                                : "bg-orange-400"
                            }`}
                          />
                          <div>
                            <p className="text-sm font-semibold text-slate-800">
                              {alert.message}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {alert.time}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => resolveAlert(alert.id)}
                          className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
                        >
                          Resolve
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl shadow-slate-200">
                  <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">
                    Master Actions
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <button className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                      <Plus size={16} className="text-blue-400" />
                      <span className="text-sm font-medium">New Listing</span>
                    </button>
                    <button className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                      <Database size={16} className="text-green-400" />
                      <span className="text-sm font-medium">
                        Full System Backup
                      </span>
                    </button>
                    <button className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                      <FileText size={16} className="text-purple-400" />
                      <span className="text-sm font-medium">
                        Export Financials
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-lg text-slate-800">
                    Team Directory
                  </h2>
                  <p className="text-xs text-slate-500">
                    Manage access and account status for all staff
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                  + Add Member
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/80 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">
                        Profile
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">
                        Access Level
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">
                        Status
                      </th>
                      <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredUsers.map((u) => (
                      <tr
                        key={u.id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs uppercase">
                              {u.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800">
                                {u.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {u.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-600 capitalize">
                            {u.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                u.status === "active"
                                  ? "bg-green-500"
                                  : "bg-slate-300"
                              }`}
                            />
                            <span className="text-[11px] font-bold uppercase text-slate-600">
                              {u.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                              <Settings size={16} />
                            </button>
                            <button
                              onClick={() => deleteUser(u.id)}
                              className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "properties" && (
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Portfolio Overview
                  </h2>
                  <p className="text-sm text-slate-500">
                    Live property list and market performance
                  </p>
                </div>
                <div className="flex space-x-4">
                  <select className="bg-white border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 ring-blue-500/10">
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Pending</option>
                  </select>
                  <button className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg">
                    New Property
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {propertiesData.slice(0, 6).map((property) => (
                  <div
                    key={property.id}
                    className="bg-white group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                            property.status === "Active"
                              ? "bg-green-500 text-white"
                              : "bg-orange-500 text-white"
                          }`}
                        >
                          {property.status}
                        </span>
                      </div>
                      <div className="w-full h-full bg-slate-200 animate-pulse" />{" "}
                      {/* Placeholder for real image */}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-slate-800 line-clamp-1">
                        {property.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {property.address}
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-xl font-black text-blue-600">
                          R{property.price.toLocaleString()}
                        </p>
                        <button className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div className="max-w-4xl space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
                  <ShieldCheck className="text-blue-500" />
                  <span>Security & Integrity</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-600">
                          Storage Capacity
                        </span>
                        <span className="text-sm font-bold text-slate-800">
                          82%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[82%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-600">
                          Active API Nodes
                        </span>
                        <span className="text-sm font-bold text-slate-800">
                          4 / 4
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Network Status
                    </p>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="text-green-500" size={16} />
                      <span className="text-sm font-bold">
                        Firewall: Operational
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-bold">Latency: 24ms</span>
                    </div>
                    <button className="w-full mt-4 py-2 border-2 border-slate-900 border-dashed rounded-lg text-xs font-bold hover:bg-slate-900 hover:text-white transition-all">
                      RUN DIAGNOSTICS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
