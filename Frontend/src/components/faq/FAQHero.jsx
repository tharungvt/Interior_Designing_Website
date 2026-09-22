export default function FAQHero({ content }) {
  if (!content) return null;

  return (
    <section
      id="faq-hero"
      className="pt-8 sm:pt-10 lg:pt-12 pb-5 sm:pb-6 bg-[#F1F5F4]"
      aria-label="FAQ Introduction"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-5 h-px bg-[#3C7188]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
              {content.eyebrow}
            </span>
          </div>

          {/* Editorial Serif Heading */}
          <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252C] leading-[1.15] mb-2 sm:mb-2.5">
            {content.heading}
          </h1>

          {/* Supporting Text */}
          <p className="text-xs sm:text-sm md:text-base text-[#4A5F68] font-normal leading-relaxed max-w-2xl font-sans">
            {content.supportingText}
          </p>
        </div>
      </div>
    </section>
  );
}
