"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Bell,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Star,
  Eye,
  Users,
  DollarSign,
  Home,
  Building,
  TrendingUp,
  Map,
  Clock,
  Download,
  Share2,
  Video,
  Phone,
  Mail,
  Settings,
  ChevronRight,
  Award,
  Target,
  PieChart,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Cloud,
  Camera,
  X,
  ChevronDown,
  Plus,
  Home as HomeIcon,
  Building2,
  CalendarDays,
  FileText,
  Bookmark,
  TrendingDown,
  UserCircle,
} from "lucide-react";

// Your provided properties data
export const propertiesData = [
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
    description:
      "Stunning luxury apartment with panoramic city views, modern finishes, and secure parking.",
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
    description:
      "Ultra-modern penthouse with private rooftop terrace and smart home technology.",
    features: [
      "Rooftop Terrace",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "3 Parking",
    ],
    agentDetails: {
      name: "Sarah Smith",
      phone: "+27 11 234 5679",
      email: "sarah@realestate.com",
    },
    listedDate: "2026-01-03",
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
    description:
      "Luxurious executive villa with landscaped gardens, staff quarters, and pool house.",
    features: [
      "Staff Quarters",
      "Pool House",
      "Wine Cellar",
      "Home Gym",
      "5 Car Garage",
    ],
    agentDetails: {
      name: "Mike Brown",
      phone: "+27 11 234 5680",
      email: "mike@realestate.com",
    },
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
    images: 10,
    location: "Sandton CBD",
    coordinates: { lat: -26.1065, lng: 28.058 },
    description:
      "Modern open-plan loft with exposed brick walls and industrial chic design.",
    features: [
      "Open Plan",
      "Exposed Brick",
      "High Ceilings",
      "City Views",
      "Secure",
    ],
    agentDetails: {
      name: "Emma Wilson",
      phone: "+27 11 234 5681",
      email: "emma@realestate.com",
    },
    listedDate: "2026-01-07",
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
    description:
      "Spacious family townhouse with private garden and solar heating system.",
    features: [
      "Solar Heating",
      "Private Garden",
      "Braai Area",
      "Study",
      "Double Garage",
    ],
    agentDetails: {
      name: "David Lee",
      phone: "+27 11 234 5682",
      email: "david@realestate.com",
    },
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
    images: 18,
    location: "Atlantic Beach, Cape Town",
    coordinates: { lat: -33.908, lng: 18.415 },
    description:
      "Beautiful waterfront apartment with sea views and direct beach access.",
    features: [
      "Ocean Views",
      "Beach Access",
      "Balcony",
      "Secure Parking",
      "Pool",
    ],
    agentDetails: {
      name: "Lisa Chen",
      phone: "+27 21 456 7890",
      email: "lisa@realestate.com",
    },
    listedDate: "2026-01-10",
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
    description:
      "Contemporary family home with open-plan living and landscaped garden.",
    features: [
      "Open Plan",
      "Study",
      "Entertainment Area",
      "Garden",
      "Double Garage",
    ],
    agentDetails: {
      name: "James Wilson",
      phone: "+27 11 345 6789",
      email: "james@realestate.com",
    },
    listedDate: "2026-01-08",
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
    description:
      "Great investment property currently rented with stable tenant.",
    features: ["Investment", "Rented", "Secure", "Parking", "Near Transport"],
    agentDetails: {
      name: "Sophia Martinez",
      phone: "+27 11 567 8901",
      email: "sophia@realestate.com",
    },
    listedDate: "2025-11-15",
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
    description:
      "Ultra-luxurious penthouse with 360-degree city views and premium finishes.",
    features: [
      "360° Views",
      "Private Elevator",
      "Wine Cellar",
      "Home Cinema",
      "4 Parking",
    ],
    agentDetails: {
      name: "Robert Johnson",
      phone: "+27 11 678 9012",
      email: "robert@realestate.com",
    },
    listedDate: "2026-01-12",
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
    features: [
      "Modern",
      "Secure",
      "Pet Friendly",
      "Near Restaurants",
      "Parking",
    ],
    agentDetails: {
      name: "Amanda Taylor",
      phone: "+27 11 789 0123",
      email: "amanda@realestate.com",
    },
    listedDate: "2026-01-09",
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
    description:
      "Prime commercial office space in Sandton's business district.",
    features: ["Commercial", "A-Grade", "Parking", "Security", "Fiber Ready"],
    agentDetails: {
      name: "Michael Brown",
      phone: "+27 11 890 1234",
      email: "michael@realestate.com",
    },
    listedDate: "2026-01-14",
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
    features: [
      "Ocean Front",
      "Pool",
      "Private Beach",
      "Staff Quarters",
      "Wine Cellar",
    ],
    agentDetails: {
      name: "Jennifer Davis",
      phone: "+27 21 234 5678",
      email: "jennifer@realestate.com",
    },
    listedDate: "2026-01-06",
  },
];

// Client-specific data
const clientData = {
  name: "David Johnson",
  email: "david.johnson@email.com",
  phone: "+27 82 123 4567",
  membership: "Premium",
  savedProperties: [1, 3, 6, 10],
  viewingScheduled: [2, 7],
  searchPreferences: {
    minPrice: 1000000,
    maxPrice: 10000000,
    bedrooms: 3,
    bathrooms: 2,
    location: ["Sandton", "Johannesburg"],
    propertyType: ["Apartment", "Townhouse"],
  },
  recentActivity: [
    { type: "viewed", propertyId: 1, date: "2026-01-25", time: "14:30" },
    { type: "saved", propertyId: 3, date: "2026-01-24", time: "11:15" },
    { type: "contacted", agent: "John Agent", date: "2026-01-23", time: "09:45" },
    { type: "searched", query: "3 bed apartments", date: "2026-01-22", time: "16:20" },
  ],
};

const marketTrends = {
  sandtonAvgPrice: 3200000,
  sandtonGrowth: "+8.2%",
  capeTownAvgPrice: 4500000,
  capeTownGrowth: "+12.4%",
  rentalYield: "6.8%",
  daysOnMarket: 28,
  inventory: "Low",
  demand: "High",
  pricePerSqft: 1389,
  appreciationRate: "7.3%",
};

export default function ClientDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [beds, setBeds] = useState("Any Beds");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("Recommended");
  const [savedProperties, setSavedProperties] = useState(clientData.savedProperties);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [activeTab, setActiveTab] = useState("recommended");
  const [showTour, setShowTour] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [comparedProperties, setComparedProperties] = useState([]);
  const [showPreferences, setShowPreferences] = useState(false);

  // Format price function
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return `R ${(price / 1000000).toFixed(1)}M`;
    }
    if (price >= 1000) {
      return `R ${(price / 1000).toFixed(1)}K`;
    }
    return `R ${price.toLocaleString()}`;
  };

  // Toggle saved property
  const toggleSavedProperty = (propertyId) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  // Toggle comparison
  const toggleComparison = (propertyId) => {
    if (comparisonMode) {
      if (comparedProperties.includes(propertyId)) {
        setComparedProperties(comparedProperties.filter(id => id !== propertyId));
      } else if (comparedProperties.length < 4) {
        setComparedProperties([...comparedProperties, propertyId]);
      } else {
        alert("Maximum 4 properties can be compared at once");
      }
    }
  };

  // Schedule viewing
  const scheduleViewing = (propertyId) => {
    const property = propertiesData.find((p) => p.id === propertyId);
    alert(
      `Schedule Viewing for ${property?.title}\n\nAgent: ${property.agent}\nPhone: ${property.agentDetails.phone}\nEmail: ${property.agentDetails.email}`
    );
  };

  // Contact agent
  const contactAgent = (propertyId) => {
    const property = propertiesData.find((p) => p.id === propertyId);
    alert(
      `Contact Agent for ${property?.title}\n\nCall: ${property.agentDetails.phone}\nEmail: ${property.agentDetails.email}`
    );
  };

  // Send message
  const sendMessageToAgent = () => {
    if (chatMessage.trim()) {
      alert(`Message sent to your agent: "${chatMessage}"`);
      setChatMessage("");
    }
  };

  // Calculate recommendations based on client preferences
  const getRecommendedProperties = useMemo(() => {
    const prefs = clientData.searchPreferences;
    return propertiesData
      .filter(p => 
        p.price >= prefs.minPrice && 
        p.price <= prefs.maxPrice &&
        p.bedrooms >= prefs.bedrooms &&
        p.bathrooms >= prefs.bathrooms &&
        prefs.location.some(loc => p.location.includes(loc)) &&
        prefs.propertyType.some(type => p.title.toLowerCase().includes(type.toLowerCase()))
      )
      .slice(0, 6);
  }, []);

  // Filter properties based on active tab
  const filteredProperties = useMemo(() => {
    let result = propertiesData;

    // Apply search filters
    result = result.filter((p) => {
      const matchesSearch =
        searchTerm === "" ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        propertyType === "All Types" || 
        p.title.toLowerCase().includes(propertyType.toLowerCase()) ||
        p.features.some(f => f.toLowerCase().includes(propertyType.toLowerCase()));

      const matchesBeds = beds === "Any Beds" || p.bedrooms >= parseInt(beds);

      const matchesMinPrice = !minPrice || p.price >= parseInt(minPrice);
      const matchesMaxPrice = !maxPrice || p.price <= parseInt(maxPrice);

      return matchesSearch && matchesType && matchesBeds && matchesMinPrice && matchesMaxPrice;
    });

    // Apply tab filters
    switch (activeTab) {
      case "recommended":
        result = getRecommendedProperties;
        break;
      case "saved":
        result = result.filter(p => savedProperties.includes(p.id));
        break;
      case "viewings":
        result = result.filter(p => clientData.viewingScheduled.includes(p.id));
        break;
      case "new":
        result = result.filter(p => {
          const listedDate = new Date(p.listedDate);
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return listedDate > weekAgo;
        });
        break;
      case "affordable":
        result = result.filter(p => p.price <= 3000000);
        break;
    }

    // Apply sorting
    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Bedrooms":
        result.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case "Size":
        result.sort((a, b) => b.sqft - a.sqft);
        break;
      case "Newest":
        result.sort((a, b) => new Date(b.listedDate) - new Date(a.listedDate));
        break;
      case "Recommended":
      default:
        // Keep recommended order
        break;
    }

    return result;
  }, [searchTerm, propertyType, beds, minPrice, maxPrice, sortBy, activeTab, savedProperties]);

  // Clear filters
  const clearFilters = () => {
    setSearchTerm("");
    setPropertyType("All Types");
    setBeds("Any Beds");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("Recommended");
    setActiveTab("recommended");
  };

  // Property types
  const propertyTypes = [
    "All Types",
    "Apartment",
    "Penthouse",
    "Villa",
    "Townhouse",
    "Loft",
    "Studio",
    "Commercial",
    "Home",
  ];

  // Property Detail View Component
  const PropertyDetailView = ({ property }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
            <p className="text-gray-600 flex items-center gap-2">
              <MapPin size={16} /> {property.address}
            </p>
          </div>
          <button
            onClick={() => setSelectedProperty(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          <div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-64 rounded-xl mb-4 flex items-center justify-center">
              <div className="text-center">
                <Building2 size={48} className="text-blue-600 mx-auto mb-4" />
                <p className="text-blue-600 font-medium">{property.images} photos available</p>
                <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
                  View Gallery
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-xl font-bold">{formatPrice(property.price)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Price/Sq Ft</p>
                <p className="text-xl font-bold">R {(property.price / property.sqft).toFixed(0)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Status</p>
                <p className="text-xl font-bold">{property.status}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3">Description</h3>
              <p className="text-gray-700">{property.description}</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3">Property Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="text-lg font-semibold">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="text-lg font-semibold">{property.bathrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Square Feet</p>
                  <p className="text-lg font-semibold">{property.sqft.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-semibold">{property.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Listed Date</p>
                  <p className="text-lg font-semibold">{property.listedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Images</p>
                  <p className="text-lg font-semibold">{property.images}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-3">Agent Information</h3>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {property.agent.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{property.agent}</p>
                    <p className="text-sm text-gray-600">Property Agent</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    {property.agentDetails.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-500" />
                    {property.agentDetails.email}
                  </p>
                </div>
                <button 
                  onClick={() => contactAgent(property.id)}
                  className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Contact Agent
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">Map Location</h3>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Map size={32} className="text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600">Coordinates: {property.coordinates.lat}, {property.coordinates.lng}</p>
                  <button className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm">
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t">
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => scheduleViewing(property.id)}
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
            >
              Schedule Viewing
            </button>
            <button 
              onClick={() => toggleSavedProperty(property.id)}
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200"
            >
              {savedProperties.includes(property.id) ? 'Remove from Saved' : 'Save Property'}
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
              Make Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-6">
      {/* Welcome Banner */}
      {showTour && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative mb-6">
          <button 
            onClick={() => setShowTour(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-4">
            <HomeIcon size={24} className="text-yellow-300" />
            <div>
              <h3 className="text-lg font-bold">Welcome back, {clientData.name}!</h3>
              <p className="text-sm opacity-90">We found {getRecommendedProperties.length} properties matching your preferences</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Smart Property Search
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              Find your dream home • AI-powered recommendations • Virtual tours available
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                {clientData.membership} CLIENT
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowPreferences(!showPreferences)}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200"
            >
              <Settings className="inline mr-2" size={16} />
              Preferences
            </button>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {clientData.name}
                </p>
                <p className="text-xs text-gray-500">
                  {clientData.membership} Member
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold relative">
                {clientData.name.split(' ').map(n => n[0]).join('')}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Saved Properties</p>
                <p className="text-2xl font-bold text-gray-900">
                  {savedProperties.length}
                </p>
              </div>
              <Bookmark className="text-blue-500" size={24} />
            </div>
            <p className="text-xs text-blue-600 font-bold mt-2">For comparison</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Viewings Scheduled</p>
                <p className="text-2xl font-bold text-gray-900">
                  {clientData.viewingScheduled.length}
                </p>
              </div>
              <Calendar className="text-green-500" size={24} />
            </div>
            <p className="text-xs text-green-600 font-bold mt-2">Virtual & in-person</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Perfect Matches</p>
                <p className="text-2xl font-bold text-gray-900">
                  {getRecommendedProperties.length}
                </p>
              </div>
              <Target className="text-purple-500" size={24} />
            </div>
            <p className="text-xs text-purple-600 font-bold mt-2">AI-matched to you</p>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Budget Range</p>
                <p className="text-2xl font-bold text-gray-900">
                  {formatPrice(clientData.searchPreferences.minPrice)} - {formatPrice(clientData.searchPreferences.maxPrice)}
                </p>
              </div>
              <DollarSign className="text-amber-500" size={24} />
            </div>
            <p className="text-xs text-gray-500 mt-2">Your preferred range</p>
          </div>
        </div>
      </div>

      {/* Preferences Panel */}
      {showPreferences && (
        <div className="bg-white rounded-2xl border border-blue-200 shadow-sm mb-6">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Your Search Preferences</h3>
              <button 
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-blue-700">Price Range</p>
                <p className="text-lg font-bold">{formatPrice(clientData.searchPreferences.minPrice)} - {formatPrice(clientData.searchPreferences.maxPrice)}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-green-700">Bedrooms</p>
                <p className="text-lg font-bold">{clientData.searchPreferences.bedrooms}+</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-purple-700">Locations</p>
                <p className="text-lg font-bold">{clientData.searchPreferences.location.join(', ')}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-amber-700">Property Types</p>
                <p className="text-lg font-bold">{clientData.searchPreferences.propertyType.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Market Intelligence Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-800">Market Insights for You</h3>
          <button className="text-xs text-blue-600 font-bold hover:text-blue-700">
            Learn More →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/50 p-3 rounded-xl">
            <p className="text-xs text-gray-500">Your Target Area Avg</p>
            <p className="font-bold text-gray-900">{formatPrice(marketTrends.sandtonAvgPrice)}</p>
            <p className="text-xs text-green-600 font-bold">{marketTrends.sandtonGrowth}</p>
          </div>
          <div className="bg-white/50 p-3 rounded-xl">
            <p className="text-xs text-gray-500">Rental Yield</p>
            <p className="font-bold text-gray-900">{marketTrends.rentalYield}</p>
            <p className="text-xs text-blue-600">Great for investment</p>
          </div>
          <div className="bg-white/50 p-3 rounded-xl">
            <p className="text-xs text-gray-500">Days on Market</p>
            <p className="font-bold text-gray-900">{marketTrends.daysOnMarket}</p>
            <p className="text-xs text-green-600">Fast moving</p>
          </div>
          <div className="bg-white/50 p-3 rounded-xl">
            <p className="text-xs text-gray-500">Market Demand</p>
            <p className="font-bold text-gray-900">{marketTrends.demand}</p>
            <p className="text-xs text-red-600">Act quickly</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6">
        <div className="p-4 border-b">
          <h3 className="font-bold text-gray-800">Your Recent Activity</h3>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {clientData.recentActivity.slice(0, 3).map((activity, idx) => {
              const property = propertiesData.find(p => p.id === activity.propertyId);
              return (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'viewed' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'saved' ? 'bg-green-100 text-green-600' :
                      activity.type === 'contacted' ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {activity.type === 'viewed' ? <Eye size={16} /> :
                       activity.type === 'saved' ? <Heart size={16} /> :
                       activity.type === 'contacted' ? <MessageSquare size={16} /> :
                       <Search size={16} />}
                    </div>
                    <div>
                      <p className="font-medium">
                        {activity.type === 'viewed' ? `Viewed ${property?.title}` :
                         activity.type === 'saved' ? `Saved ${property?.title}` :
                         activity.type === 'contacted' ? `Contacted ${activity.agent}` :
                         `Searched for "${activity.query}"`}
                      </p>
                      <p className="text-sm text-gray-500">{activity.date} at {activity.time}</p>
                    </div>
                  </div>
                  {property && (
                    <button 
                      onClick={() => setSelectedProperty(property)}
                      className="text-blue-600 text-sm font-medium"
                    >
                      View →
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties by title, address, or location..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Any Beds</option>
              <option value="1">1+ Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
              <option value="5">5+ Beds</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Bedrooms</option>
              <option>Size</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveTab("recommended")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "recommended"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Zap className="inline mr-2" size={14} />
            Recommended ({getRecommendedProperties.length})
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "saved"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Heart className="inline mr-2" size={14} />
            Saved ({savedProperties.length})
          </button>
          <button
            onClick={() => setActiveTab("viewings")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "viewings"
                ? "bg-amber-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Calendar className="inline mr-2" size={14} />
            Viewings ({clientData.viewingScheduled.length})
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "new"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            New Listings
          </button>
          <button
            onClick={() => setActiveTab("affordable")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "affordable"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Under R 3M
          </button>
          <button
            onClick={() => setComparisonMode(!comparisonMode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              comparisonMode
                ? "bg-amber-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <BarChart3 className="inline mr-2" size={14} />
            Compare Properties
          </button>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900"
          >
            Clear All
          </button>
        </div>

        {/* Price Filter */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
              <input
                type="text"
                placeholder="R 0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
              <input
                type="text"
                placeholder="R 50,000,000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Comparison Bar */}
      {comparisonMode && comparedProperties.length > 0 && (
        <div className="bg-white border border-amber-200 rounded-2xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-amber-600" />
              Comparing {comparedProperties.length} Properties
            </h3>
            <button 
              onClick={() => {
                alert("Comparison view would show detailed side-by-side comparison");
                setComparisonMode(false);
              }}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-bold hover:bg-amber-700"
            >
              Compare Now
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {comparedProperties.map(id => {
              const property = propertiesData.find(p => p.id === id);
              return property ? (
                <div key={id} className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-lg">
                  <span className="font-medium text-sm">{property.title}</span>
                  <button 
                    onClick={() => toggleComparison(id)}
                    className="text-amber-700 hover:text-amber-900"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => {
          const isSaved = savedProperties.includes(property.id);
          const isComparing = comparedProperties.includes(property.id);
          const hasViewing = clientData.viewingScheduled.includes(property.id);

          return (
            <div
              key={property.id}
              className={`bg-white rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                isComparing ? 'border-2 border-amber-500' : 'border-gray-200'
              }`}
            >
              {/* Image Section */}
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 size={48} className="text-blue-600 opacity-50" />
                  </div>
                </div>
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      property.status === "Active"
                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                        : property.status === "Under Offer"
                        ? "bg-gradient-to-r from-amber-500 to-orange-600"
                        : "bg-gradient-to-r from-purple-500 to-purple-600"
                    }`}
                  >
                    {property.status}
                  </span>
                  {hasViewing && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs font-bold">
                      Viewing Booked
                    </span>
                  )}
                </div>
                
                <div className="absolute top-3 right-3 flex gap-2">
                  {comparisonMode && (
                    <button
                      onClick={() => toggleComparison(property.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        isComparing 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-white/80 hover:bg-white'
                      }`}
                    >
                      <BarChart3 className="w-5 h-5" />
                    </button>
                  )}
                  <button
                    onClick={() => toggleSavedProperty(property.id)}
                    className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className="w-5 h-5"
                      fill={isSaved ? "red" : "none"}
                      color={isSaved ? "red" : "black"}
                    />
                  </button>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-2xl font-bold text-gray-900">
                    {formatPrice(property.price)}
                  </p>
                  <p className="text-sm text-gray-700">R {(property.price / property.sqft).toFixed(0)}/sq ft</p>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 
                    onClick={() => setSelectedProperty(property)}
                    className="text-lg font-bold text-gray-900 hover:text-blue-600 cursor-pointer"
                  >
                    {property.title}
                  </h3>
                  {activeTab === "recommended" && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold">94% Match</span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-500" />{" "}
                  {property.address}
                </p>

                {/* Property Stats */}
                <div className="grid grid-cols-4 gap-1 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Bed className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <span className="text-sm font-bold text-gray-900">
                      {property.bedrooms}
                    </span>
                    <p className="text-xs text-gray-500">Beds</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Bath className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <span className="text-sm font-bold text-gray-900">
                      {property.bathrooms}
                    </span>
                    <p className="text-xs text-gray-500">Baths</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Maximize className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <span className="text-sm font-bold text-gray-900">
                      {property.sqft.toLocaleString()}
                    </span>
                    <p className="text-xs text-gray-500">Sq Ft</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <span className="text-sm font-bold text-gray-900">
                      {new Date(property.listedDate).getDate()}
                    </span>
                    <p className="text-xs text-gray-500">Listed</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {property.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                        +{property.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Interactive Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    onClick={() => scheduleViewing(property.id)}
                    className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    <Calendar className="w-4 h-4" />
                    {hasViewing ? 'Reschedule' : 'Schedule Viewing'}
                  </button>
                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </button>
                </div>

                {/* Agent Info */}
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {property.agent.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{property.agent}</p>
                      <p className="text-xs text-gray-500">Agent</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Contact</p>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => contactAgent(property.id)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => contactAgent(property.id)}
                        className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-lg"
                      >
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No properties found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or update your preferences to see more matches
          </p>
          <button
            onClick={() => setShowPreferences(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:opacity-90"
          >
            Update Preferences
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Need personal assistance?</h3>
            <p className="text-blue-100">Book a free consultation with our property experts</p>
          </div>
          <button 
            onClick={() => setShowChat(true)}
            className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100"
          >
            <UserCircle className="inline mr-2" size={20} />
            Talk to Expert
          </button>
        </div>
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all z-40"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold animate-pulse">
          3
        </span>
      </button>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                    PP
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Premiere Properties Support</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-sm text-gray-600">Online • Available 24/7</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto">
              <div className="mb-4">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none inline-block max-w-[80%]">
                  <p className="text-sm">
                    Hello {clientData.name}! I'm your property assistant. How can I help you today?
                  </p>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-blue-600">• Schedule property viewings</p>
                    <p className="text-xs text-blue-600">• Get personalized recommendations</p>
                    <p className="text-xs text-blue-600">• Ask about mortgage options</p>
                    <p className="text-xs text-blue-600">• Get market insights</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Just now</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex gap-2 mb-2">
                <button className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                  Schedule Tour
                </button>
                <button className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
                  Get Recommendations
                </button>
                <button className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded">
                  Mortgage Help
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === "Enter" && sendMessageToAgent()}
                />
                <button
                  onClick={sendMessageToAgent}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailView property={selectedProperty} />
      )}
    </div>
  );
}
