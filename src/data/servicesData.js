// AQUAVANT RESTORATION  -  Service Architecture & Engineering Data

export const SERVICES = [
  {
    id: 'water-damage-restoration',
    slug: 'water-damage-restoration',
    number: '01',
    title: 'Water Damage Restoration',
    shortDesc: 'Complete property mitigation from initial moisture mapping through drying and repair coordination.',
    heroHeadline: 'Comprehensive Property Mitigation From Initial Intrusion to Complete Recovery.',
    image: '/images/hero_water_restoration_1791724413183.jpg',
    category: 'Full-Scope Mitigation',
    tagline: 'Residential & Commercial Recovery',
    ctaText: 'DISCUSS WATER DAMAGE RESTORATION',
    summary: 'Water damage unfolds in stages. Left unaddressed, moisture migrates behind baseboards, beneath underlayment, and deep into porous drywall. AquaVant deploys a methodical 5-phase mitigation protocol adhering to IICRC S500 standards, ensuring every cubic inch of affected structural material is documented and dried to dry-standard benchmarks.',
    workflowPhases: [
      { step: '01', name: 'Thermal & Moisture Assessment', desc: 'Non-invasive infrared FLIR thermal imaging and calibrated pinless moisture sensors identify hidden moisture migration pathways behind walls and beneath flooring.' },
      { step: '02', name: 'Source Containment & Hazard Isolation', desc: 'Verification that water source is stopped, electrical hazards are isolated, and unaffected areas are sealed with negative air pressure barriers.' },
      { step: '03', name: 'High-Volume Extraction', desc: 'Immediate removal of free-standing water using commercial truck-mount or portable weighted extraction units to minimize saturation time.' },
      { step: '04', name: 'Targeted Structural Drying', desc: 'Deployment of low-grain refrigerant (LGR) dehumidifiers and vortex axial air movers positioned for laminar airflow across wet boundaries.' },
      { step: '05', name: 'Psychrometric Monitoring & Sign-off', desc: 'Daily logging of relative humidity (RH), specific humidity (GPP), and material moisture content until pre-loss baseline is confirmed.' }
    ],
    equipmentUsed: ['FLIR E95 Thermal Infrared Imagers', 'Phoenix DryMAX XL LGR Dehumidifiers', 'Centrifugal & Axial Air Movers', 'Delmhorst Digital Moisture Meters', 'Commercial Water Extractors'],
    safetyPrecautions: [
      'Never enter standing water if power outlets, extension cords, or basement panels may be submerged.',
      'Turn off your main water shutoff valve immediately if an internal plumbing failure is suspected.',
      'Avoid disturbing sagging drywall or plaster ceilings which may hold dangerous water weight.'
    ],
    faqs: [
      { q: 'How long does the water damage restoration process usually take?', a: 'Structural drying typically requires 3 to 5 days, depending on material density, ambient temperature, and whether water was clean (Category 1) or contaminated. Reconstruction timelines vary based on scope.' },
      { q: 'Does homeowners insurance cover water damage restoration?', a: 'Coverage generally applies to sudden and accidental water damage (such as burst pipes or water heater ruptures). Gradual leaks or external overland flooding typically require specific riders or flood insurance policies.' },
      { q: 'Can I stay in my home during the restoration?', a: 'Depending on the affected square footage, noise levels from commercial air movers, and the water category (clean vs contaminated), it is often safe to stay in unaffected levels. If black water or heavy dampness is present, temporary relocation is recommended.' }
    ]
  },
  {
    id: 'emergency-water-extraction',
    slug: 'emergency-water-extraction',
    number: '02',
    title: 'Emergency Water Extraction',
    shortDesc: 'Rapid removal of standing water using high-volume commercial pumps and weighted vacuum extractors.',
    heroHeadline: 'Rapid Standing Water Removal Before Structural Saturation Begins.',
    image: '/images/flooded_basement_1791724756280.jpg',
    category: 'Rapid Emergency Service',
    tagline: 'High-Volume Water Removal',
    ctaText: 'REQUEST WATER EXTRACTION',
    summary: 'Every hour standing water remains on carpet, hardwood, or concrete, water wicks deeper into subfloors and framing. Our rapid-deployment extraction units remove hundreds of gallons of water per hour, pulling standing pools and deeply trapped moisture out of padding and porous flooring before permanent swelling occurs.',
    workflowPhases: [
      { step: '01', name: 'Immediate Site Triage', desc: 'Rapid assessment of standing water depth, classification of water purity, and inspection of electrical safety.' },
      { step: '02', name: 'Submersible & Truck-Mount Pumping', desc: 'High-velocity extraction of large standing water bodies using submersible trash pumps or heavy-duty extraction hoses.' },
      { step: '03', name: 'Weighted Surface Extraction', desc: 'Deployment of specialized weighted extraction tools (Rover / Ride-on extractors) designed to compress carpet pads and pull water from subflooring without tearing materials.' },
      { step: '04', name: 'Antimicrobial Surface Treatment', desc: 'Application of EPA-registered botanical antimicrobials to prevent premature microbial growth on newly exposed surfaces.' }
    ],
    equipmentUsed: ['Submersible High-Flow Sump Extractors', 'Rover Heavy-Duty Ride-on Pad Extractors', 'Truck-Mounted Vacuum Systems', 'Hydro-X Extreme Suction Units'],
    safetyPrecautions: [
      'Do not walk through standing water without slip-resistant rubber safety boots.',
      'Do not attempt to use standard household vacuum cleaners  -  severe electrocution hazard.',
      'Keep children and pets away from wet rooms until safety clearance is established.'
    ],
    faqs: [
      { q: 'Why is physical water extraction prioritized over just using dehumidifiers?', a: 'Physical extraction is 1,200 times more energy efficient and fast than evaporating water into the air. Extracting 100 gallons mechanically saves days of dehumidification run time and prevents structural warping.' },
      { q: 'Can my hardwood floors be saved if they have water standing on them?', a: 'Yes, if extraction happens quickly! We deploy targeted floor mat suction drying systems that draw moisture out of the grain before cupping becomes permanent.' }
    ]
  },
  {
    id: 'flood-cleanup',
    slug: 'flood-cleanup',
    number: '03',
    title: 'Flood Cleanup',
    shortDesc: 'Mitigation for flooded rooms, ground floor intrusion, and basement water events with safety protocols.',
    heroHeadline: 'Controlled Flood Mitigation for Severe Groundwater Intrusion & Water Events.',
    image: '/images/basement.jpg',
    category: 'Intrusion & Flood Recovery',
    tagline: 'Flooded Rooms & Properties',
    ctaText: 'GET HELP WITH FLOOD DAMAGE',
    summary: 'Flooding from external storm runoff or hydrostatic ground pressure brings silt, soil microbes, and significant water volume into living areas. AquaVant provides controlled flood cleanup: water evacuation, disposal of unsalvageable saturated porous items, deep sanitization, and accelerated structural drying.',
    workflowPhases: [
      { step: '01', name: 'Site Safety Audit & Power Disconnect', desc: 'Evaluating structural integrity, electrical contact risks, and establishing safety perimeters before equipment enters.' },
      { step: '02', name: 'Silt & Standing Water Evacuation', desc: 'Pumping out water while simultaneously removing sediment and outdoor debris that entered with floodwaters.' },
      { step: '03', name: 'Controlled Demolition (Flood Cuts)', desc: 'Making clean horizontal drywall cuts 12 to 24 inches above the high-water line to inspect wall cavities and remove wet insulation.' },
      { step: '04', name: 'Hospital-Grade Sanitization', desc: 'Disinfecting exposed framing with EPA-registered antimicrobials to eliminate floodborne biological agents.' },
      { step: '05', name: 'Desiccant / LGR Chamber Drying', desc: 'Enclosing the space in a controlled drying vortex to restore moisture levels in concrete slabs and structural framing.' }
    ],
    equipmentUsed: ['Industrial Trash Pumps', 'HEPA 500 Air Scrubbers', 'Commercial Power Washers', 'Desiccant Dehumidifiers', 'Moisture Data Loggers'],
    safetyPrecautions: [
      'Assume floodwater may contain chemical runoff or microbial hazards; avoid direct bare-skin contact.',
      'Never pump out a flooded basement too rapidly if surrounding soil is saturated, as external hydraulic pressure can crack foundation walls.',
      'Ensure proper ventilation if operating portable generators outside.'
    ],
    faqs: [
      { q: 'What is a "flood cut" and why is it necessary?', a: 'A flood cut is a clean horizontal cut made into drywall (usually 1-2 feet above the water line). This allows wet fiberglass insulation to be discarded and opens the wall cavity so air movers can dry the structural studs.' },
      { q: 'Are carpets salvageable after a flood?', a: 'If the floodwater came from outdoor surface runoff (Category 3 water), carpet padding must always be replaced, and carpet replacement is strongly recommended for health and sanitation reasons.' }
    ]
  },
  {
    id: 'burst-pipe-cleanup',
    slug: 'burst-pipe-cleanup',
    number: '04',
    title: 'Burst Pipe Cleanup',
    shortDesc: 'Rapid restoration for pressurized plumbing breaks, ceiling collapses, and multi-floor water cascades.',
    heroHeadline: 'Urgent Mitigation for Pressurized Plumbing Failures & Multi-Story Cascades.',
    image: '/images/thermal.jpg',
    category: 'Plumbing Intrusion',
    tagline: 'Frozen Pipes & Supply Lines',
    ctaText: 'DISCUSS PIPE DAMAGE',
    summary: 'A ruptured 3/4-inch pressurized water supply pipe can release up to 400 to 800 gallons of clean water per hour, cascading through upstairs ceilings down into lower levels. AquaVant coordinates rapid water extraction, cavity drying, and moisture mapping across every ceiling and wall cavity affected.',
    workflowPhases: [
      { step: '01', name: 'Shutoff Verification & Plumber Coordination', desc: 'Ensuring main supply valve is isolated while collaborating with licensed master plumbers to repair the burst section.' },
      { step: '02', name: 'Multi-Level Water Tracking', desc: 'Using infrared thermal cameras to trace water paths that seeped between subfloors, ceiling joists, and vertical pipe chases.' },
      { step: '03', name: 'Ceiling Relief & Moisture Extraction', desc: 'Relieving water pockets in sagging drywall to prevent spontaneous ceiling collapse, followed by thorough carpet extraction.' },
      { step: '04', name: 'Cavity Injected Drying', desc: 'Deploying high-pressure wall cavity drying systems that blow dry air through small holes beneath baseboards, avoiding unnecessary drywall destruction.' }
    ],
    equipmentUsed: ['Injectidry Wall Cavity Drying Systems', 'FLIR Infrared Cameras', 'Weighted Extraction Wands', 'Commercial LGR Dehumidifiers'],
    safetyPrecautions: [
      'Locate and shut off your property’s main water shutoff valve immediately.',
      'Turn off circuit breakers controlling wet rooms or ceilings that are dripping water near light fixtures.',
      'Place buckets beneath bulging ceiling paint and pierce a small hole with a screwdriver to relieve weight safely.'
    ],
    faqs: [
      { q: 'Why do burst pipes cause damage so quickly?', a: 'Unlike a slow leak, supply lines operate under 40-70 PSI of pressure. Hundreds of gallons escape in minutes, saturating insulation and spreading horizontally through floor trusses.' },
      { q: 'Can walls be dried without tearing them all down?', a: 'Yes! If the water is clean (Category 1 supply water) and addressed within 24-48 hours, our Injectidry cavity systems can dry interior wall cavities through tiny 5/8-inch holes hidden behind baseboards.' }
    ]
  },
  {
    id: 'basement-flooding',
    slug: 'basement-flooding',
    number: '05',
    title: 'Basement Flooding Cleanup',
    shortDesc: 'Comprehensive water extraction and drying for sump pump failures, foundation seepage, and finished basements.',
    heroHeadline: 'Specialized Extraction & Dehumidification for Flooded Basements.',
    image: '/images/basement.jpg',
    category: 'Sub-Grade Restoration',
    tagline: 'Sump Failures & Seepage',
    ctaText: 'GET BASEMENT FLOOD HELP',
    summary: 'Sub-grade basement levels have unique drying physics: concrete slab porosity, lack of natural cross-ventilation, and high humidity retention. Whether triggered by power outages, failed sump pumps, or seasonal water tables, our technicians deploy high-capacity drying chambers to restore finished or unfinished basements.',
    workflowPhases: [
      { step: '01', name: 'Sump & Drain Mechanical Verification', desc: 'Evaluating the primary drainage system, auxiliary backup pumps, and checking perimeter French drains.' },
      { step: '02', name: 'Continuous Water Extraction', desc: 'Pumping water out to safe exterior discharge zones away from the foundation line.' },
      { step: '03', name: 'Contents Triage & Elevation', desc: 'Lifting furniture onto waterproof foam blocks, sorting salvageable items, and establishing drying zones.' },
      { step: '04', name: 'Slab & Stud Moisture Extraction', desc: 'Deep drying of concrete foundation walls and framing using desiccant dehumidifiers capable of achieving ultra-low grain depressions.' }
    ],
    equipmentUsed: ['High-Head Submersible Sump Pumps', 'Desiccant Dehumidifiers', 'Centrifugal Floor Dryers', 'Concrete Moisture Probes'],
    safetyPrecautions: [
      'Watch out for hidden electrical outlets or submerged furnace and water heater burner assemblies.',
      'Do not operate standard basement dehumidifiers while water is standing on the floor.',
      'Be cautious of slick concrete and slippery tile flooring.'
    ],
    faqs: [
      { q: 'What happens to basement concrete after flooding?', a: 'Concrete acts like a hard sponge. Even after water is pumped out, moisture remains trapped deep inside the slab and will continue to evaporate into the basement for weeks unless drawn out with commercial dehumidifiers.' },
      { q: 'Will my flooded finished basement develop mold?', a: 'Mold spores can germinate within 24 to 48 hours in warm, damp environments. Rapid professional extraction and industrial drying with antimicrobial treatment prevent microbial development.' }
    ]
  },
  {
    id: 'structural-drying',
    slug: 'structural-drying',
    number: '06',
    title: 'Structural Drying',
    shortDesc: 'Scientific psychrometric drying using low-grain dehumidifiers, axial airflow, and daily moisture logging.',
    heroHeadline: 'Scientific Psychrometric Drying Engineered for Structural Building Materials.',
    image: '/images/equipment.jpg',
    category: 'Applied Psychrometry',
    tagline: 'Engineered Moisture Removal',
    ctaText: 'LEARN ABOUT STRUCTURAL DRYING',
    summary: 'Structural drying is not guesswork; it is applied physics. AquaVant utilizes psychrometric science  -  calculating vapor pressure differentials, dew point temperatures, and grains per pound (GPP)  -  to create the ideal atmospheric conditions that pull bound moisture out of framing, subfloors, and concrete.',
    workflowPhases: [
      { step: '01', name: 'Psychrometric Baseline Calculation', desc: 'Measuring outdoor vs indoor temperature, relative humidity, and calculating target GPP (grains per pound) drying metrics.' },
      { step: '02', name: 'Controlled Airflow Distribution', desc: 'Strategic placement of high-velocity axial air movers at 45-degree angles to break the stagnant boundary layer of air on wet surfaces.' },
      { step: '03', name: 'Low-Grain Dehumidification (LGR)', desc: 'Continual extraction of airborne moisture to maintain vapor pressure differentials that force structural moisture into the air.' },
      { step: '04', name: 'Daily Moisture Logging', desc: 'Daily readings with penetrate pin meters in structural studs, documented in transparent charts for insurance verification.' }
    ],
    equipmentUsed: ['Phoenix DryMAX XL LGR Dehumidifiers', 'OmniDry Axial Air Movers', 'Vapor Pressure Psychrometers', 'Thermal Hygro-Thermometers'],
    safetyPrecautions: [
      'Do not turn off drying equipment during the 3-day drying cycle without consulting the technician.',
      'Keep closed doors and windows shut to maintain the controlled drying chamber environment.',
      'Equipment generates heat as it removes moisture; this is normal and part of the thermodynamic process.'
    ],
    faqs: [
      { q: 'Why shouldn’t I just open the windows and use household fans?', a: 'Household fans lack the static pressure needed to break the boundary air layer. If outdoor humidity is higher than indoors, opening windows actually introduces more moisture into wet building materials.' },
      { q: 'How do you know when a wall is truly dry?', a: 'We measure moisture content against an unaffected dry standard in your own property (typically 8-12% for framing lumber) using calibrated resistance pin meters.' }
    ]
  },
  {
    id: 'sewage-cleanup',
    slug: 'sewage-cleanup',
    number: '07',
    title: 'Sewage Cleanup',
    shortDesc: 'Safe, controlled containment and biohazard sanitization for Category 3 black water sewer backups.',
    heroHeadline: 'Certified Biohazard Containment & Sanitization for Category 3 Black Water.',
    image: '/images/containment.jpg',
    category: 'Biohazard & Black Water',
    tagline: 'Category 3 Biohazard Protocols',
    ctaText: 'DISCUSS SEWAGE DAMAGE',
    summary: 'Sewage backflow contains Category 3 "black water," carrying pathogenic bacteria, viruses, fungi, and chemical contaminants. AquaVant handles sewage emergencies with rigorous biohazard containment protocols, personal protective gear, hospital-grade antimicrobial washdowns, and safe disposal of porous contaminated materials.',
    workflowPhases: [
      { step: '01', name: 'Full PPE & Biohazard Containment', desc: 'Technicians don Level C Tyvek suits, respirators, and nitrile gloves. Negative air machines with HEPA filtration isolate airborne pathogens.' },
      { step: '02', name: 'Bio-Solid & Waste Extraction', desc: 'Careful removal and safe disposal of gross contaminants and black water in compliance with local environmental guidelines.' },
      { step: '03', name: 'Removal of Porous Contaminated Substrates', desc: 'Carpet, underlayment, and drywall contaminated by sewage cannot be sanitized and are safely cut out and bagged for disposal.' },
      { step: '04', name: 'Multi-Stage Antimicrobial Washdown', desc: 'Thorough cleaning with broad-spectrum hospital-grade disinfectants on all non-porous structural framing and concrete slabs.' },
      { step: '05', name: 'ATP Clearance & Air Scrubbing', desc: 'Continuous HEPA air filtration and biological surface testing to confirm decontamination before drying begins.' }
    ],
    equipmentUsed: ['HEPA 500 DefendAir Air Scrubbers', 'EPA-Registered Broad-Spectrum Disinfectants', 'Thermal Foggers', 'Biohazard Extraction Vacuums'],
    safetyPrecautions: [
      'DANGER: Do not touch black water or breathe vapors without respiratory protection.',
      'Turn off HVAC systems immediately to avoid spreading bioaerosols throughout the home.',
      'Discard any food, toothbrushes, or cosmetics that were present in or near the affected room.'
    ],
    faqs: [
      { q: 'Can carpet be saved after a sewage backup?', a: 'No. Industry standards (IICRC S500) mandate that porous materials such as carpet and padding exposed to Category 3 black water must be safely removed and destroyed.' },
      { q: 'How do you prevent odors from lingering?', a: 'Odors originate from bacterial digestion. We eliminate the bacteria with EPA hospital disinfectants and follow up with hydroxyl generators or ozone treatments to neutralize volatile organic compounds.' }
    ]
  },
  {
    id: 'storm-water-damage',
    slug: 'storm-water-damage',
    number: '08',
    title: 'Storm Water Damage',
    shortDesc: 'Restoration for roof breaches, gale-driven rain intrusion, flash flood impacts, and fallen tree damage.',
    heroHeadline: 'Urgent Stabilization & Restoration for Severe Storm Water Breaches.',
    image: '/images/basement.jpg',
    category: 'Severe Weather Response',
    tagline: 'Wind, Rain & Roof Penetration',
    ctaText: 'REQUEST STORM DAMAGE HELP',
    summary: 'Severe weather can compromise building envelopes with hurricane winds, hail-shattered skylights, or fallen branches, allowing torrential rain to pour through attics and exterior walls. AquaVant provides urgent structural stabilization, emergency board-up, water evacuation, and thorough multi-level drying.',
    workflowPhases: [
      { step: '01', name: 'Exterior Envelope Stabilization', desc: 'Emergency tarping of breached roofs and boarding of shattered windows to stop active rainwater intrusion.' },
      { step: '02', name: 'Structural Safety Assessment', desc: 'Inspecting load-bearing roof trusses, wet ceiling insulation weight, and electrical fixtures.' },
      { step: '03', name: 'Attic & Insulation Extraction', desc: 'Vacuuming soaked blown-in insulation from attic spaces before water collapses ceiling drywall into living quarters.' },
      { step: '04', name: 'Multi-Floor Drying System', desc: 'Coordinated deployment of desiccant dehumidification to dry exterior wall cavities and subflooring.' }
    ],
    equipmentUsed: ['Commercial Roof Tarps & Fasteners', 'Heavy-Duty Insulation Vacuums', 'High-Static Pressure Air Movers', 'Moisture Meters'],
    safetyPrecautions: [
      'Stay away from sagging ceilings holding storm water.',
      'Watch out for downed power lines or storm debris surrounding the property perimeter.',
      'Keep your camera ready to document storm damage for insurance adjusters if safe to do so.'
    ],
    faqs: [
      { q: 'Do you provide temporary roof tarping?', a: 'Yes, emergency roof tarping and window board-up are critical first steps to prevent further rain intrusion before interior drying starts.' },
      { q: 'Will wet attic insulation dry on its own?', a: 'No. Wet blown-in fiberglass or cellulose compresses, loses its R-value, traps water against drywall ceilings, and creates an ideal environment for mold. It must be professionally extracted.' }
    ]
  },
  {
    id: 'commercial-water-damage',
    slug: 'commercial-water-damage',
    number: '09',
    title: 'Commercial Water Damage',
    shortDesc: 'Restoration engineered for offices, retail stores, healthcare facilities, and multi-family residential complexes.',
    heroHeadline: 'Business Continuity & High-Capacity Restoration for Commercial Properties.',
    image: '/images/commercial.jpg',
    category: 'Commercial & Multi-Tenant',
    tagline: 'Offices, Retail & Multi-Family',
    ctaText: 'DISCUSS COMMERCIAL RESTORATION',
    summary: 'For commercial property owners, landlords, and facility directors, downtime equals direct revenue loss. AquaVant provides scalable mitigation designed around your business continuity: off-hours phased containment, large-scale desiccant trailer systems, detailed compliance documentation, and clear commercial adjustor reporting.',
    workflowPhases: [
      { step: '01', name: 'Operational Impact Assessment', desc: 'Developing a phased restoration plan to keep critical business operations running safely while isolating wet zones.' },
      { step: '02', name: 'Commercial-Scale Extraction', desc: 'Deploying high-capacity multi-operator extraction rigs across wide open floorplates, server rooms, and common corridors.' },
      { step: '03', name: 'Containment Barriers & Negative Air', desc: 'Erecting floor-to-ceiling zip-wall partitions to prevent dust and humidity migration into tenant suites.' },
      { step: '04', name: 'Industrial Desiccant Drying', desc: 'Supplying dry air via large desiccant units capable of maintaining under 20% relative humidity in large commercial volumes.' },
      { step: '05', name: 'Risk Management Documentation', desc: 'Providing daily psychrometric spreadsheets, moisture mapping logs, and photos for corporate risk officers and insurance carriers.' }
    ],
    equipmentUsed: ['Trailer-Mounted Desiccant Dehumidifiers', 'Commercial Ride-On Extractors', 'HEPA Negative Air Units', 'Thermal Imaging Drones & Scanners'],
    safetyPrecautions: [
      'Protect server closets and IT infrastructure by verifying moisture barriers are intact.',
      'Ensure clear, lighted emergency egress routes remain unobstructed by extraction hoses.',
      'Notify tenant safety coordinators before beginning work in shared commercial spaces.'
    ],
    faqs: [
      { q: 'Can our staff continue working during the restoration process?', a: 'In many commercial cases, yes! We can erect physical containment barriers with zipper entries and run whisper-quiet negative air scrubbers so unaffected departments continue normal business.' },
      { q: 'Do you provide detailed commercial insurance documentation?', a: 'Yes. We provide complete scope reports, daily moisture logs, psychrometric calculations, and photos that match standard commercial insurance adjusting formats (Xactimate).' }
    ]
  }
];

export const SYMPTOMS_MATRIX = [
  { symptom: 'Standing pools of water on floors', service: 'Emergency Water Extraction', slug: 'emergency-water-extraction', urgency: 'Immediate (0-2 hrs)', icon: 'Droplets' },
  { symptom: 'Water accumulated in basement', service: 'Basement Flooding Cleanup', slug: 'basement-flooding', urgency: 'Urgent (1-4 hrs)', icon: 'Layers' },
  { symptom: 'Pipes ruptured or ceiling dripping', service: 'Burst Pipe Cleanup', slug: 'burst-pipe-cleanup', urgency: 'Critical (Shut off main valve)', icon: 'Activity' },
  { symptom: 'Moisture inside walls or damp subfloors', service: 'Structural Drying', slug: 'structural-drying', urgency: 'Standard (24-48 hrs)', icon: 'Wind' },
  { symptom: 'Sewer backflow or foul dark water', service: 'Sewage Cleanup', slug: 'sewage-cleanup', urgency: 'Biohazard (Do not touch)', icon: 'ShieldAlert' },
  { symptom: 'Water entry after heavy storms or rain', service: 'Storm Water Damage', slug: 'storm-water-damage', urgency: 'Urgent (Stop intrusion)', icon: 'CloudRain' },
  { symptom: 'Water damage in office or commercial retail', service: 'Commercial Water Damage', slug: 'commercial-water-damage', urgency: 'High (Minimize downtime)', icon: 'Building2' }
];
