export default function ContactFormSuccess({
  name,
  enquiryType,
  onReset,
}) {
  const getSubheading = () => {
    if (enquiryType === "quote") return "Quotation Request Received";
    if (enquiryType === "consultation") return "Consultation Request Received";
    return "Enquiry Received";
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="p-8 sm:p-10 rounded-xl bg-[#F1F5F4] border border-[#DCE5E7] text-center space-y-5 animate-fadeIn"
    >
      <div className="w-12 h-12 rounded-full bg-[#17252C] text-white flex items-center justify-center mx-auto shadow-sm">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5F747D] block">
          {getSubheading()}
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#17252C] tracking-tight">
          Thank you{name ? `, ${name}` : ""}.
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5F68] max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. We&apos;ve received your enquiry and our team will get back to you shortly.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center px-6 py-2.5 bg-[#17252C] hover:bg-[#283E49] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#17252C] focus:ring-offset-2"
        >
          Send Another Enquiry
        </button>
      </div>
    </div>
  );
}
