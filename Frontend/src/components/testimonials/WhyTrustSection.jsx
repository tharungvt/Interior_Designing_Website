import introMaterials from "../../assets/about/intro-materials.png";
import introKitchen from "../../assets/about/intro-kitchen.jpg";
import projectWorkspace from "../../assets/about/project-workspace.png";

export default function WhyTrustSection({ whyTrust }) {
  if (!whyTrust) return null;

  return (
    <section
      id="why-clients-trust-us"
      className="border-t border-[#DCE5E7] bg-[#F1F5F4] px-4 py-8 text-[#17252C] sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl rounded-[18px] border border-[#5F747D]/70 bg-[#F8FAF9] px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7">
        <div className="flex flex-col gap-4 border-b border-[#DCE5E7] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex w-fit rounded-[5px] border border-[#5F747D] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#17252C]">
            Why Clients Trust Us
          </span>
        </div>

        <div className="grid gap-7 py-6 sm:gap-8 sm:py-7 lg:grid-cols-[0.86fr_1.14fr] lg:gap-9">
          <div className="min-w-0">
            <h2 className="max-w-xl font-editorial text-4xl font-medium leading-[1.02] tracking-[-0.015em] text-[#17252C] sm:text-5xl lg:text-[54px]">
              {whyTrust.title}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-[1.65] text-[#4A5F68]">
              {whyTrust.subtitle || "Design that begins with how a space should feel, then lets every detail follow."}
            </p>

            <div className="relative mt-5 h-[250px] max-w-[520px] sm:h-[280px] lg:mt-6 lg:h-[300px]">
              <div className="absolute left-0 top-0 h-[76%] w-[64%] overflow-hidden rounded-[12px]">
              <img
                src={introMaterials}
                alt="Natural materials in an interior design studio"
                className="h-full w-full rounded-[12px] object-cover"
              />
            </div>
              <div className="absolute right-0 top-[8%] h-[57%] w-[38%] overflow-hidden rounded-[12px]">
              <img
                src={introKitchen}
                alt="Warm contemporary kitchen interior"
                className="h-full w-full rounded-[12px] object-cover"
              />
            </div>
              <div className="absolute bottom-0 right-[19%] h-[43%] w-[39%] overflow-hidden rounded-[12px]">
              <img
                src={projectWorkspace}
                alt="Interior design workspace with material samples"
                className="h-full w-full rounded-[12px] object-cover"
              />
            </div>
              <span className="absolute bottom-0 left-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5F747D]">
                Spaces that feel like home
              </span>
            </div>
          </div>

          <div className="border-t border-[#DCE5E7] lg:border-t-0 lg:border-l lg:pl-10">
            <div className="grid grid-cols-1 sm:grid-cols-2">
            {whyTrust.principles?.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[42px_1fr] gap-3 border-b border-[#DCE5E7] py-4 sm:min-h-[124px] sm:py-5 sm:pr-6 sm:even:border-l sm:even:pl-6 lg:grid-cols-[48px_1fr]"
              >
                <span className="font-editorial text-3xl leading-none text-[#5F747D]">{principle.number}</span>
                <div>
                  <h4 className="font-editorial text-xl font-medium leading-tight text-[#17252C]">
                    {principle.title}
                  </h4>
                  <p className="mt-2 max-w-md text-xs leading-[1.65] text-[#4A5F68]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
