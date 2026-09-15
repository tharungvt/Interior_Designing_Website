/**
 * Projects Data Source
 *
 * Each project entry supports:
 * - id: unique identifier
 * - category: category label
 * - title: project title
 * - metadata: architectural meta information (type, style, square footage)
 * - image: approved local image filename
 * - link: project URL or anchor
 * - featured: boolean indicating dominant anchor placement
 *
 * Approved projects:
 * 1. The Tribeca Loft
 * 2. Aura Headquarters
 * 3. Oakwood Residence
 */

export const projects = [
  {
    id: "tribeca-loft",
    category: "RESIDENTIAL ARCHITECTURE",
    title: "The Tribeca Loft",
    metadata: "Residential • Modern • 2,220 sqft",
    image: "home-interior-06.png",
    link: "/projects",
    featured: true,
  },
  {
    id: "aura-headquarters",
    category: "COMMERCIAL",
    title: "Aura Headquarters",
    metadata: "Office • 5,000 sqft",
    image: "home-interior-07.png",
    link: "/projects",
    featured: false,
  },
  {
    id: "oakwood-residence",
    category: "RESIDENTIAL",
    title: "Oakwood Residence",
    metadata: "Modern Luxury • 3,100 sqft",
    image: "home-interior-08.png",
    link: "/projects",
    featured: false,
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
  },
  viewAllLink: {
    label: "View More Projects",
    href: "/projects",
  },
  items: projects,
  featured: projects.find((p) => p.featured) || projects[0],
  secondary: projects.filter((p) => !p.featured),
};

export default projects;
