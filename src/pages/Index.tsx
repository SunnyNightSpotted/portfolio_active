import { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import RoleLensToggle from "@/components/RoleLensToggle";
import { projects } from "@/data/projects";
import { lensContentBySlug, lensOrder } from "@/data/lensContent";
import { heroContent, homeLabels } from "@/data/siteContent";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useLens } from "@/contexts/LensContext";

const Index = () => {
  usePageTitle();
  const { activeLens } = useLens();

  const orderedProjects = useMemo(() => {
    const order = lensOrder[activeLens];
    return order.map((slug) => projects.find((p) => p.slug === slug)!);
  }, [activeLens]);

  const featured = orderedProjects.slice(0, 2);
  const grid = orderedProjects.slice(2);

  const getSubtitle = useCallback(
    (slug: string) => {
      const lens = lensContentBySlug[slug];
      return lens?.[activeLens] ?? "";
    },
    [activeLens]
  );

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-20">
        <p className="text-xs tracking-widest uppercase text-label font-medium mb-4">
          {heroContent.roleLabel}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          {heroContent.headline}
        </h1>
        <p className="text-lg text-body max-w-xl leading-relaxed">
          {heroContent.intro}
        </p>
      </section>

      {/* Selected Work */}
      <section className="pb-24">
        <SectionLabel label={homeLabels.selectedWork} />
        <RoleLensToggle />

        {/* Featured projects - full width */}
        {featured.length > 0 && (
          <div className="space-y-14 mb-14">
            {featured.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group block focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                <div className="aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-4 rounded-sm">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-sm tracking-wide text-muted-foreground">
                        Image Placeholder — {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-body lens-subtitle" key={activeLens}>
                  {getSubtitle(project.slug)}
                </p>
              </Link>
            ))}
          </div>
        )}

        {/* Remaining projects - 2x2 grid */}
        {grid.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {grid.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group block focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                <div className="aspect-[4/3] overflow-hidden mb-4 rounded-sm">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <span className="text-sm tracking-wide text-muted-foreground">
                        Image Placeholder — {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-1">
                  {project.title}
                </h2>
                <p className="text-sm text-body lens-subtitle" key={activeLens}>
                  {getSubtitle(project.slug)}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Index;
