import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#111111] min-h-screen py-16 sm:py-20 text-[#DBDBDB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="text-xs font-mono font-bold text-[#035BFE] hover:underline uppercase tracking-wider">
            ← Return to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#DBDBDB] mt-3 tracking-tight font-display">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#8A8A8A] mt-1">
            Last Updated: October 2026 | AquaVant Restoration LLC
          </p>
        </div>

        <div className="bg-[#181818] rounded-xl border border-[#262626] p-8 sm:p-12 space-y-8 text-sm leading-relaxed text-[#DBDBDB]">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              1. Information We Collect
            </h2>
            <p>
              When you contact AquaVant Restoration via phone, emergency dispatch line, online form, or inspection scheduling tool, we collect relevant contact and property information needed to assess and execute restoration services.
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#D5D5D5] pl-2">
              <li>Name, email address, physical property address, and phone number</li>
              <li>Details regarding the water intrusion incident, emergency status, and affected square footage</li>
              <li>Insurance carrier information and claim reference numbers (when provided by you)</li>
              <li>Technical site logs, moisture readings, and thermal imaging data collected during dispatch</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              2. How We Use Collected Information
            </h2>
            <p>
              We use the collected information strictly for service dispatch, site assessment, mitigation operations, direct client communication, and generating structural drying logs. We do not sell, rent, or trade your personal information to third-party data brokers or marketing lists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              3. Insurance Carrier & Adjuster Coordination
            </h2>
            <p>
              With your direct authorization, moisture reading logs, psychrometric records, containment logs, and photographic site documentation may be submitted directly to your designated insurance provider or independent adjuster to substantiate insurance claims.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              4. Data Retention & Digital Security
            </h2>
            <p>
              Technical logs and service correspondence are retained in encrypted, secure storage in compliance with industry documentation standards. Access is limited to authorized technicians and restoration coordinators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              5. Contact & Privacy Requests
            </h2>
            <p>
              If you have inquiries regarding your personal data, records retention, or wish to update your records, please contact our administrative team at info@aquavantrestoration.com or through our 24/7 dispatch desk.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
