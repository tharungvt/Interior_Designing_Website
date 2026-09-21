import { useState, useMemo } from "react";
import TestimonialCard from "./TestimonialCard";
import FeaturedTestimonialCard from "./FeaturedTestimonialCard";

export default function TestimonialsGridSection({
  sectionHeader,
  filters,
  featuredStory,
  testimonials,
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  // Dynamic filter computation
  const filteredTestimonials = useMemo(() => {
    if (!testimonials) return [];
    if (activeFilter === "all") return testimonials;
    return testimonials.filter(
      (item) => item.category?.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [testimonials, activeFilter]);

  // Determine whether to display the featured story under current filter
  const showFeaturedStory = useMemo(() => {
    if (!featuredStory) return false;
    if (activeFilter === "all") return true;
    return featuredStory.category?.toLowerCase() === activeFilter.toLowerCase();
  }, [featuredStory, activeFilter]);

  return (
    <section
      id="testimonials-grid-section"
      className="pt-7 sm:pt-9 lg:pt-10 pb-12 sm:pb-14 lg:pb-16 bg-[#F1F5F4] text-[#17252C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            {sectionHeader?.eyebrow && (
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-6 h-px bg-[#3C7188]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
                  {sectionHeader.eyebrow}
                </span>
              </div>
            )}

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252C] leading-[1.14] whitespace-pre-line mb-3">
              {sectionHeader?.title || "Thoughtful Design, Experienced Firsthand"}
            </h1>

            {sectionHeader?.description && (
              <p className="text-sm sm:text-base text-[#4A5F68] font-normal leading-relaxed">
                {sectionHeader.description}
              </p>
            )}
          </div>

          {/* Dynamic Filter Pills */}
          {filters && filters.length > 0 && (
            <div
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 shrink-0 md:self-end md:pb-0.5"
              role="tablist"
              aria-label="Filter testimonials by category"
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#17252C] text-white shadow-sm"
                        : "bg-white text-[#17252C] border border-[#DCE5E7] hover:bg-[#F3F0EA] hover:border-[#D8D1C6]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Featured Story (Prominent card if matching filter) */}
        {showFeaturedStory && <FeaturedTestimonialCard featured={featuredStory} />}

        {/* Dynamic 2-Column Responsive Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {filteredTestimonials.length === 0 && !showFeaturedStory && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#DCE5E7] p-8">
            <p className="text-base text-[#5F747D]">
              No testimonials found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
