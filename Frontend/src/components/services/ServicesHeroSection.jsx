import { resolveImage } from "../../utils/imageResolver";
import { handleServicesSectionLink } from "../../utils/servicesNavigation";
import Button from "../Button";

export default function ServicesHeroSection({ content }) {
  if (!content) return null;

  const {
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    backgroundImage,
    quickLinks = [],
  } = content;

  return (
    <section
      className="relative bg-brand-charcoal text-white overflow-hidden"
      id="services-hero"
      aria-label="Services Overview"
    >
      {/* Background Image with Significantly Reduced Overlay - Bright and Spacious */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={resolveImage(backgroundImage)}
          alt="Interior Design Studio Architecture"
          className="w-full h-full object-cover object-center scale-100"
        />
        {/* Subtle, delicate ambient overlay so the bright interior shines through while preserving legibility */}
        <div className="absolute inset-0 bg-black/25 sm:bg-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center text-center">
        {/* Title */}
        <h1
          id="services-hero-title"
          className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl font-sans font-normal leading-relaxed mb-10 drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {primaryCta && (
            <Button
              id="services-hero-primary-cta"
              href={primaryCta.href}
              label={primaryCta.label}
              variant="primary"
              className="!bg-white !text-brand-charcoal hover:!bg-brand-stone hover:!text-brand-charcoal shadow-lg px-8 py-3.5"
            />
          )}
          {secondaryCta && (
            <Button
              id="services-hero-secondary-cta"
              href={secondaryCta.href}
              label={secondaryCta.label}
              variant="secondary"
              className="!bg-black/25 backdrop-blur-md !text-white !border-white/40 hover:!border-white hover:!bg-white/20 shadow-md px-8 py-3.5"
            />
          )}
        </div>

        {/* Category Jump Anchor Bar */}
        {quickLinks.length > 0 && (
          <nav
            aria-label="Services Section Quick Navigation"
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-2 rounded-full bg-black/25 backdrop-blur-md border border-white/20 shadow-md"
          >
            {quickLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleServicesSectionLink(e, link.href)}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider text-white hover:bg-white/20 transition-all cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      {/* Subtle Bottom Separator Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#F1F5F4] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
