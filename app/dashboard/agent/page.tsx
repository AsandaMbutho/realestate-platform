"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
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
  Send,
  X,
  ChevronDown,
  AlertTriangle,
  Moon,
  Sun,
  Edit,
  Trash2,
  MoreVertical,
  Share2,
  Camera,
  Layers,
  Percent,
  MessageCircle,
  CheckSquare,
  FileCheck,
  UserPlus,
  CreditCard,
  HelpCircle,
  Database,
  Server,
  Link,
  ChevronLeft,
  ChevronUp,
  ExternalLink,
  Grid,
  List,
  LayoutGrid,
  Bed,
  Bath,
  Maximize2,
  HardDrive,
  Folder,
  FolderOpen,
  Upload,
  File,
  Calculator,
  ArrowRight,
  Map,
  Tag,
  Building2,
  Car,
  Wind,
  Thermometer,
  Coffee,
  Dumbbell,
  Wifi,
  Navigation,
  Compass,
  Battery,
  Signal,
  Lock,
  Unlock,
  Video,
  Mic,
  MicOff,
  Check,
  XCircle,
  AlertCircle,
  Radio,
  Satellite,
  Play,
  Pause,
  StopCircle,
  RefreshCw,
  Power,
  Wrench,
  Key,
  Tablet,
  Monitor,
  Bluetooth,
  Cpu,
  WifiOff,
  Fingerprint,
  Plug,
  EyeOff,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

// ==================== TOAST NOTIFICATION ====================
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
        padding: "0",
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

// ==================== MODALS ====================
const MortgageCalculatorModal = ({
  property,
  darkMode,
  onClose,
  showToast,
}) => {
  const [mortgageCalc, setMortgageCalc] = useState({
    propertyPrice: property?.price || 2500000,
    deposit: 20,
    interestRate: 9.5,
    loanTerm: 20,
  });

  const formatPrice = (price) => {
    if (!price) return "R 0";
    if (price >= 1000000) return `R ${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `R ${(price / 1000).toFixed(0)}K`;
    return `R ${price}`;
  };

  const calculateMonthlyPayment = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    );
  };

  const calculateTotalInterest = (principal, monthlyPayment, years) => {
    const totalPaid = monthlyPayment * years * 12;
    return totalPaid - principal;
  };

  const mortgageCalculation = useMemo(() => {
    const principal =
      mortgageCalc.propertyPrice * ((100 - mortgageCalc.deposit) / 100);
    const monthlyPayment = calculateMonthlyPayment(
      principal,
      mortgageCalc.interestRate,
      mortgageCalc.loanTerm,
    );
    const totalInterest = calculateTotalInterest(
      principal,
      monthlyPayment,
      mortgageCalc.loanTerm,
    );
    const totalCost = principal + totalInterest;
    return {
      principal,
      monthlyPayment,
      totalInterest,
      totalCost,
      depositAmount: mortgageCalc.propertyPrice * (mortgageCalc.deposit / 100),
    };
  }, [mortgageCalc]);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`p-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex justify-between items-center`}
        >
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Calculator size={24} /> Mortgage Calculator
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-auto">
          <div
            className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-4 rounded-xl mb-6`}
          >
            <div
              className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Calculating for:
            </div>
            <div className="text-lg font-bold">{property?.title}</div>
            <div className="text-blue-600 font-bold">
              {formatPrice(property?.price)}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Property Price:{" "}
                <span className="text-blue-600 font-bold">
                  {formatPrice(mortgageCalc.propertyPrice)}
                </span>
              </label>
              <input
                type="range"
                min="500000"
                max="20000000"
                step="100000"
                value={mortgageCalc.propertyPrice}
                onChange={(e) =>
                  setMortgageCalc({
                    ...mortgageCalc,
                    propertyPrice: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg accent-blue-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Deposit: {mortgageCalc.deposit}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="5"
                  value={mortgageCalc.deposit}
                  onChange={(e) =>
                    setMortgageCalc({
                      ...mortgageCalc,
                      deposit: parseInt(e.target.value),
                    })
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg accent-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Interest Rate: {mortgageCalc.interestRate}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.25"
                  value={mortgageCalc.interestRate}
                  onChange={(e) =>
                    setMortgageCalc({
                      ...mortgageCalc,
                      interestRate: parseFloat(e.target.value),
                    })
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg accent-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Loan Term: {mortgageCalc.loanTerm} years
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={mortgageCalc.loanTerm}
                onChange={(e) =>
                  setMortgageCalc({
                    ...mortgageCalc,
                    loanTerm: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg accent-blue-600"
              />
            </div>

            <div
              className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-6 rounded-xl border-2 ${darkMode ? "border-gray-600" : "border-gray-200"}`}
            >
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div
                    className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Monthly Payment
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    R {mortgageCalculation.monthlyPayment.toFixed(0)}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Deposit Required
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {formatPrice(mortgageCalculation.depositAmount)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div
                    className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Total Interest
                  </div>
                  <div className="text-xl font-bold text-red-600">
                    {formatPrice(mortgageCalculation.totalInterest)}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Total Cost
                  </div>
                  <div className="text-xl font-bold">
                    {formatPrice(mortgageCalculation.totalCost)}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"
              onClick={() => {
                showToast(
                  `Mortgage application started for ${property?.title}`,
                  "success",
                );
                onClose();
              }}
            >
              <DollarSign size={20} /> Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocationTrackingModal = ({ darkMode, onClose, showToast }) => {
  const [checkInStatus, setCheckInStatus] = useState("checked-in");
  const [locationHistory] = useState([
    {
      time: "09:15 AM",
      location: "Office HQ",
      status: "checked-in",
      type: "checkin",
    },
    {
      time: "10:30 AM",
      location: "Sandton Apartment",
      status: "on-site",
      type: "viewing",
    },
    {
      time: "11:45 AM",
      location: "Morningside Villa",
      status: "on-site",
      type: "inspection",
    },
    {
      time: "01:30 PM",
      location: "Client Meeting",
      status: "meeting",
      type: "meeting",
    },
    {
      time: "03:00 PM",
      location: "Bryanston Townhouse",
      status: "on-site",
      type: "viewing",
    },
  ]);

  const handleCheckInOut = () => {
    if (checkInStatus === "checked-out") {
      setCheckInStatus("checked-in");
      showToast(
        "Checked in successfully! Location tracking active.",
        "success",
      );
    } else {
      setCheckInStatus("checked-out");
      showToast("Checked out successfully! Tracking paused.", "info");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`p-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex justify-between items-center`}
        >
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Navigation size={24} /> Live Location Tracking
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-auto">
          <div
            className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-5 rounded-xl mb-6 flex justify-between items-center`}
          >
            <div>
              <div
                className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Current Status
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${checkInStatus === "checked-in" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                />
                <span className="text-xl font-bold">
                  {checkInStatus === "checked-in" ? "ON DUTY" : "OFF DUTY"}
                </span>
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  • Checked in at 09:15 AM
                </span>
              </div>
            </div>
            <button
              onClick={handleCheckInOut}
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-3 ${checkInStatus === "checked-in" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"} text-white`}
            >
              {checkInStatus === "checked-in" ? (
                <>
                  <Lock size={18} /> Check Out
                </>
              ) : (
                <>
                  <Unlock size={18} /> Check In
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <div className="bg-blue-900 p-8 rounded-xl text-white text-center">
                <Compass size={64} className="mx-auto mb-4 text-blue-300" />
                <div className="text-2xl font-bold mb-2">
                  Live GPS Tracking Active
                </div>
                <div className="text-lg opacity-90 mb-6">
                  Sandton CBD, Johannesburg
                </div>
                <div className="flex justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <Signal size={18} /> Strong GPS
                  </div>
                  <div className="flex items-center gap-2">
                    <Battery size={18} /> 85%
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi size={18} /> Connected
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div
                className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-5 rounded-xl`}
              >
                <div className="font-bold mb-3">Current Site</div>
                <div className="text-blue-600 font-bold text-lg">
                  Sandton Apartment
                </div>
                <div
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}
                >
                  Duration: 1h 15m • 2 viewers
                </div>
              </div>
              <div
                className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-5 rounded-xl`}
              >
                <div className="font-bold mb-3">Next Appointment</div>
                <div className="text-lg font-bold">Morningside Villa</div>
                <div
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mt-1`}
                >
                  2:00 PM • Client: Mike Johnson
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xl font-bold mb-4">
              Today's Location History
            </div>
            <div className="space-y-3">
              {locationHistory.map((entry, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"} rounded-xl`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        entry.type === "checkin"
                          ? "bg-green-100 text-green-600"
                          : entry.type === "viewing"
                            ? "bg-blue-100 text-blue-600"
                            : entry.type === "meeting"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {entry.type === "checkin" ? (
                        <Check size={24} />
                      ) : entry.type === "viewing" ? (
                        <Home size={24} />
                      ) : entry.type === "meeting" ? (
                        <Users size={24} />
                      ) : (
                        <Target size={24} />
                      )}
                    </div>
                    <div>
                      <div className="font-bold">{entry.location}</div>
                      <div
                        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {entry.time} •{" "}
                        {entry.type === "checkin"
                          ? "Office Check-in"
                          : entry.type === "viewing"
                            ? "Property Viewing"
                            : entry.type === "meeting"
                              ? "Client Meeting"
                              : "Site Inspection"}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-sm ${darkMode ? "bg-gray-600" : "bg-gray-200"} px-3 py-1 rounded-full`}
                  >
                    {entry.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScheduleViewingModal = ({ darkMode, onClose, property, showToast }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const formatPrice = (price) => {
    if (!price) return "R 0";
    if (price >= 1000000) return `R ${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `R ${(price / 1000).toFixed(0)}K`;
    return `R ${price}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(
      `✓ Viewing scheduled for ${property?.title} with ${formData.clientName} on ${formData.date} at ${formData.time}`,
      "success",
    );
    setTimeout(() => onClose(), 1500);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`p-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"} flex justify-between items-center`}
        >
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Calendar size={24} /> Schedule Viewing
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-green-600" />
              </div>
              <div className="text-xl font-bold text-green-600 mb-2">
                Viewing Scheduled!
              </div>
              <div className="text-gray-500">
                Confirmation sent to {formData.clientName}
              </div>
            </div>
          ) : (
            <>
              <div
                className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-4 rounded-xl mb-6`}
              >
                <div className="font-bold text-lg">{property?.title}</div>
                <div className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {property?.address}
                </div>
                <div className="text-blue-600 font-bold mt-2">
                  {formatPrice(property?.price)}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData({ ...formData, clientName: e.target.value })
                    }
                    className={`w-full p-3 border ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"} rounded-lg focus:outline-none focus:border-blue-500`}
                    placeholder="Enter client name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          clientEmail: e.target.value,
                        })
                      }
                      className={`w-full p-3 border ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"} rounded-lg focus:outline-none focus:border-blue-500`}
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.clientPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          clientPhone: e.target.value,
                        })
                      }
                      className={`w-full p-3 border ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"} rounded-lg focus:outline-none focus:border-blue-500`}
                      placeholder="+27 11 000 0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className={`w-full p-3 border ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"} rounded-lg focus:outline-none focus:border-blue-500`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className={`w-full p-3 border ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"} rounded-lg focus:outline-none focus:border-blue-500`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Notes
                  </label>
                  <textarea
                    value={formData.notes}
                    rows={3}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className={`w-full p-3 border ${darkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white"} rounded-lg focus:outline-none focus:border-blue-500`}
                    placeholder="Any special instructions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Calendar size={18} /> Schedule Viewing
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN DASHBOARD ====================
const AgentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyFilter, setPropertyFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [savedProperties, setSavedProperties] = useState([1, 3]);
  const [mortgageCalcOpen, setMortgageCalcOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const { toast, showToast } = useToast();

  const notifications = [
    {
      id: 1,
      type: "lead",
      title: "New Lead",
      message: "Mike Johnson interested in Sandton Apartment",
      time: "5 min ago",
      read: false,
    },
    {
      id: 2,
      type: "viewing",
      title: "Viewing Scheduled",
      message: "Sarah booked viewing for 2 PM today",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 3,
      type: "alert",
      title: "High Priority",
      message: "Document signing required for Villa deal",
      time: "2 hours ago",
      read: false,
    },
  ];

  const propertiesData = useMemo(
    () => [
      {
        id: 1,
        title: "Luxury Apartment",
        address: "123 Sandton Drive",
        price: 2500000,
        status: "Active",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        agent: "John Agent",
        location: "Sandton",
        views: 1245,
        saves: 89,
        inquiries: 28,
        roi: "9.1%",
        listedDate: "2026-01-05",
      },
      {
        id: 2,
        title: "Modern Penthouse",
        address: "45 Sandton City",
        price: 4200000,
        status: "Active",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2800,
        agent: "Sarah Smith",
        location: "Sandton City",
        views: 987,
        saves: 67,
        inquiries: 19,
        roi: "10.1%",
        listedDate: "2026-01-03",
      },
      {
        id: 3,
        title: "Executive Villa",
        address: "78 Morningside",
        price: 18500000,
        status: "Active",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4500,
        agent: "John Agent",
        location: "Morningside",
        views: 1543,
        saves: 112,
        inquiries: 42,
        roi: "8.2%",
        listedDate: "2025-12-20",
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
        location: "Sandton CBD",
        views: 876,
        saves: 45,
        inquiries: 22,
        roi: "9.5%",
        listedDate: "2026-01-07",
      },
      {
        id: 5,
        title: "Garden Townhouse",
        address: "15 Bryanston",
        price: 9500000,
        status: "Under Offer",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3200,
        agent: "David Lee",
        location: "Bryanston",
        views: 765,
        saves: 56,
        inquiries: 18,
        roi: "8.0%",
        listedDate: "2026-01-02",
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
        location: "Cape Town",
        views: 1109,
        saves: 78,
        inquiries: 31,
        roi: "10.8%",
        listedDate: "2026-01-10",
      },
    ],
    [],
  );

  const clientsData = useMemo(
    () => [
      {
        id: 1,
        name: "Mike Johnson",
        email: "mike@email.com",
        phone: "+27 11 234 5678",
        status: "Active",
        type: "Buyer",
        budget: "2.5M-3M",
        properties: 3,
        lastContact: "Today",
      },
      {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah@email.com",
        phone: "+27 11 234 5679",
        status: "Active",
        type: "Seller",
        budget: "Negotiable",
        properties: 1,
        lastContact: "Yesterday",
      },
      {
        id: 3,
        name: "Robert Chen",
        email: "robert@email.com",
        phone: "+27 11 234 5680",
        status: "Lead",
        type: "Investor",
        budget: "5M-10M",
        properties: 0,
        lastContact: "2 days ago",
      },
      {
        id: 4,
        name: "Emma Davis",
        email: "emma@email.com",
        phone: "+27 11 234 5681",
        status: "Active",
        type: "Buyer",
        budget: "1.5M-2M",
        properties: 2,
        lastContact: "3 days ago",
      },
      {
        id: 5,
        name: "James Miller",
        email: "james@email.com",
        phone: "+27 11 234 5682",
        status: "Closed",
        type: "Seller",
        budget: "Sold",
        properties: 0,
        lastContact: "1 week ago",
      },
      {
        id: 6,
        name: "Lisa Wang",
        email: "lisa@email.com",
        phone: "+27 11 234 5683",
        status: "Active",
        type: "Investor",
        budget: "8M-15M",
        properties: 4,
        lastContact: "1 week ago",
      },
    ],
    [],
  );

  const scheduleData = useMemo(
    () => [
      {
        id: 1,
        title: "Property Viewing",
        client: "Mike Johnson",
        property: "Sandton Apartment",
        time: "10:00 AM",
        duration: "1h",
        status: "confirmed",
      },
      {
        id: 2,
        title: "Client Meeting",
        client: "Sarah Wilson",
        property: "Morningside Villa",
        time: "2:00 PM",
        duration: "1.5h",
        status: "confirmed",
      },
      {
        id: 3,
        title: "Document Signing",
        client: "Robert Chen",
        property: "Executive Villa",
        time: "4:00 PM",
        duration: "45m",
        status: "pending",
      },
      {
        id: 4,
        title: "Property Inspection",
        client: "Emma Davis",
        property: "City View Loft",
        time: "11:00 AM",
        duration: "2h",
        status: "tentative",
      },
      {
        id: 5,
        title: "Team Meeting",
        client: "Management",
        property: "Office",
        time: "9:00 AM",
        duration: "1h",
        status: "confirmed",
      },
    ],
    [],
  );

  const messagesData = useMemo(
    () => [
      {
        id: 1,
        sender: "Mike Johnson",
        message: "When can we view the Sandton apartment?",
        time: "9:30 AM",
        unread: true,
      },
      {
        id: 2,
        sender: "Sarah Wilson",
        message: "I've signed the documents, please check",
        time: "Yesterday",
        unread: false,
      },
      {
        id: 3,
        sender: "Robert Chen",
        message: "Interested in the penthouse. Available this weekend?",
        time: "2 days ago",
        unread: false,
      },
      {
        id: 4,
        sender: "Emma Davis",
        message: "Can you send me the floor plans?",
        time: "3 days ago",
        unread: true,
      },
    ],
    [],
  );

  const performanceData = useMemo(
    () => [
      { month: "Jan", revenue: 120000, deals: 8, leads: 45, target: 100000 },
      { month: "Feb", revenue: 145000, deals: 9, leads: 52, target: 120000 },
      { month: "Mar", revenue: 187000, deals: 12, leads: 68, target: 150000 },
      { month: "Apr", revenue: 165000, deals: 10, leads: 61, target: 160000 },
      { month: "May", revenue: 210000, deals: 14, leads: 78, target: 180000 },
      { month: "Jun", revenue: 245000, deals: 18, leads: 92, target: 200000 },
    ],
    [],
  );

  const leadSourceData = useMemo(
    () => [
      { name: "Website", value: 45, color: "#3b82f6" },
      { name: "Referrals", value: 32, color: "#10b981" },
      { name: "Social Media", value: 15, color: "#8b5cf6" },
      { name: "Walk-ins", value: 8, color: "#f59e0b" },
    ],
    [],
  );

  const formatPrice = (price) => {
    if (!price) return "R 0";
    if (price >= 1000000) return `R ${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `R ${(price / 1000).toFixed(0)}K`;
    return `R ${price}`;
  };

  const toggleSavedProperty = (propertyId) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId],
    );
  };

  const openMortgageCalculator = (property) => {
    setSelectedProperty(property);
    setMortgageCalcOpen(true);
  };

  const openScheduleViewing = (property) => {
    setSelectedProperty(property);
    setScheduleModalOpen(true);
  };

  const filteredProperties = propertiesData.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      propertyFilter === "all" || property.status === propertyFilter;
    return matchesSearch && matchesFilter;
  });

  const RevenueChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={performanceData}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={darkMode ? "#374151" : "#e5e7eb"}
        />
        <XAxis dataKey="month" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip
          contentStyle={{
            backgroundColor: darkMode ? "#1f2937" : "white",
            border: "none",
            borderRadius: "8px",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 4 }}
          name="Revenue (ZAR)"
        />
        <Line
          type="monotone"
          dataKey="target"
          stroke="#10b981"
          strokeWidth={2}
          strokeDasharray="5 5"
          name="Target"
        />
      </LineChart>
    </ResponsiveContainer>
  );

  const LeadSourceChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={leadSourceData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {leadSourceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <div
        className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100"} rounded-2xl border p-6`}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome Back, John! 👋</h2>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              You have 2 active listings • Ranked #2 this month
            </p>
          </div>
          <button
            onClick={() => setLocationModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3"
          >
            <Navigation size={18} /> Live Tracking
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Current Rank",
            value: "#2",
            icon: Trophy,
            color: "emerald",
            desc: "Top 10% of all agents",
          },
          {
            title: "This Month",
            value: "R 85,240",
            icon: DollarSign,
            color: "blue",
            desc: "Commission earned",
          },
          {
            title: "Active Clients",
            value: "24",
            icon: Users,
            color: "purple",
            desc: "3 new this week",
          },
          {
            title: "My Listings",
            value: "2",
            icon: Home,
            color: "amber",
            desc: "Properties managed",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 ${
                  stat.color === "emerald"
                    ? "bg-emerald-100 text-emerald-600"
                    : stat.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : stat.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-amber-100 text-amber-600"
                } rounded-xl`}
              >
                <stat.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              {stat.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
        >
          <h3 className="text-lg font-bold mb-4">Performance Analytics</h3>
          <RevenueChart />
        </div>
        <div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
        >
          <h3 className="text-lg font-bold mb-4">Lead Sources</h3>
          <LeadSourceChart />
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold">All Properties</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Showing {filteredProperties.length} of {propertiesData.length}{" "}
            properties
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"} border rounded-xl text-sm focus:outline-none focus:border-blue-500 w-64`}
            />
          </div>
          <select
            value={propertyFilter}
            onChange={(e) => setPropertyFilter(e.target.value)}
            className={`px-4 py-2 ${darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300"} border rounded-xl text-sm focus:outline-none focus:border-blue-500`}
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Under Offer">Under Offer</option>
          </select>
          <div
            className={`flex border ${darkMode ? "border-gray-700" : "border-gray-300"} rounded-xl overflow-hidden`}
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 ${viewMode === "grid" ? (darkMode ? "bg-gray-700" : "bg-gray-100") : darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 border-l ${darkMode ? "border-gray-700" : "border-gray-300"} ${viewMode === "list" ? (darkMode ? "bg-gray-700" : "bg-gray-100") : darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => {
            const isSaved = savedProperties.includes(property.id);
            const isJohnsProperty = property.agent === "John Agent";
            return (
              <div
                key={property.id}
                className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border overflow-hidden hover:shadow-xl transition-all`}
              >
                <div
                  className={`aspect-video ${darkMode ? "bg-gray-700" : "bg-gradient-to-br from-blue-50 to-purple-50"} relative`}
                >
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${property.status === "Active" ? "bg-green-500 text-white" : "bg-amber-500 text-white"}`}
                    >
                      {property.status}
                    </span>
                    {isJohnsProperty && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-500 text-white">
                        MY LISTING
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => toggleSavedProperty(property.id)}
                    className={`absolute top-3 right-3 ${darkMode ? "bg-gray-600" : "bg-white"} p-2 rounded-full shadow`}
                  >
                    <Heart
                      size={18}
                      className={
                        isSaved ? "text-red-500 fill-red-500" : "text-gray-400"
                      }
                    />
                  </button>
                  <div className="w-full h-full flex items-center justify-center">
                    <Home
                      size={48}
                      className={darkMode ? "text-gray-600" : "text-gray-300"}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg line-clamp-1">
                      {property.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}
                    >
                      {property.agent.split(" ")[0]}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-3 flex items-center`}
                  >
                    <MapPin size={12} className="mr-1" />
                    {property.address}
                  </p>
                  <div
                    className={`flex items-center gap-4 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}
                  >
                    <div className="flex items-center gap-1">
                      <Bed size={14} />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={14} />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 size={14} />
                      {property.sqft}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatPrice(property.price)}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs">
                          ROI:{" "}
                          <span className="font-bold text-green-600">
                            {property.roi}
                          </span>
                        </span>
                        <span className="text-xs">
                          • Views: {property.views}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openMortgageCalculator(property)}
                        className={`p-2 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} rounded-lg`}
                        title="Mortgage Calculator"
                      >
                        <Calculator size={16} />
                      </button>
                      <button
                        onClick={() => openScheduleViewing(property)}
                        className={`p-2 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} rounded-lg`}
                        title="Schedule Viewing"
                      >
                        <Calendar size={16} />
                      </button>
                      <button
                        className={`p-2 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} rounded-lg`}
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border overflow-hidden`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
              >
                <tr>
                  {["Property", "Agent", "Status", "Price", "Actions"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredProperties.map((property) => (
                  <tr
                    key={property.id}
                    className={`border-b ${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gradient-to-br from-blue-50 to-purple-50"} flex items-center justify-center`}
                        >
                          <Home size={20} className="text-gray-400" />
                        </div>
                        <div>
                          <div className="font-bold">{property.title}</div>
                          <div className="text-sm text-gray-500">
                            {property.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${property.agent === "John Agent" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                      >
                        {property.agent}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-bold rounded-full ${property.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                      >
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">
                        {formatPrice(property.price)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => openMortgageCalculator(property)}
                          className={`p-2 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} rounded-lg`}
                        >
                          <Calculator size={14} />
                        </button>
                        <button
                          onClick={() => openScheduleViewing(property)}
                          className={`p-2 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"} rounded-lg`}
                        >
                          <Calendar size={14} />
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
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Real-time performance metrics
          </p>
        </div>
        <button
          onClick={() => showToast("Report exported successfully!", "success")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center gap-2"
        >
          <Download size={16} /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: "Total Revenue",
            value: "R 1.45M",
            change: "+12.5%",
            icon: DollarSign,
            color: "green",
          },
          {
            title: "Closed Deals",
            value: "42",
            change: "+8.2%",
            icon: CheckCircle2,
            color: "blue",
          },
          {
            title: "Active Leads",
            value: "156",
            change: "+23.1%",
            icon: TrendingUp,
            color: "purple",
          },
          {
            title: "Avg. ROI",
            value: "9.8%",
            change: "+1.4%",
            icon: Percent,
            color: "amber",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 ${stat.color === "green" ? "bg-green-100 text-green-600" : stat.color === "blue" ? "bg-blue-100 text-blue-600" : stat.color === "purple" ? "bg-purple-100 text-purple-600" : "bg-amber-100 text-amber-600"} rounded-xl`}
              >
                <stat.icon size={24} />
              </div>
              <span
                className={`text-sm font-bold ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
              >
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className={darkMode ? "text-gray-400" : "text-gray-600"}>
              {stat.title}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
        >
          <h3 className="text-lg font-bold mb-4">Revenue Trend</h3>
          <RevenueChart />
        </div>
        <div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
        >
          <h3 className="text-lg font-bold mb-4">Lead Sources</h3>
          <LeadSourceChart />
        </div>
      </div>
    </div>
  );

  const renderPerformance = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Performance Dashboard</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Track your metrics against targets
          </p>
        </div>
        <div className="text-sm text-right">
          <div className="font-bold">Current Rank: #2</div>
          <div className="text-green-600 font-medium">▲ Moving up from #3</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            metric: "Conversion Rate",
            value: "28%",
            target: "30%",
            progress: 93,
            color: "blue",
          },
          {
            metric: "Client Satisfaction",
            value: "4.8/5",
            target: "4.5/5",
            progress: 107,
            color: "green",
          },
          {
            metric: "Deals Closed",
            value: "18",
            target: "15",
            progress: 120,
            color: "purple",
          },
          {
            metric: "Commission",
            value: "R 452,300",
            target: "R 400,000",
            progress: 113,
            color: "amber",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <div className={darkMode ? "text-gray-400" : "text-gray-600"}>
              {item.metric}
            </div>
            <div className="flex justify-between items-end mb-4">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-right">
                <div className="text-gray-500">Target: {item.target}</div>
                <div
                  className={`font-bold ${item.progress >= 100 ? "text-green-600" : "text-red-600"}`}
                >
                  {item.progress}%
                </div>
              </div>
            </div>
            <div
              className={`w-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} rounded-full h-2`}
            >
              <div
                className={`${item.color === "blue" ? "bg-blue-500" : item.color === "green" ? "bg-green-500" : item.color === "purple" ? "bg-purple-500" : "bg-amber-500"} h-2 rounded-full`}
                style={{ width: `${Math.min(item.progress, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Messages</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            {messagesData.filter((m) => m.unread).length} unread messages
          </p>
        </div>
        <button
          onClick={() => showToast("New message composer coming soon!", "info")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2"
        >
          <Plus size={18} /> New Message
        </button>
      </div>

      <div
        className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border`}
      >
        <div
          className={`p-4 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <div className="font-bold">Conversations</div>
        </div>
        <div>
          {messagesData.map((msg) => (
            <div
              key={msg.id}
              className={`p-4 cursor-pointer border-b ${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-100 hover:bg-gray-50"} ${msg.unread ? (darkMode ? "bg-blue-900/20" : "bg-blue-50") : ""}`}
              onClick={() =>
                showToast(`Opening conversation with ${msg.sender}`, "info")
              }
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold flex items-center gap-2">
                  {msg.sender}
                  {msg.unread && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block" />
                  )}
                </div>
                <div className="text-xs text-gray-500">{msg.time}</div>
              </div>
              <p
                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} truncate`}
              >
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Schedule</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Today's appointments and viewings
          </p>
        </div>
        <button
          onClick={() => showToast("Add event feature coming soon!", "info")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2"
        >
          <Plus size={18} /> Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <h3 className="text-lg font-bold mb-6">Today's Timeline</h3>
            <div className="space-y-6">
              {scheduleData.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-24 text-right shrink-0">
                    <div className="font-bold">{item.time}</div>
                    <div className="text-sm text-gray-500">{item.duration}</div>
                  </div>
                  <div className="flex-1">
                    <div
                      className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-5 rounded-xl border-l-4 border-blue-500`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold">{item.title}</div>
                          <div className="text-sm text-gray-500">
                            {item.property}
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${item.status === "confirmed" ? "bg-green-100 text-green-700" : item.status === "pending" ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-700"}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm mb-3">
                        <User size={14} className="text-gray-500" />
                        {item.client}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            showToast(
                              `Starting meeting with ${item.client}`,
                              "success",
                            )
                          }
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
                        >
                          Start Meeting
                        </button>
                        <button
                          className={`px-4 py-2 border ${darkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-50"} rounded-lg text-sm`}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <h3 className="font-bold mb-4">Quick Stats</h3>
            <div className="space-y-4">
              {[
                { label: "Total Appointments", value: "5" },
                { label: "Confirmed", value: "3", color: "text-green-600" },
                { label: "Pending", value: "1", color: "text-amber-600" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between">
                  <span
                    className={darkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    {s.label}
                  </span>
                  <span className={`font-bold ${s.color || ""}`}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => showToast("Starting video conference...", "info")}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold flex items-center justify-center gap-3"
          >
            <Video size={20} /> Start Video Conference
          </button>
        </div>
      </div>
    </div>
  );

  const renderClients = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold">Clients</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Manage your client relationships
          </p>
        </div>
        <button
          onClick={() => showToast("Add client feature coming soon!", "info")}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2"
        >
          <UserPlus size={18} /> Add Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientsData.map((client) => (
          <div
            key={client.id}
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-xl border p-5 hover:shadow-md transition-all`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="font-bold text-lg">{client.name}</div>
                <div className="text-sm text-gray-500">{client.email}</div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${client.status === "Active" ? "bg-green-100 text-green-700" : client.status === "Lead" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}
              >
                {client.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Type", value: client.type },
                { label: "Budget", value: client.budget },
                { label: "Properties", value: client.properties },
                { label: "Last Contact", value: client.lastContact },
              ].map((item) => (
                <div key={item.label} className="text-sm">
                  <div className="text-gray-500">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => showToast(`Calling ${client.name}...`, "info")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
              >
                <Phone size={14} /> Call
              </button>
              <button
                onClick={() =>
                  showToast(`Opening email to ${client.name}...`, "info")
                }
                className={`flex-1 border ${darkMode ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-50"} py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2`}
              >
                <Mail size={14} /> Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIntegrations = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Integrations</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Connected services and API connections
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm">All systems operational</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Total Integrations",
            value: "12",
            icon: Link,
            color: "blue",
          },
          {
            title: "Active Connections",
            value: "8",
            icon: CheckCircle2,
            color: "green",
          },
          {
            title: "Last Sync",
            value: "5 min ago",
            icon: RefreshCw,
            color: "purple",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 ${stat.color === "blue" ? "bg-blue-100 text-blue-600" : stat.color === "green" ? "bg-green-100 text-green-600" : "bg-purple-100 text-purple-600"} rounded-xl`}
              >
                <stat.icon size={24} />
              </div>
              <div>
                <div className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {stat.title}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "MLS Listing Service",
            status: "connected",
            icon: Database,
            color: "#3b82f6",
            lastSync: "5 min ago",
          },
          {
            name: "Zillow API",
            status: "connected",
            icon: Home,
            color: "#10b981",
            lastSync: "10 min ago",
          },
          {
            name: "QuickBooks",
            status: "connected",
            icon: DollarSign,
            color: "#8b5cf6",
            lastSync: "15 min ago",
          },
          {
            name: "Google Calendar",
            status: "connected",
            icon: Calendar,
            color: "#ef4444",
            lastSync: "2 min ago",
          },
          {
            name: "CRM System",
            status: "pending",
            icon: Users,
            color: "#f59e0b",
            lastSync: "Never",
          },
          {
            name: "DocuSign",
            status: "connected",
            icon: FileCheck,
            color: "#ec4899",
            lastSync: "1 hour ago",
          },
        ].map((integration, idx) => (
          <div
            key={idx}
            onClick={() =>
              showToast(`Opening ${integration.name} settings...`, "info")
            }
            className={`${darkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-white border-gray-200 hover:shadow-lg"} rounded-2xl border p-6 cursor-pointer transition-all`}
          >
            <div className="flex justify-between items-start mb-4">
              <div style={{ color: integration.color }}>
                <integration.icon size={24} />
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${integration.status === "connected" ? "bg-green-500 animate-pulse" : "bg-amber-500"}`}
                />
                <span className="text-xs font-bold">
                  {integration.status === "connected" ? "LIVE" : "PENDING"}
                </span>
              </div>
            </div>
            <h3 className="font-bold mb-2">{integration.name}</h3>
            <div className="text-sm text-gray-500 mb-4">
              {integration.status === "connected"
                ? "Active and syncing"
                : "Pending configuration"}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                Last sync: {integration.lastSync}
              </span>
              <ArrowRight size={16} className="text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLocation = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Live Location Tracking</h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Real-time GPS tracking and site visit reporting
          </p>
        </div>
        <button
          onClick={() => setLocationModalOpen(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold"
        >
          Open Full Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <h3 className="text-xl font-bold mb-6">Live Tracking Map</h3>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-8 text-white text-center">
              <Compass size={64} className="mx-auto mb-4 text-blue-300" />
              <div className="text-2xl font-bold mb-2">GPS Tracking Active</div>
              <div className="text-lg opacity-90 mb-6">
                Sandton CBD, Johannesburg
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-sm opacity-80">Battery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-sm opacity-80">Sites Today</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3h 45m</div>
                  <div className="text-sm opacity-80">On Duty</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <h3 className="font-bold mb-4">Current Status</h3>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-bold">ON DUTY</span>
              </div>
              <span className="text-sm text-gray-500">09:15 AM</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Current Site", value: "Sandton Apartment" },
                { label: "Duration", value: "1h 15m" },
                { label: "Next Appointment", value: "2:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span
                    className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {item.label}
                  </span>
                  <span className="font-bold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl border p-6`}
          >
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                {
                  icon: Camera,
                  label: "Take Site Photos",
                  color: "text-blue-600",
                },
                {
                  icon: FileText,
                  label: "File Visit Report",
                  color: "text-green-600",
                },
                {
                  icon: MessageSquare,
                  label: "Report to Management",
                  color: "text-purple-600",
                },
              ].map((action) => (
                <button
                  key={action.label}
                  onClick={() =>
                    showToast(`${action.label} — feature active!`, "success")
                  }
                  className={`w-full p-3 ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-50 hover:bg-gray-100"} ${action.color} rounded-lg flex items-center gap-3 font-medium`}
                >
                  <action.icon size={20} /> {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "properties":
        return renderProperties();
      case "analytics":
        return renderAnalytics();
      case "performance":
        return renderPerformance();
      case "messages":
        return renderMessages();
      case "schedule":
        return renderSchedule();
      case "clients":
        return renderClients();
      case "integrations":
        return renderIntegrations();
      case "location":
        return renderLocation();
      default:
        return renderOverview();
    }
  };

  const leftPanelItems = [
    { id: "overview", icon: BarChart3, label: "Overview" },
    { id: "properties", icon: Home, label: "Properties" },
    { id: "analytics", icon: PieChart, label: "Analytics" },
    { id: "performance", icon: TrendingUp, label: "Performance" },
    {
      id: "messages",
      icon: MessageSquare,
      label: "Messages",
      badge: messagesData.filter((m) => m.unread).length,
    },
    { id: "schedule", icon: Calendar, label: "Schedule" },
    { id: "clients", icon: Users, label: "Clients" },
    { id: "integrations", icon: Globe, label: "Integrations" },
    { id: "location", icon: Navigation, label: "Live Tracking" },
  ];

  return (
    <div
      className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} font-sans`}
    >
      {/* Left Panel */}
      <div
        className={`w-64 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-r hidden lg:flex flex-col`}
      >
        <div
          className={`p-6 border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <h2 className="text-xl font-bold text-blue-600">Agent Portal</h2>
          <p className="text-xs text-gray-500 mt-1">Live Dashboard v3.0</p>
        </div>

        <div className="flex-1 p-4 space-y-1">
          {leftPanelItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all relative ${
                activeTab === item.id
                  ? `${darkMode ? "bg-gray-700 text-blue-400 border-gray-600" : "bg-blue-50 text-blue-600 border-blue-100"} font-bold border`
                  : `${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"}`
              }`}
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
              {item.badge > 0 && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {activeTab === item.id && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </button>
          ))}
        </div>

        <div
          className={`p-4 border-t ${darkMode ? "border-gray-700" : "border-gray-200"} mt-auto space-y-4`}
        >
          <div
            className={`p-3 ${darkMode ? "bg-gray-700 border-gray-600" : "bg-blue-50 border-blue-100"} rounded-xl border`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold">ON DUTY</span>
            </div>
            <p className="text-xs text-gray-500">Location tracking active</p>
          </div>
          <button
            onClick={() => showToast("Signing out...", "info")}
            className={`w-full flex items-center gap-3 px-4 py-3 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-50"} rounded-xl`}
          >
            <LogOut size={20} />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div
          className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10`}
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-green-600">
                LIVE • {activeTab.toUpperCase()}
              </span>
            </div>
            <div className="relative">
              <Bell
                size={20}
                className="text-gray-500 cursor-pointer"
                onClick={() => showToast("3 new notifications", "info")}
              />
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? "bg-gray-700 hover:bg-gray-600 text-gray-300" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              <span className="text-sm font-medium">
                {darkMode ? "Light" : "Dark"}
              </span>
            </button>

            <div className="hidden md:block text-right">
              <p className="text-sm font-bold">John Agent</p>
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs text-gray-500 uppercase">
                  Senior Agent
                </span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  RANK #2
                </span>
              </div>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm relative">
              JA
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold capitalize">
                {activeTab === "overview" ? "Agent Dashboard" : activeTab}
              </h1>
              {activeTab === "overview" && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  LIVE DASHBOARD
                </span>
              )}
            </div>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              {activeTab === "overview"
                ? "Real-time property management and analytics"
                : `Manage ${activeTab} with live updates`}
            </p>
          </div>
          {renderTabContent()}
        </div>
      </div>

      {/* MODALS */}
      {mortgageCalcOpen && selectedProperty && (
        <MortgageCalculatorModal
          property={selectedProperty}
          darkMode={darkMode}
          showToast={showToast}
          onClose={() => {
            setMortgageCalcOpen(false);
            setSelectedProperty(null);
          }}
        />
      )}
      {locationModalOpen && (
        <LocationTrackingModal
          darkMode={darkMode}
          showToast={showToast}
          onClose={() => setLocationModalOpen(false)}
        />
      )}
      {scheduleModalOpen && selectedProperty && (
        <ScheduleViewingModal
          darkMode={darkMode}
          showToast={showToast}
          onClose={() => {
            setScheduleModalOpen(false);
            setSelectedProperty(null);
          }}
          property={selectedProperty}
        />
      )}

      {/* TOAST */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => {}} />
      )}
    </div>
  );
};

export default AgentDashboard;
