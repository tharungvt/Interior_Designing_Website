import whyChooseVector from "../../assets/why-choose-vector.svg";
import { aboutContent } from "../../data/aboutContent";

function WhyChooseUsSection({ content = aboutContent.whyChooseUs }) {
  if (!content) return null;

  const pillars = content.pillars || [];

  return (
    <section
      className="border-b border-[#DCE5E7] bg-[#F1F5F4] py-12 md:py-16 relative overflow-hidden"
      data-purpose="why-choose-us-section"
      id="why-choose-us"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src={whyChooseVector}
          alt="Interior design modern living room sketch illustration"
          className="w-full h-full object-cover object-bottom opacity-40 mix-blend-multiply pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F1F5F4]/70 via-[#F1F5F4]/50 to-[#F1F5F4]/80 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 flex flex-col justify-between min-h-[640px] lg:min-h-[680px]">
        <div className="text-center">
          {content.eyebrow && (
            <span className="text-xs font-bold uppercase tracking-widest text-[#4B6B86] block mb-2">
              {content.eyebrow}
            </span>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#17252C] tracking-tight mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
            {content.heading}
          </h2>
          <p className="text-slate-600 max-w-2xl text-base leading-relaxed mx-auto">
            {content.description}
          </p>
        </div>

        <div className="flex justify-end w-full mt-10">
          <div className="w-full lg:w-1/2 space-y-6 relative z-20 backdrop-blur-[2px]">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="flex items-start gap-4 pb-5 border-b border-[#DCE5E7]"
              >
                <span className="text-2xl font-bold text-[#4B6B86] font-['Plus_Jakarta_Sans',sans-serif] min-w-[36px]">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#17252C] font-['Plus_Jakarta_Sans',sans-serif]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
