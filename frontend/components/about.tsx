import { Rocket, Brain, Globe, Shield } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Track Placement",
      description: "Get placed in your dream role within 45 days on average",
    },
    {
      icon: Brain,
      title: "Strategic Branding",
      description: "Personal brand optimization that makes you irresistible to employers",
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Access opportunities in US, Germany, Canada, and beyond",
    },
    {
      icon: Shield,
      title: "Success-Based Model",
      description: "Pay only when you succeed - we share the risk with you",
    },
  ]

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">About Nexplacers™</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're not a job service. We're your personal career transformation agency.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Nexplacers™, we combine cutting-edge recruitment strategies with personalized career coaching to help
            high-growth professionals land their dream roles. Our elite team of recruiters and career strategists work
            exclusively with ambitious professionals ready to take their careers to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
