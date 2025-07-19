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
      const response = await fetch("https://nexplacers-backend.onrender.com/api/contact", {
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
      {/* ... same JSX as before ... */}
    </section>
  )
}
