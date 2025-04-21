import { useEffect, useState } from "react";

export const useMedia = (query: string) => {
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [mediaQuery, query]);

  return matches;
};

export const useIsMobile = (): boolean => useMedia("(max-width: 767px)");
export const useIsTablet = (): boolean =>
  useMedia("(min-width: 768px) and (max-width: 1024px)");
export const useIsDesktop = (): boolean => useMedia("(min-width: 1025px)");
