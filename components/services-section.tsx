"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Code, TestTube, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Before we embark on this journey it's mandatory that we get to know each other first. We'll talk about our projects, ideas and strategies and ultimately see if we are the right fit.",
  },
  {
    icon: Code,
    title: "Landing Pages & Websites",
    description:
      "After we establish the connection we'll propose our services to you with multiple package options, depending on your needs and business requirements.",
  },
  {
    icon: Smartphone,
    title: "iOS Applications",
    description:
      "We specialize in creating native iOS applications that deliver exceptional user experiences with seamless performance and intuitive design.",
  },
  {
    icon: TestTube,
    title: "QA Testing",
    description:
      "Comprehensive quality assurance testing to ensure your applications meet the highest standards of performance, security, and user experience.",
  },
]

export function ServicesSection() {
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
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Yes, we're that good. As a team of expert devs with vastly different backgrounds we are in a prime position
            to offer multiple service options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover:scale-[1.02] h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="h-6 w-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">{service.description}</CardDescription>
                  {/* <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-all duration-300 cursor-pointer">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div> */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
