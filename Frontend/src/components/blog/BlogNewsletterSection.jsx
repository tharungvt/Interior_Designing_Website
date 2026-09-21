import { useState } from "react";

export default function BlogNewsletterSection({ newsletter }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!newsletter) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      id="blog-newsletter-section"
      className="py-12 sm:py-16 bg-[#F8FAF9] border-t border-[#DCE5E7]"
      aria-label="Newsletter Subscription"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        {newsletter.eyebrow && (
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#3C7188]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188]">
              {newsletter.eyebrow}
            </span>
            <span className="w-5 h-px bg-[#3C7188]" aria-hidden="true" />
          </div>
        )}

        {/* Heading */}
        <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17252C] tracking-tight mb-3">
          {newsletter.title}
        </h2>

        {/* Description */}
        {newsletter.description && (
          <p className="text-xs sm:text-sm md:text-base text-[#4A5F68] font-normal leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8 font-sans">
            {newsletter.description}
          </p>
        )}

        {/* Input Form */}
        {submitted ? (
          <div className="p-4 rounded-full bg-[#E5EEEC] text-[#17252C] text-xs sm:text-sm font-semibold inline-block border border-[#DCE5E7]">
            {newsletter.successMessage || "Thank you for subscribing!"}
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder || "Your email address"}
              className="w-full sm:flex-1 px-5 py-3 rounded-full bg-white border border-[#DCE5E7] text-xs sm:text-sm text-[#17252C] placeholder-[#8A9EA6] focus:outline-none focus:border-[#3C7188] shadow-sm transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#17252C] hover:bg-[#3C7188] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-sm hover:scale-[1.02] shrink-0"
            >
              <span>{newsletter.buttonText || "Subscribe"}</span>
              <span className="ml-1.5" aria-hidden="true">
                →
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
