"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/testimonials"
import  Careers from "@/components/careers"
import { Resources } from "@/components/resources"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import CrispChat from "@/components/crisp-chat"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")

          const staggerItems = entry.target.querySelectorAll(".luxury-stagger-item")
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-luxury-fade-in-up")
            }, index * 150)
          })

            ;[
              { sel: ".luxury-slide-left", cls: "animate-luxury-slide-in-left", delay: 200 },
              { sel: ".luxury-slide-right", cls: "animate-luxury-slide-in-right", delay: 200 },
            ].forEach(({ sel, cls, delay }) => {
              const group = entry.target.querySelectorAll(sel)
              group.forEach((item, index) => {
                setTimeout(() => item.classList.add(cls), index * delay)
              })
            })
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      section.classList.add("luxury-fade-in-section")
      observer.observe(section)
    })

    const handleScroll = () => {
      const scrolled = window.pageYOffset

      // Typed NodeList
      const parallaxElements = document.querySelectorAll<HTMLElement>(".luxury-parallax")
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0.5")
        const yPos = -(scrolled * speed)
        el.style.transform = `translateY(${yPos}px)`
      })

      const header = document.querySelector<HTMLElement>("header")
      if (header) {
        const opacity = Math.min(scrolled / 100, 0.95)
        header.style.backgroundColor = `rgba(10,10,10,${opacity})`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const preloadLink = document.createElement("link")
    preloadLink.rel = "preload"
    preloadLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    preloadLink.as = "style"
    document.head.appendChild(preloadLink)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-luxe-off-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <Careers isOpen={false} onClose={function (): void {
        throw new Error("Function not implemented.")
      } } role={""} />
      <Resources />
      <Contact />
      <CrispChat />
    </div>
  )
}
