/**
 * Navigation Data Source
 *
 * Provides dynamic navigation labels, paths, branding, and CTA configuration.
 * When administrators update navigation labels via the future Admin Panel,
 * this structure delivers the updated values while keeping routes safely mapped.
 */

export const navigationData = {
  brand: {
    name: "Interior Design Studio",
    logoAriaLabel: "Interior Design Studio - Home",
    href: "/",
  },
  navItems: [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About Us", href: "/#about" },
    { id: "services", label: "Services", href: "/#services" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "gallery", label: "Gallery", href: "/#projects" },
    { id: "testimonials", label: "Testimonials", href: "/#testimonials" },
    { id: "blog", label: "Blog", href: "/#about" },
    { id: "faq", label: "FAQ", href: "/#why-choose-us" },
    { id: "contact", label: "Contact Us", href: "/#contact" },
  ],
  cta: {
    label: "Get a Free Consultation",
    href: "#contact",
  },
  contactQuick: {
    phone: "+1 (555) 123-4567",
    email: "hello@interiordesignstudio.com",
  },
};
