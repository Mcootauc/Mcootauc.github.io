'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export function ProjectCard({
    title,
    description,
    image,
    tags,
    link,
}: ProjectCardProps) {
    return (
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden">
                <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                        <Image
                            src={image || '/placeholder.svg'}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <CardTitle className="text-xl mb-2">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="sakura">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Link href={link} target="_blank" className="w-full">
                        <Button className="w-full gap-2">
                            View Project <ArrowUpRight className="w-4 h-4" />
                        </Button>
                    </Link>
                    {/* <Dialog>
                        <DialogTrigger>
                            <Button>View Project</Button>
                        </DialogTrigger>
                    </Dialog> */}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
