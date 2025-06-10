'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-lg font-semibold text-primary"
                >
                    <Image
                        src={'/img/HomeIcon.jpg'}
                        alt="Home"
                        width={48}
                        height={48}
                        className="rounded-full" // Apply border-radius
                    />
                </button>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scrollToSection('about')}
                        className={`text-sm font-medium transition-colors text-primary hover:text-secondary`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className={`text-sm font-medium transition-colors text-primary hover:text-secondary`}
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={`text-sm font-medium transition-colors text-primary hover:text-secondary`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`text-sm font-medium transition-colors text-primary hover:text-secondary`}
                    >
                        Contact
                    </button>
                    <div className="flex items-center gap-4 pl-4">
                        <Link
                            href="/3+Years_Experience_MitchellCootauco.pdf"
                            target="_blank"
                        >
                            <Button className="bg-secondary hover:bg-secondary/90">
                                Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
