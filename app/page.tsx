import React from "react";
import Link from "next/link";
import { Home, Search, Shield, MapPin, Mail, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Real Estate made easy
          </Link>
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium border-b-2 border-blue-600"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Properties
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 font-medium px-4 py-2">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0a192f] text-white py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-black mb-6">Find Your Dream Home</h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl">
            Browse thousands of properties for sale and rent. Find the perfect
            place to call home.
          </p>
          <div className="flex gap-4">
            <Link
              href="/signup"
              className="bg-white text-blue-900 px-8 py-3 rounded font-bold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <Link
              href="/properties"
              className="border border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            Features
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-16 text-slate-900">
            Why choose our platform
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="flex gap-4">
              <div className="bg-blue-500 p-3 rounded-lg h-fit">
                <Home className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
                <p className="text-gray-500 leading-relaxed">
                  Browse thousands of properties across different cities and
                  neighborhoods.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-500 p-3 rounded-lg h-fit">
                <Search className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Search</h3>
                <p className="text-gray-500 leading-relaxed">
                  Find your perfect home with our advanced search and filtering
                  options.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-500 p-3 rounded-lg h-fit">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Secure</h3>
                <p className="text-gray-500 leading-relaxed">
                  Your data and transactions are protected with
                  industry-standard security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">Ready to get started?</h2>
            <p className="text-4xl font-black opacity-80">
              Create your account today.
            </p>
          </div>
          <Link
            href="/signup"
            className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a202c] text-gray-400 py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-6">RealEstate</h3>
            <p className="leading-relaxed">
              Find your dream home with our real estate platform. Browse
              thousands of properties for sale and rent.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="hover:text-white transition"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-white transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} /> 123 Real Estate Street, City, State 12345
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} /> info@realestate.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} /> (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-700 text-center text-sm">
          © RealEstate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
