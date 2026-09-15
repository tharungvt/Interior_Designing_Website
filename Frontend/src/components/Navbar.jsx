import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigationData } from "../services/contentService";
import Button from "./Button";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Data-driven navigation source from content service layer
  const { navData, navigation: navList } = useNavigationData();
  const brand = navData?.brand || {
    name: "Interior Design Studio",
    logoAriaLabel: "Interior Design Studio - Home",
    href: "/",
  };
  const navItems = useMemo(() => navData?.navItems || navList || [], [navData, navList]);
  const cta = navData?.cta || {
    label: "Get a Free Consultation",
    href: "/contact",
  };
  const contactQuick = navData?.contactQuick || {
    phone: "+1 (555) 123-4567",
    email: "hello@interiordesignstudio.com",
  };

  // Active section scroll spy when on the home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = ["home", "about", "services", "projects", "why-choose-us", "process", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (item, e) => {
    setMobileMenuOpen(false);
    const targetHref = typeof item === "string" ? item : item?.href || "";
    const targetId = typeof item === "object" ? item?.id : null;

    const hashIndex = targetHref.indexOf("#");
    const anchorId = hashIndex !== -1 ? targetHref.slice(hashIndex + 1) : null;
    const isTargetHome = targetHref === "/" || targetHref === "/#home" || anchorId === "home" || targetId === "home";

    if (isHome) {
      if (isTargetHome && !anchorId) {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
        setActiveSection("home");
        return;
      }

      const targetElementId = anchorId || (targetId !== "home" && !targetHref.startsWith("/") ? targetId : null);
      if (targetElementId) {
        const el = document.getElementById(targetElementId);
        if (el) {
          if (e) e.preventDefault();
          const yOffset = -72;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
          window.history.pushState(null, "", `/#${targetElementId}`);
          setActiveSection(targetElementId);
          return;
        }
      }
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-md border-b border-brand-border/80 transition-all duration-300 ${
        scrolled ? "bg-[#F1F5F4]/95 shadow-sm" : "bg-[#F1F5F4]/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Architectural Wordmark */}
        <Link 
          to={brand.href || "/"} 
          onClick={(e) => handleNavClick({ href: "/", id: "home" }, e)}
          className="flex items-center gap-2 focus:outline-none group shrink-0 min-w-0" 
          data-purpose="site-logo"
          aria-label={brand.logoAriaLabel || brand.name}
        >
          <span className="text-[15px] sm:text-[16px] md:text-[17px] font-bold tracking-tight text-brand-charcoal uppercase select-none transition-colors group-hover:text-brand-mineral font-sans truncate">
            {brand.name}
          </span>
        </Link>

        {/* Primary Navigation Links - Rendered dynamically using .map() */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] xl:text-[14px] font-medium text-brand-mutedcharcoal flex-wrap justify-center">
          {navItems.map((item, idx) => {
            const hashIndex = item.href?.indexOf("#");
            const itemAnchor = hashIndex !== -1 ? item.href.slice(hashIndex + 1) : null;
            const isSectionActive = isHome && (
              itemAnchor ? activeSection === itemAnchor : (item.id === "home" && activeSection === "home")
            );
            const isCurrentPage = location.pathname === item.href;
            const isActive = isHome ? isSectionActive : isCurrentPage;

            return (
              <Link 
                key={item.id || item.href || idx}
                to={item.href} 
                onClick={(e) => handleNavClick(item, e)}
                className={`relative py-1 whitespace-nowrap transition-colors ${
                  isActive 
                    ? "text-brand-charcoal font-semibold" 
                    : "hover:text-brand-charcoal"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-mineral rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            href={cta.href || "/#contact"}
            label={cta.label}
            variant="navbar"
            className="hidden sm:inline-flex"
            onClick={(e) => {
              handleNavClick({ href: cta.href || "/#contact", id: "contact" }, e);
            }}
          />

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="lg:hidden p-2 text-brand-charcoal hover:text-brand-mineral rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-mineral/20 shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-5 bg-[#F1F5F4]/98 backdrop-blur-xl border-b border-brand-border shadow-lg space-y-1.5 animate-fadeIn">
          {navItems.map((item, idx) => {
            const hashIndex = item.href?.indexOf("#");
            const itemAnchor = hashIndex !== -1 ? item.href.slice(hashIndex + 1) : null;
            const isSectionActive = isHome && (
              itemAnchor ? activeSection === itemAnchor : (item.id === "home" && activeSection === "home")
            );
            const isCurrentPage = location.pathname === item.href;
            const isActive = isHome ? isSectionActive : isCurrentPage;

            return (
              <Link 
                key={item.id || item.href || idx}
                to={item.href} 
                onClick={(e) => handleNavClick(item, e)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white text-brand-charcoal font-semibold shadow-xs border border-brand-border/70"
                    : "text-brand-mutedcharcoal hover:text-brand-charcoal hover:bg-white/50"
                }`}
              >
                <span className="truncate mr-2">{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-mineral shrink-0"></span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 mt-3 border-t border-brand-border/80 flex flex-col gap-3">
            <Button
              href={cta.href || "/#contact"}
              label={cta.label}
              variant="primary"
              className="w-full text-xs font-semibold py-3"
              onClick={(e) => {
                handleNavClick({ href: cta.href || "/#contact", id: "contact" }, e);
              }}
            />
            <div className="flex items-center justify-between text-[11px] text-brand-slate px-1 pt-1 flex-wrap gap-1">
              <span>{contactQuick.phone}</span>
              <span>{contactQuick.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
