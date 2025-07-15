import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 flex items-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            We Don't Just Help You Get Hired — <span className="text-gold">We Market You Like a Brand</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Elite reverse recruiting & career placement for high-growth professionals worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/918732948070?text=Hi%20Nexplacers%2C%20I%27m%20interested%20in%20getting%20started."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gold text-navy-900 hover:bg-gold/90 font-semibold px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <a href="#pricing" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                View Plans
              </Button>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-300">Successful Placements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">45</div>
              <div className="text-gray-300">Days Avg. Placement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold mb-2">$120K</div>
              <div className="text-gray-300">Avg. Salary Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
