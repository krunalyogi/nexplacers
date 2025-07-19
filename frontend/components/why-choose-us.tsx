import { Check, X, Star, Trophy, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyChooseUs() {
  const comparisons = [
    {
      feature: "Dedicated Recruiter",
      nexplacers: true,
      others: false,
    },
    {
      feature: "ATS Resume + RUC",
      nexplacers: true,
      others: "maybe",
    },
    {
      feature: "Weekly Job Submissions",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Interview Coaching",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Success-Based Pricing",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Salary Negotiation",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Global Market Access",
      nexplacers: true,
      others: false,
    },
    {
      feature: "Personal Branding",
      nexplacers: true,
      others: false,
    },
  ]

  return (
    <section className="py-32 bg-ivory-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-gold-luxe/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-platinum-amber-glow/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.5"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-flex items-center bg-gold-luxe/10 border border-gold-luxe/30 rounded-full px-8 py-3 mb-8 luxury-backdrop luxury-stagger-item">
            <Star className="h-5 w-5 text-gold-luxe mr-3" />
            <span className="text-gold-luxe font-semibold">The Clear Choice</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-jet-black mb-10 luxury-stagger-item">
            Why Choose <span className="text-gradient-gold">Nexplacers™?</span>
          </h2>
          <p className="text-2xl text-warm-prestige-gray luxury-stagger-item leading-relaxed">
            See how we compare to other career services and agencies
          </p>
        </div>

        <div className="max-w-6xl mx-auto luxury-stagger-item">
          <div className="luxury-card rounded-3xl overflow-hidden shadow-2xl luxury-hover-lift">
            <div className="grid grid-cols-3 bg-gradient-luxury-dark text-ivory-white p-10">
              <div className="text-2xl font-bold">Feature</div>
              <div className="text-2xl font-bold text-center flex items-center justify-center">
                <span className="mr-3">Nexplacers™</span>
                <Star className="h-6 w-6 text-gold-luxe animate-luxury-pulse" />
              </div>
              <div className="text-2xl font-bold text-center">Other Agencies</div>
            </div>

            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-8 transition-all duration-300 hover:bg-luxe-off-white/50 ${
                  index % 2 === 0 ? "bg-ivory-white" : "bg-luxe-off-white/30"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-bold text-jet-black flex items-center text-lg">{item.feature}</div>
                <div className="flex justify-center items-center">
                  {item.nexplacers === true && (
                    <div className="bg-emerald-elite/20 rounded-full p-3 luxury-hover-lift">
                      <Check className="h-8 w-8 text-emerald-elite" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center">
                  {item.others === true && (
                    <div className="bg-emerald-elite/20 rounded-full p-3">
                      <Check className="h-8 w-8 text-emerald-elite" />
                    </div>
                  )}
                  {item.others === false && (
                    <div className="bg-velvet-maroon/20 rounded-full p-3">
                      <X className="h-8 w-8 text-velvet-maroon" />
                    </div>
                  )}
                  {item.others === "maybe" && (
                    <span className="bg-platinum-amber-glow/20 text-platinum-amber-glow px-4 py-2 rounded-full text-sm font-bold">
                      Maybe
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="bg-gradient-luxury-dark rounded-3xl p-12 text-ivory-white mb-12 luxury-stagger-item">
              <h3 className="text-3xl font-bold mb-8 flex items-center justify-center">
                <Trophy className="h-8 w-8 mr-4 text-gold-luxe" />
                The Nexplacers™ Advantage
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">100%</div>
                  <div className="text-warm-prestige-gray font-semibold">Success-Based Model</div>
                </div>
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">45</div>
                  <div className="text-warm-prestige-gray font-semibold">Days Average Placement</div>
                </div>
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">24/7</div>
                  <div className="text-warm-prestige-gray font-semibold">Global Support</div>
                </div>
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">95%</div>
                  <div className="text-warm-prestige-gray font-semibold">Success Rate</div>
                </div>
              </div>
            </div>

            <a href="#pricing" className="inline-block">
              <Button
                size="lg"
                className="bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold px-12 py-6 text-xl luxury-btn luxury-hover-lift shadow-2xl animate-luxury-glow"
              >
                <Target className="h-6 w-6 mr-3" />
                View Investment Plans
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
