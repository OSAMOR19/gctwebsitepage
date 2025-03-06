import React from 'react';
import Image from 'next/image';

// Import images correctly
import TelecommunicationsIcon from "@/components/images/telecommunications-icon.png";
import PowerIcon from "@/components/images/power-icon.png";
import ConstructionIcon from "@/components/images/construction-icon.png";
import TravelIcon from "@/components/images/travel-icon.png";
import EducationIcon from "@/components/images/education-icon.png";

export default function DivisionsSection() {
  const divisions = [
    {
      title: "Telecommunication",
      image: TelecommunicationsIcon,
      description:
        "They specialize in voice and SMS services, managing over 565 global operators. They hold essential Nigerian MVNO licenses.",
    },
    {
      title: "Power & Energy",
      image: PowerIcon,
      description:
        "They offer a diverse range of generators, turbines, and clean energy solutions, ensuring 24/7 availability and sustainable growth.",
    },
    {
      title: "Construction & Real Estate",
      image: ConstructionIcon,
      description:
        "They also engage in community initiatives, utilize foam-based construction technology, and integrate green building initiatives for a greener future.",
    },
    {
      title: "Travel & Tourism",
      image: TravelIcon,
      description:
        "The platform caters to various travel needs, offering tailored solutions for businesses, consumers, and organizations.",
    },
    {
      title: "Education",
      image: EducationIcon,
      description:
        "The platform uses AI and machine learning, enables customized learning programs, and integrates renewable energy-powered educational infrastructure.",
    },
  ];

  return (
    <section id="divisions" className="section-padding bg-[#F0EFEF]">
      <div className="container-custom">
        <h2 className="section-title text-secondary text-center mb-8 md:mb-12">Our Divisions</h2>

        <div className="grid gap-8 md:gap-12">
          {/* First three divisions - full grid on mobile, 3 columns on md+ */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {divisions.slice(0, 3).map((division, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-12 h-12 mb-4">
                  <Image 
                    src={division.image} 
                    alt={`${division.title} icon`} 
                    width={44} 
                    height={44}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{division.title}</h3>
                <p className="text-gray-700">{division.description}</p>
              </div>
            ))}
          </div>

          {/* Travel & Tourism and Education sections - stack on mobile, 2 columns on md+ */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {divisions.slice(3).map((division, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative w-12 h-12 mb-4">
                  <Image 
                    src={division.image} 
                    alt={`${division.title} icon`} 
                    width={44} 
                    height={44}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{division.title}</h3>
                <p className="text-gray-700">{division.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}