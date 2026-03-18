"use client";

import { useState, useEffect } from "react";
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
  Percent,
  Activity,
  Shield,
  Cloud,
  Smartphone,
  Globe,
  Moon,
  Sun,
  Radio,
  CheckCircle,
  AlertTriangle as AlertTriangleIcon,
} from "lucide-react";

// ==================== TOAST ====================
const Toast = ({ message, type, onClose }) => (
  <div
    style={{
      position: "fixed",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999,
      backgroundColor:
        type === "success"
          ? "#10b981"
          : type === "error"
            ? "#ef4444"
            : "#3b82f6",
      color: "white",
      padding: "14px 24px",
      borderRadius: "12px",
      fontWeight: "bold",
      fontSize: "15px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      minWidth: "300px",
      justifyContent: "space-between",
    }}
  >
    <span>{message}</span>
    <button
      onClick={onClose}
      style={{
        background: "none",
        border: "none",
        color: "white",
        cursor: "pointer",
      }}
    >
      <X size={18} />
    </button>
  </div>
);

const useToast = () => {
  const [toast, setToast] = useState(null);
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };
  return { toast, showToast };
};

// ==================== MOCK DATA ====================
const performanceMockData = {
  monthlyRevenue: [
    { month: "Jan", revenue: 4200000, target: 3800000 },
    { month: "Feb", revenue: 3800000, target: 4000000 },
    { month: "Mar", revenue: 4500000, target: 4200000 },
    { month: "Apr", revenue: 5100000, target: 4500000 },
    { month: "May", revenue: 4800000, target: 4800000 },
    { month: "Jun", revenue: 8200000, target: 5200000 },
    { month: "Jul", revenue: 9200000, target: 6000000 },
    { month: "Aug", revenue: 8500000, target: 6500000 },
    { month: "Sep", revenue: 7800000, target: 7000000 },
    { month: "Oct", revenue: 9500000, target: 7500000 },
    { month: "Nov", revenue: 10200000, target: 8000000 },
    { month: "Dec", revenue: 12500000, target: 10000000 },
  ],
  agentPerformance: [
    {
      id: 1,
      name: "John Agent",
      dealsClosed: 42,
      revenue: 2800000,
      conversionRate: 32.5,
      clientSatisfaction: 96.2,
      avgDealSize: 2100000,
      performanceScore: 94,
      trend: "up",
    },
    {
      id: 2,
      name: "Sarah Smith",
      dealsClosed: 38,
      revenue: 2100000,
      conversionRate: 28.7,
      clientSatisfaction: 94.8,
      avgDealSize: 1800000,
      performanceScore: 87,
      trend: "stable",
    },
    {
      id: 3,
      name: "Mike Brown",
      dealsClosed: 35,
      revenue: 1900000,
      conversionRate: 26.4,
      clientSatisfaction: 92.5,
      avgDealSize: 1650000,
      performanceScore: 82,
      trend: "up",
    },
    {
      id: 4,
      name: "Emma Wilson",
      dealsClosed: 28,
      revenue: 1400000,
      conversionRate: 24.1,
      clientSatisfaction: 89.3,
      avgDealSize: 1550000,
      performanceScore: 76,
      trend: "down",
    },
    {
      id: 5,
      name: "David Lee",
      dealsClosed: 25,
      revenue: 1200000,
      conversionRate: 22.8,
      clientSatisfaction: 91.7,
      avgDealSize: 1450000,
      performanceScore: 72,
      trend: "up",
    },
    {
      id: 6,
      name: "Lisa Chen",
      dealsClosed: 31,
      revenue: 1650000,
      conversionRate: 27.3,
      clientSatisfaction: 95.4,
      avgDealSize: 1700000,
      performanceScore: 79,
      trend: "stable",
    },
  ],
  propertyTypePerformance: [
    {
      type: "Luxury Apartments",
      revenue: 5200000,
      deals: 28,
      avgPrice: 4500000,
    },
    { type: "Family Homes", revenue: 4200000, deals: 35, avgPrice: 3200000 },
    { type: "Commercial", revenue: 2800000, deals: 12, avgPrice: 6800000 },
    {
      type: "Vacation Properties",
      revenue: 1850000,
      deals: 18,
      avgPrice: 2500000,
    },
    { type: "Townhouses", revenue: 3100000, deals: 24, avgPrice: 2800000 },
    {
      type: "Investment Properties",
      revenue: 3900000,
      deals: 22,
      avgPrice: 4200000,
    },
  ],
  regionalPerformance: [
    { region: "Sandton CBD", revenue: 8500000, growth: 28.5, marketShare: 42 },
    { region: "Midrand", revenue: 4200000, growth: 18.2, marketShare: 21 },
    { region: "Fourways", revenue: 3800000, growth: 24.7, marketShare: 19 },
    { region: "Rosebank", revenue: 3100000, growth: 15.8, marketShare: 16 },
    { region: "Morningside", revenue: 2800000, growth: 12.4, marketShare: 14 },
  ],
  leadSourcePerformance: [
    { source: "Website", leads: 850, conversions: 125, conversionRate: 14.7 },
    { source: "Referrals", leads: 420, conversions: 98, conversionRate: 23.3 },
    {
      source: "Social Media",
      leads: 680,
      conversions: 85,
      conversionRate: 12.5,
    },
    {
      source: "Open Houses",
      leads: 320,
      conversions: 48,
      conversionRate: 15.0,
    },
    {
      source: "Partnerships",
      leads: 240,
      conversions: 42,
      conversionRate: 17.5,
    },
    {
      source: "Repeat Clients",
      leads: 180,
      conversions: 52,
      conversionRate: 28.9,
    },
  ],
  kpiTrends: [
    { month: "Jan", conversion: 24.2, satisfaction: 91.5, responseTime: 15.2 },
    { month: "Feb", conversion: 25.1, satisfaction: 92.3, responseTime: 14.8 },
    { month: "Mar", conversion: 26.8, satisfaction: 93.1, responseTime: 13.5 },
    { month: "Apr", conversion: 27.4, satisfaction: 93.8, responseTime: 12.9 },
    { month: "May", conversion: 28.1, satisfaction: 94.2, responseTime: 12.3 },
    { month: "Jun", conversion: 29.3, satisfaction: 94.7, responseTime: 11.8 },
  ],
  predictiveAnalytics: {
    nextQuarterRevenue: 12800000,
    revenueGrowthRate: 18.5,
    marketTrend: "up",
    optimalListingPrice: { min: 3200000, max: 3800000 },
    bestListingDays: ["Thursday", "Friday"],
    peakHours: ["10:00 AM", "2:00 PM"],
  },
};

// ==================== CHART COMPONENTS ====================
function RevenueChart({ data, darkMode }) {
  const maxRevenue = Math.max(...data.map((d) => d.revenue));
  const BAR_HEIGHT = 180;
  return (
    <div className="relative" style={{ height: "240px" }}>
      {/* Legend */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Actual Revenue
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-300 rounded opacity-60"></div>
          <span
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Target
          </span>
        </div>
      </div>
      {/* Chart area */}
      <div
        className="flex items-end gap-1"
        style={{ height: `${BAR_HEIGHT}px` }}
      >
        {data.slice(-6).map((item) => (
          <div
            key={item.month}
            className="flex-1 flex flex-col items-center justify-end gap-0"
          >
            <div
              className="relative w-full flex justify-center"
              style={{ height: `${BAR_HEIGHT}px` }}
            >
              {/* Target bar */}
              <div
                className="absolute bottom-0 w-3/4 bg-red-300 opacity-40 rounded-t-md"
                style={{
                  height: `${(item.target / maxRevenue) * BAR_HEIGHT}px`,
                }}
              />
              {/* Revenue bar */}
              <div
                className="absolute bottom-0 w-1/2 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md hover:opacity-80 transition-opacity cursor-pointer"
                style={{
                  height: `${(item.revenue / maxRevenue) * BAR_HEIGHT}px`,
                }}
                title={`R ${(item.revenue / 1000000).toFixed(1)}M`}
              >
                {item.revenue >= item.target && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <CheckCircle2 className="text-green-500" size={14} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* X axis labels */}
      <div className="flex mt-2">
        {data.slice(-6).map((item) => (
          <div key={item.month} className="flex-1 flex flex-col items-center">
            <span
              className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {item.month}
            </span>
            <span
              className={`text-[10px] font-bold ${darkMode ? "text-green-300" : "text-green-600"}`}
            >
              R{(item.revenue / 1000000).toFixed(1)}M
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PieChartComponent({ data, darkMode }) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
  ];
  const total = data.reduce((sum, item) => sum + item.revenue, 0);
  return (
    <div className="relative h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-green-500`}
          />
          <div
            className={`absolute inset-8 rounded-full ${darkMode ? "bg-gray-800" : "bg-white"}`}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                R {(total / 1000000).toFixed(1)}M
              </p>
              <p
                className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Total
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={item.type} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded ${colors[index % colors.length]}`}
              ></div>
              <span
                className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LineChartComponent({ data, darkMode }) {
  return (
    <div className="relative h-64">
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 25, 50, 75, 100].map((percent) => (
            <div
              key={percent}
              className={`border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
            />
          ))}
        </div>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            points={data
              .map(
                (d, i) =>
                  `${(i / (data.length - 1)) * 100},${100 - d.conversion}`,
              )
              .join(" ")}
          />
          <polyline
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            points={data
              .map(
                (d, i) =>
                  `${(i / (data.length - 1)) * 100},${100 - d.satisfaction}`,
              )
              .join(" ")}
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between">
        {data.map((d, i) => (
          <span
            key={i}
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            {d.month}
          </span>
        ))}
      </div>
      <div className="absolute top-0 left-0 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-blue-500"></div>
          <span
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Conversion %
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-green-500"></div>
          <span
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Satisfaction %
          </span>
        </div>
      </div>
    </div>
  );
}

function BarChartComponent({ data, darkMode }) {
  const maxValue = Math.max(...data.map((d) => d.leads));
  const BAR_HEIGHT = 160;
  return (
    <div style={{ height: "220px" }}>
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Leads
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Conversions
          </span>
        </div>
      </div>
      <div
        className="flex items-end gap-2"
        style={{ height: `${BAR_HEIGHT}px` }}
      >
        {data.map((item) => (
          <div
            key={item.source}
            className="flex-1 flex flex-col items-center justify-end gap-0.5"
          >
            <div
              className="w-full flex items-end justify-center gap-0.5"
              style={{ height: `${BAR_HEIGHT}px` }}
            >
              <div
                className="w-5/12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md hover:opacity-80 transition-opacity"
                style={{ height: `${(item.leads / maxValue) * BAR_HEIGHT}px` }}
                title={`${item.leads} leads`}
              />
              <div
                className="w-5/12 bg-gradient-to-t from-green-600 to-green-400 rounded-t-md hover:opacity-80 transition-opacity"
                style={{
                  height: `${(item.conversions / maxValue) * BAR_HEIGHT}px`,
                }}
                title={`${item.conversions} conversions (${item.conversionRate}%)`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-1">
        {data.map((item) => (
          <div key={item.source} className="flex-1 text-center">
            <span
              className={`text-[10px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              {item.source}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== MANAGER INTEGRATION PANEL ====================
function ManagerIntegrationPanel({ darkMode, showToast }) {
  const [agentStatus, setAgentStatus] = useState([
    {
      id: 1,
      name: "John Agent",
      status: "checked-in",
      location: "Sandton CBD",
      lastCheckIn: "09:15 AM",
    },
    {
      id: 2,
      name: "Sarah Smith",
      status: "checked-in",
      location: "Office HQ",
      lastCheckIn: "08:45 AM",
    },
    {
      id: 3,
      name: "Mike Brown",
      status: "checked-out",
      location: "Last: Morningside",
      lastCheckIn: "Yesterday",
    },
  ]);

  const [communications, setCommunications] = useState([
    {
      id: 1,
      type: "agent_checkin",
      agent: "John Agent",
      message: "Checked in at Sandton CBD",
      time: "5 min ago",
    },
    {
      id: 2,
      type: "property_view",
      agent: "John Agent",
      message: "Viewed Sandton Apartment",
      time: "15 min ago",
    },
    {
      id: 3,
      type: "message",
      from: "Admin",
      message: "System maintenance scheduled",
      time: "1 hour ago",
    },
  ]);

  const [isConnected, setIsConnected] = useState(true);

  const sendAlertToAll = () => {
    const newComm = {
      id: Date.now(),
      type: "alert",
      from: "Management",
      message: "ALERT: Urgent team update — please check your schedule",
      time: "Just now",
    };
    setCommunications([newComm, ...communications.slice(0, 4)]);
    showToast("Alert sent to all agents!", "success");
  };

  const exportAgentData = () => {
    const data = {
      exportTime: new Date().toISOString(),
      agentStatus,
      communications,
      type: "manager_dashboard",
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `agent_tracking_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Agent data exported successfully!", "success");
  };

  const toggleAgentStatus = (id) => {
    setAgentStatus(
      agentStatus.map((agent) =>
        agent.id === id
          ? {
              ...agent,
              status:
                agent.status === "checked-in" ? "checked-out" : "checked-in",
            }
          : agent,
      ),
    );
    const agent = agentStatus.find((a) => a.id === id);
    showToast(
      `${agent?.name} ${agent?.status === "checked-in" ? "checked out" : "checked in"}`,
      "info",
    );
  };

  return (
    <div
      className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl border ${darkMode ? "border-gray-700" : "border-gray-200"} p-6 mb-6`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Radio
            className={isConnected ? "text-green-500" : "text-red-500"}
            size={20}
          />
          Manager Control Panel
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsConnected(!isConnected);
              showToast(
                isConnected
                  ? "Disconnected from live feed"
                  : "Connected to live feed",
                isConnected ? "error" : "success",
              );
            }}
            className={`px-3 py-1 rounded text-sm font-medium ${isConnected ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {isConnected ? "Connected" : "Disconnected"}
          </button>
          <button
            onClick={exportAgentData}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium"
          >
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {agentStatus.map((agent) => (
          <div
            key={agent.id}
            className={`p-4 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${agent.status === "checked-in" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                />
                <span className="font-bold">{agent.name}</span>
              </div>
              <button
                onClick={() => toggleAgentStatus(agent.id)}
                className={`px-2 py-1 text-xs rounded ${agent.status === "checked-in" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
              >
                {agent.status === "checked-in" ? "Force Check Out" : "Check In"}
              </button>
            </div>
            <div className="text-sm text-gray-500">
              <div>Location: {agent.location}</div>
              <div>Last Check-in: {agent.lastCheckIn}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={sendAlertToAll}
          className="bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold"
        >
          Send Alert to All
        </button>
        <button
          onClick={() =>
            showToast("Broadcasting message to all dashboards...", "info")
          }
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-bold"
        >
          Broadcast Message
        </button>
      </div>

      <div className={`border-t pt-4 ${darkMode ? "border-gray-700" : ""}`}>
        <h4 className="font-bold mb-3">Recent Activity</h4>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {communications.map((comm) => (
            <div
              key={comm.id}
              className={`p-2 rounded ${comm.type === "alert" ? "bg-red-50 border-l-4 border-red-500" : darkMode ? "bg-gray-700" : "bg-gray-50"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {comm.type === "agent_checkin" && (
                    <CheckCircle className="text-green-500" size={16} />
                  )}
                  {comm.type === "property_view" && (
                    <Eye className="text-blue-500" size={16} />
                  )}
                  {comm.type === "message" && (
                    <MessageSquare className="text-purple-500" size={16} />
                  )}
                  {comm.type === "alert" && (
                    <AlertTriangleIcon className="text-red-500" size={16} />
                  )}
                  <span className="font-medium">
                    {comm.agent || comm.from || "System"}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{comm.time}</span>
              </div>
              <div
                className={`text-sm mt-1 ml-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {comm.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== METRIC CARD ====================
function MetricCard({ title, value, description, trend, darkMode }) {
  return (
    <div
      className={`p-4 rounded-xl border ${darkMode ? "border-gray-700" : "border-gray-100"}`}
    >
      <p
        className={`text-xs font-medium mb-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      >
        {title}
      </p>
      <p
        className={`text-lg font-bold mb-1 ${darkMode ? "text-white" : "text-slate-900"}`}
      >
        {value}
      </p>
      <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
        {description}
      </p>
      <p
        className={`text-xs mt-2 ${darkMode ? "text-green-300" : "text-green-600"}`}
      >
        {trend}
      </p>
    </div>
  );
}

// ==================== PERFORMANCE ANALYTICS VIEW ====================
function PerformanceAnalyticsView({ darkMode, showToast, setActiveTab }) {
  const [timeRange, setTimeRange] = useState("month");
  const [selectedAgent, setSelectedAgent] = useState("all");
  const [viewType, setViewType] = useState("overview");

  const agents = [
    { id: "all", name: "All Agents" },
    { id: "john", name: "John Agent" },
    { id: "sarah", name: "Sarah Smith" },
    { id: "mike", name: "Mike Brown" },
    { id: "emma", name: "Emma Wilson" },
  ];

  const handleExport = () => {
    const data = {
      timestamp: new Date().toISOString(),
      timeRange,
      selectedAgent,
      data: performanceMockData,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `performance_data_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    showToast("Performance data exported successfully!", "success");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1
              className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Performance Analytics
            </h1>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700"}`}
            >
              LIVE DATA
            </span>
          </div>
          <p
            className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
          >
            Advanced performance tracking and analytics
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className={`px-3 py-2 rounded-lg border text-sm ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-200"}`}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
          <select
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
            className={`px-3 py-2 rounded-lg border text-sm ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-200"}`}
          >
            {agents.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleExport}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm ${darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-white border border-gray-200 text-slate-600 hover:bg-gray-50"}`}
          >
            <Download size={18} /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Revenue",
            value: "R 8.2M",
            change: "+18.5%",
            icon: TrendingUp,
            color: "text-green-500",
          },
          {
            label: "Deals Closed",
            value: "156",
            change: "+12.3%",
            icon: CheckCircle2,
            color: "text-blue-500",
          },
          {
            label: "Conversion Rate",
            value: "24.7%",
            change: "Industry avg: 21.5%",
            icon: Percent,
            color: "text-purple-500",
          },
          {
            label: "Client Satisfaction",
            value: "94.2%",
            change: "Excellent",
            icon: Star,
            color: "text-yellow-500",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p
                  className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {stat.label}
                </p>
                <p
                  className={`text-2xl font-bold mt-1 ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {stat.value}
                </p>
              </div>
              <stat.icon className={stat.color} size={24} />
            </div>
            <p
              className={`text-sm ${darkMode ? "text-green-300" : "text-green-600"}`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
        >
          <h3
            className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
          >
            Revenue Trend vs Target
          </h3>
          <RevenueChart
            data={performanceMockData.monthlyRevenue}
            darkMode={darkMode}
          />
        </div>
        <div
          className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3
              className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
            >
              Property Type Performance
            </h3>
            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className={`px-3 py-1 rounded-lg border text-sm ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-200"}`}
            >
              <option value="overview">Revenue</option>
              <option value="detailed">Deals</option>
            </select>
          </div>
          <PieChartComponent
            data={performanceMockData.propertyTypePerformance}
            darkMode={darkMode}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
        >
          <h3
            className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
          >
            KPI Trends
          </h3>
          <LineChartComponent
            data={performanceMockData.kpiTrends}
            darkMode={darkMode}
          />
        </div>
        <div
          className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
        >
          <h3
            className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
          >
            Lead Source Performance
          </h3>
          <BarChartComponent
            data={performanceMockData.leadSourcePerformance}
            darkMode={darkMode}
          />
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <h3
          className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
        >
          Agent Performance Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              >
                {[
                  "Agent",
                  "Performance Score",
                  "Deals Closed",
                  "Revenue",
                  "Conversion Rate",
                  "Satisfaction",
                  "Trend",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left py-3 px-4 text-sm font-medium text-gray-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {performanceMockData.agentPerformance.map((agent) => (
                <tr
                  key={agent.id}
                  className={`border-b ${darkMode ? "border-gray-700 hover:bg-gray-700/50" : "hover:bg-gray-50"}`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${darkMode ? "bg-blue-700" : "bg-blue-500"}`}
                      >
                        {agent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium">{agent.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-24 h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                      >
                        <div
                          className={`h-full rounded-full ${agent.performanceScore >= 90 ? "bg-green-500" : agent.performanceScore >= 80 ? "bg-blue-500" : "bg-yellow-500"}`}
                          style={{ width: `${agent.performanceScore}%` }}
                        />
                      </div>
                      <span className="font-bold">
                        {agent.performanceScore}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-medium">{agent.dealsClosed}</td>
                  <td className="py-4 px-4 font-bold text-green-600">
                    R {(agent.revenue / 1000000).toFixed(1)}M
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-sm font-medium ${agent.conversionRate >= 25 ? "text-green-600" : "text-yellow-600"}`}
                    >
                      {agent.conversionRate}%{" "}
                      {agent.conversionRate >= 25 ? "✓" : "⚠"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" size={14} />
                      <span>{agent.clientSatisfaction}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {agent.trend === "up" && (
                      <TrendingUp className="text-green-500" size={20} />
                    )}
                    {agent.trend === "down" && (
                      <TrendingDown className="text-red-500" size={20} />
                    )}
                    {agent.trend === "stable" && (
                      <Activity className="text-blue-500" size={20} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <h3
          className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
        >
          Regional Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {performanceMockData.regionalPerformance.map((region, index) => (
            <div
              key={region.region}
              className={`p-4 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-50"} border-l-4 ${["border-blue-500", "border-green-500", "border-purple-500", "border-yellow-500", "border-red-500"][index]}`}
            >
              <p className="font-bold">{region.region}</p>
              <p className="text-sm text-gray-500">
                Market Share: {region.marketShare}%
              </p>
              <p className="text-2xl font-bold mt-2">
                R {(region.revenue / 1000000).toFixed(1)}M
              </p>
              <p className="text-sm text-green-600 mt-1">
                ↑ {region.growth}% growth
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 border ${darkMode ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-800/30" : "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
          >
            Predictive Analytics
          </h3>
          <Zap className="text-yellow-500" size={24} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              color: "text-green-500",
              label: "Next Quarter Forecast",
              value: `R ${(performanceMockData.predictiveAnalytics.nextQuarterRevenue / 1000000).toFixed(1)}M`,
              sub: `↑ ${performanceMockData.predictiveAnalytics.revenueGrowthRate}% expected growth`,
            },
            {
              icon: DollarSign,
              color: "text-blue-500",
              label: "Optimal Listing Price",
              value: `R ${performanceMockData.predictiveAnalytics.optimalListingPrice.min.toLocaleString()} - R ${performanceMockData.predictiveAnalytics.optimalListingPrice.max.toLocaleString()}`,
              sub: "Based on current market trends",
            },
            {
              icon: Calendar,
              color: "text-purple-500",
              label: "Best Time to List",
              value:
                performanceMockData.predictiveAnalytics.bestListingDays.join(
                  " & ",
                ),
              sub: `Peak hours: ${performanceMockData.predictiveAnalytics.peakHours.join(" - ")}`,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <item.icon className={item.color} size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <h3
          className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
        >
          Key Performance Metrics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <MetricCard
            title="Lead Response Time"
            value="12m 34s"
            description="Avg time to respond"
            trend="↓ 15% this month"
            darkMode={darkMode}
          />
          <MetricCard
            title="Viewing to Offer"
            value="4.2 days"
            description="Days from viewing to offer"
            trend="Industry: 5.1 days"
            darkMode={darkMode}
          />
          <MetricCard
            title="Offer to Close"
            value="18.5 days"
            description="Days from offer to close"
            trend="↓ 2.3 days"
            darkMode={darkMode}
          />
          <MetricCard
            title="Avg Property Views"
            value="124"
            description="Per property"
            trend="↑ 18 views"
            darkMode={darkMode}
          />
          <MetricCard
            title="Client Retention"
            value="87.3%"
            description="Year-over-year"
            trend="Excellent"
            darkMode={darkMode}
          />
        </div>
      </div>

      <div
        className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3
            className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
          >
            Performance Insights
          </h3>
          <Zap
            className={darkMode ? "text-yellow-400" : "text-yellow-500"}
            size={24}
          />
        </div>
        <div className="space-y-4">
          {[
            "Revenue growth accelerated in June by 28% month-over-month",
            "Conversion rate improved by 3.2% compared to last quarter",
            "Lead response time reduced by 15% this month",
            "Client satisfaction remains above industry average of 89%",
          ].map((insight, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
            >
              <CheckCircle2
                className="text-green-500 flex-shrink-0 mt-0.5"
                size={16}
              />
              <p
                className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-700"}`}
              >
                {insight}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <p
            className={`text-sm font-medium ${darkMode ? "text-green-300" : "text-green-700"}`}
          >
            💡 Recommendation: Focus on reducing lead response time. Agents
            responding within 5 minutes have 3x higher conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
}

// ==================== MANAGER VIEW ====================
function ManagerView({ activeTab, setActiveTab, darkMode, showToast }) {
  const demoStats = {
    totalRevenue: "R 12.8M",
    avgDealSize: "R 1.2M",
    clientGrowth: "24%",
    marketShare: "18%",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "agent-control":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1
                    className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Agent Control Center
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700"}`}
                  >
                    LIVE TRACKING
                  </span>
                </div>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Real-time agent tracking and management
                </p>
              </div>
            </div>
            <ManagerIntegrationPanel
              darkMode={darkMode}
              showToast={showToast}
            />
            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <h3
                className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                Integration Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: MapPin,
                    color: "text-blue-500",
                    label: "Live Location",
                    desc: "Track agent locations in real-time",
                  },
                  {
                    icon: Bell,
                    color: "text-amber-500",
                    label: "Instant Alerts",
                    desc: "Broadcast alerts to all agents",
                  },
                  {
                    icon: Download,
                    color: "text-green-500",
                    label: "Data Export",
                    desc: "Export tracking data for analysis",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-4 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className={item.color} size={20} />
                      <p className="font-bold">{item.label}</p>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "perf":
        return (
          <PerformanceAnalyticsView
            darkMode={darkMode}
            showToast={showToast}
            setActiveTab={setActiveTab}
          />
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div>
              <h1
                className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Advanced Analytics
              </h1>
              <p
                className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                Deep insights and predictive analytics
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div
                className={`lg:col-span-2 rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Market Trends Analysis
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      label: "Price Per Square Meter",
                      value: "R 42,500",
                      change: "↑ 8.2%",
                      sub: "Sandton CBD average",
                      up: true,
                    },
                    {
                      label: "Days on Market",
                      value: "24.3",
                      change: "↓ 3.7",
                      sub: "Reduced by 13%",
                      up: false,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`p-4 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
                    >
                      <p
                        className={`text-sm font-medium mb-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {item.label}
                      </p>
                      <div className="flex items-end gap-2">
                        <p
                          className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                          {item.value}
                        </p>
                        <p
                          className={`text-sm ${item.up ? "text-green-600" : "text-red-600"}`}
                        >
                          {item.change}
                        </p>
                      </div>
                      <p
                        className={`text-xs mt-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                      >
                        {item.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`rounded-2xl p-6 border ${darkMode ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-800/30" : "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100"}`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Predictive Insights
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      color: "bg-green-500",
                      text: "Revenue forecast: ",
                      bold: "+22% next quarter",
                    },
                    {
                      color: "bg-blue-500",
                      text: "Optimal listing price: ",
                      bold: "R 3.2M - R 3.8M",
                    },
                    {
                      color: "bg-yellow-500",
                      text: "Best time to list: ",
                      bold: "Thursday AM",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${item.color}`}
                      ></div>
                      <p
                        className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                      >
                        {item.text}
                        <span className="font-bold">{item.bold}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Export Analytics Data
                </h3>
                <Download
                  className={darkMode ? "text-blue-400" : "text-blue-500"}
                  size={24}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: TrendingUp,
                    color: "text-green-500",
                    label: "Market Trends",
                    desc: "Historical data & forecasts",
                  },
                  {
                    icon: Users,
                    color: "text-blue-500",
                    label: "Agent Analytics",
                    desc: "Performance metrics",
                  },
                  {
                    icon: Building2,
                    color: "text-purple-500",
                    label: "Property Analytics",
                    desc: "Portfolio performance",
                  },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() =>
                      showToast(`Exporting ${item.label}...`, "success")
                    }
                    className={`p-4 rounded-xl text-left flex items-center justify-between ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"}`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={item.color} size={20} />
                      <div>
                        <p className="text-sm font-bold">{item.label}</p>
                        <p className="text-xs opacity-70">{item.desc}</p>
                      </div>
                    </div>
                    <Download size={16} className="opacity-50" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case "overview":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1
                    className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Manager CRM Dashboard
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700"}`}
                  >
                    LIVE DATA
                  </span>
                </div>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Real-time tracking & advanced analytics
                </p>
              </div>
              <button
                onClick={() =>
                  showToast("Broadcast alert sent to all agents!", "success")
                }
                className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold text-sm shadow-md ${darkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-[#1F4EA0] text-white hover:bg-blue-800"}`}
              >
                <Send size={18} /> Broadcast Alert
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Total Revenue",
                  value: demoStats.totalRevenue,
                  trend: "+24% this quarter",
                  icon: (
                    <span className="text-green-500 font-bold text-lg">R</span>
                  ),
                  trendColor: "text-green-600",
                },
                {
                  title: "Avg Deal Size",
                  value: demoStats.avgDealSize,
                  trend: "Industry average: R 980K",
                  icon: <TrendingUp className="text-blue-500" size={20} />,
                  trendColor: "text-blue-600",
                },
                {
                  title: "Client Growth",
                  value: demoStats.clientGrowth,
                  trend: "+42 new clients",
                  icon: <Users className="text-purple-500" size={20} />,
                  trendColor: "text-purple-600",
                },
                {
                  title: "Market Share",
                  value: demoStats.marketShare,
                  trend: "Leading in Sandton",
                  icon: <Award className="text-amber-500" size={20} />,
                  trendColor: "text-amber-600",
                },
              ].map((stat, i) => (
                <StatCard
                  key={i}
                  title={stat.title}
                  value={stat.value}
                  trend={stat.trend}
                  icon={stat.icon}
                  trendColor={stat.trendColor}
                  darkMode={darkMode}
                  onClick={() =>
                    showToast(`${stat.title}: ${stat.value}`, "info")
                  }
                />
              ))}
            </div>

            <ManagerIntegrationPanel
              darkMode={darkMode}
              showToast={showToast}
            />

            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Performance Overview
                </h3>
                <button
                  onClick={() => setActiveTab("perf")}
                  className={`px-4 py-2 rounded-xl font-bold text-sm ${darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-slate-700 hover:bg-gray-200"}`}
                >
                  View Details →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-48">
                  <RevenueChart
                    data={performanceMockData.monthlyRevenue.slice(-6)}
                    darkMode={darkMode}
                  />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold mb-4 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    Top Performing Agents
                  </h4>
                  <div className="space-y-3">
                    {performanceMockData.agentPerformance
                      .slice(0, 3)
                      .map((agent) => (
                        <div
                          key={agent.id}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${agent.trend === "up" ? "bg-green-500" : agent.trend === "down" ? "bg-red-500" : "bg-yellow-500"}`}
                            />
                            <span className="font-medium">{agent.name}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold">
                              R {(agent.revenue / 1000000).toFixed(1)}M
                            </span>
                            <span
                              className={`text-sm ${agent.performanceScore >= 90 ? "text-green-500" : "text-blue-500"}`}
                            >
                              {agent.performanceScore}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "agents":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1
                  className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Agent Management
                </h1>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Manage and monitor your agent team
                </p>
              </div>
              <button
                onClick={() =>
                  showToast(
                    "Add Agent form — opens with automated onboarding workflow",
                    "info",
                  )
                }
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${darkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                <Plus size={16} /> Add Agent
              </button>
            </div>
            <ManagerIntegrationPanel
              darkMode={darkMode}
              showToast={showToast}
            />
            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <h3
                className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                Agent Performance Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr
                      className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                    >
                      {[
                        "Agent",
                        "Performance",
                        "Deals Closed",
                        "Revenue",
                        "Conversion",
                        "Actions",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left py-3 px-4 text-sm font-medium text-gray-500"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {performanceMockData.agentPerformance.map((agent) => (
                      <tr
                        key={agent.id}
                        className={`border-b ${darkMode ? "border-gray-700 hover:bg-gray-700/50" : "hover:bg-gray-50"}`}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${darkMode ? "bg-blue-700" : "bg-blue-500"}`}
                            >
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <span className="font-medium">{agent.name}</span>
                              <div className="flex items-center gap-1">
                                <div
                                  className={`w-2 h-2 rounded-full ${agent.trend === "up" ? "bg-green-500" : agent.trend === "down" ? "bg-red-500" : "bg-yellow-500"}`}
                                />
                                <span className="text-xs text-gray-500">
                                  {agent.trend}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-20 h-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
                            >
                              <div
                                className={`h-full rounded-full ${agent.performanceScore >= 90 ? "bg-green-500" : agent.performanceScore >= 80 ? "bg-blue-500" : "bg-yellow-500"}`}
                                style={{ width: `${agent.performanceScore}%` }}
                              />
                            </div>
                            <span className="font-bold text-sm">
                              {agent.performanceScore}%
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-medium">
                          {agent.dealsClosed}
                        </td>
                        <td className="py-4 px-4 font-bold text-green-600">
                          R {(agent.revenue / 1000000).toFixed(1)}M
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-bold ${agent.conversionRate >= 25 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                          >
                            {agent.conversionRate}%
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button
                            onClick={() =>
                              showToast(
                                `Opening analytics for ${agent.name}`,
                                "info",
                              )
                            }
                            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg font-medium"
                          >
                            Analyze
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "props":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1
                  className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  All Properties
                </h1>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Manage all company properties
                </p>
              </div>
              <button
                onClick={() =>
                  showToast(
                    "Add Property — opens listing form with MLS sync",
                    "info",
                  )
                }
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${darkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                <Plus size={16} /> Add Property
              </button>
            </div>
            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <h3
                className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                Property Performance Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-64">
                  <PieChartComponent
                    data={performanceMockData.propertyTypePerformance}
                    darkMode={darkMode}
                  />
                </div>
                <div>
                  <h4 className="font-bold mb-4">
                    Top Performing Property Types
                  </h4>
                  <div className="space-y-3">
                    {performanceMockData.propertyTypePerformance.map(
                      (type, index) => (
                        <div
                          key={type.type}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-full ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-green-500" : "bg-purple-500"}`}
                            />
                            <span className="font-medium">{type.type}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold">
                              R {(type.revenue / 1000000).toFixed(1)}M
                            </span>
                            <span className="text-sm text-gray-500">
                              {type.deals} deals
                            </span>
                          </div>
                        </div>
                      ),
                    )}
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
              <div>
                <h1
                  className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  Reports & Analytics
                </h1>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Generate and download comprehensive reports
                </p>
              </div>
              <button
                onClick={() => {
                  const data = {
                    timestamp: new Date().toISOString(),
                    type: "comprehensive_report",
                    data: { performance: performanceMockData },
                  };
                  const blob = new Blob([JSON.stringify(data, null, 2)], {
                    type: "application/json",
                  });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `comprehensive_report_${new Date().toISOString().split("T")[0]}.json`;
                  a.click();
                  showToast("Comprehensive report downloaded!", "success");
                }}
                className={`px-4 py-2 rounded-xl font-bold flex items-center gap-2 ${darkMode ? "bg-blue-700 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                <Download size={16} /> Generate Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "Revenue Reports",
                  desc: "Monthly, quarterly, and annual revenue analysis",
                  color: "bg-blue-600",
                  action: () =>
                    showToast("Revenue report generating...", "success"),
                },
                {
                  label: "Agent Performance",
                  desc: "Individual and team performance metrics",
                  color: "bg-green-600",
                  action: () =>
                    showToast(
                      "Agent performance report generating...",
                      "success",
                    ),
                },
                {
                  label: "Market Analysis",
                  desc: "Regional and property type analysis",
                  color: "bg-purple-600",
                  action: () =>
                    showToast(
                      "Market analysis report generating...",
                      "success",
                    ),
                },
              ].map((r) => (
                <div
                  key={r.label}
                  className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
                >
                  <h4 className="font-bold mb-4">{r.label}</h4>
                  <p className="text-sm text-gray-500 mb-4">{r.desc}</p>
                  <button
                    onClick={r.action}
                    className={`w-full py-2 ${r.color} text-white rounded-lg font-medium`}
                  >
                    Generate {r.label.split(" ")[0]} Report
                  </button>
                </div>
              ))}
            </div>

            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <h4 className="font-bold mb-6">Recent Reports</h4>
              <div className="space-y-3">
                {[
                  {
                    name: "Q3 2024 Revenue Report",
                    date: "Oct 15, 2024",
                    type: "Revenue",
                  },
                  {
                    name: "Agent Performance - September",
                    date: "Oct 1, 2024",
                    type: "Performance",
                  },
                  {
                    name: "Market Analysis - Sandton Region",
                    date: "Sep 28, 2024",
                    type: "Market",
                  },
                  {
                    name: "Lead Conversion Analysis",
                    date: "Sep 15, 2024",
                    type: "Analytics",
                  },
                ].map((report, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 border rounded-lg ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                  >
                    <div>
                      <p className="font-medium">{report.name}</p>
                      <p className="text-sm text-gray-500">{report.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        {report.type}
                      </span>
                      <button
                        onClick={() =>
                          showToast(`Downloading ${report.name}...`, "success")
                        }
                        className="text-blue-600"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div
            className={`rounded-[2rem] border shadow-sm p-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
            >
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard
            </h2>
            <p className={darkMode ? "text-gray-300" : "text-slate-500"}>
              This feature is fully implemented in the complete platform.
            </p>
            <ul className="mt-4 space-y-2 text-slate-500">
              {[
                "Advanced analytics with custom metrics",
                "Automated reporting and scheduling",
                "Real-time data synchronization",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return renderTabContent();
}

// ==================== AGENT VIEW ====================
function AgentView({ activeTab, setActiveTab, darkMode, showToast }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case "perf":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <h1
                  className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  My Performance Dashboard
                </h1>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Track your performance metrics and analytics
                </p>
              </div>
              <button
                onClick={() => {
                  const blob = new Blob(
                    [
                      JSON.stringify(
                        {
                          timestamp: new Date().toISOString(),
                          agent: "Sarah Smith",
                          performance: performanceMockData.agentPerformance[1],
                        },
                        null,
                        2,
                      ),
                    ],
                    { type: "application/json" },
                  );
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `my_performance_${new Date().toISOString().split("T")[0]}.json`;
                  a.click();
                  showToast("Performance report exported!", "success");
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm ${darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-white border border-gray-200 text-slate-600 hover:bg-gray-50"}`}
              >
                <Download size={18} /> Export Report
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "My Rank",
                  value: "#2",
                  icon: Award,
                  color: "text-yellow-500",
                  trend: "Top 10% of agents",
                },
                {
                  label: "Conversion Rate",
                  value: "28.7%",
                  icon: Percent,
                  color: "text-blue-500",
                  trend: "↑ 3.2% from last month",
                },
                {
                  label: "Avg Commission",
                  value: "R 25,400",
                  icon: DollarSign,
                  color: "text-green-500",
                  trend: "Per deal closed",
                },
                {
                  label: "Client Satisfaction",
                  value: "94.8%",
                  icon: Star,
                  color: "text-purple-500",
                  trend: "15+ reviews",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className={s.color} size={24} />
                    <p
                      className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {s.label}
                    </p>
                  </div>
                  <p
                    className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    {s.value}
                  </p>
                  <p
                    className={`text-xs mt-2 ${darkMode ? "text-green-300" : "text-green-600"}`}
                  >
                    {s.trend}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div
                className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Performance Trend
                </h3>
                <div className="h-48">
                  <LineChartComponent
                    data={performanceMockData.kpiTrends}
                    darkMode={darkMode}
                  />
                </div>
              </div>
              <div
                className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Commission Breakdown
                </h3>
                <div className="h-48">
                  <PieChartComponent
                    data={[
                      { type: "Luxury Properties", revenue: 1200000 },
                      { type: "Family Homes", revenue: 650000 },
                      { type: "Commercial", revenue: 150000 },
                      { type: "Other", revenue: 100000 },
                    ]}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-8">
            <div>
              <h1
                className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                My Analytics
              </h1>
              <p
                className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                Personal insights and growth opportunities
              </p>
            </div>
            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <h3
                className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                Strengths & Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: CheckCircle2,
                    color: "text-green-500",
                    label: "Top Strengths",
                    bg: darkMode
                      ? "bg-green-900/20 border-green-800/30"
                      : "bg-green-50 border-green-100",
                    items: [
                      "Excellent client communication (98% satisfaction)",
                      "Strong negotiation skills (avg. 4.2% above asking)",
                      "Quick response time (avg. 8 minutes)",
                      "High repeat client rate (32% of business)",
                    ],
                  },
                  {
                    icon: Target,
                    color: "text-blue-500",
                    label: "Growth Areas",
                    bg: darkMode
                      ? "bg-blue-900/20 border-blue-800/30"
                      : "bg-blue-50 border-blue-100",
                    items: [
                      "Increase lead conversion by 5% (currently 28.7%)",
                      "Expand luxury property portfolio by 15%",
                      "Reduce listing to offer time by 2 days",
                      "Increase social media leads by 20%",
                    ],
                  },
                ].map((section) => (
                  <div
                    key={section.label}
                    className={`p-4 rounded-xl border ${section.bg}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <section.icon className={section.color} size={20} />
                      <p
                        className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        {section.label}
                      </p>
                    </div>
                    <ul
                      className={`text-sm space-y-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}
                    >
                      {section.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <h3
                className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : "text-slate-800"}`}
              >
                Lead Source Analysis
              </h3>
              <div className="h-64">
                <BarChartComponent
                  data={performanceMockData.leadSourcePerformance}
                  darkMode={darkMode}
                />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  💡 <span className="font-medium">Insight:</span> Referrals
                  have the highest conversion rate (23.3%). Focus on nurturing
                  existing client relationships.
                </p>
              </div>
            </div>
          </div>
        );

      case "overview":
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1
                    className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Agent Intelligence Dashboard
                  </h1>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"}`}
                  >
                    TOP 10%
                  </span>
                </div>
                <p
                  className={`font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                >
                  Personal analytics and performance tracking
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "My Ranking",
                  value: "#2",
                  trend: "Top performer",
                  icon: <Award className="text-yellow-500" size={20} />,
                  trendColor: "text-yellow-600",
                },
                {
                  title: "Monthly Revenue",
                  value: "R 2.1M",
                  trend: "+15% this month",
                  icon: <TrendingUp className="text-green-500" size={20} />,
                  trendColor: "text-green-600",
                },
                {
                  title: "Active Listings",
                  value: "18",
                  trend: "5 pending offers",
                  icon: <Building2 className="text-blue-500" size={20} />,
                  trendColor: "text-blue-600",
                },
                {
                  title: "Client Satisfaction",
                  value: "94.8%",
                  trend: "15+ reviews",
                  icon: <Star className="text-purple-500" size={20} />,
                  trendColor: "text-purple-600",
                },
              ].map((stat, i) => (
                <StatCard
                  key={i}
                  title={stat.title}
                  value={stat.value}
                  trend={stat.trend}
                  icon={stat.icon}
                  trendColor={stat.trendColor}
                  darkMode={darkMode}
                  onClick={() =>
                    showToast(`${stat.title}: ${stat.value}`, "info")
                  }
                />
              ))}
            </div>

            <div
              className={`rounded-2xl p-6 border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3
                  className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Performance Overview
                </h3>
                <button
                  onClick={() => setActiveTab("perf")}
                  className={`px-4 py-2 rounded-xl font-bold text-sm ${darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-slate-700 hover:bg-gray-200"}`}
                >
                  View Analytics →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-48">
                  <LineChartComponent
                    data={performanceMockData.kpiTrends}
                    darkMode={darkMode}
                  />
                </div>
                <div className="h-48">
                  <PieChartComponent
                    data={[
                      { type: "Luxury Properties", revenue: 1200000 },
                      { type: "Family Homes", revenue: 650000 },
                      { type: "Commercial", revenue: 150000 },
                      { type: "Other", revenue: 100000 },
                    ]}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div
            className={`rounded-[2rem] border shadow-sm p-8 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
            >
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}{" "}
              Management
            </h2>
            <p className={darkMode ? "text-gray-300" : "text-slate-500"}>
              This feature is fully implemented in the complete platform.
            </p>
            <ul className="mt-4 space-y-2 text-slate-500">
              {[
                "Automated workflows",
                "Real-time notifications",
                "Mobile app integration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return renderTabContent();
}

// ==================== SIDEBAR & STAT COMPONENTS ====================
function SidebarLink({ icon, label, active, onClick, darkMode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl transition-all ${active ? `${darkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-50 text-blue-600"} font-bold` : `${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-slate-500 hover:bg-gray-50"}`}`}
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
  darkMode,
}) {
  return (
    <div
      onClick={onClick}
      className={`p-7 rounded-[2.2rem] border shadow-sm transition-all ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} ${interactive ? "hover:border-blue-300 hover:shadow-md cursor-pointer group" : ""}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p
            className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${darkMode ? "text-gray-400" : "text-gray-400"}`}
          >
            {title}
          </p>
          <h4
            className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"} ${interactive ? "group-hover:text-blue-700 transition-colors" : ""}`}
          >
            {value}
          </h4>
        </div>
        <div
          className={`p-3 rounded-2xl transition-colors ${interactive ? (darkMode ? "bg-gray-700 group-hover:bg-blue-900/30" : "bg-gray-50 group-hover:bg-blue-50") : darkMode ? "bg-gray-700" : "bg-gray-50"}`}
        >
          {icon}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className={`text-[11px] font-bold ${trendColor}`}>{trend}</p>
        {interactive && (
          <ChevronRight
            size={12}
            className={
              darkMode
                ? "text-gray-600 group-hover:text-blue-400"
                : "text-gray-300 group-hover:text-blue-400"
            }
          />
        )}
      </div>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================
export default function RealEstateDashboard() {
  const [loading, setLoading] = useState(true);
  const role = "manager";
  const [activeTab, setActiveTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);
  const { toast, showToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-[#F8FAFC]"}`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-gray-700" />
        )}
      </button>

      <aside
        className={`w-64 border-r hidden lg:flex flex-col relative ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
      >
        <div className="p-6 flex justify-between items-center">
          <div>
            <h2
              className={`text-xl font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}
            >
              RealEstate
            </h2>
            <p
              className={`text-[10px] uppercase tracking-wider font-semibold ${darkMode ? "text-gray-400" : "text-gray-400"}`}
            >
              Management Portal
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <SidebarLink
            icon={<LayoutDashboard size={20} />}
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
            darkMode={darkMode}
          />
          {role === "manager" ? (
            <>
              <SidebarLink
                icon={<Users size={20} />}
                label="Agent Management"
                active={activeTab === "agents"}
                onClick={() => setActiveTab("agents")}
                darkMode={darkMode}
              />
              <SidebarLink
                icon={<Building2 size={20} />}
                label="Properties"
                active={activeTab === "props"}
                onClick={() => setActiveTab("props")}
                darkMode={darkMode}
              />
              <SidebarLink
                icon={<Radio size={20} />}
                label="Agent Control"
                active={activeTab === "agent-control"}
                onClick={() => setActiveTab("agent-control")}
                darkMode={darkMode}
              />
            </>
          ) : (
            <>
              <SidebarLink
                icon={<Briefcase size={20} />}
                label="My Properties"
                active={activeTab === "my-props"}
                onClick={() => setActiveTab("my-props")}
                darkMode={darkMode}
              />
              <SidebarLink
                icon={<Building2 size={20} />}
                label="Properties"
                active={activeTab === "props"}
                onClick={() => setActiveTab("props")}
                darkMode={darkMode}
              />
            </>
          )}
          <SidebarLink
            icon={<TrendingUp size={20} />}
            label="Performance"
            active={activeTab === "perf"}
            onClick={() => setActiveTab("perf")}
            darkMode={darkMode}
          />
          <SidebarLink
            icon={<ClipboardList size={20} />}
            label="Reports"
            active={activeTab === "reports"}
            onClick={() => setActiveTab("reports")}
            darkMode={darkMode}
          />
          <SidebarLink
            icon={<PieChartIcon size={20} />}
            label="Analytics"
            active={activeTab === "analytics"}
            onClick={() => setActiveTab("analytics")}
            darkMode={darkMode}
          />
        </nav>

        <div className={`p-4 border-t ${darkMode ? "border-gray-700" : ""}`}>
          <button
            onClick={() => showToast("Signing out...", "info")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header
          className={`border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-green-600">Live</span>
          </div>
          <div className="flex items-center gap-6">
            <div
              className="relative cursor-pointer"
              onClick={() => showToast("3 new notifications", "info")}
            >
              <Bell
                size={20}
                className={darkMode ? "text-gray-400" : "text-gray-400"}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800" />
            </div>
            <div className="flex items-center gap-3 pl-6 border-l dark:border-gray-700">
              <div className="text-right">
                <p
                  className={`text-sm font-bold ${darkMode ? "text-white" : ""}`}
                >
                  {role === "manager" ? "Manager User" : "Sarah Johnson"}
                </p>
                <p
                  className={`text-[10px] font-bold uppercase ${darkMode ? "text-gray-400" : "text-gray-400"}`}
                >
                  {role === "manager" ? "Management" : "Real Estate Agent"}
                </p>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${role === "manager" ? "bg-blue-600" : "bg-blue-500"}`}
              >
                {role === "manager" ? "M" : "SJ"}
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-[1400px] mx-auto">
          {role === "manager" ? (
            <ManagerView
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              darkMode={darkMode}
              showToast={showToast}
            />
          ) : (
            <AgentView
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              darkMode={darkMode}
              showToast={showToast}
            />
          )}
        </div>
      </main>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => {}} />
      )}
    </div>
  );
}
