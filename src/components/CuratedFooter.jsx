import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ShieldCheck, Droplets, MapPin, ArrowUpRight } from 'lucide-react';

export default function CuratedFooter() {
  return (
    <footer className="bg-[var(--bg-primary)] text-white border-t border-[var(--border-color)] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Emergency Hotline Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--border-color)]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              24/7 Priority Emergency Dispatch
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif tracking-tight leading-snug">
              Standing Water? Certified Teams Dispatched Within 15 Minutes.
            </h3>
            <p className="text-sm text-[var(--text-muted)] font-light max-w-lg leading-relaxed">
              We bill your homeowner or commercial insurance carrier directly with $0 out-of-pocket hassle on covered losses.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:18005550199"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-widest hover:bg-sky-300 transition-all shadow-sm shadow-sky-500/20"
              >
                <PhoneCall size={16} />
                <span>Call (800) 555-0199</span>
              </a>
              <Link
                to="/emergency"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--border-color)] text-white text-xs font-mono uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <span>Submit Claim Online</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] mt-1">
              Average On-Site Arrival: Under 45 Minutes · All Regional Zip Codes Covered
            </span>
          </div>
        </div>

        {/* Rapid Dispatch Hubs & Navigation Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-[var(--border-color)] text-xs font-light">
          
          <div className="space-y-3">
            <div className="font-mono text-sky-400 uppercase tracking-widest text-[11px]">
              Metro Central Hub
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              412 West 14th Street<br />
              Meatpacking District, NY 10014<br />
              dispatch@aquavantrestoration.com
            </p>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">
              TRUCK FLEET UNITS: 01–06 (STANDBY)
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-sky-400 uppercase tracking-widest text-[11px]">
              Sound Shore Division
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              100 Corporate Center Loop<br />
              Westchester, NY 10577<br />
              soundshore@aquavantrestoration.com
            </p>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">
              TRUCK FLEET UNITS: 07–12 (STANDBY)
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-sky-400 uppercase tracking-widest text-[11px]">
              Coastal Station
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              45 Railroad Avenue<br />
              Greenwich, CT 06830<br />
              greenwich@aquavantrestoration.com
            </p>
            <div className="font-mono text-[10px] text-[var(--text-muted)]">
              TRUCK FLEET UNITS: 13–18 (STANDBY)
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-white uppercase tracking-widest text-[11px]">
              Restoration Index
            </div>
            <ul className="space-y-2 text-[var(--text-secondary)]">
              <li><Link to="/services" className="hover:text-sky-300 transition-colors">Emergency Water Extraction</Link></li>
              <li><Link to="/equipment" className="hover:text-sky-300 transition-colors">Industrial Equipment Fleet</Link></li>
              <li><Link to="/protocol" className="hover:text-sky-300 transition-colors">The Science of Dry Protocol</Link></li>
              <li><Link to="/cases" className="hover:text-sky-300 transition-colors">Signature Case Studies</Link></li>
              <li><Link to="/emergency" className="hover:text-sky-300 transition-colors">24/7 Dispatch Portal</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Micro Copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[var(--text-muted)] gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-sky-400/30 flex items-center justify-center text-[9px] text-sky-400 font-serif">
              AV
            </div>
            <span>© 2026 AQUAVANT RESTORATION SYSTEMS LLC. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>IICRC FIRM #84920</span>
            <span>EPA CERTIFIED</span>
            <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
            <span>DIRECT INSURANCE BILLED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}


