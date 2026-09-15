import ResolvedImage from "./ResolvedImage";

function InnerPageView({ heading, description, paragraphs = [], children }) {
  const copy = paragraphs.length > 0 ? paragraphs : description ? [description] : [];

  return (
    <main>
      {heading && <h1>{heading}</h1>}
      {copy.map((text) => (
        <p key={text}>{text}</p>
      ))}
      {children}
    </main>
  );
}

function InnerItemList({ items = [], children }) {
  const list = items.filter(Boolean);
  if (list.length === 0) return null;

  return (
    <div className="inner-page-list">
      {list.map((item) => children(item))}
    </div>
  );
}

function InnerMedia({ src, alt = "" }) {
  if (!src) return null;
  return <ResolvedImage src={src} alt={alt} />;
}

export { InnerItemList, InnerMedia };
export default InnerPageView;
