import { services, servicesSection } from "./services";
import { projects, projectsSection } from "./projects";
import { testimonials, testimonialsSection } from "./testimonials";
import { processSteps, processSection } from "./process";

/**
 * Home Page Structured Content Data
 *
 * Central data layer aggregating individual section models.
 * Presentation components consume this data directly via props or through contentService.js.
 */

const featureHighlightsItems = [
  {
    id: "strategy",
    icon: "sparkles",
    title: "Personalized",
    description: "Design Strategy",
  },
  {
    id: "planning",
    icon: "layout",
    title: "Thoughtful",
    description: "Spatial Planning",
  },
  {
    id: "execution",
    icon: "shield-check",
    title: "Quality",
    description: "Focused Execution",
  },
  {
    id: "support",
    icon: "clock",
    title: "End-to-End",
    description: "Ongoing Support",
  },
];

const portfolioCurationData = {
  eyebrow: "ARCHITECTURAL PORTFOLIO CURATION",
  heading: "Substance Over Novelty: An Uncompromising Standard",
  description:
    "Every interior conceived by our practice represents a comprehensive dialogue between owner, landscape, and craftsman. We reject fleeting trends in favor of disciplined geometry, tactile intimacy, and spatial clarity that remains timeless decades from now.",
  image: "cta-desk.png",
  stats: [
    {
      id: "stat-1",
      title: "Private Residences",
      subtitle: "Worldwide commissions",
    },
    {
      id: "stat-2",
      title: "Bespoke Millwork",
      subtitle: "Artisan architectural craft",
    },
  ],
};

export const homeContent = {
  // Hero Section
  hero: {
    eyebrow: "SPACES THAT INSPIRE",
    heading: "Interiors Designed for the Way You Live",
    description:
      "Thoughtfully designed spaces that bring together functionality, aesthetics and your individual lifestyle.",
    ctaPrimary: {
      label: "Get a Free Consultation",
      href: "/contact",
    },
    ctaSecondary: {
      label: "View Our Projects",
      href: "/projects",
    },
    image: "Home-Hero.png",
    imageAlt:
      "Luxury modern penthouse living room with expansive floor-to-ceiling windows and cove lighting",
    features: [
      {
        id: "strategy",
        title: "Personalized",
        description: "Design Strategy",
      },
      {
        id: "planning",
        title: "Thoughtful",
        description: "Spatial Planning",
      },
      {
        id: "execution",
        title: "Quality",
        description: "Focused",
      },
      {
        id: "support",
        title: "End-to-End",
        description: "Support",
      },
    ],
  },

  // Feature Highlights
  features: featureHighlightsItems,
  featureHighlights: {
    items: featureHighlightsItems,
  },

  // About Our Studio
  about: {
    eyebrow: "ABOUT OUR STUDIO",
    heading: "Creating Spaces That Feel Like You",
    paragraphs: [
      "We believe that great design is born from a deep understanding of how you live and work. Our studio focuses on creating environments that are not just visually stunning, but also work effortlessly for your life.",
      "Through careful material selection, bespoke joinery, and balanced light choreography, each project transforms into an enduring architectural expression of its owners.",
    ],
    descriptions: [
      "We believe that great design is born from a deep understanding of how you live and work. Our studio focuses on creating environments that are not just visually stunning, but also work effortlessly for your life.",
      "Through careful material selection, bespoke joinery, and balanced light choreography, each project transforms into an enduring architectural expression of its owners.",
    ],
    quote:
      "Design is not just what we create, but how it makes you feel every day.",
    quoteAttribution: "STUDIO ETHOS",
    cta: {
      label: "LEARN MORE ABOUT US",
      href: "/about",
    },
    link: {
      label: "LEARN MORE ABOUT US",
      href: "/about",
    },
    mainImage: "home-interior-01.png",
    secondaryImage: "home-interior-02.png",
    images: {
      primary: "home-interior-01.png",
      primaryAlt:
        "Architectural living space with minimalist furniture and balanced natural light",
      secondary: "home-interior-02.png",
      secondaryAlt:
        "Tactile material study showing raw linen, travertine, and fluted oak",
    },
  },

  // Services Section
  services: servicesSection,
  servicesList: services,

  // Projects Section
  projects: projectsSection,
  projectsList: projects,

  // Why Choose Us
  whyChooseUs: {
    eyebrow: "WHY CHOOSE US",
    heading:
      "Crafting spaces of enduring stillness, tactile depth, and architectural grace.",
    quote:
      "“True architecture does not shout; it establishes an effortless rhythm between natural light, acoustic calm, and genuine material honesty.”",
    quoteText:
      "We bridge the dialogue between bold spatial volume and exacting artisan joinery. Every residence is composed as an enduring monograph—calibrated to human rituals and the natural passage of sun throughout the day.",
    principles: [
      {
        id: "01",
        number: "01",
        title: "Habitation & Form",
        description:
          "Spatial envelopes sculpted around your personal daily cadence. We analyze circadian exposure, private sightlines, and generous ceiling heights to cultivate effortless comfort and grounded intimacy.",
      },
      {
        id: "02",
        number: "02",
        title: "Circulation & Acoustic Rhythm",
        description:
          "Intuitive transitions between shared social spaces and quiet retreat. Acoustic absorption, concealed pocket separations, and balanced focal points allow spaces to breathe in perfect harmony.",
      },
      {
        id: "03",
        number: "03",
        title: "Invisible Utility & Illumination",
        description:
          "Engineering that serves without intruding. Flush architectural shadow reveals, concealed environmental climate controls, and layered perimeter lighting bring modern utility into invisible equilibrium.",
      },
      {
        id: "04",
        number: "04",
        title: "Enduring Artisanship & Patina",
        description:
          "Natural stone, quartersawn white oak, unlacquered bronze, and honed lime plasters selected specifically for how gracefully they accumulate warmth and character across generations.",
      },
    ],
    gallery: [
      {
        id: "light-volume",
        title: "STUDY IN LIGHT & VOLUME",
        description:
          "Natural daylight framing tailored salon seating and stone hearth.",
        image: "home-interior-01.png",
        aspect: "4/3",
      },
      {
        id: "tactility-joinery",
        title: "MATERIAL TACTILITY & JOINERY",
        description:
          "Precision shadow reveals and hand-selected natural timber surfaces.",
        image: "home-interior-02.png",
        aspect: "3/4",
      },
    ],
  },

  // Portfolio Curation
  portfolio: portfolioCurationData,
  portfolioCuration: portfolioCurationData,

  // Process Section
  process: processSection,
  processSteps: processSteps,

  // Testimonials Section
  testimonials: testimonialsSection,
  testimonialsList: testimonials,

  // Final Call to Action
  cta: {
    eyebrow: "LET'S WORK TOGETHER",
    heading: "Let's Create a Space That Feels Like Yours",
    description:
      "Book a free consultation and take the first step towards your dream space.",
    ctaPrimary: {
      label: "Get a Free Consultation",
      href: "/contact",
    },
    ctaSecondary: {
      label: "Request a Quote",
      href: "/contact",
    },
    image: "home-interior-08.png",
    imageAlt:
      "Warm modern luxury villa at twilight with lighted pool and terrace",
  },
};

export default homeContent;
