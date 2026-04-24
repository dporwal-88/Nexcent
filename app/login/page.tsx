"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/nextIcon.png";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login successful ✅");
      localStorage.setItem("token", data.data.token);

      // 👉 redirect after login
      window.location.href = "/";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fa] px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* GOOGLE LOGIN */}
        <button
            onClick={() => signIn("google")}
            className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
            >
            <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
            />
            Continue with Google
        </button>

        {/* REGISTER REDIRECT */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          New here?{" "}
          <Link
            href="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}