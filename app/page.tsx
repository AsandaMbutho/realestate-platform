"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Home, Search, Shield, MapPin, Mail, Phone, Star, CheckCircle, 
  TrendingUp, Users, Building, Bed, Bath, Maximize2, Heart, Eye, 
  ChevronRight, ArrowRight, Filter, X, Calendar, Car, Trees, Wifi,
  Coffee, Dumbbell, Waves, Sun, Wind, Cloud, Home as HomeIcon,
  User, PhoneCall, MessageSquare, Award, Target, DollarSign,
  Camera, Video, Map, Share2, Download, Printer, Bookmark,
  ChevronLeft, ChevronDown, Menu, ExternalLink, Lock, Key
} from "lucide-react";

// Your property data
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
    description: "Stunning luxury apartment with panoramic city views, modern finishes, and secure parking.",
    features: ["Panoramic Views", "Secure Parking", "Pool", "Gym", "24/7 Security"],
    agentDetails: { name: "John Agent", phone: "+27 11 234 5678", email: "john@realestate.com" },
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
    description: "Ultra-modern penthouse with private rooftop terrace and smart home technology.",
    features: ["Rooftop Terrace", "Smart Home", "Wine Cellar", "Home Theater", "3 Parking"],
    agentDetails: { name: "Sarah Smith", phone: "+27 11 234 5679", email: "sarah@realestate.com" },
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
    description: "Luxurious executive villa with landscaped gardens, staff quarters, and pool house.",
    features: ["Staff Quarters", "Pool House", "Wine Cellar", "Home Gym", "5 Car Garage"],
    agentDetails: { name: "Mike Brown", phone: "+27 11 234 5680", email: "mike@realestate.com" },
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
    description: "Modern open-plan loft with exposed brick walls and industrial chic design.",
    features: ["Open Plan", "Exposed Brick", "High Ceilings", "City Views", "Secure"],
    agentDetails: { name: "Emma Wilson", phone: "+27 11 234 5681", email: "emma@realestate.com" },
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
    description: "Spacious family townhouse with private garden and solar heating system.",
    features: ["Solar Heating", "Private Garden", "Braai Area", "Study", "Double Garage"],
    agentDetails: { name: "David Lee", phone: "+27 11 234 5682", email: "david@realestate.com" },
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
    description: "Beautiful waterfront apartment with sea views and direct beach access.",
    features: ["Ocean Views", "Beach Access", "Balcony", "Secure Parking", "Pool"],
    agentDetails: { name: "Lisa Chen", phone: "+27 21 456 7890", email: "lisa@realestate.com" },
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
    description: "Contemporary family home with open-plan living and landscaped garden.",
    features: ["Open Plan", "Study", "Entertainment Area", "Garden", "Double Garage"],
    agentDetails: { name: "James Wilson", phone: "+27 11 345 6789", email: "james@realestate.com" },
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
    description: "Great investment property currently rented with stable tenant.",
    features: ["Investment", "Rented", "Secure", "Parking", "Near Transport"],
    agentDetails: { name: "Sophia Martinez", phone: "+27 11 567 8901", email: "sophia@realestate.com" },
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
    description: "Ultra-luxurious penthouse with 360-degree city views and premium finishes.",
    features: ["360° Views", "Private Elevator", "Wine Cellar", "Home Cinema", "4 Parking"],
    agentDetails: { name: "Robert Johnson", phone: "+27 11 678 9012", email: "robert@realestate.com" },
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
    features: ["Modern", "Secure", "Pet Friendly", "Near Restaurants", "Parking"],
    agentDetails: { name: "Amanda Taylor", phone: "+27 11 789 0123", email: "amanda@realestate.com" },
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
    description: "Prime commercial office space in Sandton's business district.",
    features: ["Commercial", "A-Grade", "Parking", "Security", "Fiber Ready"],
    agentDetails: { name: "Michael Brown", phone: "+27 11 890 1234", email: "michael@realestate.com" },
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
    features: ["Ocean Front", "Pool", "Private Beach", "Staff Quarters", "Wine Cellar"],
    agentDetails: { name: "Jennifer Davis", phone: "+27 21 234 5678", email: "jennifer@realestate.com" },
    listedDate: "2026-01-06",
  },
];

// Agent data
const agentsData = [
  {
    id: 1,
    name: "John Agent",
    role: "Senior Real Estate Agent",
    experience: "12 years",
    specialties: ["Luxury Apartments", "Commercial Properties"],
    propertiesSold: 245,
    rating: 4.9,
    phone: "+27 11 234 5678",
    email: "john@realestate.com",
    bio: "Specializing in luxury properties in Sandton and surrounding areas. Award-winning agent with 12 years of experience.",
    avatarColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Lead Agent - Residential",
    experience: "8 years",
    specialties: ["Family Homes", "Penthouse Apartments"],
    propertiesSold: 189,
    rating: 4.8,
    phone: "+27 11 234 5679",
    email: "sarah@realestate.com",
    bio: "Expert in residential properties with a focus on modern living spaces and family homes.",
    avatarColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Mike Brown",
    role: "Executive Property Specialist",
    experience: "15 years",
    specialties: ["Luxury Villas", "Investment Properties"],
    propertiesSold: 312,
    rating: 4.9,
    phone: "+27 11 234 5680",
    email: "mike@realestate.com",
    bio: "15 years of experience in high-end property markets across South Africa.",
    avatarColor: "bg-purple-500",
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Urban Living Expert",
    experience: "6 years",
    specialties: ["City Apartments", "Loft Conversions"],
    propertiesSold: 132,
    rating: 4.7,
    phone: "+27 11 234 5681",
    email: "emma@realestate.com",
    bio: "Specializes in urban properties and modern city living spaces.",
    avatarColor: "bg-pink-500",
  },
];

// Amenity icons mapping
const amenityIcons = {
  "Panoramic Views": Sun,
  "Secure Parking": Car,
  "Pool": Waves,
  "Gym": Dumbbell,
  "24/7 Security": Shield,
  "Rooftop Terrace": Sun,
  "Smart Home": HomeIcon,
  "Wine Cellar": Coffee,
  "Home Theater": Video,
  "3 Parking": Car,
  "Staff Quarters": Users,
  "Pool House": Waves,
  "Home Gym": Dumbbell,
  "5 Car Garage": Car,
  "Open Plan": HomeIcon,
  "Exposed Brick": Building,
  "High Ceilings": HomeIcon,
  "City Views": Sun,
  "Secure": Shield,
  "Solar Heating": Sun,
  "Private Garden": Trees,
  "Braai Area": Coffee,
  "Study": Bookmark,
  "Double Garage": Car,
  "Ocean Views": Waves,
  "Beach Access": Waves,
  "Balcony": Sun,
  "Investment": DollarSign,
  "Rented": Calendar,
  "Near Transport": Car,
  "360° Views": Sun,
  "Private Elevator": HomeIcon,
  "4 Parking": Car,
  "Commercial": Building,
  "A-Grade": Award,
  "Fiber Ready": Wifi,
  "Ocean Front": Waves,
  "Private Beach": Waves,
  "Staff Quarters": Users,
  "Modern": HomeIcon,
  "Pet Friendly": Users,
  "Near Restaurants": Coffee,
  "Parking": Car,
};

export default function LandingPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    propertyType: "",
    location: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "buyer",
    password: "",
    confirmPassword: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Filter properties based on search and filters
  const filteredProperties = propertiesData.filter(property => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = 
      (!filters.minPrice || property.price >= parseInt(filters.minPrice)) &&
      (!filters.maxPrice || property.price <= parseInt(filters.maxPrice));
    
    const matchesBedrooms = 
      !filters.bedrooms || property.bedrooms >= parseInt(filters.bedrooms);
    
    const matchesLocation = 
      !filters.location || property.location.toLowerCase().includes(filters.location.toLowerCase());
    
    return matchesSearch && matchesPrice && matchesBedrooms && matchesLocation;
  });

  const toggleFavorite = (propertyId) => {
    if (favorites.includes(propertyId)) {
      setFavorites(favorites.filter(id => id !== propertyId));
    } else {
      setFavorites([...favorites, propertyId]);
    }
  };

  const clearFilters = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      propertyType: "",
      location: "",
    });
  };

  // Format currency
  const formatCurrency = (amount) => {
    return `R ${amount.toLocaleString()}`;
  };

  // Get gradient based on property
  const getPropertyGradient = (id) => {
    const gradients = [
      "from-blue-100 to-cyan-100",
      "from-green-100 to-emerald-100",
      "from-purple-100 to-pink-100",
      "from-amber-100 to-orange-100",
      "from-indigo-100 to-blue-100",
      "from-teal-100 to-green-100",
    ];
    return gradients[id % gradients.length];
  };

  // Handle sign up
  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpForm.password !== signUpForm.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Simulate API call
    const newUser = {
      id: Date.now(),
      name: signUpForm.name,
      email: signUpForm.email,
      phone: signUpForm.phone,
      userType: signUpForm.userType,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    setShowSignUp(false);
    setSignUpForm({
      name: "",
      email: "",
      phone: "",
      userType: "buyer",
      password: "",
      confirmPassword: "",
    });
    
    alert(`Welcome ${newUser.name}! Your account has been created successfully.`);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setFavorites([]);
    alert("You have been logged out.");
  };

  // Handle form changes
  const handleSignUpChange = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                className="md:hidden mr-4"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Home className="text-white w-5 h-5" />
                </div>
                <span>Real Estate made easy</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setActiveTab("home")}
                className={`font-medium ${activeTab === "home" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveTab("properties")}
                className={`font-medium ${activeTab === "properties" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              >
                Properties
              </button>
              <button 
                onClick={() => setActiveTab("agents")}
                className={`font-medium ${activeTab === "agents" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              >
                Agents
              </button>
              <button 
                onClick={() => setActiveTab("sell")}
                className={`font-medium ${activeTab === "sell" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
              >
                Sell
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{currentUser?.name}</div>
                      <div className="text-xs text-gray-500">{currentUser?.userType}</div>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-600 font-medium px-4 py-2 hover:text-blue-600"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    href="/login"
                    className="text-gray-600 font-medium px-4 py-2 hover:text-blue-600 hidden md:block"
                  >
                    Sign in
                  </Link>
                  <button
                    onClick={() => setShowSignUp(true)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t py-4">
              <div className="space-y-2">
                <button 
                  onClick={() => { setActiveTab("home"); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${activeTab === "home" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => { setActiveTab("properties"); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${activeTab === "properties" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
                >
                  Properties
                </button>
                <button 
                  onClick={() => { setActiveTab("agents"); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${activeTab === "agents" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
                >
                  Agents
                </button>
                <button 
                  onClick={() => { setActiveTab("sell"); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 ${activeTab === "sell" ? "text-blue-600 bg-blue-50" : "text-gray-600"}`}
                >
                  Sell
                </button>
                {!isLoggedIn && (
                  <>
                    <Link 
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-left px-4 py-2 text-gray-600"
                    >
                      Sign in
                    </Link>
                    <button 
                      onClick={() => { setShowSignUp(true); setMobileMenuOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-gray-600"
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Create Your Account</h2>
              <button 
                onClick={() => setShowSignUp(false)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={signUpForm.name}
                  onChange={handleSignUpChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={signUpForm.email}
                  onChange={handleSignUpChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={signUpForm.phone}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+27 11 234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I want to
                </label>
                <select
                  name="userType"
                  value={signUpForm.userType}
                  onChange={handleSignUpChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="buyer">Buy a Property</option>
                  <option value="seller">Sell a Property</option>
                  <option value="agent">Work as an Agent</option>
                  <option value="investor">Invest in Properties</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={signUpForm.password}
                  onChange={handleSignUpChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signUpForm.confirmPassword}
                  onChange={handleSignUpChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link 
                  href="/login"
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        {/* Home Tab */}
        {activeTab === "home" && (
          <>
            {/* Hero Section */}
            <section className="bg-[#0a192f] text-white py-24 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center">
                  <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                    Find Your
                    <span className="block text-blue-400">Dream Home</span>
                    In South Africa
                  </h1>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Browse thousands of verified properties for sale and rent across Johannesburg, 
                    Cape Town, and major cities. Find the perfect place to call home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setActiveTab("properties")}
                      className="bg-white text-blue-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition shadow-lg"
                    >
                      Browse Properties
                    </button>
                    {!isLoggedIn && (
                      <Link
                        href="/login"
                        className="border border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition"
                      >
                        Create Free Account
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Properties Preview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Featured Properties
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Handpicked selections from our exclusive collection
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {propertiesData.slice(0, 6).map((property) => (
                    <div 
                      key={property.id}
                      onClick={() => setSelectedProperty(property)}
                      className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className={`aspect-[16/9] bg-gradient-to-br ${getPropertyGradient(property.id)} relative overflow-hidden`}>
                        <div className="absolute top-4 left-4 z-10">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            property.status === 'Active' ? 'bg-green-600 text-white' :
                            property.status === 'Under Offer' ? 'bg-amber-500 text-white' :
                            'bg-blue-500 text-white'
                          }`}>
                            {property.status}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-10 flex gap-2">
                          <button 
                            onClick={(e) => { e.stopPropagation(); toggleFavorite(property.id); }}
                            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"
                          >
                            <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                          </button>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="text-sm text-gray-500">{property.location}</div>
                                <div className="text-lg font-bold text-gray-900 truncate">{property.title}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xl font-bold text-blue-600">{formatCurrency(property.price)}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-gray-600 mb-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Bed size={14} />
                            <span>{property.bedrooms} beds</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath size={14} />
                            <span>{property.bathrooms} baths</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Maximize2 size={14} />
                            <span>{property.sqft} sqft</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 line-clamp-2 mb-4">{property.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            Agent: <span className="font-medium">{property.agent}</span>
                          </div>
                          <div className="text-blue-600 font-medium flex items-center gap-1">
                            View Details
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <button 
                    onClick={() => setActiveTab("properties")}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700"
                  >
                    View All Properties
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Properties Tab */}
        {activeTab === "properties" && (
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Search and Filters */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by location, property type, or keyword..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Filter className="w-5 h-5" />
                    Filters
                    {Object.values(filters).some(v => v) && (
                      <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {Object.values(filters).filter(v => v).length}
                      </span>
                    )}
                  </button>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                  <div className="bg-white border rounded-xl p-6 mb-6 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-bold">Filters</h3>
                      <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700">
                        Clear all
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                        <input
                          type="number"
                          placeholder="R 0"
                          value={filters.minPrice}
                          onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                        <input
                          type="number"
                          placeholder="R 10,000,000"
                          value={filters.maxPrice}
                          onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                        <select
                          value={filters.bedrooms}
                          onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Any</option>
                          <option value="1">1+</option>
                          <option value="2">2+</option>
                          <option value="3">3+</option>
                          <option value="4">4+</option>
                          <option value="5">5+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                          type="text"
                          placeholder="City or area"
                          value={filters.location}
                          onChange={(e) => setFilters({...filters, location: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Properties Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <div 
                    key={property.id}
                    onClick={() => setSelectedProperty(property)}
                    className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`aspect-[16/9] bg-gradient-to-br ${getPropertyGradient(property.id)} relative overflow-hidden`}>
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          property.status === 'Active' ? 'bg-green-600 text-white' :
                          property.status === 'Under Offer' ? 'bg-amber-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {property.status}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(property.id); }}
                          className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white"
                        >
                          <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-2">
                          <Camera className="w-4 h-4 text-white" />
                          <span className="text-sm text-white">{property.images} photos</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {property.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{property.address}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{formatCurrency(property.price)}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-600 mb-6 text-sm">
                        <div className="flex items-center gap-1">
                          <Bed size={14} />
                          <span>{property.bedrooms} beds</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={14} />
                          <span>{property.bathrooms} baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Maximize2 size={14} />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {property.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                        {property.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{property.features.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-sm">
                            <div className="font-medium">{property.agent}</div>
                            <div className="text-gray-500">Agent</div>
                          </div>
                        </div>
                        <div className="text-blue-600 font-medium flex items-center gap-1">
                          View Details
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProperties.length === 0 && (
                <div className="text-center py-20">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No properties found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Agents Tab */}
        {activeTab === "agents" && (
          <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Meet Our Expert Agents
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Professional real estate agents ready to help you find or sell your perfect property
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {agentsData.map((agent) => (
                  <div key={agent.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 ${agent.avatarColor} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                          {agent.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{agent.name}</h3>
                          <p className="text-gray-600">{agent.role}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(agent.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-2">{agent.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">{agent.experience} experience</div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Properties Sold</span>
                          <span className="font-bold">{agent.propertiesSold}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Specialties</span>
                          <span className="font-bold text-right">{agent.specialties.length}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {agent.specialties.slice(0, 2).map((specialty, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                          <PhoneCall className="w-4 h-4 inline mr-2" />
                          Call Agent
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Agent Statistics */}
              <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Properties Listed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">R 50B+</div>
                    <div className="text-blue-100">Property Value Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sell Tab */}
        {activeTab === "sell" && (
          <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                  Sell Your Property With Confidence
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get the best price for your property with our expert guidance and marketing
                </p>
              </div>

              {/* Selling Process */}
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    step: "1",
                    title: "Property Valuation",
                    description: "Get an accurate market valuation from our experts",
                    icon: DollarSign
                  },
                  {
                    step: "2",
                    title: "Professional Marketing",
                    description: "High-quality photos, virtual tours, and targeted advertising",
                    icon: Camera
                  },
                  {
                    step: "3",
                    title: "Expert Negotiation",
                    description: "Our agents negotiate the best deal on your behalf",
                    icon: Users
                  },
                ].map((step, i) => (
                  <div key={i} className="text-center p-8 bg-white rounded-xl border border-gray-200">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: Target, title: "Maximum Exposure", desc: "Listed on 20+ property portals" },
                    { icon: Award, title: "Expert Agents", desc: "Certified real estate professionals" },
                    { icon: Shield, title: "Secure Process", desc: "Bank-level security & contracts" },
                    { icon: TrendingUp, title: "Best Price", desc: "Data-driven pricing strategy" },
                  ].map((feature, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Sell Your Property?</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get a free valuation and see how much your property is worth
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                    Request Free Valuation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
                    Speak to an Agent
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedProperty.title}</h2>
                <button 
                  onClick={() => setSelectedProperty(null)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                  <div className="lg:col-span-2">
                    <div className={`aspect-[16/9] bg-gradient-to-br ${getPropertyGradient(selectedProperty.id)} rounded-xl`}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`aspect-square bg-gradient-to-br ${getPropertyGradient(selectedProperty.id + i)} rounded-lg`}></div>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {selectedProperty.status}
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {selectedProperty.location}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Description</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedProperty.description}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Features & Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProperty.features.map((feature, i) => {
                          const Icon = amenityIcons[feature] || CheckCircle;
                          return (
                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <Icon className="w-5 h-5 text-blue-600" />
                              <span>{feature}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Property Details</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold">{selectedProperty.bedrooms}</div>
                          <div className="text-gray-600">Bedrooms</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <Bath className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold">{selectedProperty.bathrooms}</div>
                          <div className="text-gray-600">Bathrooms</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <Maximize2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold">{selectedProperty.sqft}</div>
                          <div className="text-gray-600">Square Feet</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-xl">
                          <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-lg font-bold">{selectedProperty.listedDate}</div>
                          <div className="text-gray-600">Listed</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Agent & Actions */}
                  <div className="space-y-6">
                    <div className="bg-white border rounded-xl p-6 shadow-sm">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {formatCurrency(selectedProperty.price)}
                        </div>
                        <div className="text-gray-600">Asking Price</div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                          Schedule Viewing
                        </button>
                        {!isLoggedIn && (
                          <Link 
                            href="/login"
                            className="block w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-center"
                          >
                            Sign Up to Make Offer
                          </Link>
                        )}
                        {isLoggedIn && (
                          <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                            Make an Offer
                          </button>
                        )}
                        <button 
                          onClick={() => toggleFavorite(selectedProperty.id)}
                          className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                        >
                          <Heart className={`w-5 h-5 ${favorites.includes(selectedProperty.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          {favorites.includes(selectedProperty.id) ? 'Saved' : 'Save Property'}
                        </button>
                      </div>
                    </div>

                    {/* Agent Card */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold mb-4">Listing Agent</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {selectedProperty.agent.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold">{selectedProperty.agent}</div>
                          <div className="text-sm text-gray-600">Real Estate Agent</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
                          <PhoneCall className="w-4 h-4" />
                          Call Agent
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Send Message
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold mb-4">Share This Property</h3>
                      <div className="flex gap-3">
                        <button className="flex-1 border border-gray-300 rounded-lg p-3 hover:bg-white transition">
                          <Mail className="w-5 h-5 mx-auto" />
                        </button>
                        <button className="flex-1 border border-gray-300 rounded-lg p-3 hover:bg-white transition">
                          <Share2 className="w-5 h-5 mx-auto" />
                        </button>
                        <button className="flex-1 border border-gray-300 rounded-lg p-3 hover:bg-white transition">
                          <Printer className="w-5 h-5 mx-auto" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="bg-[#1a202c] text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Real Estate made easy</h3>
              <p className="leading-relaxed">
                South Africa's premier real estate platform connecting buyers, 
                sellers, and top agents across major cities.
              </p>
            </div>

            {[
              {
                title: "Buy",
                links: ["Search Properties", "Virtual Tours", "Mortgage Calculator", "Neighborhood Guide"]
              },
              {
                title: "Sell",
                links: ["List Your Property", "Home Valuation", "Seller Resources", "Agent Directory"]
              },
              {
                title: "Contact",
                items: [
                  { icon: <MapPin size={16} />, text: "Sandton City, Johannesburg" },
                  { icon: <Mail size={16} />, text: "hello@realestate.co.za" },
                  { icon: <Phone size={16} />, text: "+27 11 234 5678" }
                ]
              }
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
                {section.links ? (
                  <ul className="space-y-3">
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <button className="hover:text-white transition">{link}</button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="space-y-4 text-sm">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        {item.icon}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                © {new Date().getFullYear()} Real Estate made easy. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm">PPRA Certified • Privacy Policy • Terms</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}