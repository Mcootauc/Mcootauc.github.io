'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function Header() {
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
                    <Link
                        href="#projects"
                        className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-primary hover:text-secondary transition-colors"
                    >
                        Contact
                    </Link>
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
                    <Link
                        href="/SweInternshipResumeJune2024.pdf"
                        target="_blank"
                    >
                        <Button className="bg-secondary hover:bg-secondary/90">
                            Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
