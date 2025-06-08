import { HeroSection } from '@/components/hero-section';
import { ProjectsGrid } from '@/components/projects-grid';
import { ContactSection } from '@/components/contact-section';
import { AboutSection } from '@/components/about-section';
import { ExperienceSection } from '@/components/experience-section';

export default function Home() {
    return (
        <div className="flex flex-col gap-12 pb-8">
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsGrid />
            <ContactSection />
        </div>
    );
}
