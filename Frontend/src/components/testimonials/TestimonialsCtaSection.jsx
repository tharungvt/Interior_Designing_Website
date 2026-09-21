import Button from "../Button";

export default function TestimonialsCtaSection({ cta }) {
  if (!cta) return null;

  return (
    <section
      id="testimonials-cta-section"
      className="py-10 sm:py-12 lg:py-14 bg-[#F1F5F4]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-3xl p-6 sm:p-9 lg:p-12 text-center shadow-[0_4px_24px_-4px_rgba(23,37,44,0.06)] flex flex-col items-center">
          {/* Eyebrow */}
          {cta.eyebrow && (
            <div className="flex items-center justify-center gap-2.5 mb-2.5">
              <span className="w-6 h-px bg-[#3C7188]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#3C7188]">
                {cta.eyebrow}
              </span>
              <span className="w-6 h-px bg-[#3C7188]" aria-hidden="true" />
            </div>
          )}

          {/* Heading */}
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252C] max-w-3xl leading-[1.12] mb-3">
            {cta.title}
          </h2>

          {/* Subtitle Description */}
          {cta.description && (
            <p className="text-sm sm:text-base md:text-lg text-[#4A5F68] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-sans">
              {cta.description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {cta.primaryCta && (
              <Button
                href={cta.primaryCta.href || "/contact"}
                variant="primary"
                label={cta.primaryCta.label}
                showArrow={true}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold"
              />
            )}
            {cta.secondaryCta && (
              <Button
                href={cta.secondaryCta.href || "/contact?type=quote"}
                variant="secondary"
                label={cta.secondaryCta.label}
                showArrow={true}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold bg-white text-[#17252C] border border-[#DCE5E7] hover:bg-white/90"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
