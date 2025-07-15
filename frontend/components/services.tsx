import { FileText, Linkedin, Target, Users, MessageSquare, DollarSign, Globe, Mic, Lock } from "lucide-react"

export function Services() {
  const coreServices = [
    {
      icon: FileText,
      title: "Resume Crafting",
      description: "ATS-optimized resumes that get you noticed by top employers",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Branding & Revamp",
      description: "Complete LinkedIn optimization to attract recruiters and opportunities",
    },
    
    {
      icon: Target,
      title: "Strategic Job Submissions",
      description: "Targeted applications to roles that match your career goals",
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive career transformation services designed to get you hired faster
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">Optional Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-navy-900 p-6 rounded-xl text-white hover:bg-navy-800 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <addon.icon className="h-6 w-6 text-gold" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{addon.title}</h4>
                <p className="text-gray-300">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
