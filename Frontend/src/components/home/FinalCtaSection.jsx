import { resolveImage } from "../../utils/imageResolver";

function FinalCtaSection({ content }) {
  if (!content) return null;

  return (
    <section
      className="py-6 lg:py-8 bg-[#F1F5F4]"
      data-purpose="call-to-action"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#E5EEEC] border border-brand-border rounded-2xl overflow-hidden text-brand-charcoal relative shadow-card-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Text */}
            <div className="lg:col-span-7 px-6 py-6 sm:px-7 sm:py-6 lg:px-9 lg:py-5 z-10 flex flex-col justify-center">
              {content.eyebrow && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate block font-sans">
                    {content.eyebrow}
                  </span>
                </div>
              )}

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-tight tracking-tight text-brand-charcoal mb-2 break-words">
                {content.heading}
              </h2>

              <p className="text-brand-mutedcharcoal text-xs sm:text-sm leading-relaxed max-w-lg mb-4 font-sans break-words">
                {content.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {content.ctaPrimary?.label && (
                  <a
                    className="inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-mineral text-white font-medium tracking-wide text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-glow-atelier text-center"
                    href={content.ctaPrimary.href || "#contact"}
                  >
                    <span>{content.ctaPrimary.label}</span>

                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}

                {content.ctaSecondary?.label && (
                  <a
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-brand-border text-brand-charcoal bg-white hover:bg-brand-surface font-medium tracking-wide text-xs sm:text-sm transition-colors text-center"
                    href={content.ctaSecondary.href || "#contact"}
                  >
                    {content.ctaSecondary.label}
                  </a>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 h-44 sm:h-48 lg:h-[220px] relative overflow-hidden">
              <img
                alt={
                  content.heading ||
                  "Warm tailored interior dining space"
                }
                className="w-full h-full object-cover object-center"
                src={resolveImage(content.image)}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
