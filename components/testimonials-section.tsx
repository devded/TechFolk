"use client"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Mark Wheels",
    quote:
      "Exceptional creativity and expertise—this dev team consistently delivers top-notch results with impeccable attention to detail.",
    handle: "@markwheels",
  },
  {
    name: "Stephen Cheers",
    quote:
      "This product dev team exceeded our expectations, blending innovation and precision to create mindblowingly complex products fast.",
    handle: "@stephencheers",
  },
  {
    name: "Tristan Reals",
    quote:
      "Outstanding service and remarkable talent—this team brings ideas to life with unparalleled quality and professionalism.",
    handle: "@tristanreals",
  },
]

export function TestimonialsSection() {
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Real Humans, Realest Words. Warning! These folks are our long time supporters and they say nice things about
            us all the time, here are some of them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="relative group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] h-full">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300 group-hover:rotate-12" />
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">"{testimonial.quote}"</CardDescription>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-primary group-hover:text-primary/80 transition-colors"
                  >
                    Find him on X
                    <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
