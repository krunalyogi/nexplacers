import { FileText, Linkedin, Target, Users, MessageSquare, DollarSign, Globe, Mic, Lock, Sparkles } from "lucide-react"

export function Services() {
  const coreServices = [
    {
      icon: FileText,
      title: "Resume Crafting",
      description: "ATS-optimized resumes that get you noticed by Fortune 500 employers",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Branding & Revamp",
      description: "Complete LinkedIn optimization to attract recruiters and opportunities",
    },
    {
      icon: Target,
      title: "Strategic Job Submissions",
      description: "Targeted applications to roles that match your career trajectory",
    },
    {
      icon: Users,
      title: "Reverse Recruiting",
      description: "Our recruiters actively market you to employers in US, Germany, Canada",
    },
    {
      icon: MessageSquare,
      title: "Interview Prep & Coaching",
      description: "Mock interviews and coaching to ace any interview format",
    },
    {
      icon: DollarSign,
      title: "Offer & Salary Negotiation",
      description: "Expert negotiation to maximize your compensation package",
    },
  ]

  const addOns = [
    {
      icon: Globe,
      title: "Personal Portfolio Website",
      description: "Professional portfolio to showcase your work and achievements",
    },
    {
      icon: Mic,
      title: "Voice Interview Coaching",
      description: "Specialized coaching for phone and video interviews",
    },
    {
      icon: Lock,
      title: "NDA-Protected Confidential Job Search",
      description: "Discreet job search while employed, with full confidentiality",
    },
  ]

  return (
    <section id="services" className="py-32 bg-luxe-off-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-80 h-80 bg-gold-luxe/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-platinum-amber-glow/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          data-speed="0.5"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-jet-black mb-10 luxury-stagger-item">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-2xl text-warm-prestige-gray luxury-stagger-item leading-relaxed">
            Comprehensive career transformation services designed to get you hired faster
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-4xl font-bold text-jet-black mb-16 text-center luxury-stagger-item flex items-center justify-center">
            <Sparkles className="h-8 w-8 mr-4 text-gold-luxe" />
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="luxury-card p-10 rounded-3xl luxury-hover-lift group luxury-stagger-item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-luxury-gold rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <IconComponent className="h-10 w-10 text-jet-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-jet-black mb-6 group-hover:text-gold-luxe transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-warm-prestige-gray leading-relaxed text-lg">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-jet-black mb-16 text-center luxury-stagger-item flex items-center justify-center">
            <Sparkles className="h-8 w-8 mr-4 text-gold-luxe" />
            Premium Add-Ons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {addOns.map((addon, index) => {
              const IconComponent = addon.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-luxury-dark p-10 rounded-3xl text-ivory-white luxury-hover-lift group shadow-2xl luxury-stagger-item"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-20 h-20 bg-gold-luxe/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-gold-luxe/30 transition-colors duration-500">
                    <IconComponent className="h-10 w-10 text-gold-luxe" />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 group-hover:text-gold-luxe transition-colors duration-300">
                    {addon.title}
                  </h4>
                  <p className="text-warm-prestige-gray leading-relaxed text-lg">{addon.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-gold-luxe/10 to-platinum-amber-glow/10 rounded-3xl p-12 border border-gold-luxe/30 luxury-stagger-item">
            <h3 className="text-3xl font-bold text-jet-black mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 mr-4 text-gold-luxe" />
              Ready to Transform Your Career?
            </h3>
            <p className="text-warm-prestige-gray mb-8 text-xl leading-relaxed">
              Our comprehensive services are designed to position you as premium talent in the global job market
            </p>
            <a href="#pricing" className="inline-block">
              <button className="bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold px-10 py-5 rounded-2xl luxury-btn luxury-hover-lift shadow-2xl text-lg">
                View Our Plans
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
