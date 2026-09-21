import { useState } from "react";

export default function FeaturedTestimonialCard({ featured }) {
  const [imgError, setImgError] = useState(false);

  if (!featured) return null;

  return (
    <article
      id="featured-client-story"
      className="bg-white rounded-2xl border border-[#DCE5E7] shadow-[0_4px_20px_-4px_rgba(23,37,44,0.06)] overflow-hidden transition-all duration-300 mb-6 sm:mb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Client Credentials & Project Info */}
        <div className="lg:col-span-4 bg-[#F8FAF9] p-5 sm:p-6 lg:p-7 border-b lg:border-b-0 lg:border-r border-[#DCE5E7] flex flex-col justify-between">
          <div>
            {/* Rating Stars & Score */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 text-amber-500" aria-label="5 out of 5 stars">
                {[...Array(featured.stars || 5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-[#17252C] tracking-tight">
                {featured.rating || "5.0 / 5.0"}
              </span>
            </div>

            {/* Client Name & Project Details */}
            <h3 className="text-lg sm:text-xl font-bold text-[#17252C] font-sans mb-1">
              {featured.name}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3C7188] mb-1">
              {featured.categoryLabel}
            </p>
            <p className="text-xs text-[#5F747D] font-medium">
              {featured.project}
            </p>
          </div>

          {/* Project or Avatar Thumbnail Preview */}
          <div className="mt-5 pt-4 border-t border-[#DCE5E7]/70 flex items-center gap-3">
            {featured.image && !imgError ? (
              <img
                src={featured.image}
                alt={featured.name}
                onError={() => setImgError(true)}
                className="w-11 h-11 rounded-full object-cover border border-[#DCE5E7] shrink-0"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-[#17252C] text-white flex items-center justify-center font-bold text-xs shrink-0">
                EM
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-[#17252C]">Turnkey Renovation</p>
              <p className="text-[11px] text-[#5F747D]">Manhattan, NY</p>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Testimonial Body */}
        <div className="lg:col-span-8 p-5 sm:p-6 lg:p-7 flex flex-col justify-between">
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-px bg-[#3C7188]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
                {featured.eyebrow || "FEATURED CLIENT STORY"}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="font-editorial text-lg sm:text-xl lg:text-2xl text-[#17252C] font-normal leading-relaxed mb-4 sm:mb-5">
              “{featured.quote}”
            </blockquote>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 text-xs font-medium text-[#5F747D] pt-3.5 border-t border-[#DCE5E7]/70">
            <svg
              className="w-4 h-4 text-[#3C7188] shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{featured.badge}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
