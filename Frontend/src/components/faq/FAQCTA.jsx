import Button from "../Button";

export default function FAQCTA({ cta }) {
  if (!cta) return null;

  return (
    <section
      id="faq-cta-section"
      className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#F1F5F4]"
      aria-label="Contact Call to Action"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-3xl p-6 sm:p-9 lg:p-11 text-center shadow-[0_4px_24px_-4px_rgba(23,37,44,0.06)] flex flex-col items-center">
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
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252C] max-w-3xl leading-[1.15] mb-2.5">
            {cta.title}
          </h2>

          {/* Subtitle Description */}
          {cta.description && (
            <p className="text-xs sm:text-sm md:text-base text-[#4A5F68] max-w-2xl leading-relaxed mb-6 font-sans">
              {cta.description}
            </p>
          )}

          {/* Action Buttons using the studio's Button component */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            {cta.primaryCta && (
              <Button
                href={cta.primaryCta.href || "/contact"}
                variant="primary"
                label={cta.primaryCta.label}
                showArrow={true}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold"
              />
            )}
            {cta.secondaryCta && (
              <Button
                href={cta.secondaryCta.href || "/contact?type=quote"}
                variant="secondary"
                label={cta.secondaryCta.label}
                showArrow={true}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold bg-white text-[#17252C] border border-[#DCE5E7] hover:bg-white/90"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
