import { Link } from "react-router-dom";

/**
 * Reusable Button Component
 *
 * Implements the design-approved button variants:
 * - primary: Charcoal background with subtle forward-arrow icon and atelier glow
 * - secondary: Frosted white pill with subtle border
 * - navbar / header: Compact header CTA variant
 * - outline: Clean bordered pill
 * - circle-arrow / icon: Circular floating architectural card link
 *
 * Receives:
 * - label: text inside button (or children)
 * - href: link destination (renders <a> or Link if provided, else <button>)
 * - variant: "primary" | "secondary" | "navbar" | "outline" | "circle-arrow"
 * - icon: optional custom icon element (or boolean showArrow)
 * - className: additional layout / positioning classes
 */
function Button({
  label,
  children,
  href,
  variant = "primary",
  icon,
  showArrow = true,
  className = "",
  type = "button",
  onClick,
  target,
  rel,
  ariaLabel,
  ...rest
}) {
  const content = label || children;

  // Variant class maps matching the exact approved styles
  const variantClasses = {
    primary:
      "inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-mineral text-white font-medium tracking-wide text-xs sm:text-sm px-6 sm:px-7 py-3.5 rounded-full shadow-glow-atelier transition-all hover:scale-[1.02] text-center cursor-pointer",
    secondary:
      "inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-brand-border/80 hover:border-brand-slate text-brand-charcoal bg-white/90 backdrop-blur-md hover:bg-white font-medium tracking-wide text-xs sm:text-sm transition-all shadow-atelier-subtle text-center cursor-pointer",
    navbar:
      "inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-mineral text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-glow-atelier hover:scale-[1.02] cursor-pointer shrink-0 text-center whitespace-nowrap",
    header:
      "inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-brand-mineral text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all shadow-glow-atelier hover:scale-[1.02] cursor-pointer shrink-0 text-center whitespace-nowrap",
    outline:
      "inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-brand-border text-brand-charcoal bg-white hover:bg-brand-surface font-medium tracking-wide text-xs sm:text-sm transition-colors text-center cursor-pointer",
    "circle-arrow":
      "w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-brand-border/80 flex items-center justify-center text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all shadow-sm cursor-pointer shrink-0",
  };

  const baseStyle = variantClasses[variant] || variantClasses.primary;
  const combinedClassName = `${baseStyle} ${className}`.trim();

  // Default Right Arrow Icon (Primary & Navbar)
  const defaultArrow = (
    <svg
      className="w-3.5 h-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Diagonal Arrow for Secondary
  const diagonalArrow = (
    <svg
      className="w-3.5 h-3.5 text-brand-slate shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const renderedIcon =
    icon !== undefined
      ? icon
      : showArrow
      ? variant === "primary" || variant === "navbar" || variant === "header"
        ? defaultArrow
        : variant === "secondary"
        ? diagonalArrow
        : variant === "circle-arrow"
        ? defaultArrow
        : null
      : null;

  const innerContent = (
    <>
      {content && <span>{content}</span>}
      {renderedIcon}
    </>
  );

  if (href) {
    const isInternalLink = (href.startsWith("/") || href.startsWith("#")) && !href.startsWith("//");

    if (isInternalLink) {
      return (
        <Link
          to={href}
          className={combinedClassName}
          onClick={onClick}
          aria-label={ariaLabel || (typeof content === "string" ? content : undefined)}
          {...rest}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-label={ariaLabel || (typeof content === "string" ? content : undefined)}
        {...rest}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel || (typeof content === "string" ? content : undefined)}
      {...rest}
    >
      {innerContent}
    </button>
  );
}

export default Button;
