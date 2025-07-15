'use client'

import { useState } from "react"
import { DollarSign, Users, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import ApplyModal from "@/components/ApplyModal"

export function Careers() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState('')

  const positions = [
    {
      icon: DollarSign,
      title: "Sales Executive",
      type: "Commission-based role",
      description: "Drive growth by connecting with high-potential professionals seeking career transformation.",
      requirements: ["2+ years sales experience", "Excellent communication skills", "Results-driven mindset"],
    },
    {
      icon: Users,
      title: "Resume Writer",
      type: "Freelance",
      description: "Craft compelling, ATS-optimized resumes that get our clients noticed by top employers.",
      requirements: ["Professional writing experience", "HR/Recruiting background preferred", "Portfolio required"],
    },
    {
      icon: Headphones,
      title: "Client Success Rep",
      type: "Full-time",
      description: "Ensure our clients have an exceptional experience throughout their career transformation journey.",
      requirements: ["Customer success experience", "Strong problem-solving skills", "Empathetic communication"],
    },
  ]

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600">Help us transform careers while building your own success story</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {positions.map((position, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                <position.icon className="h-6 w-6 text-gold" />
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-2">{position.title}</h3>
              <div className="text-gold font-medium mb-4">{position.type}</div>
              <p className="text-gray-600 mb-6">{position.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-navy-900 mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className="w-full bg-navy-900 text-white hover:bg-navy-800"
                onClick={() => {
                  setSelectedPosition(position.title)
                  setModalOpen(true)
                }}
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center bg-navy-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-gray-300 mb-6">
            Join a team that's revolutionizing how professionals find their dream careers
          </p>
         
        </div>
      </div>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        role={selectedPosition}
      />
    </section>
  )
}
