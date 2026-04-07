import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { QuickTake } from "@/data/quickTakeContent";

interface QuickTakeMobileProps {
  data: QuickTake;
  projectTitle: string;
  sentinelRef?: React.RefObject<HTMLElement | null>;
}

const fields: { key: keyof QuickTake; label: string }[] = [
  { key: "role", label: "Role" },
  { key: "problem", label: "Problem" },
  { key: "keyMove", label: "Key Move" },
  { key: "outcome", label: "Outcome" },
];

const QuickTakeMobile = ({ data }: QuickTakeMobileProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!contentRef.current) return;
    const measure = () => setContentHeight(contentRef.current?.scrollHeight ?? 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [data]);

  // Detect when sticky is active by observing when the element's top matches
  // its sticky offset (top: 64px). We use a sentinel div right before it.
  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;

    // IntersectionObserver with rootMargin that triggers when the element
    // reaches its sticky position (64px from top)
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel goes out of view at the top, the bar is stuck
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-65px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = useCallback(() => setExpanded((p) => !p), []);

  const transitionStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : { transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease" };

  const borderTransition = prefersReducedMotion
    ? ""
    : "transition-[border-color,box-shadow] duration-150 ease-in-out";

  return (
    <>
      {/* Sentinel — sits at natural position; when it scrolls above the sticky offset, bar is stuck */}
      <div ref={stickyRef} className="h-px w-full md:hidden" aria-hidden="true" />

      <div
        className={`sticky top-[72px] z-40 md:hidden -mx-6 pt-2 mb-14 bg-background ${borderTransition} ${
          isStuck
            ? "border-b-[2px] border-b-accent shadow-[0_2px_8px_hsl(var(--foreground)/0.06)]"
            : "border-y border-border"
        }`}
        aria-label="Project summary"
      >
        {/* Collapsed bar */}
        <button
          onClick={toggle}
          className="w-full flex items-center px-6 pt-2 pb-3 text-left cursor-pointer gap-4 min-h-0"
          aria-expanded={expanded}
          style={{ maxHeight: "80px" }}
        >
          <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold shrink-0">
            Quick Take
          </span>
        {!expanded && (
          <p className="text-[11px] text-muted-foreground truncate leading-tight flex-1 min-w-0">
            {data.outcome}
          </p>
        )}
        {expanded && <span className="flex-1" />}
          <span className="shrink-0 text-accent">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        {/* Expanded content — drops DOWN from the bar */}
        <div
          style={{
            height: expanded ? `${contentHeight}px` : "0px",
            opacity: expanded ? 1 : 0,
            overflow: "hidden",
            ...transitionStyle,
          }}
          aria-hidden={!expanded}
        >
          <div ref={contentRef}>
            <div className="px-6 pb-4 pt-1">
              <div className="border-t border-accent/15 mb-3" />
              <div className="space-y-2.5">
                {fields.map((field) => (
                  <div key={field.key}>
                    <p className="text-[10px] tracking-[0.18em] uppercase text-label/65 font-medium mb-0.5">
                      {field.label}
                    </p>
                    <p
                      className={`text-[13px] leading-snug ${
                        field.key === "outcome"
                          ? "font-semibold text-label"
                          : "text-foreground"
                      }`}
                    >
                      {data[field.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickTakeMobile;
