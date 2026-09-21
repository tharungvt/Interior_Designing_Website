import { Link } from "react-router-dom";

export default function BlogMethodologySection({ methodology }) {
  if (!methodology) return null;

  return (
    <section
      id="studio-methodology"
      className="py-14 sm:py-18 lg:py-20 bg-white border-y border-[#DCE5E7]"
      aria-label="Studio Methodology"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-xl">
            {methodology.eyebrow && (
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-2 block">
                {methodology.eyebrow}
              </span>
            )}
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17252C] tracking-tight leading-[1.15]">
              {methodology.title}
            </h2>
          </div>

          {methodology.description && (
            <p className="max-w-xl text-xs sm:text-sm md:text-[15px] text-[#4A5F68] font-normal leading-relaxed">
              {methodology.description}
            </p>
          )}
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pt-6">
          {methodology.pillars?.map((pillar) => {
            const articleRoute = `/blog/${pillar.slug || pillar.id}`;

            return (
              <div
                key={pillar.id}
                className="flex flex-col justify-between group pt-4 border-t border-[#DCE5E7]"
              >
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#3C7188] mb-3 block">
                    {pillar.number}
                  </span>

                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#17252C] leading-snug tracking-tight mb-3 group-hover:text-[#3C7188] transition-colors">
                    <Link to={articleRoute}>{pillar.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed mb-6 font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <Link
                    to={articleRoute}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252C] group-hover:text-[#3C7188] transition-colors"
                  >
                    <span>{pillar.ctaText}</span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
