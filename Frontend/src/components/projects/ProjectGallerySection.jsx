import { useState } from "react";
import { resolveImage } from "../../utils/imageResolver";

export default function ProjectGallerySection({ content }) {
  const [activeVignette, setActiveVignette] = useState(null);

  if (!content) return null;

  const { eyebrow, heading, description, items = [] } = content;

  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24"
      id="projects-gallery-section"
      aria-label="Project Architectural Vignettes Gallery"
    >
      {/* Header */}
      <div className="max-w-3xl mb-12">
        {eyebrow && (
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-7 h-0.5 bg-brand-mineral"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate font-sans">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal mb-4">
          {heading}
        </h2>

        <p className="text-sm sm:text-base text-brand-mutedcharcoal leading-relaxed font-sans">
          {description}
        </p>
      </div>

      {/* Aligned Responsive Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden bg-brand-surface border border-brand-border/80 shadow-atelier-subtle hover:shadow-card-warm transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
            onClick={() => setActiveVignette(item)}
          >
            <img
              src={resolveImage(item.image)}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80 block mb-0.5 font-sans">
                {item.category}
              </span>
              <h4 className="font-editorial text-base sm:text-lg font-bold text-white drop-shadow-sm truncate">
                {item.title}
              </h4>
            </div>

            {/* Top Right Expand Icon */}
            <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-brand-charcoal flex items-center justify-center shadow-md">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview Modal */}
      {activeVignette && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVignette(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden border border-brand-border shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={resolveImage(activeVignette.image)}
                alt={activeVignette.title}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActiveVignette(null)}
                aria-label="Close image lightbox"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 flex items-center justify-between gap-4 bg-white">
              <div>
                <span className="text-[11px] font-semibold text-brand-mineral uppercase tracking-wider block font-sans">
                  {activeVignette.category}
                </span>
                <h3 className="font-editorial text-xl font-bold text-brand-charcoal mt-0.5">
                  {activeVignette.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVignette(null)}
                className="px-5 py-2 rounded-full border border-brand-border text-xs font-semibold text-brand-mutedcharcoal hover:bg-brand-surface transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
