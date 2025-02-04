'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-grid bg-center pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 mask-radial-faded" />
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center justify-center"
                >
                    <Image
                        src="/img/Face.jpeg"
                        alt="Mitchell T. Cootauco"
                        width={200}
                        height={200}
                        className="rounded-full mb-8"
                    />
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4">
                        <span className="text-foreground">Hi, I'm </span>
                        <span className="text-primary">Mitchell Cootauco</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-2xl text-center text-muted-foreground mt-4 max-w-2xl"
                    >
                        A Software Engineer passionate about building innovative
                        solutions with modern web technologies and machine
                        learning.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex gap-4 mt-8"
                    >
                        <Link href="#projects">
                            <Button
                                size="lg"
                                className="gap-2 bg-secondary hover:bg-secondary/90"
                            >
                                View Projects <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Link
                            href="https://github.com/Mcootauc"
                            target="_blank"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 border-secondary text-secondary hover:bg-secondary/10"
                            >
                                <Github className="w-4 h-4" /> GitHub
                            </Button>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/mitchell-cootauco/"
                            target="_blank"
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 border-secondary text-secondary hover:bg-secondary/10"
                            >
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-12"
                    >
                        <div className="flex gap-8 items-center justify-center">
                            {[
                                'Java',
                                'Python',
                                'HTML',
                                'CSS',
                                'JavaScript',
                            ].map((tech) => (
                                <div key={tech} className="relative group">
                                    <div className="absolute inset-0 bg-secondary/10 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Image
                                        src={`/img/${tech.toLowerCase()}.png`}
                                        alt={tech}
                                        width={50}
                                        height={50}
                                        className="transition-all duration-300 group-hover:scale-110"
                                    />
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-secondary">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
