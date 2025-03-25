"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import img1 from "@/components/images/contactus.svg";
import imgmobile from "@/components/images/contactus.svg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Update the handleSubmit function in your contact page
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: `Failed to send message: ${data.error || "Please try again later."}`,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Background image for mobile */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={imgmobile || "/placeholder.svg"}
          alt="Mobile Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Left side - Image (desktop only) */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={img1 || "/placeholder.svg"}
          alt="Modern Office Building"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-12 relative">
        {/* Mobile layout wrapper to ensure content fits on screen */}
        <div className="max-w-md mx-auto md:h-auto h-full flex flex-col">
          {/* Header with title and back button */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-black">
              Contact Us
            </h1>
            <Link
              href="/"
              className="flex items-center gap-1 text-[#9E865E] bg-amber-50 hover:bg-[#9E865E] hover:bg-opacity-15 px-3 py-1 rounded-full text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>

          {/* Contact info */}
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            You can reach us anytime via{" "}
            <span className="text-[#2E466D] font-medium">info@gctgroup.ng</span>
          </p>

          {/* Contact form - using flex-1 to distribute space */}
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 flex-1 flex flex-col">
            <div className="space-y-1 md:space-y-2">
              <label className="text-sm text-gray-700">Name</label>
              <Input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 md:py-3 rounded-xl border border-gray-200 bg-white text-black placeholder:text-gray-500"
                required
              />
             
            </div>

            <div className="space-y-1 md:space-y-2">
              <label className="text-sm text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 md:py-3 rounded-xl border border-gray-200 bg-white text-black placeholder:text-gray-500"
                required
              />
              
            </div>

            <div className="space-y-1 md:space-y-2">
              <label className="text-sm text-gray-700">Phone number</label>
              <div className="flex">
                <select className="rounded-l-xl border border-r-0 border-gray-200 bg-white text-black">
                  <option>NG</option>
                  <option>NG</option>
                </select>
                <Input
                  type="tel"
                  placeholder="+234 -000-0000"
                  className="rounded-l-none rounded-r-xl flex-1 px-4 py-2 md:py-3 border border-gray-200 bg-white text-black placeholder:text-gray-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
             
            </div>

            <div className="space-y-1 md:space-y-2">
              <label className="text-sm text-gray-700">Message</label>
              <Textarea
                placeholder="What would you like to say"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 md:py-3 rounded-xl border border-gray-200 bg-white text-black placeholder:text-gray-500"
                required
              />

            </div>

            {/* Status message */}
            {submitStatus.type && (
              <div 
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success" 
                    ? "bg-green-50 text-green-800 border border-green-200" 
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* The button is now part of the form but positioned at the bottom */}
            <div className="mt-auto pt-4">
              <Button
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#2E466D] hover:bg-[#2E466D]/90 text-white py-2 md:py-3 rounded-xl"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}