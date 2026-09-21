/**
 * GalleryFilterSection
 *
 * Implements a floating glassmorphism filter bar:
 * - Semi-transparent white frosted glass container with backdrop blur
 * - Subtly frosted active capsule with translucent styling (no black/dark fill)
 * - Clean, unboxed text categories with delicate light hover states
 * - Ultra-thin translucent separators between categories
 * - All categories arranged in a single horizontal row on desktop
 */
export default function GalleryFilterSection({
  filters,
  activeFilter,
  onFilterChange,
}) {
  return (
    <section
      id="gallery-filters-section"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8"
      aria-label="Gallery category filters"
    >
      <div className="max-w-6xl xl:max-w-[1240px] mx-auto">
        {/* Floating Glassmorphism Main Filter Bar */}
        <div
          id="gallery-filter-container"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.55)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 255, 255, 0.65)",
            boxShadow:
              "0 8px 30px rgba(23, 37, 44, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
          }}
          className="rounded-full px-3 sm:px-5 py-2 overflow-x-auto no-scrollbar flex items-center justify-start lg:justify-center"
        >
          <nav
            id="gallery-filter-nav"
            className="flex items-center flex-nowrap gap-0.5 sm:gap-1 lg:gap-1.5 shrink-0"
            role="tablist"
            aria-label="Filter photographs by category"
          >
            {filters.map((filter, index) => {
              const isActive = activeFilter === filter.id;

              return (
                <div key={filter.id} className="flex items-center shrink-0">
                  <button
                    id={`filter-btn-${filter.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => onFilterChange(filter.id)}
                    style={
                      isActive
                        ? {
                            backgroundColor: "rgba(255, 255, 255, 0.75)",
                            border: "1px solid rgba(255, 255, 255, 0.9)",
                            boxShadow: "0 2px 8px rgba(30, 50, 60, 0.08)",
                          }
                        : undefined
                    }
                    className={`inline-flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 text-xs lg:text-[13px] tracking-tight lg:tracking-normal transition-all duration-200 cursor-pointer whitespace-nowrap rounded-full ${
                      isActive
                        ? "text-brand-charcoal font-semibold"
                        : "text-brand-mutedcharcoal hover:text-brand-charcoal font-medium hover:bg-white/40 border border-transparent"
                    }`}
                  >
                    {filter.label}
                  </button>

                  {/* Thin translucent vertical separator */}
                  {index < filters.length - 1 && (
                    <span
                      style={{ backgroundColor: "rgba(80, 100, 110, 0.15)" }}
                      className="inline-block w-[1px] h-3 ml-0.5 sm:ml-1 lg:ml-1.5 self-center shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
