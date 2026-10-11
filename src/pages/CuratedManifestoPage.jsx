import React from 'react';
import { Compass, Users, Award, BookOpen, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CuratedManifestoPage() {
  const principles = [
    {
      num: '01',
      title: 'The Critical 60-Minute Golden Window',
      desc: 'Standing water begins permeating drywall within 60 minutes and triggers exponential microbial sporulation by hour 48. Rapid dispatch within 15 minutes is not a luxury—it is structural triage.'
    },
    {
      num: '02',
      title: 'Non-Destructive Structural Preservation',
      desc: 'Lesser contractors simply tear out walls and hardwood floors with sledgehammers. We deploy targeted negative-pressure suction mats and cavity air jets to preserve valuable architectural finishes intact.'
    },
    {
      num: '03',
      title: 'Empirical Psychrometric Science',
      desc: 'A wall cannot be declared dry by touch. We track Grains Per Pound (GPP), ambient vapor pressure, and wood moisture equilibrium percentage with continuous cellular data telemetry until baseline standard is verified.'
    },
    {
      num: '04',
      title: 'Zero Friction Insurance Resolution',
      desc: 'Property owners in distress should never battle insurance adjusters alone. We photograph every square foot, log line-item Xactimate documentation, and bill carriers directly with $0 out-of-pocket for covered losses.'
    }
  ];

  const leadership = [
    {
      name: 'Matthew Jarnis',
      role: 'Master Restoration Technician (IICRC #84920)',
      location: 'Field Operations Commander',
      bio: '24 years directing large-loss commercial extractions, hurricane recoveries, and high-value architectural estate mitigations. IICRC Master Water Restorer and Applied Structural Drying specialist.',
      image: '/images/hero-technician-inspection.jpg'
    },
    {
      name: 'Marcus Vance',
      role: 'Director of Thermal Diagnostics & Psychrometrics',
      location: 'Diagnostics Engineering Division',
      bio: 'Certified Level III Infrared Thermographer specializing in building envelope forensic moisture mapping, sub-surface acoustics, and non-invasive cavity drying thermodynamics.',
      image: '/images/technician-inspecting.jpg'
    },
    {
      name: 'Elena Rostova, CIH',
      role: 'Certified Industrial Hygienist & Environmental Director',
      location: 'Indoor Air Quality & Lab Clearance',
      bio: 'Oversees antimicrobial chemistry, negative-pressure containment protocols, and independent third-party fungal spore air sampling to certify pristine residential clearance.',
      image: '/images/operations.jpg'
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
            <ShieldCheck size={14} className="text-sky-400" />
            <span>Operational Standards · IICRC S500 / S520 Compliant</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            The Science of Dry.
          </h1>
          <p className="text-base text-[var(--text-secondary)] font-light leading-relaxed">
            Our operational framework is built upon thermodynamics, psychrometric physics, and microbiological safety. Below are the four core tenets that govern every emergency water mitigation we execute.
          </p>
        </div>

        {/* 4 Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {principles.map((p) => (
            <div key={p.num} className="p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3 hover:border-sky-400/40 transition-colors">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block">Standard {p.num}</span>
              <h2 className="text-2xl font-serif text-white">{p.title}</h2>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Protocol Visual Demonstration */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-1">
              Field Execution Record
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white">The Protocol in Visual Practice</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/hero.jpg', step: '01', title: 'Bulk Extraction', desc: 'High-lift vacuum plants removing standing water within 60 minutes.' },
              { src: '/images/containment.jpg', step: '02', title: 'Negative Air Barriers', desc: 'Medical-grade HEPA 500 scrubbers isolating unaffected living zones.' },
              { src: '/images/hardwood.jpg', step: '03', title: 'Subfloor Salvage', desc: 'Injectidry suction panels saving custom rift-sawn oak flooring.' },
              { src: '/images/inspection.jpg', step: '04', title: 'Thermal Clearance', desc: 'FLIR radiometric imaging confirming structural baseline equilibrium.' },
            ].map((p) => (
              <div key={p.step} className="group rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img src={p.src} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95" />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-sky-500/80 backdrop-blur-md text-[9px] font-mono font-bold text-neutral-950">
                    STEP {p.step}
                  </div>
                </div>
                <div className="p-5 space-y-1">
                  <h4 className="text-base font-serif text-white">{p.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="border-t border-[var(--border-color)] pt-20 space-y-12">
          <div>
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-2">Master Restoration Technicians</span>
            <h2 className="text-3xl font-serif text-white">Certified Leadership On Every Dispatch.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((l) => (
              <div key={l.name} className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all">
                <div>
                  <div className="aspect-[4/4] bg-neutral-800 overflow-hidden">
                    <img src={l.image} alt={l.name} className="w-full h-full object-cover filter brightness-95" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-serif text-white">{l.name}</h3>
                    <div className="text-xs font-mono text-sky-400">{l.role}</div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">{l.location}</div>
                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed pt-2">{l.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="py-2.5 px-3 rounded-lg bg-white/5 border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-secondary)] flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span>Background Checked & IICRC Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Dispatch Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-sky-400/20 bg-sky-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-white">Need an Emergency Assessment Right Now?</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">Our dispatch team answers within 3 rings 24/7/365.</p>
          </div>
          <a
            href="tel:18005550199"
            className="px-8 py-3.5 rounded-full bg-sky-400 text-neutral-950 text-xs font-mono uppercase tracking-widest font-bold hover:bg-sky-300 transition-colors shrink-0 flex items-center gap-2 shadow-xl shadow-sky-500/20"
          >
            <PhoneCall size={14} />
            <span>Call (800) 555-0199</span>
          </a>
        </div>

      </div>
    </div>
  );
}

