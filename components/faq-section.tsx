import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in comprehensive product development, from concept to final product.",
  },
  {
    question: "How much experience does your team have?",
    answer: "Our team has a combined 24 years of experience in product design.",
  },
  {
    question: "Can you handle tight deadlines?",
    answer: "Yes, we excel in delivering high-quality work under tight deadlines.",
  },
  {
    question: "What industries do you work with?",
    answer: "We have experience across various industries, including tech, consumer goods, and healthcare.",
  },
  {
    question: "How do you ensure the quality of your development work?",
    answer: "We follow rigorous design and review processes to maintain the highest quality standards.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on project scope, with options for hourly rates or fixed packages.",
  },
  {
    question: "How do you communicate progress during a project?",
    answer: "We provide regular updates and maintain open communication throughout the project.",
  },
  {
    question: "Can you work remotely with clients?",
    answer: "Yes, we are equipped to collaborate effectively with clients worldwide.",
  },
  {
    question: "What makes your team unique?",
    answer: "Our blend of creativity, technical expertise, and dedication to client satisfaction sets us apart.",
  },
  {
    question: "Do you offer multiple options in your development services?",
    answer: "Absolutely, we tailor our work to meet your specific needs and preferences.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">FAQ</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Questions Answered. If you don't see your question answered here it goes without saying, reach out.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
