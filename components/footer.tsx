import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">TechForge Newsletter</h3>
            <p className="text-background/80 mb-6">
              Stay updated with our latest projects, insights, and industry trends.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="secondary">SUBMIT</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-6xl font-bold mb-4 md:mb-0">TechForge</div>
            <div className="text-background/60 text-sm">
              © 2025 TechForge. All rights reserved. Built with passion and precision.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
