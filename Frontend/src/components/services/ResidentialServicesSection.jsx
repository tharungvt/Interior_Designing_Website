import { resolveImage } from "../../utils/imageResolver";
import { handleServicesSectionLink } from "../../utils/servicesNavigation";
import Button from "../Button";

export default function ResidentialServicesSection({ content }) {
  if (!content) return null;

  const {
    id = "residential",
    eyebrow,
    heading,
    subtitle,
    headerLink,
    featured,
    services = [],
  } = content;

  return (
    <section
      id={id}
      className="py-16 sm:py-24 bg-[#F1F5F4] text-brand-charcoal"
      aria-labelledby="residential-section-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          id="residential-header"
          data-anchor-target="residential-header"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 scroll-mt-24"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-mineral" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate">
                {eyebrow}
              </span>
            </div>
            <h2
              id="residential-section-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal scroll-mt-24"
            >
              {heading}
            </h2>
            <p className="mt-3 text-base text-brand-mutedcharcoal font-sans">
              {subtitle}
            </p>
          </div>

          {headerLink && (
            <div className="shrink-0">
              <Button
                href={headerLink.href}
                onClick={(e) => handleServicesSectionLink(e, headerLink.href)}
                label={headerLink.label}
                variant="outline"
                className="!text-xs !py-2.5 !px-5"
              />
            </div>
          )}
        </div>

        {/* Featured Discipline Card (Full Home Interiors) */}
        {featured && (
          <div
            className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-atelier-subtle hover:shadow-card-warm transition-all duration-300 mb-12 sm:mb-16"
            id="featured-residential-discipline"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Featured Image */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] overflow-hidden bg-brand-stone">
                <img
                  src={resolveImage(featured.image)}
                  alt={featured.title}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Featured Info */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal tracking-tight mb-4">
                    {featured.title}
                  </h3>

                  <p className="text-sm text-brand-mutedcharcoal leading-relaxed mb-6 font-sans">
                    {featured.summary}
                  </p>

                  <div className="space-y-3 mb-8">
                    {featured.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-mutedcharcoal">
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-brand-mineral/10 text-brand-mineral shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
                  {featured.featuredProject && (
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-slate block">
                        {featured.featuredProject.category}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">
                        {featured.featuredProject.name}
                      </span>
                    </div>
                  )}

                  <Button
                    href={featured.cta?.href || "/contact"}
                    label={featured.cta?.label || "Enquire"}
                    variant="primary"
                    className="!text-xs !py-2.5 !px-5"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6-Card Residential Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-brand-border overflow-hidden flex flex-col justify-between shadow-atelier-subtle hover:shadow-card-warm transition-all duration-300 group"
              id={`service-${service.id}`}
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-stone">
                  <img
                    src={resolveImage(service.image)}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-editorial text-xl font-bold text-brand-charcoal tracking-tight mb-2 group-hover:text-brand-mineral transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed mb-5 font-sans">
                    {service.description}
                  </p>

                  {/* Tags */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-brand-stone/80 text-brand-slate"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-brand-border/60 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-brand-slate uppercase tracking-wider">
                  Scope Available
                </span>
                <Button
                  href={service.cta?.href || "/contact"}
                  label={service.cta?.label || "Enquire"}
                  variant="text-arrow"
                  ariaLabel={`Enquire about ${service.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
