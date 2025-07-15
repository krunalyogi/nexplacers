"use client";

import { JSX } from "react";

export default function BlogPage(): JSX.Element {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-gray-800">
      <article className="space-y-14">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-navy-900 mb-4 leading-tight">
            Beyond Resumes: How Nexplacers™ is Revolutionizing the Global Job Hunt
          </h1>
          <p className="text-sm text-gray-500">Published on July 13, 2025</p>
        </header>

        <section className="text-lg leading-relaxed space-y-6">
          <p>
            In the post-pandemic era, the job market has changed dramatically. Talent is everywhere — yet the playing field is anything but level. Especially for international professionals, landing a high-paying job abroad or remotely is more complicated than ever.
            Resumes vanish into applicant tracking systems. Cover letters go unread. Job portals are flooded. Candidates feel invisible.
          </p>

          <p>
            That’s why <strong>Nexplacers™</strong> was born — to bring a human-first, results-focused approach to global career placement. We’re not just another resume writing service. We are a <em>reverse recruiting engine</em> that transforms overlooked professionals into irresistible candidates.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">🌐 The Global Job Market is Broken</h2>
          <p className="text-lg leading-relaxed">
            Most international professionals face three core challenges:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>VISA barriers and employer hesitations</li>
            <li>ATS filters and robotic rejections</li>
            <li>Lack of personal branding and job market visibility</li>
          </ul>
          <p className="mt-4">
            You may be skilled, motivated, and educated — but if no one sees your value, it doesn’t matter. Nexplacers™ helps you break the noise.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">🚀 What Makes Nexplacers™ Different?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Manual job applications to 100+ strategic roles every week</li>
                <li>Human-written, ATS-optimized resumes that stand out</li>
                <li>Custom LinkedIn positioning to attract inbound opportunities</li>
                <li>Real-time support from recruiters via WhatsApp or Slack</li>
                <li>Confidence-boosting mock interviews and STAR storytelling coaching</li>
              </ul>
            </div>
            <div>
              <p>
                We don’t wait for employers to find you. We pitch your profile like a recruiter — directly to companies, hiring managers, and talent teams. It’s active. It’s personal. And it works.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">🌍 Designed for Global, Visa-Conscious Talent</h2>
          <p className="text-lg leading-relaxed">
            Whether you're an OPT student, H1B holder, STEM graduate, or global freelancer looking for remote placement — Nexplacers™ was designed with your journey in mind.
          </p>
          <blockquote className="border-l-4 border-gold pl-4 italic text-navy-800 text-lg mt-4">
            “I had applied to 200+ jobs on my own and got nothing. With Nexplacers™, I had 8 interviews in 3 weeks and accepted an offer from a US-based fintech company.”<br />
            – Ravi S., Software Engineer, Hyderabad
          </blockquote>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">📈 Results That Speak Louder Than Promises</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>🚀 3x–6x more interview invites within 30–45 days</li>
            <li>💼 80% placement rate within 60–90 days</li>
            <li>💰 Salary packages increased by 20–40% on average</li>
            <li>🌟 Offers from brands like Amazon, TCS, Bosch, Accenture, Deloitte, Capgemini</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">🎓 Who Is This For?</h2>
          <p className="text-lg leading-relaxed">
            Nexplacers™ is for job seekers who are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>On OPT, STEM, H1B, GC-EAD, or PR status</li>
            <li>From India, Nigeria, Bangladesh, Pakistan, UAE, or any region targeting U.S./Germany/Canada/UK roles</li>
            <li>In tech, consulting, data, analytics, marketing, finance, or product</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-navy-900 mb-4">🔓 Ready to Unlock Opportunities?</h2>
          <p className="text-lg leading-relaxed">
            We believe everyone deserves a shot at a high-impact career. If you’re tired of waiting for callbacks or being ghosted by recruiters, Nexplacers™ gives you the leverage you’ve been missing.
          </p>
          <p className="mt-4">
            🎯 <a href="/schedule-call" className="text-gold hover:underline font-semibold">Book a Free Strategy Call</a> today. Let’s make recruiters come to you.
          </p>
          <p>
            👉 Learn more in our <a href="/faq" className="text-gold hover:underline font-medium">FAQ</a> or explore real <a href="/#testimonials" className="text-gold hover:underline font-medium">success stories</a>.
          </p>
        </section>

        <footer className="text-center mt-12 text-sm text-gray-500">
          © Nexplacers™ 2025. Built for global professionals. Powered by purpose.
        </footer>
      </article>
    </main>
  );
}
