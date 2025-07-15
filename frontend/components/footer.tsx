'use client'
import Link from "next/link"
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react"
import { About } from "./about"

export function Footer() {
  const footerLinks = {
    Company: ["About Us", "Careers"],
    Services: ["Resume Writing", "LinkedIn Optimization", "Interview Coaching", "Salary Negotiation"],
    Resources: ["Blog", "Career Tips", "Success Stories", "FAQ"],
    Support: ["Contact Us", "Help Center", "Live Chat", "Schedule Call"],
  }

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Nexplacers<span className="text-gold">™</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Elite reverse recruiting & career placement for high-growth professionals worldwide. We don't just help
              you get hired — we market you like a brand.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/harshil2911/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href=""
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/nexplacers.llc/profilecard/?igsh=djJrN3Jqbmo3b2Jw"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href=""
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {link === "FAQ" ? (
                      <Link href="/faq" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Success Stories" ? (
                      <Link href="/#testimonials" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "About us" ? (
                      <Link href="#about" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Resume Writing" ? (
                      <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "LinkedIn Optimization" ? (
                      <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Interview Coaching" ? (
                      <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Salary Negotiation" ? (
                      <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Blog" ? (
                      <Link href="blog" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) :link === "Contact Us" ? (
                      <Link href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Career Tips" ? (
                      <Link href="career-tips" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : 
                     link === "Careers" ? (
                      <Link href="#careers" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Help Center" ? (
                      <Link href="helpcenter" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </Link>
                    ) : link === "Live Chat" ? (
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
                    ) : (
                      <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/Privacypolicy" className="text-gray-300 hover:text-gold transition-color">
                PrivacyPolicy
              </Link>
              <Link href="TermsAndConditions" className="text-gray-300 hover:text-gold transition-color">
                Terms & Conditions
              </Link>
              <Link href="refund-policy" className="text-gray-300 hover:text-gold transition-colors">
                Refund Policy
              </Link>
              <Link href="/disclaimer" className="text-gray-300 hover:text-gold transition-colors">
                Disclaimer
              </Link>
            </div>
            <div className="text-gray-400">Copyright © Nexplacers™ 2025. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
