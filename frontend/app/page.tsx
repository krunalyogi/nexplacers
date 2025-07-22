"use client";

import { useEffect } from "react";
import Head from "next/head";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/testimonials";
import Careers from "@/components/careers"; // default import
import { Resources } from "@/components/resources";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import CrispChat from "@/components/crisp-chat";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          const staggerItems = entry.target.querySelectorAll(".luxury-stagger-item");
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-luxury-fade-in-up");
            }, index * 150);
          });

          [
            { sel: ".luxury-slide-left", cls: "animate-luxury-slide-in-left", delay: 200 },
            { sel: ".luxury-slide-right", cls: "animate-luxury-slide-in-right", delay: 200 },
          ].forEach(({ sel, cls, delay }) => {
            const group = entry.target.querySelectorAll(sel);
            group.forEach((item, index) => {
              setTimeout(() => item.classList.add(cls), index * delay);
            });
          });
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("luxury-fade-in-section");
      observer.observe(section);
    });

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      const parallaxElements = document.querySelectorAll<HTMLElement>(".luxury-parallax");
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0.5");
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });

      const header = document.querySelector<HTMLElement>("header");
      if (header) {
        const opacity = Math.min(scrolled / 100, 0.95);
        header.style.backgroundColor = `rgba(10,10,10,${opacity})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";
    preloadLink.as = "style";
    document.head.appendChild(preloadLink);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nexplacers | Smart Career Solutions</title>
        <meta
          name="description"
          content="Nexplacers helps students and professionals find top jobs in the US with recruiter support, resume optimization, and tech job marketing plans."
        />
        <meta
          name="keywords"
          content="nexplacers, resume, placement, career growth, IT staffing agency USA, Remote job placement services, Reverse recruiting agency, Job marketing agency for tech professionals, Resume marketing services USA, US job search support for Indians, Premium tech job assistance, AI-powered job application service, Best resume distribution service for OPT/CPT, How to get interview calls fast USA, Job support for international students in USA, Recruiter to apply jobs for you, Remote tech jobs USA help, Full-time placement support for software engineers, Hire recruiter to apply for jobs, Job search monthly subscription, Success-fee recruiting plans, Resume + LinkedIn optimization service, Personalized job marketing for developers, Dedicated recruiter job support plan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical */}
        <link rel="canonical" href="https://nexplacers.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="VX44F5so6mdsqJbQbh7p-aNgIinkP3dU-z7sw-Fk5V4" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Nexplacers | Smart Career Solutions" />
        <meta
          property="og:description"
          content="Helping software professionals and students get high-quality jobs with resume, LinkedIn, and recruiter-led job application support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexplacers.com" />
        <meta property="og:image" content="https://nexplacers.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexplacers | Smart Career Solutions" />
        <meta
          name="twitter:description"
          content="Helping software professionals and students get high-quality jobs with resume, LinkedIn, and recruiter-led job application support."
        />
        <meta name="twitter:image" content="https://nexplacers.com/logo.png" />
      </Head>

      <div className="min-h-screen bg-luxe-off-white overflow-x-hidden">
        <Header />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <Careers />
        <Resources />
        <Contact />
        <CrispChat />
      </div>
    </>
  );
}
