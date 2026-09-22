export default function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}) {
  if (!item) return null;

  // Generate dynamic 2-digit number (01, 02, etc.)
  const formattedNumber = String(index + 1).padStart(2, "0");
  const headingId = `faq-heading-${item.id}`;
  const answerId = `faq-answer-${item.id}`;

  return (
    <div
      className={`border-b border-[#DCE5E7] transition-colors duration-150 ${
        isOpen ? "bg-[#EBF1EF]/40" : "hover:bg-[#EBF1EF]/20"
      }`}
    >
      <button
        type="button"
        id={headingId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="w-full py-2.5 sm:py-3 px-2 sm:px-2.5 text-left flex items-start justify-between gap-3 group cursor-pointer transition-colors"
      >
        <div className="flex items-start gap-2.5 sm:gap-3.5 flex-1 min-w-0">
          {/* Dynamically formatted number (01, 02, etc.) */}
          <span
            className="text-[12px] font-medium font-sans tracking-[0.04em] text-[#5F747D] pt-0.5 shrink-0 select-none w-5"
            aria-hidden="true"
          >
            {formattedNumber}
          </span>

          <div className="flex-1 min-w-0">
            {/* Category label / topic tag directly above question */}
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#5F747D] block mb-0.5 leading-none">
              {item.topic || item.category}
            </span>

            {/* Question */}
            <h3
              className={`font-editorial text-[16px] sm:text-[17px] font-medium tracking-[-0.005em] transition-colors leading-[1.4] sm:leading-[1.35] ${
                isOpen
                  ? "text-[#3C7188]"
                  : "text-[#17252C] group-hover:text-[#3C7188]"
              }`}
            >
              {item.question}
            </h3>
          </div>
        </div>

        {/* Expand / Collapse Icon (+ / −) */}
        <div
          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ml-2 mt-0.5 ${
            isOpen
              ? "bg-[#17252C] text-white border-[#17252C] rotate-180"
              : "bg-white text-[#17252C] border-[#DCE5E7] group-hover:border-[#3C7188] group-hover:text-[#3C7188]"
          }`}
          aria-hidden="true"
        >
          <span className="text-xs sm:text-sm leading-none font-light">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      {/* Answer container: compact editorial rhythm with trimmed vertical padding */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={headingId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-3 pt-0.5" : "grid-rows-[0fr] opacity-0 pb-0 pt-0"
        }`}
      >
        <div className="overflow-hidden pl-7 sm:pl-9 pr-3 sm:pr-5">
          <p className="text-[14px] sm:text-[15px] text-[#4A5F68] font-normal leading-[1.6] sm:leading-[1.65] max-w-[600px] font-sans border-l-2 border-[#3C7188]/40 pl-2.5 sm:pl-3">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
