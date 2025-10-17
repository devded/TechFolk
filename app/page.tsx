import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      {/* <WorkSection /> */}
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
