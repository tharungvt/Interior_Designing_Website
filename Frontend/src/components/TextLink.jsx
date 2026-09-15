import { Link } from "react-router-dom";

function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

function TextLink({ href, children, label, className = "", icon, ...props }) {
  const classes = ["atelier-text-link", className].filter(Boolean).join(" ");
  const content = (
    <>
      {children ?? label}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </>
  );

  if (isInternalHref(href)) {
    return (
      <Link to={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (!href) return null;

  return (
    <a href={href} className={classes} {...props}>
      {content}
    </a>
  );
}

export default TextLink;
