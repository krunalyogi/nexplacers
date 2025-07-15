"use client";

import { MessageCircleQuestion, LifeBuoy, FileText, PhoneCall } from "lucide-react";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

export default function HelpCenterPage(): JSX.Element {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 text-gray-800">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-navy-900 mb-4">Help Center</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Need assistance? Find answers to frequently asked questions or connect directly with our support team.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-12">
        {/* General Support */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="text-gold w-6 h-6" />
            <h2 className="text-2xl font-semibold text-navy-900">General Support</h2>
          </div>
          <ul className="space-y-3 text-base text-gray-700">
            <li>🟡 How do I contact Nexplacers™ support?</li>
            <li>🟡 What services do you offer under career placement?</li>
            <li>🟡 Where are your team members located?</li>
            <li>🟡 How soon can I expect a response after submitting a query?</li>
          </ul>
        </div>

        {/* Resume & Job Application */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-gold w-6 h-6" />
            <h2 className="text-2xl font-semibold text-navy-900">Resume & Job Applications</h2>
          </div>
          <ul className="space-y-3 text-base text-gray-700">
            <li>🟡 How do I get my resume reviewed?</li>
            <li>🟡 Will you apply to jobs on my behalf?</li>
            <li>🟡 What is the turnaround time for resume services?</li>
            <li>🟡 How do I request job alerts?</li>
          </ul>
        </div>

        {/* Billing & Refunds */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircleQuestion className="text-gold w-6 h-6" />
            <h2 className="text-2xl font-semibold text-navy-900">Billing & Refunds</h2>
          </div>
          <ul className="space-y-3 text-base text-gray-700">
            <li>🟡 Can I request a refund after purchase?</li>
            <li>🟡 What happens if I miss an installment payment?</li>
            <li>🟡 How do I update my billing info?</li>
            <li>
              🟡 <Link href="/refund-policy" className="text-gold font-medium hover:underline">Read our full refund policy</Link>
            </li>
          </ul>
        </div>

        {/* Need Help Now */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <PhoneCall className="text-gold w-6 h-6" />
            <h2 className="text-2xl font-semibold text-navy-900">Need Help Now?</h2>
          </div>
          <p className="text-base text-gray-700 mb-4">
            For urgent queries, feel free to give us a call.
          </p>
          <a
            href="tel:++918732948070"
            className="inline-block bg-gold text-navy-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-400 transition"
          >
            📞 Call Nexplacers™ Support
          </a>
        </div>
      </section>

      <footer className="text-center mt-20 text-sm text-gray-500">
        Still need help? Email us at{" "}
        <a href="mailto:support@nexplacers.com" className="text-gold hover:underline">
          support@nexplacers.com
        </a>
        .
      </footer>
    </main>
  );
}
