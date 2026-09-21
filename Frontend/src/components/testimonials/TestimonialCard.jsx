import { useState } from "react";

function StarRating({ count = 5, ratingText = "5.0" }) {
  return (
    <div className="flex items-center gap-1.5 mb-3.5">
      <div className="flex items-center gap-0.5 text-amber-500/90" aria-label={`${count} out of 5 stars`}>
        {[...Array(count)].map((_, i) => (
          <svg
            key={i}
            className="w-3.5 h-3.5 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {ratingText && (
        <span className="text-xs font-medium text-[#5F747D] tracking-tight ml-0.5">
          {ratingText}
        </span>
      )}
    </div>
  );
}

export default function TestimonialCard({ testimonial }) {
  const [imageError, setImageError] = useState(false);

  if (!testimonial) return null;

  return (
    <article
      id={`testimonial-${testimonial.id}`}
      className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-[#DCE5E7] shadow-[0_2px_12px_-2px_rgba(23,37,44,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(23,37,44,0.08)] transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Star Rating (Secondary) */}
        <StarRating count={testimonial.stars || 5} ratingText={testimonial.rating || "5.0"} />

        {/* Testimonial Quote (Primary Content) */}
        <p className="font-testimonial-quote text-[20px] leading-[29px] text-[#17252C] mb-5 font-medium">
          “{testimonial.quote}”
        </p>
      </div>

      {/* Author Details */}
      <div className="pt-3.5 border-t border-[#DCE5E7]/70 flex items-center gap-3">
        {testimonial.image && !imageError ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            onError={() => setImageError(true)}
            className="w-10 h-10 rounded-full object-cover border border-[#DCE5E7] shrink-0"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#EEF4F3] border border-[#DCE5E7] flex items-center justify-center text-xs font-bold text-[#17252C] shrink-0 tracking-wider">
            {testimonial.initials || testimonial.name.slice(0, 2).toUpperCase()}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-[15px] font-bold text-[#17252C] font-sans truncate tracking-tight">
            {testimonial.name}
          </h3>
          <p className="text-xs text-[#5F747D] font-normal truncate mt-0.5">
            {testimonial.categoryLabel || testimonial.category}
          </p>
        </div>
      </div>
    </article>
  );
}
