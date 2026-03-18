"use client";

import { useState, useMemo, useEffect } from "react";
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
  ShieldCheck,
  AlertCircle,
  Database,
  FileText,
  Folder,
  Upload,
  File,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  Share2,
  Download,
  Eye,
  CheckCircle,
  HardDrive,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Wallet,
  PieChart,
  Calendar,
  Mail,
  Edit,
  MessageSquare,
  Building,
  Bell,
  X,
  Bed,
  Bath,
  Maximize2,
  UserPlus,
  ChevronRight,
  Radio,
  CheckCircle as CheckCircleIcon,
  AlertTriangle,
  Zap,
  Activity,
  Moon,
  Sun,
  Briefcase,
  ClipboardList,
  PieChart as PieChartIcon,
  LogOut,
  Shield,
  Award,
  Star,
  Target,
  Clock,
  Lock,
  Unlock,
  RefreshCw,
  FileCheck,
  FilePlus,
  Tag,
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

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("month");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  const { toast, showToast } = useToast();

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const [propertiesData, setPropertiesData] = useState([
    {
      id: 1,
      title: "Luxury Apartment",
      address: "123 Sandton Drive, Johannesburg",
      price: 2500000,
      status: "Active",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      agent: "John Agent",
      images: 12,
      location: "Sandton, Johannesburg",
      coordinates: { lat: -26.1076, lng: 28.0567 },
      description: "Stunning luxury apartment with panoramic city views.",
      features: [
        "Panoramic Views",
        "Secure Parking",
        "Pool",
        "Gym",
        "24/7 Security",
      ],
      agentDetails: {
        name: "John Agent",
        phone: "+27 11 234 5678",
        email: "john@realestate.com",
      },
      listedDate: "2026-01-05",
      views: 156,
      favorites: 12,
    },
    {
      id: 2,
      title: "Modern Penthouse",
      address: "45 Sandton City, Johannesburg",
      price: 4200000,
      status: "Active",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      agent: "Sarah Smith",
      images: 8,
      location: "Sandton City",
      coordinates: { lat: -26.108, lng: 28.057 },
      description: "Ultra-modern penthouse with private rooftop terrace.",
      features: ["Rooftop Terrace", "Smart Home", "Wine Cellar"],
      agentDetails: {
        name: "Sarah Smith",
        phone: "+27 11 234 5679",
        email: "sarah@realestate.com",
      },
      listedDate: "2026-01-03",
      views: 203,
      favorites: 28,
    },
    {
      id: 3,
      title: "Executive Villa",
      address: "78 Morningside, Sandton",
      price: 18500000,
      status: "Under Offer",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      agent: "Mike Brown",
      images: 15,
      location: "Morningside",
      coordinates: { lat: -26.09, lng: 28.06 },
      description: "Luxurious executive villa with landscaped gardens.",
      features: ["Staff Quarters", "Pool House", "Tennis Court"],
      agentDetails: {
        name: "Mike Brown",
        phone: "+27 11 234 5680",
        email: "mike@realestate.com",
      },
      listedDate: "2025-12-20",
      views: 412,
      favorites: 45,
    },
  ]);

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

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Agent",
      role: "Senior Agent",
      status: "active",
      email: "john@realestate.com",
      joinDate: "2023-10-12",
      phone: "+27 11 234 5678",
      avatarColor: "bg-blue-500",
      performance: 95,
      listings: 8,
      sales: 24,
      commission: 750000,
      dashboardAccess: ["agent", "manager"],
      permissions: ["view_properties", "manage_listings", "view_reports"],
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Lead Agent",
      status: "active",
      email: "sarah@realestate.com",
      joinDate: "2023-11-05",
      phone: "+27 11 234 5679",
      avatarColor: "bg-green-500",
      performance: 88,
      listings: 6,
      sales: 18,
      commission: 620000,
      dashboardAccess: ["agent"],
      permissions: ["view_properties", "manage_listings"],
    },
    {
      id: 3,
      name: "Mike Brown",
      role: "Executive Agent",
      status: "active",
      email: "mike@realestate.com",
      joinDate: "2024-01-20",
      phone: "+27 11 234 5680",
      avatarColor: "bg-purple-500",
      performance: 92,
      listings: 7,
      sales: 21,
      commission: 890000,
      dashboardAccess: ["agent", "manager"],
      permissions: [
        "view_properties",
        "manage_listings",
        "view_reports",
        "manage_team",
      ],
    },
  ]);

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "David Miller",
      email: "david@miller.com",
      phone: "+27 82 111 2222",
      status: "active",
      type: "buyer",
      budget: "R 2,500,000",
      properties: 3,
      lastContact: "2024-02-10",
      notes: "Interested in Sandton properties",
      agent: "John Agent",
      avatarColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Lisa Wang",
      email: "lisa@wang.com",
      phone: "+27 82 222 3333",
      status: "prospect",
      type: "investor",
      budget: "R 8,000,000",
      properties: 0,
      lastContact: "2024-02-12",
      notes: "Looking for investment properties",
      agent: "Sarah Smith",
      avatarColor: "bg-green-500",
    },
    {
      id: 3,
      name: "James Mokoena",
      email: "james@mokoena.com",
      phone: "+27 82 333 4444",
      status: "active",
      type: "seller",
      budget: "Negotiable",
      properties: 1,
      lastContact: "2024-02-08",
      notes: "Selling family home in Sandton",
      agent: "Mike Brown",
      avatarColor: "bg-purple-500",
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      property: "Luxury Apartment - Sandton",
      client: "David Miller",
      agent: "John Agent",
      date: "2024-02-15",
      amount: 2500000,
      type: "sale",
      status: "completed",
      commission: 75000,
    },
    {
      id: 2,
      property: "Modern Penthouse - Sandton City",
      client: "Lisa Wang",
      agent: "Sarah Smith",
      date: "2024-02-10",
      amount: 4200000,
      type: "sale",
      status: "pending",
      commission: 126000,
    },
    {
      id: 3,
      property: "Executive Villa - Morningside",
      client: "James Mokoena",
      agent: "Mike Brown",
      date: "2024-02-05",
      amount: 18500000,
      type: "sale",
      status: "completed",
      commission: 555000,
    },
  ]);

  const [financialMetrics] = useState({
    revenue: {
      total: 524000,
      change: 12.4,
      trend: "up",
      breakdown: { sales: 428000, rentals: 96000, other: 0 },
    },
    expenses: {
      total: 187000,
      change: 8.2,
      trend: "down",
      breakdown: { commissions: 142000, marketing: 25000, operations: 20000 },
    },
    netProfit: { total: 337000, change: 15.7, trend: "up", margin: 64.3 },
    outstanding: { total: 126000, dueIn30Days: 126000, overdue: 0 },
  });

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

  const [filingSystem, setFilingSystem] = useState({
    folders: [
      {
        id: 1,
        name: "Transaction Files",
        count: 24,
        lastUpdated: "Today",
        color: "blue",
        subfolders: [
          { name: "Pending Deals", files: 8, color: "amber" },
          { name: "Completed Sales", files: 12, color: "emerald" },
          { name: "Archived", files: 4, color: "slate" },
        ],
        files: [
          {
            id: 101,
            name: "123_Main_St_Contract.pdf",
            size: "2.3 MB",
            type: "pdf",
            uploadedBy: "Admin",
            date: "2024-02-15",
            status: "signed",
          },
          {
            id: 102,
            name: "Sandton_Apt_SaleAgreement.pdf",
            size: "1.8 MB",
            type: "pdf",
            uploadedBy: "John Agent",
            date: "2024-02-14",
            status: "pending",
          },
          {
            id: 103,
            name: "Penthouse_Offer.docx",
            size: "540 KB",
            type: "docx",
            uploadedBy: "Sarah Smith",
            date: "2024-02-13",
            status: "draft",
          },
        ],
      },
      {
        id: 2,
        name: "Client Documents",
        count: 18,
        lastUpdated: "Yesterday",
        color: "green",
        subfolders: [
          { name: "KYC Verification", files: 6, color: "blue" },
          { name: "Financial Records", files: 8, color: "purple" },
          { name: "Correspondence", files: 4, color: "orange" },
        ],
        files: [
          {
            id: 201,
            name: "DavidMiller_ID.pdf",
            size: "1.1 MB",
            type: "pdf",
            uploadedBy: "Admin",
            date: "2024-02-12",
            status: "approved",
          },
          {
            id: 202,
            name: "LisaWang_ProofOfFunds.pdf",
            size: "2.5 MB",
            type: "pdf",
            uploadedBy: "Sarah Smith",
            date: "2024-02-11",
            status: "pending",
          },
          {
            id: 203,
            name: "Client_Onboarding_Form.xlsx",
            size: "320 KB",
            type: "xlsx",
            uploadedBy: "Admin",
            date: "2024-02-10",
            status: "final",
          },
        ],
      },
      {
        id: 3,
        name: "Legal & Compliance",
        count: 12,
        lastUpdated: "2 days ago",
        color: "purple",
        subfolders: [
          { name: "Deeds Office", files: 4, color: "red" },
          { name: "FICA Documents", files: 5, color: "indigo" },
          { name: "Tax Records", files: 3, color: "teal" },
        ],
        files: [
          {
            id: 301,
            name: "Title_Deed_Sandton.pdf",
            size: "3.2 MB",
            type: "pdf",
            uploadedBy: "Admin",
            date: "2024-02-08",
            status: "final",
          },
          {
            id: 302,
            name: "FICA_Compliance_Report.pdf",
            size: "1.6 MB",
            type: "pdf",
            uploadedBy: "Admin",
            date: "2024-02-07",
            status: "approved",
          },
        ],
      },
      {
        id: 4,
        name: "Marketing Assets",
        count: 31,
        lastUpdated: "3 days ago",
        color: "orange",
        subfolders: [
          { name: "Property Photos", files: 18, color: "pink" },
          { name: "Brochures", files: 8, color: "cyan" },
          { name: "Video Tours", files: 5, color: "amber" },
        ],
        files: [
          {
            id: 401,
            name: "Sandton_Apt_Brochure.pdf",
            size: "4.8 MB",
            type: "pdf",
            uploadedBy: "Admin",
            date: "2024-02-06",
            status: "final",
          },
          {
            id: 402,
            name: "Q1_Marketing_Report.pptx",
            size: "6.2 MB",
            type: "ppt",
            uploadedBy: "Admin",
            date: "2024-02-05",
            status: "draft",
          },
        ],
      },
    ],
    recentFiles: [
      {
        id: 1,
        name: "Client_Agreement_Signed.pdf",
        folder: "Transaction Files",
        size: "3.2 MB",
        type: "pdf",
        uploaded: "2 hours ago",
        uploadedBy: "John Agent",
      },
      {
        id: 2,
        name: "LisaWang_ProofOfFunds.pdf",
        folder: "Client Documents",
        size: "2.5 MB",
        type: "pdf",
        uploaded: "4 hours ago",
        uploadedBy: "Sarah Smith",
      },
      {
        id: 3,
        name: "Title_Deed_Sandton.pdf",
        folder: "Legal & Compliance",
        size: "3.2 MB",
        type: "pdf",
        uploaded: "Yesterday",
        uploadedBy: "Admin",
      },
      {
        id: 4,
        name: "Q1_Marketing_Report.pptx",
        folder: "Marketing Assets",
        size: "6.2 MB",
        type: "ppt",
        uploaded: "2 days ago",
        uploadedBy: "Admin",
      },
      {
        id: 5,
        name: "Penthouse_Offer.docx",
        folder: "Transaction Files",
        size: "540 KB",
        type: "docx",
        uploaded: "2 days ago",
        uploadedBy: "Sarah Smith",
      },
    ],
    storage: { used: 2.8, total: 10, unit: "GB" },
  });

  const [expandedFolders, setExpandedFolders] = useState([]);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientFilter, setClientFilter] = useState("all");
  const [newClientForm, setNewClientForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "buyer",
    budget: "",
    notes: "",
  });
  const [newPropertyForm, setNewPropertyForm] = useState({
    title: "",
    address: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    agent: "",
    status: "Active",
  });

  const sendAlertToAll = () => {
    const newComm = {
      id: Date.now(),
      type: "alert",
      from: "Administration",
      message: "SYSTEM ALERT: Urgent update for all agents",
      time: "Just now",
    };
    setCommunications([newComm, ...communications.slice(0, 4)]);
    setSystemAlerts([
      {
        id: Date.now(),
        message: "Alert sent to all users",
        priority: "medium",
        time: "Just now",
      },
      ...systemAlerts,
    ]);
    showToast("Alert sent to all agents!", "success");
  };

  const toggleAgentStatus = (id: number) => {
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

  const updateUserDashboardAccess = (
    userId: number,
    dashboard: "agent" | "manager",
  ) => {
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          const hasAccess = user.dashboardAccess.includes(dashboard);
          return {
            ...user,
            dashboardAccess: hasAccess
              ? user.dashboardAccess.filter((d) => d !== dashboard)
              : [...user.dashboardAccess, dashboard],
          };
        }
        return user;
      }),
    );
  };

  const activeProperties = useMemo(
    () => propertiesData.filter((p) => p.status === "Active").length,
    [propertiesData],
  );
  const totalPortfolioValue = useMemo(
    () => propertiesData.reduce((sum, p) => sum + p.price, 0),
    [propertiesData],
  );
  const averagePrice = useMemo(
    () =>
      Math.round(
        propertiesData.reduce((sum, p) => sum + p.price, 0) /
          propertiesData.length,
      ),
    [propertiesData],
  );

  const filteredUsers = useMemo(
    () =>
      users.filter(
        (u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.role.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [users, searchTerm],
  );
  const filteredClients = useMemo(() => {
    let r = clients.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    if (clientFilter !== "all") r = r.filter((c) => c.status === clientFilter);
    return r;
  }, [clients, searchTerm, clientFilter]);
  const filteredProperties = useMemo(() => {
    let r = propertiesData.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    if (propertyFilter !== "all")
      r = r.filter((p) => p.status === propertyFilter);
    return r;
  }, [propertiesData, searchTerm, propertyFilter]);

  return (
    <div
      className={`flex min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-[#F8FAFC]"}`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-gray-700" />
        )}
      </button>

      <div className="flex-1">
        <AdminView
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          darkMode={darkMode}
          users={users}
          setUsers={setUsers}
          propertiesData={propertiesData}
          setPropertiesData={setPropertiesData}
          clients={clients}
          setClients={setClients}
          transactions={transactions}
          financialMetrics={financialMetrics}
          systemAlerts={systemAlerts}
          setSystemAlerts={setSystemAlerts}
          filingSystem={filingSystem}
          setFilingSystem={setFilingSystem}
          agentStatus={agentStatus}
          communications={communications}
          setCommunications={setCommunications}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          dateRange={dateRange}
          setDateRange={setDateRange}
          propertyFilter={propertyFilter}
          setPropertyFilter={setPropertyFilter}
          clientFilter={clientFilter}
          setClientFilter={setClientFilter}
          newClientForm={newClientForm}
          setNewClientForm={setNewClientForm}
          newPropertyForm={newPropertyForm}
          setNewPropertyForm={setNewPropertyForm}
          expandedFolders={expandedFolders}
          setExpandedFolders={setExpandedFolders}
          uploadingFile={uploadingFile}
          setUploadingFile={setUploadingFile}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          sendAlertToAll={sendAlertToAll}
          toggleAgentStatus={toggleAgentStatus}
          updateUserDashboardAccess={updateUserDashboardAccess}
          showToast={showToast}
          router={router}
          activeProperties={activeProperties}
          totalPortfolioValue={totalPortfolioValue}
          averagePrice={averagePrice}
        />
      </div>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => {}} />
      )}
    </div>
  );
}

// ================ ADMIN VIEW ================
function AdminView({
  activeTab,
  setActiveTab,
  darkMode,
  users,
  setUsers,
  propertiesData,
  setPropertiesData,
  clients,
  setClients,
  transactions,
  financialMetrics,
  systemAlerts,
  setSystemAlerts,
  filingSystem,
  setFilingSystem,
  agentStatus,
  communications,
  setCommunications,
  searchTerm,
  setSearchTerm,
  dateRange,
  setDateRange,
  propertyFilter,
  setPropertyFilter,
  clientFilter,
  setClientFilter,
  newClientForm,
  setNewClientForm,
  newPropertyForm,
  setNewPropertyForm,
  expandedFolders,
  setExpandedFolders,
  uploadingFile,
  setUploadingFile,
  selectedClient,
  setSelectedClient,
  sendAlertToAll,
  toggleAgentStatus,
  updateUserDashboardAccess,
  showToast,
  router,
  activeProperties,
  totalPortfolioValue,
  averagePrice,
}) {
  const toggleFolder = (folderId) => {
    if (expandedFolders.includes(folderId))
      setExpandedFolders(expandedFolders.filter((id) => id !== folderId));
    else setExpandedFolders([...expandedFolders, folderId]);
  };

  const simulateFileUpload = () => {
    if (uploadingFile) return;
    setUploadingFile(true);
    setTimeout(() => {
      const newFile = {
        id: Date.now(),
        name: `Document_${Date.now()}.pdf`,
        folder: "Transaction Files",
        size: "1.5 MB",
        type: "pdf",
        uploaded: "Just now",
        uploadedBy: "Admin",
      };
      setFilingSystem((prev) => ({
        ...prev,
        recentFiles: [newFile, ...prev.recentFiles.slice(0, 4)],
        storage: {
          ...prev.storage,
          used: parseFloat((prev.storage.used + 1.5).toFixed(1)),
        },
      }));
      setUploadingFile(false);
      showToast("File uploaded successfully!", "success");
    }, 1500);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <File className="text-red-500" size={18} />;
      case "doc":
      case "docx":
        return <File className="text-blue-500" size={18} />;
      case "xlsx":
        return <File className="text-emerald-500" size={18} />;
      case "ppt":
        return <File className="text-orange-500" size={18} />;
      case "zip":
        return <Folder className="text-purple-500" size={18} />;
      default:
        return <File className="text-slate-500" size={18} />;
    }
  };

  const getStatusBadge = (status) => {
    const config = {
      signed: { bg: "bg-emerald-100", text: "text-emerald-700" },
      pending: { bg: "bg-amber-100", text: "text-amber-700" },
      approved: { bg: "bg-blue-100", text: "text-blue-700" },
      draft: { bg: "bg-slate-100", text: "text-slate-700" },
      final: { bg: "bg-indigo-100", text: "text-indigo-700" },
    };
    const c = config[status] || { bg: "bg-slate-100", text: "text-slate-700" };
    return (
      <span
        className={`px-2 py-0.5 ${c.bg} ${c.text} text-xs rounded-full font-medium capitalize`}
      >
        {status}
      </span>
    );
  };

  const formatCurrency = (amount) => `R ${amount.toLocaleString()}`;

  const calculateMonthlyRevenue = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return transactions
      .filter((t) => {
        const d = new Date(t.date);
        return (
          d.getMonth() === currentMonth &&
          d.getFullYear() === currentYear &&
          t.status === "completed"
        );
      })
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const addNewClient = () => {
    if (!newClientForm.name || !newClientForm.email) {
      showToast("Please fill in required fields", "error");
      return;
    }
    const newClient = {
      id: clients.length + 1,
      name: newClientForm.name,
      email: newClientForm.email,
      phone: newClientForm.phone,
      status: "prospect",
      type: newClientForm.type,
      budget: newClientForm.budget,
      properties: 0,
      lastContact: new Date().toISOString().split("T")[0],
      notes: newClientForm.notes,
      agent: "Unassigned",
      avatarColor: "bg-blue-500",
    };
    setClients([newClient, ...clients]);
    setNewClientForm({
      name: "",
      email: "",
      phone: "",
      type: "buyer",
      budget: "",
      notes: "",
    });
    showToast("Client added successfully!", "success");
  };

  const updateClientStatus = (clientId, newStatus) =>
    setClients(
      clients.map((c) => (c.id === clientId ? { ...c, status: newStatus } : c)),
    );
  const deleteClient = (clientId) => {
    setClients(clients.filter((c) => c.id !== clientId));
    showToast("Client removed", "info");
  };

  const addNewProperty = () => {
    if (
      !newPropertyForm.title ||
      !newPropertyForm.price ||
      !newPropertyForm.agent
    ) {
      showToast("Please fill in required fields", "error");
      return;
    }
    const newProperty = {
      id: propertiesData.length + 1,
      title: newPropertyForm.title,
      address: newPropertyForm.address || "Address to be confirmed",
      price: parseInt(newPropertyForm.price),
      status: newPropertyForm.status,
      bedrooms: parseInt(newPropertyForm.bedrooms) || 0,
      bathrooms: parseInt(newPropertyForm.bathrooms) || 0,
      sqft: parseInt(newPropertyForm.sqft) || 0,
      agent: newPropertyForm.agent,
      images: 0,
      location: "To be determined",
      coordinates: { lat: 0, lng: 0 },
      description: "New property listing",
      features: ["New Listing"],
      agentDetails: { name: newPropertyForm.agent, phone: "", email: "" },
      listedDate: new Date().toISOString().split("T")[0],
      views: 0,
      favorites: 0,
    };
    setPropertiesData([newProperty, ...propertiesData]);
    setNewPropertyForm({
      title: "",
      address: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      sqft: "",
      agent: "",
      status: "Active",
    });
    showToast("Property added successfully!", "success");
  };

  const updatePropertyStatus = (propertyId, newStatus) =>
    setPropertiesData(
      propertiesData.map((p) =>
        p.id === propertyId ? { ...p, status: newStatus } : p,
      ),
    );
  const deleteProperty = (propertyId) => {
    setPropertiesData(propertiesData.filter((p) => p.id !== propertyId));
    showToast("Property removed", "info");
  };

  const addNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `New Agent ${users.length + 1}`,
      role: "Agent",
      status: "active",
      email: `agent${users.length + 1}@realestate.com`,
      joinDate: new Date().toISOString().split("T")[0],
      phone: "+27 11 000 0000",
      avatarColor: "bg-slate-500",
      performance: 0,
      listings: 0,
      sales: 0,
      commission: 0,
      dashboardAccess: ["agent"],
      permissions: ["view_properties"],
    };
    setUsers([...users, newUser]);
    showToast("New agent added!", "success");
  };

  const updateUserStatus = (userId, newStatus) =>
    setUsers(
      users.map((u) => (u.id === userId ? { ...u, status: newStatus } : u)),
    );
  const deleteUser = (userId) => {
    setUsers(users.filter((u) => u.id !== userId));
    showToast("Agent removed", "info");
  };
  const resolveAlert = (id) => {
    setSystemAlerts(systemAlerts.filter((a) => a.id !== id));
    showToast("Alert resolved", "success");
  };

  const folderColorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    indigo: "bg-indigo-100 text-indigo-600",
    red: "bg-red-100 text-red-600",
    amber: "bg-amber-100 text-amber-600",
    teal: "bg-teal-100 text-teal-600",
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`w-64 ${darkMode ? "bg-gray-800 text-gray-300" : "bg-slate-900 text-slate-300"} flex flex-col shadow-xl`}
      >
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-2">
            <div
              className={`${darkMode ? "bg-blue-700" : "bg-blue-600"} p-1.5 rounded-lg text-white`}
            >
              <Home size={20} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              RealEstate
            </h2>
          </div>
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">
            ADMINISTRATION PORTAL
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "users", label: "Team Members", icon: Users },
            { id: "properties", label: "Listings", icon: Home },
            { id: "financial", label: "Financials", icon: BarChart3 },
            { id: "clients", label: "Clients", icon: UserSquare2 },
            { id: "integration", label: "Integration", icon: Radio },
            { id: "filing", label: "Filing System", icon: Folder },
            { id: "system", label: "System", icon: Settings },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? `${darkMode ? "bg-blue-900 text-blue-300" : "bg-blue-600 text-white"} shadow-lg shadow-blue-900/20` : `${darkMode ? "hover:bg-gray-700 hover:text-white" : "hover:bg-slate-800 hover:text-white"}`}`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-800">
          <div
            className={`mb-3 p-3 rounded-xl ${darkMode ? "bg-gray-700" : "bg-slate-800"}`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-green-400">
                SYSTEM ONLINE
              </span>
            </div>
            <p className="text-xs text-slate-400">All services operational</p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="w-full flex items-center justify-center space-x-2 py-3 text-sm font-semibold text-slate-400 hover:text-red-400 transition-colors"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className={`h-16 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} border-b flex items-center justify-between px-8 shrink-0`}
        >
          <div className="flex items-center space-x-4">
            <h1
              className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"} capitalize`}
            >
              {activeTab === "filing"
                ? "Document Filing System"
                : activeTab === "users"
                  ? "Team Members"
                  : activeTab}
            </h1>
            <div
              className={`h-4 w-px ${darkMode ? "bg-gray-700" : "bg-slate-200"}`}
            />
            <span
              className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-slate-400"}`}
            >
              RealEstate Administration
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-9 pr-4 py-1.5 ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-slate-100 text-slate-900 border-transparent"} border focus:border-blue-500 text-sm rounded-full transition-all outline-none w-56`}
              />
              <Search
                className={`absolute left-3 top-2 ${darkMode ? "text-gray-400" : "text-slate-400"}`}
                size={14}
              />
            </div>
            <button
              onClick={() => showToast("3 new notifications", "info")}
              className="relative"
            >
              <Bell
                size={20}
                className={darkMode ? "text-gray-400" : "text-slate-500"}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div
              className={`flex items-center space-x-3 border-l pl-6 ${darkMode ? "border-gray-700" : "border-slate-200"}`}
            >
              <div className="text-right">
                <p
                  className={`text-xs font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Administration Portal
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  System Administrator
                </p>
              </div>
              <div
                className={`w-8 h-8 rounded-full ${darkMode ? "bg-blue-700" : "bg-slate-800"} text-white flex items-center justify-center text-xs font-bold`}
              >
                AD
              </div>
            </div>
          </div>
        </header>

        <main
          className={`flex-1 overflow-y-auto p-8 ${darkMode ? "bg-gray-900" : "bg-slate-50/50"}`}
        >
          {/* ===== OVERVIEW TAB ===== */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Welcome banner */}
              <div
                className={`rounded-2xl p-6 ${darkMode ? "bg-gradient-to-r from-blue-900 to-purple-900" : "bg-gradient-to-r from-blue-600 to-purple-700"} text-white`}
              >
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl font-extrabold mb-1">
                      Welcome back, Administrator 👋
                    </h1>
                    <p className="text-blue-100 text-sm">
                      Here's what's happening across your portfolio today
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs text-blue-200 uppercase font-bold">
                        System Status
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-sm font-bold">
                          All systems operational
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={sendAlertToAll}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2"
                    >
                      <Bell size={16} /> Broadcast Alert
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Active Properties",
                    value: activeProperties,
                    sub: `Of ${propertiesData.length} total`,
                    color: "text-blue-600",
                    bg: "bg-blue-100",
                    icon: <Home className="text-blue-500" size={20} />,
                    trend: "+2 this week",
                  },
                  {
                    label: "Portfolio Value",
                    value: formatCurrency(totalPortfolioValue),
                    sub: `${formatCurrency(averagePrice)} average`,
                    color: "text-green-600",
                    bg: "bg-green-100",
                    icon: <DollarSign className="text-green-500" size={20} />,
                    trend: "+8.2% growth",
                  },
                  {
                    label: "Active Agents",
                    value: users.filter((u) => u.status === "active").length,
                    sub: `${users.length} total team members`,
                    color: "text-purple-600",
                    bg: "bg-purple-100",
                    icon: <Users className="text-purple-500" size={20} />,
                    trend: "All performing well",
                  },
                  {
                    label: "Monthly Revenue",
                    value: formatCurrency(calculateMonthlyRevenue()),
                    sub: "+12.4% from last month",
                    color: "text-amber-600",
                    bg: "bg-amber-100",
                    icon: <TrendingUp className="text-amber-500" size={20} />,
                    trend: "Above target",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} shadow-sm hover:shadow-md transition-all cursor-pointer group`}
                    onClick={() =>
                      showToast(`${stat.label}: ${stat.value}`, "info")
                    }
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${stat.bg}`}>
                        {stat.icon}
                      </div>
                      <span className="text-xs text-green-500 font-bold">
                        {stat.trend}
                      </span>
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-slate-400"}`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`text-2xl font-bold mt-2 ${darkMode ? "text-white" : stat.color}`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`text-xs mt-1 font-medium ${darkMode ? "text-gray-500" : "text-slate-500"}`}
                    >
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    icon: <FileCheck className="text-emerald-500" size={20} />,
                    label: "Deals Closed",
                    value: "42",
                    bg: darkMode ? "bg-emerald-900/20" : "bg-emerald-50",
                  },
                  {
                    icon: <Star className="text-yellow-500" size={20} />,
                    label: "Avg Rating",
                    value: "4.8/5",
                    bg: darkMode ? "bg-yellow-900/20" : "bg-yellow-50",
                  },
                  {
                    icon: <Target className="text-red-500" size={20} />,
                    label: "Target Progress",
                    value: "87%",
                    bg: darkMode ? "bg-red-900/20" : "bg-red-50",
                  },
                  {
                    icon: <Award className="text-blue-500" size={20} />,
                    label: "Market Share",
                    value: "18%",
                    bg: darkMode ? "bg-blue-900/20" : "bg-blue-50",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} flex items-center gap-3`}
                  >
                    <div className={`p-2 rounded-lg ${item.bg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className={`text-xs ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Control Panel */}
              <div
                className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl border ${darkMode ? "border-gray-700" : "border-slate-200"} p-6`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-xl font-bold flex items-center gap-2 ${darkMode ? "text-white" : ""}`}
                  >
                    <Radio className="text-green-500" size={20} />
                    Admin Control Panel
                  </h3>
                  <button
                    onClick={sendAlertToAll}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-sm flex items-center gap-2"
                  >
                    <Bell size={14} /> Send System Alert
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {agentStatus.map((agent) => (
                    <div
                      key={agent.id}
                      className={`p-4 rounded-xl ${darkMode ? "bg-gray-700" : "bg-slate-50"}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${agent.status === "checked-in" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                          />
                          <span
                            className={`font-bold ${darkMode ? "text-white" : ""}`}
                          >
                            {agent.name}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleAgentStatus(agent.id)}
                          className={`px-2 py-1 text-xs rounded ${agent.status === "checked-in" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
                        >
                          {agent.status === "checked-in"
                            ? "Force Check Out"
                            : "Check In"}
                        </button>
                      </div>
                      <div
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        <div>Location: {agent.location}</div>
                        <div>Last Check-in: {agent.lastCheckIn}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <h3
                    className={`font-bold flex items-center space-x-2 ${darkMode ? "text-white" : ""}`}
                  >
                    <AlertCircle className="text-orange-500" size={18} />
                    <span>System Attention Required</span>
                  </h3>
                  {systemAlerts.length === 0 ? (
                    <div
                      className={`p-6 rounded-xl text-center ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} border`}
                    >
                      <ShieldCheck
                        className="text-green-500 mx-auto mb-2"
                        size={32}
                      />
                      <p
                        className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        All clear!
                      </p>
                      <p className="text-xs text-slate-400">
                        No system alerts at this time
                      </p>
                    </div>
                  ) : (
                    systemAlerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`flex items-center justify-between p-4 border rounded-xl ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-2 h-2 rounded-full ${alert.priority === "high" ? "bg-red-500 animate-pulse" : "bg-orange-400"}`}
                          />
                          <div>
                            <p
                              className={`text-sm font-semibold ${darkMode ? "text-white" : "text-slate-800"}`}
                            >
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
                    ))
                  )}
                </div>

                <div
                  className={`${darkMode ? "bg-gray-800" : "bg-slate-900"} rounded-2xl p-6 text-white shadow-xl`}
                >
                  <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-slate-400">
                    Master Actions
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        label: "New Listing",
                        icon: <Home size={16} className="text-blue-400" />,
                        action: () => setActiveTab("properties"),
                      },
                      {
                        label: "Full System Backup",
                        icon: <Database size={16} className="text-green-400" />,
                        action: () =>
                          showToast("System backup initiated...", "info"),
                      },
                      {
                        label: "Export Financials",
                        icon: (
                          <FileText size={16} className="text-purple-400" />
                        ),
                        action: () => setActiveTab("financial"),
                      },
                      {
                        label: "View Filing System",
                        icon: <Folder size={16} className="text-amber-400" />,
                        action: () => setActiveTab("filing"),
                      },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={item.action}
                        className={`flex items-center space-x-3 p-3 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-slate-800 hover:bg-slate-700"} rounded-xl transition-all`}
                      >
                        {item.icon}
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== INTEGRATION TAB ===== */}
          {activeTab === "integration" && (
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <h2
                    className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                  >
                    System Integration
                  </h2>
                  <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    Manage dashboard access and integrations
                  </p>
                </div>
                <button
                  onClick={sendAlertToAll}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold flex items-center gap-2"
                >
                  <Bell size={14} /> Emergency Alert
                </button>
              </div>

              <div
                className={`rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} p-6`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${darkMode ? "text-white" : ""}`}
                >
                  Dashboard Access Control
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead
                      className={`border-b ${darkMode ? "border-gray-700" : "border-slate-100"}`}
                    >
                      <tr>
                        {[
                          "Agent",
                          "Agent Dashboard",
                          "Manager Dashboard",
                          "Status",
                          "Actions",
                        ].map((h) => (
                          <th
                            key={h}
                            className="pb-3 text-xs font-bold text-slate-400 uppercase"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="py-4">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-9 h-9 rounded-full ${user.avatarColor} text-white flex items-center justify-center font-bold text-xs`}
                              >
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p
                                  className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                                >
                                  {user.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {user.role}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">
                            <button
                              onClick={() =>
                                updateUserDashboardAccess(user.id, "agent")
                              }
                              className={`px-3 py-1 text-xs font-bold rounded-full ${user.dashboardAccess.includes("agent") ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`}
                            >
                              {user.dashboardAccess.includes("agent")
                                ? "Enabled"
                                : "Disabled"}
                            </button>
                          </td>
                          <td className="py-4">
                            <button
                              onClick={() =>
                                updateUserDashboardAccess(user.id, "manager")
                              }
                              className={`px-3 py-1 text-xs font-bold rounded-full ${user.dashboardAccess.includes("manager") ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"}`}
                            >
                              {user.dashboardAccess.includes("manager")
                                ? "Enabled"
                                : "Disabled"}
                            </button>
                          </td>
                          <td className="py-4">
                            <button
                              onClick={() =>
                                updateUserStatus(
                                  user.id,
                                  user.status === "active"
                                    ? "inactive"
                                    : "active",
                                )
                              }
                              className={`px-3 py-1 text-xs font-bold rounded-full ${user.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`}
                            >
                              {user.status === "active" ? "Active" : "Inactive"}
                            </button>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  showToast(
                                    `Email sent to ${user.name}`,
                                    "success",
                                  )
                                }
                                className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                              >
                                <Mail size={16} />
                              </button>
                              <button
                                onClick={() => deleteUser(user.id)}
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Agent Dashboards",
                    value: `${users.filter((u) => u.dashboardAccess.includes("agent")).length}/${users.length}`,
                    status: "Active",
                    color: "text-blue-600",
                    icon: <UserSquare2 className="text-blue-500" size={24} />,
                  },
                  {
                    label: "Manager Dashboards",
                    value: `${users.filter((u) => u.dashboardAccess.includes("manager")).length}/${users.length}`,
                    status: "Configured",
                    color: "text-green-600",
                    icon: <Users className="text-green-500" size={24} />,
                  },
                  {
                    label: "Online Agents",
                    value: agentStatus.filter((a) => a.status === "checked-in")
                      .length,
                    status: "Connected",
                    color: "text-green-600",
                    icon: <Radio className="text-green-500" size={24} />,
                  },
                  {
                    label: "System Health",
                    value: "98.5%",
                    status: "Optimal",
                    color: "text-emerald-600",
                    icon: (
                      <ShieldCheck className="text-emerald-500" size={24} />
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p
                          className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-2xl font-bold mt-1 ${darkMode ? "text-white" : ""}`}
                        >
                          {item.value}
                        </p>
                      </div>
                      {item.icon}
                    </div>
                    <p
                      className={`text-sm ${darkMode ? item.color.replace("600", "300") : item.color}`}
                    >
                      {item.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== TEAM MEMBERS TAB ===== */}
          {activeTab === "users" && (
            <div className="space-y-8">
              <div
                className={`rounded-2xl shadow-sm border overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
              >
                <div
                  className={`p-6 border-b ${darkMode ? "border-gray-700" : "border-slate-100"} flex justify-between items-center`}
                >
                  <div>
                    <h2
                      className={`font-bold text-lg ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Team Directory
                    </h2>
                    <p
                      className={`text-xs ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                    >
                      Manage agents and their performance
                    </p>
                  </div>
                  <button
                    onClick={addNewUser}
                    className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
                  >
                    <UserPlus size={14} /> Add Member
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead
                      className={`${darkMode ? "bg-gray-700/50" : "bg-slate-50/80"} border-b ${darkMode ? "border-gray-700" : "border-slate-100"}`}
                    >
                      <tr>
                        {[
                          "Agent",
                          "Role",
                          "Performance",
                          "Listings",
                          "Commission",
                          "Status",
                          "Actions",
                        ].map((h) => (
                          <th
                            key={h}
                            className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {users.map((user) => (
                        <tr key={user.id} className="transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-9 h-9 rounded-full ${user.avatarColor} text-white flex items-center justify-center font-bold text-xs`}
                              >
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p
                                  className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                                >
                                  {user.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {user.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-600">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-24 h-2 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-slate-100"}`}
                              >
                                <div
                                  className={`h-full ${user.performance >= 80 ? "bg-green-500" : user.performance >= 60 ? "bg-amber-500" : "bg-red-500"}`}
                                  style={{ width: `${user.performance}%` }}
                                />
                              </div>
                              <span
                                className={`text-xs font-bold ${darkMode ? "text-white" : "text-slate-700"}`}
                              >
                                {user.performance}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p
                              className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                            >
                              {user.listings}
                            </p>
                            <p className="text-xs text-slate-500">properties</p>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm font-bold text-green-600">
                              R {user.commission.toLocaleString()}
                            </p>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() =>
                                updateUserStatus(
                                  user.id,
                                  user.status === "active"
                                    ? "inactive"
                                    : "active",
                                )
                              }
                              className={`px-3 py-1 text-xs font-bold rounded-full ${user.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`}
                            >
                              {user.status === "active" ? "Active" : "Inactive"}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() =>
                                  showToast(
                                    `Email sent to ${user.name}`,
                                    "success",
                                  )
                                }
                                className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                              >
                                <Mail size={16} />
                              </button>
                              <button
                                onClick={() => deleteUser(user.id)}
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
            </div>
          )}

          {/* ===== LISTINGS TAB ===== */}
          {activeTab === "properties" && (
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <h2
                    className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                  >
                    Portfolio Overview
                  </h2>
                  <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    Live property list and market performance
                  </p>
                </div>
                <select
                  value={propertyFilter}
                  onChange={(e) => setPropertyFilter(e.target.value)}
                  className={`border rounded-xl px-4 py-2 text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-slate-200"}`}
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Under Offer">Under Offer</option>
                  <option value="Rented">Rented</option>
                </select>
              </div>

              <div
                className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
              >
                <h3
                  className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                >
                  Add New Property
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Title",
                      key: "title",
                      type: "text",
                      placeholder: "Luxury Apartment",
                    },
                    {
                      label: "Price",
                      key: "price",
                      type: "number",
                      placeholder: "2500000",
                    },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="text-xs font-bold text-slate-500 uppercase">
                        {label}
                      </label>
                      <input
                        type={type}
                        value={newPropertyForm[key]}
                        onChange={(e) =>
                          setNewPropertyForm({
                            ...newPropertyForm,
                            [key]: e.target.value,
                          })
                        }
                        className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Agent
                    </label>
                    <select
                      value={newPropertyForm.agent}
                      onChange={(e) =>
                        setNewPropertyForm({
                          ...newPropertyForm,
                          agent: e.target.value,
                        })
                      }
                      className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                    >
                      <option value="">Select Agent</option>
                      {users
                        .filter((u) => u.status === "active")
                        .map((user) => (
                          <option key={user.id} value={user.name}>
                            {user.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Status
                    </label>
                    <select
                      value={newPropertyForm.status}
                      onChange={(e) =>
                        setNewPropertyForm({
                          ...newPropertyForm,
                          status: e.target.value,
                        })
                      }
                      className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                    >
                      <option value="Active">Active</option>
                      <option value="Under Offer">Under Offer</option>
                      <option value="Rented">Rented</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 lg:col-span-4">
                    <button
                      onClick={addNewProperty}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors mt-4"
                    >
                      Add Property
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {propertiesData.slice(0, 6).map((property) => (
                  <div
                    key={property.id}
                    className={`group rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${property.status === "Active" ? "bg-green-500 text-white" : property.status === "Under Offer" ? "bg-amber-500 text-white" : "bg-blue-500 text-white"}`}
                        >
                          {property.status}
                        </span>
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <Home className="text-slate-300" size={48} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className={`font-bold line-clamp-1 ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        {property.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {property.address}
                      </p>
                      <div className="mt-4 flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Bed size={14} />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath size={14} />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Maximize2 size={14} />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <p className="text-xl font-black text-blue-600">
                            R{property.price.toLocaleString()}
                          </p>
                          <p className="text-xs text-slate-500">
                            Agent: {property.agent}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() =>
                              updatePropertyStatus(
                                property.id,
                                property.status === "Active"
                                  ? "Under Offer"
                                  : "Active",
                              )
                            }
                            className={`p-2 rounded-lg transition-all ${darkMode ? "bg-gray-700 text-gray-400 hover:text-blue-600" : "bg-slate-50 text-slate-400 hover:text-blue-600"}`}
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => deleteProperty(property.id)}
                            className={`p-2 rounded-lg transition-all ${darkMode ? "bg-gray-700 text-gray-400 hover:text-red-600" : "bg-slate-50 text-slate-400 hover:text-red-600"}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== FINANCIALS TAB ===== */}
          {activeTab === "financial" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Total Revenue",
                    value: formatCurrency(financialMetrics.revenue.total),
                    change: `+${financialMetrics.revenue.change}%`,
                    trend: "up",
                    icon: <DollarSign className="text-green-500" size={20} />,
                    color: "bg-green-50",
                  },
                  {
                    label: "Total Expenses",
                    value: formatCurrency(financialMetrics.expenses.total),
                    change: `${financialMetrics.expenses.change}%`,
                    trend: "down",
                    icon: <CreditCard className="text-red-500" size={20} />,
                    color: "bg-red-50",
                  },
                  {
                    label: "Net Profit",
                    value: formatCurrency(financialMetrics.netProfit.total),
                    change: `+${financialMetrics.netProfit.change}%`,
                    trend: "up",
                    icon: <TrendingUp className="text-blue-500" size={20} />,
                    color: "bg-blue-50",
                  },
                  {
                    label: "Outstanding",
                    value: formatCurrency(financialMetrics.outstanding.total),
                    change: "Due",
                    trend: "neutral",
                    icon: <Wallet className="text-amber-500" size={20} />,
                    color: "bg-amber-50",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} shadow-sm`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        {stat.icon}
                      </div>
                      <span
                        className={`text-xs font-bold ${stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-slate-500"}`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-slate-400"}`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`text-2xl font-bold mt-2 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Revenue Breakdown
                    </h3>
                    <select
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      className={`border rounded-xl px-4 py-2 text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-slate-200"}`}
                    >
                      <option value="month">This Month</option>
                      <option value="quarter">This Quarter</option>
                      <option value="year">This Year</option>
                    </select>
                  </div>
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead
                          className={`border-b ${darkMode ? "border-gray-700" : "border-slate-100"}`}
                        >
                          <tr>
                            {[
                              "Property",
                              "Client",
                              "Agent",
                              "Date",
                              "Amount",
                              "Commission",
                              "Status",
                            ].map((h) => (
                              <th
                                key={h}
                                className="pb-3 text-xs font-bold text-slate-400 uppercase"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {transactions.slice(0, 5).map((t) => (
                            <tr key={t.id}>
                              <td className="py-3">
                                <p
                                  className={`text-sm font-medium ${darkMode ? "text-white" : "text-slate-800"}`}
                                >
                                  {t.property}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {t.type}
                                </p>
                              </td>
                              <td className="py-3">
                                <p
                                  className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                >
                                  {t.client}
                                </p>
                              </td>
                              <td className="py-3">
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded">
                                  {t.agent}
                                </span>
                              </td>
                              <td className="py-3">
                                <p
                                  className={`text-sm ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                >
                                  {t.date}
                                </p>
                              </td>
                              <td className="py-3">
                                <p
                                  className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                                >
                                  {formatCurrency(t.amount)}
                                </p>
                              </td>
                              <td className="py-3">
                                <p className="text-sm font-bold text-green-600">
                                  {formatCurrency(t.commission)}
                                </p>
                              </td>
                              <td className="py-3">
                                <span
                                  className={`px-2 py-1 text-xs font-bold rounded-full ${t.status === "completed" ? "bg-emerald-100 text-emerald-700" : t.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}
                                >
                                  {t.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Profit Distribution
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          label: "Agent Commissions",
                          value:
                            financialMetrics.expenses.breakdown.commissions,
                          width: "75%",
                          color: "bg-blue-500",
                        },
                        {
                          label: "Marketing",
                          value: financialMetrics.expenses.breakdown.marketing,
                          width: "15%",
                          color: "bg-purple-500",
                        },
                        {
                          label: "Operations",
                          value: financialMetrics.expenses.breakdown.operations,
                          width: "10%",
                          color: "bg-amber-500",
                        },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between mb-1">
                            <span
                              className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                            >
                              {item.label}
                            </span>
                            <span
                              className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                            >
                              {formatCurrency(item.value)}
                            </span>
                          </div>
                          <div
                            className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-slate-100"}`}
                          >
                            <div
                              className={`h-full ${item.color} rounded-full`}
                              style={{ width: item.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Quick Reports
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Monthly Statement",
                          icon: (
                            <FileText className="text-blue-500" size={16} />
                          ),
                        },
                        {
                          label: "Profit & Loss",
                          icon: (
                            <PieChart className="text-green-500" size={16} />
                          ),
                        },
                        {
                          label: "Quarterly Tax",
                          icon: (
                            <Calendar className="text-purple-500" size={16} />
                          ),
                        },
                      ].map((r) => (
                        <button
                          key={r.label}
                          onClick={() =>
                            showToast(`Generating ${r.label}...`, "info")
                          }
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
                        >
                          <div className="flex items-center space-x-3">
                            {r.icon}
                            <span
                              className={`text-sm font-medium ${darkMode ? "text-gray-300" : ""}`}
                            >
                              {r.label}
                            </span>
                          </div>
                          <Download size={14} className="text-slate-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== CLIENTS TAB ===== */}
          {activeTab === "clients" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Total Clients",
                    value: clients.length,
                    sub: `${clients.filter((c) => c.status === "active").length} active`,
                    color: "text-blue-600",
                    icon: <Users className="text-blue-500" size={20} />,
                  },
                  {
                    label: "Buyers",
                    value: clients.filter((c) => c.type === "buyer").length,
                    sub: `${clients.filter((c) => c.type === "buyer" && c.status === "active").length} active`,
                    color: "text-green-600",
                    icon: <Home className="text-green-500" size={20} />,
                  },
                  {
                    label: "Sellers",
                    value: clients.filter((c) => c.type === "seller").length,
                    sub: `${clients.filter((c) => c.type === "seller" && c.status === "active").length} active`,
                    color: "text-purple-600",
                    icon: <Building className="text-purple-500" size={20} />,
                  },
                  {
                    label: "Avg. Budget",
                    value: "R 3.2M",
                    sub: "Across all clients",
                    color: "text-amber-600",
                    icon: <DollarSign className="text-amber-500" size={20} />,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} shadow-sm`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`p-2 rounded-lg ${stat.color.replace("text-", "bg-").replace("-600", "-100")}`}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-slate-400"}`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`text-2xl font-bold mt-2 ${darkMode ? "text-white" : stat.color}`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`text-xs mt-1 font-medium ${darkMode ? "text-gray-500" : "text-slate-500"}`}
                    >
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3
                        className={`font-bold text-lg ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        Client Directory
                      </h3>
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        Manage all client relationships
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <select
                        value={clientFilter}
                        onChange={(e) => setClientFilter(e.target.value)}
                        className={`border rounded-xl px-4 py-2 text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-slate-200"}`}
                      >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="prospect">Prospect</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700">
                        + New Client
                      </button>
                    </div>
                  </div>
                  <div
                    className={`rounded-2xl border overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead
                          className={`${darkMode ? "bg-gray-700/50" : "bg-slate-50/80"} border-b ${darkMode ? "border-gray-700" : "border-slate-100"}`}
                        >
                          <tr>
                            {[
                              "Client",
                              "Type",
                              "Status",
                              "Budget",
                              "Actions",
                            ].map((h) => (
                              <th
                                key={h}
                                className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {clients.slice(0, 5).map((client) => (
                            <tr key={client.id} className="transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                  <div
                                    className={`w-9 h-9 rounded-full ${client.avatarColor} text-white flex items-center justify-center font-bold text-xs`}
                                  >
                                    {client.name.charAt(0)}
                                  </div>
                                  <div>
                                    <p
                                      className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                                    >
                                      {client.name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                      {client.email}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span
                                  className={`text-xs font-semibold px-2 py-1 rounded capitalize ${client.type === "buyer" ? "bg-blue-50 text-blue-600" : client.type === "seller" ? "bg-purple-50 text-purple-600" : "bg-amber-50 text-amber-600"}`}
                                >
                                  {client.type}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() =>
                                    updateClientStatus(
                                      client.id,
                                      client.status === "active"
                                        ? "inactive"
                                        : "active",
                                    )
                                  }
                                  className={`px-3 py-1 text-xs font-bold rounded-full ${client.status === "active" ? "bg-green-100 text-green-700" : client.status === "prospect" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"}`}
                                >
                                  {client.status}
                                </button>
                              </td>
                              <td className="px-6 py-4">
                                <p
                                  className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                                >
                                  {client.budget}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {client.properties} properties
                                </p>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() =>
                                      updateClientStatus(client.id, "active")
                                    }
                                    className="p-2 text-slate-400 hover:text-green-600"
                                  >
                                    <CheckCircle size={16} />
                                  </button>
                                  <button
                                    onClick={() =>
                                      showToast(
                                        `Email sent to ${client.name}`,
                                        "success",
                                      )
                                    }
                                    className="p-2 text-slate-400 hover:text-blue-600"
                                  >
                                    <Mail size={16} />
                                  </button>
                                  <button
                                    onClick={() => deleteClient(client.id)}
                                    className="p-2 text-slate-400 hover:text-red-500"
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
                </div>

                <div className="space-y-6">
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Add New Client
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={newClientForm.name}
                          onChange={(e) =>
                            setNewClientForm({
                              ...newClientForm,
                              name: e.target.value,
                            })
                          }
                          className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          value={newClientForm.email}
                          onChange={(e) =>
                            setNewClientForm({
                              ...newClientForm,
                              email: e.target.value,
                            })
                          }
                          className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase">
                            Type
                          </label>
                          <select
                            value={newClientForm.type}
                            onChange={(e) =>
                              setNewClientForm({
                                ...newClientForm,
                                type: e.target.value,
                              })
                            }
                            className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                          >
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                            <option value="investor">Investor</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase">
                            Budget
                          </label>
                          <input
                            type="text"
                            value={newClientForm.budget}
                            onChange={(e) =>
                              setNewClientForm({
                                ...newClientForm,
                                budget: e.target.value,
                              })
                            }
                            className={`w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-slate-200"}`}
                            placeholder="R 2,500,000"
                          />
                        </div>
                      </div>
                      <button
                        onClick={addNewClient}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
                      >
                        Add Client
                      </button>
                    </div>
                  </div>
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Client Statistics
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          label: "Active Clients",
                          value: clients.filter((c) => c.status === "active")
                            .length,
                        },
                        {
                          label: "Prospects",
                          value: clients.filter((c) => c.status === "prospect")
                            .length,
                        },
                        { label: "Average Budget", value: "R 3.2M" },
                        {
                          label: "Total Properties",
                          value: clients.reduce(
                            (sum, c) => sum + c.properties,
                            0,
                          ),
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between"
                        >
                          <span
                            className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                          >
                            {item.label}
                          </span>
                          <span
                            className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== FILING SYSTEM TAB ===== */}
          {activeTab === "filing" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2
                    className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                  >
                    Filing System
                  </h2>
                  <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    Admin document management and storage
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => showToast("New folder created!", "success")}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center space-x-2 border ${darkMode ? "border-gray-600 text-gray-300 hover:bg-gray-700" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}
                  >
                    <FilePlus size={16} />
                    <span>New Folder</span>
                  </button>
                  <button
                    onClick={simulateFileUpload}
                    disabled={uploadingFile}
                    className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center space-x-2 disabled:opacity-50"
                  >
                    {uploadingFile ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload size={16} />
                        <span>Upload File</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Storage bar */}
              <div
                className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <HardDrive className="text-blue-500" size={20} />
                    <div>
                      <h3
                        className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        Storage Usage
                      </h3>
                      <p
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        Document repository capacity
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-bold ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                  >
                    {filingSystem.storage.used} GB of{" "}
                    {filingSystem.storage.total} GB used
                  </span>
                </div>
                <div
                  className={`w-full h-2.5 rounded-full overflow-hidden mb-2 ${darkMode ? "bg-gray-700" : "bg-slate-100"}`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700"
                    style={{
                      width: `${(filingSystem.storage.used / filingSystem.storage.total) * 100}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>
                    {Math.round(
                      (filingSystem.storage.used / filingSystem.storage.total) *
                        100,
                    )}
                    % used
                  </span>
                  <span>
                    {(
                      filingSystem.storage.total - filingSystem.storage.used
                    ).toFixed(1)}{" "}
                    GB available
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Total Folders",
                    value: filingSystem.folders.length,
                    icon: <Folder className="text-blue-500" size={20} />,
                    bg: "bg-blue-50",
                  },
                  {
                    label: "Total Files",
                    value: filingSystem.folders.reduce(
                      (s, f) => s + f.count,
                      0,
                    ),
                    icon: <File className="text-green-500" size={20} />,
                    bg: "bg-green-50",
                  },
                  {
                    label: "Recent Uploads",
                    value: filingSystem.recentFiles.length,
                    icon: <Upload className="text-purple-500" size={20} />,
                    bg: "bg-purple-50",
                  },
                  {
                    label: "Pending Review",
                    value: filingSystem.folders.reduce(
                      (s, f) =>
                        s +
                        f.files.filter((fi) => fi.status === "pending").length,
                      0,
                    ),
                    icon: <Clock className="text-amber-500" size={20} />,
                    bg: "bg-amber-50",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"} flex items-center gap-3`}
                  >
                    <div className={`p-2 rounded-lg ${item.bg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className={`text-xs ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                      >
                        {item.label}
                      </p>
                      <p
                        className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  <h3
                    className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                  >
                    Document Folders
                  </h3>
                  {filingSystem.folders.map((folder) => {
                    const folderColor =
                      folderColorMap[folder.color] ||
                      "bg-slate-100 text-slate-600";
                    return (
                      <div
                        key={folder.id}
                        className={`rounded-2xl border overflow-hidden ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                      >
                        <div
                          className={`p-4 cursor-pointer transition-colors flex justify-between items-center ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
                          onClick={() => toggleFolder(folder.id)}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-2 rounded-lg ${folderColor.split(" ")[0]}`}
                            >
                              <Folder
                                className={folderColor.split(" ")[1]}
                                size={18}
                              />
                            </div>
                            <div>
                              <h4
                                className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                              >
                                {folder.name}
                              </h4>
                              <p className="text-xs text-slate-500">
                                {folder.count} items • Updated{" "}
                                {folder.lastUpdated}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span
                              className={`px-3 py-1 text-sm rounded-full ${darkMode ? "bg-gray-700 text-gray-300" : "bg-slate-100 text-slate-700"}`}
                            >
                              {folder.count} files
                            </span>
                            {expandedFolders.includes(folder.id) ? (
                              <ChevronUp className="text-slate-400" size={18} />
                            ) : (
                              <ChevronDown
                                className="text-slate-400"
                                size={18}
                              />
                            )}
                          </div>
                        </div>

                        {expandedFolders.includes(folder.id) && (
                          <div
                            className={`border-t p-4 space-y-4 ${darkMode ? "border-gray-700" : "border-slate-100"}`}
                          >
                            {/* Subfolders */}
                            <div>
                              <h5
                                className={`text-sm font-bold mb-3 flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                              >
                                <FolderOpen size={14} /> Subfolders
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {folder.subfolders.map((sub, idx) => {
                                  const subColor =
                                    folderColorMap[sub.color] ||
                                    "bg-slate-100 text-slate-600";
                                  return (
                                    <div
                                      key={idx}
                                      className={`p-3 rounded-xl border cursor-pointer hover:shadow-sm transition-all ${darkMode ? "bg-gray-700 border-gray-600 hover:bg-gray-600" : "border-slate-100 hover:border-blue-200"}`}
                                      onClick={() =>
                                        showToast(
                                          `Opening ${sub.name}...`,
                                          "info",
                                        )
                                      }
                                    >
                                      <div className="flex items-center gap-2 mb-1">
                                        <div
                                          className={`p-1.5 rounded ${subColor.split(" ")[0]}`}
                                        >
                                          <FolderOpen
                                            className={subColor.split(" ")[1]}
                                            size={12}
                                          />
                                        </div>
                                        <span
                                          className={`text-sm font-medium ${darkMode ? "text-white" : "text-slate-900"}`}
                                        >
                                          {sub.name}
                                        </span>
                                      </div>
                                      <p className="text-xs text-slate-500">
                                        {sub.files} files
                                      </p>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Files in folder */}
                            <div>
                              <h5
                                className={`text-sm font-bold mb-3 flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                              >
                                <File size={14} /> Files
                              </h5>
                              <div className="space-y-2">
                                {folder.files.map((file) => (
                                  <div
                                    key={file.id}
                                    className={`flex items-center justify-between p-3 rounded-xl group ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
                                  >
                                    <div className="flex items-center gap-3">
                                      {getFileIcon(file.type)}
                                      <div>
                                        <p
                                          className={`text-sm font-medium ${darkMode ? "text-white" : "text-slate-900"}`}
                                        >
                                          {file.name}
                                        </p>
                                        <p className="text-xs text-slate-500">
                                          {file.size} • {file.uploadedBy} •{" "}
                                          {file.date}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      {getStatusBadge(file.status)}
                                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                          onClick={() =>
                                            showToast(
                                              `Viewing ${file.name}`,
                                              "info",
                                            )
                                          }
                                          className="p-1.5 text-slate-400 hover:text-blue-600 rounded"
                                        >
                                          <Eye size={14} />
                                        </button>
                                        <button
                                          onClick={() =>
                                            showToast(
                                              `Downloading ${file.name}`,
                                              "success",
                                            )
                                          }
                                          className="p-1.5 text-slate-400 hover:text-emerald-600 rounded"
                                        >
                                          <Download size={14} />
                                        </button>
                                        <button
                                          onClick={() =>
                                            showToast(
                                              `Sharing ${file.name}`,
                                              "info",
                                            )
                                          }
                                          className="p-1.5 text-slate-400 hover:text-purple-600 rounded"
                                        >
                                          <Share2 size={14} />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-6">
                  {/* Recent files */}
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Recent Files
                    </h3>
                    <div className="space-y-3">
                      {filingSystem.recentFiles.map((file) => (
                        <div
                          key={file.id}
                          className={`flex items-center space-x-3 p-3 rounded-xl transition-colors group ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
                        >
                          {getFileIcon(file.type)}
                          <div className="flex-1 min-w-0">
                            <p
                              className={`font-medium text-sm truncate ${darkMode ? "text-white" : "text-slate-900"}`}
                            >
                              {file.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {file.folder} • {file.uploaded}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() =>
                                showToast(`Viewing ${file.name}`, "info")
                              }
                              className="p-1 text-slate-400 hover:text-blue-600"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() =>
                                showToast(`Downloading ${file.name}`, "success")
                              }
                              className="p-1 text-slate-400 hover:text-emerald-600"
                            >
                              <Download size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "Create New Folder",
                          sub: "Organize your documents",
                          icon: <Folder className="text-blue-600" size={16} />,
                          bg: "bg-blue-100",
                          action: () =>
                            showToast("New folder created!", "success"),
                        },
                        {
                          label: "Share Documents",
                          sub: "With clients or team",
                          icon: (
                            <Share2 className="text-emerald-600" size={16} />
                          ),
                          bg: "bg-emerald-100",
                          action: () =>
                            showToast("Share link copied!", "success"),
                        },
                        {
                          label: "Bulk Download",
                          sub: "Download selected files",
                          icon: (
                            <Download className="text-purple-600" size={16} />
                          ),
                          bg: "bg-purple-100",
                          action: () =>
                            showToast("Preparing download...", "info"),
                        },
                        {
                          label: "Cleanup Old Files",
                          sub: "Free up storage space",
                          icon: <Trash2 className="text-amber-600" size={16} />,
                          bg: "bg-amber-100",
                          action: () =>
                            showToast(
                              "Cleanup complete — 500MB freed!",
                              "success",
                            ),
                        },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={item.action}
                          className={`w-full flex items-center space-x-3 p-3 text-left rounded-xl transition-colors ${darkMode ? "hover:bg-gray-700" : "hover:bg-slate-50"}`}
                        >
                          <div className={`p-2 ${item.bg} rounded-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <p
                              className={`font-medium text-sm ${darkMode ? "text-white" : "text-slate-900"}`}
                            >
                              {item.label}
                            </p>
                            <p className="text-xs text-slate-500">{item.sub}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* File type breakdown */}
                  <div
                    className={`rounded-2xl border p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
                  >
                    <h3
                      className={`font-bold mb-4 ${darkMode ? "text-white" : "text-slate-800"}`}
                    >
                      File Types
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "PDFs",
                          count: 28,
                          color: "bg-red-500",
                          width: "70%",
                        },
                        {
                          label: "Word Docs",
                          count: 12,
                          color: "bg-blue-500",
                          width: "30%",
                        },
                        {
                          label: "Spreadsheets",
                          count: 8,
                          color: "bg-green-500",
                          width: "20%",
                        },
                        {
                          label: "Presentations",
                          count: 5,
                          color: "bg-orange-500",
                          width: "12%",
                        },
                        {
                          label: "Other",
                          count: 3,
                          color: "bg-slate-400",
                          width: "8%",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3"
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`}
                          />
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span
                                className={
                                  darkMode ? "text-gray-300" : "text-slate-700"
                                }
                              >
                                {item.label}
                              </span>
                              <span
                                className={`font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                              >
                                {item.count}
                              </span>
                            </div>
                            <div
                              className={`h-1.5 rounded-full ${darkMode ? "bg-gray-700" : "bg-slate-100"}`}
                            >
                              <div
                                className={`h-full ${item.color} rounded-full`}
                                style={{ width: item.width }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===== SYSTEM TAB ===== */}
          {activeTab === "system" && (
            <div className="max-w-4xl space-y-8">
              <div
                className={`p-8 rounded-2xl border ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-slate-200"}`}
              >
                <h3
                  className={`text-lg font-bold mb-6 flex items-center space-x-2 ${darkMode ? "text-white" : ""}`}
                >
                  <ShieldCheck className="text-blue-500" size={20} />
                  <span>Security & Integrity</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    {[
                      {
                        label: "Storage Capacity",
                        value: "82%",
                        width: "w-[82%]",
                        color: "bg-blue-500",
                      },
                      {
                        label: "Active API Nodes",
                        value: "4 / 4",
                        width: "w-full",
                        color: "bg-green-500",
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between mb-2">
                          <span
                            className={`text-sm font-bold ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                          >
                            {item.label}
                          </span>
                          <span
                            className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}
                          >
                            {item.value}
                          </span>
                        </div>
                        <div
                          className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-slate-100"}`}
                        >
                          <div
                            className={`h-full ${item.color} rounded-full ${item.width}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`p-6 rounded-xl space-y-4 ${darkMode ? "bg-gray-700" : "bg-slate-50"}`}
                  >
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                      Network Status
                    </p>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="text-green-500" size={16} />
                      <span
                        className={`text-sm font-bold ${darkMode ? "text-white" : ""}`}
                      >
                        Firewall: Operational
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span
                        className={`text-sm font-bold ${darkMode ? "text-white" : ""}`}
                      >
                        Latency: 24ms
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        showToast(
                          "Diagnostics complete — all systems healthy!",
                          "success",
                        )
                      }
                      className={`w-full mt-4 py-2 border-2 border-dashed rounded-lg text-xs font-bold transition-all ${darkMode ? "border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white" : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"}`}
                    >
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
