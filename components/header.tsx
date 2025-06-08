'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['projects', 'about', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold text-primary"
                >
                    <Image
                        src={'/img/HomeIcon.jpg'}
                        alt="Home"
                        width={48}
                        height={48}
                        className="rounded-full" // Apply border-radius
                    />{' '}
                    {/* Home image */}
                    <span>Mitchell Cootauco</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <button
                        onClick={() => scrollToSection('about')}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === 'about'
                                ? 'text-secondary'
                                : 'text-primary hover:text-secondary'
                        }`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === 'experience'
                                ? 'text-secondary'
                                : 'text-primary hover:text-secondary'
                        }`}
                    >
                        Experience
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === 'projects'
                                ? 'text-secondary'
                                : 'text-primary hover:text-secondary'
                        }`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`text-sm font-medium transition-colors ${
                            activeSection === 'contact'
                                ? 'text-secondary'
                                : 'text-primary hover:text-secondary'
                        }`}
                    >
                        Contact
                    </button>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="https://github.com/Mcootauc" target="_blank">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-primary hover:text-secondary hover:bg-primary/10"
                        >
                            <GithubIcon className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mitchell-cootauco/"
                        target="_blank"
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-primary hover:text-secondary hover:bg-primary/10"
                        >
                            <LinkedinIcon className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </Link>
                    <Link href="/SweJobResumeFebruary2025.pdf" target="_blank">
                        <Button className="bg-secondary hover:bg-secondary/90">
                            Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
