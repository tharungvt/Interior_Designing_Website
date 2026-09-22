export function handleServicesSectionLink(event, href) {
  if (!href?.startsWith("#")) return;

  const targetId = href.slice(1);
  const element = document.getElementById(targetId);
  if (!element) return;

  event.preventDefault();
  const headerEl =
    element.querySelector("[data-anchor-target]") ||
    element.querySelector("h2") ||
    element;
  const y =
    headerEl.getBoundingClientRect().top + window.pageYOffset - (72 + 20);

  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  window.history.pushState(null, "", href);
}