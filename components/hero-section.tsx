'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-grid bg-center pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 mask-radial-faded" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                        <Image
                            src="/img/ProfilePic.jpg"
                            alt="Mitchell Cootauco"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-center lg:text-center"
                >
                    <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                        Hi! I&apos;m{' '}
                        <span className="text-primary">Mitchell Cootauco</span>
                    </h1>
                    <div className="flex flex-col items-center gap-6">
                        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            <span className="font-bold">
                                Full Stack Software Engineer{' '}
                            </span>
                            based in Los Angeles
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                onClick={() => scrollToSection('projects')}
                                size="lg"
                                className="gap-2 bg-secondary hover:bg-secondary/90"
                            >
                                View Projects <ArrowRight className="w-4 h-4" />
                            </Button>
                            <Link
                                href="https://github.com/Mcootauc"
                                target="_blank"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 border-secondary text-secondary hover:bg-secondary/60"
                                >
                                    <GithubIcon className="h-4 w-4" /> GitHub
                                </Button>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/mitchell-cootauco/"
                                target="_blank"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 border-secondary text-secondary hover:bg-secondary/60"
                                >
                                    <LinkedinIcon className="w-4 h-4" />{' '}
                                    LinkedIn
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
