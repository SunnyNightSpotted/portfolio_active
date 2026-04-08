import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";

import SectionLabel from "@/components/SectionLabel";
import RoleLensToggle from "@/components/RoleLensToggle";
import QuickTakeCard from "@/components/QuickTakeCard";
import QuickTakeBottomSheet from "@/components/QuickTakeBottomSheet";
import QuickTakeMobile from "@/components/QuickTakeMobile";
import CaseStudyMedia from "@/components/CaseStudyMedia";
import { projects } from "@/data/projects";
import { quickTakeBySlug } from "@/data/quickTakeContent";
import { caseStudyLabels } from "@/data/siteContent";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useLens } from "@/contexts/LensContext";
import type { LensKey } from "@/data/lensContent";

const detailKeys = ["role", "client", "agency", "timeline", "scope", "team", "platform"] as const;
const detailLabelMap: Record<string, string> = {
  role: caseStudyLabels.roleLabel,
  client: caseStudyLabels.clientLabel,
  agency: caseStudyLabels.agencyLabel,
  timeline: caseStudyLabels.timelineLabel,
  scope: caseStudyLabels.scopeLabel,
  team: caseStudyLabels.teamLabel,
  platform: caseStudyLabels.platformLabel,
};

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="w-full aspect-[16/9] rounded-sm flex items-center justify-center bg-muted">
    <span className="text-sm tracking-wide text-muted-foreground">
      Image Placeholder — {label}
    </span>
  </div>
);

const sectionsWithImages = ["Overview", "Design Process", "Solution", "Discovery & Research", "Impact"];

const expandedByLens: Record<Exclude<LensKey, "default">, string[]> = {
  think: ["Challenge", "Discovery & Research", "Design Process", "Reflection"],
  built: ["Design Process", "Solution"],
  mattered: ["Impact", "Reflection"],
};

function truncate(text: string, max = 120): string {
  const firstParagraph = text.split("\n\n")[0] || text;
  if (firstParagraph.length <= max) return firstParagraph;
  return firstParagraph.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

function renderBoldText(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-bold text-accent-secondary">{part}</span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const CollapsibleSection = ({
  isCollapsedByLens,
  sectionLabel,
  children,
  previewText,
  staggerIndex,
}: {
  isCollapsedByLens: boolean;
  sectionLabel: string;
  children: React.ReactNode;
  previewText: string;
  staggerIndex: number;
}) => {
  const [manualExpanded, setManualExpanded] = useState(false);
  const [delayedCollapsed, setDelayedCollapsed] = useState(isCollapsedByLens);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const isExpanded = !delayedCollapsed || manualExpanded;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    setManualExpanded(false);
    if (prefersReducedMotion) {
      setDelayedCollapsed(isCollapsedByLens);
      return;
    }
    const timer = setTimeout(() => {
      setDelayedCollapsed(isCollapsedByLens);
    }, staggerIndex * 50);
    return () => clearTimeout(timer);
  }, [isCollapsedByLens, staggerIndex, prefersReducedMotion]);

  useEffect(() => {
    if (!contentRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContentHeight(entry.contentRect.height);
      }
    });
    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => {
    if (delayedCollapsed) {
      setManualExpanded((prev) => !prev);
    }
  }, [delayedCollapsed]);

  if (!delayedCollapsed && !manualExpanded) {
    return <>{children}</>;
  }

  const animatedHeight = isExpanded
    ? contentHeight != null ? `${contentHeight}px` : "auto"
    : "0px";

  const transitionStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : { transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease" };

  return (
    <section className="pb-16">
      <SectionLabel
        label={sectionLabel}
        collapsible
        isExpanded={isExpanded}
        onToggle={toggle}
      />
      <div className="max-w-[680px]">
        <div
          style={{
            height: isExpanded ? 0 : "auto",
            opacity: isExpanded ? 0 : 1,
            overflow: "hidden",
            ...transitionStyle,
          }}
          aria-hidden={isExpanded}
        >
          <p
            className="text-muted-foreground text-base leading-[1.7] cursor-pointer"
            onClick={toggle}
          >
            {previewText}
          </p>
        </div>

        <div
          style={{
            height: animatedHeight,
            opacity: isExpanded ? 1 : 0,
            overflow: "hidden",
            ...transitionStyle,
          }}
          aria-hidden={!isExpanded}
        >
          <div ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudy = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const quickTake = slug ? quickTakeBySlug[slug] : undefined;
  const { activeLens } = useLens();
  const prevLensRef = useRef<LensKey>(activeLens);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const overviewSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  usePageTitle(project?.title ?? "Not Found");

  // Hero images are preloaded globally via ImagePreloader

  useLayoutEffect(() => {
    if (prevLensRef.current === activeLens) return;
    const anchor = scrollAnchorRef.current;
    if (!anchor) {
      prevLensRef.current = activeLens;
      return;
    }
    const rectBefore = anchor.getBoundingClientRect();
    const topBefore = rectBefore.top;
    requestAnimationFrame(() => {
      const rectAfter = anchor.getBoundingClientRect();
      const drift = rectAfter.top - topBefore;
      if (Math.abs(drift) > 2) {
        window.scrollBy({ top: drift, behavior: "instant" as ScrollBehavior });
      }
    });
    prevLensRef.current = activeLens;
  }, [activeLens]);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-2xl font-bold text-foreground mb-4">{caseStudyLabels.notFoundTitle}</h1>
        <Link to="/" className="text-primary hover:underline text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm">
          {caseStudyLabels.backToHomeText}
        </Link>
      </div>
    );
  }

  const activeDetailKeys = detailKeys.filter((key) => project[key]);

  const isSectionCollapsed = (label: string): boolean => {
    if (activeLens === "default") return false;
    const expanded = expandedByLens[activeLens];
    return !expanded.includes(label);
  };

  // Count collapsed sections above each section for stagger index
  let staggerCounter = 0;

  return (
    <div>
      {project.heroImage ? (
        <div className="w-full aspect-[2/1] md:aspect-[3/1] overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.heroAlt || `${project.title} hero`}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      ) : (
        <div className="w-full aspect-[2/1] md:aspect-[3/1] flex items-center justify-center bg-muted">
          <span className="text-sm tracking-wide text-muted-foreground">
            Image Placeholder — Hero
          </span>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6">
        <section className="pt-16 pb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
            {project.title}
          </h1>
          <p className="text-foreground text-lg">{project.subtitle}</p>
        </section>

        <section className="pb-16 md:pb-16 max-md:pb-8">
          <SectionLabel label={caseStudyLabels.projectDetailsLabel} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 max-md:gap-y-4">
            {activeDetailKeys.map((key) => (
              <div key={key}>
                <p className="text-xs tracking-widest uppercase text-label font-medium mb-2">
                  {detailLabelMap[key]}
                </p>
                <p className="text-foreground font-semibold text-sm leading-relaxed">{project[key]}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex gap-10 items-start max-md:mt-3">
          <div className="flex-1 min-w-0">
            <section ref={overviewSectionRef} className="pb-16">
              <SectionLabel label="Overview" />
              <div className="max-w-[680px] space-y-6">
                {project.narrativeIntro.split("\n\n").map((para, i) => (
                  <p key={i} className="text-lg md:text-xl text-foreground leading-[1.7] font-medium">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                {project.overviewVideo ? (
                  <CaseStudyMedia
                    src={project.overviewVideo}
                    alt={project.overviewAlt || `${project.title} overview`}
                    caption={project.overviewCaption}
                    isVideo
                    videoStyle={{ maxHeight: '460px', width: 'auto', maxWidth: '100%' }}
                  />
                ) : project.overviewImage ? (
                  <CaseStudyMedia
                    src={project.overviewImage}
                    alt={project.overviewAlt || `${project.title} overview`}
                    caption={project.overviewCaption}
                  />
                ) : (
                  <ImagePlaceholder label="Overview" />
                )}
              </div>
            </section>

            {/* Scroll anchor for stabilization */}
            <div ref={scrollAnchorRef} className="mb-1 max-md:mb-0">
              <RoleLensToggle />
            </div>

            {quickTake && <QuickTakeMobile data={quickTake} projectTitle={project.title} sentinelRef={overviewSectionRef} />}

            {project.sections.map((section, i) => {
              const collapsed = isSectionCollapsed(section.label);
              const previewText = truncate(section.body);

              if (!collapsed) {
                return (
                  <section key={i} className="pb-16">
                    <SectionLabel label={section.label} />
                    {sectionsWithImages.includes(section.label) && section.imageBefore && (
                      <div className="mt-6 mb-10">
                        <CaseStudyMedia
                          src={section.imageBefore}
                          alt={section.imageBeforeAlt || `${project.title} — ${section.label}`}
                          caption={section.imageBeforeCaption}
                        />
                      </div>
                    )}
                    {sectionsWithImages.includes(section.label) && section.imagePosition === 'before' && section.image && (
                      <div className="mt-6 mb-10">
                        <CaseStudyMedia
                          src={section.image}
                          alt={section.imageAlt || `${project.title} — ${section.label}`}
                          caption={section.imageCaption}
                        />
                      </div>
                    )}
                    <div className="max-w-[680px]">
                      <p className="text-[#4A4FC4] dark:text-[#F58F13] text-base mb-6 italic font-bold">
                        {section.subtitle}
                      </p>
                      {section.body.split("\n\n").map((paragraph, pi) => (
                        <p key={pi} className="text-foreground leading-[1.7] mb-4">
                          {renderBoldText(paragraph)}
                        </p>
                      ))}
                    </div>
                    {sectionsWithImages.includes(section.label) && section.imagePosition !== 'before' && (section.video || section.image) && (
                      <div className="mt-10">
                        {section.video ? (
                          <CaseStudyMedia
                            src={section.video}
                            alt={section.videoAlt || `${project.title} — ${section.label} video`}
                            caption={section.videoCaption}
                            isVideo
                            videoStyle={{ maxHeight: '460px', maxWidth: '100%', width: 'auto' }}
                          />
                        ) : section.image ? (
                          <CaseStudyMedia
                            src={section.image}
                            alt={section.imageAlt || `${project.title} — ${section.label}`}
                            caption={section.imageCaption}
                          />
                        ) : null}
                      </div>
                    )}
                  </section>
                );
              }

              const currentStagger = staggerCounter++;

              return (
                <CollapsibleSection
                  key={`${i}-${activeLens}`}
                  isCollapsedByLens={collapsed}
                  sectionLabel={section.label}
                  previewText={previewText}
                  staggerIndex={currentStagger}
                >
                  {sectionsWithImages.includes(section.label) && section.imageBefore && (
                    <div className="mt-2 mb-10">
                      <CaseStudyMedia
                        src={section.imageBefore}
                        alt={section.imageBeforeAlt || `${project.title} — ${section.label}`}
                        caption={section.imageBeforeCaption}
                      />
                    </div>
                  )}
                  {sectionsWithImages.includes(section.label) && section.imagePosition === 'before' && section.image && (
                    <div className="mt-2 mb-10">
                      <CaseStudyMedia
                        src={section.image}
                        alt={section.imageAlt || `${project.title} — ${section.label}`}
                        caption={section.imageCaption}
                      />
                    </div>
                  )}
                  <p className="text-[#4A4FC4] dark:text-[#F58F13] text-base mb-6 italic font-bold mt-2">
                    {section.subtitle}
                  </p>
                  {section.body.split("\n\n").map((paragraph, pi) => (
                    <p key={pi} className="text-foreground leading-[1.7] mb-4">
                      {renderBoldText(paragraph)}
                    </p>
                  ))}
                  {sectionsWithImages.includes(section.label) && section.imagePosition !== 'before' && (section.video || section.image) && (
                    <div className="mt-10">
                      {section.video ? (
                        <CaseStudyMedia
                          src={section.video}
                          alt={section.videoAlt || `${project.title} — ${section.label} video`}
                          caption={section.videoCaption}
                          isVideo
                          videoStyle={{ maxHeight: '460px', maxWidth: '100%', width: 'auto' }}
                        />
                      ) : section.image ? (
                        <CaseStudyMedia
                          src={section.image}
                          alt={section.imageAlt || `${project.title} — ${section.label}`}
                          caption={section.imageCaption}
                        />
                      ) : null}
                    </div>
                  )}
                </CollapsibleSection>
              );
            })}
          </div>

          {quickTake && <QuickTakeCard data={quickTake} />}
        </div>

        <section className="border-t border-border py-16">
          <p className="text-xs tracking-widest uppercase text-label font-medium mb-4">
            {caseStudyLabels.nextProjectText}
          </p>
          <Link
            to={`/work/${nextProject.slug}`}
            className="text-2xl md:text-3xl font-bold text-foreground hover:text-accent-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {nextProject.title} →
          </Link>
        </section>
      </div>

      {quickTake && <QuickTakeBottomSheet data={quickTake} />}
    </div>
  );
};

export default CaseStudy;
