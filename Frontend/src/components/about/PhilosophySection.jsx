import { resolveImage } from "../../utils/imageResolver";
import { aboutContent } from "../../data/aboutContent";

function PhilosophySection({ content = aboutContent.philosophy }) {
  if (!content) return null;

  const handleSmoothScroll = (e, href) => {
    if (href && href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const items = content.items || [];

  return (
    <section
      className="py-12 md:py-16 border-b border-[#DCE5E7] bg-[#F1F5F4] scroll-mt-[72px]"
      data-purpose="design-philosophy-section"
      id="philosophy"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCE5E7] shadow-sm bg-white aspect-[4/3] group">
              <img
                alt={content.imageAlt || "Modern interior design space with material honesty"}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                src={resolveImage(content.image)}
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            {content.eyebrow && (
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-[#3C7188]"></span>
                <span className="text-xs uppercase tracking-[0.16em] font-bold text-[#3C7188]">
                  {content.eyebrow}
                </span>
              </div>
            )}

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[44px] text-[#17252C] font-bold leading-tight tracking-tight">
              {content.heading}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-[#4A5F68] font-normal">
              {content.description}
            </p>

            {items.length > 0 && (
              <div className="divide-y divide-[#DCE5E7] border-y border-[#DCE5E7]">
                {items.map((item) => (
                  <div key={item.number} className="py-4 flex items-start space-x-4">
                    <span className="text-xs font-mono font-bold text-[#3C7188] pt-0.5">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17252C]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A5F68] mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {content.cta && (
              <div className="pt-2">
                <a
                  className="inline-flex items-center space-x-3 text-sm font-semibold text-[#17252C] hover:text-[#3C7188] transition-colors duration-200 group cursor-pointer"
                  href={content.cta.href}
                  onClick={(e) => handleSmoothScroll(e, content.cta.href)}
                >
                  <span className="w-8 h-[1.5px] bg-[#17252C] group-hover:bg-[#3C7188] group-hover:w-12 transition-all duration-300"></span>
                  <span>{content.cta.label}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
