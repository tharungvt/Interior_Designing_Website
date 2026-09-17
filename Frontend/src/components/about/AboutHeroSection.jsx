import { Fragment } from "react";
import { resolveImage } from "../../utils/imageResolver";
import { aboutContent } from "../../data/aboutContent";

function AboutHeroSection({ content = aboutContent.hero }) {
  if (!content) return null;

  const handleSmoothScroll = (e, href) => {
    if (href && href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const metadata = content.metadata || [];

  return (
    <section
      className="py-12 md:py-16 border-b border-[#DCE5E7]"
      data-purpose="about-hero-section"
      id="about-hero"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            {content.eyebrow && (
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-[#3C7188]"></span>
                <span className="text-xs uppercase tracking-[0.16em] font-bold text-[#3C7188]">
                  {content.eyebrow}
                </span>
              </div>
            )}

            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] font-bold text-[#17252C] tracking-tight">
              {content.headingLines ? (
                content.headingLines.map((line, idx) => (
                  <Fragment key={idx}>
                    {line}
                    {idx < content.headingLines.length - 1 && (
                      <br className="hidden sm:inline" />
                    )}
                  </Fragment>
                ))
              ) : (
                content.heading
              )}
            </h1>

            <p className="text-base sm:text-[17px] leading-relaxed text-[#4A5F68] font-normal max-w-xl">
              {content.description}
            </p>

            {metadata.length > 0 && (
              <div className="pt-2" data-purpose="metadata-badges">
                <div className="inline-flex flex-wrap items-center gap-3 sm:gap-4 px-5 py-2.5 rounded-full border border-[#DCE5E7] bg-[#F8FAF9] text-xs text-[#4A5F68] shadow-xs">
                  {metadata.map((item, idx) => (
                    <Fragment key={item.label || idx}>
                      {idx > 0 && (
                        <span className="w-px h-3 bg-[#DCE5E7] hidden sm:inline-block"></span>
                      )}
                      <div>
                        {item.label}:{" "}
                        <span className="font-semibold text-[#17252C] ml-1">
                          {item.value}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            )}

            {content.cta && (
              <div className="pt-2">
                <a
                  className="inline-flex items-center space-x-3 text-sm font-semibold text-[#17252C] hover:text-[#3C7188] transition-colors duration-200 group cursor-pointer"
                  href={content.cta.href}
                  onClick={(e) => handleSmoothScroll(e, content.cta.href)}
                >
                  <span className="w-8 h-[1.5px] bg-[#17252C] group-hover:bg-[#3C7188] group-hover:w-12 transition-all duration-300"></span>
                  <span>{content.cta.label}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 relative" data-purpose="hero-image-container">
            <div className="relative overflow-hidden rounded-2xl border border-[#DCE5E7] bg-white shadow-sm aspect-[4/3] sm:aspect-[16/11] group">
              <img
                alt={content.imageAlt || "Award-winning luxury interior architectural penthouse"}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                src={resolveImage(content.image)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHeroSection;
