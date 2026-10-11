import React from 'react';
import { Layers, ArrowUpRight, Gauge, Droplets, ShieldCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CuratedMaterialityPage() {
  const equipmentFleet = [
    {
      category: 'Deep Sub-Surface Moisture Extraction',
      items: [
        { 
          name: 'Truck-Mounted High-Lift Vacuum Plants', 
          finish: 'Dual-Stage 650 CFM Vacuum Flow', 
          origin: 'Immediate Bulk Water Evacuation', 
          desc: 'Evacuates thousands of gallons of black or clean floodwaters per hour through high-vacuum hoses directly to municipal containment holding.' 
        },
        { 
          name: 'Hydro-X Weighted Suction Extractors', 
          finish: '350 PSI Dynamic Floor Seal', 
          origin: 'Hardwood & Subfloor Water Evacuation', 
          desc: 'Rides over soaked subflooring and luxury carpets, utilizing atmospheric suction to pull out 95% of trapped water in the very first sweep.' 
        },
        { 
          name: 'Injectidry Hardwood Floor Suction Mats', 
          finish: 'Negative-Pressure Vacuum Panels', 
          origin: 'Preserves Custom Architectural Timber', 
          desc: 'Self-sealing clear acrylic mats placed on cupped oak and walnut boards, drawing vapor from underneath joists without pulling up boards.' 
        }
      ]
    },
    {
      category: 'Psychrometric Desiccant & LGR Dehumidifiers',
      items: [
        { 
          name: 'Phoenix DryMAX XL LGR Units', 
          finish: '180 PPD @ AHAM / Ultra-Compact Footprint', 
          origin: 'Structural Moisture Extraction', 
          desc: 'Maintains extreme moisture grain depression down to 30 GPP, aggressively drying dense dimensional lumber and brick foundations.' 
        },
        { 
          name: 'Industrial Silica-Gel Desiccant Units', 
          finish: 'Sub-Zero Vapor Pressure Generation', 
          origin: 'Cold Climate & Commercial Facilities', 
          desc: 'Operates in low temperatures where traditional refrigerants fail, delivering super-dry air loops for large commercial archives and museums.' 
        },
        { 
          name: 'High-Static Structural Cavity Dryers', 
          finish: 'Targeted Wall & Ceiling Jet Delivery', 
          origin: 'Zero Wall-Breach Cavity Evaporation', 
          desc: 'Injects pressurized warm dehumidified air through tiny baseboard apertures to dry interior wall framing without replacing drywall.' 
        }
      ]
    },
    {
      category: 'Radiometric Thermal Imaging & Psychrometric Sensors',
      items: [
        { 
          name: 'FLIR E8-XT Radiometric Infrared Radiometers', 
          finish: '320x240 Thermal Resolution / MSX Edge', 
          origin: 'Concealed Moisture Footprint Detection', 
          desc: 'Detects evaporative temperature differentials to map water trails behind Venetian plaster, tiled showers, and multi-ply roof decks.' 
        },
        { 
          name: 'Tramex CME5 Non-Destructive Impedance Meters', 
          finish: 'Instant Concrete & Wood Subfloor Readings', 
          origin: 'Calibrated Depth Moisture Analysis', 
          desc: 'Measures electrical impedance up to 1-inch deep without driving invasive pins into expensive finished surfaces or architectural stones.' 
        },
        { 
          name: 'Continuous Cellular Telemetry Data Loggers', 
          finish: 'Real-Time Psychrometric Cloud Reporting', 
          origin: 'Insurance-Ready Equilibrium Tracking', 
          desc: 'Transmits live temperature, relative humidity, and dew point measurements 24/7 to our central dispatch engineering monitor.' 
        }
      ]
    },
    {
      category: 'Hospital-Grade Air Quality & Antimicrobial Containment',
      items: [
        { 
          name: 'DefendAir HEPA-500 Air Scrubbers', 
          finish: '99.97% Efficiency Down to 0.3 Microns', 
          origin: 'Continuous Negative Air Containment', 
          desc: 'Circulates and purifies 500 cubic feet of air per minute through medical-grade HEPA filters to capture airborne mold spores and toxins.' 
        },
        { 
          name: 'Ultra-Low Volume (ULV) Botanical Foggers', 
          finish: 'Thymol & Botanical Antimicrobial Mist', 
          origin: 'Eco-Friendly Pathogen Eradication', 
          desc: 'Atomizes EPA-registered botanical antimicrobials into a 10-micron mist that penetrates porous structural framing without harsh chemical fumes.' 
        },
        { 
          name: 'Odorox Hydroxyl Atmospheric Generators', 
          finish: 'Active Atmospheric Hydroxyl Radical Cascade', 
          origin: 'Safe In-Habitation Odor Neutralization', 
          desc: 'Replicates natural atmospheric purification to neutralize musty damp odors and volatile organic compounds while occupants remain inside.' 
        }
      ]
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
            <Layers size={13} className="text-sky-400" />
            <span>Industrial Mitigation Fleet & Hardware</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
            The Restoration Equipment Fleet.
          </h1>
          <p className="text-base text-[var(--text-muted)] font-light leading-relaxed">
            Restoration is a precise engineering discipline. We maintain an owned fleet of truck-mounted extraction plants, industrial LGR dehumidifiers, and thermal imaging cameras ready for immediate 24/7 mobilization.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {equipmentFleet.map((cat) => (
            <div key={cat.category} className="space-y-6">
              <h2 className="text-xl font-serif text-white border-b border-[var(--border-color)] pb-3 flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-xs font-mono text-sky-400">FLEET DIVISION READY</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <div 
                    key={item.name}
                    className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-sky-400/40 transition-colors space-y-3"
                  >
                    <div className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">
                      {item.origin}
                    </div>
                    <h3 className="text-lg font-serif text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-3 border-t border-[var(--border-color)] text-[10px] font-mono text-[var(--text-muted)]">
                      Technical Spec: <span className="text-white">{item.finish}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Equipment Fleet Photo Showcase */}
        <div className="mt-24 pt-16 border-t border-[var(--border-color)]">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-sky-400 block mb-2">
              Fleet Readiness Gallery
            </span>
            <h2 className="text-3xl font-serif text-white">
              Hardware Deployed in the Field.
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2 font-light">
              High-capacity commercial extraction plants and low-grain refrigerant systems operating on active job sites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/fleet.jpg', title: 'Extraction Truck Fleet', spec: '24/7 Standby Units 01–18' },
              { src: '/images/equipment.jpg', title: 'Phoenix DryMAX XL LGRs', spec: '180 PPD Extraction Density' },
              { src: '/images/operations.jpg', title: 'Sub-Surface Suction In Action', spec: 'Hydro-X Extreme Vacuum' },
              { src: '/images/thermal.jpg', title: 'Thermal Radiometric Camera', spec: 'FLIR E8-XT Leak Mapping' },
            ].map((card, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-800">
                  <img src={card.src} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95" />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-serif text-white">{card.title}</h4>
                  <div className="text-[10px] font-mono text-sky-400">{card.spec}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Mobilization Strip */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-white">Mobilize Emergency Equipment Fleet</h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">Available 24/7 with rapid delivery within 45 minutes of dispatch call.</p>
          </div>
          <a
            href="tel:18005550199"
            className="px-8 py-3.5 rounded-full bg-sky-400 text-neutral-950 text-xs font-mono uppercase tracking-widest font-bold hover:bg-sky-300 transition-colors shrink-0 flex items-center gap-2"
          >
            <PhoneCall size={14} />
            <span>Call (800) 555-0199</span>
          </a>
        </div>

      </div>
    </div>
  );
}

