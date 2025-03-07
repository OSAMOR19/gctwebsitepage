"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import About1 from "@/components/images/About-Image.png";
import About2 from "@/components/images/About-Us-Image2.png";

export default function AboutSection() {
  return (
    <section id="about-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image - Slide-in effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] overflow-hidden h-[600px]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Image
                src={About1 || "/placeholder.svg"}
                alt="GCT Group Building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Right Text Content - Fade-in effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#B89D5B] font-bold text-lg mb-2">About Us</h3>
            <h2 className="text-3xl font-bold mb-6">
              GCT Group: Pioneering Excellence Across Multiple Sectors
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              GCT Group is a Nigerian conglomerate with a strong presence in
              various sectors, including telecommunications, energy, power,
              construction, education, and travel. With over two decades of
              experience, the group is known for excellence, innovation, and
              integrity. Headquartered in Lagos, GCT Group operates under
              Nigerian laws and values reliability, customer-centricity, and
              sustainable growth. Their subsidiaries are household names in
              their respective sectors.
            </p>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div id="achievment" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Content - Fade-in effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-[#B89D5B] font-bold text-lg mb-2">
              Our Achievements
            </h3>
            <h2 className="text-2xl font-bold mb-4">
              Empowering Africa: The GCT Group Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              GCT Group has a successful track record with decades of successful
              projects, strategic partnerships, and cutting-edge technologies.
              They are committed to bridging gaps in Africa by providing
              comprehensive technology solutions that accelerate development and
              empower communities, creating opportunities for a brighter future.
            </p>
          </motion.div>

          {/* Right Image - Slide-in effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[2rem] overflow-hidden h-[600px]"
            >
              <Image
                src={About2 || "/placeholder.svg"}
                alt="GCT Group Achievement"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
