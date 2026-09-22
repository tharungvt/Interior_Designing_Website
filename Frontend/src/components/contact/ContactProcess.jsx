export default function ContactProcess({ processSteps }) {
  if (!processSteps) return null;

  return (
    <section
      id="contact-process"
      aria-labelledby="contact-process-heading"
      className="py-12 sm:py-16 bg-white border-t border-[#DCE5E7]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          {processSteps.eyebrow && (
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5F747D] block mb-2 font-sans">
              {processSteps.eyebrow}
            </span>
          )}

          <h2
            id="contact-process-heading"
            className="font-editorial text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#17252C] tracking-tight leading-tight mb-2"
          >
            {processSteps.heading}
          </h2>

          <p className="text-xs sm:text-sm text-[#4A5F68] leading-relaxed max-w-xl font-sans">
            {processSteps.description}
          </p>
        </div>

        {/* 4 Architectural Process Steps: Unboxed editorial layout with large numbers and top dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.steps.map((step, idx) => (
            <div
              key={step.number || idx}
              className="border-t border-[#DCE5E7] pt-5"
            >
              <span className="font-editorial text-2xl sm:text-3xl font-light text-[#5F747D] block mb-2.5">
                {step.number}
              </span>

              <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#17252C] tracking-tight mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#4A5F68] leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
