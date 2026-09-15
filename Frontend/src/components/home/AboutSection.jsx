import { resolveImage } from "../../utils/imageResolver";

function AboutSection({ content }) {
  if (!content) return null;

  const mainImageUrl = resolveImage(content.mainImage || content.images?.primary);
  const secondaryImageUrl = resolveImage(content.secondaryImage || content.images?.secondary);
  const paragraphs = content.descriptions || content.paragraphs || [];
  const cta = content.cta || content.link || { label: "LEARN MORE ABOUT US", href: "/about" };

  return (
    <section className="py-16 lg:py-24 border-b border-brand-border bg-white scroll-mt-20" id="about" data-purpose="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Overlapping Visuals */}
          <div className="lg:col-span-5 relative pb-4 sm:pb-6 pr-2 sm:pr-4">
            <div className="relative rounded-2xl overflow-hidden shadow-card-warm aspect-[4/3] border border-brand-border/60 bg-white">
              <img 
                alt="Contemporary architectural living environment" 
                className="w-full h-full object-cover" 
                src={mainImageUrl} 
              />
            </div>
            {/* Overlapping Studio Draft Inset */}
            {secondaryImageUrl && (
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-3 w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-4 border-white shadow-card-warm hidden sm:block bg-white z-10">
                <img 
                  alt="Architectural material sample study" 
                  className="w-full h-full object-cover" 
                  src={secondaryImageUrl} 
                />
              </div>
            )}
          </div>

          {/* Center Narrative */}
          <div className="lg:col-span-4 flex flex-col justify-center sm:pl-2">
            {content.eyebrow && (
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate font-sans">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl text-brand-charcoal font-bold leading-tight tracking-tight mb-4 font-editorial break-words">
              {content.heading}
            </h2>
            {paragraphs.map((desc, idx) => (
              <p 
                key={idx} 
                className={`text-brand-mutedcharcoal leading-relaxed ${
                  idx === 0 ? "text-sm sm:text-base mb-4" : "text-xs sm:text-sm mb-6"
                } font-sans break-words`}
              >
                {desc}
              </p>
            ))}
            {cta?.label && (
              <div>
                <a 
                  className="inline-flex items-center gap-2 text-brand-charcoal font-bold text-xs uppercase tracking-wider hover:text-brand-mineral transition-colors group" 
                  href={cta.href || "/about"}
                >
                  <span>{cta.label}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Right Editorial Quote Box */}
          <div className="lg:col-span-3">
            <div className="bg-[#FAFBFB] border border-brand-border rounded-2xl p-7 flex flex-col justify-between relative shadow-atelier-subtle">
              <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-charcoal font-bold text-xl mb-4 shadow-sm shrink-0">
                “
              </div>
              <p className="font-semibold text-base sm:text-lg text-brand-charcoal leading-relaxed tracking-tight mb-6 font-editorial break-words">
                {content.quote}
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-brand-border/60">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-slate">
                  {content.quoteAttribution || "STUDIO ETHOS"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
