import homeHero from "../assets/home/Home-Hero.png";
import home01 from "../assets/home/home-interior-01.png";
import home02 from "../assets/home/home-interior-02.png";
import home03 from "../assets/home/home-interior-03.png";
import home04 from "../assets/home/home-interior-04.png";
import home05 from "../assets/home/home-interior-05.png";
import home06 from "../assets/home/home-interior-06.png";
import home07 from "../assets/home/home-interior-07.png";
import home08 from "../assets/home/home-interior-08.png";
import ctaDesk from "../assets/cta-desk.png";

/**
 * Registry of approved local assets for the interior design studio.
 * Supports mapping by filename, short identifier, or direct imported asset.
 */
export const LOCAL_IMAGES = {
  "home-hero": homeHero,
  "Home-Hero.png": homeHero,
  "home-interior-01": home01,
  "home-interior-01.png": home01,
  "home-interior-02": home02,
  "home-interior-02.png": home02,
  "home-interior-03": home03,
  "home-interior-03.png": home03,
  "home-interior-04": home04,
  "home-interior-04.png": home04,
  "home-interior-05": home05,
  "home-interior-05.png": home05,
  "home-interior-06": home06,
  "home-interior-06.png": home06,
  "home-interior-07": home07,
  "home-interior-07.png": home07,
  "home-interior-08": home08,
  "home-interior-08.png": home08,
  "cta-desk": ctaDesk,
  "cta-desk.png": ctaDesk,
};

/**
 * Resolves an image value to a valid img src attribute.
 *
 * Architecture readiness:
 * - When an Admin Panel / Backend API provides a remote URL (https://...), absolute path (/uploads/...),
 *   or data URI (data:...), it is returned immediately.
 * - When given a local filename or key, it resolves to the bundled local asset from Frontend/src/assets/home/.
 * - Falls back cleanly if the image is undefined or unavailable.
 *
 * @param {string|object} imageSource - The image identifier, URL, or imported module
 * @param {string|object} fallback - Optional fallback image
 * @returns {string} The resolved image src
 */
export function resolveImage(imageSource, fallback = homeHero) {
  if (!imageSource) return fallback;
  if (typeof imageSource !== "string") return imageSource;

  const trimmed = imageSource.trim();

  // If already a remote URL, absolute path, or base64 data URI
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("data:")
  ) {
    return trimmed;
  }

  // If matches a registered local asset key
  if (LOCAL_IMAGES[trimmed]) {
    return LOCAL_IMAGES[trimmed];
  }

  return fallback;
}
