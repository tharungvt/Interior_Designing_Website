import { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogFeaturedSection({ featuredPost }) {
  const [imgError, setImgError] = useState(false);

  if (!featuredPost) return null;

  const articleRoute = `/blog/${featuredPost.slug || featuredPost.id}`;

  return (
    <section
      id="blog-featured-section"
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 sm:mb-12"
      aria-label="Featured Blog Article"
    >
      <article
        id={`featured-${featuredPost.id}`}
        className="bg-white rounded-2xl sm:rounded-3xl border border-[#DCE5E7] shadow-[0_4px_24px_-4px_rgba(23,37,44,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(23,37,44,0.1)] group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Featured Image with Badge */}
          <Link
            to={articleRoute}
            className="lg:col-span-7 relative overflow-hidden min-h-[280px] sm:min-h-[380px] lg:min-h-[440px] bg-[#E5EEEC] block"
          >
            {featuredPost.image && !imgError ? (
              <img
                src={featuredPost.image}
                alt={featuredPost.alt || featuredPost.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#5F747D] bg-[#E5EEEC]">
                <span>Architecture Image</span>
              </div>
            )}

            {/* Top-Left FEATURED pill */}
            {featuredPost.badge && (
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#17252C]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase shadow-sm">
                  {featuredPost.badge}
                </span>
              </div>
            )}
          </Link>

          {/* Right Column: Featured Meta, Title, Excerpt, CTA */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              {/* Category and Read Time Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#3C7188] mb-3 sm:mb-4">
                <span>{featuredPost.category}</span>
                <span className="text-[#A3B8BE]">•</span>
                <span className="text-[#5F747D]">{featuredPost.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17252C] leading-[1.18] tracking-tight mb-3 sm:mb-4 group-hover:text-[#3C7188] transition-colors">
                <Link to={articleRoute}>
                  {featuredPost.title}
                </Link>
              </h2>

              {/* Description Excerpt */}
              <p className="text-sm sm:text-base text-[#4A5F68] font-normal leading-relaxed mb-6 font-sans">
                {featuredPost.description}
              </p>
            </div>

            {/* Bottom Row: Read Article Link & Studio Lead Curated */}
            <div className="pt-5 border-t border-[#DCE5E7]/80 flex items-center justify-between gap-4">
              <Link
                to={articleRoute}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#17252C] group-hover:text-[#3C7188] transition-colors"
              >
                <span>{featuredPost.readMoreText || "Read Article"}</span>
                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>

              {featuredPost.authorNote && (
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium text-[#5F747D]">
                  {featuredPost.authorNote}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
