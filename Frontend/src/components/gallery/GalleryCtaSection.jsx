import Button from "../Button";

/**
 * GalleryCtaSection
 *
 * Recreates the consultation invitation card from the bottom of the Figma Gallery page.
 */
export default function GalleryCtaSection({ cta }) {
  if (!cta) return null;

  return (
    <section
      id="gallery-cta-section"
      className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 sm:pb-28"
      aria-label="Start your design project"
    >
      <div className="bg-[#E5EEEC] border border-brand-border rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-card-warm">
        {/* Text Group */}
        <div className="max-w-2xl text-center lg:text-left">
          {cta.eyebrow && (
            <span
              id="gallery-cta-eyebrow"
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate block mb-2 sm:mb-3"
            >
              {cta.eyebrow}
            </span>
          )}

          <h2
            id="gallery-cta-title"
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-charcoal tracking-tight leading-[1.15] mb-3 sm:mb-4"
          >
            {cta.title}
          </h2>

          {cta.subtitle && (
            <p
              id="gallery-cta-subtitle"
              className="text-sm sm:text-base text-brand-mutedcharcoal font-normal leading-relaxed"
            >
              {cta.subtitle}
            </p>
          )}
        </div>

        {/* Buttons Group */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 shrink-0">
          {cta.primaryCta && (
            <Button
              id="gallery-cta-primary-btn"
              href={cta.primaryCta.href}
              label={cta.primaryCta.label}
              variant="primary"
            />
          )}

          {cta.secondaryCta && (
            <Button
              id="gallery-cta-secondary-btn"
              href={cta.secondaryCta.href}
              label={cta.secondaryCta.label}
              variant="outline"
            />
          )}
        </div>
      </div>
    </section>
  );
}
