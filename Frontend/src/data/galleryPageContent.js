/**
 * Gallery Page Content Configuration
 *
 * Dedicated data source for the Gallery page.
 * All image assets are imported directly from Frontend/src/assets/gallery/
 * to guarantee 100% reliable local bundling and distinct asset association.
 */

// Gallery Grid Assets
import minimalistPenthouse from "../assets/gallery/minimalist-penthouse.png";
import fireplaceHearth from "../assets/gallery/fireplace-hearth.png";
import marbleSpa from "../assets/gallery/marble-spa.png";
import corporateAtelier from "../assets/gallery/corporate-atelier.png";
import culinaryAtelier from "../assets/gallery/culinary-atelier.jpg";
import gastronomyVenue from "../assets/gallery/gastronomy-venue.png";
import sculpturalSuite from "../assets/gallery/sculptural-suite.png";
import artisanWardrobe from "../assets/gallery/artisan-wardrobe.png";
import villaResidence from "../assets/gallery/villa-residence.png";
import recessedCove from "../assets/gallery/recessed-cove.jpg";
import tactileStone from "../assets/gallery/tactile-stone.png";
import spatialSchematics from "../assets/gallery/spatial-schematics.png";

export const galleryPageContent = {
  // Hero Section Content
  hero: {
    eyebrow: "OUR GALLERY",
    title: "Spaces, Materials & Details",
    subtitle:
      "Explore a curated collection of residential and commercial interiors, bespoke furniture, lighting choreography, and architectural material details.",
  },

  // Category Filter Configuration
  filters: [
    { id: "all", label: "All" },
    { id: "living-room", label: "Living Room" },
    { id: "bedroom", label: "Bedroom" },
    { id: "kitchen", label: "Kitchen" },
    { id: "bathroom", label: "Bathroom" },
    { id: "office", label: "Office" },
    { id: "commercial", label: "Commercial" },
    { id: "furniture", label: "Furniture" },
    { id: "lighting", label: "Lighting" },
    { id: "modern-interiors", label: "Modern Interiors" },
    { id: "luxury-interiors", label: "Luxury Interiors" },
  ],

  // 12 Gallery Items matching Figma specifications
  items: [
    {
      id: "minimalist-penthouse",
      eyebrow: "LIVING ROOM • MODERN INTERIORS",
      title: "Minimalist Penthouse Living Sanctuary",
      actionText: "View Image →",
      image: minimalistPenthouse,
      categories: ["living-room", "modern-interiors", "luxury-interiors"],
      row: 1,
      colSpan: "lg:col-span-7",
      aspectRatio: "aspect-[16/10]",
      caption: "Panoramic urban vistas anchored by low-slung minimalist seating volumes, warm oak accents, and integrated architectural fireplace hearth.",
    },
    {
      id: "fireplace-hearth",
      eyebrow: "LIVING ROOM",
      title: "Fireplace Hearth & Lounge",
      actionText: "Fireplace Hearth & Lounge →",
      hasCustomTitleAction: true,
      image: fireplaceHearth,
      categories: ["living-room"],
      row: 1,
      colSpan: "lg:col-span-5",
      aspectRatio: "aspect-[16/10]",
      caption: "Intimate reading salon with bespoke smoked oak shelving reveals, custom lounge armchairs, and honed stone hearth.",
    },
    {
      id: "marble-spa",
      eyebrow: "BATHROOM",
      title: "Marble Spa & Bath Sanctuary",
      actionText: "Marble Spa & Bath Sanctuary →",
      hasCustomTitleAction: true,
      image: marbleSpa,
      categories: ["bathroom", "luxury-interiors"],
      row: 2,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[4/3]",
      caption: "Freestanding sculptural bathtub with bookmatched Italian Calacatta marble wall cladding and diffused daylight aperture.",
    },
    {
      id: "corporate-atelier",
      eyebrow: "OFFICE • COMMERCIAL",
      title: "Corporate Executive Atelier",
      actionText: "Corporate Executive Atelier →",
      hasCustomTitleAction: true,
      image: corporateAtelier,
      categories: ["office", "commercial"],
      row: 2,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[4/3]",
      caption: "High-performance boardroom featuring tailored acoustic wall paneling, conference table, and custom task illumination.",
    },
    {
      id: "culinary-atelier",
      eyebrow: "KITCHEN • LUXURY INTERIORS",
      title: "Monolithic Culinary Atelier",
      actionText: "View Image →",
      image: culinaryAtelier,
      categories: ["kitchen", "luxury-interiors"],
      row: 2,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[4/3]",
      caption: "Dark monolithic quartzite waterfall kitchen island with integrated brass fixtures and floor-to-ceiling fluted millwork.",
    },
    {
      id: "gastronomy-venue",
      eyebrow: "COMMERCIAL • HOSPITALITY",
      title: "Atmospheric Gastronomy Venue",
      actionText: "View Image →",
      image: gastronomyVenue,
      categories: ["commercial", "lighting"],
      row: 3,
      colSpan: "lg:col-span-6",
      aspectRatio: "aspect-[16/10]",
      caption: "Fine dining hospitality environment with ambient amber chandeliers, vaulted brick ceilings, and bespoke banquette seating.",
    },
    {
      id: "sculptural-suite",
      eyebrow: "LIGHTING • LIVING ROOM",
      title: "Sculptural Ambient Living Suite",
      actionText: "View Image →",
      image: sculpturalSuite,
      categories: ["living-room", "lighting", "luxury-interiors"],
      row: 3,
      colSpan: "lg:col-span-6",
      aspectRatio: "aspect-[16/10]",
      caption: "Double-height living pavilion with floating curved staircase geometry and layered circadian cove lighting choreography.",
    },
    {
      id: "artisan-wardrobe",
      eyebrow: "FURNITURE • BESPOKE MILLWORK",
      title: "Artisan Dressing Wardrobe",
      actionText: "View Image →",
      image: artisanWardrobe,
      categories: ["furniture", "bedroom", "luxury-interiors"],
      row: 4,
      colSpan: "lg:col-span-6",
      aspectRatio: "aspect-[16/10]",
      caption: "Custom walk-in dressing suite with backlit bronze-framed glass vitrines, fluted timber drawers, and velvet jewelry partitions.",
    },
    {
      id: "villa-residence",
      eyebrow: "LUXURY INTERIORS • VILLA",
      title: "Double-Height Villa Residence",
      actionText: "View Image →",
      image: villaResidence,
      categories: ["living-room", "luxury-interiors", "modern-interiors"],
      row: 4,
      colSpan: "lg:col-span-6",
      aspectRatio: "aspect-[16/10]",
      caption: "Open-concept residential villa connecting culinary, dining, and outdoor garden terraces through expansive glazed pocket sliders.",
    },
    {
      id: "recessed-cove",
      eyebrow: "LIGHTING • ARCHITECTURAL COVE",
      title: "Recessed Cove Geometry",
      actionText: "Recessed Cove Geometry →",
      hasCustomTitleAction: true,
      image: recessedCove,
      categories: ["lighting", "modern-interiors"],
      row: 5,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[4/3]",
      caption: "Continuous organic ceiling cove with high-CRI diffused LED channels seamlessly embedded into gypsum contours.",
    },
    {
      id: "tactile-stone",
      eyebrow: "MATERIALS • NATURAL FLOORING",
      title: "Tactile Stone & European Oak",
      actionText: "Tactile Stone & European Oak →",
      hasCustomTitleAction: true,
      image: tactileStone,
      categories: ["furniture", "modern-interiors"],
      row: 5,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[4/3]",
      caption: "Material curation palette featuring wide-plank oiled European oak, brushed Roman travertine, and unbleached Belgian linen.",
    },
    {
      id: "spatial-schematics",
      eyebrow: "OFFICE • STUDIO ATELIER",
      title: "Spatial Schematics & Swatches",
      actionText: "Spatial Schematics & Swatches →",
      hasCustomTitleAction: true,
      image: spatialSchematics,
      categories: ["office"],
      row: 5,
      colSpan: "lg:col-span-4",
      aspectRatio: "aspect-[4/3]",
      caption: "Design documentation workshop with hand-drafted spatial layouts, finish schedules, and dimensional technical specifications.",
    },
  ],

  // Call to Action Section
  cta: {
    eyebrow: "BEGIN YOUR PROJECT",
    title: "Let's Create a Space That Feels Like Yours",
    subtitle:
      "Inspired by what you see? Tell us about your space and our design team can help create something tailored to you.",
    primaryCta: {
      label: "Get a Free Consultation →",
      href: "/contact",
    },
    secondaryCta: {
      label: "Request a Quote →",
      href: "/contact",
    },
  },
};
