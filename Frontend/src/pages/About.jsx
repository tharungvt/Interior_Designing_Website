import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { aboutContent } from "../data/aboutContent";
import AboutHeroSection from "../components/about/AboutHeroSection";
import ExperienceSection from "../components/about/ExperienceSection";
import VisionMissionSection from "../components/about/VisionMissionSection";
import PhilosophySection from "../components/about/PhilosophySection";
import TeamSection from "../components/about/TeamSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import AboutCtaSection from "../components/about/AboutCtaSection";

export default function About() {
  const location = useLocation();

  // Handle incoming hash link smooth scrolling with navbar offset
  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -72;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      };

      const timer = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main
      className="flex-grow bg-[#F1F5F4] text-[#17252C] font-sans antialiased selection:bg-[#17252C] selection:text-white min-h-screen"
      id="main-content"
    >
      <AboutHeroSection content={aboutContent.hero} />
      <ExperienceSection content={aboutContent.experience} />
      <VisionMissionSection content={aboutContent.visionMission} />
      <PhilosophySection content={aboutContent.philosophy} />
      <TeamSection content={aboutContent.team} />
      <WhyChooseUsSection content={aboutContent.whyChooseUs} />
      <AboutCtaSection content={aboutContent.cta} />
    </main>
  );
}
