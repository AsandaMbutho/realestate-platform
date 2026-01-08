"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    const savedEmail = localStorage.getItem("last_login_email");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (rememberMe) {
      localStorage.setItem("last_login_email", email);
    } else {
      localStorage.removeItem("last_login_email");
    }

    // SIMPLE HARDCODED LOGIN - NO NEXT AUTH
    const validUsers = {
      "admin@realestate.com": { role: "admin", name: "Admin User" },
      "agent@realestate.com": { role: "agent", name: "Agent Smith" },
      "manager@realestate.com": { role: "manager", name: "Manager User" },
      "client@realestate.com": { role: "client", name: "Client User" },
    };

    // Accept ANY email that matches the pattern
    const userKey = Object.keys(validUsers).find(
      (key) => key.toLowerCase() === email.toLowerCase()
    );

    if (
      userKey &&
      validUsers[userKey as keyof typeof validUsers].role === role
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: userKey,
          name: validUsers[userKey as keyof typeof validUsers].name,
          role: role,
        })
      );

      setTimeout(() => {
        router.push(`/dashboard/${role}`);
      }, 800);
    } else {
      setError("Invalid portal selection. Email can be anything.");
      setLoading(false);
    }
  };

  // USE THE EXACT SAME JSX FROM BEFORE - just change the form handler
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-[#081A3C]">
      <div className="w-full max-w-[450px]">
        {/* Brand Identity */}
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4">
            <div className="w-12 h-12 bg-[#1F4EA3] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl uppercase tracking-tighter">
                RE
              </span>
            </div>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Access Portal
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 p-10 md:p-12">
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-2xl mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 ml-1 text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent transition-all outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@realestate.com"
              />
              <p className="text-xs text-slate-500 mt-1 ml-1">
                Use: admin@realestate.com, agent@realestate.com, etc.
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 ml-1 text-slate-700">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent transition-all outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <p className="text-xs text-slate-500 mt-1 ml-1">
                Password can be anything
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 ml-1 text-slate-700">
                Portal Type
              </label>
              <div className="relative">
                <select
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent transition-all outline-none appearance-none pr-12 cursor-pointer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="client">Client Portal</option>
                  <option value="agent">Agent Workspace</option>
                  <option value="manager">Management Suite</option>
                  <option value="admin">System Administration</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-[#1F4EA3] focus:ring-[#1F4EA3] cursor-pointer"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-sm font-semibold text-slate-600">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-sm font-bold text-[#1F4EA3]"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1F4EA3] text-white py-4 rounded-2xl hover:bg-[#163a7a] font-bold disabled:opacity-70 flex items-center justify-center gap-3 mt-4"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* QUICK LOGIN BUTTONS */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setEmail("admin@realestate.com");
                setRole("admin");
              }}
              className="text-sm bg-slate-100 hover:bg-slate-200 py-2 rounded-xl"
            >
              Quick Admin
            </button>
            <button
              type="button"
              onClick={() => {
                setEmail("agent@realestate.com");
                setRole("agent");
              }}
              className="text-sm bg-slate-100 hover:bg-slate-200 py-2 rounded-xl"
            >
              Quick Agent
            </button>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm font-medium">
            New to the platform?{" "}
            <button className="text-[#1F4EA3] font-bold">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
