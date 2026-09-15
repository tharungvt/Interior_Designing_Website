/**
 * Projects collection — shared by Home, Projects, and Gallery.
 */

export const projectItems = [
  {
    id: "tribeca-loft",
    category: "RESIDENTIAL ARCHITECTURE",
    title: "The Tribeca Loft",
    metadata: "Residential • Modern • 2,220 sqft",
    image: "home-interior-06.png",
    link: "/projects",
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: "aura-headquarters",
    category: "COMMERCIAL",
    title: "Aura Headquarters",
    metadata: "Office • 5,000 sqft",
    image: "home-interior-07.png",
    link: "/projects",
    featured: false,
    published: true,
    order: 2,
  },
  {
    id: "oakwood-residence",
    category: "RESIDENTIAL",
    title: "Oakwood Residence",
    metadata: "Modern Luxury • 3,100 sqft",
    image: "home-interior-08.png",
    link: "/projects",
    featured: false,
    published: true,
    order: 3,
  },
];

export const projectsSection = {
  eyebrow: "FEATURED PROJECTS",
  heading: "More Than Design. A Better Way of Living.",
  description:
    "Explore some of our latest projects where design meets functionality.",
  cta: {
    label: "View More Projects",
    href: "/projects",
    variant: "secondary",
  },
  items: projectItems,
};

export const projectsPage = {
  heading: "Projects",
  description: "Explore our completed interior design projects.",
  items: projectItems,
};
