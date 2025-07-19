import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Sparkles, Rocket ,Globe} from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-luxury-dark flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-gold-luxe/10 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-platinum-amber-glow/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.5"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-gold-luxe/5 to-transparent rounded-full animate-luxury-rotate"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-8 animate-luxury-float">
        <Rocket className="h-6 w-6 text-gold-luxe opacity-60" />
      </div>
      <div className="absolute top-1/3 right-12 animate-luxury-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="h-4 w-4 text-platinum-amber-glow opacity-40" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-luxury-float" style={{ animationDelay: "2s" }}>
        <Globe className="h-8 w-8 text-gold-luxe opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="luxury-stagger-item">
            <div className="inline-flex items-center bg-gold-luxe/10 border border-gold-luxe/30 rounded-full px-8 py-3 mb-8 luxury-backdrop">
              <Star className="h-5 w-5 text-gold-luxe mr-3 animate-luxury-pulse" />
              <span className="text-gold-luxe font-semibold text-lg">Elite Career Transformation Agency</span>
            </div>
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold text-ivory-white mb-10 leading-tight luxury-stagger-item luxury-text-responsive"
            style={{ animationDelay: "200ms" }}
          >
            We Don't Just Help You Get Hired —
            <span
              className=" animate-shimmer text-gold"
              style={{
                WebkitTextStroke: "0.5px #F8C775",
                textShadow: "0 1px 2px rgba(69, 30, 30, 0.5)",
              }}
            >
              We Market You Like a Brand
            </span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-warm-prestige-gray mb-16 max-w-5xl mx-auto luxury-stagger-item leading-relaxed"
            style={{ animationDelay: "400ms" }}
          >
            Elite reverse recruiting & career placement for high-growth professionals worldwide.
            <span className="text-gold-luxe font-bold block mt-2">Transform your career in months or less.</span>
          </p>

          <div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 luxury-stagger-item"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="https://wa.me/918732948070?text=Hi%20Nexplacers%2C%20I%27m%20interested%20in%20getting%20started."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold px-12 py-6 text-xl shadow-2xl luxury-btn luxury-hover-lift animate-luxury-glow"
              >
                Start Your Transformation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </a>

            <a href="#pricing" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold-luxe text-gold-luxe hover:bg-gold-luxe hover:text-jet-black px-12 py-6 text-xl bg-transparent luxury-backdrop luxury-btn luxury-hover-lift"
              >
                <Play className="mr-3 h-6 w-6" />
                View Investment Plans
              </Button>
            </a>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center luxury-stagger-item"
            style={{ animationDelay: "800ms" }}
          >
            {[
              { number: "500+", label: "Successful Placements", delay: "0ms" },
              { number: "95%", label: "Success Rate", delay: "100ms" },
              { number: "90", label: "Days Avg. Placement", delay: "200ms" },
              { number: "$120K", label: "Avg. Salary Increase", delay: "300ms" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group luxury-hover-lift cursor-pointer"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-5xl md:text-6xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">
                  {stat.number}
                </div>
                <div className="text-warm-prestige-gray font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
