import { useState, useCallback } from "react";
import { homeContent } from "../data/homeContent";
import { navigation, navigationData } from "../data/navigation";
import { services, servicesSection } from "../data/services";
import { projects, projectsSection } from "../data/projects";
import { testimonials, testimonialsSection } from "../data/testimonials";
import { processSteps, processSection } from "../data/process";
import { footerData } from "../data/footerData";

/**
 * =========================================================================
 * Content Service Layer
 * =========================================================================
 *
 * Provides the data access layer for all components.
 * Current state: Consumes structured local data models.
 * Future API readiness: Replace the simulated promises with real fetch calls.
 * Components NEVER fetch API directly; they always go through this layer.
 */

// =========================================================================
// Asynchronous Service Methods (Future API Endpoints)
// =========================================================================

/**
 * Fetch home page composite content.
 * @returns {Promise<typeof homeContent>}
 */
export async function getHomeContent() {
  // Future API integration:
  // try {
  //   const res = await fetch("/api/content/home");
  //   if (res.ok) return await res.json();
  // } catch (err) {
  //   console.warn("API unavailable, using local content layer:", err);
  // }
  return Promise.resolve(homeContent);
}

/**
 * Fetch navigation structure.
 * @returns {Promise<typeof navigationData>}
 */
export async function getNavigationData() {
  // Future API integration:
  // try {
  //   const res = await fetch("/api/navigation");
  //   if (res.ok) return await res.json();
  // } catch (err) {
  //   console.warn("API unavailable, using local navigation layer:", err);
  // }
  return Promise.resolve(navigationData);
}

/**
 * Fetch raw navigation links array.
 * @returns {Promise<typeof navigation>}
 */
export async function getNavigation() {
  return Promise.resolve(navigation);
}

/**
 * Fetch services list or section data.
 * @returns {Promise<typeof services>}
 */
export async function getServices() {
  return Promise.resolve(services);
}

/**
 * Fetch projects list or section data.
 * @returns {Promise<typeof projects>}
 */
export async function getProjects() {
  return Promise.resolve(projects);
}

/**
 * Fetch active testimonials (supports filtering by published status and order).
 * @returns {Promise<typeof testimonials>}
 */
export async function getTestimonials() {
  return Promise.resolve(
    testimonials
      .filter((t) => t.published !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0))
  );
}

/**
 * Fetch process steps.
 * @returns {Promise<typeof processSteps>}
 */
export async function getProcess() {
  return Promise.resolve(processSteps);
}

/**
 * Fetch footer content.
 * @returns {Promise<typeof footerData>}
 */
export async function getFooterData() {
  return Promise.resolve(footerData);
}

// =========================================================================
// React Custom Hooks for Components
// =========================================================================

/**
 * Hook for consuming home content in React components.
 * Initializes with static fallback to eliminate layout shift.
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

  return { navData, navigation: navData?.navItems || navigation, loading, error, reload };
}

/**
 * Hook for consuming services data.
 */
export function useServices() {
  const [items, setItems] = useState(services);
  const [section, setSection] = useState(servicesSection);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getServices();
      setItems(data);
      setSection((prev) => ({ ...prev, items: data }));
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { services: items, section, loading, error, reload };
}

/**
 * Hook for consuming projects data.
 */
export function useProjects() {
  const [items, setItems] = useState(projects);
  const [section, setSection] = useState(projectsSection);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProjects();
      setItems(data);
      setSection((prev) => ({ ...prev, items: data }));
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { projects: items, section, loading, error, reload };
}

/**
 * Hook for consuming testimonials data.
 */
export function useTestimonials() {
  const [items, setItems] = useState(testimonials);
  const [section, setSection] = useState(testimonialsSection);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getTestimonials();
      setItems(data);
      setSection((prev) => ({ ...prev, items: data }));
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { testimonials: items, section, loading, error, reload };
}

/**
 * Hook for consuming process steps.
 */
export function useProcess() {
  const [steps, setSteps] = useState(processSteps);
  const [section, setSection] = useState(processSection);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getProcess();
      setSteps(data);
      setSection((prev) => ({ ...prev, steps: data }));
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { steps, section, loading, error, reload };
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
