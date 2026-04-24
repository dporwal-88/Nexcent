"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="bg-[#f5f7fa] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-500 mb-6">
          Have questions? Send us a message and we’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}