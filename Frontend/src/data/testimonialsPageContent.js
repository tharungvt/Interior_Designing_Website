// Testimonials Page Data Source
// Local image imports from dedicated src/assets/testimonials/ folder
import heroTestimonials from "../assets/testimonials/hero-testimonials.png";
import featuredTribeca from "../assets/testimonials/featured-tribeca.png";
import testimonial01 from "../assets/testimonials/testimonial-01.png";
import testimonial02 from "../assets/testimonials/testimonial-02.png";
import testimonial03 from "../assets/testimonials/testimonial-03.png";
import testimonial04 from "../assets/testimonials/testimonial-04.jpg";
import testimonial05 from "../assets/testimonials/testimonial-05.jpg";
import testimonial06 from "../assets/testimonials/testimonial-06.jpg";
import testimonial07 from "../assets/testimonials/testimonial-07.png";
import testimonial08 from "../assets/testimonials/testimonial-08.png";
import testimonial09 from "../assets/testimonials/testimonial-09.png";

export const testimonialsPageContent = {
  hero: {
    eyebrow: "CLIENT STORIES",
    title: "Designed Spaces.\nReal Experiences.",
    description:
      "Hear from clients who trusted our studio to transform their homes, workplaces, and everyday spaces.",
    backgroundImage: heroTestimonials,
    primaryCta: {
      label: "Get a Free Consultation",
      href: "/contact",
      showArrow: true,
    },
  },

  filters: [
    { id: "all", label: "All Reviews" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
  ],

  sectionHeader: {
    eyebrow: "WHAT OUR CLIENTS SAY",
    title: "Thoughtful Design, Experienced\nFirsthand",
    description:
      "These genuine customer reflections highlight our studio's commitment to architectural rigor, honest communication, seamless project coordination, and lasting spatial craft.",
  },

  featuredStory: {
    id: "featured-rostova",
    name: "Elena & Mark Rostova",
    category: "residential",
    categoryLabel: "Residential · Full Home",
    project: "Tribeca Penthouse Renovation",
    rating: "5.0 / 5.0",
    stars: 5,
    eyebrow: "FEATURED CLIENT STORY",
    quote:
      "They asked how we actually live before making any big decisions. Now the house feels comfortable, personal, and much easier to live in every day.",
    badge: "Verified Project Client · Completed Turnkey Execution",
    image: testimonial01,
    projectImage: featuredTribeca,
  },

  testimonials: [
    {
      id: "nair",
      name: "Priya & Arun Nair",
      category: "residential",
      categoryLabel: "Residential · Kitchen",
      rating: "5.0",
      stars: 5,
      quote:
        "We cook a lot, so we needed a kitchen that could handle real life, not just look good in photos. The storage works brilliantly and the worktop still feels special every time we use it.",
      image: testimonial02,
      initials: "PN",
    },
    {
      id: "vance",
      name: "Julian Vance",
      category: "commercial",
      categoryLabel: "Commercial · Office",
      rating: "5.0",
      stars: 5,
      quote:
        "The office finally works for both quiet concentration and team meetings. They kept us on schedule and made the space feel welcoming without making it look like a typical corporate office.",
      image: testimonial03,
      initials: "JV",
    },
    {
      id: "thorne",
      name: "Claire & Henry Thorne",
      category: "residential",
      categoryLabel: "Residential · Living Room",
      rating: "5.0",
      stars: 5,
      quote:
        "They spent time understanding how we use the room before suggesting anything. The morning light is beautiful now, and the living room feels calm without being too precious.",
      image: testimonial04,
      initials: "CH",
    },
    {
      id: "rossi-stone",
      name: "Matteo Rossi & Gabriel Stone",
      category: "commercial",
      categoryLabel: "Commercial · Restaurant",
      rating: "5.0",
      stars: 5,
      quote:
        "Opening a 90-seat restaurant came with a very tight schedule and a lot of moving parts. They helped us make the room feel warm and lively while keeping it comfortable when the dining room is full.",
      image: testimonial05,
      initials: "MG",
    },
    {
      id: "lin",
      name: "Sarah Lin",
      category: "residential",
      categoryLabel: "Residential · Bedroom",
      rating: "5.0",
      stars: 5,
      quote:
        "The new bedroom feels peaceful without losing any storage. We especially love the headboard and the softer lighting in the evening.",
      image: testimonial06,
      initials: "SL",
    },
    {
      id: "mercer",
      name: "David & Katherine Mercer",
      category: "residential",
      categoryLabel: "Residential · Villa",
      rating: "5.0",
      stars: 5,
      quote:
        "The stone floor makes the house and terrace feel connected, which was exactly what we hoped for. The team also kept the work moving smoothly while we were living elsewhere.",
      image: testimonial07,
      initials: "DK",
    },
    {
      id: "aria-thorne",
      name: "Aria Thorne Boutique",
      category: "commercial",
      categoryLabel: "Commercial · Retail",
      rating: "5.0",
      stars: 5,
      quote:
        "Customers comment on the shop as soon as they walk in. The displays are easier to change, and people seem to spend more time exploring instead of heading straight back out.",
      image: testimonial08,
      initials: "AT",
    },
    {
      id: "nexus-wealth",
      name: "Nexus Wealth Advisory",
      category: "commercial",
      categoryLabel: "Commercial · Corporate",
      rating: "5.0",
      stars: 5,
      quote:
        "We always knew what was happening and what needed our decision next. The finished office feels polished and professional, but it is still comfortable for the team to use every day.",
      image: testimonial09,
      initials: "NW",
    },
  ],

  whyTrust: {
    eyebrow: "WHY CLIENTS TRUST US",
    title: "A Design Experience Built Around You",
    subtitle:
      "Every testimonial reflects four foundational principles that define every project undertaken by our studio.",
    principles: [
      {
        number: "01",
        title: "Thoughtful Design",
        description:
          "Spaces calibrated strictly to how you live, work, and interact never generic templates or fleeting trends.",
      },
      {
        number: "02",
        title: "Clear Communication",
        description:
          "Transparent timelines, structured review milestones, and direct architect led coordination at every phase.",
      },
      {
        number: "03",
        title: "Attention to Detail",
        description:
          "Rigorous oversight of millwork junctions, material tactility, acoustic tuning, and architectural lighting.",
      },
      {
        number: "04",
        title: "End to End Support",
        description:
          "Comprehensive turnkey execution from initial schematics and procurement through white glove site delivery.",
      },
    ],
  },

  cta: {
    eyebrow: "BEGIN YOUR PROJECT",
    title: "Lets Create a Space That Feels Like Yours",
    description:
      "Ready to discuss your space? Tell us about your project and our design team will help you take the next step.",
    primaryCta: {
      label: "Get a Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      label: "Request a Quote",
      href: "/contact?type=quote",
    },
  },
};

export default testimonialsPageContent;
