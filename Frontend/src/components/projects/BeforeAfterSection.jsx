import { useState } from "react";
import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

export default function BeforeAfterSection({ content }) {
  // Slider position from 0 to 100%
  const [sliderPosition, setSliderPosition] = useState(50);
  const [viewMode, setViewMode] = useState("slider"); // "slider" | "before" | "after"

  if (!content) return null;

  const {
    eyebrow,
    heading,
    description,
    beforeImage,
    afterImage,
    beforeLabel = "Original State",
    afterLabel = "Completed Residence",
    metrics = [],
    summary,
    cta,
  } = content;

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  return (
    <section
      className="py-16 sm:py-24 bg-white border-y border-brand-border/80 text-brand-charcoal overflow-hidden"
      id="projects-before-after"
      aria-label="Before and After Renovation Showcase"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-7 h-0.5 bg-brand-mineral"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate font-sans">
                {eyebrow}
              </span>
            </div>
          )}

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal mb-4">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-brand-mutedcharcoal leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-2 bg-[#F1F5F4] p-1.5 rounded-full border border-brand-border/80">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                viewMode === "slider"
                  ? "bg-brand-charcoal text-white shadow-sm"
                  : "text-brand-mutedcharcoal hover:text-brand-charcoal"
              }`}
            >
              Interactive Slider
            </button>
            <button
              type="button"
              onClick={() => setViewMode("before")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                viewMode === "before"
                  ? "bg-brand-charcoal text-white shadow-sm"
                  : "text-brand-mutedcharcoal hover:text-brand-charcoal"
              }`}
            >
              Before Only
            </button>
            <button
              type="button"
              onClick={() => setViewMode("after")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                viewMode === "after"
                  ? "bg-brand-charcoal text-white shadow-sm"
                  : "text-brand-mutedcharcoal hover:text-brand-charcoal"
              }`}
            >
              After Only
            </button>
          </div>

          <span className="text-xs text-brand-slate font-sans hidden sm:inline-block">
            {viewMode === "slider"
              ? "Drag or hover cursor across image to reveal transition"
              : `Showing: ${viewMode === "before" ? beforeLabel : afterLabel}`}
          </span>
        </div>

        {/* Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Interactive Viewer */}
          <div className="lg:col-span-8">
            <div
              className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-card-warm border border-brand-border select-none touch-none bg-brand-surface cursor-ew-resize group"
              onMouseMove={viewMode === "slider" ? handleSliderMove : undefined}
              onTouchMove={viewMode === "slider" ? handleTouchMove : undefined}
            >
              {viewMode === "slider" ? (
                <>
                  {/* AFTER IMAGE (Base background) */}
                  <img
                    src={resolveImage(afterImage)}
                    alt={afterLabel}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md shadow-sm">
                      {afterLabel}
                    </span>
                  </div>

                  {/* BEFORE IMAGE (Clipped over top) */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none transition-none"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={resolveImage(beforeImage)}
                      alt={beforeLabel}
                      className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectPosition: "left center",
                      }}
                    />
                    <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-charcoal backdrop-blur-md shadow-sm border border-brand-border">
                        {beforeLabel}
                      </span>
                    </div>
                  </div>

                  {/* Center Divider Bar */}
                  <div
                    className="absolute inset-y-0 pointer-events-none z-30"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute inset-y-0 -left-0.5 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" />
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-brand-charcoal shadow-lg border border-brand-border flex items-center justify-center pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          transform="rotate(90 12 12)"
                        />
                      </svg>
                    </div>
                  </div>
                </>
              ) : viewMode === "before" ? (
                <div className="relative w-full h-full">
                  <img
                    src={resolveImage(beforeImage)}
                    alt={beforeLabel}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-charcoal shadow-sm border border-brand-border">
                      {beforeLabel}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={resolveImage(afterImage)}
                    alt={afterLabel}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md shadow-sm">
                      {afterLabel}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Metrics & Narrative Panel */}
          <div className="lg:col-span-4 bg-[#F1F5F4] p-8 rounded-3xl border border-brand-border flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate font-sans block mb-2">
                Spatial Impact Metrics
              </span>
              <h3 className="font-editorial text-2xl font-bold text-brand-charcoal mb-4">
                Measured Transformation
              </h3>

              {summary && (
                <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed font-sans mb-6">
                  {summary}
                </p>
              )}

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border/80 mb-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.id || metric.label}
                    className="p-3.5 bg-white rounded-xl border border-brand-border/70"
                  >
                    <span className="font-editorial text-xl sm:text-2xl font-bold text-brand-charcoal block">
                      {metric.value}
                    </span>
                    <span className="text-[11px] font-medium text-brand-slate uppercase tracking-wider font-sans mt-0.5 block">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {cta && (
              <div className="pt-4 border-t border-brand-border/80">
                <Button
                  id="before-after-cta"
                  href={cta.href || "/contact"}
                  label={cta.label}
                  variant="primary"
                  className="w-full text-xs py-3 justify-center"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
