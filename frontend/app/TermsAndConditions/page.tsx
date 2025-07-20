import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="mt-24 p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">NEXPLACERS™ Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated:28 May 2025</p>

      <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using our services, you agree to comply with all terms listed here and in our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Scope of Service</h2>
      <p className="mb-4">
        Nexplacers provides career services such as resume marketing, recruiter outreach, interview prep, etc.
        Results depend on your input and cooperation. No guarantees for job placement or visa approval.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Payment Terms</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>All payments must be timely and complete</li>
        <li>No refunds after first service delivery</li>
        <li>Late payment may result in additional charges</li>
        <li>Accepted: Stripe, Razorpay, UPI, bank transfers</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">4. Client Obligations</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Provide accurate personal and professional data</li>
        <li>Stay responsive and cooperative</li>
        <li>Do not contact companies introduced by Nexplacers directly</li>
        <li>Maintain confidentiality of shared resources</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
      <p className="mb-4">
        All Nexplacers materials are protected by copyright. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Termination & Suspension</h2>
      <p className="mb-4">
        We may suspend or terminate service if terms are violated or if you are inactive/unresponsive.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        Nexplacers is not liable for employer rejections, visa denials, or misuse of external platforms. Maximum liability is limited to service fees paid.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p className="mb-4">
        This agreement follows applicable laws of India, USA (Delaware), UK, and Canada. Disputes resolved via arbitration or civil court in Ahmedabad, India or Delaware, USA.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Modifications</h2>
      <p className="mb-4">
        We may revise these terms at any time with updates shown on our site or emailed to active clients.
      </p>

      <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
      <p>
        Email: <a href="mailto:support@nexplacers.com" className="text-blue-600">support@nexplacers.com</a><br />
        Phone: +91 8732948070<br />
        Office: Gujarat, India<br />
        U.S. Office: Texas (Registered Filing Address)
      </p>

      <p className="mt-6">
        By using our services, you confirm that you accept these terms fully.
      </p>
    </div>
  );
};

export default TermsAndConditions;
