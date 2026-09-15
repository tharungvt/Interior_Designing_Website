/**
 * Services collection — shared by Home and the Services page.
 */

export const serviceItems = [
  {
    id: "residential",
    category: "RESIDENTIAL INTERIORS",
    title: "Residential Interior Design",
    description:
      "Thoughtfully planned interiors designed around your lifestyle, space and everyday needs.",
    image: "home-interior-01.png",
    tags: [
      "Full Home Design",
      "Apartment Interiors",
      "Villa Renovations",
      "Bespoke Joinery",
    ],
    cta: {
      label: "EXPLORE RESIDENTIAL WORK",
      href: "/services",
      variant: "text",
    },
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: "commercial",
    category: "COMMERCIAL INTERIORS",
    title: "Commercial Interior Design",
    description:
      "Functional interiors designed for productive, welcoming and well-organized commercial spaces.",
    image: "home-interior-04.png",
    cta: {
      label: "Commercial Interiors",
      href: "/services",
      variant: "text",
    },
    featured: false,
    published: true,
    order: 2,
  },
  {
    id: "specialized",
    category: "SPECIALIZED SERVICES",
    title: "Other Interior Services",
    description:
      "Additional interior services covering kitchens, lighting, joinery and related requirements.",
    image: "home-interior-05.png",
    cta: {
      label: "Specialized Services",
      href: "/services",
      variant: "text",
    },
    featured: false,
    published: true,
    order: 3,
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
    variant: "secondary",
  },
  items: serviceItems,
};

export const servicesPage = {
  heading: "Services",
  description: "We offer interior design services for homes and businesses.",
  items: serviceItems,
};
