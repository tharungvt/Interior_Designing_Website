import { useState, useEffect, useRef } from "react";

// Position and orientation configurations for desktop nodes along the Bézier curve
const desktopStepPositions = [
  {
    className: "process-step-node active-node absolute left-[4%] top-[204px] w-52 z-10",
    variant: "inline-left",
  },
  {
    className: "process-step-node active-node absolute left-[24%] top-[10px] -translate-x-4 w-52 z-10 flex flex-col",
    variant: "stacked-bottom",
  },
  {
    className: "process-step-node active-node absolute left-[48%] top-[284px] -translate-x-12 w-56 z-10",
    variant: "inline-left",
  },
  {
    className: "process-step-node active-node absolute left-[72%] top-[10px] -translate-x-4 w-52 z-10 flex flex-col",
    variant: "stacked-bottom",
  },
  {
    className: "process-step-node active-node absolute right-0 top-[204px] w-56 z-10",
    variant: "inline-right",
  },
];

function ProcessSection({ steps: stepsProp, content }) {
  const [containerWidth, setContainerWidth] = useState(1150);
  const processContainerRef = useRef(null);

  useEffect(() => {
    if (!processContainerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    observer.observe(processContainerRef.current);
    return () => observer.disconnect();
  }, []);

  const data = stepsProp || content;
  if (!data) return null;

  const steps = Array.isArray(data) ? data : (data.steps || []);

  // Anchor centers for step nodes
  const p1 = { x: containerWidth * 0.04 + 16, y: 220 };
  const p2 = { x: containerWidth * 0.24 + 16 - 16, y: 106 };
  const p3 = { x: containerWidth * 0.48 + 16 - 48, y: 300 };
  const p4 = { x: containerWidth * 0.72 + 16 - 16, y: 106 };
  const p5 = { x: containerWidth - 16, y: 220 };

  // Smooth control handles
  const cp1 = { x: p1.x + (p2.x - p1.x) * 0.48, y: p1.y - 40 };
  const cp2 = { x: p2.x - (p2.x - p1.x) * 0.35, y: p2.y };
  const cp3 = { x: p2.x + (p3.x - p2.x) * 0.45, y: p2.y + 40 };
  const cp4 = { x: p3.x - (p3.x - p2.x) * 0.45, y: p3.y };
  const cp5 = { x: p3.x + (p4.x - p3.x) * 0.45, y: p3.y };
  const cp6 = { x: p4.x - (p4.x - p3.x) * 0.45, y: p4.y + 40 };
  const cp7 = { x: p4.x + (p5.x - p4.x) * 0.35, y: p4.y };
  const cp8 = { x: p5.x - (p5.x - p4.x) * 0.48, y: p5.y - 40 };

  const curveD = `M ${p1.x} ${p1.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${p2.x} ${p2.y} C ${cp3.x} ${cp3.y}, ${cp4.x} ${cp4.y}, ${p3.x} ${p3.y} C ${cp5.x} ${cp5.y}, ${cp6.x} ${cp6.y}, ${p4.x} ${p4.y} C ${cp7.x} ${cp7.y}, ${cp8.x} ${cp8.y}, ${p5.x} ${p5.y}`;

  return (
    <section className="py-16 lg:py-20 border-b border-brand-border relative overflow-hidden bg-[#EEF4F4] scroll-mt-20" id="process" data-purpose="process-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          {data.eyebrow && (
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-6 h-px bg-brand-mineral"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate font-sans">
                {data.eyebrow}
              </span>
            </div>
          )}
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.85rem] text-brand-charcoal font-bold tracking-tight mb-3 leading-tight break-words">
            {data.heading || "From Vision to Reality"}
          </h2>
          <p className="text-brand-mutedcharcoal text-sm sm:text-base leading-relaxed max-w-xl font-sans break-words">
            {data.description || "A clear visual explanation of how an interior design project moves from the first conversation to the completed space."}
          </p>
        </div>

        {/* DESKTOP ARCHITECTURAL CURVED JOURNEY VIEW - Dynamically Mapped */}
        <div ref={processContainerRef} className="hidden lg:block relative h-[440px] select-none mb-6" id="desktop-process-container">
          {/* SVG Bézier Curve Connecting Nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" fill="none" viewBox={`0 0 ${containerWidth} 440`}>
            <defs>
              <linearGradient id="journeySplineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#3C7188" stopOpacity="0.4"></stop>
                <stop offset="25%" stopColor="#3C7188" stopOpacity="0.85"></stop>
                <stop offset="50%" stopColor="#17252C" stopOpacity="0.95"></stop>
                <stop offset="75%" stopColor="#3C7188" stopOpacity="0.85"></stop>
                <stop offset="100%" stopColor="#3C7188" stopOpacity="0.5"></stop>
              </linearGradient>
            </defs>
            {/* Guide Track Line */}
            <path d={curveD} opacity="0.3" stroke="#D7E3E5" strokeDasharray="4 6" strokeLinecap="round" strokeWidth="2"></path>
            {/* Primary Animated Dynamic Bezier Line */}
            <path className="journey-line-dynamic animated" d={curveD} id="journeySvgSpline" stroke="url(#journeySplineGradient)" strokeLinecap="round" strokeWidth="2.5"></path>
          </svg>

          {/* Dynamically Mapped Desktop Step Nodes */}
          {steps.slice(0, 5).map((step, idx) => {
            const pos = desktopStepPositions[idx] || desktopStepPositions[0];
            const stepNum = step.number || `0${idx + 1}`;

            if (pos.variant === "stacked-bottom") {
              return (
                <div key={step.id || idx} className={pos.className} data-step={idx + 1}>
                  <div className="mb-3">
                    <h3 className="step-title text-base font-bold text-brand-charcoal tracking-tight mb-1 transition-colors break-words">
                      {step.title}
                    </h3>
                    <p className="step-desc text-xs text-brand-mutedcharcoal leading-relaxed transition-colors break-words">
                      {step.description}
                    </p>
                  </div>
                  <span className="step-circle w-8 h-8 rounded-full bg-brand-charcoal text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white ring-2 ring-brand-border/60 shrink-0">
                    {stepNum}
                  </span>
                </div>
              );
            }

            if (pos.variant === "inline-right") {
              return (
                <div key={step.id || idx} className={pos.className} data-step={idx + 1}>
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <h3 className="step-title text-base font-bold text-brand-charcoal tracking-tight text-right transition-colors break-words">
                      {step.title}
                    </h3>
                    <span className="step-circle w-8 h-8 rounded-full bg-brand-charcoal text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white ring-2 ring-brand-border/60 shrink-0">
                      {stepNum}
                    </span>
                  </div>
                  <p className="step-desc text-xs text-brand-mutedcharcoal leading-relaxed text-right pl-2 transition-colors break-words">
                    {step.description}
                  </p>
                </div>
              );
            }

            return (
              <div key={step.id || idx} className={pos.className} data-step={idx + 1}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="step-circle w-8 h-8 rounded-full bg-brand-charcoal text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-white ring-2 ring-brand-border/60 shrink-0">
                    {stepNum}
                  </span>
                  <h3 className="step-title text-base font-bold text-brand-charcoal tracking-tight transition-colors break-words">
                    {step.title}
                  </h3>
                </div>
                <p className="step-desc text-xs text-brand-mutedcharcoal leading-relaxed pr-2 transition-colors break-words">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET PROCESS VIEW - Dynamically Mapped */}
        <div className="lg:hidden relative pl-6 sm:pl-8 border-l-2 border-brand-border/80 space-y-8 my-4" id="mobile-process-container">
          {steps.map((step, idx) => (
            <div key={step.id || idx} className="relative process-mobile-item">
              <span className="absolute -left-[33px] sm:-left-[41px] top-0 w-8 h-8 rounded-full bg-brand-charcoal text-white font-mono font-bold text-xs flex items-center justify-center shadow-md border-2 border-[#EEF4F4]">
                {step.number || `0${idx + 1}`}
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-charcoal mb-1 font-sans tracking-tight break-words">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed max-w-lg break-words">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
