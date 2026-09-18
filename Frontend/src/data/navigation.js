/**
 * Navigation Data
 *
 * Centralized configuration for site-wide navigation links, branding, and quick contact details.
 * Adding, removing, or reordering a route or navigation item requires editing this data only.
 */

export const navigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "testimonials", label: "Testimonials", href: "/#testimonials" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact Us", href: "/#contact" },
];

export const navigationData = {
  brand: {
    name: "Interior Design Studio",
    logoAriaLabel: "Interior Design Studio - Home",
    href: "/",
  },
  navItems: navigation,
  cta: {
    label: "Get a Free Consultation",
    href: "/#contact",
  },
  contactQuick: {
    phone: "+1 (555) 123-4567",
    email: "hello@interiordesignstudio.com",
  },
};

export default navigation;
