/**
 * GalleryHeroSection
 *
 * Implements a clean, refined typographical hero section
 * without any background image, focusing on elegant proportions,
 * crisp contrast, and sophisticated spacing.
 */
export default function GalleryHeroSection({ hero }) {
  if (!hero) return null;

  return (
    <header
      id="gallery-hero"
      className="relative w-full bg-[#F1F5F4] text-brand-charcoal pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        {hero.eyebrow && (
          <div className="flex items-center justify-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-6 h-px bg-brand-mineral" aria-hidden="true" />
            <span
              id="gallery-hero-eyebrow"
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate"
            >
              {hero.eyebrow}
            </span>
            <span className="w-6 h-px bg-brand-mineral" aria-hidden="true" />
          </div>
        )}

        {/* Title */}
        <h1
          id="gallery-hero-title"
          className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-charcoal max-w-4xl leading-[1.12] mb-4 sm:mb-5"
        >
          {hero.title}
        </h1>

        {/* Subtitle */}
        {hero.subtitle && (
          <p
            id="gallery-hero-subtitle"
            className="text-sm sm:text-base lg:text-lg text-brand-mutedcharcoal max-w-2xl sm:max-w-3xl font-sans font-normal leading-relaxed"
          >
            {hero.subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
