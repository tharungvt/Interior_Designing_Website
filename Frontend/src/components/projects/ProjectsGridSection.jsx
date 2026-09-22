import { useState } from "react";
import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

export default function ProjectsGridSection({
  projects = [],
  activeFilter = "all",
  selectedProject,
  onSelectProject,
}) {
  const [internalSelectedProject, setInternalSelectedProject] = useState(null);

  const activeSelected =
    selectedProject !== undefined ? selectedProject : internalSelectedProject;
  const handleSelect = onSelectProject || setInternalSelectedProject;

  const isMatch = (projectCat, filter) => {
    if (!filter || filter === "all" || filter === "all-projects") return true;
    const normFilter = filter.toLowerCase().trim();
    const normCat = (projectCat || "").toLowerCase().trim();
    if (
      normFilter === "bespoke-joinery" ||
      normFilter === "specialized" ||
      normFilter === "bespoke" ||
      normFilter === "joinery"
    ) {
      return (
        normCat === "bespoke-joinery" ||
        normCat === "specialized" ||
        normCat === "bespoke" ||
        normCat === "joinery"
      );
    }
    return normCat === normFilter;
  };

  const filteredProjects = projects.filter((p) => isMatch(p.category, activeFilter));

  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 sm:mb-28"
      id="projects-grid-section"
      aria-label="Projects Archive Grid"
    >
      {/* Category Section Subtitle */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal">
            {activeFilter === "all"
              ? "All Architectural Commissions"
              : activeFilter === "residential"
              ? "Residential Sanctuaries"
              : activeFilter === "commercial"
              ? "Commercial Ateliers & Headquarters"
              : "Bespoke Millwork & Joinery"}
          </h3>
          <p className="text-xs sm:text-sm text-brand-slate font-sans mt-1">
            Displaying {filteredProjects.length} curated works
          </p>
        </div>
      </div>

      {/* Grid of Projects */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-brand-border">
          <p className="text-sm text-brand-mutedcharcoal">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-border shadow-atelier-subtle hover:shadow-card-warm transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => handleSelect(project)}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-brand-surface">
                <img
                  src={resolveImage(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-brand-charcoal shadow-sm border border-brand-border">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="text-[11px] font-medium text-white/85 block mb-0.5 font-sans">
                    {project.area}
                  </span>
                  <h4 className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {project.title}
                  </h4>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <p className="text-xs sm:text-sm text-brand-mutedcharcoal leading-relaxed mb-4 font-sans line-clamp-3">
                  {project.summary}
                </p>

                {/* Card Footer */}
                <div className="pt-4 border-t border-brand-border/80 flex items-center justify-between font-sans">
                  <span className="text-xs font-semibold text-brand-slate">
                    {project.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-charcoal group-hover:text-brand-mineral transition-colors">
                    View Project Details
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Project Lightbox Modal */}
      {activeSelected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => handleSelect(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-brand-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8 [scrollbar-gutter:stable]">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-semibold text-brand-mineral uppercase tracking-wider block font-sans">
                    {activeSelected.categoryLabel}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-brand-charcoal mt-1">
                    {activeSelected.title}
                  </h3>
                  <p className="text-xs text-brand-slate font-sans mt-0.5">
                    {activeSelected.area}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelect(null)}
                  aria-label="Close project modal"
                  className="w-8 h-8 rounded-full bg-brand-surface hover:bg-brand-stone flex items-center justify-center text-brand-charcoal transition-colors cursor-pointer shrink-0"
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

              {/* Modal Image */}
              <div className="w-fit max-w-full mx-auto mb-6 max-h-[75vh] flex items-center justify-center">
                <img
                  src={resolveImage(activeSelected.image)}
                  alt={activeSelected.title}
                  className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-none border-0 outline-none shadow-none ring-0"
                />
              </div>

              {/* Modal Details */}
              <div className="space-y-4 text-sm text-brand-mutedcharcoal leading-relaxed font-sans mb-6">
                <p>{activeSelected.summary}</p>

              {activeSelected.materials && activeSelected.materials.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2 font-sans">
                    Architectural Material Palette:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSelected.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md bg-[#F1F5F4] border border-brand-border text-xs font-medium text-brand-mutedcharcoal font-sans"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeSelected.scope && (
                <div className="pt-3 border-t border-brand-border text-xs text-brand-slate font-sans">
                  <strong className="text-brand-charcoal font-semibold">
                    Design Scope:
                  </strong>{" "}
                  {activeSelected.scope}
                </div>
              )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-brand-border">
                <button
                  type="button"
                  onClick={() => handleSelect(null)}
                  className="px-5 py-2.5 rounded-full border border-brand-border text-xs font-semibold text-brand-mutedcharcoal hover:bg-brand-surface transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Button
                  id="modal-inquire-cta"
                  href="/contact"
                  label="Inquire About Similar Project"
                  variant="primary"
                  className="text-xs px-6 py-2.5"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
