import { useState, useEffect } from "react";
import {
  faqCategories,
  faqHeroContent,
  faqEditorialContent,
  faqCtaContent,
  faqData,
} from "../data/faqData";
import FAQHero from "../components/faq/FAQHero";
import FAQCategoryFilter from "../components/faq/FAQCategoryFilter";
import FAQAccordion from "../components/faq/FAQAccordion";
import FAQCTA from "../components/faq/FAQCTA";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    document.title = "FAQ / Questions, Answered | Interior Design Studio";
  }, []);

  // Filter items dynamically based on active category
  const filteredFaqs = faqData.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <main
      className="min-h-screen bg-[#F1F5F4] text-[#17252C] selection:bg-[#3C7188] selection:text-white"
      id="main-content"
    >
      {/* 1. FAQ Hero */}
      <FAQHero content={faqHeroContent} />

      {/* 2. FAQ Category Navigation */}
      <FAQCategoryFilter
        categories={faqCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 3. Dynamic Editorial Two-Column FAQ Accordion */}
      <FAQAccordion
        editorialContent={faqEditorialContent}
        faqItems={filteredFaqs}
      />

      {/* 4. Still Have Questions CTA */}
      <FAQCTA cta={faqCtaContent} />
    </main>
  );
}
