import { Link } from "react-router-dom";

export default function ProjectsIntroSection({
  content,
  activeFilter,
  onFilterChange,
}) {
  if (!content) return null;

  const { eyebrow, heading, description, categories = [] } = content;

  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8"
      id="projects-portfolio-intro"
      aria-label="Portfolio Introduction and Filters"
    >
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-6 h-px bg-brand-mineral"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate font-sans">
              {eyebrow}
            </span>
            <span className="w-6 h-px bg-brand-mineral"></span>
          </div>
        )}

        {/* Main Heading */}
        <h1 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.65rem] font-bold leading-tight text-brand-charcoal tracking-tight mb-3 w-full">
          {heading}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-brand-mutedcharcoal leading-relaxed font-sans max-w-2xl mb-6 sm:mb-8">
          {description}
        </p>

        {/* Dynamic Interactive Filter Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          role="group"
          aria-label="Project Category Filters"
        >
          {categories.map((cat) => {
            const isActive =
              activeFilter === cat.id ||
              (cat.id === "bespoke-joinery" &&
                (activeFilter === "specialized" ||
                  activeFilter === "bespoke" ||
                  activeFilter === "joinery"));
            const targetPath =
              cat.id === "all" ? "/projects" : `/projects?category=${cat.id}`;

            return (
              <Link
                key={cat.id}
                to={targetPath}
                id={`filter-btn-${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onFilterChange && onFilterChange(cat.id);
                }}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap backdrop-blur-md ${
                  isActive
                    ? "bg-white text-[#17252C] font-bold border border-[#3C7188] shadow-sm ring-2 ring-[#3C7188]/20"
                    : "bg-white/65 hover:bg-white/95 text-[#17252C]/85 hover:text-[#17252C] font-semibold border border-white/80 hover:border-white shadow-xs"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

