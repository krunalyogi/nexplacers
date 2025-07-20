"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: ["About Us", "Careers", "Success Stories", "Blog"],
    Services: ["Resume Writing", "LinkedIn Optimization", "Interview Coaching", "Salary Negotiation"],
    Resources: ["Career Tips", "FAQ"],
    Support: ["Contact Us", "Help Center", "Live Chat", "Schedule Call"],
  }

  return (
    <footer className="bg-gradient-luxury-dark text-ivory-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6">
              Nexplacers<span className="text-gold-luxe animate-luxury-pulse">™</span>
            </div>
            <p className="text-warm-prestige-gray mb-8 max-w-md leading-relaxed text-lg">
              Elite reverse recruiting & career placement for high-growth professionals worldwide. We don't just help
              you get hired — we market you like a brand.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/harshil2911/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-graphite-gray rounded-full flex items-center justify-center hover:bg-gold-luxe hover:text-jet-black transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-graphite-gray rounded-full flex items-center justify-center hover:bg-gold-luxe hover:text-jet-black transition-all duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/nexplacers.llc/profilecard/?igsh=djJrN3Jqbmo3b2Jw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-graphite-gray rounded-full flex items-center justify-center hover:bg-gold-luxe hover:text-jet-black transition-all duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:support@nexplacers.com"
                className="w-12 h-12 bg-graphite-gray rounded-full flex items-center justify-center hover:bg-gold-luxe hover:text-jet-black transition-all duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer Links Section */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-6 text-xl text-gold-luxe">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {link === "About Us" ? (
                      <a
                        href="#about-us"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        About Us
                      </a>
                    ) : link === "Careers" ? (
                      <a
                        href="#careers"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        Careers
                      </a>
                    ) : link === "Success Stories" ? (
                      <a
                        href="#testimonials"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        Success Stories
                      </a>
                    ) : link === "Blog" ? (
                      <Link
                        href="/blog"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        Blog
                      </Link>
                      
                    ) : link === "Career Tips" ? (
                      <Link href="/career-tips" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Resume Writing" ? (
                      <Link
                        href="#services"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        Resume Writing
                      </Link>
                    )  : link === "LinkedIn Optimization" ? (
                      <Link
                        href="#services"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        LinkedIn Optimization
                      </Link>
                    ) : link === "Interview Coaching" ? (
                      <Link
                        href="#services"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        Interview Coaching
                      </Link>
                    ) : link === "Salary Negotiation" ? (
                      <Link
                        href="#services"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        Salary Negotiation
                      </Link>
                    ): link === "Contact Us" ? (
                      <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Help Center" ? (
                      <Link href="helpcenter" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ): link === "Live Chat" ? (
                      <a
                        onClick={() => window.$crisp?.push(["do", "chat:open"])}
                        className="cursor-pointer text-gray-300 hover:text-gold transition-colors"
                      >
                        {link}
                      </a>
                    ) : link === "Schedule Call" ? (
                      <a
                        href="tel:+918732948070"
                        className="text-gray-300 hover:text-gold transition-colors"
                      >
                        {link}
                      </a>
                    ):link === "FAQ" ? (
                      <Link href="/faq" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) :(
                      <a
                        href="#"
                        className="text-warm-prestige-gray hover:text-gold-luxe transition-colors duration-300 text-lg"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info and Legal */}
        <div className="mt-16 pt-12 border-t border-graphite-gray">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-gold-luxe mr-4" />
              <div>
                <div className="font-semibold text-ivory-white">Phone</div>
                <a href="tel:+918732948070" className="text-warm-prestige-gray hover:text-gold-luxe transition-colors">
                  +91 8732948070
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-gold-luxe mr-4" />
              <div>
                <div className="font-semibold text-ivory-white">Email</div>
                <a
                  href="mailto:support@nexplacers.com"
                  className="text-warm-prestige-gray hover:text-gold-luxe transition-colors"
                >
                  support@nexplacers.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-gold-luxe mr-4" />
              <div>
                <div className="font-semibold text-ivory-white">Locations</div>
                <div className="text-warm-prestige-gray">Ahmedabad, India | Texas, US</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-8 mb-6 md:mb-0">
              <Link href="/Privacypolicy" className="text-warm-prestige-gray hover:text-gold-luxe transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="/TermsAndConditions"
                className="text-warm-prestige-gray hover:text-gold-luxe transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link href="/refund-policy" className="text-warm-prestige-gray hover:text-gold-luxe transition-colors">
                Refund Policy
              </Link>
              <Link href="/disclaimer" className="text-warm-prestige-gray hover:text-gold-luxe transition-colors">
                Disclaimer
              </Link>
            </div>
            <div className="text-warm-prestige-gray text-lg">
              Copyright © {currentYear} Nexplacers™. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
