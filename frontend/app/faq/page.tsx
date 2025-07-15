"use client";

import React, { JSX } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What exactly does Nexplacers™ do?",
    answer: `We are a reverse recruiting and staffing agency that helps job seekers secure high-paying roles — especially in the U.S., Germany, Canada, UK, and beyond.
We don’t just write resumes. We market your career like a brand, apply to roles on your behalf, support you in interviews, and help you close offers faster.`,
  },
  {
    question: "Do you guarantee job placement?",
    answer: `No one can guarantee jobs — but we guarantee real effort, strategic submission, recruiter support, and weekly accountability to get you there.
Our clients land interviews with top companies when they engage fully and follow the process.`,
  },
  {
    question: "Who is this service for?",
    answer: `Our clients include:
- Professionals on OPT, STEM Extension, H1B, or GC-EAD
- International candidates seeking remote or U.S.-based jobs
- Tech, consulting, data, marketing, and finance talent
- Mid-to-senior professionals targeting $80K–$180K+ salaries`,
  },
  {
    question: "What’s the difference between your plans?",
    answer: `We offer 4 premium pricing plans — from entry-level to elite.
Some plans are one-time upfront + success fee, while others offer zero upfront and pay-only-after-placement.
You choose based on your urgency, risk level, and support needs. We guide you during the consultation.`,
  },
  {
    question: "Do you write resumes and LinkedIn profiles?",
    answer: `Yes — but that’s just the start. We don’t deliver templates.
We create ATS-optimized resumes, build impact-driven profiles, and align every part of your story to the roles you’re targeting.`,
  },
  {
    question: "How do you help with interviews?",
    answer: `We offer:
- 1:1 mock interviews
- Interview coaching & confidence training
- Answer frameworks (STAR, storytelling)
- Negotiation strategy once an offer is near`,
  },
  {
    question: "Do you apply to jobs for me?",
    answer: `Yes. Our team manually submits your profile to:
- Direct employers
- Fortune 500 companies
- Internal hiring teams

We also craft custom emails, pitch you like a recruiter, and track progress weekly.`,
  },
  {
    question: "What if I don’t get a job? Will I get a refund?",
    answer: `No — as per our No Refund Policy, all payments are final.
However, many of our plans include full service for up to 90 days. If you don’t land within this time and you’ve engaged properly, we’ll discuss adjustments or additional support at our discretion.`,
  },
  {
    question: "What if I don’t have a good resume or LinkedIn yet?",
    answer: `No problem. Every plan includes Resume + RUC (Resume Utility Check), and our mid-to-premium plans offer LinkedIn overhaul and positioning.

We’ll build your brand from scratch if needed.`,
  },
  {
    question: "What happens after I make payment?",
    answer: `You will:
1. Get an onboarding email
2. Join a WhatsApp/Slack support channel
3. Schedule your strategy call
4. Begin resume work → submissions → tracking
5. Receive weekly updates & recruiter insights`,
  },
  {
    question: "What is the success fee and when is it paid?",
    answer: `The success fee is a percentage of your first-year salary, paid after you accept a job offer.
This ensures we’re invested in your success — and you only pay the full amount after results.`,
  },
  {
    question: "Can I pay in installments?",
    answer: `Yes. We offer flexible monthly plans with zero interest.
You can choose between:
- One-time payment
- Monthly installment (3–5 months)

We’ll break it down for you during consultation.`,
  },
  {
    question: "How do I get started?",
    answer: `Click “Book Free Call” or message us on WhatsApp/LinkedIn.
We’ll walk you through the best plan and start your onboarding within 24 hours.`,
  },
];

export default function FAQPage(): JSX.Element {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-navy-900 mb-10">
        Frequently Asked Questions (FAQ)
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm open:shadow-md transition-all"
          >
            <summary className="text-lg font-semibold cursor-pointer text-navy-800">
              {index + 1}. {faq.question}
            </summary>
            <div className="mt-2 text-gray-700 whitespace-pre-line">{faq.answer}</div>
          </details>
        ))}
      </div>
    </main>
  );
}
