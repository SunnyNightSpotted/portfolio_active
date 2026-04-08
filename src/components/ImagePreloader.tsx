import { useEffect } from "react";
import { projects } from "@/data/projects";

/**
 * Preloads all project hero images on initial site visit
 * so they're cached before any case study is opened.
 */
const ImagePreloader = () => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    projects.forEach((project) => {
      if (project.heroImage) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = project.heroImage;
        document.head.appendChild(link);
        links.push(link);
      }
    });
    return () => {
      links.forEach((link) => {
        try { document.head.removeChild(link); } catch {}
      });
    };
  }, []);

  return null;
};

export default ImagePreloader;
