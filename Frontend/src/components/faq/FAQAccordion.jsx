import { useState } from "react";
import { Link } from "react-router-dom";
import FAQItem from "./FAQItem";

export default function FAQAccordion({
  editorialContent,
  faqItems,
}) {
  const [openId, setOpenId] = useState(faqItems?.[0]?.id || null);

  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const guidance = editorialContent?.guidanceCard;

  return (
    <section
      id="faq-accordion-section"
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 sm:mb-8"
      aria-label="FAQ Questions and Answers"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Sticky on desktop so it stays in view while the right-side accordion scrolls */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start">
          <div className="space-y-4 sm:space-y-5">
            {/* Small Label */}
            {editorialContent.badge && (
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] block">
                {editorialContent.badge}
              </span>
            )}

            {/* Large Serif Heading */}
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#17252C] tracking-tight leading-[1.18]">
              {editorialContent.heading}
            </h2>

            {/* Supporting Explanation */}
            <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed max-w-md font-sans">
              {editorialContent.description}
            </p>

            {/* Redesigned Left Information Block: Clean, architectural, subtle background treatment */}
            {guidance && (
              <div className="bg-[#EBF1EF]/70 border border-[#DCE5E7] rounded-xl p-5 sm:p-6 transition-colors">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3C7188] mb-1.5 block">
                  {guidance.eyebrow || "FAQ"}
                </span>

                <h3 className="font-editorial text-base sm:text-lg font-bold text-[#17252C] tracking-tight leading-snug mb-2">
                  {guidance.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#4A5F68] font-normal leading-relaxed mb-4 font-sans">
                  {guidance.text}
                </p>

                <div className="pt-3 border-t border-[#DCE5E7]/80">
                  <Link
                    to={guidance.ctaHref || "/contact"}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252C] hover:text-[#3C7188] transition-colors group"
                  >
                    <span>{guidance.ctaText || "Need more information?"}</span>
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT COLUMN: Controlled max width, vertical accordion list with clean dividers */}
        <div className="lg:col-span-7 w-full max-w-3xl">
          {faqItems && faqItems.length > 0 ? (
            <div
              className="border-t border-[#DCE5E7]"
              role="region"
              aria-label="Accordion Questions List"
            >
              {faqItems.map((item, index) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  index={index}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-[#DCE5E7] p-8 text-center">
              <p className="text-sm text-[#5F747D]">
                No questions found in this category. Please select another category or contact our team directly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
