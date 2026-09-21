import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, blogPageContent } from "../data/blogPageContent";
import Button from "../components/Button";

export default function BlogArticle() {
  const { slug } = useParams();
  const [imgError, setImgError] = useState(false);

  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Interior Design Studio Blog`;
    } else {
      document.title = "Article Not Found | Interior Design Studio Blog";
    }
    window.scrollTo(0, 0);
  }, [article, slug]);

  if (!article) {
    return (
      <main
        className="min-h-[70vh] bg-[#F1F5F4] text-[#17252C] flex items-center justify-center px-6 py-20"
        id="main-content"
      >
        <div className="max-w-xl mx-auto text-center bg-white border border-[#DCE5E7] rounded-3xl p-8 sm:p-12 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-3 block">
            ARTICLE NOT FOUND
          </span>
          <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-[#17252C] mb-4">
            We couldn&apos;t find this article
          </h1>
          <p className="text-sm text-[#4A5F68] leading-relaxed mb-8">
            The design note or insight you are looking for may have been moved or updated.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#17252C] hover:bg-[#3C7188] text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
          >
            <span>← Return to All Articles</span>
          </Link>
        </div>
      </main>
    );
  }

  // Related articles (pulling from latestPosts excluding current article)
  const relatedArticles = blogPageContent.latestPosts
    .filter((post) => post.slug !== article.slug)
    .slice(0, 3);

  return (
    <main
      className="blog-page min-h-screen bg-[#F1F5F4] text-[#17252C] selection:bg-[#3C7188] selection:text-white"
      id="main-content"
    >
      {/* 1. Article Header & Back Link */}
      <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-8 sm:pt-12 pb-14 sm:pb-20">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5F747D] hover:text-[#17252C] transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back to All Insights</span>
          </Link>
        </div>

        {/* Category & Read Time */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#3C7188] mb-4">
          <span>{article.category || "DESIGN INSIGHT"}</span>
          {article.readTime && (
            <>
              <span className="text-[#A3B8BE]">•</span>
              <span className="text-[#5F747D]">{article.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17252C] leading-[1.14] mb-6">
          {article.title}
        </h1>

        {/* Author Byline */}
        {(article.author || article.authorNote) && (
          <div className="flex items-center gap-3 pb-8 mb-8 border-b border-[#DCE5E7]">
            <div className="w-10 h-10 rounded-full bg-[#17252C] text-white flex items-center justify-center font-bold text-xs shrink-0 tracking-wider">
              {article.author
                ? article.author.slice(0, 2).toUpperCase()
                : "ID"}
            </div>
            <div>
              <p className="text-sm font-bold text-[#17252C] font-sans">
                {article.author || "Interior Design Studio"}
              </p>
              <p className="text-xs text-[#5F747D] font-medium">
                {article.authorRole || article.authorNote || "Studio Architectural Lead"}
              </p>
            </div>
          </div>
        )}

        {/* Hero Image */}
        {article.image && (
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-12 border border-[#DCE5E7] shadow-sm bg-[#E5EEEC] aspect-[16/10]">
            {!imgError ? (
              <img
                src={article.image}
                alt={article.alt || article.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#5F747D] text-sm">
                Article Architectural Image
              </div>
            )}
          </div>
        )}

        {/* Excerpt Lead Paragraph */}
        {article.description && (
          <div className="text-lg sm:text-xl font-editorial font-normal leading-relaxed text-[#17252C] pb-6 mb-8 border-b border-[#DCE5E7]">
            {article.description}
          </div>
        )}

        {/* Main Body Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-[#33464F] leading-relaxed font-sans font-normal">
          {article.content && Array.isArray(article.content) ? (
            article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : article.content ? (
            <p>{article.content}</p>
          ) : (
            <p>
              Our studio approaches every project with a dedication to timeless
              ergonomics, authentic finishes, and natural illumination. Every
              spatial decision is made to enrich daily rituals.
            </p>
          )}
        </div>

        {/* Key Architectural Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-[#DCE5E7] p-6 sm:p-8 shadow-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-4">
              STUDIO PRINCIPLES & TAKEAWAYS
            </h2>
            <ul className="space-y-3">
              {article.keyTakeaways.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#17252C]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3C7188] mt-2 shrink-0" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* 2. Related Articles Grid */}
      {relatedArticles.length > 0 && (
        <section
          className="py-14 sm:py-18 bg-white border-t border-[#DCE5E7]"
          aria-label="Related Architectural Insights"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#3C7188] mb-1.5 block">
                  CONTINUE READING
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#17252C] tracking-tight">
                  Related Insights
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-xs font-semibold text-[#17252C] hover:text-[#3C7188] transition-colors"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {relatedArticles.map((post) => {
                const route = `/blog/${post.slug || post.id}`;
                return (
                  <article
                    key={post.id}
                    className="bg-[#F8FAF9] rounded-2xl border border-[#DCE5E7] overflow-hidden flex flex-col justify-between group hover:shadow-[0_8px_24px_-4px_rgba(23,37,44,0.08)] transition-all"
                  >
                    <div>
                      <Link to={route} className="block aspect-[16/10] overflow-hidden bg-[#E5EEEC]">
                        {post.image && (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                        )}
                      </Link>
                      <div className="p-5">
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3C7188] mb-2">
                          <span>{post.category}</span>
                          <span className="text-[#A3B8BE]">•</span>
                          <span className="text-[#5F747D]">{post.readTime}</span>
                        </div>
                        <h3 className="font-editorial text-base sm:text-lg font-bold text-[#17252C] leading-snug tracking-tight mb-2 group-hover:text-[#3C7188] transition-colors">
                          <Link to={route}>{post.title}</Link>
                        </h3>
                        <p className="text-xs text-[#4A5F68] line-clamp-2 leading-relaxed">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        to={route}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17252C] group-hover:text-[#3C7188] transition-colors"
                      >
                        <span>Read Article</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. Global Bottom CTA */}
      <section className="py-12 sm:py-16 bg-[#F1F5F4] border-t border-[#DCE5E7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#E5EEEC] border border-[#DCE5E7] rounded-3xl p-6 sm:p-9 lg:p-12 text-center shadow-[0_4px_24px_-4px_rgba(23,37,44,0.06)] flex flex-col items-center">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.26em] text-[#3C7188] mb-2">
              BEGIN YOUR PROJECT
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17252C] max-w-3xl leading-[1.15] mb-3">
              Let&apos;s Create a Space That Feels Like Yours
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#4A5F68] max-w-2xl leading-relaxed mb-6 sm:mb-8 font-sans">
              Ready to discuss your space? Tell us about your project and our design team will help you take the next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Button
                href="/contact"
                variant="primary"
                label="Get a Free Consultation"
                showArrow={true}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold"
              />
              <Button
                href="/contact?type=quote"
                variant="secondary"
                label="Request a Quote"
                showArrow={true}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold bg-white text-[#17252C] border border-[#DCE5E7] hover:bg-white/90"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
