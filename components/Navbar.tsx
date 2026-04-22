"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nextLogo from "../assets/nextIcon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F5F7FA] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={nextLogo} alt="logo" width={30} height={30} />
          <h1 className="text-2xl font-semibold text-gray-900">
            Nexcent
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link href="/" >Home</Link></li>
          <li><Link href="/services">Service</Link></li>
          <li><Link href="/feature">Feature</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/testimonial">Testimonial</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/" className="text-[#4CAF4F] font-medium">
            Login
          </Link>
          <Link
            href="/"
            className="bg-[#4CAF4F] text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Service</Link></li>
            <li><Link href="/">Feature</Link></li>
            <li><Link href="/">Product</Link></li>
            <li><Link href="/">Testimonial</Link></li>
            <li><Link href="/">FAQ</Link></li>
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <Link href="/" className="text-green-500 font-medium">
              Login
            </Link>
            <Link
              href="/"
              className="bg-green-500 text-white px-4 py-2 rounded-md text-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}