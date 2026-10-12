import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock, PhoneCall, ShieldCheck, AlertCircle, FileText } from 'lucide-react';

export default function CuratedContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    damageType: 'Burst Pipe / Plumbing Rupture',
    propertyType: 'Residential Single-Family Estate',
    address: '',
    insuranceCarrier: 'State Farm',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>24/7 Emergency Dispatch Portal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            Immediate Response & Direct Insurance Claim Support.
          </h1>
          <p className="text-base text-[var(--text-muted)] font-light leading-relaxed">
            Every minute of delay increases water damage. Submit an emergency dispatch request below or call our 24/7 emergency hotline for instant mobilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Phone & Response Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl border border-sky-400/30 bg-sky-950/20 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Dispatchers Live On Duty</span>
              </div>
              <h3 className="text-2xl font-serif text-white">Call 24/7 Emergency Hotline</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                For active inundation, pressurized pipe bursts, or standing water, telephone calls are answered within 3 rings by certified restoration personnel.
              </p>

              <a
                href="tel:18005550199"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-sky-400 text-neutral-950 text-sm font-bold uppercase tracking-widest hover:bg-sky-300 transition-all shadow-sm shadow-sky-500/20"
              >
                <PhoneCall size={18} />
                <span>(800) 555-0199</span>
              </a>

              <div className="pt-4 border-t border-[var(--border-color)] space-y-3 text-xs font-mono text-[var(--text-muted)]">
                <div className="flex justify-between">
                  <span>AVERAGE RESPONSE TIME:</span>
                  <span className="text-white font-semibold">15 MINUTES</span>
                </div>
                <div className="flex justify-between">
                  <span>OUT-OF-POCKET EXPENSE:</span>
                  <span className="text-emerald-400 font-semibold">$0 (DIRECT BILLED)</span>
                </div>
                <div className="flex justify-between">
                  <span>IICRC CERTIFIED:</span>
                  <span className="text-white font-semibold">MASTER FIRM #84920</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4 text-xs font-light text-[var(--text-muted)]">
              <div className="text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck size={14} className="text-sky-400" />
                <span>Insurance Carrier Direct Billing Guarantee</span>
              </div>
              <p>
                We bill all major insurance carriers directly including Chubb, Travelers, State Farm, AIG, Nationwide, and Liberty Mutual using line-item Xactimate pricing.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="/images/hero-technician-inspection.jpg" alt="Certified Master Technicians On Standby" className="w-full h-full object-cover filter brightness-95" />
              </div>
              <div className="p-4 text-xs font-mono text-[var(--text-secondary)] flex items-center justify-between">
                <span>CERTIFIED EMERGENCY FLEET</span>
                <span className="text-emerald-400">● 15-MIN DISPATCH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Emergency Claim Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-white">Emergency Request Received</h3>
                  <p className="text-sm text-[var(--text-secondary)] font-light max-w-md mx-auto leading-relaxed">
                    Our master dispatcher has been notified. A certified restoration team is being mobilized to your address. Please expect a verification call within 5 minutes.
                  </p>
                  <div className="pt-4">
                    <a
                      href="tel:18005550199"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-wider"
                    >
                      <PhoneCall size={14} />
                      <span>Direct Line: (800) 555-0199</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif text-white">Priority Emergency Intake</h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1">Please provide property details to expedite rapid team dispatch.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Robert Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Emergency Phone *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Source of Water Damage</label>
                      <select 
                        value={formData.damageType}
                        onChange={(e) => setFormData({ ...formData, damageType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-white text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      >
                        <option>Burst Pipe / Plumbing Rupture</option>
                        <option>Flooded Basement / Groundwater</option>
                        <option>Roof Leak / Storm Surge</option>
                        <option>Sewage Backup / Blackwater</option>
                        <option>Appliance / Water Heater Overflow</option>
                        <option>Commercial Multi-Story Loss</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Insurance Carrier</label>
                      <input 
                        type="text" 
                        placeholder="e.g. State Farm, Chubb, Travelers"
                        value={formData.insuranceCarrier}
                        onChange={(e) => setFormData({ ...formData, insuranceCarrier: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Property Address & City *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Street address, unit, city, state"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">Damage Summary / Urgency Notes</label>
                    <textarea 
                      rows={3}
                      placeholder="Is water actively running? What floors are flooded? Has the main water shutoff valve been closed?"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--border-color)] text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-sky-400 text-neutral-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-sky-300 transition-all flex items-center justify-center gap-2 shadow-sm shadow-sky-500/20 cursor-pointer"
                  >
                    <span>Dispatch Emergency Team Now</span>
                    <Send size={14} />
                  </button>

                  <div className="text-[10px] text-center text-[var(--text-muted)] font-mono">
                    24/7/365 RESPONSE · ZERO DELAY · DIRECT INSURANCE BILLING
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

