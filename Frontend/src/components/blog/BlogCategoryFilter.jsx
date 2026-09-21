import interiorVector from "../../assets/blog/interior-architecture-vector.svg";

export default function BlogCategoryFilter({
  filters,
  activeFilter,
  onSelectFilter,
}) {
  if (!filters || filters.length === 0) return null;

  return (
    <section
      id="blog-category-filter"
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 sm:mb-12"
      aria-label="Blog article navigation and categories"
    >
      <div className="bg-[#F8FAF9] border border-[#DCE5E7] rounded-3xl shadow-[0_2px_14px_-2px_rgba(23,37,44,0.04)] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between">
        {/* Left Content Area: Eyebrow, Heading, Description, and Glass Navigation Bar */}
        <div className="p-5 sm:p-7 lg:py-7 lg:pl-8 lg:pr-5 flex-1 min-w-0 flex flex-col justify-center">
          {/* Small Eyebrow Label */}
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-1.5 block">
            — BLOG
          </span>

          {/* Main Heading */}
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17252C] tracking-tight mb-1.5">
            Explore Our Articles
          </h2>

          {/* Supporting Description */}
          <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed mb-5 max-w-xl">
            Insights, ideas, and inspiration for better living spaces.
          </p>

          {/* Light Glass / Transparent Glass Unified Navigation Bar */}
          <div className="w-full max-w-full overflow-x-auto no-scrollbar py-1">
            <nav
              className="inline-flex xl:flex items-center min-w-max xl:min-w-0 w-auto xl:w-full justify-between bg-white/60 backdrop-blur-md border border-white/80 rounded-full shadow-[0_2px_12px_rgba(23,37,44,0.03)] px-3 sm:px-4 py-2 transition-all duration-200"
              role="tablist"
              aria-label="Blog category navigation"
            >
              {filters.map((filter, index) => {
                const isActive = activeFilter === filter.id;
                const isLast = index === filters.length - 1;

                return (
                  <div key={filter.id} className="flex items-center xl:flex-1 xl:justify-center">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => onSelectFilter(filter.id)}
                      className={`group relative flex flex-col items-center justify-center px-2.5 sm:px-3.5 xl:px-2 2xl:px-3 py-1 text-xs whitespace-nowrap transition-colors duration-200 cursor-pointer bg-transparent border-none ${
                        isActive
                          ? "text-[#17252C] font-semibold"
                          : "text-[#4A5F68] font-medium hover:text-[#17252C]"
                      }`}
                    >
                      {/* Category Label */}
                      <span className="tracking-tight sm:tracking-normal transition-colors duration-200">
                        {filter.label}
                      </span>

                      {/* Underline directly underneath category text (centered, elegant, thin) */}
                      <span
                        className={`mt-1 h-[2px] w-full bg-[#3C7188] rounded-full transition-all duration-300 ${
                          isActive
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75"
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Subtle Vertical Separator between items */}
                    {!isLast && (
                      <span
                        className="w-px h-3.5 bg-[#D5E1E3]/80 mx-1 sm:mx-1.5 xl:mx-0.5 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Side Visual Area: Subtle Vertical Text & Architectural Vector Graphic */}
        <div className="hidden lg:flex items-center self-stretch shrink-0">
          {/* Vertical Divider & Text Detail */}
          <div className="flex items-center gap-3.5 xl:gap-4 px-3.5 xl:px-5">
            <div className="w-px h-12 bg-[#DCE5E7]" aria-hidden="true" />
            <div
              className="flex flex-col gap-1 text-[9.5px] xl:text-[10px] uppercase font-semibold tracking-[0.22em] text-[#5F747D] select-none"
              aria-hidden="true"
            >
              <span>IDEAS</span>
              <span>INSIGHTS</span>
              <span>INSPIRATION</span>
            </div>
          </div>

          {/* Architectural Interior Vector Illustration (Clean local SVG asset) */}
          <div className="w-28 xl:w-40 2xl:w-48 h-full min-h-[185px] overflow-hidden rounded-l-[32px] lg:rounded-l-full bg-[#E5EEEC] border-l border-[#DCE5E7] flex items-center justify-center">
            <img
              src={interiorVector}
              alt="Editorial architectural interior vector illustration"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
