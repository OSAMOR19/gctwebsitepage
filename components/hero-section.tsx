export default function HeroSection() {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/coverpage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Optional for Darkening the Video) */}
      <div className="absolute inset-0 z-10" />

      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center z-20 pt-16">
        <div className="text-white max-w-3xl">
          <p className="text-sm uppercase tracking-wider mb-2">GCT GROUP</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building a Legacy of Excellence & Innovation Across{" "}
            <span className="text-secondary">Africa</span>
          </h1>
          <h6 className="md:text-lg text-muted opacity-90 max-w-2xl">
            Leading Nigerian conglomerates with a robust presence across diverse
            sectors that include Telecommunications, Energy, Power, Construction
            & Real Estate, Education, and Travel & Tourism.
          </h6>
        </div>
      </div>
    </section>
  );
}
