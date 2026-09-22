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
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#3C7188]">
              {content.eyebrow}
            </span>
          </div>

          {/* Editorial Serif Heading */}
          <h1 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.015em] text-[#17252C] leading-[1.1] mb-2 sm:mb-2.5">
            {content.heading}
          </h1>

          {/* Supporting Text */}
          <p className="text-[15px] sm:text-base text-[#4A5F68] font-normal leading-[1.55] sm:leading-[1.6] max-w-[520px] font-sans">
            {content.supportingText}
          </p>
        </div>
      </div>
    </section>
  );
}
