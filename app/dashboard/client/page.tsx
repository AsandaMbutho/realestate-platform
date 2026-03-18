"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Search,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Calendar,
  Target,
  DollarSign,
  Bookmark,
  Settings,
  Moon,
  Sun,
  Sparkles,
  Brain,
  Cpu,
  UserCircle,
  X,
  Zap,
  BarChart3,
  Phone,
  Mail,
  Eye,
  MessageSquare,
  Filter,
  ChevronDown,
  Grid,
  List,
  Map as MapIcon,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Calculator,
  Percent,
  Building,
  Users,
  Home,
  Car,
  Wifi,
  Dumbbell,
  Lock,
  Coffee,
  Tv,
  Wine,
  Wind,
  Thermometer,
  Camera,
  Video,
  ChevronRight,
  Download,
  Share2,
  Printer,
  TrendingDown,
  School,
  AlertCircle,
  Compass,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ExternalLink,
  Loader2,
  Plus,
  Minus,
} from "lucide-react";

// FALLBACK FOR MISSING ICONS
const Robot = Cpu;

// PROPERTY DATA WITH IMAGE FALLBACKS - UPDATED VIRTUAL TOUR
const propertiesData = [
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
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop",
    ],
    location: "Sandton, Johannesburg",
    description:
      "Stunning luxury apartment with panoramic city views, modern finishes, and secure parking. Features include smart home automation, premium appliances, and 24/7 concierge service.",
    features: [
      "Panoramic Views",
      "Secure Parking",
      "Swimming Pool",
      "Gym",
      "24/7 Security",
      "Concierge",
      "Smart Home",
      "Balcony",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Sauna",
      "Jacuzzi",
      "BBQ Area",
      "Playground",
      "Tennis Court",
    ],
    virtualTour: "3D",
    agentDetails: {
      name: "John Agent",
      phone: "+27 11 234 5678",
      email: "john@realestate.com",
      rating: 4.8,
      dealsClosed: 142,
    },
    listedDate: "2026-01-05",
    views: 1245,
    saves: 89,
    neighborhood: {
      crimeRate: "Low",
      schools: ["Sandton Primary", "Johannesburg High School"],
      transport: "Excellent",
      amenities: "Premium",
      rating: 4.5,
    },
    investment: {
      rentalYield: "6.2%",
      appreciation: "8.3%",
      roi: "9.1%",
    },
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
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop",
    ],
    location: "Sandton City",
    description:
      "Ultra-modern penthouse with private rooftop terrace and smart home technology. Features include home theater, wine cellar, and panoramic city views from every room.",
    features: [
      "Rooftop Terrace",
      "Smart Home",
      "Wine Cellar",
      "Home Theater",
      "3 Parking",
      "Panoramic Views",
      "Private Elevator",
    ],
    amenities: [
      "Rooftop Pool",
      "Private Gym",
      "Wine Cellar",
      "Home Theater",
      "Smart Lighting",
      "Security System",
    ],
    virtualTour: "3D",
    agentDetails: {
      name: "Sarah Smith",
      phone: "+27 11 234 5679",
      email: "sarah@realestate.com",
      rating: 4.9,
      dealsClosed: 89,
    },
    listedDate: "2026-01-03",
    views: 987,
    saves: 67,
    neighborhood: {
      crimeRate: "Very Low",
      schools: ["International School", "Private Academy"],
      transport: "Excellent",
      amenities: "Luxury",
      rating: 4.8,
    },
    investment: {
      rentalYield: "5.8%",
      appreciation: "9.2%",
      roi: "10.1%",
    },
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
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop",
    ],
    location: "Morningside, Sandton",
    description:
      "Luxurious executive villa with landscaped gardens, staff quarters, and pool house. Perfect for entertaining with tennis court, home theater, and wine cellar.",
    features: [
      "Staff Quarters",
      "Pool House",
      "Wine Cellar",
      "Home Gym",
      "5 Car Garage",
      "Tennis Court",
      "Landscaped Garden",
    ],
    amenities: [
      "Swimming Pool",
      "Tennis Court",
      "Home Theater",
      "Wine Cellar",
      "Staff Quarters",
      "Landscaped Garden",
      "Security Gate",
    ],
    virtualTour: "3D",
    agentDetails: {
      name: "Mike Brown",
      phone: "+27 11 234 5680",
      email: "mike@realestate.com",
      rating: 4.7,
      dealsClosed: 203,
    },
    listedDate: "2025-12-20",
    views: 1543,
    saves: 112,
    neighborhood: {
      crimeRate: "Very Low",
      schools: ["Morningside College", "Private Tutors"],
      transport: "Good",
      amenities: "Premium",
      rating: 4.7,
    },
    investment: {
      rentalYield: "4.8%",
      appreciation: "7.5%",
      roi: "8.2%",
    },
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
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop",
    ],
    location: "Sandton CBD",
    description:
      "Modern open-plan loft with exposed brick walls and industrial chic design. High ceilings, large windows, and prime CBD location make this a perfect city living space.",
    features: [
      "Open Plan",
      "Exposed Brick",
      "High Ceilings",
      "City Views",
      "Secure Building",
      "Industrial Style",
      "Modern Kitchen",
    ],
    amenities: [
      "24/7 Security",
      "Elevator",
      "Parking",
      "Storage",
      "Pet Friendly",
      "Bike Storage",
    ],
    virtualTour: "3D",
    agentDetails: {
      name: "Emma Wilson",
      phone: "+27 11 234 5681",
      email: "emma@realestate.com",
      rating: 4.6,
      dealsClosed: 76,
    },
    listedDate: "2026-01-07",
    views: 876,
    saves: 45,
    neighborhood: {
      crimeRate: "Medium",
      schools: ["City College", "Business School"],
      transport: "Excellent",
      amenities: "Excellent",
      rating: 4.3,
    },
    investment: {
      rentalYield: "6.8%",
      appreciation: "8.9%",
      roi: "9.5%",
    },
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
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop",
    ],
    location: "Bryanston, Sandton",
    description:
      "Spacious family townhouse with private garden and solar heating system. Features include braai area, study, double garage, and swimming pool in a secure estate.",
    features: [
      "Solar Heating",
      "Private Garden",
      "Braai Area",
      "Study",
      "Double Garage",
      "Swimming Pool",
      "Entertainment Area",
    ],
    amenities: [
      "Swimming Pool",
      "Braai Area",
      "Garden",
      "Study",
      "Double Garage",
      "Solar Panels",
      "Security System",
    ],
    virtualTour: "3D",
    agentDetails: {
      name: "David Lee",
      phone: "+27 11 234 5682",
      email: "david@realestate.com",
      rating: 4.5,
      dealsClosed: 98,
    },
    listedDate: "2026-01-02",
    views: 765,
    saves: 56,
    neighborhood: {
      crimeRate: "Low",
      schools: ["Bryanston Primary", "High School"],
      transport: "Good",
      amenities: "Good",
      rating: 4.4,
    },
    investment: {
      rentalYield: "5.5%",
      appreciation: "7.2%",
      roi: "8.0%",
    },
  },
  {
    id: 6,
    title: "Waterfront Apartment",
    address: "89 Atlantic Beach, Cape Town",
    price: 3200000,
    status: "Active",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    agent: "Lisa Chen",
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop",
    ],
    location: "Atlantic Beach, Cape Town",
    description:
      "Beautiful waterfront apartment with sea views and direct beach access. Features include heated floors, modern kitchen, and premium finishes throughout.",
    features: [
      "Ocean Views",
      "Beach Access",
      "Balcony",
      "Secure Parking",
      "Swimming Pool",
      "Modern Kitchen",
      "Heated Floors",
    ],
    amenities: [
      "Swimming Pool",
      "Beach Access",
      "Gym",
      "Sauna",
      "Concierge",
      "Secure Parking",
      "Pet Friendly",
    ],
    virtualTour: "3D",
    agentDetails: {
      name: "Lisa Chen",
      phone: "+27 21 456 7890",
      email: "lisa@realestate.com",
      rating: 4.8,
      dealsClosed: 123,
    },
    listedDate: "2026-01-10",
    views: 1109,
    saves: 78,
    neighborhood: {
      crimeRate: "Low",
      schools: ["Beachside School", "International College"],
      transport: "Good",
      amenities: "Excellent",
      rating: 4.6,
    },
    investment: {
      rentalYield: "7.2%",
      appreciation: "9.5%",
      roi: "10.8%",
    },
  },
];

// CLIENT DATA
const clientData = {
  name: "David Johnson",
  email: "david.johnson@email.com",
  phone: "+27 82 123 4567",
  membership: "Premium",
  savedProperties: [1, 3, 6],
  viewingScheduled: [2, 4],
  messages: [
    {
      id: 1,
      from: "John Agent",
      message: "Your viewing is confirmed for tomorrow at 2 PM",
      time: "10:30 AM",
      unread: true,
    },
    {
      id: 2,
      from: "Sarah Smith",
      message: "New property matching your criteria just listed",
      time: "Yesterday",
      unread: true,
    },
    {
      id: 3,
      from: "AI Assistant",
      message: "Market analysis for Sandton completed",
      time: "2 days ago",
      unread: false,
    },
  ],
};

// MARKET DATA
const marketData = {
  avgPriceSandton: 4200000,
  priceGrowth: 8.3,
  daysOnMarket: 24,
  rentalYield: 5.8,
  interestRate: 9.5,
};

// AI FUNCTIONS
const calculateAIPropertyScore = (property) => {
  let score = 50;
  score += property.bedrooms * 6;
  score += property.bathrooms * 5;
  score += Math.min(property.features.length * 3, 15);
  const pricePerSqft = property.price / property.sqft;
  if (pricePerSqft < 1000) score += 20;
  else if (pricePerSqft < 2000) score += 10;
  if (property.location.includes("Sandton")) score += 15;
  if (property.status === "Active") score += 5;
  return Math.min(Math.max(score, 0), 100);
};

const getAIResponse = async (message) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const responses = [
    "Based on your preferences, I recommend properties in Sandton with 3+ bedrooms. The Luxury Apartment and Modern Penthouse have the highest AI scores.",
    "The current market in Sandton shows 8.2% growth. Properties under R5M are moving fast - consider acting quickly on good opportunities.",
    "I've analyzed your saved properties. The Executive Villa has excellent investment potential with a 92% AI score.",
    "For rental yield, consider the City View Loft. It's in a high-demand area with 6.8% projected rental return.",
    "Based on market trends, now is a good time to buy in Sandton. Prices are expected to rise by 7.3% next quarter.",
    "The mortgage calculator shows affordable payments for your budget. Would you like me to analyze specific properties for you?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

// MORTGAGE CALCULATOR FUNCTIONS
const calculateMonthlyPayment = (principal, annualRate, years) => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  return monthlyPayment;
};

const calculateTotalInterest = (principal, monthlyPayment, years) => {
  const totalPaid = monthlyPayment * years * 12;
  return totalPaid - principal;
};

// COMPARISON MODAL COMPONENT
const ComparisonModal = ({ properties, onClose, darkMode }) => {
  if (properties.length < 2) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: darkMode ? "#1f2937" : "white",
          borderRadius: "20px",
          maxWidth: "1400px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "24px",
            borderBottom: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
            <BarChart3 size={24} style={{ marginRight: "12px" }} />
            Compare Properties ({properties.length})
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: darkMode ? "#9ca3af" : "#6b7280",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "24px" }}>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "800px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "left",
                      borderBottom: `2px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                    }}
                  >
                    Feature
                  </th>
                  {properties.map((property) => (
                    <th
                      key={property.id}
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        borderBottom: `2px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                        width: "250px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "80px",
                            borderRadius: "8px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={property.images[0]}
                            alt={property.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/200x150/3b82f6/ffffff?text=Property`;
                            }}
                          />
                        </div>
                        <div style={{ fontWeight: "bold" }}>
                          {property.title}
                        </div>
                        <div
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#3b82f6",
                          }}
                        >
                          R {(property.price / 1000000).toFixed(1)}M
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    label: "Price",
                    key: "price",
                    format: (v) => `R ${(v / 1000000).toFixed(1)}M`,
                  },
                  { label: "Bedrooms", key: "bedrooms" },
                  { label: "Bathrooms", key: "bathrooms" },
                  {
                    label: "Square Feet",
                    key: "sqft",
                    format: (v) => v.toLocaleString(),
                  },
                  {
                    label: "AI Score",
                    key: null,
                    format: (_, p) => calculateAIPropertyScore(p),
                  },
                  { label: "ROI", key: "investment.roi" },
                  { label: "Status", key: "status" },
                  { label: "Location", key: "location" },
                ].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td
                      style={{
                        padding: "16px",
                        fontWeight: "bold",
                        backgroundColor: darkMode ? "#374151" : "#f9fafb",
                        borderBottom: `1px solid ${darkMode ? "#4b5563" : "#e5e7eb"}`,
                      }}
                    >
                      {row.label}
                    </td>
                    {properties.map((property) => (
                      <td
                        key={property.id}
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          borderBottom: `1px solid ${darkMode ? "#4b5563" : "#e5e7eb"}`,
                        }}
                      >
                        {row.format
                          ? row.format(
                              row.key
                                ? row.key.includes(".")
                                  ? row.key
                                      .split(".")
                                      .reduce((o, k) => o[k], property)
                                  : property[row.key]
                                : null,
                              property,
                            )
                          : row.key
                            ? row.key.includes(".")
                              ? row.key
                                  .split(".")
                                  .reduce((o, k) => o[k], property)
                              : property[row.key]
                            : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

// MORTGAGE CALCULATOR MODAL COMPONENT
const MortgageCalculatorModal = ({
  property,
  darkMode,
  mortgageCalc,
  setMortgageCalc,
  onClose,
  mortgageCalculation,
  formatPrice,
}) => {
  if (!property) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: darkMode ? "#1f2937" : "white",
          borderRadius: "20px",
          maxWidth: "500px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "24px",
            borderBottom: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
            <Calculator size={24} style={{ marginRight: "12px" }} />
            Mortgage Calculator
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: darkMode ? "#9ca3af" : "#6b7280",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ padding: "24px", overflow: "auto" }}>
          <div
            style={{
              marginBottom: "20px",
              padding: "16px",
              backgroundColor: darkMode ? "#374151" : "#f3f4f6",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Calculating for:
            </div>
            <div
              style={{ fontSize: "18px", fontWeight: "bold", marginTop: "4px" }}
            >
              {property.title}
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#3b82f6",
                fontWeight: "bold",
                marginTop: "4px",
              }}
            >
              {formatPrice(property.price)}
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <label style={{ fontSize: "14px", fontWeight: "500" }}>
                Property Price:{" "}
                <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                  {formatPrice(mortgageCalc.propertyPrice)}
                </span>
              </label>
            </div>
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
              style={{
                width: "100%",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
              }}
              aria-label="Property price slider"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
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
                style={{
                  width: "100%",
                  height: "6px",
                  borderRadius: "3px",
                  backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
                }}
                aria-label="Deposit percentage slider"
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
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
                style={{
                  width: "100%",
                  height: "6px",
                  borderRadius: "3px",
                  backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
                }}
                aria-label="Interest rate slider"
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
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
              style={{
                width: "100%",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
              }}
              aria-label="Loan term slider"
            />
          </div>

          <div
            style={{
              backgroundColor: darkMode ? "#374151" : "#f3f4f6",
              padding: "25px",
              borderRadius: "12px",
              border: `2px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    marginBottom: "5px",
                  }}
                >
                  Monthly Payment
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    color: "#3b82f6",
                  }}
                >
                  R {mortgageCalculation.monthlyPayment.toFixed(0)}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    marginBottom: "5px",
                  }}
                >
                  Deposit Required
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#10b981",
                  }}
                >
                  {formatPrice(mortgageCalculation.depositAmount)}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    marginBottom: "5px",
                  }}
                >
                  Total Interest
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#ef4444",
                  }}
                >
                  {formatPrice(mortgageCalculation.totalInterest)}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "13px",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    marginBottom: "5px",
                  }}
                >
                  Total Cost
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: darkMode ? "#f9fafb" : "#111827",
                  }}
                >
                  {formatPrice(mortgageCalculation.totalCost)}
                </div>
              </div>
            </div>
          </div>

          <button
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              backgroundColor: "#10b981",
              color: "white",
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
            onClick={() => {
              alert(`Application started for ${property.title}`);
              onClose();
            }}
          >
            <DollarSign size={20} /> Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function RealEstateDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [savedProperties, setSavedProperties] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("realEstateSaved");
      return saved ? JSON.parse(saved) : clientData.savedProperties;
    }
    return clientData.savedProperties;
  });
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello David! I'm your AI Property Assistant. How can I help you today?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    propertyType: "All",
    amenities: [],
  });
  const [viewMode, setViewMode] = useState("grid");
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [mortgageCalc, setMortgageCalc] = useState({
    propertyPrice: 2500000,
    deposit: 20,
    interestRate: 9.5,
    loanTerm: 20,
    showCalculator: true,
  });
  const [compareProperties, setCompareProperties] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [sortBy, setSortBy] = useState("aiScore");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingImages, setLoadingImages] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [mortgageCalcOpen, setMortgageCalcOpen] = useState(false);
  const [selectedPropertyForMortgage, setSelectedPropertyForMortgage] =
    useState(null);

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // DARK MODE EFFECT
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("realEstateDarkMode");
      if (savedDarkMode) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "#f9fafb";
    } else {
      document.body.style.backgroundColor = "#f9fafb";
      document.body.style.color = "#111827";
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("realEstateDarkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  // PERSIST SAVED PROPERTIES
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("realEstateSaved", JSON.stringify(savedProperties));
    }
  }, [savedProperties]);

  // FORMAT PRICE
  const formatPrice = (price) => {
    if (price >= 1000000) return `R ${(price / 1000000).toFixed(1)}M`;
    if (price >= 1000) return `R ${(price / 1000).toFixed(1)}K`;
    return `R ${price}`;
  };

  // TOGGLE SAVE PROPERTY
  const toggleSavedProperty = (propertyId) => {
    setSavedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId],
    );
  };

  // SEND CHAT MESSAGE
  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput;
    setChatInput("");
    setChatMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: userMessage },
    ]);
    setIsChatLoading(true);
    const aiResponse = await getAIResponse(userMessage);
    setChatMessages((prev) => [
      ...prev,
      { id: Date.now() + 1, sender: "ai", text: aiResponse },
    ]);
    setIsChatLoading(false);
  };

  // MORTGAGE CALCULATION
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

  // OPEN MORTGAGE CALCULATOR FOR PROPERTY
  const openMortgageCalculator = (property) => {
    setSelectedPropertyForMortgage(property);
    setMortgageCalc({
      ...mortgageCalc,
      propertyPrice: property.price,
    });
    setMortgageCalcOpen(true);
  };

  // ACTIVE FILTERS CHIPS
  const activeFilters = useMemo(() => {
    const active = [];
    if (filters.minPrice) active.push(`Min: R${filters.minPrice}`);
    if (filters.maxPrice) active.push(`Max: R${filters.maxPrice}`);
    if (filters.bedrooms) active.push(`${filters.bedrooms}+ Beds`);
    if (filters.propertyType !== "All") active.push(filters.propertyType);
    if (filters.amenities.length > 0)
      active.push(`${filters.amenities.length} amenities`);
    return active;
  }, [filters]);

  // CLEAR SPECIFIC FILTER
  const clearFilter = (filterKey) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: filterKey === "amenities" ? [] : "",
    }));
  };

  // FILTERED AND SORTED PROPERTIES
  const filteredProperties = useMemo(() => {
    let filtered = propertiesData;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.address.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    // Apply price filter
    if (filters.minPrice) {
      filtered = filtered.filter(
        (p) => p.price >= parseInt(filters.minPrice) || 0,
      );
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (p) => p.price <= parseInt(filters.maxPrice) || Infinity,
      );
    }

    // Apply bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(
        (p) => p.bedrooms >= parseInt(filters.bedrooms),
      );
    }

    // Apply property type filter
    if (filters.propertyType !== "All") {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(filters.propertyType.toLowerCase()) ||
          p.description
            .toLowerCase()
            .includes(filters.propertyType.toLowerCase()),
      );
    }

    // Apply tab filter
    if (activeTab === "saved") {
      filtered = filtered.filter((p) => savedProperties.includes(p.id));
    } else if (activeTab === "affordable") {
      filtered = filtered.filter((p) => p.price <= 3000000);
    } else if (activeTab === "luxury") {
      filtered = filtered.filter((p) => p.price >= 5000000);
    } else if (activeTab === "investment") {
      filtered = filtered.filter((p) => parseFloat(p.investment.roi) > 8);
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case "priceAsc":
        return sorted.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return sorted.sort((a, b) => b.price - a.price);
      case "aiScore":
        return sorted.sort(
          (a, b) => calculateAIPropertyScore(b) - calculateAIPropertyScore(a),
        );
      case "sqftDesc":
        return sorted.sort((a, b) => b.sqft - a.sqft);
      default:
        return sorted;
    }
  }, [filters, activeTab, savedProperties, searchQuery, sortBy]);

  // VISIBLE PROPERTIES (PAGINATION)
  const visibleProperties = filteredProperties.slice(0, visibleCount);

  // QUICK CHAT SUGGESTIONS
  const quickSuggestions = [
    "Show me affordable properties",
    "Best investment opportunities",
    "Market trends in Sandton",
    "Calculate mortgage for R3M property",
    "Compare luxury apartments",
    "Properties with pool",
  ];

  // IMAGE ERROR HANDLER
  const handleImageError = (propertyId) => {
    setLoadingImages((prev) => ({ ...prev, [propertyId]: false }));
  };

  // IMAGE LOAD HANDLER
  const handleImageLoad = (propertyId) => {
    setLoadingImages((prev) => ({ ...prev, [propertyId]: false }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: isMobile ? "15px" : "20px",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
        color: darkMode ? "#f9fafb" : "#111827",
        transition: "all 0.3s ease",
      }}
    >
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes spin {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: ${darkMode ? "#374151" : "#e5e7eb"};
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb {
            background: ${darkMode ? "#4b5563" : "#9ca3af"};
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${darkMode ? "#6b7280" : "#6b7280"};
          }
        `}
      </style>

      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flex: 1,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: isMobile ? "24px" : "28px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Brain size={isMobile ? 24 : 28} /> Smart Property AI
            </h1>
            <p
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
                fontSize: "14px",
                marginTop: "5px",
              }}
            >
              Welcome back, {clientData.name}
            </p>
          </div>

          <div
            style={{
              position: "relative",
              flex: 1,
              maxWidth: "600px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9ca3af",
              }}
            />
            <input
              type="text"
              placeholder="Search properties, locations, amenities..."
              style={{
                width: "100%",
                padding: "14px 20px 14px 50px",
                borderRadius: "12px",
                border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                backgroundColor: darkMode ? "#1f2937" : "white",
                color: darkMode ? "#f9fafb" : "#111827",
                fontSize: "15px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search properties"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setShowMap(!showMap)}
            style={{
              padding: "10px 16px",
              borderRadius: "10px",
              border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
              backgroundColor: darkMode ? "#374151" : "white",
              color: darkMode ? "#d1d5db" : "#6b7280",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "500",
            }}
            aria-label={showMap ? "Hide map" : "Show map"}
          >
            <MapIcon size={16} /> {showMap ? "Hide Map" : "Show Map"}
          </button>

          <span
            style={{
              backgroundColor: "#10b981",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Shield size={14} /> PREMIUM
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              color: darkMode ? "#fbbf24" : "#6b7280",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: darkMode ? "#374151" : "#e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            DJ
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div
        style={{
          display: "flex",
          gap: isMobile ? "20px" : "30px",
          minHeight: "70vh",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* MARKET INSIGHTS */}
          <div
            style={{
              backgroundColor: darkMode ? "#1f2937" : "white",
              padding: isMobile ? "20px" : "25px",
              borderRadius: "16px",
              marginBottom: "30px",
              border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
                flexWrap: isMobile ? "wrap" : "nowrap",
                gap: isMobile ? "15px" : "0",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "20px",
                }}
              >
                <BarChart3 size={22} /> Market Insights
              </h3>
              <span
                style={{
                  fontSize: "14px",
                  color: "#10b981",
                  fontWeight: "bold",
                  backgroundColor: darkMode ? "#064e3b" : "#d1fae5",
                  padding: "4px 12px",
                  borderRadius: "20px",
                }}
              >
                Live Data
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                {
                  label: "Avg Price Sandton",
                  value: formatPrice(marketData.avgPriceSandton),
                  change: `↑ ${marketData.priceGrowth}%`,
                },
                {
                  label: "Days on Market",
                  value: `${marketData.daysOnMarket}`,
                  change: "↓ 12% faster",
                },
                {
                  label: "Rental Yield",
                  value: `${marketData.rentalYield}%`,
                  change: "Prime Returns",
                },
                {
                  label: "Interest Rate",
                  value: `${marketData.interestRate}%`,
                  change: "Current Rate",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#10b981",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {item.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MORTGAGE CALCULATOR */}
          <div
            style={{
              backgroundColor: darkMode ? "#1f2937" : "white",
              padding: isMobile ? "20px" : "25px",
              borderRadius: "16px",
              marginBottom: "30px",
              border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "20px",
                }}
              >
                <Calculator size={22} /> Mortgage Calculator
              </h3>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <label style={{ fontSize: "14px", fontWeight: "500" }}>
                  Property Price:{" "}
                  <span style={{ color: "#3b82f6", fontWeight: "bold" }}>
                    {formatPrice(mortgageCalc.propertyPrice)}
                  </span>
                </label>
              </div>
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
                style={{
                  width: "100%",
                  height: "6px",
                  borderRadius: "3px",
                  backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
                }}
                aria-label="Property price slider"
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
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
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
                  }}
                  aria-label="Deposit percentage slider"
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
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
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: darkMode ? "#4b5563" : "#e5e7eb",
                  }}
                  aria-label="Interest rate slider"
                />
              </div>
            </div>

            <div
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                padding: "25px",
                borderRadius: "12px",
                border: `2px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                      marginBottom: "5px",
                    }}
                  >
                    Monthly Payment
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#3b82f6",
                    }}
                  >
                    R {mortgageCalculation.monthlyPayment.toFixed(0)}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                      marginBottom: "5px",
                    }}
                  >
                    Deposit Required
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      color: "#10b981",
                    }}
                  >
                    {formatPrice(mortgageCalculation.depositAmount)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FILTER CHIPS */}
          {activeFilters.length > 0 && (
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <Filter size={18} />
                <span style={{ fontSize: "14px", fontWeight: "500" }}>
                  Active Filters:
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {activeFilters.map((filter, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "20px",
                      backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                      color: darkMode ? "#d1d5db" : "#4b5563",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {filter}
                    <button
                      onClick={() => {
                        if (filter.includes("Min:")) clearFilter("minPrice");
                        else if (filter.includes("Max:"))
                          clearFilter("maxPrice");
                        else if (filter.includes("Beds"))
                          clearFilter("bedrooms");
                        else if (filter.includes("amenities"))
                          clearFilter("amenities");
                        else clearFilter("propertyType");
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                        cursor: "pointer",
                        padding: "0",
                        fontSize: "18px",
                      }}
                      aria-label={`Remove ${filter} filter`}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setFilters({
                      minPrice: "",
                      maxPrice: "",
                      bedrooms: "",
                      propertyType: "All",
                      amenities: [],
                    });
                  }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Clear All
                </button>
              </div>
            </div>
          )}

          {/* PROPERTIES SECTION */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {["all", "saved", "affordable", "luxury", "investment"].map(
                  (tab) => (
                    <button
                      key={tab}
                      style={{
                        padding: "12px 20px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: isMobile ? "13px" : "14px",
                        backgroundColor:
                          activeTab === tab
                            ? "#3b82f6"
                            : darkMode
                              ? "#374151"
                              : "#e5e7eb",
                        color:
                          activeTab === tab
                            ? "white"
                            : darkMode
                              ? "#d1d5db"
                              : "#6b7280",
                        transition: "all 0.2s",
                        whiteSpace: "nowrap",
                      }}
                      onClick={() => {
                        setActiveTab(tab);
                        setVisibleCount(6);
                      }}
                    >
                      {tab === "all" && `All (${propertiesData.length})`}
                      {tab === "saved" && (
                        <>
                          <Heart size={14} style={{ marginRight: "6px" }} />{" "}
                          Saved ({savedProperties.length})
                        </>
                      )}
                      {tab === "affordable" && "Affordable"}
                      {tab === "luxury" && "Luxury"}
                      {tab === "investment" && (
                        <>
                          <TrendingUp
                            size={14}
                            style={{ marginRight: "6px" }}
                          />{" "}
                          High ROI
                        </>
                      )}
                    </button>
                  ),
                )}
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                    backgroundColor: darkMode ? "#374151" : "white",
                    color: darkMode ? "#f9fafb" : "#111827",
                    fontSize: "14px",
                    cursor: "pointer",
                    minWidth: "160px",
                  }}
                  aria-label="Sort properties by"
                >
                  <option value="aiScore">AI Score (High to Low)</option>
                  <option value="priceAsc">Price (Low to High)</option>
                  <option value="priceDesc">Price (High to Low)</option>
                  <option value="sqftDesc">Size (Large to Small)</option>
                </select>

                <div
                  style={{
                    display: "flex",
                    gap: "0",
                    border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    style={{
                      padding: "10px 16px",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      backgroundColor:
                        viewMode === "grid"
                          ? "#3b82f6"
                          : darkMode
                            ? "#374151"
                            : "white",
                      color:
                        viewMode === "grid"
                          ? "white"
                          : darkMode
                            ? "#d1d5db"
                            : "#6b7280",
                    }}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    style={{
                      padding: "10px 16px",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      backgroundColor:
                        viewMode === "list"
                          ? "#3b82f6"
                          : darkMode
                            ? "#374151"
                            : "white",
                      color:
                        viewMode === "list"
                          ? "white"
                          : darkMode
                            ? "#d1d5db"
                            : "#6b7280",
                    }}
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* ACTIVE FILTERS & COMPARE */}
            {(compareProperties.length > 0 || activeFilters.length > 0) && (
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                  }}
                >
                  Showing {visibleProperties.length} of{" "}
                  {filteredProperties.length} properties
                </div>

                {compareProperties.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                      }}
                    >
                      {compareProperties.length} selected for comparison
                    </span>
                    <button
                      onClick={() => setCompareProperties([])}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#ef4444",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Clear
                    </button>
                    {compareProperties.length >= 2 && (
                      <button
                        onClick={() => {}}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: "#10b981",
                          color: "white",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Compare ({compareProperties.length})
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* PROPERTIES GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  viewMode === "grid"
                    ? isMobile
                      ? "1fr"
                      : "repeat(auto-fill, minmax(350px, 1fr))"
                    : "1fr",
                gap: "25px",
              }}
            >
              {visibleProperties.map((property) => {
                const isSaved = savedProperties.includes(property.id);
                const aiScore = calculateAIPropertyScore(property);
                const isLoading = loadingImages[property.id] !== false;

                return (
                  <div
                    key={property.id}
                    style={{
                      backgroundColor: darkMode ? "#1f2937" : "white",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(-8px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 30px rgba(0,0,0,0.15)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(0,0,0,0.08)";
                      }
                    }}
                    onClick={() => {
                      setSelectedProperty(property);
                      setSelectedImageIndex(0);
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "220px",
                        overflow: "hidden",
                      }}
                    >
                      {isLoading ? (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                            animation: "pulse 2s infinite",
                          }}
                        />
                      ) : (
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          onLoad={() => handleImageLoad(property.id)}
                          onError={() => handleImageError(property.id)}
                        />
                      )}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
                        }}
                      ></div>

                      <div
                        style={{
                          position: "absolute",
                          top: "20px",
                          left: "20px",
                          right: "20px",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            padding: "6px 14px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "#10b981",
                          }}
                        >
                          {property.status}
                        </span>
                        <span
                          style={{
                            padding: "6px 14px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "#8b5cf6",
                          }}
                        >
                          AI: {aiScore}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSavedProperty(property.id);
                        }}
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          backgroundColor: "rgba(255,255,255,0.95)",
                          border: "none",
                          borderRadius: "50%",
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "20px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                        aria-label={
                          isSaved ? "Remove from saved" : "Save property"
                        }
                      >
                        <Heart
                          size={20}
                          color={isSaved ? "#ef4444" : "#6b7280"}
                          fill={isSaved ? "#ef4444" : "none"}
                        />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCompareProperties((prev) =>
                            prev.includes(property.id)
                              ? prev.filter((id) => id !== property.id)
                              : [...prev, property.id],
                          );
                        }}
                        style={{
                          position: "absolute",
                          top: "70px",
                          right: "20px",
                          backgroundColor: "rgba(255,255,255,0.95)",
                          border: "none",
                          borderRadius: "50%",
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "20px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        }}
                        aria-label={
                          compareProperties.includes(property.id)
                            ? "Remove from comparison"
                            : "Add to comparison"
                        }
                      >
                        {compareProperties.includes(property.id) ? (
                          <Minus size={20} color="#3b82f6" />
                        ) : (
                          <Plus size={20} color="#6b7280" />
                        )}
                      </button>

                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          left: "20px",
                          color: "white",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "28px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                          }}
                        >
                          {formatPrice(property.price)}
                        </div>
                        <div style={{ fontSize: "14px", opacity: 0.9 }}>
                          R {Math.round(property.price / property.sqft)}/sq ft
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "25px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "12px",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            flex: 1,
                            margin: 0,
                          }}
                        >
                          {property.title}
                        </h3>
                        <span
                          style={{
                            padding: "6px 12px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                            color:
                              aiScore >= 80
                                ? "#10b981"
                                : aiScore >= 60
                                  ? "#f59e0b"
                                  : "#ef4444",
                          }}
                        >
                          {aiScore}/100
                        </span>
                      </div>

                      <p
                        style={{
                          fontSize: "15px",
                          color: darkMode ? "#9ca3af" : "#6b7280",
                          marginBottom: "20px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <MapPin size={15} /> {property.address}
                      </p>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(4, 1fr)",
                          gap: "12px",
                          marginBottom: "20px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            padding: "12px",
                            backgroundColor: darkMode ? "#374151" : "#f9fafb",
                            borderRadius: "10px",
                          }}
                        >
                          <Bed
                            size={18}
                            style={{ marginBottom: "8px", color: "#3b82f6" }}
                          />
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              display: "block",
                            }}
                          >
                            {property.bedrooms}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              color: darkMode ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            Beds
                          </div>
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            padding: "12px",
                            backgroundColor: darkMode ? "#374151" : "#f9fafb",
                            borderRadius: "10px",
                          }}
                        >
                          <Bath
                            size={18}
                            style={{ marginBottom: "8px", color: "#3b82f6" }}
                          />
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              display: "block",
                            }}
                          >
                            {property.bathrooms}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              color: darkMode ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            Baths
                          </div>
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            padding: "12px",
                            backgroundColor: darkMode ? "#374151" : "#f9fafb",
                            borderRadius: "10px",
                          }}
                        >
                          <Maximize
                            size={18}
                            style={{ marginBottom: "8px", color: "#3b82f6" }}
                          />
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              display: "block",
                            }}
                          >
                            {property.sqft.toLocaleString()}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              color: darkMode ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            Sq Ft
                          </div>
                        </div>
                        <div
                          style={{
                            textAlign: "center",
                            padding: "12px",
                            backgroundColor: darkMode ? "#374151" : "#f9fafb",
                            borderRadius: "10px",
                          }}
                        >
                          <TrendingUp
                            size={18}
                            style={{ marginBottom: "8px", color: "#3b82f6" }}
                          />
                          <div
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              display: "block",
                            }}
                          >
                            {property.investment.roi}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              color: darkMode ? "#9ca3af" : "#6b7280",
                            }}
                          >
                            ROI
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", gap: "12px" }}>
                        <button
                          style={{
                            flex: 1,
                            padding: "14px",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "14px",
                            backgroundColor: "#3b82f6",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            alert(
                              `Scheduling viewing for ${property.title}\nAgent: ${property.agent}\nPhone: ${property.agentDetails.phone}`,
                            );
                          }}
                        >
                          <Calendar size={16} /> Viewing
                        </button>
                        <button
                          style={{
                            padding: "14px",
                            borderRadius: "10px",
                            border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "14px",
                            backgroundColor: darkMode ? "#374151" : "white",
                            color: darkMode ? "#d1d5db" : "#6b7280",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            openMortgageCalculator(property);
                          }}
                        >
                          <Calculator size={16} /> Calculate
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* LOADING SKELETONS */}
              {visibleProperties.length === 0 && (
                <div
                  style={{
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    padding: "40px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                    }}
                  >
                    No properties found. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>

            {/* LOAD MORE BUTTON */}
            {visibleCount < filteredProperties.length && (
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  style={{
                    padding: "14px 32px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  Load More Properties (
                  {filteredProperties.length - visibleCount} remaining)
                  <ChevronDown size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        {!isMobile && (
          <div
            style={{
              width: "350px",
              backgroundColor: darkMode ? "#1f2937" : "white",
              borderRadius: "16px",
              border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
              padding: "25px",
              height: "fit-content",
              position: "sticky",
              top: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* FILTERS */}
            <div style={{ marginBottom: "30px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: darkMode ? "#f9fafb" : "#111827",
                }}
              >
                <Filter size={20} /> Property Filters
              </h3>

              <input
                type="text"
                placeholder="Min Price (R)"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                  backgroundColor: darkMode ? "#374151" : "#f9fafb",
                  color: darkMode ? "#f9fafb" : "#111827",
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
                value={filters.minPrice}
                onChange={(e) =>
                  setFilters({ ...filters, minPrice: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Max Price (R)"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                  backgroundColor: darkMode ? "#374151" : "#f9fafb",
                  color: darkMode ? "#f9fafb" : "#111827",
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: e.target.value })
                }
              />

              <select
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                  backgroundColor: darkMode ? "#374151" : "#f9fafb",
                  color: darkMode ? "#f9fafb" : "#111827",
                  fontSize: "14px",
                  marginBottom: "15px",
                }}
                value={filters.bedrooms}
                onChange={(e) =>
                  setFilters({ ...filters, bedrooms: e.target.value })
                }
              >
                <option value="">Bedrooms (Any)</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>

              <button
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "15px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  marginTop: "10px",
                }}
                onClick={() =>
                  setFilters({
                    minPrice: "",
                    maxPrice: "",
                    bedrooms: "",
                    propertyType: "All",
                    amenities: [],
                  })
                }
              >
                Clear All Filters
              </button>
            </div>

            {/* MESSAGES */}
            <div style={{ marginTop: "30px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: darkMode ? "#f9fafb" : "#111827",
                }}
              >
                <MessageSquare size={20} /> Messages
              </h3>
              {clientData.messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    padding: "16px",
                    backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    borderLeft: `4px solid #3b82f6`,
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginBottom: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {msg.from}
                    {msg.unread && (
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#3b82f6",
                          borderRadius: "50%",
                        }}
                      ></span>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: darkMode ? "#d1d5db" : "#4b5563",
                      marginBottom: "6px",
                    }}
                  >
                    {msg.message}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: darkMode ? "#9ca3af" : "#6b7280",
                    }}
                  >
                    {msg.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PROPERTY DETAIL MODAL */}
      {selectedProperty && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={() => setSelectedProperty(null)}
        >
          <div
            style={{
              backgroundColor: darkMode ? "#1f2937" : "white",
              borderRadius: "20px",
              maxWidth: isMobile ? "95%" : "1200px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div
              style={{
                padding: "24px",
                borderBottom: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: "28px", fontWeight: "bold" }}>
                  {selectedProperty.title}
                </h2>
                <p
                  style={{
                    margin: "8px 0 0 0",
                    color: darkMode ? "#9ca3af" : "#6b7280",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <MapPin size={16} /> {selectedProperty.address}
                </p>
              </div>
              <button
                onClick={() => setSelectedProperty(null)}
                style={{
                  background: "none",
                  border: "none",
                  color: darkMode ? "#9ca3af" : "#6b7280",
                  cursor: "pointer",
                  padding: "8px",
                }}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* BODY */}
            <div style={{ flex: 1, overflow: "auto", padding: "24px" }}>
              {/* MAIN IMAGE */}
              <div
                style={{
                  position: "relative",
                  height: isMobile ? "250px" : "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                <img
                  src={selectedProperty.images[selectedImageIndex]}
                  alt={selectedProperty.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/1200x600/3b82f6/ffffff?text=${encodeURIComponent(
                      selectedProperty.title,
                    )}`;
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: isMobile ? "24px" : "32px",
                      fontWeight: "bold",
                    }}
                  >
                    {formatPrice(selectedProperty.price)}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {selectedImageIndex + 1} /{" "}
                      {selectedProperty.images.length}
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        onClick={() =>
                          setSelectedImageIndex(
                            Math.max(0, selectedImageIndex - 1),
                          )
                        }
                        style={{
                          backgroundColor: "rgba(255,255,255,0.9)",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        disabled={selectedImageIndex === 0}
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() =>
                          setSelectedImageIndex(
                            Math.min(
                              selectedProperty.images.length - 1,
                              selectedImageIndex + 1,
                            ),
                          )
                        }
                        style={{
                          backgroundColor: "rgba(255,255,255,0.9)",
                          border: "none",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        disabled={
                          selectedImageIndex ===
                          selectedProperty.images.length - 1
                        }
                        aria-label="Next image"
                      >
                        <ChevronRightIcon size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE GALLERY */}
              {selectedProperty.images.length > 1 && (
                <div style={{ marginBottom: "30px" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                    Gallery
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile
                        ? "repeat(2, 1fr)"
                        : "repeat(4, 1fr)",
                      gap: "12px",
                    }}
                  >
                    {selectedProperty.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${selectedProperty.title} ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          cursor: "pointer",
                          border:
                            selectedImageIndex === index
                              ? `3px solid #3b82f6`
                              : "none",
                        }}
                        onClick={() => setSelectedImageIndex(index)}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/300x200/3b82f6/ffffff?text=Image+${
                            index + 1
                          }`;
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* VIRTUAL TOUR */}
              {selectedProperty.virtualTour === "3D" && (
                <div style={{ marginBottom: "30px" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                    Virtual Tour
                  </h3>
                  <div
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      padding: "40px",
                      borderRadius: "16px",
                      textAlign: "center",
                      border: `2px dashed ${darkMode ? "#4b5563" : "#d1d5db"}`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "60px",
                        marginBottom: "20px",
                        animation: "spin 4s linear infinite",
                      }}
                    >
                      🏠
                    </div>
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        color: darkMode ? "#f9fafb" : "#111827",
                      }}
                    >
                      3D Virtual Tour Available
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                        marginBottom: "20px",
                      }}
                    >
                      Interactive 3D walkthrough coming soon
                    </div>
                    <button
                      style={{
                        padding: "12px 24px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "14px",
                        backgroundColor: "#8b5cf6",
                        color: "white",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                      onClick={() =>
                        alert("3D Virtual Tour will be available soon!")
                      }
                    >
                      Launch 3D Tour
                    </button>
                  </div>
                </div>
              )}

              {/* DESCRIPTION */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                  Description
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.6",
                    color: darkMode ? "#d1d5db" : "#4b5563",
                  }}
                >
                  {selectedProperty.description}
                </p>
              </div>

              {/* PROPERTY DETAILS */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                  Property Details
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile
                      ? "repeat(2, 1fr)"
                      : "repeat(4, 1fr)",
                    gap: "16px",
                    backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                    padding: "24px",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#3b82f6",
                      }}
                    >
                      {selectedProperty.bedrooms}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                      }}
                    >
                      Bedrooms
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#3b82f6",
                      }}
                    >
                      {selectedProperty.bathrooms}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                      }}
                    >
                      Bathrooms
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#3b82f6",
                      }}
                    >
                      {selectedProperty.sqft.toLocaleString()}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                      }}
                    >
                      Square Feet
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: "bold",
                        color: "#8b5cf6",
                      }}
                    >
                      {calculateAIPropertyScore(selectedProperty)}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: darkMode ? "#9ca3af" : "#6b7280",
                      }}
                    >
                      AI Score
                    </div>
                  </div>
                </div>
              </div>

              {/* AMENITIES */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                  Amenities & Features
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile
                      ? "1fr"
                      : "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {selectedProperty.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "12px",
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        borderRadius: "8px",
                      }}
                    >
                      <CheckCircle size={16} color="#10b981" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AGENT DETAILS */}
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "16px" }}>
                  Agent Information
                </h3>
                <div
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                    padding: "24px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "24px",
                    }}
                  >
                    {selectedProperty.agent
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: "0 0 8px 0", fontSize: "20px" }}>
                      {selectedProperty.agentDetails.name}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Phone
                          size={16}
                          color={darkMode ? "#9ca3af" : "#6b7280"}
                        />
                        <span
                          style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
                        >
                          {selectedProperty.agentDetails.phone}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Mail
                          size={16}
                          color={darkMode ? "#9ca3af" : "#6b7280"}
                        />
                        <span
                          style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
                        >
                          {selectedProperty.agentDetails.email}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <Star size={16} color="#f59e0b" fill="#f59e0b" />
                        <span style={{ fontWeight: "bold" }}>
                          {selectedProperty.agentDetails.rating}/5
                        </span>
                      </div>
                      <div style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}>
                        {selectedProperty.agentDetails.dealsClosed} deals closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  style={{
                    flex: isMobile ? "1 0 100%" : 1,
                    padding: "16px 24px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    minWidth: "200px",
                  }}
                  onClick={() =>
                    alert(
                      `Scheduling viewing for ${selectedProperty.title}\nAgent: ${selectedProperty.agent}\nPhone: ${selectedProperty.agentDetails.phone}`,
                    )
                  }
                >
                  <Calendar size={20} /> Schedule Viewing
                </button>
                <button
                  style={{
                    flex: isMobile ? "1 0 100%" : 1,
                    padding: "16px 24px",
                    borderRadius: "10px",
                    border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    backgroundColor: darkMode ? "#374151" : "white",
                    color: darkMode ? "#d1d5db" : "#6b7280",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    minWidth: "200px",
                  }}
                  onClick={() => {
                    openMortgageCalculator(selectedProperty);
                    setSelectedProperty(null);
                  }}
                >
                  <Calculator size={20} /> Calculate Mortgage
                </button>
                <button
                  style={{
                    flex: isMobile ? "1 0 100%" : "none",
                    padding: "16px 24px",
                    borderRadius: "10px",
                    border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                    backgroundColor: darkMode ? "#374151" : "white",
                    color: darkMode ? "#d1d5db" : "#6b7280",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                  onClick={() => toggleSavedProperty(selectedProperty.id)}
                >
                  <Heart
                    size={20}
                    color={
                      savedProperties.includes(selectedProperty.id)
                        ? "#ef4444"
                        : darkMode
                          ? "#9ca3af"
                          : "#6b7280"
                    }
                    fill={
                      savedProperties.includes(selectedProperty.id)
                        ? "#ef4444"
                        : "none"
                    }
                  />
                  {savedProperties.includes(selectedProperty.id)
                    ? "Saved"
                    : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MORTGAGE CALCULATOR MODAL */}
      {mortgageCalcOpen && selectedPropertyForMortgage && (
        <MortgageCalculatorModal
          property={selectedPropertyForMortgage}
          darkMode={darkMode}
          mortgageCalc={mortgageCalc}
          setMortgageCalc={setMortgageCalc}
          onClose={() => setMortgageCalcOpen(false)}
          mortgageCalculation={mortgageCalculation}
          formatPrice={formatPrice}
        />
      )}

      {/* COMPARISON MODAL */}
      {compareProperties.length >= 2 && (
        <ComparisonModal
          properties={propertiesData.filter((p) =>
            compareProperties.includes(p.id),
          )}
          onClose={() => setCompareProperties([])}
          darkMode={darkMode}
        />
      )}

      {/* AI CHAT BUTTON */}
      <button
        onClick={() => setShowChat(!showChat)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.5)",
          zIndex: 900,
        }}
        aria-label="Open AI chat"
      >
        <Robot size={26} />
      </button>

      {/* AI CHAT MODAL */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "110px",
            right: "30px",
            width: isMobile ? "calc(100% - 60px)" : "380px",
            maxWidth: "380px",
            backgroundColor: darkMode ? "#1f2937" : "white",
            borderRadius: "20px",
            border: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
            boxShadow: "0 15px 50px rgba(0,0,0,0.2)",
            zIndex: 1000,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "20px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Cpu size={22} />
              <div>
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                  AI Assistant
                </div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>
                  Online • GPT-4 Powered
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowChat(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "4px",
              }}
              aria-label="Close chat"
            >
              <X size={22} />
            </button>
          </div>

          {/* QUICK SUGGESTIONS */}
          <div style={{ padding: "12px 20px 0 20px" }}>
            <div
              style={{
                fontSize: "12px",
                color: darkMode ? "#9ca3af" : "#6b7280",
                marginBottom: "8px",
              }}
            >
              Quick suggestions:
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {quickSuggestions
                .slice(0, isMobile ? 3 : 4)
                .map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setChatInput(suggestion);
                      sendChatMessage();
                    }}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "15px",
                      border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "#d1d5db" : "#4b5563",
                      fontSize: "12px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
            </div>
          </div>

          <div
            style={{
              height: "300px",
              overflowY: "auto",
              padding: "20px",
            }}
          >
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  marginBottom: "15px",
                  maxWidth: "85%",
                  padding: "14px 18px",
                  borderRadius:
                    msg.sender === "user"
                      ? "20px 20px 5px 20px"
                      : "20px 20px 20px 5px",
                  backgroundColor:
                    msg.sender === "user"
                      ? "#3b82f6"
                      : darkMode
                        ? "#374151"
                        : "#f3f4f6",
                  color:
                    msg.sender === "user"
                      ? "white"
                      : darkMode
                        ? "#f9fafb"
                        : "#111827",
                  marginLeft: msg.sender === "user" ? "auto" : "0",
                  marginRight: msg.sender === "user" ? "0" : "auto",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {msg.text}
              </div>
            ))}
            {isChatLoading && (
              <div
                style={{
                  marginBottom: "15px",
                  maxWidth: "85%",
                  padding: "14px 18px",
                  borderRadius: "20px 20px 20px 5px",
                  backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                  color: darkMode ? "#f9fafb" : "#111827",
                  marginRight: "auto",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Loader2
                  size={16}
                  style={{ animation: "spin 1s linear infinite" }}
                />
                Thinking...
              </div>
            )}
          </div>

          <div
            style={{
              padding: "20px",
              borderTop: `1px solid ${darkMode ? "#374151" : "#e5e7eb"}`,
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Ask about properties or market trends..."
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: "25px",
                  border: `1px solid ${darkMode ? "#4b5563" : "#d1d5db"}`,
                  backgroundColor: darkMode ? "#374151" : "white",
                  color: darkMode ? "#f9fafb" : "#111827",
                  fontSize: "14px",
                }}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
              />
              <button
                onClick={sendChatMessage}
                style={{
                  padding: "14px 20px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                disabled={isChatLoading}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
