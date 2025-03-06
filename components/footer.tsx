import Link from "next/link"
import { MapPin, Phone, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2E466D] text-white">
      <div className="container-custom py-12">
        {/* Desktop version - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Location */}
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mt-1 mr-3 text-[#9E865E]" />
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-gray-300">
                11th Floor, Tower 2<br />
                Churchgate Towers PC 30,
                <br />
                Churchgate Street Victoria
                <br />
                Islands Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start">
            <Phone className="w-5 h-5 mt-1 mr-3 text-[#9E865E]" />
            <div>
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-sm text-gray-300 mb-2">08174 250 000</p>
              <p className="text-sm text-gray-300">info@gctgroup.ng</p>
            </div>
          </div>

          {/* Date and time open */}
          <div className="flex items-start">
            <Clock className="w-5 h-5 mt-1 mr-3 text-[#9E865E]" />
            <div>
              <h3 className="font-semibold mb-2">Date and time open</h3>
              <p className="text-sm text-gray-300 mb-1">Mon-fri = 9:00am - 5:00pm</p>
              <p className="text-sm text-gray-300">Sat-sun = 11:00am - 5:00pm</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex text-[#9E865E] space-x-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9E865E] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9E865E] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9E865E] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#9E865E] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile version - hidden on desktop */}
        <div className="md:hidden">
          {/* Location section */}
          <div className="flex mb-8">
            <MapPin className="w-6 h-6 mt-1 mr-3 text-[#9E865E] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-sm leading-relaxed">
                11th Floor, Tower 2 Churchgate Towers PC 30, Churchgate Street Victoria Islands Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Contact section */}
          <div className="flex mb-8">
            <Phone className="w-6 h-6 mt-1 mr-3 text-[#9E865E] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p className="text-sm mb-1">08 174 250 000</p>
              <p className="text-sm">info@gctgroup.ng</p>
            </div>
          </div>

          {/* Date and time section */}
          <div className="flex mb-8">
            <Clock className="w-6 h-6 mt-1 mr-3 text-[#9E865E] flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Date and time open</h3>
              <p className="text-sm mb-1">Mon-fri = 9:00am - 5:00pm</p>
              <p className="text-sm">Sat-sun = 11:00am - 5:00pm</p>
            </div>
          </div>

          {/* Social icons section */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-[#2E466D]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Facebook className="w-5 h-5 text-[#2E466D]" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Instagram className="w-5 h-5 text-[#2E466D]" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Linkedin className="w-5 h-5 text-[#2E466D]" />
            </Link>
          </div>
        </div>

        {/* Copyright - for both mobile and desktop */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>Copyright © 2025 - GCT Group - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}