export default function FAQCategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}) {
  if (!categories || categories.length === 0) return null;

  return (
    <section
      id="faq-categories"
      className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 sm:mb-8"
      aria-label="FAQ Categories"
    >
      <div className="w-full overflow-x-auto no-scrollbar py-0.5">
        <nav
          className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-[#DCE5E7] rounded-full"
          role="tablist"
          aria-label="Filter FAQ by category"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative px-3 sm:px-4 py-1.5 text-xs tracking-wide cursor-pointer whitespace-nowrap bg-transparent group select-none transition-all duration-200 ${
                  isActive
                    ? "text-[#17252C] font-bold opacity-100"
                    : "text-[#4A5F68] font-medium opacity-80 hover:opacity-100 hover:text-[#17252C]"
                }`}
              >
                <span className="transition-opacity duration-200">{cat.label}</span>

                {/* Subtle underline indicator with smooth vertical shift & opacity change, zero fill color */}
                <span
                  className={`absolute left-3 right-3 sm:left-4 sm:right-4 h-[1.5px] pointer-events-none transition-all duration-250 ease-out ${
                    isActive
                      ? "bottom-0.5 bg-[#17252C] opacity-100 translate-y-0 scale-x-100"
                      : "bottom-0 bg-[#17252C]/40 opacity-0 translate-y-1 scale-x-75 group-hover:opacity-100 group-hover:translate-y-[-2px] group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
