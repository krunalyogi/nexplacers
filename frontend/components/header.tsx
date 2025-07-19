"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Careers", href: "#careers" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 luxury-backdrop ${
        isScrolled ? "bg-jet-black/95 shadow-2xl border-b border-gold-luxe/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-ivory-white hover:scale-105 transition-transform duration-300 cursor-pointer">
            Nexplacers<span className="text-gold-luxe animate-luxury-pulse">™</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-ivory-white hover:text-gold-luxe transition-all duration-300 relative group font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="tel:+918732948070">
              <Button className="bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold px-6 py-3 luxury-btn luxury-hover-lift shadow-lg">
                <Phone className="h-4 w-4 mr-2" />
                Book Strategy Call
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden text-ivory-white hover:text-gold-luxe transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-luxury-fade-in-up bg-jet-black/90 rounded-2xl p-6 luxury-backdrop">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-ivory-white hover:text-gold-luxe transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+918732948070" className="mt-4">
                <Button className="bg-gradient-luxury-gold text-jet-black hover:bg-platinum-amber-glow font-bold w-full luxury-btn">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Strategy Call
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
