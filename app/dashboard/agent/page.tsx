import React from "react";
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
} from "lucide-react";

const AgentDashboard = () => {
  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen font-sans">
      {/* Header Section Card */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 leading-tight">
            Agent Dashboard
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Real-time tracking & client management
          </p>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-lg border border-emerald-100 font-semibold hover:bg-emerald-100 transition-colors text-sm">
            <CheckCircle2 size={18} />
            Checked In ✓
          </button>

          <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
            <div className="bg-blue-600 p-2 rounded-full text-white">
              <User size={20} />
            </div>
            <div className="text-sm">
              <p className="font-bold text-slate-800">John Smith</p>
              <button className="text-slate-400 hover:text-slate-600 text-xs">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Commission"
          value="R 452 300"
          change="+12% this month"
          icon={<span className="text-emerald-500 font-bold text-xl">R</span>}
          trend="up"
        />
        <MetricCard
          title="Target Progress"
          value="21%"
          change="R 125 000 of R 600 000"
          icon={<Target className="text-blue-500" size={24} />}
          trend="neutral"
        />
        <MetricCard
          title="Deals Closed"
          value="18"
          change="Rank: Top 10%"
          icon={<Trophy className="text-purple-500" size={24} />}
          trend="up"
        />
        <MetricCard
          title="Current Location"
          value="Sandton CBD,"
          change="Johannesburg"
          icon={<MapPin className="text-orange-500" size={24} />}
          subIcon={<TrendingUp className="text-orange-500 ml-1" size={16} />}
          trend="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Properties & Schedule */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* My Properties Table */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-6">
              My Properties
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-xs uppercase tracking-wider border-b border-slate-50">
                    <th className="pb-4 font-semibold">Property</th>
                    <th className="pb-4 font-semibold">Location</th>
                    <th className="pb-4 font-semibold">Price</th>
                    <th className="pb-4 font-semibold">Status</th>
                    <th className="pb-4 font-semibold text-right">Views</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <PropertyRow
                    name="Luxury Apartment"
                    location="Sandton"
                    price="R 2 500 000"
                    status="Active"
                    views="156"
                  />
                  <PropertyRow
                    name="Modern Penthouse"
                    location="Sandton City"
                    price="R 4 200 000"
                    status="Under Offer"
                    views="89"
                  />
                  <PropertyRow
                    name="Executive Villa"
                    location="Morningside"
                    price="R 18 500 000"
                    status="Active"
                    views="203"
                  />
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm">
                Add New Listing
              </button>
              <button className="flex-1 border border-slate-200 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors text-sm">
                View All Properties
              </button>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">
                Today's Schedule
              </h2>
              <Calendar className="text-slate-300" size={20} />
            </div>
            <div className="flex flex-col gap-4">
              <ScheduleItem
                title="Property Viewing"
                person="John Doe"
                location="Sandton Apartment"
                time="10:00 AM"
              />
              <ScheduleItem
                title="Contract Signing"
                person="Jane Smith"
                location="Morningside Villa"
                time="2:00 PM"
              />
              <ScheduleItem
                title="Initial Consultation"
                person="Mike Johnson"
                location="Virtual Meeting"
                time="4:30 PM"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Messages, Metrics & Actions */}
        <div className="flex flex-col gap-8">
          {/* Client Messages */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800">
                Client Messages
              </h2>
              <span className="bg-red-50 text-red-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                1 unread
              </span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[#eff6ff] rounded-xl border border-blue-100">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-slate-900 text-sm">
                    Mike Johnson
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    9:30 AM
                  </span>
                </div>
                <p className="text-slate-600 text-xs mb-3 leading-relaxed">
                  When can we view the Sandton apartment?
                </p>
                <div className="flex gap-3 text-[11px]">
                  <button className="text-blue-700 font-bold hover:underline">
                    Reply
                  </button>
                  <button className="text-slate-500 hover:text-slate-700">
                    View Property
                  </button>
                </div>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-slate-800 text-sm">
                    Sarah Wilson
                  </span>
                  <span className="text-[10px] text-slate-400">Yesterday</span>
                </div>
                <p className="text-slate-500 text-xs">
                  I've signed the documents, please check
                </p>
              </div>

              <textarea
                className="w-full border border-slate-200 rounded-xl p-3 text-xs text-slate-600 h-20 focus:ring-2 focus:ring-blue-100 outline-none resize-none bg-slate-50/50"
                placeholder="Type your message to client..."
              />
              <button className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm">
                Send Message
              </button>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-6">
              Performance Metrics
            </h2>
            <div className="space-y-6">
              <PerformanceBar
                label="Conversion Rate"
                value="28%"
                color="bg-emerald-500"
              />
              <PerformanceBar
                label="Client Satisfaction"
                value="4.8/5"
                percent={90}
                color="bg-blue-600"
              />
              <PerformanceBar
                label="Response Time"
                value="12 min"
                percent={80}
                color="bg-purple-500"
              />

              <div className="flex items-center gap-4 p-4 bg-amber-50/50 rounded-xl border border-amber-100 mt-2">
                <div className="text-amber-500">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Monthly Bonus
                  </h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    On track for R 15 000 bonus
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <ActionButton
                icon={<BarChart3 className="text-blue-600" />}
                label="Commission Report"
              />
              <ActionButton
                icon={<Calendar className="text-emerald-500" />}
                label="Schedule"
              />
              <ActionButton
                icon={<MessageSquare className="text-purple-500" />}
                label="New Message"
              />
              <ActionButton
                icon={<MapPin className="text-red-500" />}
                label="Update Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Sub-components */

const MetricCard = ({ title, value, change, icon, subIcon, trend }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-blue-200 transition-all">
    <div className="flex justify-between items-start mb-4">
      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
        {title}
      </p>
      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-white transition-colors">
        {icon}
      </div>
    </div>
    <div className="flex items-baseline gap-1">
      <h3 className="text-2xl font-black text-slate-900">{value}</h3>
      {subIcon}
    </div>
    <p
      className={`text-[11px] mt-1 font-bold ${
        trend === "up" ? "text-emerald-500" : "text-blue-500"
      }`}
    >
      {change}
    </p>
  </div>
);

const PropertyRow = ({ name, location, price, status, views }: any) => (
  <tr className="border-b border-slate-50 text-sm hover:bg-slate-50/50 transition-colors">
    <td className="py-4 font-bold text-slate-800">{name}</td>
    <td className="py-4 text-slate-400 font-medium">{location}</td>
    <td className="py-4 font-black text-[#1e40af]">{price}</td>
    <td className="py-4">
      <span
        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          status === "Active"
            ? "bg-emerald-50 text-emerald-600"
            : "bg-amber-50 text-amber-600"
        }`}
      >
        {status}
      </span>
    </td>
    <td className="py-4 text-right text-slate-400 font-medium flex items-center justify-end gap-1.5">
      <Clock size={12} className="opacity-50" /> {views}
    </td>
  </tr>
);

const ScheduleItem = ({ title, person, location, time }: any) => (
  <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:border-blue-200 transition-all flex justify-between items-center group">
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-slate-800 text-sm tracking-tight">
          {title}
        </h4>
        <span className="text-[10px] bg-slate-50 text-slate-400 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
          <Clock size={10} /> {time}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
          <User size={12} className="text-blue-400" /> {person}
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
          <MapPin size={12} className="text-slate-300" /> {location}
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      <button className="h-9 px-4 flex items-center gap-1.5 border border-blue-100 text-blue-600 bg-blue-50/50 rounded-lg text-xs font-bold hover:bg-blue-50 transition-colors">
        <Phone size={12} /> Call
      </button>
      <button className="h-9 px-3 border border-slate-100 text-slate-400 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
        Reschedule
      </button>
    </div>
  </div>
);

const PerformanceBar = ({ label, value, percent, color }: any) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-xs font-bold text-slate-700">{label}</span>
      <span className={`text-xs font-black ${color.replace("bg-", "text-")}`}>
        {value}
      </span>
    </div>
    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
      <div
        className={`${color} h-full transition-all duration-700`}
        style={{ width: percent ? `${percent}%` : value }}
      />
    </div>
  </div>
);

const ActionButton = ({ icon, label }: any) => (
  <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl aspect-square gap-3 hover:bg-blue-50/30 hover:border-blue-200 transition-all group bg-white shadow-sm">
    <div className="group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <span className="text-[10px] font-bold text-slate-600 text-center leading-tight">
      {label}
    </span>
  </button>
);

export default AgentDashboard;
