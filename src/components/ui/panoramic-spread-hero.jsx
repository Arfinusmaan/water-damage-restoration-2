import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

// Authentic high-resolution Water Damage Restoration images
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

// Calculate panoramic cards layout for both mobile and desktop
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
        stacked: { x: offset * 2, y: offset * -2, rotateZ: offset * 2.5, scale: 1 },
        panoramic: { x: offset * 18, y: absOffset * 3, rotateZ: offset * 1.5, scale: 1 - absOffset * 0.05 },
        size: { w: "22vw", h: "32vh", ml: "-11vw", mt: "-16vh" }
      },
      mobile: {
        stacked: { x: offset * 1.5, y: offset * -1.5, rotateZ: offset * 3, scale: 1 },
        panoramic: { x: offset * 16, y: absOffset * 5, rotateZ: offset * 2, scale: 1 - absOffset * 0.04 },
        size: { w: "46vw", h: "30vh", ml: "-23vw", mt: "-15vh" }
      },
    };
  });
};

const CARDS = generatePanoramicCards();

const PROGRESS_SPRING = { stiffness: 80, damping: 25, mass: 0.5, restDelta: 0.001 };

function GalleryCard({ card, progress, isMobile }) {
  const { item, desktop, mobile, z } = card;
  const activeLayout = isMobile ? mobile : desktop;
  const { stacked, panoramic, size } = activeLayout;

  const ease = useTransform(progress, (p) =>
    p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
  );

  const xRaw = useTransform(ease, [0, 1], [stacked.x, panoramic.x]);
  const yRaw = useTransform(ease, [0, 1], [stacked.y, panoramic.y]);
  const x = useTransform(xRaw, (v) => `${v}vw`);
  const y = useTransform(yRaw, (v) => `${v}vh`);
  
  const rotateZ = useTransform(ease, [0, 1], [stacked.rotateZ, panoramic.rotateZ]);
  const scale = useTransform(ease, [0, 1], [0.85, panoramic.scale]);

  return (
    <div 
      className="absolute left-1/2 top-[58%] max-md:top-[64%] pointer-events-none"
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
          scale,
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
  const wrapRef = useRef(null);
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

  // Text is always visible (starts at opacity 1) and stays elevated above cards
  const textY = useTransform(progress, [0, 1], ["0vh", "-6vh"]);
  const textScale = useTransform(progress, [0, 1], [1, 0.95]);
  const textOpacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0.4]);

  return (
    <section 
      ref={wrapRef} 
      className="relative w-full h-[400vh] bg-[#111111] text-white transition-colors duration-500"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col items-center justify-start">
        
        {/* Subtle Ambient Light from maritime color theme */}
        <div className="absolute inset-0 flex items-center justify-center opacity-35 blur-[140px] pointer-events-none">
           <div className="w-[55vw] h-[55vw] bg-gradient-to-tr from-[#102C76]/50 to-[#035BFD]/30 rounded-full mix-blend-screen" />
        </div>

        {/* =========================================================================
            TYPOGRAPHY SECTION: Always 100% visible, high contrast, positioned above cards
            ========================================================================= */}
        <motion.div
          className="pointer-events-none relative z-20 flex flex-col items-center text-center px-6 pt-24 sm:pt-28 md:pt-32"
          style={{ y: textY, scale: textScale, opacity: textOpacity }}
        >
          <span className="text-xs md:text-[0.9vw] uppercase tracking-[0.4em] font-semibold text-blue-400 mb-3 sm:mb-4">
            24/7 Emergency Dispatch · IICRC Certified
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-[5.5vw] font-serif leading-none tracking-tight text-white drop-shadow-md">
            The Science of Dry.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-[48ch] text-xs sm:text-sm md:text-[1.1vw] font-light leading-relaxed text-[#DBDBDB]">
            Rapid water extraction, infrared thermal moisture mapping, and psychrometric structural drying.
            Scroll to unspool our rapid dispatch fleet and recovery case studies.
          </p>
        </motion.div>

        {/* =========================================================================
            CARDS SCENE: Pure scroll animation (unspools on scroll, no 3D tilt)
            ========================================================================= */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {CARDS.map((card, i) => (
            <GalleryCard
              key={i}
              card={card}
              progress={progress}
              isMobile={isMobile}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
