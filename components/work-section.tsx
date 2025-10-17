"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "QuantumLeap Technologies",
    description:
      "QuantumLeap Technologies, a pioneer in quantum computing solutions, sought a complete overhaul of their online presence to better reflect their cutting-edge innovations.",
    image: "/quantum-computing-dashboard-interface.jpg",
    tags: ["Web App", "React", "TypeScript"],
  },
  {
    title: "EcoFusion Energy",
    description:
      "EcoFusion Energy, a leading innovator in sustainable energy solutions, aimed to support their new mission of making renewable energy accessible to everyone.",
    image: "/sustainable-energy-management-platform.jpg",
    tags: ["Mobile App", "React Native", "IoT"],
  },
  {
    title: "NeuroLink Innovations",
    description:
      "NeuroLink Innovations, a leader in brain-computer interface technology, required an internal web application to streamline their research processes.",
    image: "/medical-research-data-visualization.jpg",
    tags: ["Web App", "Vue.js", "Python"],
  },
  {
    title: "HoloVista Dynamics",
    description:
      "HoloVista Dynamics, an industry leader in AR and VR solutions, sought to increase their market reach and engagement through targeted marketing campaigns.",
    image: "/ar-vr-immersive-interface-design.jpg",
    tags: ["Landing Page", "Next.js", "3D"],
  },
]

export function WorkSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index])
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">WORK</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Actual Case Studies. Don't take our word for it, see it for yourself. Here are some of the biggest projects
            we delivered this year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=500&query=tech project dashboard"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent group"
                  >
                    Read Case Study
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="hover:scale-105 transition-all duration-300 group bg-transparent"
          >
            Show More Case Studies
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}
