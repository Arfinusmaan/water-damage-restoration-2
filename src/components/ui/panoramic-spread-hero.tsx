"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PhoneCall, ArrowDown, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

// Authentic high-resolution Water Damage Restoration field images
const IMAGES = [
  { src: "/images/hero.jpg", alt: "Rapid Water Extraction Specialists on Site", tag: "Emergency Extraction" },
  { src: "/images/equipment.jpg", alt: "Industrial LGR Dehumidifiers and Air Movers", tag: "LGR Dehumidifiers" },
  { src: "/images/thermal.jpg", alt: "FLIR Infrared Thermal Moisture Mapping", tag: "Thermal FLIR Scans" },
  { src: "/images/hardwood.jpg", alt: "Non-Invasive Subfloor Hardwood Floor Drying", tag: "Hardwood Salvage" },
  { src: "/images/commercial.jpg", alt: "Commercial Large-Loss Flood Recovery", tag: "Commercial Loss" },
  { src: "/images/inspection.jpg", alt: "Psychrometric Digital Pinless Moisture Verification", tag: "Moisture Verification" },
  { src: "/images/containment.jpg", alt: "Critical HEPA Negative Air Containment Barriers", tag: "HEPA Clean Air" },
  { src: "/images/restored.jpg", alt: "Flawlessly Restored Architectural Living Space", tag: "Restored Baseline" },
];

// Calculate a sweeping 3D arch around the center point for both mobile and desktop
const generatePanoramicCards = () => {
  const total = IMAGES.length;
  const centerIndex = (total - 1) / 2;

  return IMAGES.map((item, i) => {
    const offset = i - centerIndex;
    const absOffset = Math.abs(offset);
    const zIndex = Math.round(10 - absOffset);

    return {
      item,
      z: zIndex,
      desktop: {
        stacked: { x: offset * 2, y: offset * -1.5, rotateZ: offset * 2.5, rotateY: 0, scale: 0.95 },
        panoramic: { x: offset * 18, y: absOffset * 3.5, rotateZ: offset * 1.5, rotateY: offset * -12, scale: 1 - absOffset * 0.04 },
        size: { w: "22vw", h: "32vh", ml: "-11vw", mt: "-16vh" }
      },
      mobile: {
        stacked: { x: offset * 1.2, y: offset * -1.2, rotateZ: offset * 2.5, rotateY: 0, scale: 0.9 },
        panoramic: { x: offset * 15, y: absOffset * 4, rotateZ: offset * 2, rotateY: offset * -14, scale: 1 - absOffset * 0.04 },
        size: { w: "46vw", h: "28vh", ml: "-23vw", mt: "-14vh" }
      },
    };
  });
};

const CARDS = generatePanoramicCards();

const PROGRESS_SPRING = { stiffness: 80, damping: 25, mass: 0.5, restDelta: 0.001 };
const PARALLAX_SPRING = { stiffness: 50, damping: 25, mass: 0.5 };

function usePointerTilt(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltX = useSpring(rawX, PARALLAX_SPRING);
  const tiltY = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled || !active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientY / window.innerHeight - 0.5) * -10);
      rawY.set((e.clientX / window.innerWidth - 0.5) * 10);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [active, enabled, rawX, rawY]);

  return { tiltX, tiltY };
}

function GalleryCard({ card, progress, isMobile }: any) {
  const { item, desktop, mobile, z } = card;
  const activeLayout = isMobile ? mobile : desktop;
  const { stacked, panoramic, size } = activeLayout;

  const ease = useTransform(progress, (p: number) =>
    p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
  );

  const xRaw = useTransform(ease, [0, 1], [stacked.x, panoramic.x]);
  const yRaw = useTransform(ease, [0, 1], [stacked.y, panoramic.y]);
  const x = useTransform(xRaw, (v) => `${v}vw`);
  const y = useTransform(yRaw, (v) => `${v}vh`);
  
  const rotateZ = useTransform(ease, [0, 1], [stacked.rotateZ, panoramic.rotateZ]);
  const rotateY = useTransform(ease, [0, 1], [stacked.rotateY, panoramic.rotateY]);
  const scale = useTransform(ease, [0, 1], [0.85, panoramic.scale]);

  return (
    <div 
      className="absolute left-1/2 top-[62%] max-md:top-[68%] pointer-events-none"
      style={{ zIndex: z }}
    >
      <motion.div
        className="will-change-transform cursor-pointer pointer-events-auto shadow-2xl shadow-black/90 rounded-xl"
        style={{
          width: size.w,
          height: size.h,
          marginLeft: size.ml,
          marginTop: size.mt,
          x,
          y,
          rotateZ,
          rotateY,
          scale,
          transformOrigin: "center center -50px" 
        }}
      >
        <div className="group relative h-full w-full overflow-hidden bg-[#181B22] p-2 pb-5 max-md:p-1.5 max-md:pb-3 rounded-xl transition-all duration-500 hover:shadow-blue-500/20 shadow-2xl ring-1 ring-white/10 hover:ring-blue-400/40">
          <div className="relative h-full w-full overflow-hidden rounded-lg bg-neutral-900">
            <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Tag badge */}
            <div className="absolute top-2 left-2 z-20 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[9px] font-mono text-blue-300 border border-white/10">
              {item.tag}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PanoramicSpreadHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, PROGRESS_SPRING);
  const progress = useTransform(smoothProgress, [0.1, 0.9], [0, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => setSpread(p > 0.9));

  const { tiltX, tiltY } = usePointerTilt(spread, !reduce);

  // Smooth typography adjustments that NEVER hide or obscure the text
  const textY = useTransform(progress, [0, 1], ["0vh", "-4vh"]);
  const textScale = useTransform(progress, [0, 1], [1, 0.96]);

  return (
    <section 
      ref={wrapRef} 
      className="relative w-full h-[320vh] bg-[#0E1015] text-white transition-colors duration-500"
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col items-center justify-start"
        style={{ perspective: "1200px" }}
      >
        {/* Subtle Ambient Maritime Lighting */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-[140px] pointer-events-none">
           <div className="w-[50vw] h-[50vw] bg-gradient-to-tr from-[#102C76]/50 to-[#035BFD]/30 rounded-full mix-blend-screen" />
        </div>

        {/* =========================================================================
            TOP SECTION: Elegant Editorial Typography (Always 100% visible, z-30)
            Positioned cleanly in the upper half so cards never cover it
            ========================================================================= */}
        <motion.div
          className="relative z-30 flex flex-col items-center text-center px-6 pt-24 sm:pt-28 md:pt-32 max-w-4xl mx-auto"
          style={{ y: textY, scale: textScale }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-blue-300 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>24/7 Emergency Dispatch · IICRC Master Firm</span>
          </div>

          {/* Main Title - Crystal clear, high contrast, readable on every screen */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif leading-[1.08] tracking-tight text-white drop-shadow-md">
            The Science of Dry.
          </h1>

          {/* Subtitle / Description - Generously spaced above cards */}
          <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-base md:text-lg font-light leading-relaxed text-neutral-300">
            Rapid water extraction, infrared thermal moisture mapping, and psychrometric structural drying.
            Scroll to unspool our rapid dispatch fleet and recovery case studies.
          </p>

          {/* Action CTAs */}
          <div className="mt-4 sm:mt-6 flex items-center gap-3">
            <a
              href="tel:18005550199"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 active:scale-95 pointer-events-auto"
            >
              <PhoneCall size={14} />
              <span>Call (800) 555-0199</span>
            </a>
            <Link
              to="/emergency"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-neutral-200 text-xs font-mono uppercase tracking-wider transition-all pointer-events-auto"
            >
              <span>Dispatch Portal</span>
            </Link>
          </div>

          {/* Subtle scroll hint */}
          <div className="mt-3 text-[10px] font-mono tracking-widest uppercase text-neutral-400 flex items-center gap-1 opacity-70">
            <ArrowDown size={11} className="animate-bounce" />
            <span>Scroll to Unspool Fleet (3D)</span>
          </div>
        </motion.div>

        {/* =========================================================================
            LOWER SECTION: 3D Scene Container (Unspooling Cards, z-10)
            Positioned in lower half so cards fan out smoothly without occluding text
            ========================================================================= */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        >
          {CARDS.map((card, i) => (
            <GalleryCard
              key={i}
              card={card}
              progress={progress}
              isMobile={isMobile}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
