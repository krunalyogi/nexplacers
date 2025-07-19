"use client"

import { BookOpen, FileText, Users, TrendingUp, Download, ExternalLink, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Career Transformation Guide",
      description: "Complete roadmap to landing your dream role in 45 days",
      articles: 15,
      type: "Guide",
    },
    {
      icon: FileText,
      title: "Resume Optimization Secrets",
      description: "ATS-beating strategies that get you noticed by Fortune 500 companies",
      articles: 12,
      type: "Templates",
    },
    {
      icon: Users,
      title: "Global Visa & Work Authorization",
      description: "Complete guide for international professionals seeking US/EU opportunities",
      articles: 18,
      type: "Legal Guide",
    },
    {
      icon: TrendingUp,
      title: "Salary Negotiation Mastery",
      description: "Proven techniques to increase your offer by 20-40%",
      articles: 10,
      type: "Strategies",
    },
  ]

  const blogPosts = [
    {
      title: "How to Land a $150K+ Tech Role in 2025",
      excerpt: "The exact strategy our clients use to break into FAANG companies",
      readTime: "8 min read",
      category: "Career Strategy",
    },
    {
      title: "LinkedIn Optimization for Maximum Recruiter Attention",
      excerpt: "Transform your LinkedIn profile into a recruiter magnet",
      readTime: "6 min read",
      category: "Personal Branding",
    },
    {
      title: "The Hidden Job Market: Accessing 80% of Opportunities",
      excerpt: "How reverse recruiting opens doors to unadvertised positions",
      readTime: "10 min read",
      category: "Job Search",
    },
  ]

  return (
    <section id="resources" className="py-32 bg-ivory-white relative overflow-hidden">
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
            Resources & <span className="text-gradient-gold">Insights</span>
          </h2>
          <p className="text-2xl text-warm-prestige-gray luxury-stagger-item leading-relaxed">
            Free premium resources to accelerate your career transformation
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <div
                key={index}
                className="luxury-card p-10 rounded-3xl shadow-2xl luxury-hover-lift group border border-gold-luxe/20 luxury-stagger-item"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-luxury-gold rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <IconComponent className="h-10 w-10 text-jet-black" />
                </div>
                <div className="mb-6">
                  <span className="bg-gold-luxe/10 text-gold-luxe px-4 py-2 rounded-full text-sm font-bold">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-jet-black mb-4 group-hover:text-gold-luxe transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-warm-prestige-gray mb-6 leading-relaxed">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gold-luxe font-semibold">{resource.articles} Resources</div>
                  
                </div>
              </div>
            )
          })}
        </div>

        {/* Latest Blog Posts */}
        <div className="luxury-card rounded-3xl shadow-2xl p-12 md:p-16 border border-gold-luxe/20 mb-20 luxury-stagger-item">
          <h3 className="text-4xl font-bold text-jet-black mb-12 text-center flex items-center justify-center">
            <Sparkles className="h-8 w-8 mr-4 text-gold-luxe" />
            Latest Career Insights
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer luxury-hover-lift"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-r from-gold-luxe/10 to-platinum-amber-glow/10 rounded-3xl p-8 h-full border border-gold-luxe/30 hover:border-gold-luxe/60 transition-all duration-300">
                  <div className="mb-6">
                    <span className="bg-gold-luxe text-jet-black px-4 py-2 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-jet-black mb-4 group-hover:text-gold-luxe transition-colors duration-300">
                    {post.title}
                  </h4>
                  <p className="text-warm-prestige-gray mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-prestige-gray">{post.readTime}</span>
                   
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-luxury-dark rounded-3xl p-16 text-ivory-white luxury-stagger-item">
          <h3 className="text-4xl font-bold mb-6 flex items-center justify-center">
            <Target className="h-10 w-10 mr-4 text-gold-luxe" />
            Ready for Your Career Transformation?
          </h3>
          <p className="text-warm-prestige-gray mb-10 text-xl leading-relaxed">
            Get access to our complete career transformation toolkit and start your journey today
          </p>
          <Button
            size="lg"
            className="bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold px-12 py-6 text-xl luxury-btn luxury-hover-lift shadow-2xl animate-luxury-glow"
            onClick={() => {
              const message =
                "Hi Nexplacers™, I'd like to access your career transformation resources and learn more about your services."
              const whatsappUrl = `https://wa.me/918732948070?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, "_blank")
            }}
          >
            Get Free Resources
          </Button>
        </div>
      </div>
    </section>
  )
}
