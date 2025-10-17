"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const pricingOptions = [
  {
    title: "Two Week Sprint",
    subtitle: "Fast-track your dev projects without compromising quality.",
    price: "$12,995",
    period: "/flat fee",
    features: [
      "You're hiring a six-person, well oiled machine",
      "24 years of combined experience",
      "Proven track record (164 projects done)",
      "No meetings needed",
      "Single investment, multiple rewards",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    title: "Monthly Subscription",
    subtitle: "Fast-track your dev projects without compromising quality.",
    price: "$19,995",
    period: "/monthly",
    features: [
      "You're hiring a six-person, well oiled machine",
      "24 years of combined experience",
      "Proven track record (164 projects done)",
      "We can meet sometimes",
      "6 senior designers for the price of 1",
    ],
    cta: "Get Going",
    popular: true,
  },
]

export function PricingSection() {
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
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">PRICING</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Premium work, premium price. Here's what you can expect if you choose to work with us. Everything starts
            with a quick intro call and it goes from there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card
                className={`relative group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${
                  option.popular
                    ? "ring-2 ring-primary shadow-xl animate-pulse-glow"
                    : "hover:ring-1 hover:ring-primary/50"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-float">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      OPTION {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6">{option.subtitle}</CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                      {option.price}
                    </span>
                    <span className="text-muted-foreground ml-1">{option.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {option.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`flex items-start space-x-3 transition-all duration-300 ${
                        visibleCards.includes(index) ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + featureIndex * 100}ms` }}
                    >
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="pt-6">
                    <Button
                      className={`w-full hover:scale-105 transition-all duration-300 ${
                        option.popular ? "animate-pulse-glow" : ""
                      }`}
                      variant={option.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {option.cta}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
