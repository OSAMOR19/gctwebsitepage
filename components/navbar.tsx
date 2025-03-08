"use client"
import Logo from "@/components/images/GCTlogo.svg"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Navbar({ className = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: "About us", href: "/#about-us" },
    { name: "Achievements", href: "/#achievements" },
    { name: "Vision", href: "/#vision" },
    { name: "Mission", href: "/#mission" },
    { name: "Goals", href: "/#goals" },
    { name: "Values", href: "/#values" },
    { name: "Divisions", href: "/#divisions" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Smooth scrolling function
  const smoothScroll = (target: string) => {
    const element = document.querySelector(target)
    if (!element) return

    const headerOffset = 80 // Adjust based on navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })

    setIsMenuOpen(false) // Close menu after click
  }

  return (
    <nav className={`w-full z-50 absolute top-0 left-0 transition-all ${className}`}>
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-28">
              <Image src={Logo || "/placeholder.svg"} alt="GCT Logo" width={112} height={40} />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (only visible on large screens) */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScroll(item.href)
                }}
                className="relative text-white transition-all duration-300 ease-in-out pb-1 
                           hover:scale-105 hover:after:w-full after:w-0 after:h-[2px] 
                           after:bg-secondary after:absolute after:left-0 after:bottom-0 
                           after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-white transition-all duration-300 ease-in-out pb-1 
                           hover:scale-105 hover:after:w-full after:w-0 after:h-[2px] 
                           after:bg-secondary after:absolute after:left-0 after:bottom-0 
                           after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Navigation Toggle (visible on tablets & smaller screens) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#D4AF37] focus:outline-none relative z-[60]"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ease-in-out z-[51] ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 right-0 h-full w-[280px] bg-[#F5F5F5] shadow-lg lg:hidden z-[55]"
      >
        <div className="h-full flex flex-col justify-center">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  smoothScroll(item.href)
                }}
                className="py-4 px-6 text-gray-900 text-base"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="py-4 px-6 text-gray-900 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </motion.div>
    </nav>
  )
}
