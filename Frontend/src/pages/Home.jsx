import { useEffect } from "react";
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

  // Handle incoming hash link smooth scrolling with navbar offset
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const yOffset = -72;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }, 150);
      }
    }
  }, []);

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
      <ServicesSection content={content.services} />
      <ProjectsSection content={content.projects} />
      <WhyChooseUsSection content={content.whyChooseUs} />
      <PortfolioCurationSection content={content.portfolioCuration} />
      <ProcessSection content={content.process} />
      <TestimonialsSection content={content.testimonials} />
      <FinalCtaSection content={content.cta} />
    </main>
  );
}
