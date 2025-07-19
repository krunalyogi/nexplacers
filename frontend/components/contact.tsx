"use client"
import { useState } from "react"
import type React from "react"
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to send message")

      setSuccessMessage("Message sent successfully! We'll get back to you within 24 hours.")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        message: "",
      })

      setTimeout(() => setSuccessMessage(""), 5000)
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert("Something went wrong: " + err.message)
      } else {
        alert("Something went wrong.")
      }
    }

    setLoading(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8732948070",
      action: "tel:+918732948070",
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@nexplacers.com",
      action: "mailto:support@nexplacers.com",
    },
    {
      icon: MapPin,
      title: "Locations",
      content: "Ahmedabad, India (Virtual HQ)\nDelaware, USA (US Office)",
      action: null,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Quick support via WhatsApp",
      action: "https://wa.me/918732948070",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM IST\nSat: 10AM-2PM IST",
      action: null,
    },
    {
      icon: Globe,
      title: "Global Support",
      content: "24/7 support for international clients",
      action: null,
    },
  ]

  return (
    <section id="contact" className="py-32 bg-luxe-off-white relative overflow-hidden">
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
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-jet-black mb-10 luxury-stagger-item">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-2xl text-warm-prestige-gray luxury-stagger-item leading-relaxed">
            Ready to transform your career? Let's start the conversation and design your success story.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-bold text-jet-black mb-12 luxury-stagger-item flex items-center">
              <Sparkles className="h-8 w-8 mr-4 text-gold-luxe" />
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={index}
                    className="luxury-card p-8 rounded-3xl shadow-2xl luxury-hover-lift group border border-gold-luxe/20 luxury-stagger-item"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-luxury-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="h-8 w-8 text-jet-black" />
                    </div>
                    <h4 className="font-bold text-jet-black mb-3 text-xl">{info.title}</h4>
                    <p className="text-warm-prestige-gray whitespace-pre-line leading-relaxed">{info.content}</p>
                    {info.action && (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block mt-4"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-gold-luxe hover:text-jet-black transition-all duration-300 bg-transparent border-gold-luxe text-gold-luxe luxury-btn"
                        >
                          {info.title === "WhatsApp" ? "Chat Now" : "Contact"}
                        </Button>
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="bg-gradient-luxury-dark rounded-3xl p-12 text-ivory-white luxury-stagger-item">
              <h4 className="text-2xl font-bold mb-8 flex items-center justify-center">
                <Sparkles className="h-6 w-6 mr-3 text-gold-luxe" />
                Why Choose Nexplacers™?
              </h4>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">24hrs</div>
                  <div className="text-warm-prestige-gray font-semibold">Response Time</div>
                </div>
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">95%</div>
                  <div className="text-warm-prestige-gray font-semibold">Success Rate</div>
                </div>
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">500+</div>
                  <div className="text-warm-prestige-gray font-semibold">Placements</div>
                </div>
                <div className="group luxury-hover-lift cursor-pointer">
                  <div className="text-4xl font-bold text-gold-luxe mb-3 group-hover:animate-luxury-pulse">45</div>
                  <div className="text-warm-prestige-gray font-semibold">Days Average</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="luxury-card p-12 md:p-16 rounded-3xl shadow-2xl border border-gold-luxe/20 luxury-stagger-item">
            <h3 className="text-4xl font-bold text-jet-black mb-10 flex items-center">
              <Send className="h-8 w-8 mr-4 text-gold-luxe" />
              Start Your Transformation
            </h3>

            {successMessage && (
              <div
                className="bg-emerald-elite/10 border border-emerald-elite/30 text-emerald-elite px-8 py-6 rounded-2xl relative mb-8"
                role="alert"
              >
                <strong className="font-bold">Success: </strong>
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-jet-black mb-3">First Name *</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required className="w-full border-2 border-warm-prestige-gray/30 p-4 rounded-xl focus:border-gold-luxe focus:outline-none transition-colors bg-ivory-white luxury-focus" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-jet-black mb-3">Last Name *</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required className="w-full border-2 border-warm-prestige-gray/30 p-4 rounded-xl focus:border-gold-luxe focus:outline-none transition-colors bg-ivory-white luxury-focus" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-jet-black mb-3">Email Address *</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="youremail@example.com" required className="w-full border-2 border-warm-prestige-gray/30 p-4 rounded-xl focus:border-gold-luxe focus:outline-none transition-colors bg-ivory-white luxury-focus" />
              </div>

              <div>
                <label className="block text-sm font-bold text-jet-black mb-3">Phone Number *</label>
                <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your mobile number" required className="w-full border-2 border-warm-prestige-gray/30 p-4 rounded-xl focus:border-gold-luxe focus:outline-none transition-colors bg-ivory-white luxury-focus" />
              </div>

              <div>
                <label className="block text-sm font-bold text-jet-black mb-3">Current Role *</label>
                <input name="role" value={formData.role} onChange={handleChange} placeholder="e.g., Software Engineer" required className="w-full border-2 border-warm-prestige-gray/30 p-4 rounded-xl focus:border-gold-luxe focus:outline-none transition-colors bg-ivory-white luxury-focus" />
              </div>

              <div>
                <label className="block text-sm font-bold text-jet-black mb-3">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your career goals..." rows={6} required className="w-full border-2 border-warm-prestige-gray/30 p-4 rounded-xl focus:border-gold-luxe focus:outline-none transition-colors resize-none bg-ivory-white luxury-focus" />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold py-6 text-xl luxury-btn luxury-hover-lift shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-jet-black border-t-transparent mr-3"></div>
                    Sending Message<span className="luxury-loading-dots"></span>
                  </span>
                ) : (
                  <>
                    <Send className="h-6 w-6 mr-3" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
