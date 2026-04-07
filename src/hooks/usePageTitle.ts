import { useEffect } from "react";
import { siteInfo } from "@/data/siteContent";

/**
 * Sets the document title for the current page.
 * Appends the site name as a suffix: "Page Title — Stephanie Yoo"
 * Pass `null` or omit to use just the site name.
 */
export function usePageTitle(title?: string | null) {
  useEffect(() => {
    document.title = title
      ? `${title} — ${siteInfo.name}`
      : `${siteInfo.name} — ${siteInfo.role}`;
  }, [title]);
}
