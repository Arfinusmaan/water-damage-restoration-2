import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  PhoneCall, ArrowLeft, ArrowUpRight, CheckCircle2, AlertTriangle, ShieldCheck, 
  Gauge, Wind, Droplets, ChevronDown, Layers, Clock, Sparkles, Wrench, Shield, FileText
} from 'lucide-react';
import { SERVICES } from '../data/servicesData';

export default function CuratedServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related other services
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  // Gallery of authentic restoration photographs relevant to this service
  const galleryPhotos = [
    { src: service.image || '/images/hero.jpg', caption: 'Primary Field Operations & Emergency Deployment' },
    { src: '/images/thermal-inspection.jpg', caption: 'FLIR Thermal Radiometric Moisture Mapping' },
    { src: '/images/containment.jpg', caption: 'Negative Air Containment & HEPA Filtration' },
    { src: '/images/restored.jpg', caption: 'Certified Structural Baseline Clearance & Handover' },
  ];

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)] min-h-screen pt-28 pb-24 font-sans selection:bg-sky-400 selection:text-neutral-950">
      
      {/* =========================================================================
          BREADCRUMBS
          ========================================================================= */}
      <div className="border-b border-[var(--border-color)] py-3.5 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">AQUAVANT</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">SERVICES</Link>
            <span>/</span>
            <span className="text-sky-400">{service.title.toUpperCase()}</span>
          </div>
          <Link to="/services" className="hidden sm:flex items-center gap-1.5 text-[var(--text-muted)] hover:text-white transition-colors text-[11px]">
            <ArrowLeft size={12} />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION: High-impact editorial header with large imagery
          ========================================================================= */}
      <section className="py-16 md:py-24 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-mono">
                  PROTOCOL #{service.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]">
                  {service.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-tight">
                {service.title}.
              </h1>

              <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-light leading-relaxed">
                {service.heroHeadline || service.shortDesc}
              </p>

              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                {service.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="tel:18005550199"
                  className="px-8 py-4 rounded-full bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-widest hover:bg-sky-300 transition-all shadow-xl shadow-sky-500/20 flex items-center gap-2"
                >
                  <PhoneCall size={14} />
                  <span>24/7 Dispatch Hotline: (800) 555-0199</span>
                </a>

                <Link
                  to="/emergency"
                  className="px-8 py-4 rounded-full border border-[var(--border-color)] text-white text-xs font-mono uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Submit Claim Online
                </Link>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[var(--border-color)] text-xs font-mono text-[var(--text-muted)]">
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase">Standard</span>
                  <span className="text-white">IICRC S500</span>
                </div>
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase">Dispatch</span>
                  <span className="text-emerald-400">15 Minutes</span>
                </div>
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] block uppercase">Billing</span>
                  <span className="text-white">Direct Carrier</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl shadow-black/80 aspect-[4/3] lg:aspect-[4/5]">
                <img 
                  src={service.image || '/images/hero.jpg'} 
                  alt={service.title} 
                  className="w-full h-full object-cover filter brightness-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[var(--bg-primary)]/80 backdrop-blur-md border border-[var(--border-color)] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-sky-400 uppercase tracking-widest">Active Mitigation Fleet</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      STANDBY
                    </span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] font-light">
                    Heavy extraction trucks and desiccant units ready for emergency mobilization across regional zip codes.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          PHOTO GALLERY: Multiple authentic photographs showing each stage
          ========================================================================= */}
      <section className="py-20 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-2">
              Visual Documentation
            </span>
            <h2 className="text-3xl font-serif text-white">
              Field Execution & Forensic Imagery.
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-2 font-light">
              High-resolution photographic records taken at every step for insurance documentation and structural certification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPhotos.map((photo, i) => (
              <div 
                key={i} 
                className="group rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-sky-400/50 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100" 
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9px] font-mono uppercase text-sky-400 border border-[var(--border-color)]">
                    STAGE 0{i + 1}
                  </div>
                </div>
                <div className="p-4 text-xs font-mono text-[var(--text-secondary)] leading-snug">
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5-PHASE RECOVERY TIMELINE
          ========================================================================= */}
      <section className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-2">
              Step-by-Step Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              The 5-Phase Mitigation Protocol.
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2 font-light">
              Standardized adherence to IICRC S500 guidelines ensures zero guesswork and complete structural clearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.workflowPhases.map((phase, idx) => (
              <div 
                key={phase.step}
                className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-sky-400/40 transition-colors space-y-4"
              >
                <div className="w-10 h-10 rounded-full border border-sky-400/30 bg-sky-500/10 flex items-center justify-center text-sm font-mono text-sky-400 font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-serif text-white">{phase.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          EQUIPMENT DEPLOYED & CRITICAL SAFETY
          ========================================================================= */}
      <section className="py-20 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Equipment deployed (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-1">
                  Hardware Allocation
                </span>
                <h3 className="text-2xl font-serif text-white">Industrial Equipment Specified</h3>
              </div>

              <div className="space-y-3">
                {service.equipmentUsed.map((eq, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-mono text-[var(--text-secondary)]">
                    <Wrench size={14} className="text-sky-400 shrink-0" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical safety instructions (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-amber-400 block mb-1">
                  Occupant Guidance
                </span>
                <h3 className="text-2xl font-serif text-white">Immediate Hazard Precautions</h3>
              </div>

              <div className="space-y-3">
                {service.safetyPrecautions.map((safe, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-amber-400/20 bg-amber-950/15 text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                    <AlertTriangle size={15} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{safe}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          
          <div className="text-center mb-16 space-y-2">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-serif text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-[var(--border-color)] rounded-2xl bg-[var(--bg-secondary)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-serif text-lg text-white">{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-sky-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-xs text-[var(--text-secondary)] font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          OTHER SERVICES EXPLORATION
          ========================================================================= */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-serif text-white">Related Restoration Protocols</h2>
            <Link to="/services" className="text-xs font-mono uppercase tracking-widest text-sky-400 hover:text-white flex items-center gap-1">
              <span>View All Services</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.slug}`}
                className="group p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-sky-400/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-sky-400 uppercase tracking-widest">
                    PROTOCOL #{other.number}
                  </div>
                  <h3 className="text-xl font-serif text-white group-hover:text-sky-300 transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                    {other.shortDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] group-hover:text-white">
                  <span>Explore Protocol</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

