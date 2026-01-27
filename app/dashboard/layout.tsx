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
    <div className="min-h-screen bg-gray-50">
      {/* REMOVED: Entire Sidebar */}
      
      {/* Main Content - No margin needed since sidebar is gone */}
      <main className="ml-0">
        {/* Header - Keep this part */}
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
