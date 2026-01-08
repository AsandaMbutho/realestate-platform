"use client";

import React, { useState, useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
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
} from "lucide-react";

const propertiesData = [
  {
    id: 1,
    title: "Modern Family Home with Pool",
    address: "123 Main Street, Hyde Park, Johannesburg",
    description:
      "Beautiful modern family home with pool and garden. Perfect for families looking for space and comfort.",
    price: 2500000,
    priceFormatted: "R 2 500 000",
    beds: 4,
    baths: 3,
    size: "250m²",
    type: "House",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    tags: ["Swimming Pool", "Large Garden", "Double Garage"],
  },
  {
    id: 2,
    title: "Luxury Sandton Apartment",
    address: "456 Oak Avenue, Sandton, Johannesburg",
    description:
      "Stunning luxury apartment in the heart of Sandton with panoramic city views.",
    price: 1200000,
    priceFormatted: "R 1 200 000",
    beds: 2,
    baths: 2,
    size: "85m²",
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    tags: ["City Views", "Swimming Pool", "Fitness Center"],
  },
  {
    id: 3,
    title: "Waterfront Luxury Villa",
    address: "321 Coastal Road, Umhlanga, Durban",
    description:
      "Magnificent waterfront villa with private beach access and expansive living areas.",
    price: 8500000,
    priceFormatted: "R 8 500 000",
    beds: 5,
    baths: 4,
    size: "450m²",
    type: "House",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    tags: ["Ocean Views", "Private Beach", "Infinity Pool"],
  },
  {
    id: 4,
    title: "Cape Town Beach Cottage",
    address: "78 Ocean Drive, Camps Bay",
    description:
      "Cozy beach cottage with incredible sunset views and direct beach access.",
    price: 4200000,
    priceFormatted: "R 4 200 000",
    beds: 3,
    baths: 2,
    size: "180m²",
    type: "House",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800",
    tags: ["Beachfront", "Deck", "Solar"],
  },
  {
    id: 5,
    title: "Executive Penthouse",
    address: "101 Skyline Way, Pretoria",
    description:
      "Ultra-modern penthouse with smart home features and 360-degree city views.",
    price: 3800000,
    priceFormatted: "R 3 800 000",
    beds: 3,
    baths: 3,
    size: "210m²",
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    tags: ["Concierge", "Gym", "Private Lift"],
  },
  {
    id: 6,
    title: "Suburban Family Retreat",
    address: "55 Willow Lane, Randburg",
    description:
      "Quiet family home in a secure boomed-off area with a borehole and lush garden.",
    price: 1850000,
    priceFormatted: "R 1 850 000",
    beds: 3,
    baths: 2,
    size: "220m²",
    type: "House",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800",
    tags: ["Secure", "Pet Friendly", "Borehole"],
  },
];

export default function ClientDashboard() {
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [beds, setBeds] = useState("Any Beds");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredProperties = useMemo(() => {
    let result = propertiesData.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType =
        propertyType === "All Types" || p.type === propertyType;
      const matchesBeds = beds === "Any Beds" || p.beds >= parseInt(beds);
      const matchesMinPrice = !minPrice || p.price >= parseInt(minPrice);
      const matchesMaxPrice = !maxPrice || p.price <= parseInt(maxPrice);
      return (
        matchesSearch &&
        matchesType &&
        matchesBeds &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    // Integrated Sorting Functionality
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else {
      result.sort((a, b) => b.id - a.id); // Newest
    }

    return result;
  }, [searchTerm, propertyType, beds, minPrice, maxPrice, sortBy]);

  const clearFilters = () => {
    setSearchTerm("");
    setPropertyType("All Types");
    setBeds("Any Beds");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("Newest");
  };

  return (
    <div className="flex-1 min-h-screen bg-[#f8f9fa] p-4 md:p-8">
      {/* Premium Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest">
              System Active
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1a202c] tracking-tight">
            Client Property Portal
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            Discovering{" "}
            <span className="text-blue-600 font-bold">
              {filteredProperties.length}
            </span>{" "}
            curated matches for you
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-lg border border-gray-100 shadow-sm">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          <div className="flex items-center gap-3 pl-5 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900 leading-none mb-1">
                {session?.user?.name || "Premium Client"}
              </p>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-tighter">
                Diamond Member
              </p>
            </div>
            <div className="w-11 h-11 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white ring-4 ring-white shadow-md overflow-hidden transition-transform hover:scale-105">
              {session?.user?.image ? (
                <img src={session.user.image} alt="User" />
              ) : (
                <span className="font-bold text-lg">
                  {session?.user?.name?.[0] || "C"}
                </span>
              )}
            </div>
            <button
              onClick={() => signOut()}
              className="p-2.5 text-gray-400 hover:text-red-500 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Modern Smart Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by area, suburb or property name..."
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5 rounded-xl text-sm transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-9 pr-3 py-3 bg-gray-50 border-none rounded-xl text-xs font-bold text-gray-600 outline-none appearance-none hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
              </select>
            </div>

            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl text-xs font-bold text-gray-600 outline-none hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <option>Any Beds</option>
              <option value="1">1+ Bedrooms</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>

            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-9 pr-3 py-3 bg-gray-50 border-none rounded-xl text-xs font-bold text-gray-900 outline-none hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <button
              onClick={clearFilters}
              className="w-full py-3 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all transform active:scale-95"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  alt={property.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md ${
                      property.type === "House"
                        ? "bg-green-500/80"
                        : "bg-blue-500/80"
                    }`}
                  >
                    {property.type}
                  </span>
                  {property.price > 5000000 && (
                    <span className="bg-amber-400/90 px-3 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-md">
                      Luxury Elite
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-2xl font-black tracking-tight">
                    {property.priceFormatted}
                  </p>
                </div>

                <button className="absolute top-4 right-4 bg-white/20 hover:bg-white backdrop-blur-md p-2.5 rounded-2xl text-white hover:text-red-500 transition-all shadow-lg active:scale-90">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-400 text-xs flex items-center gap-1.5 mb-5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />{" "}
                  {property.address}
                </p>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-gray-50 mb-4">
                  <div className="flex flex-col items-center">
                    <Bed className="w-4 h-4 text-blue-600 mb-1" />
                    <span className="text-xs font-bold text-gray-900">
                      {property.beds} Beds
                    </span>
                  </div>
                  <div className="flex flex-col items-center border-x border-gray-100">
                    <Bath className="w-4 h-4 text-blue-600 mb-1" />
                    <span className="text-xs font-bold text-gray-900">
                      {property.baths} Baths
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Maximize className="w-4 h-4 text-blue-600 mb-1" />
                    <span className="text-xs font-bold text-gray-900">
                      {property.size}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {property.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-50 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-lg border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] text-blue-600 font-bold px-1 py-1">
                    +2 more
                  </span>
                </div>

                <button className="w-full py-3.5 bg-gray-900 hover:bg-blue-600 text-white rounded-2xl text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn">
                  View Property Details
                  <CheckCircle2 className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-gray-200">
            <Search className="w-12 h-12 text-gray-200 mb-4" />
            <h3 className="text-lg font-bold text-gray-900">
              No properties matched your search
            </h3>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or clearing your search.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 text-blue-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
