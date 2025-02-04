import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { ContactSection } from "@/components/contact-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-8">
      <HeroSection />
      <AboutSection />
      <ProjectsGrid />
      <ContactSection />
    </div>
  )
}

