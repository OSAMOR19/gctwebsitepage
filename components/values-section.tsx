import Image from "next/image";
import img1 from "@/components/images/transparent-icon.png";
import img2 from "@/components/images/innovation-icon.png";
import img3 from "@/components/images/sustainability-icon.png";
import img4 from "@/components/images/empowerment-icon.png";

export default function ValuesSection() {
  const values = [
    { name: "Transparency", icon: img1 },
    { name: "Innovation", icon: img2 },
    { name: "Sustainability", icon: img3 },
    { name: "Empowerment", icon: img4 },
  ];

  return (
    <section id="values" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center text-secondary text-4xl font-medium mb-10 md:mb-20">Our Values</h2>

        {/* Desktop version with curved line - hidden on mobile */}
        <div className="hidden md:block relative max-w-6xl mx-auto h-[400px]">
          {/* Dotted SVG Line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 369"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 180.762C10.0419 180.762 145.607 393.479 309.792 249.171C409.09 161.894 487.861 228.173 533.912 305.052C558.089 345.413 601.324 374.591 647.386 365.011C766.041 340.333 899.385 287.869 830.965 202.732C725.023 70.9072 1056.91 17.9774 1174.4 110.355C1268.39 184.257 1389.96 68.2441 1439 1"
              stroke="#9E865E"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Value Circles - Desktop */}
          <div className="absolute" style={{ left: "5%", top: "60%" }}>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"></div>
                <div className="relative w-12 h-12">
                  <Image src={img1} alt="Transparency" fill className="object-contain" sizes="48px" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#2E466D]">Transparency</h3>
            </div>
          </div>

          <div className="absolute" style={{ left: "35%", top: "60%" }}>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"></div>
                <div className="relative w-12 h-12">
                  <Image src={img2} alt="Innovation" fill className="object-contain" sizes="48px" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#2E466D]">Innovation</h3>
            </div>
          </div>

          <div className="absolute" style={{ left: "65%", top: "15%" }}>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"></div>
                <div className="relative w-12 h-12">
                  <Image src={img3} alt="Sustainability" fill className="object-contain" sizes="48px" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#2E466D]">Sustainability</h3>
            </div>
          </div>

          <div className="absolute" style={{ left: "90%", top: "20%" }}>
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"></div>
                <div className="relative w-12 h-12">
                  <Image src={img4} alt="Empowerment" fill className="object-contain" sizes="48px" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-[#2E466D]">Empowerment</h3>
            </div>
          </div>
        </div>

        {/* Mobile version - grid layout */}
        <div className="md:hidden grid grid-cols-2 gap-8 justify-items-center max-w-lg mx-auto">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-3 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"></div>
                <div className="relative w-10 h-10">
                  <Image
                    src={value.icon}
                    alt={value.name}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
              </div>
              <h3 className="text-base font-medium text-[#2E466D]">{value.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}