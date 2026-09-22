export default function ContactCTA({ ctaData, onSelectAction }) {
  if (!ctaData) return null;

  return (
    <section
      id="contact-cta"
      aria-labelledby="contact-cta-heading"
      className="py-12 sm:py-16 pb-16 sm:pb-20 bg-[#F1F5F4]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-[#DCE5E7] p-8 sm:p-12 text-center shadow-none">
          {ctaData.eyebrow && (
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3C7188] block mb-2 font-sans">
              {ctaData.eyebrow}
            </span>
          )}

          <h2
            id="contact-cta-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#17252C] tracking-tight leading-tight mb-3"
          >
            {ctaData.heading}
          </h2>

          <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed mb-7 max-w-xl mx-auto font-sans">
            {ctaData.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onSelectAction(ctaData.primaryAction.type)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#17252C] hover:bg-[#283E49] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-none focus:outline-none focus:ring-1 focus:ring-[#3C7188]"
            >
              <span>{ctaData.primaryAction.label}</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectAction(ctaData.secondaryAction.type)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-[#F1F5F4] text-[#17252C] border border-[#DCE5E7] hover:border-[#3C7188] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-none focus:outline-none focus:ring-1 focus:ring-[#3C7188]"
            >
              <span>{ctaData.secondaryAction.label}</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
