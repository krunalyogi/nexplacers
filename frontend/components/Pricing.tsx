"use client"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Zap, Shield, Sparkles } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Essential Pro",
      icon: Zap,
      price: "$999",
      successFee: "13%",
      popular: false,
      color: "from-velvet-midnight-blue to-royal-blue-tint",
      description: "Built for professionals who want core strategy and job momentum",
      features: [
        "Resume + Resume Utility Check (RUC)",
        "8 Job Submissions/Week",
        "Email Support",
        "Role Targeting + Strategy Session",
        "Basic LinkedIn Review",
        "Weekly Application Tracker",
      ],
      ideal: "Budget-conscious clients who want expert push + job momentum",
    },
    {
      name: "Growth Premium",
      icon: Star,
      price: "$1,499",
      successFee: "11%",
      popular: true,
      color: "from-emerald-elite to-velvet-midnight-blue",
      description: "Full edge with branding, recruiter support, and personalized attention",
      features: [
        "Everything in Essential Pro",
        "Full LinkedIn Overhaul",
        "Mock Interviews (2 rounds)",
        "Dedicated Reverse Recruiter",
        "Custom Email Scripts & Application Branding",
        "Progress Reporting",
      ],
      ideal: "Mid-career professionals targeting $90K–130K+ roles",
    },
    {
      name: "Elite Impact",
      icon: Crown,
      price: "$1,999",
      successFee: "10%",
      popular: false,
      color: "from-velvet-maroon to-gold-luxe",
      description: "Executive-level polish, coaching, and fast placement",
      features: [
        "Everything in Premium",
        "2× Dedicated Reverse Recruiters",
        "12 Weekly Applications + Strategic Targeting",
        "VIP WhatsApp Support + Priority Turnaround",
        "Advanced Offer Negotiation Support",
        "Salary Positioning & Competitive Benchmarking",
      ],
      ideal: "High-stake professionals, managers, or senior talent",
    },
  ]

  return (
    <section id="pricing" className="py-32 bg-gradient-luxury-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-80 h-80 bg-gold-luxe/5 rounded-full blur-3xl luxury-parallax"
          data-speed="0.3"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-platinum-amber-glow/5 rounded-full blur-3xl luxury-parallax"
          data-speed="0.5"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-flex items-center bg-gold-luxe/10 border border-gold-luxe/30 rounded-full px-8 py-3 mb-8 luxury-backdrop luxury-stagger-item">
            <Crown className="h-5 w-5 text-gold-luxe mr-3" />
            <span className="text-gold-luxe font-semibold">NEXPLACERS™ OFFICIAL PRICING PLANS — 2025</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-jet-black mb-10 luxury-stagger-item">
            Investment <span className="text-gradient-gold">Plans</span>
          </h2>
          <p className="text-2xl text-warm-prestige-gray max-w-4xl mx-auto luxury-stagger-item leading-relaxed">
            Each plan is crafted to transform careers with speed, precision, and executive-level branding. We don't
            "help job seekers" — we reposition elite talent to win in the global job market.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 justify-items-center">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div
                key={index}
                className={`relative luxury-card rounded-3xl p-10 luxury-hover-lift group ${
                  plan.popular ? "ring-4 ring-gold-luxe/50 scale-105 animate-luxury-glow" : ""
                } luxury-stagger-item`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Decorative Icon on Top */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg z-10">
                  <IconComponent className="h-8 w-8 text-jet-black" />
                </div>

                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-luxury-gold text-jet-black px-8 py-4 rounded-full text-sm font-bold flex items-center shadow-2xl animate-luxury-pulse">
                      <Star className="h-4 w-4 mr-2 text-jet-black" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-10 mt-16">
                  <h3 className="text-3xl font-bold text-jet-black mb-3">{plan.name}</h3>
                  <p className="text-warm-prestige-gray text-sm mb-6 leading-relaxed">{plan.description}</p>
                  <div className="text-5xl font-bold text-jet-black mb-3">{plan.price}</div>
                  <div className="text-gold-luxe font-bold text-xl">{plan.successFee} Success Fee</div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-emerald-elite mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-graphite-gray text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-8 p-6 bg-gradient-luxury-light rounded-2xl border border-gold-luxe/20">
                  <p className="text-xs text-warm-prestige-gray font-semibold mb-2 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-gold-luxe" />
                    Ideal for:
                  </p>
                  <p className="text-sm text-jet-black font-semibold leading-relaxed">{plan.ideal}</p>
                </div>

                <Button
                  onClick={() => {
                    const message = `Hi Nexplacers™, I'm interested in the "${plan.name}" plan (${plan.price} + ${plan.successFee} success fee). Please share more details about this elite career transformation package.`
                    const whatsappUrl = `https://wa.me/918732948070?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, "_blank")
                  }}
                  className={`w-full font-bold py-4 luxury-btn luxury-hover-lift ${
                    plan.popular
                      ? "bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow shadow-2xl animate-luxury-glow"
                      : "bg-jet-black text-ivory-white hover:bg-rich-charcoal"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            )
          })}
        </div>

        {/* Summary Table */}
        <div className="max-w-6xl mx-auto luxury-card rounded-3xl p-12 mb-16 luxury-stagger-item">
          <h3 className="text-4xl font-bold text-jet-black mb-8 text-center">Plan Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gold-luxe/30">
                  <th className="text-left py-6 px-6 font-bold text-jet-black text-xl">Plan Name</th>
                  <th className="text-center py-6 px-6 font-bold text-jet-black text-xl">Upfront Fee</th>
                  <th className="text-center py-6 px-6 font-bold text-jet-black text-xl">Success Fee</th>
                  <th className="text-left py-6 px-6 font-bold text-jet-black text-xl">Best For</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr
                    key={index}
                    className="border-b border-warm-prestige-gray/20 hover:bg-luxe-off-white/50 transition-colors duration-300"
                  >
                    <td className="py-6 px-6 font-bold text-jet-black text-lg">{plan.name}</td>
                    <td className="py-6 px-6 text-center font-bold text-gold-luxe text-lg">{plan.price}</td>
                    <td className="py-6 px-6 text-center font-bold text-gold-luxe text-lg">{plan.successFee}</td>
                    <td className="py-6 px-6 text-warm-prestige-gray leading-relaxed">{plan.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center bg-gradient-luxury-dark rounded-3xl p-16 text-ivory-white luxury-stagger-item">
          <h3 className="text-4xl font-bold mb-6 flex items-center justify-center">
            <Sparkles className="h-8 w-8 mr-4 text-gold-luxe" />
            Smart Business Reasoning
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            <div>
              <p className="text-warm-prestige-gray mb-6 text-lg leading-relaxed">
                <span className="text-gold-luxe font-bold">✓ Agency Protection:</span> Higher backend % on $0 plan keeps
                us secure and aligned
              </p>
              <p className="text-warm-prestige-gray mb-6 text-lg leading-relaxed">
                <span className="text-gold-luxe font-bold">✓ Clear Value Ladder:</span> Clients see differences in
                speed, support, and commitment levels
              </p>
            </div>
            <div>
              <p className="text-warm-prestige-gray mb-6 text-lg leading-relaxed">
                <span className="text-gold-luxe font-bold">✓ No Confusion:</span> Simple one-time + success fees - no
                complex monthly models
              </p>
              <p className="text-warm-prestige-gray mb-6 text-lg leading-relaxed">
                <span className="text-gold-luxe font-bold">✓ Easy Upgrades:</span> Natural progression logic during
                sales conversations
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-2xl font-bold text-gold-luxe mb-4 flex items-center justify-center">
              <Crown className="h-6 w-6 mr-3" />
              Built like Apple. Sold like Tesla. Protected like Goldman Sachs.
            </p>
            <p className="text-warm-prestige-gray text-lg">
              All plans include our job placement guarantee. Success fees are only charged upon successful placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
