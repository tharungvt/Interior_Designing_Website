import { resolveImage } from "../../utils/imageResolver";

function ProjectsSection({ content }) {
  if (!content) return null;

  const featured = content.featured || content.items?.find(i => i.featured) || content.items?.[0];
  const secondary = content.secondary || content.items?.filter(i => i !== featured) || [];
  const cta = content.cta || content.viewAllLink;

  return (
    <section className="py-16 lg:py-24 bg-white text-brand-charcoal relative overflow-hidden border-b border-brand-border scroll-mt-20" id="projects" data-purpose="featured-projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {content.eyebrow && (
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate block font-sans">
                  {content.eyebrow}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] text-brand-charcoal font-bold leading-tight tracking-tight mb-3 font-editorial break-words">
              {content.heading}
            </h2>
            <p className="text-brand-mutedcharcoal text-sm sm:text-base max-w-xl leading-relaxed font-sans break-words">
              {content.description}
            </p>
          </div>
          {cta?.label && (
            <a 
              className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-mineral text-white text-xs font-semibold px-5 py-3 rounded-full transition-all shadow-glow-atelier hover:scale-[1.02] self-start md:self-auto" 
              href={cta.href || "#projects"}
            >
              <span>{cta.label}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          )}
        </div>

        {/* Asymmetric Portfolio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Dominant Left Anchor */}
          {featured && (
            <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden bg-brand-charcoal shadow-card-warm min-h-[460px] lg:min-h-[540px] flex flex-col justify-end p-6 sm:p-8">
              <img 
                alt={featured.title || "Featured Interior Architecture"} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95" 
                src={resolveImage(featured.image)} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

              {/* Bottom Info Row: Category + Title + Subtitle on left, Circular Arrow Button on right */}
              <div className="relative z-10 flex items-end justify-between gap-4">
                <div className="max-w-md">
                  {featured.category && (
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-brand-charcoal shadow-sm mb-3">
                      {featured.category}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 font-editorial break-words">
                    {featured.title}
                  </h3>
                  {featured.metadata && (
                    <p className="text-xs sm:text-sm text-white/80 font-sans break-words">
                      {featured.metadata}
                    </p>
                  )}
                </div>
                <a 
                  aria-label={`View ${featured.title}`} 
                  className="w-11 h-11 rounded-full bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white flex items-center justify-center transition-all group-hover:scale-105 shrink-0 shadow-lg cursor-pointer" 
                  href={featured.link || "#projects"}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          )}

          {/* Right Column: 2 Secondary Projects */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondary.map((project, idx) => (
              <div 
                key={project.id || idx}
                className="group relative rounded-2xl overflow-hidden bg-brand-charcoal shadow-card-warm flex-1 min-h-[240px] flex flex-col justify-end p-6"
              >
                <img 
                  alt={project.title || "Architectural Project"} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95" 
                  src={resolveImage(project.image)} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

                {/* Bottom Row: Category + Title + Subtitle on left, Circular Arrow on right */}
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div className="max-w-xs">
                    {project.category && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white text-brand-charcoal shadow-sm mb-2">
                        {project.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-0.5 font-editorial break-words">
                      {project.title}
                    </h3>
                    {project.metadata && (
                      <p className="text-xs text-white/80 font-sans break-words">
                        {project.metadata}
                      </p>
                    )}
                  </div>
                  <a 
                    aria-label={`View ${project.title}`} 
                    className="w-10 h-10 rounded-full bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white flex items-center justify-center transition-all group-hover:scale-105 shrink-0 shadow-lg cursor-pointer" 
                    href={project.link || "#projects"}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
