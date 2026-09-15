/**
 * Shared collection helpers used by the content service and list UIs.
 * Keep filtering/sorting here so a future API can return the same shape.
 */

export function publishedItems(items = []) {
  return items
    .filter((item) => item && item.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}
