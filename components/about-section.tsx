'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skillCategories = {
    languages: [
        { name: 'HTML5', logo: '/logos/HTML_logo.png' },
        { name: 'CSS3', logo: '/logos/CSS_logo.png' },
        { name: 'JavaScript', logo: '/logos/javascript_logo.png' },
        { name: 'TypeScript', logo: '/logos/typescript_logo.png' },
        { name: 'Python', logo: '/logos/python_logo.png' },
        { name: 'Java', logo: '/logos/java_logo.png' },
        { name: 'C#', logo: '/logos/C_Sharp_logo.png' },
        { name: 'R', logo: '/logos/R_logo.png' },
        { name: 'SQL', logo: '/logos/SQL_logo.png' },
    ],
    frameworksAndLibraries: [
        { name: 'React', logo: '/logos/react_logo.png' },
        { name: 'Next.js', logo: '/logos/next.js_logo.png' },
        { name: 'Vue.js', logo: '/logos/vue_logo.png' },
        { name: 'Node.js', logo: '/logos/node.js_logo.png' },
        { name: 'Tailwind CSS', logo: '/logos/tailwind_logo.png' },
        { name: 'Fast API', logo: '/logos/fast_api_logo.png' },
        { name: 'Docker', logo: '/logos/docker_logo.png' },
        { name: 'AWS', logo: '/logos/AWS_logo.png' },
        { name: 'Firebase', logo: '/logos/firebase_logo.png' },
    ],
    databasesAndORMs: [
        { name: 'MySQL', logo: '/logos/mysql_logo.png' },
        { name: 'PostgreSQL', logo: '/logos/postgres_logo.png' },
        { name: 'MongoDB', logo: '/logos/mongodb_logo.png' },
        { name: 'Redis', logo: '/logos/redis_logo.png' },
        { name: 'Prisma', logo: '/logos/prisma_logo.png' },
        { name: 'Supabase', logo: '/logos/supabase_logo.png' },
    ],
};

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative scroll-mt-12 py-20 lg:py-32 px-4"
        >
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="container mx-auto"
            >
                <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-left">
                    About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Column - Profile Photo and Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-8"
                    >
                        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl transition-transform duration-300 hover:scale-110">
                            <Image
                                src="./img/profilePic2.jpg"
                                alt="Mitchell Cootauco"
                                width={256}
                                height={256}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                I&apos;m a 23-year-old recent Computer Science
                                grad at Loyola Marymount University
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Born and raised in San Marino, California, I
                                bring a diverse set of interests and experiences
                                to my work in software engineering.
                            </p>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                When II&apos;m not immersed in coursework,
                                youI&apos;ll find me playing volleyball, working
                                on coding projects, hitting the gym, enjoying DC
                                superhero movies, experimenting with new
                                recipes, or diving into video games.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-2xl text-center font-bold mb-6">
                            My Skills
                        </h3>
                        <div className="space-y-12">
                            {/* Languages and Frameworks/Libraries row */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Languages Column */}
                                <div>
                                    <h4 className="text-xl text-center font-bold mb-8 text-primary">
                                        Languages
                                    </h4>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                        {skillCategories.languages.map(
                                            (skill, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
                                                    style={{
                                                        animation: `fadeInUp 0.6s ease-out ${
                                                            index * 0.1
                                                        }s forwards`,
                                                        opacity: 0,
                                                    }}
                                                >
                                                    <div className="w-20 h-20 flex items-center justify-center bg-background/50 rounded-lg p-2">
                                                        <Image
                                                            src={skill.logo}
                                                            alt={`${skill.name} logo`}
                                                            width={64}
                                                            height={64}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/90 text-foreground px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                        {skill.name}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Frameworks & Libraries Column */}
                                <div>
                                    <h4 className="text-xl text-center font-bold mb-8 text-primary">
                                        Frameworks & Libraries
                                    </h4>
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                        {skillCategories.frameworksAndLibraries.map(
                                            (skill, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
                                                    style={{
                                                        animation: `fadeInUp 0.6s ease-out ${
                                                            index * 0.1
                                                        }s forwards`,
                                                        opacity: 0,
                                                    }}
                                                >
                                                    <div className="w-20 h-20 flex items-center justify-center bg-background/50 rounded-lg p-2">
                                                        <Image
                                                            src={skill.logo}
                                                            alt={`${skill.name} logo`}
                                                            width={64}
                                                            height={64}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/90 text-foreground px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                        {skill.name}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Databases & ORMs row */}
                            <div>
                                <h4 className="text-xl text-center font-bold mb-8 text-primary">
                                    Databases & ORMs
                                </h4>
                                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                                    {skillCategories.databasesAndORMs.map(
                                        (skill, index) => (
                                            <div
                                                key={index}
                                                className="group relative flex flex-col items-center transition-transform duration-300 hover:scale-110"
                                                style={{
                                                    animation: `fadeInUp 0.6s ease-out ${
                                                        index * 0.1
                                                    }s forwards`,
                                                    opacity: 0,
                                                }}
                                            >
                                                <div className="w-20 h-20 flex items-center justify-center bg-background/50 rounded-lg p-2">
                                                    <Image
                                                        src={skill.logo}
                                                        alt={`${skill.name} logo`}
                                                        width={64}
                                                        height={64}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-background/90 text-foreground px-3 py-1 rounded-md text-sm whitespace-nowrap">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
