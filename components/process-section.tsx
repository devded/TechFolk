"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowDown, Rocket, Plane, Navigation, Trophy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const phases = [
  {
    phase: "PHASE 1",
    title: "Pre Flight Inspection",
    icon: CheckCircle,
    description:
      "Before we embark on this journey it's mandatory that we get to know each other first. We'll talk about our projects, ideas and strategies and ultimately see if we are the right fit. After we establish the connection we'll propose our services to you with multiple package options, depending on your needs.",
  },
  {
    phase: "PHASE 2",
    title: "Ready for Liftoff",
    icon: Rocket,
    description:
      "You were delighted to see that we're cool like that. We gave you options that fit the aesthetics and the budget you are working with. At this point we both agree it's time for us to start the journey and liftoff.",
  },
  {
    phase: "PHASE 3",
    title: "Flying High",
    icon: Plane,
    description:
      "Depending on the project scope, these flights can get looong, sometimes lasting for months. That's why we'll make sure to storm you with updates every day and answer all the questions your curious mind comes up with during that time. Enjoy your flight.",
  },
  {
    phase: "PHASE 4",
    title: "Course Correction",
    icon: Navigation,
    description:
      "This is something we don't do very often but it happens. And when it does, we will do our best to figure it out and turn the project in another direction. But, turning a plane the other way can sometimes demand more fuel, and not all destinations are reachable at that point.",
  },
  {
    phase: "PHASE 5",
    title: "Landing and Handover",
    icon: Trophy,
    description:
      "Congratulations! The destination has been reached. We are now in a place where you can choose to include us into another trip or continue your travels on your own. Either way, we'll be glad to have traveled with you so far and we'll be ready whenever you choose to fly with us again. Cheers!",
  },
]

export function ProcessSection() {
  const [visiblePhases, setVisiblePhases] = useState<number[]>([])
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = phaseRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisiblePhases((prev) => [...prev, index])
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="process" className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">PROCESS</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Seriously, this is how it goes. Here's what you can expect if you choose to work with us. Everything starts
            with a quick intro call and it goes from there.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 animate-draw-line" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                ref={(el) => (phaseRefs.current[index] = el)}
                className={`relative transition-all duration-700 ${
                  visiblePhases.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-0 flex items-center justify-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center transition-all duration-500 ${
                      visiblePhases.includes(index) ? "scale-100 rotate-0" : "scale-75 rotate-45"
                    }`}
                  >
                    <phase.icon
                      className={`h-6 w-6 text-primary transition-all duration-300 ${
                        visiblePhases.includes(index) ? "scale-100" : "scale-75"
                      }`}
                    />
                  </div>
                </div>

                <div className="ml-24">
                  <Card
                    className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 ${
                      visiblePhases.includes(index) ? "hover:scale-[1.02]" : ""
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors">
                          {phase.phase}
                        </span>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {phase.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{phase.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>

                {index < phases.length - 1 && (
                  <div
                    className={`absolute left-8 -bottom-6 flex justify-center transition-all duration-500 ${
                      visiblePhases.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                  >
                    <ArrowDown className="h-4 w-4 text-primary/60 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
