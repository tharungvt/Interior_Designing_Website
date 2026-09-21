import { useEffect } from "react";
import Button from "../Button";

/**
 * GalleryLightboxModal
 *
 * Provides full-screen lightbox exploration for any gallery photograph,
 * complete with keyboard accessibility (Escape to close) and backdrop blur.
 */
export default function GalleryLightboxModal({ activeImage, onClose }) {
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImage, onClose]);

  if (!activeImage) return null;

  return (
    <div
      id="gallery-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        id="gallery-lightbox-panel"
        className="bg-[#F5F1E8] rounded-2xl max-w-4xl w-full overflow-hidden border border-[#DDD4C7] shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button positioned relative to the modal itself (approx 16-20px spacing) */}
        <button
          id="lightbox-close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Stage: 100% width and height, object-fit cover, zero empty side space */}
        <div className="w-full relative aspect-[16/10] max-h-[65vh] overflow-hidden bg-brand-charcoal">
          <img
            src={activeImage.image}
            alt={activeImage.title}
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Modal Information Footer */}
        <div className="w-full px-6 py-5 sm:px-7 sm:py-5 bg-[#F5F1E8] border-t border-[#DDD4C7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
          <div className="max-w-xl">
            <span
              id="lightbox-eyebrow"
              className="text-[10px] font-bold uppercase tracking-widest text-[#8A6A45] block mb-1.5"
            >
              {activeImage.eyebrow}
            </span>
            <h2
              id="lightbox-title"
              className="font-editorial text-xl sm:text-2xl font-bold text-[#25221E] tracking-tight leading-snug"
            >
              {activeImage.title}
            </h2>
            {activeImage.caption && (
              <p
                id="lightbox-caption"
                className="text-xs sm:text-sm text-[#6B6257] mt-1.5 leading-relaxed"
              >
                {activeImage.caption}
              </p>
            )}
          </div>

          <div className="shrink-0">
            <Button
              href="/contact"
              label="Inquire About This Space"
              variant="primary"
              className="text-xs px-5 py-2.5 !bg-[#2C2925] hover:!bg-[#403B35] !text-[#FFFFFF] shadow-none"
              style={{ backgroundColor: "#2C2925", color: "#FFFFFF" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
