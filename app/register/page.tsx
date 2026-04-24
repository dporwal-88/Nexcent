"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../assets/nextIcon.png";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ✅ Auto redirect after successful registration
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 1500); // 1.5 sec delay

      return () => clearTimeout(timer);
    }
  }, [success, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      // ❌ User already exists → redirect to login
      if (!res.ok) {
        if (
          data.message?.toLowerCase().includes("already") ||
          data.message?.toLowerCase().includes("exist")
        ) {
          alert("User already exists. Redirecting to login...");
          router.push("/login");
        } else {
          alert(data.message || "Something went wrong");
        }
        return;
      }

      // ✅ Success → trigger auto redirect
      setSuccess(true);

    } catch (err) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔥 Background Blur */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"></div>

      {/* 🔥 Register Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">

        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src={logo} alt="logo" width={50} height={50} />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Nexcent
          </h1>

          <p className="text-center text-gray-500 mt-1 mb-6">
            Create your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
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

          {/* Login redirect */}
          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-green-600 cursor-pointer font-medium hover:underline"
            >
              Login
            </span>
          </p>

        </div>
      </div>

      {/* ✅ Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-[60]">

          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          <div className="relative bg-white p-6 rounded-xl shadow-xl text-center w-[320px]">

            <h2 className="text-lg font-semibold text-gray-800">
              Registered Successfully 🎉
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Redirecting to home...
            </p>

          </div>
        </div>
      )}
    </>
  );
}