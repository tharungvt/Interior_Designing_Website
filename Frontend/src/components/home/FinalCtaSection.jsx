import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

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
                  <Button
                    href={content.ctaPrimary.href || "/contact"}
                    label={content.ctaPrimary.label}
                    variant="primary"
                    className="px-5 py-2.5 text-xs sm:text-sm"
                  />
                )}

                {content.ctaSecondary?.label && (
                  <Button
                    href={content.ctaSecondary.href || "/contact"}
                    label={content.ctaSecondary.label}
                    variant="outline"
                  />
                )}
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 h-44 sm:h-48 lg:h-[220px] relative overflow-hidden">
              <img
                alt={
                  content.imageAlt ||
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
