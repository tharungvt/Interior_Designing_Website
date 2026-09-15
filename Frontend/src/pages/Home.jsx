import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHomeContent } from "../services/contentService";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import PortfolioCurationSection from "../components/home/PortfolioCurationSection";
import ProcessSection from "../components/home/ProcessSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FinalCtaSection from "../components/home/FinalCtaSection";

export default function Home() {
  const { content, loading, error } = useHomeContent();
  const location = useLocation();

  // Handle incoming hash link smooth scrolling with navbar offset
  useEffect(() => {
    if (loading) return;

    const hash = location.hash || window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -72;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      };

      const timer = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash, loading]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F1F5F4]" id="main-content">
        <div className="w-8 h-8 rounded-full border-2 border-brand-mineral border-t-transparent animate-spin"></div>
      </main>
    );
  }

  if (error || !content) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F1F5F4] p-6" id="main-content">
        <div className="bg-white p-6 rounded-2xl border border-brand-border text-center max-w-md shadow-sm">
          <p className="text-sm text-brand-slate mb-4">Unable to load page content.</p>
          <button 
            type="button"
            onClick={() => window.location.reload()}
            className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-mineral text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main 
      className="overflow-x-hidden antialiased selection:bg-brand-mineral selection:text-white bg-[#F1F5F4]" 
      id="main-content"
    >
      <HeroSection content={content.hero} />
      <AboutSection content={content.about} />
      <ServicesSection content={content.services} services={content.services} />
      <ProjectsSection content={content.projects} projects={content.projects} />
      <WhyChooseUsSection content={content.whyChooseUs} />
      <PortfolioCurationSection content={content.portfolioCuration || content.portfolio} />
      <ProcessSection content={content.process} steps={content.process?.steps || content.process} />
      <TestimonialsSection content={content.testimonials} testimonials={content.testimonials?.items || content.testimonials} />
      <FinalCtaSection content={content.cta} />
    </main>
  );
}
