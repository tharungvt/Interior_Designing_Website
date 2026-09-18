import homeHero from "../assets/home/Home-Hero.png";
import home01 from "../assets/home/home-interior-01.png";
import home02 from "../assets/home/home-interior-02.png";
import home03 from "../assets/home/home-interior-03.png";
import home04 from "../assets/home/home-interior-04.png";
import home05 from "../assets/home/home-interior-05.png";
import home06 from "../assets/home/home-interior-06.png";
import home07 from "../assets/home/home-interior-07.png";
import home08 from "../assets/home/home-interior-08.png";

// About page images
import beforeAfter from "../assets/about/before-after.jpg";
import ctaDeskJpg from "../assets/about/cta-desk.jpg";
import ctaDeskPng from "../assets/about/cta-desk.png";
import heroLivingRoom from "../assets/about/hero-living-room.png";
import heroPenthouse from "../assets/about/hero-penthouse.jpg";
import introKitchen from "../assets/about/intro-kitchen.jpg";
import introMaterialsJpg from "../assets/about/intro-materials.jpg";
import introMaterialsPng from "../assets/about/intro-materials.png";
import projectWorkspace from "../assets/about/project-workspace.png";
import whyBeforeAfter from "../assets/about/why-before-after.png";

/**
 * Registry of approved local assets.
 */
export const LOCAL_IMAGES = {
  // Home
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

  // About
  "before-after": beforeAfter,
  "before-after.jpg": beforeAfter,

  "cta-desk": ctaDeskPng,
  "cta-desk.jpg": ctaDeskJpg,
  "cta-desk.png": ctaDeskPng,

  "hero-living-room": heroLivingRoom,
  "hero-living-room.png": heroLivingRoom,

  "hero-penthouse": heroPenthouse,
  "hero-penthouse.jpg": heroPenthouse,

  "intro-kitchen": introKitchen,
  "intro-kitchen.jpg": introKitchen,

  "intro-materials": introMaterialsPng,
  "intro-materials.jpg": introMaterialsJpg,
  "intro-materials.png": introMaterialsPng,

  "project-workspace": projectWorkspace,
  "project-workspace.png": projectWorkspace,

  "why-before-after": whyBeforeAfter,
  "why-before-after.png": whyBeforeAfter,
};

/**
 * Resolves an image value to a valid img src.
 */
export function resolveImage(imageSource, fallback = homeHero) {
  if (!imageSource) {
    return fallback;
  }

  if (typeof imageSource !== "string") {
    return imageSource;
  }

  const trimmed = imageSource.trim();

  // Remote URL, absolute path, or data URI
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("/") ||
    trimmed.startsWith("data:")
  ) {
    return trimmed;
  }

  // Local asset
  if (LOCAL_IMAGES[trimmed]) {
    return LOCAL_IMAGES[trimmed];
  }

  return fallback;
}