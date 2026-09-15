/**
 * Testimonials collection — shared by Home and the Testimonials page.
 */

export const testimonialItems = [
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
];

export const testimonialsSection = {
  eyebrow: "CLIENT TESTIMONIALS",
  heading: "What Our Clients Say",
  description:
    "Reflections on spatial harmony, material craft, and the living experience.",
  items: testimonialItems,
};

export const testimonialsPage = {
  heading: "Testimonials",
  description: "See what our clients say about our work.",
  items: testimonialItems,
};
