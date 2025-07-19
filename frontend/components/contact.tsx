// contact.tsx
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
      const response = await fetch("https://nexplacers.onrender.com/api/contact", {
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-jet-black mb-4">
            <Sparkles className="inline-block h-6 w-6 text-gold-luxe mr-2" />
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-warm-prestige-gray text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for collaborations or inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gold-luxe/10 p-3 rounded-xl">
                    <Icon className="h-6 w-6 text-gold-luxe" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-jet-black">{info.title}</h4>
                    <p className="text-warm-prestige-gray whitespace-pre-line">{info.content}</p>
                    {info.action && (
                      <a
                        href={info.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-luxe text-sm hover:underline"
                      >
                        {info.title === "WhatsApp" ? "Chat Now" : "Contact"}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gold-luxe/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-jet-black mb-2">First Name *</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl border-warm-prestige-gray/30 focus:outline-none focus:border-gold-luxe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-jet-black mb-2">Last Name *</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl border-warm-prestige-gray/30 focus:outline-none focus:border-gold-luxe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-jet-black mb-2">Email *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl border-warm-prestige-gray/30 focus:outline-none focus:border-gold-luxe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-jet-black mb-2">Phone *</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl border-warm-prestige-gray/30 focus:outline-none focus:border-gold-luxe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-jet-black mb-2">Role *</label>
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-xl border-warm-prestige-gray/30 focus:outline-none focus:border-gold-luxe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-jet-black mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 border rounded-xl border-warm-prestige-gray/30 focus:outline-none focus:border-gold-luxe resize-none"
              />
            </div>

            {successMessage && (
              <div className="bg-emerald-elite/10 text-emerald-elite border border-emerald-elite/30 rounded-xl p-4 text-sm">
                {successMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-luxury-gold text-jet-black font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-gold-luxe/90 transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
