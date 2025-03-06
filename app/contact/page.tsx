"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import img1 from "@/components/images/contactus.svg"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "support@gctgroup.ng",
        }),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image src={img1 || "/placeholder.svg"} alt="Modern Office Building" fill className="object-cover" priority />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 relative">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-[#B89D5B] bg-[#F5F2EA] hover:bg-[#F0EBE0] px-6 py-3 rounded-lg text-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
          </div>

          <p className="text-gray-600 mb-8">
            You can reach us anytime via <span className="text-[#2E466D] font-medium">info@gctgroup.ng</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-gray-200"
              required
            />

            <Input
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-gray-200"
              required
            />

            <div className="flex">
              <select className="rounded-l-md border border-r-2 border-gray-200 bg-white px-3 py-3 text-sm w-20">
                <option>NG</option>
                <option>NG</option>
              </select>
              <Input
                type="tel"
                placeholder="+234 000-0000"
                className="rounded-l-none rounded-r-md flex-1 px-4 py-3 border-r-2 border-gray-200"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <Textarea
              placeholder="What would you like to say"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-gray-200"
              required
            />

            <Button 
              type="submit" 
              className="w-full bg-[#2E466D] hover:bg-[#2E466D]/90 text-white py-3 rounded-md border-r-3 border-[#2E466D]"
            >
              Get started
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}