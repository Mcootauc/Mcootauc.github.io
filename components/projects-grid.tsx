"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "./ui/button"
import { ProjectCard } from "./project-card"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "OfferOasis",
    description: "A marketplace web app using Google Firebase and React",
    image: "/projects/offeroasis.png",
    tags: ["React", "Firebase", "Full Stack"],
    link: "/projects/offeroasis",
  },
  {
    title: "Live Sign Language Recognition",
    description: "Real-time ASL recognition using MediaPipe and Python",
    image: "/projects/asl.png",
    tags: ["Python", "Machine Learning", "Computer Vision"],
    link: "/projects/live-sign-language-recognition",
  },
  {
    title: "Blendify",
    description: "Music recommendation app using Spotify API",
    image: "/projects/blendify.png",
    tags: ["React", "API", "Full Stack"],
    link: "/projects/blendify",
  },
  // Add other projects...
]

const filters = ["All", "Full Stack", "Machine Learning", "API", "Python", "React"]

export function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const filteredProjects = projects.filter(
    (project) => selectedFilter === "All" || project.tags.includes(selectedFilter),
  )

  return (
    <section id="projects" className="py-12 px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="outline"
              size="sm"
              onClick={() => setSelectedFilter(filter)}
              className={cn("transition-colors", selectedFilter === filter && "bg-primary text-primary-foreground")}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

