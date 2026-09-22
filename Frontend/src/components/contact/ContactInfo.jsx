export default function ContactInfo({ studioInfo }) {
  if (!studioInfo) return null;

  const { details, whatsapp } = studioInfo;

  return (
    <div className="space-y-8">
      {/* Studio Heading & Description */}
      <div>
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5F747D] block mb-2 font-sans">
          {studioInfo.eyebrow || "STUDIO INQUIRIES"}
        </span>
        <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#17252C] tracking-tight leading-tight mb-2">
          {studioInfo.heading}
        </h2>
        <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed max-w-md">
          {studioInfo.description}
        </p>
      </div>

      {/* Editorial Studio Information with thin horizontal dividers */}
      <div className="border-t border-[#DCE5E7] divide-y divide-[#DCE5E7]">
        {/* Office Address */}
        <div className="py-4">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#5F747D] block mb-1">
            {details.address.label}
          </span>
          <a
            href={details.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[#17252C] hover:text-[#4A5F68] font-medium transition-colors block leading-relaxed"
          >
            {details.address.placeholderKey}
          </a>
        </div>

        {/* Phone Number */}
        <div className="py-4">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#5F747D] block mb-1">
            {details.phone.label}
          </span>
          <a
            href={details.phone.href}
            className="text-xs sm:text-sm text-[#17252C] hover:text-[#4A5F68] font-medium transition-colors block"
          >
            {details.phone.placeholderKey}
          </a>
        </div>

        {/* Email Address */}
        <div className="py-4">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#5F747D] block mb-1">
            {details.email.label}
          </span>
          <a
            href={details.email.href}
            className="text-xs sm:text-sm text-[#17252C] hover:text-[#4A5F68] font-medium transition-colors block break-all"
          >
            {details.email.placeholderKey}
          </a>
        </div>

        {/* Working Hours */}
        <div className="py-4">
          <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#5F747D] block mb-1">
            {details.workingHours.label}
          </span>
          <p className="text-xs sm:text-sm text-[#17252C] font-medium">
            {details.workingHours.placeholderKey}
          </p>
        </div>
      </div>

      {/* WhatsApp / Direct Messaging: Understated, clean, cool palette */}
      {whatsapp && (
        <div className="pt-2 border-t border-[#DCE5E7]">
          <div className="flex items-center gap-2 text-[#17252C] mb-1.5">
            <svg
              className="w-4 h-4 text-[#5F747D]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#17252C]">
              {whatsapp.title}
            </h3>
          </div>

          <p className="text-xs text-[#4A5F68] leading-relaxed mb-3">
            {whatsapp.description}
          </p>

          <a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252C] hover:text-[#4A5F68] transition-colors group"
          >
            <span>{whatsapp.actionLabel}</span>
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
