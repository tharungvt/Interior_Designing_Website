/**
 * About Us Content Layer
 *
 * Grounded directly in the Figma design specifications and BRD requirements.
 */

export const aboutContent = {
  hero: {
    eyebrow: "ABOUT OUR STUDIO",
    heading: "Designing Spaces With Purpose",
    headingLines: ["Designing Spaces", "With Purpose"],
    description:
      "We are an interior design studio committed to creating meaningful environments that elevate the way people live, work, and gather. Our approach blends thoughtful design, timeless materials, and meticulous execution to craft spaces that feel personal, functional, and enduring.",
    metadata: [
      { label: "Practice", value: "Interior & Architecture" },
      { label: "Discipline", value: "Residential & Commercial" },
      { label: "Standards", value: "Bespoke Curation" },
    ],
    cta: {
      label: "Explore Our Approach",
      href: "#experience",
    },
    image: "hero-living-room.png",
    imageAlt:
      "Award-winning luxury interior architectural penthouse",
  },

  experience: {
    badge: "Workshop Practice",
    eyebrow: "OUR EXPERIENCE",
    heading: "Experience Through Dedicated Practice",
    description:
      "Our multidisciplinary team brings together design thinking, technical knowledge, and project experience to deliver interiors that stand the test of time. We work closely with clients, consultants and craftsmen to ensure every detail is considered.",
    image: "intro-materials.png",
    imageAlt:
      "Design Studio Workshop and Material Samples",
    items: [
      {
        number: "01",
        title: "Spatial Analysis & Flow",
        description:
          "Prioritizing balanced volume and circulation before selecting decorative elements, ensuring functional fluency in every square foot.",
      },
      {
        number: "02",
        title: "End-to-End Execution",
        description:
          "Direct management from initial schematic layout to millimeter accurate custom joinery installation and turnkey delivery.",
      },
    ],
    cta: {
      label: "Learn More About Our Process",
      href: "#philosophy",
    },
  },

  visionMission: {
    items: [
      {
        tag: "OUR VISION",
        watermark: ["OUR", "VISION"],
        title: "Our Vision",
        statement:
          "To create inspiring interior spaces that bring together thoughtful design, functionality, and lasting visual character.",
      },
      {
        tag: "OUR MISSION",
        watermark: ["OUR", "MISSION"],
        title: "Our Mission",
        statement:
          "To translate each client’s needs and vision into beautifully considered spaces through creative design and precise execution.",
      },
    ],
  },

  philosophy: {
    eyebrow: "OUR DESIGN PHILOSOPHY",
    heading: "Design Philosophy",
    description:
      "We believe exceptional spaces are the result of a harmonious balance between form, function and detail. Every project is an opportunity to create environments that are both beautiful and meaningful.",
    image: "home-interior-01.png",
    imageAlt:
      "Modern interior design space with material honesty",
    items: [
      {
        number: "01",
        title: "FORM",
        description:
          "Balanced proportions and timeless aesthetics crafted with deliberate scale.",
      },
      {
        number: "02",
        title: "FUNCTION",
        description:
          "Spaces that work effortlessly for daily life, optimizing flow, light, and movement.",
      },
      {
        number: "03",
        title: "DETAIL",
        description:
          "Thoughtful materiality, tactile joinery, and bespoke craftsmanship that endure over time.",
      },
    ],
    cta: {
      label: "Explore Our Philosophy",
      href: "#team",
    },
  },

  team: {
    eyebrow: "OUR TEAM",
    heading: "People Behind the Spaces",
    description:
      "Our multidisciplinary studio brings together visionary design thinking, deep technical expertise, and meticulous project experience to craft environments of enduring character and purpose.",
    image: "project-workspace.png",
    imageAlt:
      "Interior Studio Team in Practice",
    disciplines: [
      {
        number: "01",
        title: "STUDIO LEADERSHIP",
        description:
          "Creative direction and overall spatial vision across residential and commercial monographs.",
      },
      {
        number: "02",
        title: "INTERIOR DESIGN",
        description:
          "Concept development, material selection, tactile millwork detailing, and spatial planning.",
      },
      {
        number: "03",
        title: "PROJECT & TECHNICAL TEAM",
        description:
          "Technical coordination, on-site joinery detailing, specification management, and project execution.",
      },
    ],
  },

  whyChooseUs: {
    eyebrow: "WHY CHOOSE US",
    heading: "A More Thoughtful Design Experience",
    description:
      "We combine creativity, technical expertise and a client-focused approach to deliver spaces that are not only beautiful, but also meaningful and enduring.",
    pillars: [
      {
        number: "01",
        title: "Personalized Design",
        description:
          "Spaces tailored to your lifestyle, needs and aesthetic.",
      },
      {
        number: "02",
        title: "Thoughtful Planning",
        description:
          "Careful analysis to ensure beautiful and functional outcomes.",
      },
      {
        number: "03",
        title: "Attention to Detail",
        description:
          "Meticulous execution and fine material junctions at every stage.",
      },
      {
        number: "04",
        title: "Quality-Focused Approach",
        description:
          "A collaborative process built on trust, transparency, and clarity.",
      },
    ],
  },

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
      href: "/contact?type=quote",
    },
    image: "cta-desk.png",
    imageAlt:
      "Luxury Evening Interior Design",
  },
};
