import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">CONTACT</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Ready to experience our services? Let's start planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ask us anything.</h3>
            <p className="text-muted-foreground mb-8">
              Are you a company or brand looking to create services, or are you looking to create a new product,
              service, or brand? Let's connect.
            </p>
            <Button size="lg" className="mb-8">
              GET IN TOUCH
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ready to experience our services?</CardTitle>
              <CardDescription>Let's start planning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">FIRST NAME</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">LAST NAME</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">EMAIL</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">MESSAGE</label>
                <Textarea placeholder="Tell us about your project..." rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">ORGANIZATION</label>
                  <Input placeholder="Company Name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">ROLE</label>
                  <Input placeholder="Your Role" />
                </div>
              </div>
              <Button className="w-full" size="lg">
                SUBMIT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
