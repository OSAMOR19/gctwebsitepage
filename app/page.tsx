import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionMissionSection from "@/components/vision-mission-section"
import GoalsSection from "@/components/goals-section"
import ValuesSection from "@/components/values-section"
import DivisionsSection from "@/components/divisions-section"
import WhyChooseUsSection from "@/components/why-choose-us-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <GoalsSection />
      <ValuesSection />
      <DivisionsSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  )
}

