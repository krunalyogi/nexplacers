"use client";

import { JSX } from "react";

export default function RefundPolicyPage(): JSX.Element {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-navy-900 mb-10">
        Refund Policy – Nexplacers™
      </h1>

      <p className="text-sm text-gray-500 text-right mb-6">Last Updated:28 May 2025 </p>

      <p className="mb-6">
        At Nexplacers™, we are committed to delivering high-quality reverse recruiting, staffing, and career support services. Due to the nature of our business and the value delivered through strategy, time, and intellectual effort, we maintain a strict <strong>No Refund Policy</strong>.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. No Refund on Any Plan</h2>
        <p className="mb-2">All payments made to Nexplacers™ for one-time packages, installment plans, or success-based services are non-refundable under all circumstances, including but not limited to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Client dissatisfaction or change of mind</li>
          <li>Delayed job placement or process results</li>
          <li>Client's failure to provide necessary documents or respond in a timely manner</li>
          <li>Resignation from job after placement</li>
          <li>Internal or external hiring changes</li>
        </ul>
        <p className="mt-2">We advise all clients to read our service descriptions, terms, and success criteria thoroughly before proceeding.</p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Success Fee Obligations</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>The success fee is legally due once a candidate receives and accepts a job offer (including contract, W2, C2C, or direct-hire).</li>
          <li>Refusing to pay the agreed success fee after a successful placement may result in legal action and blacklisting from future support.</li>
          <li>Success fees are non-refundable, even if the candidate exits the job voluntarily or is terminated.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Chargebacks & Fraudulent Disputes</h2>
        <p>We actively monitor and contest any unauthorized chargebacks or payment reversals. Clients who attempt to file false claims may face:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Immediate termination of services</li>
          <li>Reporting to legal collection authorities</li>
          <li>Permanent blacklisting from Nexplacers™ and partner networks</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Subscription or Installment Plans</h2>
        <p>If you opt for a monthly or installment plan:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>You are contractually obligated to complete all scheduled payments.</li>
          <li>Missed or skipped payments will result in immediate pause or termination of services.</li>
          <li>No refunds will be granted for partial use of service or non-usage.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Refund Exceptions (If Applicable)</h2>
        <p>Refunds may only be considered if:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Duplicate payment was made in error</li>
          <li>A service was never initiated by our team within 14 days of purchase and no interaction or onboarding took place</li>
        </ul>
        <p className="mt-2">
          All exceptions require written request to <a href="mailto:support@nexplacers.com" className="text-blue-600 underline">support@nexplacers.com</a> and will be reviewed case-by-case.
        </p>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
        <p>This refund policy shall be governed and interpreted under:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>United States law (Delaware jurisdiction) for international clients</li>
          <li>Indian law (Gujarat jurisdiction) for domestic clients</li>
        </ul>
        <p className="mt-2">All disputes shall be subject to the exclusive jurisdiction of courts in the respective region.</p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Policy Acceptance</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You have read, understood, and agreed to this policy</li>
          <li>You waive any right to claim refund, partial refund, or cancellation except under documented exception scenarios</li>
          <li>This policy is enforceable under the contract of service between you and Nexplacers™</li>
        </ul>
      </section>

      <div className="mt-10">
        <p className="font-semibold">📩 For all refund-related queries, email:</p>
        <p>
          <a href="mailto:support@nexplacers.com" className="text-blue-600 underline">support@nexplacers.com</a>
        </p>
      </div>
    </main>
  );
}
