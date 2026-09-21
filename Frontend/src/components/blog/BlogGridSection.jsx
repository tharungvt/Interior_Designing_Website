import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

export default function BlogGridSection({
  header,
  posts,
  activeFilter,
  masterclass,
}) {
  const [masterclassImgError, setMasterclassImgError] = useState(false);

  // Dynamic filter logic
  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "all") return true;
    if (post.filterCategory === activeFilter) return true;
    if (post.secondaryCategories?.includes(activeFilter)) return true;
    return false;
  });

  const masterclassRoute = masterclass
    ? `/blog/${masterclass.slug || masterclass.id}`
    : "#";

  return (
    <section
      id="blog-grid-section"
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-14 sm:mb-18 lg:mb-20"
      aria-label="Curated Insights Articles"
    >
      {/* Section Header */}
      {header && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            {header.eyebrow && (
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-px bg-[#3C7188]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
                  {header.eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17252C] tracking-tight">
              {header.title}
            </h2>
          </div>

          {header.description && (
            <p className="max-w-md text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed md:text-right">
              {header.description}
            </p>
          )}
        </div>
      )}

      {/* Dynamic Articles Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-2xl border border-[#DCE5E7] p-8">
          <p className="text-sm text-[#5F747D]">
            No articles found for this topic. Select &quot;All&quot; to view all insights.
          </p>
        </div>
      )}

      {/* Masterclass Guide Card Banner */}
      {masterclass && (
        <article
          id={`banner-${masterclass.id}`}
          className="mt-10 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl border border-[#DCE5E7] shadow-[0_4px_20px_-4px_rgba(23,37,44,0.06)] overflow-hidden group transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(23,37,44,0.1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-3 block">
                  {masterclass.eyebrow}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl lg:text-3xl font-bold text-[#17252C] leading-snug tracking-tight mb-3 sm:mb-4 group-hover:text-[#3C7188] transition-colors">
                  <Link to={masterclassRoute}>
                    {masterclass.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#4A5F68] font-normal leading-relaxed mb-6 font-sans">
                  {masterclass.description}
                </p>
              </div>

              <div>
                <Link
                  to={masterclassRoute}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#17252C] group-hover:text-[#3C7188] transition-colors"
                >
                  <span>{masterclass.readMoreText}</span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <Link
              to={masterclassRoute}
              className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full bg-[#E5EEEC] overflow-hidden order-1 lg:order-2 block"
            >
              {masterclass.image && !masterclassImgError ? (
                <img
                  src={masterclass.image}
                  alt={masterclass.alt || masterclass.title}
                  onError={() => setMasterclassImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#5F747D] bg-[#E5EEEC] text-xs">
                  Masterclass Blueprint Image
                </div>
              )}
            </Link>
          </div>
        </article>
      )}
    </section>
  );
}
