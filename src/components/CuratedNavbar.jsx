import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  PhoneCall, Menu, X, ChevronDown, ArrowUpRight, 
  Droplets, ShieldCheck, Wind, Building2, Flame, Wrench
} from 'lucide-react';

export default function CuratedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    {
      title: 'Water Damage Restoration',
      slug: 'water-damage-restoration',
      desc: 'Complete property mitigation from initial moisture mapping to baseline sign-off.',
      icon: Droplets,
    },
    {
      title: 'Emergency Water Extraction',
      slug: 'emergency-water-extraction',
      desc: 'High-lift vacuum truck pumps and weighted surface extraction.',
      icon: Droplets,
    },
    {
      title: 'Structural & Hardwood Drying',
      slug: 'structural-drying',
      desc: 'Negative-pressure suction mats saving architectural timber.',
      icon: Wind,
    },
    {
      title: 'Commercial Large-Loss Mitigation',
      slug: 'commercial-restoration',
      desc: 'Atrium and multi-floor commercial drying with zero business closure.',
      icon: Building2,
    },
    {
      title: 'Mold Remediation & Clearance',
      slug: 'mold-remediation',
      desc: 'HEPA negative air scrubbers, botanical washes, and lab clearance.',
      icon: ShieldCheck,
    },
    {
      title: 'Burst Pipe Cleanup & Cavity Drying',
      slug: 'burst-pipe-cleanup',
      desc: 'Concealed moisture detection and pressurized cavity air drying.',
      icon: Wrench,
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen || scrolled 
          ? 'bg-[#0B0E14] border-b border-white/10 py-3.5 shadow-xl shadow-black/80' 
          : 'bg-[#0B0E14]/95 backdrop-blur-md border-b border-white/10 py-4'
      }`}
      style={{ backgroundColor: mobileMenuOpen ? '#0B0E14' : undefined }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* =====================================================================
            LEFT: Brand Logo & Monogram
            ===================================================================== */}
        <Link to="/" className="group flex items-center gap-3 text-white tracking-wider">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#102C76] to-[#035BFD] border border-blue-400/30 flex items-center justify-center text-white font-serif font-bold text-sm shadow-lg shadow-blue-600/25 transition-all">
            AV
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-serif text-base tracking-[0.2em] font-medium text-white group-hover:text-blue-300 transition-colors">
                AQUAVANT
              </span>
            </div>
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 font-mono uppercase">
              WATER RESTORATION
            </span>
          </div>
        </Link>

        {/* =====================================================================
            RIGHT: Navigation Links, Services Dropdown, and Phone CTA
            ===================================================================== */}
        <div className="hidden lg:flex items-center gap-8">
          
          <nav className="flex items-center gap-7 text-xs font-mono tracking-wider uppercase">
            
            {/* Overview */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-white border-b-2 border-blue-400 font-semibold' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              Overview
            </NavLink>

            {/* Services with Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  servicesDropdownOpen || location.pathname.startsWith('/services')
                    ? 'text-white border-b-2 border-blue-400 font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown 
                  size={13} 
                  className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} 
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full right-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-[580px] rounded-2xl bg-[#141820] border border-white/15 p-5 shadow-sm shadow-black/90  animate-in fade-in duration-200 z-50">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[10px] font-mono text-neutral-400">
                    <span className="text-blue-400 uppercase tracking-widest font-semibold">Specialized Protocols</span>
                    <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1">
                      <span>View All Services</span>
                      <ArrowUpRight size={11} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {serviceLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.slug}
                          to={`/services/${item.slug}`}
                          className="group/item p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-blue-400/30 transition-all flex items-start gap-3"
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-neutral-950 transition-colors shrink-0 mt-0.5">
                            <Icon size={14} />
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs font-serif text-white group-hover/item:text-blue-300 transition-colors leading-snug">
                              {item.title}
                            </div>
                            <div className="text-[10px] font-sans text-neutral-400 leading-tight line-clamp-2">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <div className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>15-Min Rapid Dispatch Fleet Ready</span>
                    </div>
                    <Link to="/emergency" className="text-blue-400 hover:text-white transition-colors">
                      Dispatch Portal →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Equipment Fleet */}
            <NavLink
              to="/equipment"
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-white border-b-2 border-blue-400 font-semibold' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              Equipment Fleet
            </NavLink>

            {/* Restoration Protocol */}
            <NavLink
              to="/protocol"
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-white border-b-2 border-blue-400 font-semibold' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              Protocol
            </NavLink>

            {/* Case Studies */}
            <NavLink
              to="/cases"
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-white border-b-2 border-blue-400 font-semibold' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              Case Studies
            </NavLink>

            {/* Emergency Dispatch */}
            <NavLink
              to="/emergency"
              className={({ isActive }) =>
                `transition-colors py-1 ${
                  isActive ? 'text-white border-b-2 border-blue-400 font-semibold' : 'text-neutral-400 hover:text-white'
                }`
              }
            >
              Dispatch
            </NavLink>

          </nav>

          {/* Direct Phone Call Button */}
          <a
            href="tel:18005550199"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/40 bg-blue-500/10 hover:bg-blue-500 hover:text-neutral-950 text-white text-xs font-mono tracking-wider transition-all duration-300 font-bold group shadow-md shadow-blue-500/20"
          >
            <PhoneCall size={13} className="text-blue-400 group-hover:text-neutral-950 transition-colors" />
            <span>(800) 555-0199</span>
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Full-Screen Mobile Drawer with Solid Background */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-[100] flex flex-col justify-between p-6 overflow-y-auto bg-[#0B0E14]"
          style={{ backgroundColor: '#0B0E14' }}
        >
          {/* Top Bar with Brand Logo and Close Button */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#102C76] to-[#035BFD] border border-blue-400/30 flex items-center justify-center text-white font-serif font-bold text-sm shadow-md">
                AV
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base tracking-[0.2em] font-medium text-white">
                  AQUAVANT
                </span>
                <span className="text-[8px] tracking-[0.3em] text-neutral-400 font-mono uppercase">
                  WATER RESTORATION
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-5 py-6">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-xl font-serif tracking-wider ${
                  isActive ? 'text-blue-400 font-medium' : 'text-neutral-200'
                }`
              }
            >
              Overview
            </NavLink>

            {/* Specialized Services */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-400">
                Specialized Services
              </div>
              <div className="pl-3 border-l border-white/15 space-y-2.5">
                {serviceLinks.map((srv) => (
                  <NavLink
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-sm font-sans ${
                        isActive ? 'text-blue-400 font-semibold' : 'text-neutral-300'
                      }`
                    }
                  >
                    {srv.title}
                  </NavLink>
                ))}
                <NavLink
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-mono text-neutral-400 hover:text-white pt-1"
                >
                  View All Services Overview →
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/equipment"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-xl font-serif tracking-wider ${
                  isActive ? 'text-blue-400 font-medium' : 'text-neutral-200'
                }`
              }
            >
              Equipment Fleet
            </NavLink>

            <NavLink
              to="/protocol"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-xl font-serif tracking-wider ${
                  isActive ? 'text-blue-400 font-medium' : 'text-neutral-200'
                }`
              }
            >
              Restoration Protocol
            </NavLink>

            <NavLink
              to="/cases"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-xl font-serif tracking-wider ${
                  isActive ? 'text-blue-400 font-medium' : 'text-neutral-200'
                }`
              }
            >
              Case Studies
            </NavLink>

            <NavLink
              to="/emergency"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block text-xl font-serif tracking-wider ${
                  isActive ? 'text-blue-400 font-medium' : 'text-neutral-200'
                }`
              }
            >
              Emergency Dispatch Portal
            </NavLink>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <div className="text-xs font-mono text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              24/7 Rapid Response Active
            </div>
            <a
              href="tel:18005550199"
              className="flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-full bg-blue-500 text-neutral-950 text-xs font-mono uppercase font-bold tracking-widest shadow-md shadow-blue-500/25 active:scale-95"
            >
              <PhoneCall size={14} />
              Call (800) 555-0199
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
