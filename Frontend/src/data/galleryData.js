import { projectItems } from "./projectsData";

/**
 * Gallery uses existing project photography and titles.
 * No additional captions or assets are introduced here.
 */

export const galleryItems = projectItems.map((project) => ({
  id: project.id,
  title: project.title,
  description: project.metadata,
  image: project.image,
  published: project.published,
  order: project.order,
}));

export const galleryPage = {
  heading: "Gallery",
  description: "Browse photos from our interior design work.",
  items: galleryItems,
};
