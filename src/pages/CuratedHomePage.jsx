import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Activity, 
  Layers, 
  ShieldCheck, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Droplets,
  Gauge,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
  Flame,
  Check
} from 'lucide-react';
import gsap from 'gsap';
import PanoramicSpreadHero from '@/components/ui/panoramic-spread-hero';

export default function CuratedHomePage() {
  const [selectedEquipment, setSelectedEquipment] = useState(0);
  const manifestoRef = useRef(null);

  useEffect(() => {
    if (manifestoRef.current) {
      gsap.fromTo(
        manifestoRef.current.querySelectorAll('.gsap-fade'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, []);

  const signatureCases = [
    {
      id: 'case-01',
      title: 'Modern Architectural Residence Subfloor Extraction',
      typology: 'Burst Supply Line & Hardwood Salvage',
      location: 'Metropolitan Hills Estate',
      year: '78-Hour Dryout',
      coordinates: '450 Gal Extracted · Baseline Reached',
      materials: 'Rift-Sawn Oak Floors, Custom Millwork, Sub-Plenum',
      area: '4,200 sq ft',
      image: '/images/hero.jpg',
      summary: 'A pressurized 3/4" plumbing rupture flooded the main level. High-vacuum floor suction mats removed free water without removing custom architectural flooring.'
    },
    {
      id: 'case-02',
      title: 'Commercial Executive Suites & Glass Atrium',
      typology: 'HVAC Chiller Loop Overflow',
      location: 'Financial Tower, Downtown',
      year: 'Zero Business Downtime',
      coordinates: '8,500 sq ft · 14 LGR Units Deployed',
      materials: 'Low-Pile Carpet Tile, Drywall Plenums, Acoustic Ceilings',
      area: '8,500 sq ft',
      image: '/images/commercial.jpg',
      summary: 'Overnight overflow cascading through 3 floors. High-capacity desiccant drying and whisper-quiet containment barriers maintained business continuity.'
    },
    {
      id: 'case-03',
      title: 'Historic Estate Finished Basement Inundation',
      typology: 'Groundwater Storm Surge & Sump Failure',
      location: 'Coastal Sound Shore Estate',
      year: 'Category 3 Storm Surge',
      coordinates: '72-Hour Rapid Dryout · Zero Mold Growth',
      materials: 'Fieldstone Foundation, Engineered Walnut, Media Lounge',
      area: '2,600 sq ft',
      image: '/images/hardwood.jpg',
      summary: 'Catastrophic stormwater inundation. Sanitized subfloor, antimicrobial botanical wash, and balanced psychrometric dehumidification preserved finished drywall.'
    },
    {
      id: 'case-04',
      title: 'Penthouse Sub-Surface Moisture Mapping',
      typology: 'Hidden Wall Cavity Pipe Rupture',
      location: 'Tribeca Luxury Lofts',
      year: '100% Structural Salvage',
      coordinates: 'FLIR Thermal Confirmed · Direct Insurance Billed',
      materials: 'Venetian Plaster, Structural Columns, Concealed Conduits',
      area: '3,800 sq ft',
      image: '/images/inspection.jpg',
      summary: 'Infrared radiometry pinpointed concealed pipe seepages behind master suite Venetian plaster walls, avoiding destructive demolition.'
    }
  ];

  const equipmentFleet = [
    {
      name: 'FLIR E8-XT Infrared Thermography',
      origin: 'Thermal Radiometric Leak Mapping',
      tactility: 'Non-Destructive Thermal Sensors',
      desc: 'High-resolution thermal camera reveals concealed moisture footprints behind sheetrock, subflooring, and architectural ceilings without punching holes.',
      image: '/images/thermal.jpg'
    },
    {
      name: 'Phoenix DryMAX XL LGR Dehumidifiers',
      origin: 'Low Grain Refrigerant Extraction',
      tactility: '180 Pints / Day At AHAM',
      desc: 'Industrial desiccant units reduce air grain depression below 30 GPP, actively drawing moisture out of dense hardwood beams and concrete substrates.',
      image: '/images/equipment.jpg'
    },
    {
      name: 'Hydro-X Extreme Suction Mats',
      origin: 'Sub-Surface Hardwood Extraction',
      tactility: '95% Water Evacuated in 1st Pass',
      desc: 'Creates a sealed negative-pressure vortex over cupped wood floors and subflooring, extracting deep water without tearing up architectural timber.',
      image: '/images/operations.jpg'
    },
    {
      name: 'DefendAir HEPA-500 Scrubbers',
      origin: 'Hospital-Grade Air Filtration',
      tactility: '99.97% Efficiency Down to 0.3μm',
      desc: 'Continuous multi-stage filtration captures microbial spores, odors, and particulate during extraction, ensuring pure indoor air quality.',
      image: '/images/containment.jpg'
    }
  ];

  const insurancePartners = [
    {
      quote: "AQUAVANT's psychrometric drying logs and FLIR radiometric reports are the gold standard for rapid claim approvals with zero friction.",
      source: "Senior Commercial Adjuster",
      issue: "Chubb & High-Net-Worth Claims"
    },
    {
      quote: "Direct billing, photographic line-item Xactimate documentation, and emergency response within 20 minutes across every call.",
      source: "Property Loss Director",
      issue: "Travelers Regional Division"
    },
    {
      quote: "They salvaged custom rift-sawn oak that another contractor condemned. Saved our client over $95,000 in replacement costs.",
      source: "Principal Broker",
      issue: "AIG Private Client Group"
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)] min-h-screen selection:bg-sky-400 selection:text-neutral-950">
      
      {/* =========================================================================
          HERO SECTION: 3D Spatial Panoramic Unspooling Hero
          ========================================================================= */}
      <PanoramicSpreadHero />

      {/* =========================================================================
          SECTION 02: Core Protocol / "The Science of Dry"
          Editorial layout, generous whitespace, serif titles, quote
          ========================================================================= */}
      <section ref={manifestoRef} className="py-28 md:py-40 border-b border-[var(--border-color)] relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Context Monogram & Coordinates (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="gsap-fade flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                <span>Restoration Protocol · 01</span>
              </div>

              <h3 className="gsap-fade text-2xl sm:text-3xl font-serif leading-snug tracking-tight text-white">
                "Water never sleeps, and moisture never waits. The first 60 minutes determine the survival of your property."
              </h3>

              <div className="gsap-fade pt-4 border-t border-[var(--border-color)] space-y-2 text-xs font-mono text-[var(--text-muted)]">
                <div>IICRC MASTER RESTORATION FIRM #84920</div>
                <div>RESPONSE SPEED: 15-MINUTE RAPID DISPATCH</div>
                <div>FLEET COVERAGE: REGIONAL RESIDENTIAL & COMMERCIAL</div>
              </div>

              <div className="gsap-fade pt-2">
                <Link
                  to="/protocol"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-sky-400 hover:text-white transition-colors"
                >
                  <span>Explore The 4-Stage Protocol</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Essay (8 cols) */}
            <div className="lg:col-span-8 space-y-8 text-[var(--text-secondary)] font-light text-base sm:text-lg leading-relaxed">
              <p className="gsap-fade text-xl sm:text-2xl font-serif text-white leading-relaxed">
                When water invades, intuition is not enough. AQUAVANT applies rigorous psychrometric science, infrared physics, and heavy desiccant engineering to preserve fine architecture.
              </p>

              <p className="gsap-fade">
                Every loss begins with rapid water evacuation. Using truck-mounted high-lift vacuum units and weighted suction grids, we remove up to 95% of standing water before microbial reproduction begins. We then balance vapor pressure and air velocity to pull trapped water out of deep wall cavities without unnecessary demolition.
              </p>

              <div className="gsap-fade grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-color)]">
                <div className="space-y-1">
                  <div className="text-3xl font-serif text-white font-normal">15 Min</div>
                  <div className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">Average Dispatch Time</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-serif text-white font-normal">100%</div>
                  <div className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">Moisture Clearance Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-serif text-white font-normal">$0 Out-Of-Pocket</div>
                  <div className="text-xs font-mono tracking-widest uppercase text-[var(--text-muted)]">Direct Insurance Billing</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: Selected Recovery Case Studies
          ========================================================================= */}
      <section className="py-28 md:py-40 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-3">
                <Droplets size={13} className="text-sky-400" />
                <span>Case Studies Index · 2024–2026</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
                Signature Emergency Restorations.
              </h2>
            </div>
            <div>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] text-xs font-mono uppercase tracking-[0.2em] text-white hover:bg-sky-400 hover:text-neutral-950 hover:border-sky-400 transition-all"
              >
                <span>View Complete Project Archive</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Recovery Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {signatureCases.map((work) => (
              <div 
                key={work.id}
                className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-sky-400/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover group- transition-transform duration-700 filter brightness-95 group-hover:brightness-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60  text-[10px] font-mono tracking-widest uppercase text-white border border-[var(--border-color)]">
                        {work.location}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-sky-500/20  text-[10px] font-mono text-sky-300 border border-sky-400/20">
                        {work.year}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
                        {work.typology}
                      </div>
                      <h3 className="text-2xl font-serif tracking-tight mt-0.5">
                        {work.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4">
                    <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                      {work.summary}
                    </p>

                    <div className="pt-4 border-t border-[var(--border-color)] grid grid-cols-2 gap-4 text-xs font-mono text-[var(--text-muted)]">
                      <div>
                        <span className="text-[10px] uppercase text-[var(--text-muted)] block">Restoration Metric</span>
                        <span className="text-[var(--text-secondary)]">{work.coordinates}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[var(--text-muted)] block">Affected Footprint</span>
                        <span className="text-[var(--text-secondary)]">{work.area}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] truncate pb-4 border-b border-[var(--border-color)]">
                    Salvaged Substrates: <span className="text-[var(--text-secondary)]">{work.materials}</span>
                  </div>

                  <Link
                    to="/cases"
                    className="mt-4 w-full inline-flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[var(--text-secondary)] hover:text-sky-300  transition-all"
                  >
                    <span>Inspect Drying Telemetry & Logs</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: Industrial Drying Fleet & Equipment Archive
          Bento grid displaying high-tech mitigation hardware
          ========================================================================= */}
      <section className="py-28 md:py-40 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-3">
              <Layers size={13} className="text-sky-400" />
              <span>Mitigation Hardware · Chamber 03</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white">
              The Restoration Equipment Fleet.
            </h2>
            <p className="text-base text-[var(--text-muted)] font-light mt-3 max-w-xl">
              We deploy hospital-grade desiccant dehumidifiers, high-thrust axial air movers, and thermal infrared radiometers engineered to restore structural equilibrium rapidly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentFleet.map((eq, idx) => (
              <div 
                key={eq.name}
                onClick={() => setSelectedEquipment(idx)}
                className={`group rounded-2xl overflow-hidden border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedEquipment === idx
                    ? 'border-sky-400 bg-sky-950/20 shadow-sm shadow-sky-500/10'
                    : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-800 mb-5">
                    <img 
                      src={eq.image} 
                      alt={eq.name} 
                      className="w-full h-full object-cover group- transition-transform duration-500" 
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70  text-[9px] font-mono uppercase text-sky-400 border border-sky-400/20">
                      UNIT 0{idx + 1}
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                    {eq.origin}
                  </div>
                  <h3 className="text-xl font-serif text-white mt-1 mb-2">
                    {eq.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {eq.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                  <span className="text-sky-300">{eq.tactility}</span>
                  {selectedEquipment === idx && <Check size={12} className="text-sky-400" />}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04-B: Dedicated Service Protocol Portals
          Direct links to each individual separate service page
          ========================================================================= */}
      <section className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-2">
                Specialized Service Portals
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
                Dedicated Restoration Protocols.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-mono uppercase tracking-widest text-sky-400 hover:text-white flex items-center gap-1.5"
            >
              <span>Explore All Protocols</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { slug: 'water-damage-restoration', num: '01', title: 'Water Damage Restoration', desc: 'Full property mitigation from initial thermal scan to baseline psychrometric sign-off.' },
              { slug: 'emergency-water-extraction', num: '02', title: 'Emergency Water Extraction', desc: 'High-lift vacuum truck pumps and weighted extraction tools removing standing water.' },
              { slug: 'structural-drying', num: '03', title: 'Hardwood & Structural Drying', desc: 'Negative-pressure suction mats drying subfloors without tearing up timber.' },
              { slug: 'commercial-restoration', num: '04', title: 'Commercial Large-Loss Mitigation', desc: 'Acoustic containment barriers and desiccant loops with zero business closure.' },
              { slug: 'mold-remediation', num: '05', title: 'Microbial Containment & Mold Remediation', desc: 'HEPA negative air scrubbers, botanical washes, and independent lab clearance.' },
              { slug: 'burst-pipe-cleanup', num: '06', title: 'Burst Pipe Cleanup & Cavity Drying', desc: 'Immediate emergency shutoff, non-destructive cavity drying, and line-item billing.' },
            ].map((srv) => (
              <Link
                key={srv.slug}
                to={`/services/${srv.slug}`}
                className="group p-7 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-sky-400/50 hover:bg-[var(--bg-card)]/80 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono text-sky-400">PROTOCOL #{srv.num}</div>
                  <h3 className="text-xl font-serif text-white group-hover:text-sky-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] group-hover:text-white">
                  <span>Open Dedicated Page</span>
                  <ArrowUpRight size={14} className="" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04-C: Visual Evidence & Field Operations Gallery
          High density authentic photography
          ========================================================================= */}
      <section className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-2">
              Forensic Visual Archive
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              On-Site Restoration Evidence.
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light mt-2">
              Real-world documentation from our emergency deployments across residential and commercial losses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: '/images/fleet.jpg', title: 'Mobile Extraction Fleet', tag: '24/7 Standby' },
              { src: '/images/craftsmanship.jpg', title: 'Subfloor Framing Salvage', tag: 'Structural' },
              { src: '/images/thermal-inspection.jpg', title: 'Thermal Radiometric Scan', tag: 'FLIR E8' },
              { src: '/images/containment.jpg', title: 'HEPA Negative Air Barrier', tag: 'Clean Air' },
              { src: '/images/team-sunset.jpg', title: 'Master Restoration Team', tag: 'IICRC Crew' },
              { src: '/images/restored.jpg', title: 'Flawlessly Restored Estate', tag: 'Final Baseline' },
            ].map((img, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover group- transition-transform duration-500 filter brightness-90 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70  text-[8px] font-mono uppercase text-sky-400 border border-[var(--border-color)]">
                  {img.tag}
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-mono text-white truncate">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: Psychrometric Science & Moisture Verification
          ========================================================================= */}
      <section className="py-24 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 flex items-center gap-2 justify-center lg:justify-start">
                <Gauge size={14} className="text-sky-400" />
                Psychrometric Science & Standards
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Continuous Remote Moisture & Humidity Verification.
              </h3>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                Our cellular hygrometer sensors log relative humidity, ambient temperature, and vapor pressure in real-time, verifying structural baseline moisture equilibrium before equipment extraction. Every reading is documented in line-item Xactimate reports for your insurance adjuster.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-1">
                <div className="text-xs font-mono text-sky-400 uppercase">Target WME</div>
                <div className="text-2xl font-serif text-white">&lt; 12%</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">Subfloor Equilibrium</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-1">
                <div className="text-xs font-mono text-emerald-400 uppercase">Chamber RH</div>
                <div className="text-2xl font-serif text-white">&lt; 38%</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">Dehumidification</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-1">
                <div className="text-xs font-mono text-blue-400 uppercase">IICRC S500</div>
                <div className="text-2xl font-serif text-white">100%</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">Carrier Compliance</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: Insurance Carrier Direct Billing & Adjuster Reviews
          ========================================================================= */}
      <section className="py-28 md:py-36 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Insurance Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-white mt-2">
              Direct Billing & Adjuster Endorsements
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-3">
              We bill insurance directly with Xactimate line-item precision, zero out-of-pocket hassle for covered perils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insurancePartners.map((p) => (
              <div 
                key={p.source}
                className="p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-6 flex flex-col justify-between hover:border-sky-400/30 transition-colors"
              >
                <p className="text-base font-serif italic text-[var(--text-secondary)] leading-relaxed">
                  "{p.quote}"
                </p>

                <div className="pt-4 border-t border-[var(--border-color)] text-xs font-mono">
                  <div className="text-white font-medium">{p.source}</div>
                  <div className="text-sky-400 text-[10px] mt-0.5">{p.issue}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 07: 24/7 Emergency Dispatch Intake & Rapid Contact
          ========================================================================= */}
      <section className="py-28 md:py-40 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              24/7 Emergency Dispatch · Teams Standing By
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif tracking-tight text-white leading-tight">
              Request Immediate Emergency Dispatch.
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed max-w-xl mx-auto">
              Standing water causes irreversible rot within 24 to 48 hours. Our certified master technicians dispatch within 15 minutes equipped with heavy extraction units.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:18005550199"
                className="px-8 py-4 rounded-full bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-sky-300 transition-all shadow-sm shadow-sky-500/20 flex items-center gap-2"
              >
                <PhoneCall size={14} />
                <span>Call Dispatch: (800) 555-0199</span>
              </a>

              <Link
                to="/emergency"
                className="px-8 py-4 rounded-full border border-[var(--border-color)] text-white text-xs font-mono uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
              >
                Submit Online Emergency Claim
              </Link>
            </div>

            <div className="pt-6 text-xs font-mono text-[var(--text-muted)]">
              AVERAGE TIME TO ARRIVAL ON SITE: 45 MINUTES OR LESS
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

