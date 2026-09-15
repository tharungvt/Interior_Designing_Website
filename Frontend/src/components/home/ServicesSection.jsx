import { resolveImage } from "../../utils/imageResolver";
import Button from "../Button";

/**
 * Reusable ServiceCard Component
 *
 * Renders both the flagship featured layout and the secondary stacked layout
 * based on the `isFeatured` flag.
 */
export function ServiceCard({ service, isFeatured = false }) {
  if (!service) return null;

  const featureTags = service.features || service.tags || [];
  const targetLink = service.link || service.cta?.href || "/services";

  if (isFeatured) {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden border border-[#D7E3E5] shadow-atelier-subtle hover:shadow-card-warm transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          <div className="relative aspect-[16/10] sm:aspect-[16/9] min-h-[220px] max-h-[340px] overflow-hidden">
            <img 
              alt={service.title || "Residential Living Room Interior"} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src={resolveImage(service.image)} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent"></div>
            {service.category && (
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-brand-charcoal shadow-sm border border-brand-border">
                  {service.category}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-7">
            {service.category && (
              <div className="inline-flex items-center gap-1.5 text-brand-mineral text-xs font-bold uppercase tracking-wider mb-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="break-words">{service.category}</span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-brand-charcoal tracking-tight mb-2.5 font-sans break-words">
              {service.title}
            </h3>
            <p className="text-brand-mutedcharcoal text-sm leading-relaxed mb-5 font-sans break-words">
              {service.description}
            </p>
            {featureTags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-borderlight">
                {featureTags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-[#F1F5F4] border border-[#D7E3E5] text-[11px] font-medium text-brand-mutedcharcoal break-words">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-brand-borderlight/60">
          <span className="text-xs font-semibold text-brand-charcoal uppercase tracking-wider group-hover:underline break-words">
            {service.cta?.label || "EXPLORE RESIDENTIAL WORK"}
          </span>
     <Button
        href={targetLink}
        ariaLabel={service.cta?.label || `Explore ${service.title}`}
        variant="circle-arrow"
        className="w-10 h-10 bg-white/90 text-brand-charcoal hover:bg-brand-charcoal hover:text-white group-hover:scale-105"
      />
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#D7E3E5] shadow-atelier-subtle hover:shadow-card-warm transition-all duration-300 flex flex-col sm:flex-row flex-1">
      <div className="sm:w-5/12 min-h-[190px] overflow-hidden relative shrink-0 aspect-[4/3] sm:aspect-auto">
        <img 
          alt={service.title || "Service workplace/interior"} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          src={resolveImage(service.image)} 
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-brand-charcoal/30 via-transparent to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {service.category && (
            <div className="flex items-center gap-2 text-brand-mineral text-xs font-bold uppercase tracking-wider mb-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="break-words">{service.category}</span>
            </div>
          )}
          <h3 className="text-xl font-bold text-brand-charcoal tracking-tight mb-2 font-sans break-words">
            {service.title}
          </h3>
          <p className="text-brand-mutedcharcoal text-xs sm:text-sm leading-relaxed mb-4 font-sans break-words">
            {service.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-brand-borderlight">
          <span className="text-xs font-semibold text-brand-charcoal break-words">
            {service.cta?.label || "Learn More"}
          </span>
          <Button
            href={targetLink}
            ariaLabel={service.cta?.label || `Explore ${service.title}`}
            variant="circle-arrow"
            className="w-8 h-8 bg-[#F1F5F4] text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
          />
        </div>
      </div>
    </div>
  );
}

function ServicesSection({ content, services }) {
  const data = services || content;
  if (!data) return null;

  const rawItems = Array.isArray(data) ? data : (data.items || []);
  const featured = data.featured || rawItems.find((i) => i.featured) || rawItems[0];
  const secondary = data.secondary || rawItems.filter((i) => i.id !== featured?.id);
  const cta = data.cta || data.viewAllLink;

  return (
    <section className="py-16 lg:py-24 border-b border-brand-border bg-[#EEF4F4] scroll-mt-20" id="services" data-purpose="services-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            {data.eyebrow && (
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-slate block font-sans">
                  {data.eyebrow}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl text-brand-charcoal font-bold tracking-tight mb-3 font-editorial break-words">
              {data.heading || "Design Solutions for Every Space"}
            </h2>
            <p className="text-brand-mutedcharcoal text-sm sm:text-base leading-relaxed font-sans break-words">
              {data.description || "Interior design services for residential and commercial spaces, planned around your requirements."}
            </p>
          </div>
          {cta?.label && (
            <Button
              href={cta.href || "/services"}
              label={cta.label}
              variant="header"
              className="self-start md:self-auto"
            />
          )}
        </div>

        {/* Asymmetric Grid with .map() mapping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Flagship Left Card */}
          {featured && (
            <div className="lg:col-span-6">
              <ServiceCard service={featured} isFeatured={true} />
            </div>
          )}

          {/* Right Column: Stacked Secondary Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {secondary.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isFeatured={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
