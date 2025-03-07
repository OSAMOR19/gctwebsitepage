"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Paperclip } from "lucide-react"
import img1 from "@/components/images/partner1.svg"
import img2 from "@/components/images/partner2.svg"
import Nav from "@/components/navbar"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null as File | null,
  })
  
  const [attachmentInfo, setAttachmentInfo] = useState("(0MB)")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value)
      })

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        alert("Application submitted successfully!")
        setFormData({ name: "", email: "", phone: "", message: "", resume: null })
        setAttachmentInfo("(0MB)")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, resume: file })
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1)
      setAttachmentInfo(`Attachment(${fileSizeMB}MB)`)
    }
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium mb-6">
            Become part of the <span className="text-[#B89D5B]">GCT</span> family
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
            Our goal is to foster a win-win relationship that is guided by good faith and motivated by shared
            objectives. We believe that education and training are essential to everyone's success and therefore, we
            strategically select the best talent within GCT to raise our standards of Quality, Safety, and Excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-medium mb-2">Join Our Team</h2>
            <p className="text-sm text-gray-500 mb-6">Apply Now</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border border-gray-200 rounded px-3 py-2 focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400 w-full"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm">Email</label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border border-gray-200 rounded px-3 py-2 focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400 w-full"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm">Phone number</label>
                <div className="flex">
                  <select className="border border-gray-200 rounded-l px-2 py-2 focus:ring-1 focus:ring-gray-300 text-sm bg-white">
                    
                    <option>NG</option>
                  </select>
                  <Input
                    type="tel"
                    placeholder="+234 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border border-gray-200 border-l-0 rounded-l-none rounded-r px-3 py-2 focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400 w-full"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm">Message</label>
                <Textarea
                  placeholder="What would you like to say"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border border-gray-200 rounded px-3 py-2 focus:ring-1 focus:ring-gray-300 resize-none placeholder:text-gray-400 w-full"
                  required
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Paperclip className="w-4 h-4" />
                <label htmlFor="resume" className="flex cursor-pointer hover:text-gray-700">
                  Attach Resume
                  <input
                    id="resume"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                </label>
                <span className="text-xs text-gray-400 ml-auto">{attachmentInfo}</span>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#2E466D] hover:bg-[#2E466D]/90 text-white py-3 rounded border border-[#2E466D]"
              >
                Get started
              </Button>
            </form>
          </div>

          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[450px] rounded-3xl overflow-hidden">
              <Image 
                src={img1 || "/placeholder.svg"} 
                alt="Transportation" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            <div className="relative h-[450px] rounded-3xl overflow-hidden">
              <Image 
                src={img2 || "/placeholder.svg"} 
                alt="Construction" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}