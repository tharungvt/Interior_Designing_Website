import { useState } from "react";
import { Link } from "react-router-dom";
import { useFooterData } from "../services/contentService";

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const { footData } = useFooterData();
  const brand = footData?.brand || {
    name: "Interior Design Studio",
    description:
      "Creating thoughtful, functional, and enduring spaces calibrated to your unique way of living and working.",
    href: "/",
  };
  const socialLinks = footData?.socialLinks || [];
  const quickLinks = footData?.quickLinks || {
    title: "Quick Links",
    items: [],
  };
  const contact = footData?.contact || {
    title: "Contact Us",
    phone: "+1 (555) 123-4567",
    email: "hello@interiordesignstudio.com",
    address: "123 Design Avenue, Suite 400, Design District, NY 10001",
    workingHours: "Mon - Fri: 9:00 AM – 6:00 PM",
    whatsapp: {
      label: "Direct WhatsApp",
      href: "https://wa.me/",
    },
  };
  const newsletter = footData?.newsletter || {
    title: "Stay Updated",
    description: "Subscribe to our newsletter for design insights and studio updates.",
    placeholder: "Enter your email",
    buttonAria: "Subscribe",
    successMessage: "Thank you for subscribing!",
  };
  const legal = footData?.legal || {
    copyright: `© ${new Date().getFullYear()} Interior Design Studio. All rights reserved.`,
    links: [],
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSubmitted(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#E4ECEB] border-t border-brand-border pt-16 pb-12 scroll-mt-20" data-purpose="site-footer" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-border">
          {/* Studio Brand Info */}
          <div className="lg:col-span-4">
            <Link className="flex items-center gap-2 mb-4 group" data-purpose="footer-logo" to={brand.href || "/"}>
              <span className="text-base font-bold tracking-tight text-brand-charcoal uppercase group-hover:text-brand-mineral transition-colors font-sans truncate">
                {brand.name}
              </span>
            </Link>
            <p className="text-brand-slate text-xs leading-relaxed max-w-sm mb-6 break-words">
              {brand.description}
            </p>
            {/* Social Link Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.id || social.label}
                  aria-label={social.ariaLabel || social.label} 
                  className="w-8 h-8 rounded-full bg-white border border-brand-border text-brand-charcoal hover:bg-brand-charcoal hover:text-white flex items-center justify-center transition-colors text-xs font-semibold" 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-4">
              {quickLinks.title}
            </h4>
            <ul className="space-y-2 text-xs text-brand-mutedcharcoal font-medium">
              {quickLinks.items?.map((item, idx) => (
                <li key={item.id || idx}>
                  <Link className="hover:text-brand-charcoal transition-colors break-words" to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-4">
              {contact.title}
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-mutedcharcoal font-medium">
              {contact.phone && (
                <li className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-brand-charcoal shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>{contact.phone}</span>
                </li>
              )}
              {contact.email && (
                <li className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-brand-charcoal shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="break-all">{contact.email}</span>
                </li>
              )}
              {contact.address && (
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-brand-charcoal shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="break-words">{contact.address}</span>
                </li>
              )}
              {contact.workingHours && (
                <li className="text-[11px] text-brand-slate pt-1">{contact.workingHours}</li>
              )}
              {contact.whatsapp?.href && (
                <li className="pt-1.5">
                  <a 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-brand-border text-brand-charcoal text-[11px] font-bold hover:bg-brand-border transition-colors" 
                    href={contact.whatsapp.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>{contact.whatsapp.label}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Stay Updated Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2">
              {newsletter.title}
            </h4>
            <p className="text-brand-slate text-xs leading-relaxed mb-4 break-words">
              {newsletter.description}
            </p>
            {newsletterSubmitted ? (
              <div className="p-3 bg-white border border-brand-border rounded-xl text-xs text-brand-charcoal font-medium flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> {newsletter.successMessage}
              </div>
            ) : (
              <form className="flex items-center gap-2" onSubmit={handleNewsletterSubmit}>
                <input 
                  className="w-full bg-white border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-brand-charcoal placeholder-brand-slate focus:outline-none focus:ring-2 focus:ring-brand-mineral/20 focus:border-brand-mineral" 
                  placeholder={newsletter.placeholder} 
                  required 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button 
                  aria-label={newsletter.buttonAria} 
                  className="w-9 h-9 shrink-0 bg-brand-charcoal hover:bg-brand-mineral text-white rounded-xl flex items-center justify-center transition-colors shadow-glow-atelier cursor-pointer" 
                  type="submit"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-slate gap-4">
          <p className="break-words">{legal.copyright}</p>
          <div className="flex items-center gap-6 flex-wrap">
            {legal.links?.map((link, idx) => (
              <a 
                key={link.id || idx}
                className="hover:text-brand-charcoal transition-colors" 
                href={link.href} 
                onClick={(e) => {
                  if (link.href?.startsWith("#")) e.preventDefault();
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
