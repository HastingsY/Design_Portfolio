import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If you're jumping to an in-page anchor (e.g., #section), let the browser handle it.
    if (hash) return;

    // Scroll the window to the very top whenever the route changes.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, search, hash]);

  return null;
}
