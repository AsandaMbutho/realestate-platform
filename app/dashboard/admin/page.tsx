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
  ExternalLink,
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
  Clock,
  HardDrive,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Wallet,
  PieChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  MoreVertical,
  Edit,
  MessageSquare,
  Building,
  BadgePercent,
  Target,
  Award,
  Bell,
  Filter,
  X,
  Star,
  Heart,
  Bed,
  Bath,
  Maximize2,
  UserPlus,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  ChevronRight,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("month");
  const [propertyFilter, setPropertyFilter] = useState("all");

  // Properties Data from your file
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
      description: "Stunning luxury apartment with panoramic city views, modern finishes, and secure parking.",
      features: ["Panoramic Views", "Secure Parking", "Pool", "Gym", "24/7 Security"],
      agentDetails: { name: "John Agent", phone: "+27 11 234 5678", email: "john@realestate.com" },
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
      images: 15,
      location: "Sandton City",
      coordinates: { lat: -26.107, lng: 28.055 },
      description: "Ultra-modern penthouse with private rooftop terrace and smart home technology.",
      features: ["Rooftop Terrace", "Smart Home", "Wine Cellar", "Home Theater", "3 Parking"],
      agentDetails: { name: "Sarah Smith", phone: "+27 11 234 5679", email: "sarah@realestate.com" },
      listedDate: "2026-01-03",
      views: 89,
      favorites: 8,
    },
    {
      id: 3,
      title: "Executive Villa",
      address: "78 Morningside, Sandton",
      price: 18500000,
      status: "Active",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      agent: "Mike Brown",
      images: 20,
      location: "Morningside, Sandton",
      coordinates: { lat: -26.108, lng: 28.0575 },
      description: "Luxurious executive villa with landscaped gardens, staff quarters, and pool house.",
      features: ["Staff Quarters", "Pool House", "Wine Cellar", "Home Gym", "5 Car Garage"],
      agentDetails: { name: "Mike Brown", phone: "+27 11 234 5680", email: "mike@realestate.com" },
      listedDate: "2025-12-20",
      views: 203,
      favorites: 15,
    },
    {
      id: 4,
      title: "City View Loft",
      address: "22 Sandton CBD",
      price: 1800000,
      status: "Active",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      agent: "Emma Wilson",
      images: 10,
      location: "Sandton CBD",
      coordinates: { lat: -26.1065, lng: 28.058 },
      description: "Modern open-plan loft with exposed brick walls and industrial chic design.",
      features: ["Open Plan", "Exposed Brick", "High Ceilings", "City Views", "Secure"],
      agentDetails: { name: "Emma Wilson", phone: "+27 11 234 5681", email: "emma@realestate.com" },
      listedDate: "2026-01-07",
      views: 78,
      favorites: 5,
    },
    {
      id: 5,
      title: "Garden Townhouse",
      address: "15 Bryanston, Sandton",
      price: 9500000,
      status: "Under Offer",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      agent: "David Lee",
      images: 14,
      location: "Bryanston, Sandton",
      coordinates: { lat: -26.109, lng: 28.054 },
      description: "Spacious family townhouse with private garden and solar heating system.",
      features: ["Solar Heating", "Private Garden", "Braai Area", "Study", "Double Garage"],
      agentDetails: { name: "David Lee", phone: "+27 11 234 5682", email: "david@realestate.com" },
      listedDate: "2026-01-02",
      views: 145,
      favorites: 9,
    },
    {
      id: 6,
      title: "Waterfront Apartment",
      address: "89 Atlantic Beach",
      price: 3200000,
      status: "Active",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2100,
      agent: "Lisa Chen",
      images: 18,
      location: "Atlantic Beach, Cape Town",
      coordinates: { lat: -33.908, lng: 18.415 },
      description: "Beautiful waterfront apartment with sea views and direct beach access.",
      features: ["Ocean Views", "Beach Access", "Balcony", "Secure Parking", "Pool"],
      agentDetails: { name: "Lisa Chen", phone: "+27 21 456 7890", email: "lisa@realestate.com" },
      listedDate: "2026-01-10",
      views: 167,
      favorites: 14,
    },
    {
      id: 7,
      title: "Modern Family Home",
      address: "34 Parktown, Johannesburg",
      price: 8500000,
      status: "Active",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3800,
      agent: "James Wilson",
      images: 16,
      location: "Parktown, Johannesburg",
      coordinates: { lat: -26.189, lng: 28.043 },
      description: "Contemporary family home with open-plan living and landscaped garden.",
      features: ["Open Plan", "Study", "Entertainment Area", "Garden", "Double Garage"],
      agentDetails: { name: "James Wilson", phone: "+27 11 345 6789", email: "james@realestate.com" },
      listedDate: "2026-01-08",
      views: 92,
      favorites: 6,
    },
    {
      id: 8,
      title: "Investment Property",
      address: "67 Rosebank",
      price: 1500000,
      status: "Rented",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 900,
      agent: "Sophia Martinez",
      images: 8,
      location: "Rosebank, Johannesburg",
      coordinates: { lat: -26.142, lng: 28.042 },
      description: "Great investment property currently rented with stable tenant.",
      features: ["Investment", "Rented", "Secure", "Parking", "Near Transport"],
      agentDetails: { name: "Sophia Martinez", phone: "+27 11 567 8901", email: "sophia@realestate.com" },
      listedDate: "2025-11-15",
      views: 56,
      favorites: 3,
    },
    {
      id: 9,
      title: "Luxury Penthouse Suite",
      address: "101 Sandton Towers",
      price: 12500000,
      status: "Active",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 5200,
      agent: "Robert Johnson",
      images: 22,
      location: "Sandton Towers",
      coordinates: { lat: -26.105, lng: 28.053 },
      description: "Ultra-luxurious penthouse with 360-degree city views and premium finishes.",
      features: ["360° Views", "Private Elevator", "Wine Cellar", "Home Cinema", "4 Parking"],
      agentDetails: { name: "Robert Johnson", phone: "+27 11 678 9012", email: "robert@realestate.com" },
      listedDate: "2026-01-12",
      views: 189,
      favorites: 18,
    },
    {
      id: 10,
      title: "Cozy Studio Apartment",
      address: "28 Melville, Johannesburg",
      price: 850000,
      status: "Active",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      agent: "Amanda Taylor",
      images: 6,
      location: "Melville, Johannesburg",
      coordinates: { lat: -26.169, lng: 28.011 },
      description: "Perfect starter home or investment in trendy Melville area.",
      features: ["Modern", "Secure", "Pet Friendly", "Near Restaurants", "Parking"],
      agentDetails: { name: "Amanda Taylor", phone: "+27 11 789 0123", email: "amanda@realestate.com" },
      listedDate: "2026-01-09",
      views: 112,
      favorites: 7,
    },
    {
      id: 11,
      title: "Commercial Office Space",
      address: "200 Sandton Business District",
      price: 18500000,
      status: "Active",
      bedrooms: 0,
      bathrooms: 4,
      sqft: 8500,
      agent: "Michael Brown",
      images: 15,
      location: "Sandton Business District",
      coordinates: { lat: -26.106, lng: 28.052 },
      description: "Prime commercial office space in Sandton's business district.",
      features: ["Commercial", "A-Grade", "Parking", "Security", "Fiber Ready"],
      agentDetails: { name: "Michael Brown", phone: "+27 11 890 1234", email: "michael@realestate.com" },
      listedDate: "2026-01-14",
      views: 67,
      favorites: 4,
    },
    {
      id: 12,
      title: "Vacation Home",
      address: "12 Clifton, Cape Town",
      price: 28500000,
      status: "Active",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 6800,
      agent: "Jennifer Davis",
      images: 25,
      location: "Clifton, Cape Town",
      coordinates: { lat: -33.938, lng: 18.378 },
      description: "Luxury vacation home with stunning Atlantic Ocean views.",
      features: ["Ocean Front", "Pool", "Private Beach", "Staff Quarters", "Wine Cellar"],
      agentDetails: { name: "Jennifer Davis", phone: "+27 21 234 5678", email: "jennifer@realestate.com" },
      listedDate: "2026-01-06",
      views: 234,
      favorites: 22,
    },
  ]);

  // States for live data management
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
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Agent",
      status: "active",
      email: "emma@realestate.com",
      joinDate: "2023-08-15",
      phone: "+27 11 234 5681",
      avatarColor: "bg-pink-500",
      performance: 76,
      listings: 4,
      sales: 12,
      commission: 450000,
    },
    {
      id: 5,
      name: "David Lee",
      role: "Senior Agent",
      status: "inactive",
      email: "david@realestate.com",
      joinDate: "2024-02-01",
      phone: "+27 11 234 5682",
      avatarColor: "bg-orange-500",
      performance: 82,
      listings: 5,
      sales: 15,
      commission: 580000,
    },
    {
      id: 6,
      name: "Lisa Chen",
      role: "Agent",
      status: "active",
      email: "lisa@realestate.com",
      joinDate: "2023-12-10",
      phone: "+27 21 456 7890",
      avatarColor: "bg-teal-500",
      performance: 89,
      listings: 6,
      sales: 17,
      commission: 510000,
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
      name: "Emma Rodriguez",
      email: "emma@rodriguez.com",
      phone: "+27 82 333 4444",
      status: "active",
      type: "seller",
      budget: "R 4,200,000",
      properties: 1,
      lastContact: "2024-02-08",
      notes: "Listing property in Morningside",
      agent: "Sarah Smith",
      avatarColor: "bg-green-500",
    },
    {
      id: 3,
      name: "Thomas Anderson",
      email: "thomas@anderson.com",
      phone: "+27 82 555 6666",
      status: "prospect",
      type: "buyer",
      budget: "R 1,800,000",
      properties: 0,
      lastContact: "2024-02-05",
      notes: "First-time home buyer",
      agent: "Mike Brown",
      avatarColor: "bg-purple-500",
    },
    {
      id: 4,
      name: "Sophia Williams",
      email: "sophia@williams.com",
      phone: "+27 82 777 8888",
      status: "inactive",
      type: "investor",
      budget: "R 8,500,000",
      properties: 5,
      lastContact: "2024-01-15",
      notes: "Commercial property investor",
      agent: "David Lee",
      avatarColor: "bg-orange-500",
    },
    {
      id: 5,
      name: "Robert Chen",
      email: "robert@chen.com",
      phone: "+27 82 999 0000",
      status: "active",
      type: "buyer",
      budget: "R 3,500,000",
      properties: 2,
      lastContact: "2024-02-12",
      notes: "Looking for family home",
      agent: "John Agent",
      avatarColor: "bg-blue-500",
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
      property: "Modern Penthouse",
      client: "Emma Rodriguez",
      agent: "Sarah Smith",
      date: "2024-02-10",
      amount: 4200000,
      type: "sale",
      status: "pending",
      commission: 126000,
    },
    {
      id: 3,
      property: "Executive Villa",
      client: "Thomas Anderson",
      agent: "Mike Brown",
      date: "2024-01-28",
      amount: 18500000,
      type: "sale",
      status: "completed",
      commission: 555000,
    },
    {
      id: 4,
      property: "Monthly Rental - Rosebank",
      client: "Sophia Williams",
      agent: "David Lee",
      date: "2024-02-01",
      amount: 45000,
      type: "rental",
      status: "active",
      commission: 4500,
    },
    {
      id: 5,
      property: "Townhouse - Bryanston",
      client: "Robert Chen",
      agent: "John Agent",
      date: "2024-01-20",
      amount: 3200000,
      type: "sale",
      status: "completed",
      commission: 96000,
    },
  ]);

  const [financialMetrics, setFinancialMetrics] = useState({
    revenue: {
      total: 524000,
      change: 12.4,
      trend: "up",
      breakdown: {
        sales: 428000,
        rentals: 96000,
        other: 0,
      },
    },
    expenses: {
      total: 187000,
      change: 8.2,
      trend: "down",
      breakdown: {
        commissions: 142000,
        marketing: 25000,
        operations: 20000,
      },
    },
    netProfit: {
      total: 337000,
      change: 15.7,
      trend: "up",
      margin: 64.3,
    },
    outstanding: {
      total: 126000,
      dueIn30Days: 126000,
      overdue: 0,
    },
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

  // Filing System State
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
        ],
      },
      {
        id: 2,
        name: "Agent Documents",
        count: 48,
        lastUpdated: "Yesterday",
        color: "green",
        subfolders: [
          { name: "Licenses", files: 15, color: "blue" },
          { name: "Employment Contracts", files: 22, color: "purple" },
          { name: "Training Materials", files: 11, color: "cyan" },
        ],
        files: [
          {
            id: 201,
            name: "Agent_License_Requirements.pdf",
            size: "3.2 MB",
            type: "pdf",
            uploadedBy: "Legal",
            date: "2024-02-10",
            status: "approved",
          },
        ],
      },
      {
        id: 3,
        name: "Compliance & Legal",
        count: 12,
        lastUpdated: "3 days ago",
        color: "purple",
        subfolders: [
          { name: "Audit Reports", files: 5, color: "red" },
          { name: "Legal Documents", files: 7, color: "orange" },
        ],
        files: [
          {
            id: 301,
            name: "2024_Compliance_Checklist.pdf",
            size: "1.8 MB",
            type: "pdf",
            uploadedBy: "Legal Dept",
            date: "2024-01-30",
            status: "approved",
          },
        ],
      },
      {
        id: 4,
        name: "Marketing Materials",
        count: 36,
        lastUpdated: "This week",
        color: "orange",
        subfolders: [
          { name: "Property Flyers", files: 18, color: "pink" },
          { name: "Social Media", files: 12, color: "indigo" },
          { name: "Email Templates", files: 6, color: "teal" },
        ],
        files: [
          {
            id: 401,
            name: "Q1_Marketing_Plan.pptx",
            size: "4.5 MB",
            type: "ppt",
            uploadedBy: "Marketing",
            date: "2024-02-01",
            status: "draft",
          },
        ],
      },
      {
        id: 5,
        name: "Financial Records",
        count: 28,
        lastUpdated: "2 days ago",
        color: "indigo",
        subfolders: [
          { name: "Invoices", files: 12, color: "blue" },
          { name: "Commission Statements", files: 10, color: "green" },
          { name: "Tax Documents", files: 6, color: "red" },
        ],
        files: [
          {
            id: 501,
            name: "Q4_Financial_Report.xlsx",
            size: "3.7 MB",
            type: "xlsx",
            uploadedBy: "Finance",
            date: "2024-01-25",
            status: "final",
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
        name: "Property_Photos.zip",
        folder: "Marketing Materials",
        size: "24.5 MB",
        type: "zip",
        uploaded: "Yesterday",
        uploadedBy: "Photographer",
      },
      {
        id: 3,
        name: "Commission_Statement_Feb.xlsx",
        folder: "Financial Records",
        size: "1.8 MB",
        type: "xlsx",
        uploaded: "2 days ago",
        uploadedBy: "Finance Dept",
      },
      {
        id: 4,
        name: "Inspection_Report.pdf",
        folder: "Transaction Files",
        size: "5.1 MB",
        type: "pdf",
        uploaded: "3 days ago",
        uploadedBy: "Inspector",
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

  // Derived Values
  const activeProperties = useMemo(() => 
    propertiesData.filter(p => p.status === "Active").length, 
    [propertiesData]
  );

  const totalPortfolioValue = useMemo(() => 
    propertiesData.reduce((sum, p) => sum + p.price, 0), 
    [propertiesData]
  );

  const averagePrice = useMemo(() => 
    Math.round(propertiesData.reduce((sum, p) => sum + p.price, 0) / propertiesData.length), 
    [propertiesData]
  );

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const filteredClients = useMemo(() => {
    let result = clients.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.agent.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (clientFilter !== "all") {
      result = result.filter((c) => c.status === clientFilter);
    }

    return result;
  }, [clients, searchTerm, clientFilter]);

  const filteredProperties = useMemo(() => {
    let result = propertiesData.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.agent.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (propertyFilter !== "all") {
      result = result.filter((p) => p.status === propertyFilter);
    }

    return result;
  }, [propertiesData, searchTerm, propertyFilter]);

  const filteredTransactions = useMemo(() => {
    return transactions.filter(t => {
      if (dateRange === "month") {
        const transactionDate = new Date(t.date);
        const now = new Date();
        return transactionDate.getMonth() === now.getMonth() && 
               transactionDate.getFullYear() === now.getFullYear();
      } else if (dateRange === "quarter") {
        const transactionDate = new Date(t.date);
        const now = new Date();
        const quarterStart = new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
        return transactionDate >= quarterStart;
      }
      return true;
    });
  }, [transactions, dateRange]);

  // Filing System Functions
  const toggleFolder = (folderId) => {
    if (expandedFolders.includes(folderId)) {
      setExpandedFolders(expandedFolders.filter((id) => id !== folderId));
    } else {
      setExpandedFolders([...expandedFolders, folderId]);
    }
  };

  const simulateFileUpload = () => {
    if (uploadingFile) return;
    
    setUploadingFile(true);
    setTimeout(() => {
      const newFile = {
        id: Date.now(),
        name: "Admin_Document.pdf",
        folder: "Transaction Files",
        size: "1.5 MB",
        type: "pdf",
        uploaded: "Just now",
        uploadedBy: "Admin",
      };
      
      setFilingSystem(prev => ({
        ...prev,
        recentFiles: [newFile, ...prev.recentFiles.slice(0, 3)],
        storage: {
          ...prev.storage,
          used: parseFloat((prev.storage.used + 1.5).toFixed(1))
        }
      }));
      
      setUploadingFile(false);
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
      signed: { color: "bg-emerald-100", text: "text-emerald-700", label: "Signed" },
      pending: { color: "bg-amber-100", text: "text-amber-700", label: "Pending" },
      approved: { color: "bg-blue-100", text: "text-blue-700", label: "Approved" },
      draft: { color: "bg-slate-100", text: "text-slate-700", label: "Draft" },
      final: { color: "bg-indigo-100", text: "text-indigo-700", label: "Final" },
    };
    
    const cfg = config[status] || { color: "bg-slate-100", text: "text-slate-700", label: "Unknown" };
    return (
      <span className={`px-2 py-1 ${cfg.color} ${cfg.text} text-xs rounded-full font-medium`}>
        {cfg.label}
      </span>
    );
  };

  // Financial Functions
  const formatCurrency = (amount) => {
    return `R ${amount.toLocaleString()}`;
  };

  const calculateMonthlyRevenue = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    return transactions
      .filter(t => {
        const date = new Date(t.date);
        return date.getMonth() === currentMonth && 
               date.getFullYear() === currentYear &&
               t.status === "completed";
      })
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const calculateTotalCommission = () => {
    return transactions
      .filter(t => t.status === "completed")
      .reduce((sum, t) => sum + t.commission, 0);
  };

  // Client Functions
  const addNewClient = () => {
    if (!newClientForm.name || !newClientForm.email) {
      alert("Please fill in required fields");
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
      lastContact: new Date().toISOString().split('T')[0],
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
    alert("Client added successfully!");
  };

  const updateClientStatus = (clientId, newStatus) => {
    setClients(clients.map(c => 
      c.id === clientId ? { ...c, status: newStatus } : c
    ));
  };

  const deleteClient = (clientId) => {
    if (confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter(c => c.id !== clientId));
    }
  };

  // Property Functions
  const addNewProperty = () => {
    if (!newPropertyForm.title || !newPropertyForm.price || !newPropertyForm.agent) {
      alert("Please fill in required fields");
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
      agentDetails: {
        name: newPropertyForm.agent,
        phone: "",
        email: "",
      },
      listedDate: new Date().toISOString().split('T')[0],
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
    alert("Property added successfully!");
  };

  const updatePropertyStatus = (propertyId, newStatus) => {
    setPropertiesData(propertiesData.map(p => 
      p.id === propertyId ? { ...p, status: newStatus } : p
    ));
  };

  const deleteProperty = (propertyId) => {
    if (confirm("Are you sure you want to delete this property?")) {
      setPropertiesData(propertiesData.filter(p => p.id !== propertyId));
    }
  };

  // User Functions
  const addNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `New Agent ${users.length + 1}`,
      role: "Agent",
      status: "active",
      email: `agent${users.length + 1}@realestate.com`,
      joinDate: new Date().toISOString().split('T')[0],
      phone: "+27 11 000 0000",
      avatarColor: "bg-slate-500",
      performance: 0,
      listings: 0,
      sales: 0,
      commission: 0,
    };

    setUsers([...users, newUser]);
    alert("New agent added!");
  };

  const updateUserStatus = (userId, newStatus) => {
    setUsers(users.map(u => 
      u.id === userId ? { ...u, status: newStatus } : u
    ));
  };

  const deleteUser = (userId) => {
    if (confirm("Permanently remove this agent?")) {
      setUsers(users.filter((u) => u.id !== userId));
    }
  };

  // Actions
  const resolveAlert = (id) => {
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
            { id: "filing", label: "Filing System", icon: Folder },
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
              {activeTab === "filing" ? "Document Filing System" : activeTab}
            </h1>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-xs font-medium text-slate-400">
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
                className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 text-sm rounded-full transition-all outline-none"
              />
              <Search
                className="absolute left-3 top-2 text-slate-400"
                size={14}
              />
            </div>
            <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
              <div className="text-right">
                <p className="text-xs font-bold">Administration Portal</p>
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
          {/* OVERVIEW TAB */}
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
                    icon: <Home className="text-blue-500" size={20} />,
                  },
                  {
                    label: "Portfolio Value",
                    value: formatCurrency(totalPortfolioValue),
                    sub: `${formatCurrency(averagePrice)} average`,
                    color: "text-green-600",
                    icon: <DollarSign className="text-green-500" size={20} />,
                  },
                  {
                    label: "Active Agents",
                    value: users.filter(u => u.status === "active").length,
                    sub: `${users.length} total team members`,
                    color: "text-purple-600",
                    icon: <Users className="text-purple-500" size={20} />,
                  },
                  {
                    label: "Monthly Revenue",
                    value: formatCurrency(calculateMonthlyRevenue()),
                    sub: "+12.4% from last month",
                    color: "text-amber-600",
                    icon: <TrendingUp className="text-amber-500" size={20} />,
                  },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                        {stat.icon}
                      </div>
                    </div>
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
                      <div key={alert.id} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className={`w-2 h-2 rounded-full ${alert.priority === "high" ? "bg-red-500 animate-pulse" : "bg-orange-400"}`} />
                          <div>
                            <p className="text-sm font-semibold text-slate-800">{alert.message}</p>
                            <p className="text-[10px] text-slate-400">{alert.time}</p>
                          </div>
                        </div>
                        <button onClick={() => resolveAlert(alert.id)} className="px-3 py-1 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
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
                    <button onClick={() => setActiveTab("properties")} className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                      <Plus size={16} className="text-blue-400" />
                      <span className="text-sm font-medium">New Listing</span>
                    </button>
                    <button className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                      <Database size={16} className="text-green-400" />
                      <span className="text-sm font-medium">Full System Backup</span>
                    </button>
                    <button onClick={() => setActiveTab("financial")} className="flex items-center space-x-3 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all">
                      <FileText size={16} className="text-purple-400" />
                      <span className="text-sm font-medium">Export Financials</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TEAM MEMBERS TAB */}
          {activeTab === "users" && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-lg text-slate-800">Team Directory</h2>
                    <p className="text-xs text-slate-500">Manage agents and their performance</p>
                  </div>
                  <button onClick={addNewUser} className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                    + Add Member
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50/80 border-b border-slate-100">
                      <tr>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Agent</th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Role</th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Performance</th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Listings</th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Commission</th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Status</th>
                        <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-9 h-9 rounded-full ${user.avatarColor} text-white flex items-center justify-center font-bold text-xs uppercase`}>
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-800">{user.name}</p>
                                <p className="text-xs text-slate-500">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded text-slate-600 capitalize">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${user.performance >= 80 ? 'bg-green-500' : user.performance >= 60 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${user.performance}%` }} />
                              </div>
                              <span className="text-xs font-bold text-slate-700">{user.performance}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-center">
                              <p className="text-sm font-bold text-slate-800">{user.listings}</p>
                              <p className="text-xs text-slate-500">properties</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm font-bold text-green-600">R {user.commission.toLocaleString()}</p>
                          </td>
                          <td className="px-6 py-4">
                            <button onClick={() => updateUserStatus(user.id, user.status === "active" ? "inactive" : "active")} className={`px-3 py-1 text-xs font-bold rounded-full ${user.status === "active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"}`}>
                              {user.status === "active" ? "Active" : "Inactive"}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                <Mail size={16} />
                              </button>
                              <button onClick={() => deleteUser(user.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
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

          {/* LISTINGS TAB */}
          {activeTab === "properties" && (
            <div className="space-y-8">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Portfolio Overview</h2>
                  <p className="text-sm text-slate-500">Live property list and market performance</p>
                </div>
                <div className="flex space-x-4">
                  <select value={propertyFilter} onChange={(e) => setPropertyFilter(e.target.value)} className="bg-white border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 ring-blue-500/10">
                    <option value="all">All Statuses</option>
                    <option value="Active">Active</option>
                    <option value="Under Offer">Under Offer</option>
                    <option value="Rented">Rented</option>
                  </select>
                  <button onClick={() => setActiveTab("properties")} className="bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg hover:bg-slate-800 transition-all">
                    New Property
                  </button>
                </div>
              </div>
              
              {/* Add Property Form */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4">Add New Property</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Title</label>
                    <input type="text" value={newPropertyForm.title} onChange={(e) => setNewPropertyForm({...newPropertyForm, title: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10" placeholder="Luxury Apartment" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Price</label>
                    <input type="number" value={newPropertyForm.price} onChange={(e) => setNewPropertyForm({...newPropertyForm, price: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10" placeholder="2500000" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Agent</label>
                    <select value={newPropertyForm.agent} onChange={(e) => setNewPropertyForm({...newPropertyForm, agent: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10">
                      <option value="">Select Agent</option>
                      {users.filter(u => u.status === "active").map(user => (
                        <option key={user.id} value={user.name}>{user.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase">Status</label>
                    <select value={newPropertyForm.status} onChange={(e) => setNewPropertyForm({...newPropertyForm, status: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10">
                      <option value="Active">Active</option>
                      <option value="Under Offer">Under Offer</option>
                      <option value="Rented">Rented</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 lg:col-span-4">
                    <button onClick={addNewProperty} className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors mt-4">
                      Add Property
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <div key={property.id} className="bg-white group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-[16/9] bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${property.status === "Active" ? "bg-green-500 text-white" : property.status === "Under Offer" ? "bg-amber-500 text-white" : "bg-blue-500 text-white"}`}>
                          {property.status}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-800 flex items-center space-x-1">
                          <Eye size={10} />
                          <span>{property.views}</span>
                        </span>
                      </div>
                      <div className="w-full h-full flex items-center justify-center">
                        <Home className="text-slate-300" size={48} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-slate-800 line-clamp-1">{property.title}</h3>
                      <p className="text-xs text-slate-400 mt-1">{property.address}</p>
                      <div className="mt-4 flex items-center space-x-4 text-sm text-slate-600">
                        <div className="flex items-center space-x-1">
                          <Bed size={14} />
                          <span>{property.bedrooms} beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath size={14} />
                          <span>{property.bathrooms} baths</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Maximize2 size={14} />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div>
                          <p className="text-xl font-black text-blue-600">R{property.price.toLocaleString()}</p>
                          <p className="text-xs text-slate-500">Agent: {property.agent}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button onClick={() => updatePropertyStatus(property.id, property.status === "Active" ? "Under Offer" : "Active")} className="p-2 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                            <Edit size={16} />
                          </button>
                          <button onClick={() => deleteProperty(property.id)} className="p-2 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
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

          {/* FINANCIALS TAB */}
          {activeTab === "financial" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Total Revenue",
                    value: formatCurrency(financialMetrics.revenue.total),
                    change: `${financialMetrics.revenue.change}%`,
                    trend: financialMetrics.revenue.trend,
                    icon: <DollarSign className="text-green-500" size={20} />,
                    color: "bg-green-50",
                  },
                  {
                    label: "Total Expenses",
                    value: formatCurrency(financialMetrics.expenses.total),
                    change: `${financialMetrics.expenses.change}%`,
                    trend: financialMetrics.expenses.trend,
                    icon: <CreditCard className="text-red-500" size={20} />,
                    color: "bg-red-50",
                  },
                  {
                    label: "Net Profit",
                    value: formatCurrency(financialMetrics.netProfit.total),
                    change: `${financialMetrics.netProfit.change}%`,
                    trend: financialMetrics.netProfit.trend,
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
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${stat.color}`}>{stat.icon}</div>
                      <div className="flex items-center space-x-1">
                        <span className={`text-xs font-bold ${stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-slate-500"}`}>
                          {stat.trend === "up" ? <TrendingUp size={12} /> : stat.trend === "down" ? <TrendingDown size={12} /> : null}
                        </span>
                        <span className={`text-xs font-bold ${stat.trend === "up" ? "text-green-500" : stat.trend === "down" ? "text-red-500" : "text-slate-500"}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-2xl font-bold mt-2 text-slate-800">{stat.value}</p>
                    {stat.label === "Net Profit" && <p className="text-xs text-slate-500 mt-1 font-medium">{financialMetrics.netProfit.margin}% margin</p>}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-800">Revenue Breakdown</h3>
                    <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="bg-white border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 ring-blue-500/10">
                      <option value="month">This Month</option>
                      <option value="quarter">This Quarter</option>
                      <option value="year">This Year</option>
                    </select>
                  </div>
                  
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="border-b border-slate-100">
                          <tr>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Property</th>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Client</th>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Agent</th>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Date</th>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Amount</th>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Commission</th>
                            <th className="pb-3 text-xs font-bold text-slate-400 uppercase">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredTransactions.map((transaction) => (
                            <tr key={transaction.id} className="hover:bg-slate-50/50">
                              <td className="py-3">
                                <p className="text-sm font-medium text-slate-800">{transaction.property}</p>
                                <p className="text-xs text-slate-500">{transaction.type}</p>
                              </td>
                              <td className="py-3"><p className="text-sm text-slate-700">{transaction.client}</p></td>
                              <td className="py-3">
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded">{transaction.agent}</span>
                              </td>
                              <td className="py-3"><p className="text-sm text-slate-700">{transaction.date}</p></td>
                              <td className="py-3"><p className="text-sm font-bold text-slate-800">{formatCurrency(transaction.amount)}</p></td>
                              <td className="py-3"><p className="text-sm font-bold text-green-600">{formatCurrency(transaction.commission)}</p></td>
                              <td className="py-3">
                                <span className={`px-2 py-1 text-xs font-bold rounded-full ${transaction.status === "completed" ? "bg-emerald-100 text-emerald-700" : transaction.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>
                                  {transaction.status}
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
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Profit Distribution</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-slate-600">Agent Commissions</span>
                          <span className="text-sm font-bold text-slate-800">{formatCurrency(financialMetrics.expenses.breakdown.commissions)}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-slate-600">Marketing</span>
                          <span className="text-sm font-bold text-slate-800">{formatCurrency(financialMetrics.expenses.breakdown.marketing)}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: "15%" }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-slate-600">Operations</span>
                          <span className="text-sm font-bold text-slate-800">{formatCurrency(financialMetrics.expenses.breakdown.operations)}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "10%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Quick Reports</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="flex items-center space-x-3">
                          <FileText className="text-blue-500" size={16} />
                          <span className="text-sm font-medium">Monthly Statement</span>
                        </div>
                        <Download size={14} className="text-slate-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="flex items-center space-x-3">
                          <PieChart className="text-green-500" size={16} />
                          <span className="text-sm font-medium">Profit & Loss</span>
                        </div>
                        <Download size={14} className="text-slate-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="flex items-center space-x-3">
                          <Calendar className="text-purple-500" size={16} />
                          <span className="text-sm font-medium">Quarterly Tax</span>
                        </div>
                        <Download size={14} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CLIENTS TAB */}
          {activeTab === "clients" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Total Clients",
                    value: clients.length,
                    sub: `${clients.filter(c => c.status === "active").length} active`,
                    color: "text-blue-600",
                    icon: <Users className="text-blue-500" size={20} />,
                  },
                  {
                    label: "Buyers",
                    value: clients.filter(c => c.type === "buyer").length,
                    sub: `${clients.filter(c => c.type === "buyer" && c.status === "active").length} active`,
                    color: "text-green-600",
                    icon: <Home className="text-green-500" size={20} />,
                  },
                  {
                    label: "Sellers",
                    value: clients.filter(c => c.type === "seller").length,
                    sub: `${clients.filter(c => c.type === "seller" && c.status === "active").length} active`,
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
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                        {stat.icon}
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-2xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg text-slate-800">Client Directory</h3>
                      <p className="text-sm text-slate-500">Manage all client relationships</p>
                    </div>
                    <div className="flex space-x-3">
                      <select value={clientFilter} onChange={(e) => setClientFilter(e.target.value)} className="bg-white border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 ring-blue-500/10">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="prospect">Prospect</option>
                        <option value="inactive">Inactive</option>
                      </select>
                      <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                        + New Client
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-slate-50/80 border-b border-slate-100">
                          <tr>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Client</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Type</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Status</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Budget</th>
                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {filteredClients.map((client) => (
                            <tr key={client.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                  <div className={`w-9 h-9 rounded-full ${client.avatarColor} text-white flex items-center justify-center font-bold text-xs uppercase`}>
                                    {client.name.charAt(0)}
                                  </div>
                                  <div>
                                    <p className="text-sm font-bold text-slate-800">{client.name}</p>
                                    <p className="text-xs text-slate-500">{client.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`text-xs font-semibold px-2 py-1 rounded capitalize ${client.type === "buyer" ? "bg-blue-50 text-blue-600" : client.type === "seller" ? "bg-purple-50 text-purple-600" : "bg-amber-50 text-amber-600"}`}>
                                  {client.type}
                                </span>
                              </td>
                              <td className="px-6 py-4">
                                <button onClick={() => updateClientStatus(client.id, client.status === "active" ? "inactive" : "active")} className={`px-3 py-1 text-xs font-bold rounded-full ${client.status === "active" ? "bg-green-100 text-green-700" : client.status === "prospect" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                                  {client.status}
                                </button>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-sm font-bold text-slate-800">{client.budget}</p>
                                <p className="text-xs text-slate-500">{client.properties} properties</p>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-2">
                                  <button onClick={() => updateClientStatus(client.id, "active")} className="p-2 text-slate-400 hover:text-green-600 transition-colors" title="Mark as Active">
                                    <CheckCircle size={16} />
                                  </button>
                                  <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                    <Mail size={16} />
                                  </button>
                                  <button onClick={() => deleteClient(client.id)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
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
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Add New Client</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                        <input type="text" value={newClientForm.name} onChange={(e) => setNewClientForm({...newClientForm, name: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
                        <input type="email" value={newClientForm.email} onChange={(e) => setNewClientForm({...newClientForm, email: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10" placeholder="john@example.com" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase">Type</label>
                          <select value={newClientForm.type} onChange={(e) => setNewClientForm({...newClientForm, type: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10">
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                            <option value="investor">Investor</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-500 uppercase">Budget</label>
                          <input type="text" value={newClientForm.budget} onChange={(e) => setNewClientForm({...newClientForm, budget: e.target.value})} className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 ring-blue-500/10" placeholder="R 2,500,000" />
                        </div>
                      </div>
                      <button onClick={addNewClient} className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                        Add Client
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Client Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Active Clients</span>
                        <span className="text-sm font-bold text-slate-800">{clients.filter(c => c.status === "active").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Prospects</span>
                        <span className="text-sm font-bold text-slate-800">{clients.filter(c => c.status === "prospect").length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Average Budget</span>
                        <span className="text-sm font-bold text-slate-800">R 3.2M</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Total Properties</span>
                        <span className="text-sm font-bold text-slate-800">{clients.reduce((sum, c) => sum + c.properties, 0)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FILING SYSTEM TAB */}
          {activeTab === "filing" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Filing System</h2>
                  <p className="text-sm text-slate-500">Admin document management and storage</p>
                </div>
                <button onClick={simulateFileUpload} disabled={uploadingFile} className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center space-x-2 disabled:opacity-50">
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

              {/* Storage Overview */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <HardDrive className="text-blue-500" size={20} />
                    <div>
                      <h3 className="font-bold text-slate-800">Storage Usage</h3>
                      <p className="text-sm text-slate-500">Document repository capacity</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-700">{filingSystem.storage.used} GB of {filingSystem.storage.total} GB used</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-700" style={{ width: `${(filingSystem.storage.used / filingSystem.storage.total) * 100}%` }} />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{Math.round((filingSystem.storage.used / filingSystem.storage.total) * 100)}% used</span>
                  <span>{(filingSystem.storage.total - filingSystem.storage.used).toFixed(1)} GB available</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <h3 className="text-lg font-bold text-slate-800">Document Folders</h3>
                  <div className="space-y-4">
                    {filingSystem.folders.map((folder) => {
                      const folderColors = {
                        blue: "bg-blue-100 text-blue-600",
                        green: "bg-green-100 text-green-600",
                        purple: "bg-purple-100 text-purple-600",
                        orange: "bg-orange-100 text-orange-600",
                        indigo: "bg-indigo-100 text-indigo-600",
                      };
                      const folderColor = folderColors[folder.color] || "bg-slate-100 text-slate-600";
                      return (
                        <div key={folder.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                          <div className="p-4 cursor-pointer hover:bg-slate-50 transition-colors flex justify-between items-center" onClick={() => toggleFolder(folder.id)}>
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg ${folderColor.split(' ')[0]}`}>
                                <Folder className={folderColor.split(' ')[1]} size={18} />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900">{folder.name}</h4>
                                <p className="text-xs text-slate-500">{folder.count} items • Updated {folder.lastUpdated}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">{folder.count} files</span>
                              {expandedFolders.includes(folder.id) ? <ChevronUp className="text-slate-400" size={18} /> : <ChevronDown className="text-slate-400" size={18} />}
                            </div>
                          </div>
                          {expandedFolders.includes(folder.id) && (
                            <div className="border-t p-4 space-y-4">
                              <div className="space-y-3">
                                <h5 className="text-sm font-medium text-slate-700 flex items-center space-x-2">
                                  <FolderOpen size={14} />
                                  <span>Subfolders:</span>
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  {folder.subfolders.map((subfolder, idx) => {
                                    const subColors = {
                                      blue: "bg-blue-50 text-blue-700 border-blue-100",
                                      amber: "bg-amber-50 text-amber-700 border-amber-100",
                                      emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
                                      slate: "bg-slate-50 text-slate-700 border-slate-100",
                                      purple: "bg-purple-50 text-purple-700 border-purple-100",
                                      cyan: "bg-cyan-50 text-cyan-700 border-cyan-100",
                                      red: "bg-red-50 text-red-700 border-red-100",
                                      orange: "bg-orange-50 text-orange-700 border-orange-100",
                                      pink: "bg-pink-50 text-pink-700 border-pink-100",
                                      indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
                                      teal: "bg-teal-50 text-teal-700 border-teal-100",
                                    };
                                    const subColor = subColors[subfolder.color] || "bg-slate-50 text-slate-700 border-slate-100";
                                    return (
                                      <div key={idx} className={`p-3 rounded-xl border ${subColor.split(' ')[2]}`}>
                                        <div className="flex items-center space-x-2 mb-2">
                                          <FolderOpen size={14} className="text-slate-500" />
                                          <span className="text-sm font-medium text-slate-900">{subfolder.name}</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-500">
                                          <span>{subfolder.files} files</span>
                                          <span className={`px-2 py-0.5 ${subColor.split(' ')[0]} ${subColor.split(' ')[1]} rounded-full text-xs`}>{subfolder.color}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              {folder.files && folder.files.length > 0 && (
                                <div className="space-y-3">
                                  <h5 className="text-sm font-medium text-slate-700 flex items-center space-x-2">
                                    <File size={14} />
                                    <span>Recent Files:</span>
                                  </h5>
                                  <div className="space-y-2">
                                    {folder.files.map((file) => (
                                      <div key={file.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-white transition-colors group">
                                        <div className="flex items-center space-x-3">
                                          {getFileIcon(file.type)}
                                          <div>
                                            <p className="font-medium text-slate-900 text-sm">{file.name}</p>
                                            <p className="text-xs text-slate-500">{file.size} • {file.uploadedBy} • {file.date}</p>
                                          </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                          {getStatusBadge(file.status)}
                                          <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                                            <Download size={16} />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Recent Files</h3>
                    <div className="space-y-4">
                      {filingSystem.recentFiles.map((file) => (
                        <div key={file.id} className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group">
                          {getFileIcon(file.type)}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-slate-900 text-sm truncate">{file.name}</p>
                            <p className="text-xs text-slate-500">{file.folder} • {file.uploaded}</p>
                          </div>
                          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 text-slate-400 hover:text-blue-600">
                              <Eye size={14} />
                            </button>
                            <button className="p-1 text-slate-400 hover:text-emerald-600">
                              <Download size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Folder className="text-blue-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Create New Folder</p>
                          <p className="text-xs text-slate-500">Organize your documents</p>
                        </div>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <Share2 className="text-emerald-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Share Documents</p>
                          <p className="text-xs text-slate-500">With clients or team</p>
                        </div>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-slate-50 rounded-xl transition-colors">
                        <div className="p-2 bg-amber-100 rounded-lg">
                          <Trash2 className="text-amber-600" size={16} />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Cleanup Old Files</p>
                          <p className="text-xs text-slate-500">Free up storage space</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SYSTEM TAB */}
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
                        <span className="text-sm font-bold text-slate-600">Storage Capacity</span>
                        <span className="text-sm font-bold text-slate-800">82%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[82%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-bold text-slate-600">Active API Nodes</span>
                        <span className="text-sm font-bold text-slate-800">4 / 4</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Network Status</p>
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="text-green-500" size={16} />
                      <span className="text-sm font-bold">Firewall: Operational</span>
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