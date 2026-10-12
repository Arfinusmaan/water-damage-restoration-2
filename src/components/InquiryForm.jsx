import React, { useState } from 'react';
import { 
  Send, Phone, CheckCircle2, ShieldCheck, AlertCircle, 
  Clock, Lock, X
} from 'lucide-react';

export const InquiryForm = ({ defaultService = "", onSuccess = () => {}, onClose = null }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    zipCode: '',
    propertyType: 'single-family',
    service: defaultService || 'water-extraction',
    message: '',
    isEmergency: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your full name and phone number for immediate response.');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onSuccess(formData);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-emerald-500/50 text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Emergency Dispatch Notified • Immediate Priority
          </span>
          <h3 className="font-bold text-2xl text-white mt-1">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
            Our certified restoration coordinator has received your emergency ticket for <strong>{formData.zipCode || 'your area'}</strong>. A live specialist will call or text you within minutes.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center justify-center gap-2 text-white font-semibold">
            <Clock className="w-4 h-4 text-[#0066FF]" />
            <span>Water actively flooding right now?</span>
          </div>
          <p>Connect immediately to our direct 24/7 emergency dispatch line:</p>
          <a
            href="tel:18005550278"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Live Dispatch: (800) 555-0278</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all shadow"
            >
              Close Window
            </button>
          )}
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-400 hover:text-slate-200 underline py-1.5"
          >
            Submit another property request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-sm space-y-5">
      
      {/* Form Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs uppercase font-bold tracking-wider text-[#0066FF] flex items-center gap-1.5">
            
            <span>Rapid Disaster Triage</span>
          </span>
          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 px-2.5 py-0.5 rounded-full">
            $0 Upfront Insurance Billing
          </span>
        </div>
        <h3 className="font-bold text-2xl text-white">
          Request Free Assessment & Rapid Extraction
        </h3>
        <p className="text-slate-400 text-xs mt-1">
          Zero obligation. 45-minute on-site arrival SLA with thermal moisture scanning.
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>
      </div>

      {/* Email & Zip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Property Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="e.g. 07601"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>
      </div>

      {/* Service Type & Property Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Primary Service Needed
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          >
            <option value="water-extraction">Emergency Water Extraction</option>
            <option value="hardwood-rescue">Hardwood Floor Mat Drying</option>
            <option value="structural-drying">Basement & Structural Drying</option>
            <option value="thermal-inspection">FLIR Thermal Moisture Mapping</option>
            <option value="mold-prevention">Antimicrobial Mold Prevention</option>
            <option value="master-rebuild">Master Carpentry & Drywall Rebuild</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Property Classification
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          >
            <option value="single-family">Single Family Home</option>
            <option value="condo-townhouse">Condo / Townhouse</option>
            <option value="commercial-office">Commercial Office</option>
            <option value="industrial-retail">Retail / Industrial</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
          Incident Details (Where is the water coming from?)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. Water heater ruptured in basement, standing water over finished carpets..."
          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
        ></textarea>
      </div>

      {/* Emergency Toggle */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
        <input
          type="checkbox"
          id="isEmergency"
          name="isEmergency"
          checked={formData.isEmergency}
          onChange={handleChange}
          className="w-4 h-4 rounded text-[#0066FF] focus:ring-[#0066FF] border-slate-700 bg-slate-900"
        />
        <label htmlFor="isEmergency" className="text-xs text-slate-300 select-none cursor-pointer">
          <strong className="text-white">Active emergency / standing water:</strong> Prioritize for 45-minute truck dispatch
        </label>
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-black text-sm shadow-sm shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <span>Dispatching Crew...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Assessment Request</span>
          </>
        )}
      </button>

      {/* Close Button for Modal */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <X className="w-3.5 h-3.5 text-slate-400" />
          <span>Close & Return to Page</span>
        </button>
      )}

      {/* Trust & Privacy Guarantee */}
      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>Strict Privacy • Never Sold</span>
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero-Pressure Honest Advice</span>
        </span>
      </div>

    </form>
  );
};

export default InquiryForm;
