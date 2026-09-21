import { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const [imgError, setImgError] = useState(false);

  if (!post) return null;

  const articleRoute = `/blog/${post.slug || post.id}`;

  return (
    <article
      id={`blog-card-${post.id}`}
      className="bg-white rounded-2xl border border-[#DCE5E7] shadow-[0_2px_14px_-2px_rgba(23,37,44,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(23,37,44,0.08)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
    >
      <div>
        {/* Image Container with Badge */}
        <Link to={articleRoute} className="block relative aspect-[16/10] overflow-hidden bg-[#E5EEEC]">
          {post.image && !imgError ? (
            <img
              src={post.image}
              alt={post.alt || post.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#5F747D] bg-[#E5EEEC] text-xs">
              Interior Design Image
            </div>
          )}

          {/* Floating Badge (e.g. Design Ideas, Lighting, Materials) */}
          {post.badge && (
            <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#17252C] text-[10px] sm:text-[11px] font-semibold tracking-wider shadow-sm border border-[#DCE5E7]/80">
                {post.badge}
              </span>
            </div>
          )}
        </Link>

        {/* Content Container */}
        <div className="p-5 sm:p-6">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3C7188] mb-2.5">
            <span>{post.category}</span>
            <span className="text-[#A3B8BE]">•</span>
            <span className="text-[#5F747D]">{post.readTime}</span>
          </div>

          {/* Post Title */}
          <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#17252C] leading-snug tracking-tight mb-2.5 group-hover:text-[#3C7188] transition-colors">
            <Link to={articleRoute}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          {post.description && (
            <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed line-clamp-3 font-sans">
              {post.description}
            </p>
          )}
        </div>
      </div>

      {/* Footer Read More link navigating to the unique article route */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
        <Link
          to={articleRoute}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252C] group-hover:text-[#3C7188] transition-colors"
        >
          <span>{post.readMoreText || "Read Article"}</span>
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
