import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Pricing } from "@/components/Pricing"
import { Testimonials } from "@/components/testimonials"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Resources } from "@/components/resources"
import { Careers } from "@/components/careers"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"




export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <WhyChooseUs />
      <Resources />
      <Careers />
      <Contact />
      
    </div>
  )
}
