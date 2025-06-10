'use client';

import { motion } from 'framer-motion';
import { ExperienceImage } from './ui/experience-image';

const experiences = [
    {
        position: 'Director of Engineering',
        company: 'Crimson Consultant Group',
        dates: 'February 2024 - May 2025',
        logo: '/experience_img/CCG.png',
        location: 'Los Angeles, CA',
        responsibilities: [
            'Spearheaded a client project for a <strong>multi-billion-dollar</strong> short-term rental company by directing product development teams to curate an application programming interface for <strong>23,000</strong> monthly active homeowner stakeholders',
            'Created an improved web application utilizing <strong>Vue</strong> and <strong>Google Firebase</strong> to store and display information seamlessly',
            'Managed a GitHub repository for a <strong>10</strong>-member <strong>Agile</strong> team, overseeing commits and approving merge/pull requests',
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'NextFoundArtist',
        dates: 'January 2025 - May 2025',
        logo: '/experience_img/NFA.png',
        location: 'Remote (New York, NY)',
        responsibilities: [
            'Established CRUD operations using <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>SQL</strong>, optimizing data management and backend performance',
            'Enhanced the user dashboard utilizing <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>, ensuring a dynamic and responsive user interface',
            'Containerized <strong>15 FastAPI</strong> endpoints with <strong>Docker</strong> and deployed via <strong>AWS SAM</strong> to <strong>AWS Lambda</strong>, cutting release time by <strong>88%</strong>',
        ],
    },
    {
        position: 'Full Stack Software Engineer',
        company: 'HHQueen',
        dates: 'February 2025 - April 2025',
        logo: '/experience_img/hhqueen.png',
        location: 'Remote (Los Angeles, CA)',
        responsibilities: [
            'Optimized database schema with <strong>Prisma</strong>, improving data management for user profiles, venues, and menu images',
            'Deployed a <strong>Next.js</strong> web app using <strong>React</strong> and <strong>TypeScript</strong>, facilitating B2B login and auto-fill search for venue access requests',
            'Designed API functions, including a business-owner notification system, ensuring the archiving of outdated venues',
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'Valley Veterinary Hospital',
        dates: 'May 2024 - August 2024',
        logo: '/experience_img/ValleyVetPlaceholder.png',
        location: 'Los Angeles, CA',
        responsibilities: [
            'Developed an automated client registration system using <strong>React Native Expo</strong> and <strong>Supabase</strong> that reduced new client entry time by <strong>10%</strong> and removed data-entry errors, allowing veterinary technicians to spend more time assisting clients and pets',
            'Integrated a Chrome extension to auto-populate new client information into veterinary management software, which streamlined workflow and minimized manual data handling, increasing the number of new clients every month',
            'Deployed a <strong>Next.js</strong> web app displaying real-time client data, enabling vet technicians to view and copy registrations',
        ],
    },
    {
        position: 'Algorithms Teaching Assistant',
        company: 'Loyola Marymount University',
        dates: 'August 2023 - May 2024',
        logo: '/experience_img/SoftwareEngineerResearcher.jpg',
        location: 'Los Angeles, CA',
        responsibilities: [
            'Enabled understanding of <strong>Python</strong> algorithmic concepts for <strong>75</strong> students through 1-1 tutoring, facilitating academic success',
            'Assessed homework projects, providing detailed feedback to students to improve their understanding of algorithmic concepts',
            "Identified professors' needs with various workloads through meetings, reducing their work by <strong>3</strong> hours a week",
        ],
    },
    {
        position: 'Software Engineer Researcher',
        company: 'Loyola Marymount University',
        dates: 'May 2023 - June 2023',
        logo: '/experience_img/SoftwareEngineerResearcher.jpg',
        location: 'Los Angeles, CA',
        responsibilities: [
            'Designed a web app using <strong>React</strong> and the eBird API, improving online experience and access to avian knowledge',
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
                            className="flex flex-col lg:flex-row items-start gap-4"
                        >
                            <div className="flex-1 lg:w-1/2">
                                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                                    {exp.position}
                                </h3>

                                <h4 className="text-xl mb-2 text-primary">
                                    {exp.company}{' '}
                                    <span className="text-muted-foreground">
                                        | <i>{exp.location}</i>
                                    </span>
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
                                                <span className="text-primary">
                                                    •
                                                </span>
                                                <span
                                                    className="leading-relaxed"
                                                    dangerouslySetInnerHTML={{
                                                        __html: responsibility,
                                                    }}
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="lg:w-1/2 flex justify-center items-center">
                                <div className="relative w-[50%] h-[300px] bg-card rounded-lg border border-border overflow-hidden">
                                    <ExperienceImage
                                        src={exp.logo || '/placeholder.svg'}
                                        alt={`${exp.company} logo`}
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
