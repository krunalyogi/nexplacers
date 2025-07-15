"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Ankit D.",
      role: "Sr. DevOps Engineer",
      company: "Tech Startup, San Francisco",
      quote:
        "Nexplacers helped me land a 6-figure tech role in 45 days. Their strategic approach and personal branding made all the difference.",
      salary: "$145K",
      timeframe: "45 days",
    },
    {
      name: "Priya S.",
      role: "Data Analyst",
      company: "Fortune 500, Germany",
      quote:
        "Their resume and job targeting literally changed my life. I went from getting no responses to multiple offers.",
      salary: "€85K",
      timeframe: "38 days",
    },
    {
      name: "Rahul M.",
      role: "Software Engineer",
      company: "FAANG Company",
      quote:
        "The interview coaching was incredible. They prepared me for every possible scenario and I aced all my interviews.",
      salary: "$180K",
      timeframe: "52 days",
    },
    {
      name: "Sarah K.",
      role: "Product Manager",
      company: "Unicorn Startup, Toronto",
      quote: "Zero upfront plan was perfect for me. They took all the risk and delivered exactly what they promised.",
      salary: "CAD $120K",
      timeframe: "41 days",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
          <p className="text-xl text-gray-300">
            Real results from real professionals who transformed their careers with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <Quote className="h-12 w-12 text-gold mb-6" />

            <blockquote className="text-2xl md:text-3xl text-navy-900 font-medium mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-bold text-xl text-navy-900 mb-1">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600 mb-2">{testimonials[currentIndex].role}</div>
                <div className="text-gray-500">{testimonials[currentIndex].company}</div>
              </div>

              <div className="mt-6 md:mt-0 md:text-right">
                <div className="text-2xl font-bold text-gold mb-1">{testimonials[currentIndex].salary}</div>
                <div className="text-gray-600">Placed in {testimonials[currentIndex].timeframe}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gold" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
