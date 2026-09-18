/**
 * Projects Page Content Configuration
 *
 * Dedicated data source for the comprehensive Projects & Portfolio page.
 * All image assets are imported directly from Frontend/src/assets/projects/
 * to guarantee 100% reliable local bundling and distinct asset association.
 */

// Hero & CTA Assets
import heroProjects from "../assets/projects/hero-living-room.png";
import ctaDesk from "../assets/projects/cta-desk.png";

// Featured Project Assets
import featuredResidence from "../assets/projects/hero-living-room.png";

// Project Collection Assets
import projectTribecaLoft from "../assets/projects/project-tribeca-loft.png";
import projectAuraHq from "../assets/projects/project-aura-hq.png";
import projectOakwoodResidence from "../assets/projects/project-oakwood-residence.png";
import projectCoastalPavilion from "../assets/projects/project-coastal-pavilion.png";
import projectHighlinePenthouse from "../assets/projects/project-highline-penthouse.jpg";
import projectCulinaryAtelier from "../assets/projects/project-culinary-atelier.jpg";
import projectApexSuites from "../assets/projects/project-apex-suites.jpg";
import projectZenApartment from "../assets/projects/project-zen-apartment.png";
import projectVillaSerena from "../assets/projects/project-villa-serena.png";
import projectBoardroom from "../assets/projects/project-boardroom.png";
import projectBoutiqueRetail from "../assets/projects/project-boutique-retail.png";
import projectDiningSanctuary from "../assets/projects/project-dining-sanctuary.png";

// Before & After Assets
import beforeRenovation from "../assets/projects/before-renovation.jpg";
import afterRenovation from "../assets/projects/after-renovation.png";

// Gallery Vignettes Assets
import gallery01 from "../assets/projects/gallery-01.png";
import gallery02 from "../assets/projects/gallery-02.png";
import gallery03 from "../assets/projects/gallery-03.png";
import gallery04 from "../assets/projects/gallery-04.png";
import gallery05 from "../assets/projects/gallery-05.png";
import gallery06 from "../assets/projects/gallery-06.png";
import gallery07 from "../assets/projects/gallery-07.png";
import gallery08 from "../assets/projects/gallery-08.png";
import gallery09 from "../assets/projects/gallery-09.png";
import gallery10 from "../assets/projects/gallery-10.jpg";
import gallery11 from "../assets/projects/gallery-11.png";
import gallery12 from "../assets/projects/gallery-12.jpg";

export const projectsPageContent = {
  // 1. Hero Section
  hero: {
    eyebrow: "PORTFOLIO & SELECTED WORKS",
    title: "Spaces Designed With Purpose",
    subtitle:
      "A curated archive of private residences, corporate ateliers, and bespoke joinery commissions crafted with disciplined geometry, timeless materiality, and serene light.",
    backgroundImage: heroProjects,
    primaryCta: {
      label: "Start a Project Conversation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Services",
      href: "/services",
    },
    stats: [
      { id: "stat-1", value: "150+", label: "Completed Spaces" },
      { id: "stat-2", value: "14", label: "Excellence Awards" },
      { id: "stat-3", value: "100%", label: "Turnkey Delivery" },
    ],
  },

  // 2. Portfolio Intro & Dynamic Filter Definitions
  intro: {
    eyebrow: "CURATED MONOGRAPHS",
    heading: "Thoughtful Proportion, Material Honesty, Enduring Architecture",
    description:
      "Every interior conceived by our practice is grounded in an intimate dialogue between owner, landscape, and craftsman. We reject fleeting trends in favor of disciplined geometry and tactile intimacy that endures across generations.",
    categories: [
      { id: "all", label: "All Projects" },
      { id: "residential", label: "Residential" },
      { id: "commercial", label: "Commercial" },
      { id: "bespoke-joinery", label: "Bespoke Joinery" },
    ],
  },

  // 3. Featured Architectural Project
  featuredProject: {
    id: "featured-contemporary-loft",
    title: "The Contemporary Loft",
    category: "residential",
    categoryLabel: "Residential Architecture",
    year: "2024",
    area: "2,220 sqft",
    image: featuredResidence,
    summary:
      "A complete warehouse transformation celebrating exposed timber beams, honed Belgian bluestone, and custom fluted oak partitions. The residence orchestrates a tranquil, naturally lit sanctuary.",
    scope: "Full Architectural Renovation, Bespoke Millwork & Turnkey Furnishing",
    highlights: [
      "Preserved structural timber beams with custom matte organic sealant",
      "Monolithic kitchen island in honed Belgian bluestone with flush induction surfaces",
      "Automated circadian architectural lighting calibrated to natural day cycles",
    ],
    materials: [
      "Quarter-sawn White Oak",
      "Honed Belgian Bluestone",
      "Raw Slub Linen",
      "Patinated Bronze",
    ],
    cta: {
      label: "Inquire About Similar Commission",
      href: "/contact",
    },
  },

  // 4. Data-Driven Project Grid Items
  projects: [
    {
      id: "heritage-loft",
      title: "The Heritage Loft",
      category: "residential",
      categoryLabel: "Residential Architecture",
      year: "2024",
      area: "2,220 sqft",
      image: projectTribecaLoft,
      summary:
        "Historical warehouse transformation celebrating exposed timber beams, honed Belgian bluestone, and custom fluted oak partitions.",
      materials: ["Quarter-sawn White Oak", "Belgian Bluestone", "Raw Slub Linen"],
      scope: "Full Gut Renovation, Custom Kitchen, Architectural Lighting",
    },
    {
      id: "aura-headquarters",
      title: "Aura Creative Headquarters",
      category: "commercial",
      categoryLabel: "Commercial Workplace",
      year: "2024",
      area: "5,000 sqft",
      image: projectAuraHq,
      summary:
        "A light-filled technology atelier balancing acoustic privacy pods with expansive communal gathering zones wrapped in wool felt.",
      materials: ["Acoustic Felt", "Brushed Aluminum", "Polished Concrete"],
      scope: "Zoning, Acoustic Engineering, Custom Workstations",
    },
    {
      id: "oakwood-residence",
      title: "Oakwood Residence & Terrace",
      category: "residential",
      categoryLabel: "Modern Luxury",
      year: "2023",
      area: "3,100 sqft",
      image: projectOakwoodResidence,
      summary:
        "Seamless indoor-outdoor integration framing lush garden vistas through minimal-frame sliding glass envelopes and travertine fireplace.",
      materials: ["Roman Travertine", "Smoked European Larch", "Unlacquered Brass"],
      scope: "Architectural Extensions, Living Pavilion, Pool House",
    },
    {
      id: "coastal-pavilion",
      title: "The Coastal Pavilion",
      category: "residential",
      categoryLabel: "Waterfront Residence",
      year: "2023",
      area: "4,400 sqft",
      image: projectCoastalPavilion,
      summary:
        "Salt-resistant cedar millwork, sand-hued micro-cement flooring, and generous deep roof overhangs responding gracefully to ocean breezes.",
      materials: ["Weathered Red Cedar", "Honed Micro-Cement", "Raw Linen Drapery"],
      scope: "New Construction, Millwork, Landscape Dialogue",
    },
    {
      id: "highline-penthouse",
      title: "The Highline Penthouse",
      category: "residential",
      categoryLabel: "Urban Penthouse",
      year: "2024",
      area: "1,850 sqft",
      image: projectHighlinePenthouse,
      summary:
        "Double-height spatial volumes designed around a curated private modern art collection, with recessed shadow reveals and museum lighting.",
      materials: ["Statuario Marble", "Ebonized Walnut", "Patinated Bronze"],
      scope: "Turnkey Architecture, Custom Gallery Walls, Joinery",
    },
    {
      id: "culinary-atelier",
      title: "Nordic Culinary Atelier",
      category: "bespoke-joinery",
      categoryLabel: "Bespoke Joinery",
      year: "2023",
      area: "650 sqft",
      image: projectCulinaryAtelier,
      summary:
        "A chef's culinary sanctuary featuring seamless quartzite monolithic island blocks, touch-latch pantry walls, and concealed extraction.",
      materials: ["Taj Mahal Quartzite", "Rift-cut White Oak", "Matte Gunmetal"],
      scope: "Bespoke Millwork, Appliance Concealment, Plumbing Spec",
    },
    {
      id: "artisan-library-joinery",
      title: "Artisan Oak Library & Study",
      category: "bespoke-joinery",
      categoryLabel: "Bespoke Joinery",
      year: "2024",
      area: "850 sqft",
      image: projectOakwoodResidence,
      summary:
        "Floor-to-ceiling quarter-sawn white oak architectural bookshelves with integrated brass library ladders and concealed acoustic felt baffles.",
      materials: ["Quarter-sawn White Oak", "Solid Brass Hardware", "Acoustic Wool Felt"],
      scope: "Custom Library Architecture, Integrated Desk, Ambient Concealed LED",
    },
    {
      id: "fluted-wardrobe-atelier",
      title: "Atelier Fluted Millwork Dressing Room",
      category: "bespoke-joinery",
      categoryLabel: "Bespoke Joinery",
      year: "2023",
      area: "520 sqft",
      image: projectTribecaLoft,
      summary:
        "Bespoke dressing sanctuary with fluted timber tambour cabinetry, integrated leather-lined jewelry trays, and full-spectrum vanity illumination.",
      materials: ["Fluted European Walnut", "Saddle Leather", "Low-Iron Fluted Glass"],
      scope: "Walk-In Wardrobe Architecture, Custom Vanity, Hidden Safe Integration",
    },
    {
      id: "apex-executive-suite",
      title: "Apex Executive Suites",
      category: "commercial",
      categoryLabel: "Executive Office",
      year: "2024",
      area: "3,200 sqft",
      image: projectApexSuites,
      summary:
        "Sophisticated corporate leadership sanctum with double-glazed acoustic glass partitions and custom leather-wrapped conference desks.",
      materials: ["Saddle Leather", "Acoustic Ribbed Wood", "Calacatta Gold"],
      scope: "Executive Boardrooms, Private Lounges, Smart Lighting",
    },
    {
      id: "zen-sanctuary-apartment",
      title: "Zen Sanctuary Apartment",
      category: "residential",
      categoryLabel: "Residential Architecture",
      year: "2024",
      area: "1,450 sqft",
      image: projectZenApartment,
      summary:
        "Minimalist metropolitan haven featuring bespoke tatami meditation corners, natural clay lime wash, and concealed architectural storage.",
      materials: ["Lime Wash Plaster", "Hinoki Wood", "Organic Cotton"],
      scope: "Interior Architecture, Spatial Planning, Custom Furniture",
    },
    {
      id: "villa-serena-estate",
      title: "Villa Serena Estate",
      category: "residential",
      categoryLabel: "Modern Luxury",
      year: "2023",
      area: "5,600 sqft",
      image: projectVillaSerena,
      summary:
        "Expansive family monograph incorporating courtyard gardens, custom steel glazing, vaulted cedar ceilings, and artisan wine cellars.",
      materials: ["Limestone Slabs", "Structural Cedar", "Blackened Steel"],
      scope: "Comprehensive Renovation, Millwork, Landscape Integration",
    },
    {
      id: "boardroom-pavilion",
      title: "Horizon Capital Boardroom",
      category: "commercial",
      categoryLabel: "Commercial Workplace",
      year: "2024",
      area: "2,800 sqft",
      image: projectBoardroom,
      summary:
        "State-of-the-art boardroom environment featuring integrated micro-perforated sound absorption panels and bespoke walnut conference tables.",
      materials: ["American Walnut", "Micro-perforated Panels", "Brushed Brass"],
      scope: "AV Acoustic Engineering, Custom Millwork, Lighting Automation",
    },
    {
      id: "boutique-retail",
      title: "Maison Blanc Retail Studio",
      category: "commercial",
      categoryLabel: "Retail Experience",
      year: "2024",
      area: "2,100 sqft",
      image: projectBoutiqueRetail,
      summary:
        "Intimate luxury retail environment sculpted with travertine pedestals, soft cove uplighting, and tactile silk wallcoverings.",
      materials: ["Silver Travertine", "Raw Silk", "Champagne Anodized Metal"],
      scope: "Retail Concept, Fixture Design, Architectural Lighting",
    },
    {
      id: "dining-sanctuary",
      title: "Solstice Dining Pavilion",
      category: "commercial",
      categoryLabel: "Hospitality & Dining",
      year: "2023",
      area: "3,800 sqft",
      image: projectDiningSanctuary,
      summary:
        "Atmospheric hospitality interior featuring fluted terracotta banquettes, intimate low-glare luminaires, and weathered zinc bar counters.",
      materials: ["Terracotta Tiles", "Zinc Countertops", "Aged Leather"],
      scope: "Hospitality Architecture, Custom Seating, Lighting Program",
    },
  ],

  // 5. Before & After Renovation Section
  beforeAfter: {
    eyebrow: "TRANSFORMATION CASE STUDY",
    heading: "Before & After: Historic Loft Metamorphosis",
    description:
      "Witness how our disciplined spatial reorganization transformed a compartmentalized, dim industrial flat into a luminous, acoustically serene residence.",
    beforeImage: beforeRenovation,
    afterImage: afterRenovation,
    beforeLabel: "Original State (Pre-Renovation)",
    afterLabel: "Completed Architectural Residence",
    metrics: [
      { id: "metric-1", label: "Construction Duration", value: "6 Months" },
      { id: "metric-2", label: "Usable Volume Gain", value: "+35%" },
      { id: "metric-3", label: "Natural Daylight Index", value: "+80%" },
      { id: "metric-4", label: "Custom Millwork Pieces", value: "18 Units" },
    ],
    summary:
      "By removing obsolete non-load-bearing walls and introducing continuous European oak flooring, flush architectural shadow reveals, and balanced daylight paths, the space achieved effortless circulation and serene calm.",
    cta: {
      label: "Discuss Your Renovation",
      href: "/contact",
    },
  },

  // 6. Project Gallery & Architectural Vignettes
  gallery: {
    eyebrow: "SPATIAL DETAILS & TACTILITY",
    heading: "Architectural Vignettes & Material Studies",
    description:
      "A closer look at tactile finishes, bespoke millwork joinery, and circadian lighting compositions across our recent project archives.",
    items: [
      {
        id: "vignette-1",
        title: "Tactile Living Volume",
        category: "Living Room",
        image: gallery01,
      },
      {
        id: "vignette-2",
        title: "Custom Joinery & Partitions",
        category: "Millwork",
        image: gallery02,
      },
      {
        id: "vignette-3",
        title: "Circadian Bedroom Suite",
        category: "Bedroom Sanctuary",
        image: gallery03,
      },
      {
        id: "vignette-4",
        title: "Monolithic Kitchen Atelier",
        category: "Kitchen Atelier",
        image: gallery04,
      },
      {
        id: "vignette-5",
        title: "Refined Spatial Details",
        category: "Details",
        image: gallery05,
      },
      {
        id: "vignette-6",
        title: "Stone & Travertine Bath",
        category: "Bathroom Spa",
        image: gallery06,
      },
      {
        id: "vignette-7",
        title: "Structural Volumes & Light",
        category: "Architecture",
        image: gallery07,
      },
      {
        id: "vignette-8",
        title: "Executive Atelier Workspace",
        category: "Office Studio Spaces",
        image: gallery08,
      },
      {
        id: "vignette-9",
        title: "Bespoke Lounge Armchair",
        category: "Craft Millwork",
        image: gallery09,
      },
      {
        id: "vignette-10",
        title: "Circadian Museum Luminaires",
        category: "Architectural Lighting",
        image: gallery10,
      },
      {
        id: "vignette-11",
        title: "Honed Slabs & Slub Linens",
        category: "Material Textures",
        image: gallery11,
      },
      {
        id: "vignette-12",
        title: "Monolithic Quartzite Island",
        category: "Stone",
        image: gallery12,
      },
    ],
  },

  // 7. Final Call to Action
  cta: {
    eyebrow: "COMMISSION YOUR SPACE",
    heading: "Have an Architectural Vision in Mind?",
    description:
      "We welcome private residential inquiries, commercial spatial commissions, and comprehensive architectural renovations worldwide.",
    image: ctaDesk,
    primaryCta: {
      label: "Start a Project Conversation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Explore Our Services",
      href: "/services",
    },
  },
};

export default projectsPageContent;
