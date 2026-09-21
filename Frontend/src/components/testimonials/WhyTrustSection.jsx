export default function WhyTrustSection({ whyTrust }) {
  if (!whyTrust) return null;

  return (
    <section
      id="why-clients-trust-us"
      className="py-12 sm:py-14 lg:py-16 bg-white border-t border-[#DCE5E7] text-[#17252C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          {whyTrust.eyebrow && (
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#3C7188]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
                {whyTrust.eyebrow}
              </span>
            </div>
          )}

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252C] leading-[1.14] mb-3">
            {whyTrust.title}
          </h2>

          {whyTrust.subtitle && (
            <p className="text-sm sm:text-base text-[#4A5F68] font-normal leading-relaxed">
              {whyTrust.subtitle}
            </p>
          )}
        </div>

        {/* 4 Pillars Bento / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyTrust.principles?.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#F8FAF9] rounded-2xl p-6 sm:p-7 border border-[#DCE5E7] flex flex-col justify-between hover:border-[#3C7188]/50 hover:bg-white hover:shadow-[0_8px_24px_-4px_rgba(23,37,44,0.06)] transition-all duration-300 group"
            >
              <div>
                <span className="font-editorial text-2xl sm:text-3xl font-bold text-[#3C7188] mb-3 block group-hover:text-[#17252C] transition-colors">
                  {principle.number}
                </span>
                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#17252C] mb-2 leading-snug">
                  {principle.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5F68] leading-relaxed mt-2">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
