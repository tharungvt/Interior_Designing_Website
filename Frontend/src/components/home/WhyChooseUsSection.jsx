import { resolveImage } from "../../utils/imageResolver";

function WhyChooseUsSection({ content }) {
  if (!content) return null;

  const principles = content.principles || [];
  const gallery = content.gallery || [];

  return (
    <section className="py-16 lg:py-24 bg-[#F7FAF9] text-brand-charcoal border-b border-brand-border scroll-mt-20" id="why-choose-us" data-purpose="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Header & Ethos Quote */}
        <div className="border-b border-brand-border pb-12 lg:pb-16 mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              {content.eyebrow && (
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-brand-mineral"></span>
                  <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-brand-slate font-sans">
                    {content.eyebrow}
                  </span>
                </div>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] text-brand-charcoal font-bold leading-tight tracking-tight font-editorial mb-6 break-words">
                {content.heading}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pt-10 flex flex-col justify-between h-full">
              {content.quote && (
                <p className="text-brand-charcoal text-base lg:text-lg leading-relaxed font-editorial font-medium border-l-2 border-brand-mineral pl-6 mb-6 break-words">
                  {content.quote}
                </p>
              )}
              {content.quoteText && (
                <p className="text-brand-mutedcharcoal text-xs sm:text-sm leading-relaxed font-sans break-words">
                  {content.quoteText}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 4 Architectural Principles & Supporting Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
          <div className="lg:col-span-5 space-y-10 lg:space-y-12">
            {principles.map((p, idx) => (
              <div key={p.id || idx} className="border-t border-brand-border pt-6">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="font-sans text-sm font-bold tracking-widest text-brand-mineral uppercase">
                    {p.number || `0${idx + 1}.`}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-charcoal font-sans tracking-tight break-words">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed font-sans pl-7 break-words">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {gallery.map((item, idx) => (
                <div key={item.id || idx} className={`space-y-6 ${idx === 1 ? "sm:pt-12" : ""}`}>
                  <div className="rounded-2xl overflow-hidden bg-white border border-brand-border shadow-atelier-subtle">
                    <img 
                      alt={item.alt || item.title || "Architectural study"} 
                      className={`w-full ${item.aspect === "3/4" ? "aspect-[3/4] min-h-[260px]" : "aspect-[4/3] min-h-[220px]"} object-cover hover:scale-[1.02] transition-transform duration-700`} 
                      src={resolveImage(item.image)} 
                    />
                    <div className="p-5 bg-white">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-brand-mineral mb-1 font-semibold break-words">
                        {item.title}
                      </p>
                      <p className="text-xs text-brand-mutedcharcoal font-sans leading-relaxed break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
