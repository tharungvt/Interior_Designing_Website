import { useState, useEffect } from "react";
import { useLocation, useSearchParams, useParams, useNavigate } from "react-router-dom";
import projectsPageContent from "../data/projectsPageContent";

import ProjectsIntroSection from "../components/projects/ProjectsIntroSection";
import FeaturedProjectSection from "../components/projects/FeaturedProjectSection";
import ProjectsGridSection from "../components/projects/ProjectsGridSection";
import BeforeAfterSection from "../components/projects/BeforeAfterSection";
import ProjectGallerySection from "../components/projects/ProjectGallerySection";
import ProjectsCtaSection from "../components/projects/ProjectsCtaSection";

export default function Projects() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { category: routeCategory } = useParams();
  const location = useLocation();

  const normalizeCategory = (cat) => {
    if (!cat) return "all";
    const lower = String(cat).toLowerCase().trim();
    if (lower === "all" || lower === "all-projects" || lower === "all_projects") return "all";
    if (lower === "residential") return "residential";
    if (lower === "commercial") return "commercial";
    if (
      lower === "bespoke-joinery" ||
      lower === "bespoke_joinery" ||
      lower === "bespoke" ||
      lower === "joinery" ||
      lower === "specialized"
    ) {
      return "bespoke-joinery";
    }
    return "all";
  };

  const activeFilter = normalizeCategory(
    searchParams.get("category") || routeCategory || "all"
  );
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterChange = (newCat) => {
    const normalized = normalizeCategory(newCat);
    const target = normalized === "all" ? "/projects" : `/projects?category=${normalized}`;
    const current = location.pathname + (location.search || "");
    if (current !== target) {
      navigate(target);
    }

    // Scroll smoothly to project results / featured project section
    setTimeout(() => {
      const targetId =
        normalized === "all" ? "featured-project-section" : "projects-grid-section";
      const targetEl =
        document.getElementById(targetId) ||
        document.getElementById("projects-grid-section");
      if (targetEl) {
        const navbarHeight = 80;
        const y =
          targetEl.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, 60);
  };

  // Smooth scroll support for hash navigation (e.g., #featured, #before-after, #gallery)
  useEffect(() => {
    const hash = location.hash || window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) {
          const navbarHeight = 72;
          const offset = 20;
          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset -
            (navbarHeight + offset);
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      };

      const timer = setTimeout(scrollToTarget, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <main
      className="min-h-screen bg-[#F1F5F4] text-brand-charcoal overflow-x-hidden antialiased selection:bg-brand-mineral selection:text-white"
      id="main-content"
    >
      {/* 1. Portfolio Intro & Dynamic Filters (Starts directly with Curated Monographs) */}
      <ProjectsIntroSection
        content={projectsPageContent.intro}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      {/* 2. Featured Architectural Project */}
      <FeaturedProjectSection
        content={projectsPageContent.featuredProject}
        onSelectProject={setSelectedProject}
      />

      {/* 3. Data-Driven Projects Grid */}
      <ProjectsGridSection
        projects={projectsPageContent.projects}
        activeFilter={activeFilter}
        selectedProject={selectedProject}
        onSelectProject={setSelectedProject}
      />

      {/* 4. Before & After Renovation Transformation */}
      <BeforeAfterSection content={projectsPageContent.beforeAfter} />

      {/* 5. Project Architectural Vignettes Gallery */}
      <ProjectGallerySection content={projectsPageContent.gallery} />

      {/* 6. Final Call to Action */}
      <ProjectsCtaSection content={projectsPageContent.cta} />
    </main>
  );
}
