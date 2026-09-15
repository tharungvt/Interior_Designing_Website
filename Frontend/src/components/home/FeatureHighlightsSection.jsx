function HighlightIcon({ name }) {
  switch (name) {
    case "sparkles":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "layout":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "shield-check":
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
          <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function FeatureHighlightsSection({ items, content }) {
  const highlightItems = items || content?.items || (Array.isArray(content) ? content : []);
  if (!highlightItems || highlightItems.length === 0) return null;

  return (
    <section className="bg-[#F8FAF9] py-5 sm:py-7 border-b border-brand-border" id="highlights" data-purpose="feature-highlights">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white border border-[#DCE5E7] rounded-2xl p-5 sm:p-6 lg:px-10 lg:py-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {highlightItems.map((item, idx) => (
            <div key={item.id || idx} className="contents">
              <div className="flex items-center gap-3.5 flex-1 justify-center md:justify-start w-full md:w-auto">
                <div className="w-10 h-10 rounded-full bg-[#F1F5F4] flex items-center justify-center text-brand-charcoal shrink-0 transition-transform hover:scale-105">
                  <HighlightIcon name={item.icon} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-brand-charcoal font-sans break-words">{item.title}</span>
                  <span className="text-xs text-brand-mutedcharcoal font-sans break-words">{item.description}</span>
                </div>
              </div>
              {idx < highlightItems.length - 1 && (
                <div className="w-px h-9 bg-brand-border hidden md:block shrink-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureHighlightsSection;
