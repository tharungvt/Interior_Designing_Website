/**
 * Services Page Content Configuration
 *
 * Dedicated data source for the comprehensive Services page.
 * All image assets map to approved local files inside Frontend/src/assets/services/.
 */

export const servicesPageContent = {
  hero: {
    eyebrow: "OUR SERVICES",
    title: "Design Solutions for Every Space",
    subtitle:
      "Thoughtfully designed interior solutions for residential, commercial, and specialized spaces, crafted with precision and elegance.",
    primaryCta: {
      label: "Get a Free Consultation",
      href: "/#contact",
    },
    secondaryCta: {
      label: "View Our Projects",
      href: "/#projects",
    },
    backgroundImage: "services/hero-services.png",
    quickLinks: [
      { id: "residential", label: "01 Residential", href: "#residential" },
      { id: "commercial", label: "02 Commercial", href: "#commercial" },
      { id: "specialized", label: "03 Specialized Services", href: "#specialized" },
    ],
  },

  residential: {
    id: "residential",
    eyebrow: "01 / RESIDENTIAL INTERIORS",
    heading: "Residential Interior Design",
    subtitle: "Creating beautiful, functional and personalized spaces for modern living.",
    headerLink: {
      label: "View All Residential",
      href: "#residential",
    },
    featured: {
      badge: "FEATURED DISCIPLINE",
      code: "R1.01",
      scopeLabel: "Turnkey Scope",
      title: "Full Home Interiors",
      summary:
        "Complete home interiors designed for comfort and style. A holistic approach transforming your entire living space into a cohesive environment.",
      image: "services/residential-full-home.png",
      inclusions: [
        "Personalized spatial planning & 3D visualization",
        "Material and finish coordination with verified suppliers",
        "Custom furniture and bespoke artisan millwork",
        "Complete project execution with dedicated supervision",
      ],
      featuredProject: {
        category: "Featured Project",
        name: "The Tribeca Penthouse",
      },
      cta: {
        label: "Enquire About Full Home Design",
        href: "/#contact",
      },
    },
    services: [
      {
        id: "res-apartment",
        code: "01.02",
        title: "Apartment Interiors",
        description:
          "Smart space-maximizing layouts engineered with customized built-ins, clean architectural lines, and tailored lighting for high-rise city living.",
        tags: ["Urban Condos", "Compact Flow"],
        image: "services/residential-apartment.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "res-villa",
        code: "01.03",
        title: "Villa Interiors",
        description:
          "Expansive scale residences with seamless transitions between indoor living and landscaped terraces, featuring monolithic stone details.",
        tags: ["Estates & Villas", "Grand Volume"],
        image: "services/residential-villa.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "res-bedroom",
        code: "01.04",
        title: "Bedroom Interiors",
        description:
          "Restorative sleep sanctuaries balancing tactile acoustics, integrated bedside joinery, circadian illumination, and concealed wardrobes.",
        tags: ["Master Suites", "Acoustic Comfort"],
        image: "services/residential-bedroom.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "res-living-room",
        code: "01.05",
        title: "Living Room Interiors",
        description:
          "Artfully organized social spaces balancing tactile textiles, sculptured hearth surrounds, natural illumination, and conversational warmth.",
        tags: ["Salon & Lounge", "Custom Upholstery"],
        image: "services/residential-living-room.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "res-kitchen",
        code: "01.06",
        title: "Kitchen Interiors",
        description:
          "Ergonomic culinary work islands, seamless concealed pantries, quartzite slab worktops, and engineered German hardware precision.",
        tags: ["Culinary Design", "Quartzite Slabs"],
        image: "services/residential-kitchen.jpg",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "res-bathroom",
        code: "01.07",
        title: "Bathroom Interiors",
        description:
          "Spa-inspired retreats featuring monolithic stone vanities, frameless walk-in rain showers, heated floors, and warm recessed wall reveals.",
        tags: ["Spa Sanctuary", "Monolithic Stone"],
        image: "services/residential-bathroom.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
    ],
  },

  caseStudies: {
    eyebrow: "SELECTED RESIDENTIAL CASE STUDIES",
    heading: "Selected Residential Case Studies",
    viewAllLink: {
      label: "All Projects",
      href: "/#projects",
    },
    items: [
      {
        id: "case-tribeca",
        category: "PENTHOUSE CONVERSION",
        title: "The Tribeca Loft",
        description: "4,200 sq.ft complete design-build and bespoke joinery package.",
        image: "services/case-study-tribeca.png",
        link: { label: "View Project", href: "/#projects" },
      },
      {
        id: "case-oakwood",
        category: "PRIVATE VILLA ESTATE",
        title: "Oakwood Residence",
        description:
          "Holistic multi-level residence with continuous indoor-outdoor courtyard integration.",
        image: "services/case-study-oakwood.png",
        link: { label: "View Project", href: "/#projects" },
      },
    ],
  },

  commercial: {
    id: "commercial",
    eyebrow: "02 / COMMERCIAL INTERIORS",
    heading: "Commercial Interior Design",
    subtitle:
      "Purpose-driven environments designed to support brand identity, productivity, customer experience and business growth.",
    headerLink: {
      label: "Explore Commercial",
      href: "/#projects",
    },
    featured: {
      badge: "COMMERCIAL FLAGSHIP",
      code: "C2.01",
      scopeLabel: "Enterprise Scope",
      title: "Office Interiors",
      summary:
        "High-performance corporate work environments built to cultivate top-tier talent, streamline communication, and project corporate stature.",
      image: "services/commercial-office.png",
      inclusions: [
        "Agile workforce zoning & ergonomic workstations",
        "Brand identity integration & executive client suites",
        "Acoustic engineering & low-decibel breakout booths",
        "Durable commercial-grade material selection compliant with building codes",
      ],
      featuredProject: {
        category: "Featured Project",
        name: "Aura Headquarters (12,000 sq.ft)",
      },
      cta: {
        label: "Enquire About Office Design",
        href: "/#contact",
      },
    },
    services: [
      {
        id: "comm-workspaces",
        code: "02.01",
        title: "Executive Workspaces",
        description:
          "Focused private offices, tech hubs, and collaborative war-rooms calibrated for team productivity and executive presence.",
        tags: ["Private Suites", "Acoustic Enclosures"],
        image: "services/commercial-workspaces.jpg",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "comm-retail",
        code: "02.02",
        title: "Retail Interiors & Boutiques",
        description:
          "Boutique environments converting retail square footage into immersive brand journeys that elevate average order value and foot-traffic dwell time.",
        tags: ["Flagship Retail", "Visual Merchandising"],
        image: "services/commercial-retail.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "comm-dining",
        code: "02.03",
        title: "Restaurant & Dining Spaces",
        description:
          "Atmospheric gastronomy venues balancing intimate acoustic isolation, theatrical bar focal points, and resilient service circulation pathways.",
        tags: ["Fine Dining", "Atmospheric Bars"],
        image: "services/commercial-dining.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "comm-hospitality",
        code: "02.04",
        title: "Hotel & Resort Environments",
        description:
          "Luxury hospitality spaces spanning grand reception foyers to bespoke turnkey suites tailored for unforgettable guest visits.",
        tags: ["Lobbies & Lounges", "Turnkey Suites"],
        image: "services/commercial-hospitality.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        id: "comm-boardrooms",
        code: "02.05",
        title: "Corporate Boardrooms & Suites",
        description:
          "State-of-the-art telepresence conference rooms, executive lounges, and private partner suites equipped with seamless hidden connectivity.",
        tags: ["Telepresence", "Executive Suites"],
        image: "services/commercial-boardrooms.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
    ],
  },

  specialized: {
    id: "specialized",
    eyebrow: "03 / GRANULAR ARCHITECTURAL CAPABILITIES",
    heading: "Specialized Design Services",
    subtitle:
      "Detailed design disciplines that bring refinement, functionality and character to every interior. Available as standalone commissions or whole-project deliveries.",
    items: [
      {
        index: "01",
        title: "Modular Kitchens",
        description:
          "Precision German fittings, antibacterial surfaces, integrated pull-outs, and bespoke stone worktops.",
        image: "services/specialized-kitchen.jpg",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "02",
        title: "Wardrobe Design",
        description:
          "Custom walk-in dressing suites, smoked glass door wardrobes, leather drawer insets, and sensor illumination.",
        image: "services/specialized-wardrobe.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "03",
        title: "Furniture Design",
        description:
          "One-of-one custom furniture created in tandem with local master joiners, solid walnut dining tables, and seating.",
        image: "services/specialized-furniture.jpg",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "04",
        title: "False Ceiling",
        description:
          "Refined ceiling planes with hidden perimeter AC slots, knife-edge shadow reveals, and acoustic baffle integration.",
        image: "services/specialized-ceiling.jpg",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "05",
        title: "Lighting Design",
        description:
          "Multi-tiered architectural illumination plans calibrating daylight penetration, art accenting, and circadian tuning.",
        image: "services/specialized-lighting.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "06",
        title: "Flooring",
        description:
          "Bookmatched Italian marble slabs, honed travertines, seamless microcement, and European wide-plank French oak.",
        image: "services/specialized-flooring.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "07",
        title: "Painting & Textures",
        description:
          "Artisanal Roman clay, natural limewash coats, breathable mineral plasters, and subtle tactile finishes.",
        image: "services/specialized-textures.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "08",
        title: "Space Planning",
        description:
          "Rigorous 2D/3D programmatic zoning, user circulation analysis, view corridor optimization, and natural ventilation modeling.",
        image: "services/specialized-planning.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
      {
        index: "09",
        title: "Renovation",
        description:
          "Full structural envelope modernizations, internal wall reconfigurations, MEP infrastructure overhauls, and historic preservation.",
        image: "services/specialized-renovation.png",
        cta: { label: "Enquire", href: "/#contact" },
      },
    ],
  },

  cta: {
    eyebrow: "START YOUR JOURNEY",
    heading: "Let's Create a Space That Feels Like Yours",
    subtitle:
      "Book a complimentary consultation with our principal architects and discover how we can elevate your corporate environment or residential sanctuary.",
    primaryCta: {
      label: "Get a Free Consultation",
      href: "/#contact",
    },
    secondaryCta: {
      label: "Request a Quote",
      href: "/#contact",
    },
    image: "services/cta-desk.png",
  },
};

export default servicesPageContent;
