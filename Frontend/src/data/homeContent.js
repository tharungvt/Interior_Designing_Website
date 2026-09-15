/**
 * Home Page Structured Content Data
 *
 * Provides data-driven content definitions for the studio Home presentation.
 * Supports dynamic configuration across all sections.
 */

export const homeContent = {
  // =========================================================================
  // Section 2: Hero
  // =========================================================================
  hero: {
    eyebrow: "SPACES THAT INSPIRE",
    heading: "Interiors Designed for the Way You Live",
    description:
      "Thoughtfully designed spaces that bring together functionality, aesthetics and your individual lifestyle.",
    ctaPrimary: {
      label: "Get a Free Consultation",
      href: "#contact",
    },
    ctaSecondary: {
      label: "View Our Projects",
      href: "#projects",
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

  // =========================================================================
  // Section 3: Feature Highlights (Reusable)
  // =========================================================================
  featureHighlights: {
    items: [
      {
        id: "strategy",
        icon: "sparkles",
        title: "Personalized",
        description: "Design Strategy",
      },
      {
        id: "planning",
        icon: "grid",
        title: "Thoughtful",
        description: "Spatial Planning",
      },
      {
        id: "execution",
        icon: "shield",
        title: "Quality",
        description: "Focused Execution",
      },
      {
        id: "support",
        icon: "clock",
        title: "End-to-End",
        description: "Ongoing Support",
      },
    ],
  },

  // =========================================================================
  // Section 4: About Our Studio
  // =========================================================================
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
      href: "#about",
    },
    link: {
      label: "LEARN MORE ABOUT US",
      href: "#about",
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
  // =========================================================================
  // Section 5: Our Services
  // =========================================================================
  services: {
    eyebrow: "OUR SERVICES",
    heading: "Design Solutions for Every Space",
    description:
      "Interior design services for residential and commercial spaces, planned around your requirements.",
    cta: {
      label: "View All Services",
      href: "#services",
    },
    viewAllLink: {
      label: "View All Services",
      href: "#services",
    },
    featured: {
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
        href: "#services",
      },
    },
    secondary: [
      {
        id: "commercial",
        category: "COMMERCIAL INTERIORS",
        title: "Commercial Interior Design",
        description:
          "Functional interiors designed for productive, welcoming and well-organized commercial spaces.",
        image: "home-interior-04.png",
        cta: {
          label: "Commercial Interiors",
          href: "#services",
        },
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
          href: "#services",
        },
      },
    ],
    items: [
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
          href: "#services",
        },
        featured: true,
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
          href: "#services",
        },
        featured: false,
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
          href: "#services",
        },
        featured: false,
      },
    ],
  },

  // =========================================================================
  // Section 6: Featured Projects
  // =========================================================================
  projects: {
    eyebrow: "FEATURED PROJECTS",
    heading: "More Than Design. A Better Way of Living.",
    description:
      "Explore some of our latest projects where design meets functionality.",
    cta: {
      label: "View More Projects",
      href: "#projects",
    },
    viewAllLink: {
      label: "View More Projects",
      href: "#projects",
    },
    featured: {
      id: "tribeca-loft",
      category: "RESIDENTIAL ARCHITECTURE",
      title: "The Tribeca Loft",
      metadata: "Residential • Modern • 2,220 sqft",
      image: "home-interior-06.png",
      link: "#projects",
    },
    secondary: [
      {
        id: "aura-headquarters",
        category: "COMMERCIAL",
        title: "Aura Headquarters",
        metadata: "Office • 5,000 sqft",
        image: "home-interior-07.png",
        link: "#projects",
      },
      {
        id: "oakwood-residence",
        category: "RESIDENTIAL",
        title: "Oakwood Residence",
        metadata: "Modern Luxury • 3,100 sqft",
        image: "home-interior-08.png",
        link: "#projects",
      },
    ],
    items: [
      {
        id: "tribeca-loft",
        category: "RESIDENTIAL ARCHITECTURE",
        title: "The Tribeca Loft",
        metadata: "Residential • Modern • 2,220 sqft",
        image: "home-interior-06.png",
        link: "#projects",
        featured: true,
      },
      {
        id: "aura-headquarters",
        category: "COMMERCIAL",
        title: "Aura Headquarters",
        metadata: "Office • 5,000 sqft",
        image: "home-interior-07.png",
        link: "#projects",
        featured: false,
      },
      {
        id: "oakwood-residence",
        category: "RESIDENTIAL",
        title: "Oakwood Residence",
        metadata: "Modern Luxury • 3,100 sqft",
        image: "home-interior-08.png",
        link: "#projects",
        featured: false,
      },
    ],
  },

  // =========================================================================
  // Section 7: Why Choose Us
  // =========================================================================
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
        title: "Enduring Artmanship & Patina",
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

  // =========================================================================
  // Section 8: Architectural Portfolio Curation
  // =========================================================================
  portfolioCuration: {
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
  },

  // =========================================================================
  // Section 9: Our Process
  // =========================================================================
  process: {
    eyebrow: "OUR PROCESS",
    heading: "From Vision to Reality",
    description:
      "A clear visual explanation of how an interior design project moves from the first conversation to the completed space.",
    steps: [
      {
        id: "01",
        number: "01",
        title: "Consultation",
        description:
          "Initial discussion to understand the client's requirements and vision.",
      },
      {
        id: "02",
        number: "02",
        title: "Planning",
        description:
          "Understanding the space, requirements and project direction.",
      },
      {
        id: "03",
        number: "03",
        title: "Concept Design",
        description:
          "Developing the interior concept and design direction.",
      },
      {
        id: "04",
        number: "04",
        title: "Execution",
        description:
          "Bringing the approved design into the physical space.",
      },
      {
        id: "05",
        number: "05",
        title: "Final Handover",
        description:
          "Completing the project and delivering the finished space.",
      },
    ],
  },

  // =========================================================================
  // Section 10: Client Testimonials
  // =========================================================================
  testimonials: {
    eyebrow: "CLIENT TESTIMONIALS",
    heading: "What Our Clients Say",
    description:
      "Reflections on spatial harmony, material craft, and the living experience.",
    items: [
      {
        id: "sarah-m",
        name: "SARAH M.",
        role: "TRIBECA RESIDENTIAL INTERIOR",
        badge: "TRIBECA LOFT RESIDENT",
        rating: 5,
        headline:
          "Fast without ever feeling rushed. The team transformed our outdated house into a modern masterpiece.",
        narrative:
          "We had eleven weeks to open our space. Their studio scoped ruthlessly, protected the tactile details that truly mattered, and handed over something we're still proud to live in every single day.",
        image: "home-interior-01.png",
        order: 1,
        published: true,
      },
      {
        id: "james-r",
        name: "JAMES R.",
        role: "CREATIVE DIRECTOR",
        badge: "CREATIVE STUDIO",
        rating: 5,
        headline:
          "An extraordinary command of natural light, acoustic calm, and bespoke joinery.",
        narrative:
          "From the first conceptual sketches to the final turnkey reveal, their architectural discipline and commitment to craftsmanship was unparalleled.",
        image: "home-interior-07.png",
        order: 2,
        published: true,
      },
      {
        id: "elena-marcus",
        name: "ELENA & MARCUS",
        role: "VILLA OWNERS",
        badge: "COASTAL RESIDENCE",
        rating: 5,
        headline:
          "A timeless dialogue between landscape, architecture, and personal ritual.",
        narrative:
          "They listened deeply to how we live and sculpted our residence to feel like an enduring sanctuary. Every morning in this home is a gift.",
        image: "home-interior-06.png",
        order: 3,
        published: true,
      },
      {
        id: "priya-s",
        name: "PRIYA S.",
        role: "PENTHOUSE RESTORATION",
        badge: "MANHATTAN DUPLEX",
        rating: 5,
        headline:
          "Meticulous project governance with impeccable material honesty.",
        narrative:
          "Complex structural coordination was handled with flawless calm. The custom millwork and honed limestone surfaces are pure perfection.",
        image: "home-interior-08.png",
        order: 4,
        published: true,
      },
      {
        id: "david-k",
        name: "DAVID K.",
        role: "COMMERCIAL CLIENT",
        badge: "HEADQUARTERS",
        rating: 5,
        headline:
          "Our workspace has become a magnet for talent and collaborative energy.",
        narrative:
          "They balanced private focus pods with inviting communal lounges. Our entire team is inspired by the space every day.",
        image: "home-interior-03.png",
        order: 5,
        published: true,
      },
    ],
  },

  // =========================================================================
  // Section 11: Final CTA
  // =========================================================================
  cta: {
    eyebrow: "LET'S WORK TOGETHER",
    heading: "Let's Create a Space That Feels Like Yours",
    description:
      "Book a free consultation and take the first step towards your dream space.",
    ctaPrimary: {
      label: "Get a Free Consultation",
      href: "#contact",
    },
    ctaSecondary: {
      label: "Request a Quote",
      href: "#contact",
    },
    image: "home-interior-08.png",
    imageAlt: "Warm modern luxury villa at twilight with lighted pool and terrace",
  },
};
