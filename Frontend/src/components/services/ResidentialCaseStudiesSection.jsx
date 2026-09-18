import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

export default function ResidentialCaseStudiesSection({ content }) {
  if (!content) return null;

  const { eyebrow, viewAllLink, items = [] } = content;

  return (
    <section
      className="py-16 sm:py-20 bg-white border-y border-brand-border"
      id="services-case-studies"
      aria-label="Selected Case Studies"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-0.5 bg-brand-mineral" />
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-slate">
              {eyebrow}
            </h2>
          </div>

          {viewAllLink && (
            <Button
              href={viewAllLink.href}
              label={viewAllLink.label}
              variant="outline"
              className="!text-xs !py-2 !px-4"
            />
          )}
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F1F5F4] rounded-2xl border border-brand-border overflow-hidden flex flex-col sm:flex-row items-stretch group shadow-sm hover:shadow-card-warm transition-all duration-300"
              id={`case-study-${item.id}`}
            >
              {/* Thumbnail */}
              <div className="sm:w-2/5 min-h-[200px] sm:min-h-[auto] relative overflow-hidden bg-brand-stone shrink-0">
                <img
                  src={resolveImage(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Information */}
              <div className="sm:w-3/5 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-mineral block mb-2 font-mono">
                    {item.category}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-brand-charcoal tracking-tight mb-2 group-hover:text-brand-mineral transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-mutedcharcoal font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center justify-between">
                  <Button
                    href={item.link?.href || "/#projects"}
                    label={item.link?.label || "View Project"}
                    variant="navbar"
                    className="!text-[11px] !py-2 !px-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
