import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sliders } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage = '/images/hero.jpg',
  afterImage = '/images/restored.jpg',
  beforeLabel = 'Active Intrusion / Saturated Subfloor',
  afterLabel = 'Completed Restoration / Pre-Loss Baseline',
  aspectRatio = 'aspect-[4/3] sm:aspect-[16/9]'
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/60 shadow-sm bg-slate-900 select-none">
      <div 
        ref={containerRef}
        className={`relative w-full ${aspectRatio} overflow-hidden cursor-ew-resize`}
        style={{ touchAction: 'none' }}
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onTouchMove={handleTouchMove}
      >
        {/* Layer 1: After Image (Full background) */}
        <img 
          src={afterImage} 
          alt="Restored interior property" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Layer 2: After Label Badge (Clipped Strictly to After Side) */}
        {/* We place it in a container that starts at sliderPosition% and ends at 100%. */}
        {/* This guarantees the After label CAN NEVER bleed into or display over the Before photo! */}
        <div 
          className="absolute top-0 bottom-0 right-0 overflow-hidden pointer-events-none z-10"
          style={{ 
            left: `${sliderPosition}%`,
            opacity: sliderPosition > 82 ? 0 : 1,
            transition: 'opacity 0.15s ease'
          }}
        >
          <div 
            className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-slate-950/85  border border-white/20 text-emerald-400 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-lg whitespace-nowrap"
          >
            {afterLabel}
          </div>
        </div>

        {/* Layer 3: Before Image (Clipped overlay from 0 to sliderPosition%) */}
        <div 
          className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-white shadow-[4px_0_20px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Water damage disaster in progress" 
            className="absolute top-0 left-0 h-full object-cover max-w-none pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%'
            }}
          />

          {/* Before Label Badge (Clipped Strictly inside the Before overlay) */}
          <div 
            className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-slate-950/85  border border-white/20 text-rose-400 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-lg whitespace-nowrap"
            style={{
              opacity: sliderPosition < 18 ? 0 : 1,
              transition: 'opacity 0.15s ease'
            }}
          >
            {beforeLabel}
          </div>
        </div>

        {/* Layer 4: Draggable Divider Handle */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0066FF] text-white border-2 border-white flex items-center justify-center shadow-sm pointer-events-none z-30 transition-transform active:scale-95"
          style={{ left: `${sliderPosition}%` }}
        >
          <Sliders className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </div>

      {/* Slider Caption and Mobile Instructions */}
      <div className="py-2.5 px-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
        <span className="truncate pr-2">Drag slider left or right to compare</span>
        <span className="font-mono font-bold text-white shrink-0">
          {Math.round(sliderPosition)}% {sliderPosition > 50 ? 'Before' : 'After'}
        </span>
      </div>
    </div>
  );
}
