'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
    {
        position: 'Director of Engineering',
        company: 'Crimson Consultant Group',
        dates: 'February 2024 - May 2025',
        logo: '/experience_img/CCG.jpg',
        responsibilities: [
            'Spearheaded a client project for a multi-billion-dollar short-term rental company by directing product development teams to curate an application programming interface for 23,000 monthly active homeowner stakeholders',
            'Created an improved web application utilizing Vue and Google Firebase to store and display information seamlessly',
            'Managed a GitHub repository for a 10-member Agile team, overseeing commits and approving merge/pull requests',
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'NextFoundArtist',
        dates: 'January 2025 - May 2025',
        logo: '/experience_img/NextFoundArtist.jpg',
        responsibilities: [
            'Established CRUD operations using Python, FastAPI, and SQL, optimizing data management and backend performance',
            'Enhanced the user dashboard utilizing React, Next.js, and TypeScript, ensuring a dynamic and responsive user interface',
            'Containerized 15 FastAPI endpoints with Docker and deployed via AWS SAM to AWS Lambda, cutting release time by 88%',
        ],
    },
    {
        position: 'Full Stack Software Engineer',
        company: 'HHQueen',
        dates: 'February 2025 - April 2025',
        logo: '/experience_img/HHQueen.jpg',
        responsibilities: [
            'Optimized database schema with Prisma, improving data management for user profiles, venues, and menu images',
            'Deployed a Next.js web app using React and TypeScript, facilitating B2B login and auto-fill search for venue access requests',
            'Designed API functions, including a business-owner notification system, ensuring the archiving of outdated venues',
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'Valley Veterinary Hospital',
        dates: 'May 2024 - August 2024',
        logo: '/experience_img/ValleyVetPlaceholder.png',
        responsibilities: [
            'Developed an automated client registration system using React Native Expo and Supabase that reduced new client entry time by 10% and removed data-entry errors, allowing veterinary technicians to spend more time assisting clients and pets',
            'Integrated a Chrome extension to auto-populate new client information into veterinary management software, which streamlined workflow and minimized manual data handling, increasing the number of new clients every month',
            'Deployed a Next.js web app displaying real-time client data, enabling vet technicians to view and copy registrations',
        ],
    },
    {
        position: 'Algorithms Teaching Assistant',
        company: 'Loyola Marymount University',
        dates: 'August 2023 - May 2024',
        logo: '/experience_img/TeachingAssistant.jpg',
        responsibilities: [
            'Enabled understanding of Python algorithmic concepts for 75 students through 1-1 tutoring, facilitating academic success',
            'Assessed homework projects, providing detailed feedback to students to improve their understanding of algorithmic concepts',
            "Identified professors' needs with various workloads through meetings, reducing their work by 3 hours a week",
        ],
    },
    {
        position: 'Software Engineer Researcher',
        company: 'Loyola Marymount University',
        dates: 'May 2023 - June 2023',
        logo: '/experience_img/SoftwareEngineerResearcher.jpg',
        responsibilities: [
            'Designed a web app using React and the eBird API, improving online experience and access to avian knowledge',
            'Resolved API connectivity issues by rectifying the API key discrepancy, ensuring uninterrupted data flow and functionality',
            'Composed a responsive layout that adapts to various devices, enhancing accessibility and user engagement',
        ],
    },
];

export function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative scroll-mt-12 py-12 px-4 md:px-6 lg:px-8"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-16 text-center">
                    Experience
                </h2>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-8"
                        >
                            <div className="flex-1 lg:w-1/2">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                                    {exp.position}
                                </h3>
                                <h4 className="text-xl mb-2 text-primary">
                                    {exp.company}
                                </h4>
                                <p className="text-lg mb-6 text-muted-foreground">
                                    {exp.dates}
                                </p>

                                <ul className="space-y-3">
                                    {exp.responsibilities.map(
                                        (responsibility, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-primary mt-2">
                                                    •
                                                </span>
                                                <span className="leading-relaxed">
                                                    {responsibility}
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="lg:w-1/2 flex justify-center items-center">
                                <div className="w-[90%] h-[300px] bg-card rounded-lg border border-border flex items-center justify-center p-8">
                                    <Image
                                        src={exp.logo || '/placeholder.svg'}
                                        alt={`${exp.company} logo`}
                                        width={500}
                                        height={300}
                                        className="max-w-full max-h-full object-contain opacity-80"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
