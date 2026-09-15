import { useState } from "react";
import { resolveImage } from "../../utils/imageResolver";

function TestimonialsSection({ testimonials: testimonialsProp, content }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const data = testimonialsProp || content;
  if (!data) return null;

  // Support array of testimonials or section object containing items
  const rawItems = Array.isArray(data) ? data : (data.items || []);
  const items = rawItems
    .filter((item) => item.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  if (items.length === 0) return null;

  const activeIndex = Math.min(activeTestimonial, items.length - 1);
  const current = items[activeIndex] || items[0];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-16 lg:py-24 overflow-hidden border-b border-brand-border bg-[#F7FAF9] scroll-mt-20" id="testimonials" data-purpose="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {data.eyebrow && (
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate font-sans">
                {data.eyebrow}
              </span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl text-brand-charcoal font-bold tracking-tight mb-2.5 font-editorial break-words">
            {data.heading || "What Our Clients Say"}
          </h2>
          <p className="text-brand-mutedcharcoal text-sm sm:text-base leading-relaxed font-sans break-words">
            {data.description || "Reflections on spatial harmony, material craft, and the living experience."}
          </p>
        </div>

        {/* Architectural Photographic Fanned Composition */}
        <div className="relative max-w-5xl mx-auto mb-12 sm:mb-16 select-none">
          <div className="flex items-end justify-center -space-x-8 sm:-space-x-12 lg:-space-x-16 pt-6 pb-8 px-4 overflow-visible">
            {[
              {
                offset: -2,
                rotate: "-rotate-[7deg]",
                translate: "translate-y-6 sm:translate-y-7",
                size: "w-32 sm:w-44 lg:w-52 h-48 sm:h-64 lg:h-72",
                zIndex: "z-0",
                opacity: "opacity-75 hover:opacity-100",
                scale: "scale-90 hover:scale-95",
                isCenter: false,
              },
              {
                offset: -1,
                rotate: "-rotate-[3.5deg]",
                translate: "translate-y-2 sm:translate-y-3",
                size: "w-36 sm:w-48 lg:w-56 h-52 sm:h-68 lg:h-76",
                zIndex: "z-10",
                opacity: "opacity-90 hover:opacity-100",
                scale: "scale-95 hover:scale-100",
                isCenter: false,
              },
              {
                offset: 0,
                rotate: "rotate-0",
                translate: "translate-y-0",
                size: "w-44 sm:w-56 lg:w-64 h-60 sm:h-76 lg:h-84",
                zIndex: "z-20",
                opacity: "opacity-100",
                scale: "scale-100",
                isCenter: true,
              },
              {
                offset: 1,
                rotate: "rotate-[3.5deg]",
                translate: "translate-y-2 sm:translate-y-3",
                size: "w-36 sm:w-48 lg:w-56 h-52 sm:h-68 lg:h-76",
                zIndex: "z-10",
                opacity: "opacity-90 hover:opacity-100",
                scale: "scale-95 hover:scale-100",
                isCenter: false,
              },
              {
                offset: 2,
                rotate: "rotate-[7deg]",
                translate: "translate-y-6 sm:translate-y-7",
                size: "w-32 sm:w-44 lg:w-52 h-48 sm:h-64 lg:h-72",
                zIndex: "z-0",
                opacity: "opacity-75 hover:opacity-100",
                scale: "scale-90 hover:scale-95",
                isCenter: false,
              },
            ].map((pos, pIdx) => {
              const itemIdx = (activeIndex + pos.offset + items.length * 10) % items.length;
              const cardItem = items[itemIdx];

              if (pos.isCenter) {
                return (
                  <div
                    key={pIdx}
                    className={`relative ${pos.size} ${pos.zIndex} ${pos.translate} ${pos.rotate} ${pos.scale} transition-all duration-500 shrink-0`}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative bg-brand-charcoal">
                      <img
                        alt={cardItem.name}
                        className="w-full h-full object-cover"
                        src={resolveImage(cardItem.image)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 sm:p-5 text-center">
                        <div className="text-white font-bold text-base sm:text-lg font-sans tracking-tight">
                          {cardItem.name}
                        </div>
                        {(cardItem.badge || cardItem.project) && (
                          <div className="text-white/85 text-[10px] sm:text-[11px] uppercase tracking-wider font-sans font-medium mt-0.5">
                            {cardItem.badge || cardItem.project}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Floating quote badge on center card */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-brand-border flex items-center justify-center text-brand-charcoal font-bold text-xl select-none z-30">
                      “
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={pIdx}
                  type="button"
                  onClick={() => setActiveTestimonial(itemIdx)}
                  aria-label={`View testimonial from ${cardItem.name}`}
                  className={`relative ${pos.size} ${pos.zIndex} ${pos.translate} ${pos.rotate} ${pos.opacity} ${pos.scale} rounded-2xl overflow-hidden border-2 border-white shadow-lg cursor-pointer transition-all duration-500 shrink-0 bg-brand-charcoal p-0`}
                >
                  <img
                    alt={cardItem.name}
                    className="w-full h-full object-cover"
                    src={resolveImage(cardItem.image)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Testimonial Content */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center px-4">
          <h3 className="font-editorial text-2xl sm:text-3xl lg:text-[2.15rem] text-brand-charcoal font-medium leading-snug tracking-tight mb-4 max-w-2xl break-words">
            “{current.quote || current.headline}”
          </h3>

          {current.narrative && (
            <p className="text-brand-mutedcharcoal text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6 font-sans break-words">
              {current.narrative}
            </p>
          )}

          {/* Attribution */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-sans mb-8">
            <span className="font-bold text-brand-charcoal uppercase tracking-widest break-words">{current.name}</span>
            {(current.project || current.role) && (
              <>
                <span className="text-brand-slate">—</span>
                <span className="text-brand-slate font-semibold uppercase tracking-widest break-words">
                  {current.project || current.role}
                </span>
              </>
            )}
          </div>

          {/* Controls: Prev / Dots / Next */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prevTestimonial}
              className="w-9 h-9 rounded-full border border-brand-border bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    activeIndex === idx
                      ? "w-6 h-2 bg-brand-charcoal"
                      : "w-2 h-2 bg-brand-border hover:bg-brand-slate"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={nextTestimonial}
              className="w-9 h-9 rounded-full border border-brand-border bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
