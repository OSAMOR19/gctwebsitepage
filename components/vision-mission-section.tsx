"use client";

import Image from "next/image"
import { useEffect, useState } from "react"
import ChevronDoubleLeftIcon from "@/components/images/Double-Left-Arrow.png"
import ChevronDoubleRightIcon from "@/components/images/Double-Right-Arrow.png"
import Big from "@/components/images/missionbig.svg"
import Img2 from "@/components/images/mission1.svg"
import Img3 from "@/components/images/mission2.svg"
import Img4 from "@/components/images/mission3.svg"
import Img5 from "@/components/images/mission4.svg"
import Img6 from "@/components/images/mission5.svg"
import Img7 from "@/components/images/mission6.svg"
import Img8 from "@/components/images/mission7.svg"

export default function VisionMissionSection() {
  // State to track window size
  const [windowWidth, setWindowWidth] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Update window width on client side
  useEffect(() => {
    setIsMounted(true)
    // Set initial width
    setWindowWidth(window.innerWidth)
    
    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate radius based on screen size
  const getRadius = () => {
    if (windowWidth >= 1024) return 260 // Large desktop
    if (windowWidth >= 640) return 220 // Tablet
    return 190 // Mobile
  }

  // Define the orbital images with their positions at different angles
  const orbitalImages = [
    { src: Img2, angle: 45 },
    { src: Img3, angle: 90 },
    { src: Img4, angle: 135 },
    { src: Img5, angle: 180 },
    { src: Img6, angle: 225 },
    { src: Img7, angle: 270 },
    { src: Img8, angle: 315 },
  ]

  // Default radius for SSR
  const defaultRadius = 190

  return (
    <section id="mission" className="relative py-20 px-6 bg-[#E0E0E1] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Vision Section */}
          <div className="lg:w-1/3 text-center lg:text-left animate-fadeInLeft">
            <div className="flex justify-center lg:justify-start mb-2">
              <Image src={ChevronDoubleLeftIcon} alt="Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>
            <h2 className="text-secondary text-3xl font-medium mb-4">Our Vision</h2>
            <p className="text-gray-800 text-center lg:text-left max-w-md mx-auto lg:mx-0 leading-relaxed">
              To be a transformative leader in the Nigerian business landscape, setting benchmarks of innovation, 
              reliability, and social impact across our core industries, while contributing to a prosperous and 
              sustainable future.
            </p>
          </div>

          {/* Center Image with Orbital Images - Modified for the circular layout */}
          <div className="relative flex justify-center w-full lg:w-1/3">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] mx-auto">
              {/* Main Central Image */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] overflow-hidden rounded-full shadow-xl">
                <Image
                  src={Big || "/placeholder.svg"}
                  alt="Mission Central"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  layout="fill"
                  priority
                />
              </div>

              {/* Orbital Images arranged further outside the central image */}
              {orbitalImages.map((img, index) => {
                const radius = isMounted ? getRadius() : defaultRadius
                const angleInRadians = (img.angle * Math.PI) / 180
                
                // Calculate positions based on the angle
                const x = `calc(50% + ${radius * Math.cos(angleInRadians)}px)`
                const y = `calc(50% + ${radius * Math.sin(angleInRadians)}px)`
                
                // Size classes for the satellite images
                const sizeClass = index % 3 === 0 ? "w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" : 
                                  index % 2 === 0 ? "w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20" : 
                                  "w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18";

                return (
                  <div
                    key={index}
                    className={`absolute ${sizeClass} transform -translate-x-1/2 -translate-y-1/2 animate-float z-10`}
                    style={{
                      left: x,
                      top: y,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={`Orbital image ${index + 1}`}
                        className="object-cover transition-transform duration-300 hover:scale-125"
                        layout="fill"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mission Section */}
          <div className="lg:w-1/3 text-center lg:text-right animate-fadeInRight">
            <div className="flex justify-center lg:justify-end mb-2">
              <Image src={ChevronDoubleRightIcon} alt="Icon" className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>
            <h2 className="text-secondary text-3xl font-medium mb-4">Our Mission</h2>
            <p className="text-gray-800 text-center lg:text-right max-w-md mx-auto lg:ml-auto leading-relaxed">
              To empower industries and communities by delivering innovative, sustainable, and customer-focused 
              solutions in Telecommunications, Power and Energy, Construction and Real Estate, Education and Travel. 
              We are committed to driving excellence, fostering growth, and creating lasting value for our customers, 
              partners, and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}