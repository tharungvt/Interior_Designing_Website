/**
 * Footer Content Data
 *
 * Provides data-driven studio branding, quick links, contact details,
 * working hours, WhatsApp configuration, newsletter text, and legal links.
 */

export const footerData = {
  brand: {
    name: "Interior Design Studio",
    description:
      "Creating thoughtful, functional, and enduring spaces calibrated to your unique way of living and working.",
    href: "/",
  },
  socialLinks: [
    {
      id: "instagram",
      label: "ig",
      ariaLabel: "Instagram",
      href: "https://instagram.com",
    },
    {
      id: "linkedin",
      label: "in",
      ariaLabel: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      id: "twitter",
      label: "𝕏",
      ariaLabel: "Twitter / X",
      href: "https://x.com",
    },
  ],
  quickLinks: {
    title: "Quick Links",
    items: [
      { id: "home", label: "Home", href: "/" },
      { id: "about", label: "About Us", href: "/#about" },
      { id: "services", label: "Services", href: "/#services" },
      { id: "projects", label: "Projects", href: "/#projects" },
      { id: "gallery", label: "Gallery", href: "/gallery" },
      { id: "testimonials", label: "Testimonials", href: "/#testimonials" },
      { id: "blog", label: "Blog", href: "/blog" },
      { id: "faq", label: "FAQ", href: "/faq" },
      { id: "contact", label: "Contact Us", href: "/#contact" },
    ],
  },
  contact: {
    title: "Contact Us",
    phone: "+91 9876543210",
    email: "hello@interiordesignstudio.com",
    address: "[Office Address]",
    workingHours: "[Working Hours]",
    whatsapp: {
      label: "Direct WhatsApp",
      href: "https://wa.me/919876543210",
    },
  },
  newsletter: {
    title: "Stay Updated",
    description: "Subscribe to our newsletter for design insights and studio updates.",
    placeholder: "Enter your email",
    buttonAria: "Subscribe",
    successMessage: "Thank you for subscribing!",
  },
  legal: {
    copyright: "",
    links: [],
  },
};
