export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* <div className="text-5xl font-bold mb-4">TechFolk</div> */}
          
          <div className="flex space-x-6 mb-6">
            <a href="#" className="hover:text-background/80 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-background/80 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-background/80 transition-colors">
              GitHub
            </a>
          </div>
          
          <div className="text-background/60 text-sm">
            © 2025 TechFolk. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
