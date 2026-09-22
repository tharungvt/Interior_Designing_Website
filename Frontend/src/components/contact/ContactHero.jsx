import Button from "../Button";

export default function ContactHero({ content, onSelectAction }) {
  if (!content) return null;

  return (
    <div className="max-w-3xl mb-8 sm:mb-10">
      {/* Eyebrow */}
      {content.eyebrow && (
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5F747D] block mb-2 font-sans">
          {content.eyebrow}
        </span>
      )}

      {/* Main Serif Editorial Heading */}
      <h1
        id="contact-hero-heading"
        className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#17252C] tracking-tight leading-[1.12] mb-3 break-words"
      >
        {content.heading}
      </h1>

      {/* Supporting Text */}
      <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed max-w-2xl font-sans">
        {content.description}
      </p>

      {(content.primaryAction || content.secondaryAction) && (
        <div className="flex flex-wrap items-center gap-3 mt-5">
          {content.primaryAction && (
            <Button
              href={content.primaryAction.type === "quote" ? "/contact?type=quote" : "/contact?type=consultation"}
              label={content.primaryAction.label}
              variant="primary"
              onClick={() => onSelectAction?.(content.primaryAction.type)}
            />
          )}
          {content.secondaryAction && (
            <Button
              href={content.secondaryAction.type === "quote" ? "/contact?type=quote" : "/contact?type=consultation"}
              label={content.secondaryAction.label}
              variant="secondary"
              onClick={() => onSelectAction?.(content.secondaryAction.type)}
            />
          )}
        </div>
      )}
    </div>
  );
}
