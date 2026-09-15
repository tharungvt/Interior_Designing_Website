import { resolveImage } from "../../utils/imageResolver";

function PortfolioCurationSection({ content }) {
  if (!content) return null;

  const stats = content.stats || [];

  return (
    <section className="bg-white py-12 lg:py-16 border-b border-brand-border" data-purpose="portfolio-curation">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#FAFBFB] rounded-2xl border border-brand-border p-8 sm:p-12 shadow-atelier-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 rounded-xl overflow-hidden relative aspect-[16/9] border border-brand-border">
              <img 
                alt={content.heading || "Architectural interior study"} 
                className="w-full h-full object-cover" 
                src={resolveImage(content.image)} 
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              {content.eyebrow && (
                <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-brand-slate mb-3 block">
                  {content.eyebrow}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-charcoal font-editorial leading-tight tracking-tight mb-4 break-words">
                {content.heading}
              </h3>
              <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed font-sans mb-6 break-words">
                {content.description}
              </p>
              {stats.length > 0 && (
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-brand-border/60 text-xs font-sans">
                  {stats.map((stat, idx) => (
                    <div key={stat.id || idx} className="contents">
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-brand-charcoal text-sm break-words">
                          {stat.title}
                        </span>
                        <span className="text-brand-slate text-[11px] break-words">
                          {stat.subtitle}
                        </span>
                      </div>
                      {idx < stats.length - 1 && (
                        <div className="w-px h-8 bg-brand-border hidden sm:block"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCurationSection;
