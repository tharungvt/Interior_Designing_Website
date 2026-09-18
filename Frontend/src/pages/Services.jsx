import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import servicesPageContent from "../data/servicesPageContent";
import ServicesHeroSection from "../components/services/ServicesHeroSection";
import ResidentialServicesSection from "../components/services/ResidentialServicesSection";
import ResidentialCaseStudiesSection from "../components/services/ResidentialCaseStudiesSection";
import CommercialServicesSection from "../components/services/CommercialServicesSection";
import SpecializedServicesSection from "../components/services/SpecializedServicesSection";
import ServicesCtaSection from "../components/services/ServicesCtaSection";

export default function Services() {
  const location = useLocation();

  // Smooth scroll support for hash navigation (e.g., #residential, #commercial, #specialized)
  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          const headerEl =
            el.querySelector("[data-anchor-target]") ||
            el.querySelector("#residential-header") ||
            el.querySelector("h2") ||
            el;
          const navbarHeight = 72;
          const offset = 20;
          const y =
            headerEl.getBoundingClientRect().top +
            window.pageYOffset -
            (navbarHeight + offset);
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      };

      const timer = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.hash]);

  return (
    <main
      className="min-h-screen bg-[#F1F5F4] text-brand-charcoal overflow-x-hidden antialiased selection:bg-brand-mineral selection:text-white"
      id="main-content"
    >
      {/* 1. Hero Section */}
      <ServicesHeroSection content={servicesPageContent.hero} />

      {/* 2. 01 / Residential Interior Design */}
      <ResidentialServicesSection content={servicesPageContent.residential} />

      {/* 3. Selected Residential Case Studies */}
      <ResidentialCaseStudiesSection content={servicesPageContent.caseStudies} />

      {/* 4. 02 / Commercial Interior Design */}
      <CommercialServicesSection content={servicesPageContent.commercial} />

      {/* 5. 03 / Specialized Design Services */}
      <SpecializedServicesSection content={servicesPageContent.specialized} />

      {/* 6. Final Call to Action */}
      <ServicesCtaSection content={servicesPageContent.cta} />
    </main>
  );
}
