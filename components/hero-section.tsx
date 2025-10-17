"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe, TestTube } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className={`text-5xl md:text-7xl font-bold text-balance mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="gradient-text animate-gradient-shift">Premium</span> Tech Solutions
            <br />
            <span className="text-foreground">Built to Scale</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            As a team of expert developers with vastly different backgrounds, we are in a prime position to offer
            multiple service options that transform your ideas into exceptional digital experiences.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Globe, label: "Web Apps" },
              { icon: Smartphone, label: "Mobile Apps" },
              { icon: Code, label: "Custom Dev" },
              { icon: TestTube, label: "QA Testing" },
            ].map((service, index) => (
              <div
                key={service.label}
                className={`flex flex-col items-center space-y-2 transition-all duration-700 hover:scale-110 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${700 + index * 150}ms` }}
              >
                <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 group">
                  <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
