import { resolveImage } from "../utils/imageResolver";

function ResolvedImage({ src, alt = "", ...props }) {
  const resolved = resolveImage(src);
  if (!resolved) return null;
  return <img src={resolved} alt={alt} {...props} />;
}

export default ResolvedImage;
