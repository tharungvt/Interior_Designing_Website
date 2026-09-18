import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

export default function ProjectsHeroSection({ content }) {
  if (!content) return null;

  const {
    eyebrow,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    backgroundImage,
    stats = [],
  } = content;

  return (
    <section
      className="relative bg-brand-charcoal text-white overflow-hidden"
      id="projects-hero"
      aria-label="Projects Hero Overview"
    >
      {/* Background Image with Ambient Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={resolveImage(backgroundImage)}
          alt="Interior Design Studio Architectural Works"
          className="w-full h-full object-cover object-center filter brightness-115 contrast-105"
        />
        <div className="absolute inset-0 bg-black/25 bg-gradient-to-b from-black/35 via-black/15 to-black/45" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28 flex flex-col items-center text-center">
        {eyebrow && (
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-0.5 bg-brand-border/60"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              {eyebrow}
            </span>
            <span className="w-6 h-0.5 bg-brand-border/60"></span>
          </div>
        )}

        {/* Title */}
        <h1
          id="projects-hero-heading"
          className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08] mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-sans font-normal leading-relaxed mb-10 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {primaryCta && (
            <Button
              id="projects-hero-primary-cta"
              href={primaryCta.href}
              label={primaryCta.label}
              variant="primary"
              className="!bg-white !text-brand-charcoal hover:!bg-brand-stone hover:!text-brand-charcoal shadow-lg px-8 py-3.5"
            />
          )}
          {secondaryCta && (
            <Button
              id="projects-hero-secondary-cta"
              href={secondaryCta.href}
              label={secondaryCta.label}
              variant="secondary"
              className="!bg-black/30 backdrop-blur-md !text-white !border-white/40 hover:!border-white hover:!bg-white/20 shadow-md px-8 py-3.5"
            />
          )}
        </div>

        {/* Studio Proven Metrics */}
        {stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/20 w-full max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.id || stat.label} className="flex flex-col items-center">
                <span className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/75 mt-1 font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subtle Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#F1F5F4] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
