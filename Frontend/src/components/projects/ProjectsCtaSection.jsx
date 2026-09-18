import { Link } from "react-router-dom";
import { resolveImage } from "../../utils/imageResolver";

export default function ProjectsCtaSection({ content }) {
  if (!content) return null;

  const {
    eyebrow = "COMMISSION YOUR SPACE",
    heading = "Have an Architectural Vision in Mind?",
    description = "We welcome private residential inquiries, commercial spatial commissions, and comprehensive architectural renovations worldwide.",
    image,
    primaryCta = {
      label: "Start a Project Conversation",
      href: "/contact",
    },
    secondaryCta = {
      label: "Explore Our Services",
      href: "/services",
    },
  } = content;

  const resolvedPrimary = content.primaryCta || content.ctaPrimary || primaryCta;
  const resolvedSecondary = content.secondaryCta || content.ctaSecondary || secondaryCta;

  return (
    <section
      className="py-6 lg:py-8 bg-[#F1F5F4]"
      data-purpose="call-to-action"
      id="projects-cta-section"
      aria-label="Projects Consultation Call to Action"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-2xl overflow-hidden text-[#17252C] relative shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Text Column */}
            <div className="lg:col-span-7 px-6 py-6 sm:px-7 sm:py-6 lg:px-9 lg:py-5 z-10 flex flex-col justify-center">
              {eyebrow && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-[1px] bg-[#3C7188]"></span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3C7188] block font-sans">
                    {eyebrow}
                  </span>
                </div>
              )}

              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-tight tracking-tight text-[#17252C] mb-2 break-words">
                {heading}
              </h2>

              <p className="text-[#4A5F68] text-xs sm:text-sm leading-relaxed max-w-lg mb-4 break-words font-sans">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {resolvedPrimary?.label && (
                  <Link
                    to={resolvedPrimary.href || "/contact"}
                    id="projects-final-primary-cta"
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-[#17252C] text-white hover:bg-[#3C7188] transition-colors duration-200 shadow-sm text-center flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    <span>{resolvedPrimary.label}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      →
                    </span>
                  </Link>
                )}

                {resolvedSecondary?.label && (
                  <Link
                    to={resolvedSecondary.href || "/services"}
                    id="projects-final-secondary-cta"
                    className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider bg-white border border-[#DCE5E7] text-[#17252C] hover:bg-[#F1F5F4] transition-colors duration-200 text-center shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    {resolvedSecondary.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 h-44 sm:h-48 lg:h-[220px] relative overflow-hidden">
              <img
                alt={content.imageAlt || heading || "Architectural Consultation Desk"}
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

