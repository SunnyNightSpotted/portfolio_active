import { useEffect } from "react";
import { projects } from "@/data/projects";

/**
 * Preloads all project images (thumbnails, heroes, overviews, and section images)
 * on initial site visit so they're cached before any case study is opened.
 */
const ImagePreloader = () => {
  useEffect(() => {
    const urls = new Set<string>();

    projects.forEach((project) => {
      if (project.thumbnail) urls.add(project.thumbnail);
      if (project.heroImage) urls.add(project.heroImage);
      if (project.overviewImage) urls.add(project.overviewImage);
      project.sections?.forEach((section) => {
        if (section.image) urls.add(section.image);
        if (section.imageBefore) urls.add(section.imageBefore);
      });
    });

    const links: HTMLLinkElement[] = [];
    urls.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      document.head.appendChild(link);
      links.push(link);
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
