import { Fragment } from "react";
import { aboutContent } from "../../data/aboutContent";

function VisionMissionSection({ content = aboutContent.visionMission }) {
  if (!content) return null;

  const items = content.items || [];

  return (
    <section
      className="border-b border-[#DCE5E7] bg-[#F1F5F4]"
      data-purpose="vision-and-mission-section"
      id="vision-mission"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {items.map((item, idx) => (
          <Fragment key={item.title || idx}>
            {idx > 0 && <div className="w-full border-t border-[#DCE5E7]"></div>}

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center py-12 sm:py-14">
              <div className="lg:col-span-4 relative flex items-center justify-start min-h-[100px] sm:min-h-[120px] pr-4 sm:pr-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 flex flex-col justify-center select-none pointer-events-none z-0"
                >
                  {(item.watermark || [item.tag]).map((word, wIdx) => (
                    <span
                      key={wIdx}
                      className="font-['Plus_Jakarta_Sans',sans-serif] font-black text-5xl sm:text-6xl tracking-tight leading-none uppercase opacity-60"
                      style={{
                        WebkitTextStroke: "1.5px rgba(60, 113, 136, 0.22)",
                        color: "transparent",
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <h2 className="relative z-10 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-2xl sm:text-3xl text-[#3C7188] tracking-tight pl-1 sm:pl-2">
                  {item.title}
                </h2>
              </div>

              <div className="lg:col-span-8 mt-4 lg:mt-0 lg:border-l lg:border-[#DCE5E7] lg:pl-10 xl:pl-12 flex items-center">
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-lg sm:text-xl lg:text-2xl text-[#17252C] leading-relaxed font-medium">
                  {item.statement}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default VisionMissionSection;
