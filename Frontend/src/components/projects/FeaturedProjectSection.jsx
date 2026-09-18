import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

export default function FeaturedProjectSection({
  content,
  onSelectProject,
}) {
  if (!content) return null;

  const {
    title,
    categoryLabel,
    year,
    area,
    image,
    summary,
    scope,
    highlights = [],
    materials = [],
    cta,
  } = content;

  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 sm:mb-16"
      id="featured-project-section"
      aria-label="Featured Project Showcase"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-brand-border/90 shadow-card-warm overflow-hidden grid grid-cols-1 lg:grid-cols-5 items-stretch transition-all duration-300">
        {/* Left Column: Visual Showcase (60% Width on Desktop) */}
        <div
          className="relative lg:col-span-3 h-64 sm:h-80 lg:h-full min-h-[260px] lg:min-h-0 overflow-hidden bg-brand-surface group cursor-pointer"
          onClick={() => onSelectProject && onSelectProject(content)}
        >
          <img
            src={resolveImage(image)}
            alt={title}
            className="w-full h-full object-cover filter brightness-105 contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle natural lighting vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Info on Image */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10 text-white">
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/90 block mb-1 font-medium font-sans">
              {year} • {area?.toUpperCase()}
            </span>
            <h3 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
              {title}
            </h3>
          </div>
        </div>

        {/* Right Column: Architectural Information (40% Width on Desktop) */}
        <div className="lg:col-span-2 p-5 sm:p-6 lg:p-7 flex flex-col justify-between bg-white h-full">
          <div>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate font-sans">
                {categoryLabel}
              </span>
              <span className="text-[11px] font-semibold text-brand-charcoal font-sans px-2.5 py-0.5 rounded bg-[#F1F5F4] border border-brand-border/70">
                {year} • {area}
              </span>
            </div>

            <h3 className="font-editorial text-lg sm:text-xl font-bold text-brand-charcoal tracking-tight mb-2">
              {title}
            </h3>

            <p className="text-xs text-brand-mutedcharcoal leading-relaxed font-sans mb-3 line-clamp-3">
              {summary}
            </p>

            {/* Architectural Highlights */}
            {highlights.length > 0 && (
              <div className="mb-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal font-sans mb-1">
                  Key Architectural Interventions:
                </h4>
                <ul className="space-y-1">
                  {highlights.slice(0, 2).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] text-brand-mutedcharcoal leading-relaxed font-sans"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-brand-mineral shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Material Palette */}
            {materials.length > 0 && (
              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {materials.slice(0, 3).map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#F1F5F4] border border-brand-border text-[11px] font-medium text-brand-mutedcharcoal font-sans"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {scope && (
              <div className="pt-2 border-t border-brand-border/80 text-[11px] text-brand-slate font-sans mb-2 line-clamp-1">
                <strong className="text-brand-charcoal font-semibold">Scope: </strong>
                {scope}
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-brand-border mt-auto">
            {cta && (
              <Button
                id="featured-project-inquire-cta"
                href={cta.href || "/contact"}
                label={cta.label}
                variant="primary"
                className="text-xs px-4 py-2 whitespace-nowrap"
              />
            )}
            <button
              type="button"
              onClick={() => onSelectProject && onSelectProject(content)}
              className="text-xs font-semibold text-brand-charcoal hover:text-brand-mineral px-3.5 py-2 rounded-full border border-brand-border hover:bg-brand-surface transition-colors cursor-pointer whitespace-nowrap"
            >
              Examine Monograph
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
