import { useEffect } from "react";
import testimonialsPageContent from "../data/testimonialsPageContent";
import TestimonialsGridSection from "../components/testimonials/TestimonialsGridSection";
import WhyTrustSection from "../components/testimonials/WhyTrustSection";
import TestimonialsCtaSection from "../components/testimonials/TestimonialsCtaSection";

export default function Testimonials() {
  useEffect(() => {
    document.title = "Testimonials | Interior Design Studio";
  }, []);

  return (
    <main
      className="min-h-screen bg-[#F1F5F4] text-[#17252C] selection:bg-[#3C7188] selection:text-white"
      id="main-content"
    >
      {/* 1. Dynamic Reviews Grid Section with Categories & Featured Story */}
      <TestimonialsGridSection
        sectionHeader={testimonialsPageContent.sectionHeader}
        filters={testimonialsPageContent.filters}
        featuredStory={testimonialsPageContent.featuredStory}
        testimonials={testimonialsPageContent.testimonials}
      />

      {/* 2. Why Clients Trust Us (4 Principles Section) */}
      <WhyTrustSection whyTrust={testimonialsPageContent.whyTrust} />

      {/* 3. Begin Your Project CTA Section */}
      <TestimonialsCtaSection cta={testimonialsPageContent.cta} />
    </main>
  );
}
