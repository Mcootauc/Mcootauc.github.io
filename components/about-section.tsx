'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const skills = [
    {
        category: 'Languages',
        items: [
            'Java',
            'Python',
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'C',
            'C#',
            'C++',
            'Swift',
            'R',
        ],
    },
    {
        category: 'Technologies',
        items: [
            'React',
            'Next.js',
            'Vue',
            'Node.js',
            'Git',
            'Firebase',
            'MediaPipe',
            'Unity',
            'Pandas',
        ],
    },
    {
        category: 'Interests',
        items: [
            'Volleyball',
            'Anime',
            'Gym',
            'Cooking',
            'Coffee Making',
            'League of Legends',
            'Story Games',
            'Superheroes',
        ],
    },
];

export function AboutSection() {
    return (
        <section id="about" className="py-12 px-4 md:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">About Me</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                I&apos;m a 22-year-old graduate student at
                                Loyola Marymount University, currently pursuing
                                a Master&apos;s in Computer Science.
                            </p>
                            <p>
                                Born and raised in San Marino, California, I
                                bring a diverse set of interests and experiences
                                to my work in software engineering.
                            </p>
                            <p>
                                When I&apos;m not immersed in coursework,
                                you&apos;ll find me playing volleyball, working
                                on coding projects, hitting the gym, enjoying DC
                                superhero movies, experimenting with new
                                recipes, or diving into video games.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    ></motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">
                        Skills & Interests
                    </h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        {skills.map((skillGroup) => (
                            <Card key={skillGroup.category}>
                                <CardContent className="p-6">
                                    <h4 className="text-xl font-semibold mb-4">
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item) => (
                                            <Badge key={item} variant="sakura">
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
