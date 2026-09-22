import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

export default function SpecializedServicesSection({ content }) {
  if (!content) return null;

  const {
    id = "specialized",
    eyebrow,
    heading,
    subtitle,
    items = [],
  } = content;

  return (
    <section
      id={id}
      className="py-16 sm:py-24 bg-white border-t border-brand-border text-brand-charcoal scroll-mt-20"
      aria-labelledby="specialized-section-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-mineral" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate">
              {eyebrow}
            </span>
          </div>
          <h2
            id="specialized-section-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal"
          >
            {heading}
          </h2>
          <p className="mt-3 text-base text-brand-mutedcharcoal font-sans leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 9 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.index}
              className="p-6 rounded-2xl bg-[#F1F5F4] border border-brand-border/80 hover:border-brand-mineral/40 hover:bg-brand-stone/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              id={`specialized-${item.index}`}
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  {/* Small Square Thumbnail with Border */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-brand-stone border border-brand-border shrink-0">
                    <img
                      src={resolveImage(item.image)}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-mono font-bold text-brand-mineral block mb-1">
                      {item.index}
                    </span>
                    <h3 className="font-editorial text-lg sm:text-xl font-bold text-brand-charcoal tracking-tight group-hover:text-brand-mineral transition-colors truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-slate">
                  Bespoke Commission
                </span>
                <Button
                  href={item.cta?.href || "/contact"}
                  label="Enquire"
                  variant="text-arrow"
                  ariaLabel={`Enquire about ${item.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
