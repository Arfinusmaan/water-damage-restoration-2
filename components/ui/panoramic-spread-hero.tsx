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

// Authentic, guaranteed working high-resolution Water Damage Restoration images
const IMAGES = [
  { src: "/images/hero.jpg", alt: "Rapid Water Extraction Specialists on Site" },
  { src: "/images/equipment.jpg", alt: "Industrial LGR Dehumidifiers and High-Velocity Air Movers" },
  { src: "/images/thermal.jpg", alt: "FLIR Infrared Thermal Moisture Mapping and Leak Detection" },
  { src: "/images/hardwood.jpg", alt: "Non-Invasive Subfloor Hardwood Floor Drying" },
  { src: "/images/commercial.jpg", alt: "Commercial Large-Loss Flood Recovery and Atrium Drying" },
  { src: "/images/inspection.jpg", alt: "Psychrometric Digital Pinless Moisture Verification" },
  { src: "/images/containment.jpg", alt: "Critical HEPA Negative Air Containment Barriers" },
  { src: "/images/restored.jpg", alt: "Flawlessly Restored Architectural Living Space" },
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
        stacked: { x: offset * 2, y: offset * -2, rotateZ: offset * 2.5, rotateY: 0, scale: 1 },
        panoramic: { x: offset * 18, y: absOffset * 3, rotateZ: offset * 1.5, rotateY: offset * -12, scale: 1 - absOffset * 0.05 },
        size: { w: "22vw", h: "32vh", ml: "-11vw", mt: "-16vh" }
      },
      mobile: {
        stacked: { x: offset * 1.5, y: offset * -1.5, rotateZ: offset * 3, rotateY: 0, scale: 1 },
        panoramic: { x: offset * 16, y: absOffset * 5, rotateZ: offset * 2, rotateY: offset * -15, scale: 1 - absOffset * 0.04 },
        size: { w: "46vw", h: "30vh", ml: "-23vw", mt: "-15vh" }
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

function GalleryCard({ card, progress, isSpreadActive, isMobile }: any) {
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
  const scale = useTransform(ease, [0, 1], [0.75, panoramic.scale]);

  return (
    <div 
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{ zIndex: z }}
    >
      <motion.div
        className="will-change-transform cursor-pointer pointer-events-auto shadow-2xl shadow-black/80 rounded-md"
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
        <div className="group relative h-full w-full overflow-hidden bg-[#181B22] p-2 pb-6 max-md:p-1 max-md:pb-3 rounded-md transition-all duration-500 hover:shadow-blue-500/20 shadow-2xl ring-1 ring-white/10 hover:ring-blue-400/40">
          <div className="relative h-full w-full overflow-hidden rounded-sm bg-neutral-900">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
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
  const progress = useTransform(smoothProgress, [0.15, 0.85], [0, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => setSpread(p > 0.95));

  const { tiltX, tiltY } = usePointerTilt(spread, !reduce);

  const textY = useTransform(progress, [0.2, 1], ["10vh", "-22vh"]);
  const textScale = useTransform(progress, [0.2, 1], [0.85, 1]);
  const textOpacity = useTransform(progress, [0.4, 0.9], [0, 1]);

  return (
    <section 
      ref={wrapRef} 
      className="relative w-full h-[400vh] bg-[#111111] text-white transition-colors duration-500"
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Subtle Ambient Light from maritime color theme */}
        <div className="absolute inset-0 flex items-center justify-center opacity-35 blur-[140px] pointer-events-none">
           <div className="w-[55vw] h-[55vw] bg-gradient-to-tr from-[#102C76]/50 to-[#035BFD]/30 rounded-full mix-blend-screen" />
        </div>

        {/* Scene Container */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        >
          {CARDS.map((card, i) => (
            <GalleryCard
              key={i}
              card={card}
              progress={progress}
              isSpreadActive={spread}
              isMobile={isMobile}
            />
          ))}
        </motion.div>

        {/* Elegant Editorial Typography */}
        <motion.div
          className="pointer-events-none absolute z-[5] flex flex-col items-center text-center px-6"
          style={{ y: textY, scale: textScale, opacity: textOpacity }}
        >
          <span className="text-xs md:text-[0.9vw] uppercase tracking-[0.4em] font-semibold text-blue-400 mb-4">
            24/7 Emergency Dispatch · IICRC Certified
          </span>
          <h2 className="text-5xl md:text-[5.5vw] font-serif leading-none tracking-tight text-white drop-shadow-md">
            The Science of Dry.
          </h2>
          <p className="mt-6 max-w-[48ch] text-sm md:text-[1.1vw] font-light leading-relaxed text-[#DBDBDB]">
            Rapid water extraction, infrared thermal moisture mapping, and psychrometric structural drying.
            Scroll to unspool our rapid dispatch fleet and recovery case studies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
