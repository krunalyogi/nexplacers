"use client";

import {
  BookCheck,
  FileText,
  Users,
  MessageCircle,
  TrendingUp,
  PhoneCall
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { JSX } from "react/jsx-runtime";

export default function CareerTipsPage(): JSX.Element {
  const callRef = useRef<null | HTMLDivElement>(null);

  const scrollToCall = () => {
    callRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-navy-900 mb-4 leading-tight">
          Career Tips from Nexplacers™ Experts
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Practical advice, strategies, and insights to help you stand out, scale up, and succeed in your job search and career journey.
        </p>
        <nav className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#resume" className="hover:text-gold font-medium">Resume</a>
          <a href="#interview" className="hover:text-gold font-medium">Interview</a>
          <a href="#linkedin" className="hover:text-gold font-medium">LinkedIn</a>
          <a href="#apply" className="hover:text-gold font-medium">Apply Smart</a>
          <a href="#engage" className="hover:text-gold font-medium">Engage</a>
          <button onClick={scrollToCall} className="hover:text-gold font-medium">Get Help</button>
        </nav>
      </header>

      <section className="space-y-28 text-lg leading-relaxed">
        <div id="resume">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="text-gold w-6 h-6" />
            <h2 className="text-3xl font-semibold text-navy-900">Tip #1: Treat Your Resume Like a Sales Page</h2>
          </div>
          <p>
            Think of your resume as a strategic marketing asset — not just a document. Begin with a powerful summary that speaks to the role you're targeting. Avoid long paragraphs and generic job duties. Focus on your value proposition.
          </p>
          <p>
            Highlight measurable achievements like "Increased lead generation by 47%" or "Reduced onboarding time by 30%." Use bullet points with consistent formatting and tailor your resume with relevant keywords for each job application.
          </p>
          <p>
            Use tools like Jobscan to align your resume with ATS filters. Ensure your design is clean, with plenty of white space, readable fonts, and logical section hierarchy. Recruiters often spend less than 10 seconds on a resume — make those seconds count.
          </p>
        </div>

        <div id="interview">
          <div className="flex items-center gap-3 mb-2">
            <BookCheck className="text-gold w-6 h-6" />
            <h2 className="text-3xl font-semibold text-navy-900">Tip #2: Master the STAR Method for Interviews</h2>
          </div>
          <p>
            Interviewers aren’t just testing your knowledge — they’re evaluating how you think. The STAR method (Situation, Task, Action, Result) helps structure your responses to behavioral questions clearly.
          </p>
          <p>
            Choose real examples from your past experience. Instead of vague answers like “I’m a good leader,” say: “In my previous role, our project was behind by 2 weeks (Situation). I was assigned to lead a recovery effort (Task). I introduced daily huddles and restructured the timeline (Action). We delivered on time and received internal awards (Result).”
          </p>
          <p>
            Practice your STAR stories aloud. Record yourself. Ask a friend or coach for feedback. Interview confidence comes from structure and rehearsal.
          </p>
        </div>

        <div id="linkedin">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-gold w-6 h-6" />
            <h2 className="text-3xl font-semibold text-navy-900">Tip #3: Optimize Your LinkedIn Headline</h2>
          </div>
          <p>
            Your headline is one of the most visible and searchable fields on LinkedIn. Avoid just listing your job title. Instead, use a formula like: "[Role] | [Key Skills] | [Value Proposition]."
          </p>
          <p>
            For example: “Product Manager | Agile & SaaS Expert | Driving Scalable Digital Solutions.” This approach not only improves discoverability but shows what makes you different.
          </p>
          <p>
            Don’t forget your About section — it should tell your story in first-person, include 2–3 accomplishments, and invite recruiters to connect.
          </p>
        </div>

        <div id="apply">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="text-gold w-6 h-6" />
            <h2 className="text-3xl font-semibold text-navy-900">Tip #4: Apply Strategically, Not Massively</h2>
          </div>
          <p>
            Mass applications may feel productive but often waste time. Instead, pick 10–15 roles per week and craft personalized applications. Highlight your relevance in a concise cover letter, tweak your resume, and mirror keywords from the job post.
          </p>
          <p>
            Use job tracking tools like Huntr or Teal to manage follow-ups. Log interviews, feedback, and status updates. Strategic applicants adapt as they learn — boosting success faster than scattershot approaches.
          </p>
        </div>

        <div id="engage">
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="text-gold w-6 h-6" />
            <h2 className="text-3xl font-semibold text-navy-900">Tip #5: Use LinkedIn Comments to Build Authority</h2>
          </div>
          <p>
            Don’t just scroll LinkedIn — show up. Comment thoughtfully on posts from leaders in your field. Share brief insights, relevant experience, or ask smart questions. This builds your visibility, credibility, and network.
          </p>
          <p>
            Bonus: Consistent engagement improves your algorithm ranking, making your profile appear more often. Treat every comment as a mini audition for your next opportunity.
          </p>
        </div>

        <div id="call" ref={callRef}>
          <div className="flex items-center gap-3 mb-2">
            <PhoneCall className="text-gold w-6 h-6" />
            <h2 className="text-3xl font-semibold text-navy-900">Tip #6: Book a Free Strategy Call with Nexplacers™</h2>
          </div>
          <p>
            Don’t navigate the job hunt alone. Whether you're switching careers, relocating, or seeking sponsorship — we’re here to help. Get personalized support, a branded job search strategy, and access to exclusive opportunities.
          </p>
          <p>
            <a href="tel:+911234567890" className="text-gold font-semibold hover:underline">
              Call Now
            </a>
            — and let’s accelerate your career growth together.
          </p>
        </div>
      </section>

      <footer className="text-center mt-20 text-sm text-gray-500">
        © Nexplacers™ 2025. Your global job strategy partner.
      </footer>
    </main>
  );
}
