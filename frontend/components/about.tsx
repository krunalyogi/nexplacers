import { Rocket, Brain, Globe, Shield, Target, Zap, Sparkles } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Track Placement",
      description: "Get placed in your dream role within 45 days on average with our proven system",
    },
    {
      icon: Brain,
      title: "Strategic Branding",
      description: "Personal brand optimization that makes you irresistible to Fortune 500 employers",
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Access opportunities in US, Germany, Canada, and other premium markets worldwide",
    },
    {
      icon: Shield,
      title: "Success-Based Model",
      description: "Pay only when you succeed - we share the risk and align our incentives with yours",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Strategic job targeting based on market analysis and your career trajectory",
    },
    {
      icon: Zap,
      title: "Elite Network",
      description: "Leverage our exclusive network of Fortune 500 recruiters and hiring managers",
    },
  ]

  return (
    <section id="about-us" className="py-32 bg-ivory-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-gold-luxe/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-platinum-amber-glow/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.5"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-jet-black mb-10 luxury-stagger-item">
            About <span className="text-gradient-gold">Nexplacers™</span>
          </h2>
          <p className="text-3xl text-warm-prestige-gray mb-12 font-semibold luxury-stagger-item">
            We're not a job service. We're your personal career transformation agency.
          </p>
          <div className="luxury-card rounded-3xl shadow-2xl p-12 md:p-16 border border-gold-luxe/20 luxury-stagger-item">
            <p className="text-xl text-graphite-gray max-w-5xl mx-auto leading-relaxed">
              At Nexplacers™, we combine cutting-edge recruitment strategies with personalized career coaching to help
              high-growth professionals land their dream roles. Our elite team of recruiters and career strategists work
              exclusively with ambitious professionals ready to take their careers to the next level.
            </p>
            <div className="mt-12 p-8 bg-gradient-to-r from-gold-luxe/10 to-platinum-amber-glow/10 rounded-3xl border border-gold-luxe/30">
              <p className="text-jet-black font-bold text-2xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 mr-3 text-gold-luxe" />
                <span className="text-gold-luxe">Our Mission:</span> Position candidates like premium talent, ready to
                attract attention, offers, and elevated pay.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="luxury-card p-10 rounded-3xl shadow-2xl luxury-hover-lift group border border-gold-luxe/20 luxury-stagger-item"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-luxury-gold rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <IconComponent className="h-10 w-10 text-jet-black" />
                </div>
                <h3 className="text-2xl font-bold text-jet-black mb-6 group-hover:text-gold-luxe transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-warm-prestige-gray leading-relaxed text-lg">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-luxury-dark rounded-3xl p-16 text-ivory-white luxury-stagger-item">
            <h3 className="text-4xl font-bold mb-10 flex items-center justify-center">
              <Target className="h-10 w-10 mr-4 text-gold-luxe" />
              Core Values
            </h3>
            <div className="grid md:grid-cols-5 gap-10">
              {[
                { emoji: "🚀", label: "Speed" },
                { emoji: "🎯", label: "Precision" },
                { emoji: "💬", label: "Elite Communication" },
                { emoji: "🛡", label: "Career Security" },
                { emoji: "🌐", label: "Global Credibility" },
              ].map((value, index) => (
                <div key={index} className="text-center group luxury-hover-lift cursor-pointer">
                  <div className="text-6xl mb-4 group-hover:animate-luxury-float">{value.emoji}</div>
                  <div className="text-gold-luxe font-bold text-xl">{value.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-warm-prestige-gray text-xl leading-relaxed">
              <span className="text-gold-luxe font-bold">Target Audience:</span> Mid to senior professionals (especially
              STEM, tech, consulting) seeking roles from $80K–$180K+ globally
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
