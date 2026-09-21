import { useState, useEffect } from "react";
import blogPageContent from "../data/blogPageContent";
import BlogCategoryFilter from "../components/blog/BlogCategoryFilter";
import BlogGridSection from "../components/blog/BlogGridSection";
import BlogMethodologySection from "../components/blog/BlogMethodologySection";
import Button from "../components/Button";

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Blog / Design Ideas & Insights | Interior Design Studio";
  }, []);

  const {
    filters,
    latestInsightsHeader,
    latestPosts,
    masterclass,
    methodology,
    cta,
  } = blogPageContent;

  return (
    <main
      className="blog-page min-h-screen bg-[#F1F5F4] text-[#17252C] selection:bg-[#3C7188] selection:text-white pt-6 sm:pt-8 lg:pt-10"
      id="main-content"
    >
      {/* 1. Dynamic Category / Topic Filters */}
      <BlogCategoryFilter
        filters={filters}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* 2. Blog Content / Cards Grid & Masterclass Guide Banner */}
      <BlogGridSection
        header={latestInsightsHeader}
        posts={latestPosts}
        activeFilter={activeFilter}
        masterclass={masterclass}
      />

      {/* 3. Studio Methodology Section */}
      <BlogMethodologySection methodology={methodology} />

      {/* 4. Global Bottom Call-To-Action */}
      {cta && (
        <section
          id="blog-cta-section"
          className="py-12 sm:py-16 lg:py-20 bg-[#F1F5F4]"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-3xl p-6 sm:p-9 lg:p-12 text-center shadow-[0_4px_24px_-4px_rgba(23,37,44,0.06)] flex flex-col items-center">
              {cta.eyebrow && (
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-5 h-px bg-[#3C7188]" aria-hidden="true" />
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
                    {cta.eyebrow}
                  </span>
                  <span className="w-5 h-px bg-[#3C7188]" aria-hidden="true" />
                </div>
              )}
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252C] max-w-3xl leading-[1.15] mb-3">
                {cta.title}
              </h2>
              {cta.description && (
                <p className="text-xs sm:text-sm md:text-base text-[#4A5F68] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-sans">
                  {cta.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                {cta.primaryCta && (
                  <Button
                    href={cta.primaryCta.href || "/contact"}
                    variant="primary"
                    label={cta.primaryCta.label}
                    showArrow={true}
                    className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold"
                  />
                )}
                {cta.secondaryCta && (
                  <Button
                    href={cta.secondaryCta.href || "/contact?type=quote"}
                    variant="secondary"
                    label={cta.secondaryCta.label}
                    showArrow={true}
                    className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold bg-white text-[#17252C] border border-[#DCE5E7] hover:bg-white/90"
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
