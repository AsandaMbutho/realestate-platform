"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "client",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store user data (in real app, send to backend)
    const userData = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("newUser", JSON.stringify(userData));

    // Redirect to login
    router.push("/login?message=Account created successfully! Please login.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#081A3C]">Client Sign Up</h2>
          <p className="text-gray-600 mt-2">
            Create your account to browse properties
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              required
              minLength={6}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1F4EA3] focus:border-transparent"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <input type="hidden" name="role" value="client" />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1F4EA3] text-white py-3 rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Client Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#1F4EA3] font-medium hover:underline"
            >
              Sign in here
            </Link>
          </p>

          <div className="mt-6 pt-6 border-t">
            <p className="text-sm text-gray-500 mb-3">
              Want to test other dashboards?
            </p>
            <Link
              href="/login"
              className="inline-block border border-[#1F4EA3] text-[#1F4EA3] px-4 py-2 rounded-lg text-sm hover:bg-blue-50"
            >
              Use Demo Accounts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
