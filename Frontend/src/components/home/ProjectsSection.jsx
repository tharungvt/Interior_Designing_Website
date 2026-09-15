import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

/**
 * Reusable ProjectCard Component
 *
 * Renders both dominant anchor placement and stacked secondary portfolio cards.
 */
export function ProjectCard({ project, isFeatured = false }) {
  if (!project) return null;

  const targetLink = project.link || "/projects";

  if (isFeatured) {
    return (
      <div className="group relative rounded-2xl overflow-hidden bg-brand-charcoal shadow-card-warm min-h-[460px] lg:min-h-[540px] flex flex-col justify-end p-6 sm:p-8 h-full">
        <img 
          alt={project.title || "Featured Interior Architecture"} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95" 
          src={resolveImage(project.image)} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

        {/* Bottom Info Row */}
        <div className="relative z-10 flex items-end justify-between gap-4">
          <div className="max-w-md">
            {project.category && (
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-brand-charcoal shadow-sm mb-3">
                {project.category}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1 font-editorial break-words">
              {project.title}
            </h3>
            {project.metadata && (
              <p className="text-xs sm:text-sm text-white/80 font-sans break-words">
                {project.metadata}
              </p>
            )}
          </div>
          <Button
            href={targetLink}
            ariaLabel={`View ${project.title}`}
            variant="circle-arrow"
            className="w-11 h-11 bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white shadow-lg group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-brand-charcoal shadow-card-warm flex-1 min-h-[240px] flex flex-col justify-end p-6">
      <img 
        alt={project.title || "Architectural Project"} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95" 
        src={resolveImage(project.image)} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>

      {/* Bottom Row */}
      <div className="relative z-10 flex items-end justify-between gap-4">
        <div className="max-w-xs">
          {project.category && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white text-brand-charcoal shadow-sm mb-2">
              {project.category}
            </span>
          )}
          <h3 className="text-xl font-bold text-white tracking-tight mb-0.5 font-editorial break-words">
            {project.title}
          </h3>
          {project.metadata && (
            <p className="text-xs text-white/80 font-sans break-words">
              {project.metadata}
            </p>
          )}
        </div>
        <Button
          href={targetLink}
          ariaLabel={`View ${project.title}`}
          variant="circle-arrow"
          className="w-10 h-10 bg-white text-brand-charcoal hover:bg-brand-charcoal hover:text-white shadow-lg group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function ProjectsSection({ projects, content }) {
  const data = projects || content;
  if (!data) return null;

  const rawItems = Array.isArray(data) ? data : (data.items || []);
  const featured = data.featured || rawItems.find((i) => i.featured) || rawItems[0];
  const secondary = data.secondary || rawItems.filter((i) => i.id !== featured?.id);
  const cta = data.cta || data.viewAllLink;

  return (
    <section className="py-16 lg:py-24 bg-white text-brand-charcoal relative overflow-hidden border-b border-brand-border scroll-mt-20" id="projects" data-purpose="featured-projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            {data.eyebrow && (
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate block font-sans">
                  {data.eyebrow}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] text-brand-charcoal font-bold leading-tight tracking-tight mb-3 font-editorial break-words">
              {data.heading || "More Than Design. A Better Way of Living."}
            </h2>
            <p className="text-brand-mutedcharcoal text-sm sm:text-base max-w-xl leading-relaxed font-sans break-words">
              {data.description || "Explore some of our latest projects where design meets functionality."}
            </p>
          </div>
          {cta?.label && (
            <Button
              href={cta.href || "/projects"}
              label={cta.label}
              variant="header"
              className="self-start md:self-auto"
            />
          )}
        </div>

        {/* Asymmetric Portfolio Showcase with .map() */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Dominant Left Anchor */}
          {featured && (
            <div className="lg:col-span-7">
              <ProjectCard project={featured} isFeatured={true} />
            </div>
          )}

          {/* Right Column: Secondary Projects via .map() */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondary.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
