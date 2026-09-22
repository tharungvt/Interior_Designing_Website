import { Link } from "react-router-dom";
import { resolveImage } from "../../utils/imageResolver";

export default function ServicesCtaSection({ content }) {
  if (!content) return null;

  const {
    eyebrow = "START YOUR JOURNEY",
    heading = "Let's Create a Space That Feels Like Yours",
    subtitle = "Book a complimentary consultation with our principal architects and discover how we can elevate your corporate environment or residential sanctuary.",
    description = subtitle,
    primaryCta = { label: "Get a Free Consultation", href: "/contact" },
    secondaryCta = { label: "Request a Quote", href: "/contact?type=quote" },
    image = "services/cta-desk.png",
    imageAlt = "Architectural Consultation Desk",
  } = content;

  const resolvedDescription = content.description || content.subtitle || description;
  const resolvedPrimaryCta = content.primaryCta || content.ctaPrimary || primaryCta;
  const resolvedSecondaryCta = content.secondaryCta || content.ctaSecondary || secondaryCta;

  return (
    <section
      className="py-6 lg:py-8 bg-[#F1F5F4]"
      data-purpose="call-to-action"
      id="services-cta"
      aria-label="Services Call to Action"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-2xl overflow-hidden text-[#17252C] relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Text Column */}
            <div className="lg:col-span-7 px-6 py-6 sm:px-7 sm:py-6 lg:px-9 lg:py-5 z-10 flex flex-col justify-center">
              {eyebrow && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-[1px] bg-[#3C7188]"></span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3C7188] block">
                    {eyebrow}
                  </span>
                </div>
              )}

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-tight tracking-tight text-[#17252C] mb-2 break-words">
                {heading}
              </h2>

              <p className="text-[#4A5F68] text-xs sm:text-sm leading-relaxed max-w-lg mb-4 break-words font-sans">
                {resolvedDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {resolvedPrimaryCta?.label && (
                  <Link
                    to={resolvedPrimaryCta.href || "/contact"}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-[#17252C] text-white hover:bg-[#3C7188] transition-colors duration-200 shadow-sm text-center flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>{resolvedPrimaryCta.label}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                )}

                {resolvedSecondaryCta?.label && (
                  <Link
                    to={resolvedSecondaryCta.href || "/contact?type=quote"}
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-white border border-[#DCE5E7] text-[#17252C] hover:bg-[#F1F5F4] transition-colors duration-200 text-center shadow-xs cursor-pointer"
                  >
                    {resolvedSecondaryCta.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 h-44 sm:h-48 lg:h-[220px] relative overflow-hidden">
              <img
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
                src={resolveImage(image)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
