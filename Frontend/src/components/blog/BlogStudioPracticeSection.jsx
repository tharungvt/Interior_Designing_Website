import { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogStudioPracticeSection({ studioPractice }) {
  const [errorIds, setErrorIds] = useState({});

  if (!studioPractice) return null;

  const handleImgError = (id) => {
    setErrorIds((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="studio-practice-section"
      className="py-14 sm:py-18 lg:py-20 bg-[#F1F5F4]"
      aria-label="Studio Practice Notes"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            {studioPractice.eyebrow && (
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-2 block">
                {studioPractice.eyebrow}
              </span>
            )}
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17252C] tracking-tight">
              {studioPractice.title}
            </h2>
          </div>

          {studioPractice.description && (
            <p className="max-w-md text-xs sm:text-sm text-[#4A5F68] font-normal leading-relaxed md:text-right">
              {studioPractice.description}
            </p>
          )}
        </div>

        {/* 2 Practice Notes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {studioPractice.notes?.map((note) => {
            const articleRoute = `/blog/${note.slug || note.id}`;

            return (
              <article
                key={note.id}
                id={`practice-${note.id}`}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#DCE5E7] p-5 sm:p-7 shadow-[0_2px_14px_-2px_rgba(23,37,44,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(23,37,44,0.08)] transition-all duration-300 group flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch"
              >
                {/* Note Thumbnail */}
                <Link
                  to={articleRoute}
                  className="w-full sm:w-44 md:w-48 aspect-[4/3] sm:aspect-auto rounded-xl overflow-hidden bg-[#E5EEEC] shrink-0 block"
                >
                  {note.image && !errorIds[note.id] ? (
                    <img
                      src={note.image}
                      alt={note.alt || note.title}
                      onError={() => handleImgError(note.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#5F747D] text-xs">
                      Studio Note Image
                    </div>
                  )}
                </Link>

                {/* Note Info */}
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3C7188] mb-2 block">
                      {note.category}
                    </span>
                    <h3 className="font-editorial text-base sm:text-lg font-bold text-[#17252C] leading-snug tracking-tight mb-2 group-hover:text-[#3C7188] transition-colors">
                      <Link to={articleRoute}>{note.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4A5F68] font-normal leading-relaxed line-clamp-3 font-sans mb-4">
                      {note.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      to={articleRoute}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252C] group-hover:text-[#3C7188] transition-colors"
                    >
                      <span>{note.readMoreText}</span>
                      <span
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
