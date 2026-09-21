/**
 * GalleryGridSection
 *
 * Renders the 12 curated interior photographs in an authentic architectural
 * layout matching the Figma design, with responsive hover states and modal interaction.
 */
export default function GalleryGridSection({
  items,
  activeFilter,
  onImageClick,
}) {
  if (!items || items.length === 0) {
    return (
      <section
        id="gallery-empty-state"
        className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center"
      >
        <div className="bg-white rounded-2xl border border-brand-border p-12 max-w-md mx-auto shadow-atelier-subtle">
          <p className="text-base text-brand-charcoal font-medium mb-2">
            No photographs found
          </p>
          <p className="text-xs text-brand-mutedcharcoal">
            Try selecting another category or view all gallery photographs.
          </p>
        </div>
      </section>
    );
  }

  const isAllActive = activeFilter === "all";

  return (
    <section
      id="gallery-grid-section"
      className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 sm:pb-28"
      aria-label="Photographs gallery grid"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7">
        {items.map((item) => {
          // In 'all' view, respect Figma's curated bento grid columns
          // When filtered, adapt cleanly to balanced multi-column grid
          const gridClass = isAllActive
            ? `col-span-12 sm:col-span-6 ${item.colSpan}`
            : "col-span-12 sm:col-span-6 lg:col-span-4";

          const isLargeVariant = !item.hasCustomTitleAction;

          return (
            <article
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => onImageClick(item)}
              className={`group relative rounded-2xl overflow-hidden bg-brand-charcoal border border-brand-border/60 shadow-atelier-subtle hover:shadow-card-warm cursor-pointer transition-all duration-300 ${gridClass} min-h-[300px] sm:min-h-[340px] flex flex-col justify-end`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92]"
                />
                {/* Visual Scrim / Architectural Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-300"
                  aria-hidden="true"
                />
              </div>

              {/* Card Meta Content (Anchored to Bottom) */}
              <div className="relative z-10 p-5 sm:p-6 lg:p-7 flex flex-col justify-end text-white">
                {/* Category Eyebrow */}
                <span
                  id={`gallery-eyebrow-${item.id}`}
                  className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C1D2D9] mb-1.5 sm:mb-2 block"
                >
                  {item.eyebrow}
                </span>

                {/* Title & Action Link */}
                {isLargeVariant ? (
                  <>
                    <h2
                      id={`gallery-title-${item.id}`}
                      className="font-editorial text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug"
                    >
                      {item.title}
                    </h2>
                    <div className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-white/85 group-hover:text-white transition-colors">
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.actionText}
                      </span>
                    </div>
                  </>
                ) : (
                  <h2
                    id={`gallery-title-${item.id}`}
                    className="font-editorial text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug flex items-center justify-between gap-3 group-hover:text-white"
                  >
                    <span>{item.title}</span>
                    <span
                      aria-hidden="true"
                      className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform duration-200"
                    >
                      →
                    </span>
                  </h2>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
