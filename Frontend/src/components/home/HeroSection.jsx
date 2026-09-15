import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

function HeroSection({ content }) {
  if (!content) return null;

  const heroImageUrl = resolveImage(content.image);
  const featureItems = content.features || content.featureHighlights?.items || [];

  return (
    <section 
      className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden border-b border-brand-border bg-[#F1F5F4] scroll-mt-20" 
      id="home"
      data-purpose="hero-section"
    >
      {/* Full-Bleed Background Architectural Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img 
          alt={content.imageAlt || content.heading || "Interior architectural design"} 
          className="w-full h-full object-cover object-center scale-[1.01]" 
          src={heroImageUrl} 
        />
        {/* Sophisticated architectural gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F1F5F4] via-[#F1F5F4]/70 to-transparent sm:bg-gradient-to-r sm:from-[#F1F5F4]/95 sm:via-[#F1F5F4]/80 sm:to-transparent z-10"></div>
      </div>

      {/* Foreground Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 relative z-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow label */}
          {content.eyebrow && (
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-0.5 bg-brand-mineral"></span>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate font-sans">
                {content.eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.8rem] leading-[1.08] font-bold text-brand-charcoal tracking-tight mb-5 drop-shadow-sm break-words">
            {content.heading}
          </h1>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-brand-mutedcharcoal leading-relaxed max-w-xl mb-8 font-sans drop-shadow-sm break-words">
            {content.description}
          </p>

          {/* Action Buttons using reusable Button component */}
          <div className="flex flex-wrap items-center gap-4">
            {content.ctaPrimary?.label && (
              <Button
                href={content.ctaPrimary.href || "/contact"}
                label={content.ctaPrimary.label}
                variant="primary"
              />
            )}
            {content.ctaSecondary?.label && (
              <Button
                href={content.ctaSecondary.href || "/projects"}
                label={content.ctaSecondary.label}
                variant="secondary"
              />
            )}
          </div>

          {/* Architectural Feature Highlights */}
          {featureItems.length > 0 && (
            <div className="mt-12 sm:mt-16 max-w-2xl bg-white/50 backdrop-blur-md border border-white/70 rounded-2xl p-4 sm:p-5 shadow-atelier-subtle">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-brand-border/60 text-left">
                {featureItems.map((item, idx) => (
                  <div key={item.id || idx} className={`${idx > 0 ? "pt-3 sm:pt-0 sm:px-4" : "sm:pr-4"}`}>
                    <div className="text-xs sm:text-sm font-bold text-brand-charcoal font-sans tracking-tight">
                      {item.title}
                    </div>
                    <div className="text-[11px] sm:text-xs text-brand-mutedcharcoal font-sans">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
