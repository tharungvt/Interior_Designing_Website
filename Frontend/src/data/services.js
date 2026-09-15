/**
 * Services Data Source
 *
 * Each service entry supports:
 * - id: unique identifier
 * - category: uppercase category label
 * - title: service title
 * - description: detailed service description
 * - image: approved local image filename
 * - features: array of service features / tags
 * - cta: call-to-action object with label and href
 * - link: direct service link / anchor
 * - featured: boolean indicating flagship prominence
 *
 * Modifying, adding, or deleting a service here updates all service representations without editing JSX.
 */

export const services = [
  {
    id: "residential",
    category: "RESIDENTIAL INTERIORS",
    title: "Residential Interior Design",
    description:
      "Thoughtfully planned interiors designed around your lifestyle, space and everyday needs.",
    image: "home-interior-01.png",
    features: [
      "Full Home Design",
      "Apartment Interiors",
      "Villa Renovations",
      "Bespoke Joinery",
    ],
    cta: {
      label: "EXPLORE RESIDENTIAL WORK",
      href: "/services",
    },
    link: "/services",
    featured: true,
  },
  {
    id: "commercial",
    category: "COMMERCIAL INTERIORS",
    title: "Commercial Interior Design",
    description:
      "Functional interiors designed for productive, welcoming and well-organized commercial spaces.",
    image: "home-interior-04.png",
    features: [
      "Workspace Planning",
      "Acoustic Optimization",
      "Branded Environments",
      "Executive Suites",
    ],
    cta: {
      label: "Commercial Interiors",
      href: "/services",
    },
    link: "/services",
    featured: false,
  },
  {
    id: "specialized",
    category: "SPECIALIZED SERVICES",
    title: "Other Interior Services",
    description:
      "Additional interior services covering kitchens, lighting, joinery and related requirements.",
    image: "home-interior-05.png",
    features: [
      "Kitchen & Bath Design",
      "Architectural Lighting",
      "Custom Millwork",
      "Material Sourcing",
    ],
    cta: {
      label: "Specialized Services",
      href: "/services",
    },
    link: "/services",
    featured: false,
  },
];

export const servicesSection = {
  eyebrow: "OUR SERVICES",
  heading: "Design Solutions for Every Space",
  description:
    "Interior design services for residential and commercial spaces, planned around your requirements.",
  cta: {
    label: "View All Services",
    href: "/services",
  },
  viewAllLink: {
    label: "View All Services",
    href: "/services",
  },
  items: services,
  featured: services.find((s) => s.featured) || services[0],
  secondary: services.filter((s) => !s.featured),
};

export default services;
