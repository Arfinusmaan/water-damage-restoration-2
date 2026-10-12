import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#111111] min-h-screen py-16 sm:py-20 text-[#DBDBDB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="text-xs font-mono font-bold text-[#035BFE] hover:underline uppercase tracking-wider">
            ← Return to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#DBDBDB] mt-3 tracking-tight font-display">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[#8A8A8A] mt-1">
            Effective Date: October 2026 | AquaVant Restoration LLC
          </p>
        </div>

        <div className="bg-[#181818] rounded-xl border border-[#262626] p-8 sm:p-12 space-y-8 text-sm leading-relaxed text-[#DBDBDB]">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              1. Scope of Emergency Restoration Services
            </h2>
            <p>
              AquaVant Restoration provides emergency water extraction, structural desiccant drying, thermal moisture diagnostics, containment barriers, and mold remediation protocols. Engagement begins upon verbal or written emergency dispatch confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              2. On-Site Authorization & Property Access
            </h2>
            <p>
              Clients authorize certified technicians to enter the designated structure, place drying and extraction equipment, drill inspection ports where non-invasive methods cannot reach hidden cavities, and establish containment chambers to mitigate secondary moisture damage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              3. Continuous Equipment Operation
            </h2>
            <p>
              Commercial air movers, LGR dehumidifiers, and HEPA air scrubbers must remain powered continuously throughout the psychrometric dry-down cycle. Power disruption or unauthorized removal of equipment voids dry-standard certifications and risks secondary microbial contamination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              4. Insurance Claims & Payment Obligations
            </h2>
            <p>
              While AquaVant works directly with property insurance adjusters and submits itemized documentation according to recognized industry pricing software, the property owner retains ultimate contractual responsibility for fees incurred during emergency mitigation and restoration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              5. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Service are governed by state and federal laws applicable in our service territories. Any claims or formal disputes shall be addressed through binding professional arbitration prior to civil court filing.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
