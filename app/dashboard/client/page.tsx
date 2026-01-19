"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  LogOut,
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
} from "lucide-react";

const propertiesData = [
  {
    id: 1,
    title: "Luxury Apartment",
    address: "123 Sandton Drive, Johannesburg",
    price: 2500000,
    priceFormatted: "R 2,500,000",
    status: "Active",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    agent: "John Agent",
    images: 12,
    location: "Sandton, Johannesburg",
    description:
      "Stunning luxury apartment with panoramic city views, modern finishes, and secure parking.",
    features: [
      "Panoramic Views",
      "Secure Parking",
      "Pool",
      "Gym",
      "24/7 Security",
    ],
    type: "Apartment",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Modern Penthouse",
    address: "45 Sandton City, Johannesburg",
    price: 4200000,
    priceFormatted: "R 4,200,000",
    status: "Active",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    agent: "Sarah Smith",
    images: 15,
    location: "Sandton City",
    description:
      "Ultra-modern penthouse with private rooftop terrace and smart home technology.",
    features: [
      "Rooftop Terrace",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "3 Parking",
    ],
    type: "Penthouse",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Executive Villa",
    address: "78 Morningside, Sandton",
    price: 18500000,
    priceFormatted: "R 18,500,000",
    status: "Active",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    agent: "Mike Brown",
    images: 20,
    location: "Morningside, Sandton",
    description:
      "Luxurious executive villa with landscaped gardens, staff quarters, and pool house.",
    features: [
      "Staff Quarters",
      "Pool House",
      "Wine Cellar",
      "Home Gym",
      "5 Car Garage",
    ],
    type: "Villa",
    rating: 4.7,
  },
  {
    id: 4,
    title: "City View Loft",
    address: "22 Sandton CBD",
    price: 1800000,
    priceFormatted: "R 1,800,000",
    status: "Active",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    agent: "Emma Wilson",
    images: 10,
    location: "Sandton CBD",
    description:
      "Modern open-plan loft with exposed brick walls and industrial chic design.",
    features: [
      "Open Plan",
      "Exposed Brick",
      "High Ceilings",
      "City Views",
      "Secure",
    ],
    type: "Loft",
    rating: 4.5,
  },
  {
    id: 5,
    title: "Garden Townhouse",
    address: "15 Bryanston, Sandton",
    price: 9500000,
    priceFormatted: "R 9,500,000",
    status: "Under Offer",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    agent: "David Lee",
    images: 14,
    location: "Bryanston, Sandton",
    description:
      "Spacious family townhouse with private garden and solar heating system.",
    features: [
      "Solar Heating",
      "Private Garden",
      "Braai Area",
      "Study",
      "Double Garage",
    ],
    type: "Townhouse",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Waterfront Apartment",
    address: "89 Atlantic Beach",
    price: 3200000,
    priceFormatted: "R 3,200,000",
    status: "Active",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    agent: "Lisa Chen",
    images: 18,
    location: "Atlantic Beach, Cape Town",
    description:
      "Beautiful waterfront apartment with sea views and direct beach access.",
    features: [
      "Ocean Views",
      "Beach Access",
      "Balcony",
      "Secure Parking",
      "Pool",
    ],
    type: "Apartment",
    rating: 4.8,
  },
  {
    id: 7,
    title: "Modern Family Home",
    address: "34 Parktown, Johannesburg",
    price: 8500000,
    priceFormatted: "R 8,500,000",
    status: "Active",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3800,
    agent: "James Wilson",
    images: 16,
    location: "Parktown, Johannesburg",
    description:
      "Contemporary family home with open-plan living and landscaped garden.",
    features: [
      "Open Plan",
      "Study",
      "Entertainment Area",
      "Garden",
      "Double Garage",
    ],
    type: "House",
    rating: 4.7,
  },
  {
    id: 8,
    title: "Investment Property",
    address: "67 Rosebank",
    price: 1500000,
    priceFormatted: "R 1,500,000",
    status: "Rented",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 900,
    agent: "Sophia Martinez",
    images: 8,
    location: "Rosebank, Johannesburg",
    description:
      "Great investment property currently rented with stable tenant.",
    features: ["Investment", "Rented", "Secure", "Parking", "Near Transport"],
    type: "Apartment",
    rating: 4.3,
  },
  {
    id: 9,
    title: "Luxury Penthouse Suite",
    address: "101 Sandton Towers",
    price: 12500000,
    priceFormatted: "R 12,500,000",
    status: "Active",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 5200,
    agent: "Robert Johnson",
    images: 22,
    location: "Sandton Towers",
    description:
      "Ultra-luxurious penthouse with 360-degree city views and premium finishes.",
    features: [
      "360° Views",
      "Private Elevator",
      "Wine Cellar",
      "Home Cinema",
      "4 Parking",
    ],
    type: "Penthouse",
    rating: 4.9,
  },
  {
    id: 10,
    title: "Cozy Studio Apartment",
    address: "28 Melville, Johannesburg",
    price: 850000,
    priceFormatted: "R 850,000",
    status: "Active",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 650,
    agent: "Amanda Taylor",
    images: 6,
    location: "Melville, Johannesburg",
    description: "Perfect starter home or investment in trendy Melville area.",
    features: [
      "Modern",
      "Secure",
      "Pet Friendly",
      "Near Restaurants",
      "Parking",
    ],
    type: "Studio",
    rating: 4.4,
  },
  {
    id: 11,
    title: "Commercial Office Space",
    address: "200 Sandton Business District",
    price: 18500000,
    priceFormatted: "R 18,500,000",
    status: "Active",
    bedrooms: 0,
    bathrooms: 4,
    sqft: 8500,
    agent: "Michael Brown",
    images: 15,
    location: "Sandton Business District",
    description:
      "Prime commercial office space in Sandton's business district.",
    features: ["Commercial", "A-Grade", "Parking", "Security", "Fiber Ready"],
    type: "Commercial",
    rating: 4.6,
  },
  {
    id: 12,
    title: "Vacation Home",
    address: "12 Clifton, Cape Town",
    price: 28500000,
    priceFormatted: "R 28,500,000",
    status: "Active",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 6800,
    agent: "Jennifer Davis",
    images: 25,
    location: "Clifton, Cape Town",
    description: "Luxury vacation home with stunning Atlantic Ocean views.",
    features: [
      "Ocean Front",
      "Pool",
      "Private Beach",
      "Staff Quarters",
      "Wine Cellar",
    ],
    type: "Villa",
    rating: 4.9,
  },
];

const mockStats = {
  totalViews: 156,
  savedProperties: 8,
  viewingsScheduled: 3,
  avgPrice: 9500000,
  propertiesAvailable: 12,
};

export default function ClientPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [beds, setBeds] = useState("Any Beds");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [savedProperties, setSavedProperties] = useState([1, 3, 6]);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `R ${(price / 1000000).toFixed(1)}M`;
    }
    return `R ${price.toLocaleString()}`;
  };

  const toggleSavedProperty = (propertyId: number) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const scheduleViewing = (propertyId: number) => {
    const property = propertiesData.find((p) => p.id === propertyId);
    alert(
      `Viewing scheduled for ${property?.title}. Agent ${property?.agent} will contact you.`
    );
  };

  const sendMessageToAgent = () => {
    if (chatMessage.trim()) {
      alert(`Message sent to agent: "${chatMessage}"`);
      setChatMessage("");
    }
  };

  const filteredProperties = useMemo(() => {
    let result = propertiesData.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        propertyType === "All Types" || p.type === propertyType;

      const matchesBeds = beds === "Any Beds" || p.bedrooms >= parseInt(beds);

      const matchesMinPrice = !minPrice || p.price >= parseInt(minPrice);
      const matchesMaxPrice = !maxPrice || p.price <= parseInt(maxPrice);

      const matchesTab =
        activeTab === "all" ||
        (activeTab === "saved" && savedProperties.includes(p.id)) ||
        (activeTab === "active" && p.status === "Active") ||
        (activeTab === "affordable" && p.price <= 3000000);

      return (
        matchesSearch &&
        matchesType &&
        matchesBeds &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesTab
      );
    });

    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Bedrooms") {
      result.sort((a, b) => b.bedrooms - a.bedrooms);
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [
    searchTerm,
    propertyType,
    beds,
    minPrice,
    maxPrice,
    sortBy,
    activeTab,
    savedProperties,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setPropertyType("All Types");
    setBeds("Any Beds");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("Newest");
    setActiveTab("all");
  };

  const propertyTypes = [
    "All Types",
    "Apartment",
    "House",
    "Penthouse",
    "Villa",
    "Townhouse",
    "Loft",
    "Studio",
    "Commercial",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Client Property Portal
            </h1>
            <p className="text-gray-600">
              Welcome back! Explore{" "}
              <span className="text-blue-600 font-bold">
                {propertiesData.length}
              </span>{" "}
              premium properties
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  David Johnson
                </p>
                <p className="text-xs text-gray-500">Premium Client</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                DJ
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Properties Available</p>
            <p className="text-2xl font-bold text-gray-900">
              {mockStats.propertiesAvailable}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Saved Properties</p>
            <p className="text-2xl font-bold text-gray-900">
              {savedProperties.length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Viewings Scheduled</p>
            <p className="text-2xl font-bold text-gray-900">
              {mockStats.viewingsScheduled}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Avg. Price</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatPrice(mockStats.avgPrice)}
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-500">Total Views</p>
            <p className="text-2xl font-bold text-gray-900">
              {mockStats.totalViews}
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location, property name, or features..."
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
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Bedrooms</option>
            </select>
          </div>
        </div>

        {/* Quick Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
              activeTab === "saved"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Heart className="w-4 h-4" /> Saved ({savedProperties.length})
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              activeTab === "active"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Active Listings
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
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => {
          const isSaved = savedProperties.includes(property.id);

          return (
            <div
              key={property.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative h-48">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      property.status === "Active"
                        ? "bg-green-600"
                        : property.status === "Under Offer"
                        ? "bg-yellow-600"
                        : "bg-gray-600"
                    }`}
                  >
                    {property.status}
                  </span>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
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
                </div>
              </div>

              {/* Details Section */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-500" />{" "}
                  {property.address}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
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
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">
                      {property.rating}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Agent:{" "}
                    <span className="font-medium text-gray-900">
                      {property.agent}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => scheduleViewing(property.id)}
                    className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Schedule Viewing
                  </button>
                  <button
                    onClick={() => setShowChat(true)}
                    className="px-4 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No properties found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or search criteria
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                    SA
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sarah Agent</h3>
                    <p className="text-sm text-gray-600">
                      Online • Your Property Agent
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-xl rounded-tl-none inline-block max-w-[80%]">
                  <p className="text-sm">
                    Hello! I'm Sarah, your dedicated property agent. How can I
                    help you today?
                  </p>
                  <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === "Enter" && sendMessageToAgent()}
                />
                <button
                  onClick={sendMessageToAgent}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
