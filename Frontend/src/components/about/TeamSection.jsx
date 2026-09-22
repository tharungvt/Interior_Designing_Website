import { resolveImage } from "../../utils/imageResolver";
import { aboutContent } from "../../data/aboutContent";

function TeamSection({ content = aboutContent.team }) {
  if (!content) return null;

  const disciplines = content.disciplines || [];

  return (
    <section
      className="border-b border-[#DCE5E7] bg-[#F3F7F6] overflow-hidden py-12 md:py-16 scroll-mt-[72px]"
      data-purpose="team-section"
      id="team"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-4">
              {content.eyebrow && (
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-[1px] bg-[#3C7188]"></span>
                  <span className="text-xs uppercase tracking-[0.16em] font-bold text-[#3C7188]">
                    {content.eyebrow}
                  </span>
                </div>
              )}

              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#17252C] leading-snug tracking-tight">
                {content.heading}
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed">
                {content.description}
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-[#DCE5E7] shadow-sm aspect-[4/3] bg-white group mt-3">
                <img
                  alt={content.imageAlt || "Interior Studio Team in Practice"}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  src={resolveImage(content.image)}
                />
              </div>
            </div>

            <div>
              {disciplines.length > 0 && (
                <div className="divide-y divide-[#DCE5E7] border-y border-[#DCE5E7]">
                  {disciplines.map((item) => (
                    <div key={item.number} className="py-5 flex items-start space-x-6">
                      <span className="font-mono text-sm font-bold text-[#3C7188] pt-0.5">
                        {item.number}
                      </span>
                      <div className="space-y-1">
                        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17252C]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#4A5F68] leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
