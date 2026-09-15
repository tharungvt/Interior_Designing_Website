import { useState, useCallback } from "react";
import { homeContent } from "../data/homeContent";
import { navigationData } from "../data/navigationData";
import { footerData } from "../data/footerData";

/**
 * =========================================================================
 * Content Service Layer
 * =========================================================================
 *
 * Provides data access and asynchronous state bindings for client components.
 */

// =========================================================================
// Asynchronous Service Methods
// =========================================================================

/**
 * Fetch home page content.
 * @returns {Promise<typeof homeContent>}
 */
export async function getHomeContent() {
  // Future API Integration:
  // try {
  //   const response = await fetch("/api/content/home");
  //   if (response.ok) return await response.json();
  // } catch (err) {
  //   console.warn("API unavailable, falling back to local content layer:", err);
  // }
  return Promise.resolve(homeContent);
}

/**
 * Fetch navigation structure.
 * @returns {Promise<typeof navigationData>}
 */
export async function getNavigationData() {
  // Future API Integration:
  // try {
  //   const response = await fetch("/api/navigation");
  //   if (response.ok) return await response.json();
  // } catch (err) {
  //   console.warn("API unavailable, falling back to local navigation layer:", err);
  // }
  return Promise.resolve(navigationData);
}

/**
 * Fetch footer content.
 * @returns {Promise<typeof footerData>}
 */
export async function getFooterData() {
  // Future API Integration:
  // try {
  //   const response = await fetch("/api/footer");
  //   if (response.ok) return await response.json();
  // } catch (err) {
  //   console.warn("API unavailable, falling back to local footer layer:", err);
  // }
  return Promise.resolve(footerData);
}

/**
 * Fetch active testimonials (supports filtering by published and ordering).
 * @returns {Promise<Array>}
 */
export async function getTestimonials() {
  const data = await getHomeContent();
  const rawItems = data?.testimonials?.items || [];
  // Filter published only and sort by order
  return rawItems
    .filter((item) => item.published !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

// =========================================================================
// React Custom Hooks for Components
// =========================================================================

/**
 * Hook for consuming home content in React components.
 * Initializes with static fallback immediately to eliminate layout shift,
 * then updates asynchronously when API data resolves.
 */
export function useHomeContent() {
  const [content, setContent] = useState(homeContent);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getHomeContent();
      setContent(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { content, loading, error, reload };
}

/**
 * Hook for consuming navigation data in Navbar.
 */
export function useNavigationData() {
  const [navData, setNavData] = useState(navigationData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getNavigationData();
      setNavData(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { navData, loading, error, reload };
}

/**
 * Hook for consuming footer data in Footer.
 */
export function useFooterData() {
  const [footData, setFootData] = useState(footerData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getFooterData();
      setFootData(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { footData, loading, error, reload };
}
