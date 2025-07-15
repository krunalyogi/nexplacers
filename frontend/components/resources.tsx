import { BookOpen, FileText, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Career Tips",
      description: "Expert advice on career advancement and professional growth",
      articles: 12,
    },
    {
      icon: FileText,
      title: "Resume Mistakes to Avoid",
      description: "Common resume errors that cost you interviews",
      articles: 8,
    },
    {
      icon: Users,
      title: "Visa / OPT Guidelines",
      description: "Complete guide for international professionals",
      articles: 15,
    },
    {
      icon: TrendingUp,
      title: "Interview Success Strategies",
      description: "Proven techniques to ace any interview format",
      articles: 10,
    },
  ]

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Resources & Blog</h2>
          <p className="text-xl text-gray-600">Free resources to help you succeed in your career journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="text-sm text-gold font-medium">{resource.articles} Articles</div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
