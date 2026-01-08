"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserSquare2,
  Home,
  BarChart3,
  FileText,
  PieChart,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Determine user role based on path for the demo
  const isManager = pathname.includes("/manager");
  const isAdmin = pathname.includes("/admin");
  const isAgent = pathname.includes("/agent");

  const navigation = [
    { name: "Overview", href: pathname, icon: LayoutDashboard },
    {
      name: isManager
        ? "Agent Management"
        : isAdmin
        ? "Users"
        : "My Properties",
      href: "#",
      icon: UserSquare2,
    },
    { name: "Properties", href: "#", icon: Home },
    { name: "Performance", href: "#", icon: BarChart3 },
    { name: "Reports", href: "#", icon: FileText },
    { name: "Analytics", href: "#", icon: PieChart },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col fixed h-full z-50`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600">
                RealEstate
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Management Portal
              </span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon
                size={20}
                className={isSidebarOpen ? "mr-3" : "mx-auto"}
              />
              {isSidebarOpen && (
                <span className="font-medium">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center w-full p-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
            <LogOut size={20} className={isSidebarOpen ? "mr-3" : "mx-auto"} />
            {isSidebarOpen && <span className="font-medium">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-gray-200 mx-2"></div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">
                  {isAdmin
                    ? "Admin User"
                    : isManager
                    ? "Manager User"
                    : "Sarah Johnson"}
                </p>
                <p className="text-xs text-gray-500">
                  {isAdmin
                    ? "System Admin"
                    : isManager
                    ? "Management"
                    : "Real Estate Agent"}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {isAdmin ? "A" : isManager ? "M" : "SJ"}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
