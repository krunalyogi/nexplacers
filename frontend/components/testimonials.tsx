"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star, Trophy } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  salary: string
  timeframe: string
  rating: number
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1) // 1 = forward, -1 = backward

  const testimonials: Testimonial[] = [
    {
      name: "Ankit D.",
      role: "Sr. DevOps Engineer",
      company: "Tech Startup, San Francisco",
      quote:
        "Nexplacers transformed my career in just 6 weeks. Their strategic approach and personal branding made all the difference. The ROI was incredible - best investment I ever made!",
      salary: "$145K",
      timeframe: "45 days",
      rating: 5,
    },
    {
      name: "Priya S.",
      role: "Data Analyst",
      company: "Fortune 500, Germany",
      quote:
        "Their resume and job targeting literally changed my life. I went from getting no responses to multiple offers. The team's expertise is unmatched in the industry.",
      salary: "€85K",
      timeframe: "38 days",
      rating: 5,
    },
    {
      name: "Rahul M.",
      role: "Software Engineer",
      company: "FAANG Company",
      quote:
        "The interview coaching was incredible. They prepared me for every possible scenario and I aced all my interviews. Worth every penny and more!",
      salary: "$180K",
      timeframe: "52 days",
      rating: 5,
    },
    {
      name: "Sarah K.",
      role: "Product Manager",
      company: "Unicorn Startup, Toronto",
      quote:
        "Zero upfront plan was perfect for me. They took all the risk and delivered exactly what they promised. Highly recommend to anyone serious about career growth!",
      salary: "CAD $120K",
      timeframe: "41 days",
      rating: 5,
    },
  ]

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextTestimonial])

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      },
    }),
  }

  return (
    <section id="testimonials" className="py-32 bg-gradient-luxury-dark relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gold-luxe/10 rounded-full blur-3xl animate-luxury-float luxury-parallax" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-platinum-amber-glow/5 rounded-full blur-3xl animate-luxury-float luxury-parallax"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold-luxe/5 to-transparent rounded-full animate-luxury-rotate" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-10 luxury-stagger-item">
              <span className="text-white">Success</span>{" "}
              <span className="text-gradient-gold">Stories</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto luxury-stagger-item leading-relaxed">
              Real transformations from professionals who trusted us with their careers
            </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Card with animated content */}
          <div
            className="luxury-card luxury-backdrop rounded-3xl p-12 md:p-16 shadow-2xl border border-gold-luxe/20 luxury-hover-lift luxury-stagger-item text-black relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative min-h-[340px]">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={testimonials[currentIndex].name + currentIndex}
                  custom={direction}
                  variants={slideVariants}  
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  {/* Top Row */}
                  <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        <h4 className="font-bold text-3xl mr-6">
                          {testimonials[currentIndex].name}
                        </h4>
                        <div className="flex">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-gold-luxe fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gold-luxe font-bold text-xl mb-2">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-black/70 text-lg">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                    <div className="text-center md:text-right mt-6 md:mt-0">
                      <div className="bg-gradient-luxury-gold text-jet-black px-6 py-3 rounded-full text-2xl font-bold mb-3 shadow-lg">
                        {testimonials[currentIndex].salary}
                      </div>
                      <div className="text-black/80 font-semibold">
                        Placed in {testimonials[currentIndex].timeframe}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-6 h-16 w-16 text-gold-luxe/30" />
                    <motion.blockquote
                      className="text-3xl md:text-4xl font-medium leading-relaxed pl-12 text-black"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.5 }}
                    >
                      “{testimonials[currentIndex].quote}”
                    </motion.blockquote>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination & Buttons */}
          <div className="flex items-center justify-center mt-16 space-x-8">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous testimonial"
              onClick={prevTestimonial}
              className="border-2 border-gold-luxe/50 text-gold-luxe hover:bg-gold-luxe hover:text-jet-black bg-transparent w-16 h-16 rounded-full luxury-btn luxury-hover-lift"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => {
                    if (index === currentIndex) return
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gold-luxe scale-125 animate-luxury-pulse"
                      : "bg-black/30 hover:bg-black/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              className="border-2 border-gold-luxe/50 text-gold-luxe hover:bg-gold-luxe hover:text-jet-black bg-transparent w-16 h-16 rounded-full luxury-btn luxury-hover-lift"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Footer Badge */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center luxury-card luxury-backdrop rounded-full px-12 py-6">
              <Trophy className="h-8 w-8 text-gold-luxe mr-4" />
              <span className="text-black text-2xl font-bold">
                4.9/5 Average Rating • 500+ Success Stories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
