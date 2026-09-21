import { useState, useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { galleryPageContent } from "../data/galleryPageContent";
import GalleryHeroSection from "../components/gallery/GalleryHeroSection";
import GalleryFilterSection from "../components/gallery/GalleryFilterSection";
import GalleryGridSection from "../components/gallery/GalleryGridSection";
import GalleryCtaSection from "../components/gallery/GalleryCtaSection";
import GalleryLightboxModal from "../components/gallery/GalleryLightboxModal";


export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeImage, setActiveImage] = useState(null);

  // Synchronize active category with React Router URL search parameters
  const currentCategory = useMemo(() => {
    const param = searchParams.get("category");
    if (!param) return "all";

    // Validate that the requested query parameter exists in our filter definition
    const valid = galleryPageContent.filters.some((f) => f.id === param);
    return valid ? param : "all";
  }, [searchParams]);

  // Dynamic filter state handler updating the browser URL
  const handleFilterChange = useCallback(
    (categoryId) => {
      if (categoryId === "all") {
        setSearchParams({});
      } else {
        setSearchParams({ category: categoryId });
      }
    },
    [setSearchParams]
  );

  // Filter items matching active category
  const filteredItems = useMemo(() => {
    if (currentCategory === "all") {
      return galleryPageContent.items;
    }

    return galleryPageContent.items.filter((item) =>
      item.categories.includes(currentCategory)
    );
  }, [currentCategory]);

  return (
    <main
      id="gallery-page"
      className="min-h-screen bg-[#F1F5F4] text-brand-charcoal selection:bg-brand-mineral selection:text-white"
    >
      {/* 1. Centered Architectural Hero Section */}
      <GalleryHeroSection hero={galleryPageContent.hero} />

      {/* 2. Category Filter Bar */}
      <GalleryFilterSection
        filters={galleryPageContent.filters}
        activeFilter={currentCategory}
        onFilterChange={handleFilterChange}
      />

      {/* 3. Responsive Architectural Bento/Masonry Grid */}
      <GalleryGridSection
        items={filteredItems}
        activeFilter={currentCategory}
        onImageClick={setActiveImage}
      />

      {/* 4. Consultation Invitation CTA */}
      <GalleryCtaSection cta={galleryPageContent.cta} />

      {/* 5. Fullscreen Image Lightbox Modal */}
      <GalleryLightboxModal
        activeImage={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </main>
  );
}
