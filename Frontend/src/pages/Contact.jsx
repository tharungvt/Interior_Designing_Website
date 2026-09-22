import { useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { contactPageContent } from "../data/contactPageContent";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactProcess from "../components/contact/ContactProcess";
import ContactMap from "../components/contact/ContactMap";
import ContactCTA from "../components/contact/ContactCTA";

export default function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawType = searchParams.get("type");

  // Determine active enquiry type: 'consultation' | 'quote' | 'general'
  const activeType =
    rawType === "quote"
      ? "quote"
      : rawType === "general"
      ? "general"
      : "consultation";

  // Synchronize document title with active intake intent
  useEffect(() => {
    if (activeType === "quote") {
      document.title = "Request a Project Quote | Interior Design Studio";
    } else if (activeType === "general") {
      document.title = "General Enquiries | Interior Design Studio";
    } else {
      document.title = "Book a Free Consultation | Interior Design Studio";
    }
  }, [activeType]);

  // Scroll to form if deep-linked via intent query parameter
  useEffect(() => {
    if (rawType) {
      const timer = setTimeout(() => {
        const formEl = document.getElementById("contact-form-container");
        if (formEl) {
          const yOffset = -90;
          const y = formEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [rawType]);

  // Handle intent change and preserve URL query parameter
  const handleTypeChange = useCallback(
    (newType) => {
      setSearchParams({ type: newType }, { replace: true });
    },
    [setSearchParams]
  );

  const selectActionAndScroll = useCallback(
    (newType) => {
      handleTypeChange(newType);
      setTimeout(() => {
        const formEl = document.getElementById("contact-form-container");
        if (formEl) {
          const y = formEl.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      }, 100);
    },
    [handleTypeChange]
  );

  return (
    <main
      className="min-h-screen bg-[#F1F5F4] text-[#17252C] selection:bg-[#17252C] selection:text-white"
      id="main-content"
    >
      {/* 1. Primary Contact Section: Unified Header + Studio Inquiries & Dynamic Form */}
      <section
        id="contact-main"
        aria-label="Contact Inquiries and Enquiry Form"
        className="pt-8 sm:pt-12 pb-12 sm:pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Architectural Hero Header */}
          <ContactHero
            content={contactPageContent.hero}
            onSelectAction={selectActionAndScroll}
          />

          {/* 2-Column Grid: Studio Inquiries + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Studio Coordinates */}
            <div className="lg:col-span-5">
              <ContactInfo studioInfo={contactPageContent.studioInfo} />
            </div>

            {/* Right Column: Controlled Multi-Intent Form */}
            <div className="lg:col-span-7">
              <ContactForm
                formConfig={contactPageContent.formConfig}
                activeType={activeType}
                onTypeChange={handleTypeChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Studio Location & Map Section */}
      <ContactMap locationData={contactPageContent.location} />

      {/* 3. What Happens Next: Editorial 4-Step Process */}
      <ContactProcess processSteps={contactPageContent.processSteps} />

      {/* 4. Final Contact Action */}
      <ContactCTA
        ctaData={contactPageContent.finalCta}
        onSelectAction={selectActionAndScroll}
      />
    </main>
  );
}
