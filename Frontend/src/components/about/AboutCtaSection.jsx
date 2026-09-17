import { Link } from "react-router-dom";
import { resolveImage } from "../../utils/imageResolver";
import { aboutContent } from "../../data/aboutContent";

function AboutCtaSection({ content = aboutContent.cta }) {
  if (!content) return null;

  return (
    <section
      className="py-6 lg:py-8 bg-[#F1F5F4]"
      data-purpose="call-to-action"
      id="consultation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-2xl overflow-hidden text-[#17252C] relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Text Column */}
            <div className="lg:col-span-7 px-6 py-6 sm:px-7 sm:py-6 lg:px-9 lg:py-5 z-10 flex flex-col justify-center">
              {content.eyebrow && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-[1px] bg-[#3C7188]"></span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3C7188] block">
                    {content.eyebrow}
                  </span>
                </div>
              )}

              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-tight tracking-tight text-[#17252C] mb-2 break-words">
                {content.heading}
              </h2>

              <p className="text-[#4A5F68] text-xs sm:text-sm leading-relaxed max-w-lg mb-4 break-words">
                {content.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {content.ctaPrimary?.label && (
                  <Link
                    to={content.ctaPrimary.href || "/contact"}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-[#17252C] text-white hover:bg-[#3C7188] transition-colors duration-200 shadow-sm text-center flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>{content.ctaPrimary.label}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                )}

                {content.ctaSecondary?.label && (
                  <Link
                    to={content.ctaSecondary.href || "/contact"}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-white border border-[#DCE5E7] text-[#17252C] hover:bg-[#F1F5F4] transition-colors duration-200 text-center shadow-xs cursor-pointer"
                  >
                    {content.ctaSecondary.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 h-44 sm:h-48 lg:h-[220px] relative overflow-hidden">
              <img
                alt={content.imageAlt || "Luxury Evening Interior Design"}
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

export default AboutCtaSection;
