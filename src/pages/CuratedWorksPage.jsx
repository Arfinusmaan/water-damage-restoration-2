import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Droplets, ShieldCheck, Gauge, CheckCircle2, PhoneCall, Eye, Camera } from 'lucide-react';

export default function CuratedWorksPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const servicesAndCases = [
    {
      id: '01',
      slug: 'water-damage-restoration',
      category: 'Full-Scope',
      title: 'Water Damage Restoration',
      typology: 'Comprehensive Property Mitigation',
      location: 'Metropolitan Area',
      year: 'IICRC S500 Standard',
      area: 'Full Residential & Commercial',
      materials: 'Phoenix XL LGRs, Thermal Radiometry',
      image: '/images/hero_water_restoration_1791724413183.jpg',
      desc: 'Complete property mitigation from initial moisture mapping through drying and repair coordination adhering strictly to IICRC S500 guidelines.'
    },
    {
      id: '02',
      slug: 'emergency-water-extraction',
      category: 'Extraction',
      title: 'Emergency Water Extraction & Pumping',
      typology: 'Standing Water & Flood Evacuation',
      location: 'Metropolitan Area',
      year: '15-Min Rapid Dispatch',
      area: 'Up to 50,000 Gallons/Day',
      materials: 'Sub-surface Suction Mats, High-Lift Vacuum',
      image: '/images/hero.jpg',
      desc: 'Immediate containment and bulk water evacuation utilizing truck-mounted extraction plants and weighted subfloor extractors to prevent timber swelling.'
    },
    {
      id: '03',
      slug: 'structural-drying',
      category: 'Drying',
      title: 'Architectural Hardwood & Subfloor Drying',
      typology: 'Non-Invasive Negative Pressure Drying',
      location: 'Luxury Residences & Estates',
      year: 'Zero Floor Tear-Out Target',
      area: 'Rift-Sawn Oak & Parquet',
      materials: 'Injectidry Floor Panels, LGR Fleet',
      image: '/images/hardwood.jpg',
      desc: 'Targeted negative-pressure drying pulls trapped moisture out of dense joists and underlayment beneath hardwood floors without destructive teardown.'
    },
    {
      id: '04',
      slug: 'commercial-restoration',
      category: 'Commercial',
      title: 'Commercial Large-Loss Mitigation',
      typology: 'High-Rise Chiller & Storm Mitigation',
      location: 'Corporate Towers & Plazas',
      year: 'Zero Business Closure',
      area: '8,500 - 45,000 sq ft',
      materials: 'Desiccant Dehumidifiers, HEPA Air Scrubbers',
      image: '/images/commercial.jpg',
      desc: 'Overnight mitigation for multi-tenant office plazas and server facilities, deploying acoustic containment barriers and high-capacity desiccant drying loops.'
    },
    {
      id: '05',
      slug: 'mold-remediation',
      category: 'Remediation',
      title: 'Microbial Containment & Mold Remediation',
      typology: 'IICRC S520 Environmental Clearance',
      location: 'Attics, Basements & Crawlspaces',
      year: 'Third-Party Lab Certified',
      area: 'Containment Zone Scrubbing',
      materials: 'HEPA Negative Air Units, EPA Antimicrobials',
      image: '/images/containment.jpg',
      desc: 'Certified containment under negative pressure with hospital-grade HEPA filtration, botanical antimicrobials, and independent air-quality clearance testing.'
    },
    {
      id: '06',
      slug: 'burst-pipe-cleanup',
      category: 'Burst Pipes',
      title: 'Burst Pipe Cleanup & Cavity Drying',
      typology: 'Pressurized Supply Line Ruptures',
      location: 'Finished Basements & Suites',
      year: '72-Hour Rapid Clearance',
      area: 'Cavity Air Injection Loops',
      materials: 'FLIR Thermal Camera, Injectidry Systems',
      image: '/images/basement.jpg',
      desc: 'Rapid recovery following plumbing ruptures. Pinpoints concealed moisture footprints behind sheetrock and injects dry air through baseboards.'
    }
  ];

  const photoArchive = [
    { src: '/images/hero.jpg', title: 'High-Vacuum Field Extraction', tag: 'Phase 01' },
    { src: '/images/equipment.jpg', title: 'Industrial Desiccant Fleet', tag: 'Drying Loop' },
    { src: '/images/thermal-inspection.jpg', title: 'FLIR Infrared Mapping', tag: 'Thermal Diagnostics' },
    { src: '/images/hardwood.jpg', title: 'Hardwood Floor Salvage', tag: 'Injectidry Suction' },
    { src: '/images/commercial.jpg', title: 'Commercial Atrium Recovery', tag: 'Multi-Story Loss' },
    { src: '/images/containment.jpg', title: 'Negative Air Barriers', tag: 'Containment Zone' },
    { src: '/images/inspection.jpg', title: 'Pinless Moisture Metering', tag: 'Verification' },
    { src: '/images/restored.jpg', title: 'Restored Architectural Estate', tag: 'Handover Clean' },
  ];

  const categories = ['All', 'Full-Scope', 'Extraction', 'Drying', 'Commercial', 'Remediation', 'Burst Pipes'];

  const filteredItems = activeCategory === 'All' 
    ? servicesAndCases 
    : servicesAndCases.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)] min-h-screen pt-32 pb-24 selection:bg-sky-400 selection:text-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400">
            <Droplets size={13} />
            <span>Dedicated Service Protocols & Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            Specialized Restoration Services.
          </h1>
          <p className="text-base text-[var(--text-muted)] font-light leading-relaxed">
            Click into any specialized protocol below for comprehensive technical specifications, equipment configurations, and emergency workflows.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-400 text-neutral-950 font-bold'
                    : 'bg-white/5 text-[var(--text-muted)] hover:text-white hover:bg-white/10 border border-[var(--border-color)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid with direct links to separate service pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-sky-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                <Link to={`/services/${item.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-neutral-800">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group- transition-transform duration-500 filter brightness-95 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70  text-[9px] font-mono tracking-wider uppercase text-white border border-[var(--border-color)]">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20  text-[9px] font-mono text-sky-300 border border-sky-400/20">
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                      {item.typology}
                    </div>
                    <h3 className="text-xl font-serif text-white tracking-tight mt-0.5 group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-3 border-t border-[var(--border-color)] grid grid-cols-2 gap-3 text-[11px] font-mono text-[var(--text-muted)]">
                    <div>
                      <span className="text-[9px] uppercase text-[var(--text-muted)] block">Scope Capacity</span>
                      <span className="text-[var(--text-secondary)]">{item.area}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase text-[var(--text-muted)] block">Restoration Fleet</span>
                      <span className="text-[var(--text-secondary)]">{item.materials}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <Link
                  to={`/services/${item.slug}`}
                  className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/5 hover:bg-sky-400 hover:text-neutral-950 text-xs font-mono tracking-wider uppercase text-white transition-all group"
                >
                  <span>Explore Dedicated Protocol Page</span>
                  <ArrowUpRight size={14} />
                </Link>

                <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)] pt-1">
                  <span>IICRC STANDARDS COMPLIANT</span>
                  <Link to="/emergency" className="text-sky-400 hover:underline">Request Dispatch →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            HIGH-DENSITY PHOTO ARCHIVE: Real field photography gallery
            ========================================================================= */}
        <div className="mt-28 pt-20 border-t border-[var(--border-color)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 flex items-center gap-2 mb-2">
                <Camera size={13} />
                <span>Forensic Field Photography</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
                Restoration Visual Archive.
              </h2>
            </div>
            <p className="text-xs text-[var(--text-muted)] max-w-md font-light">
              Unfiltered documentation from emergency extractions across residential estates, commercial towers, and historic structures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photoArchive.map((photo, idx) => (
              <div 
                key={idx}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]"
              >
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="w-full h-full object-cover group- transition-transform duration-500 filter brightness-90 group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70  text-[9px] font-mono uppercase text-sky-400 border border-[var(--border-color)]">
                  {photo.tag}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white truncate">
                  {photo.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-sky-400/30 bg-sky-950/20 text-center space-y-4">
          <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            24/7 Rapid Emergency Response Active
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white">
            Active Flooding? Immediate Crew Dispatch Within 15 Minutes.
          </h2>
          <div className="pt-2">
            <a
              href="tel:18005550199"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-widest hover:bg-sky-300 transition-all shadow-sm shadow-sky-500/20"
            >
              <PhoneCall size={14} />
              <span>Call Emergency Hotline: (800) 555-0199</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

