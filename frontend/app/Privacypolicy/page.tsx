// app/privacy-policy/page.tsx

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mt-24 p-6 max-w-4xl mx-auto text-base text-gray-800">
      
      <h1 className="text-3xl font-bold mb-4">NEXPLACERS™ Privacy Policy</h1>
      <p className="text-gray-500 mb-6">Last updated: 28 May 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p>
          At Nexplacers™, we respect your privacy and are committed to protecting the personal information of our clients, prospects, and users. This Privacy Policy outlines how we collect, use, disclose, store, and safeguard your data in compliance with global data protection laws, including:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>The Information Technology Act, 2000 (India)</li>
          <li>General Data Protection Regulation (GDPR - EU/UK)</li>
          <li>California Consumer Privacy Act (CCPA - USA)</li>
          <li>Personal Information Protection and Electronic Documents Act (PIPEDA - Canada)</li>
          <li>Children’s Online Privacy Protection Act (COPPA - USA)</li>
        </ul>
        <p className="mt-2">
          By using our services, website, or signing a client agreement, you consent to the terms of this Privacy Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>Full name, email, phone number, and address</li>
          <li>Educational background and work experience</li>
          <li>Resume, LinkedIn URL, and other career-related documents</li>
          <li>Job preferences, desired location, visa/work authorization status, salary expectations</li>
          <li>Communications made with Nexplacers staff and through automated systems</li>
          <li>IP addresses, browser type, session activity, and device information</li>
        </ul>
        <p className="mt-2">
          We do not intentionally collect data from individuals under the age of 16 without verified parental or guardian consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Deliver career services as outlined in your chosen plan</li>
          <li>Improve our marketing, customer experience, and analytics</li>
          <li>Submit your profile to employers, recruiters, and job platforms</li>
          <li>Conduct background or employment checks with your consent</li>
          <li>Contact you with updates, reminders, interview alerts, service notices</li>
          <li>Comply with financial and legal regulations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Share Information</h2>
        <p>
          Your data may be shared with:
        </p>
        <ul className="list-disc pl-6">
          <li>Verified employers, recruiters, staffing partners, job boards</li>
          <li>Internal team members managing your placement</li>
          <li>Third-party platforms or vendors for analytics, support, or scheduling</li>
        </ul>
        <p className="mt-2">
          We never sell your personal data. Data is shared strictly for service purposes under NDA or platform Terms of Use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Storage & Security</h2>
        <ul className="list-disc pl-6">
          <li>Encrypted servers with limited access</li>
          <li>Platforms: Google Cloud, Notion, Airtable, Stripe, WhatsApp, email</li>
          <li>Access is restricted to trained Nexplacers team members</li>
          <li>Retention: 12 months post-placement, or as required by law</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>Request a copy of your data</li>
          <li>Correct or update information</li>
          <li>Withdraw consent (with service impact)</li>
          <li>Request deletion or portability</li>
          <li>File complaints with your data protection authority</li>
        </ul>
        <p className="mt-2">
          Contact: <a href="mailto:privacy@nexplacers.com" className="text-blue-600 hover:underline">privacy@nexplacers.com</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. International Data Transfer</h2>
        <p>
          Your data may be processed in India, the United States, the UK, or Canada. We use GDPR Standard Contractual Clauses where required.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cookies, Trackers & Analytics</h2>
        <p>
          We use cookies to track usage, optimize experience, and retarget ads. You can disable cookies in your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Policy Updates</h2>
        <p>
          We may update this policy at any time. You will be notified via email (if you're a client) or via our website.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Contact Information</h2>
        <p>
          Nexplacers™<br />
          Email: <a href="mailto:privacy@nexplacers.com" className="text-blue-600 hover:underline">privacy@nexplacers.com</a><br />
          Phone: +91 8732948070<br />
          Head Office: Gujarat, India<br />
          U.S. Office: Delaware (LLC Filing Address)<br />
          UK & Canada Support: Remotely Operated
        </p>
      </section>

      <p className="mt-6">
        By continuing to use our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
