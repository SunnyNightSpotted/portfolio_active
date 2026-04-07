import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronUp } from "lucide-react";
import type { QuickTake } from "@/data/quickTakeContent";

interface QuickTakeBottomSheetProps {
  data: QuickTake;
}

const fields: { key: keyof QuickTake; label: string }[] = [
  { key: "role", label: "Role" },
  { key: "problem", label: "Problem" },
  { key: "keyMove", label: "Key Move" },
  { key: "outcome", label: "Outcome" },
];

const QuickTakeBottomSheet = ({ data }: QuickTakeBottomSheetProps) => {
  const [expanded, setExpanded] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Measure content height reliably
  const measure = useCallback(() => {
    if (!contentRef.current) return;
    // Temporarily make content visible for accurate measurement
    const el = contentRef.current;
    const parentEl = el.parentElement;
    if (parentEl) {
      const prevHeight = parentEl.style.height;
      const prevOverflow = parentEl.style.overflow;
      parentEl.style.height = "auto";
      parentEl.style.overflow = "visible";
      const h = el.getBoundingClientRect().height;
      parentEl.style.height = prevHeight;
      parentEl.style.overflow = prevOverflow;
      if (h > 0) setContentHeight(h);
    }
  }, []);

  useEffect(() => {
    measure();
    if (!contentRef.current) return;
    const ro = new ResizeObserver(measure);
    ro.observe(contentRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [data, measure]);

  // Hide when near footer
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerRect = footer.getBoundingClientRect();
      setIsNearFooter(footerRect.top < window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = useCallback(() => {
    // Re-measure right before expanding to ensure accurate height
    measure();
    setExpanded((p) => !p);
  }, [measure]);

  const transitionStyle: React.CSSProperties = prefersReducedMotion
    ? {}
    : { transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease" };

  if (isNearFooter) return null;

  return (
    <div
      ref={sheetRef}
      className="fixed bottom-0 left-0 right-0 z-50 hidden md:block lg:hidden bg-background border-t-[3px] border-t-accent shadow-[0_-2px_10px_hsl(var(--foreground)/0.08)]"
      aria-label="Project summary"
    >
      {/* Collapsed bar */}
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-3 text-left cursor-pointer gap-4"
        aria-expanded={expanded}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold shrink-0">
          Quick Take
        </span>
        {!expanded && (
          <span className="text-sm text-muted-foreground truncate flex-1 text-right">
            {data.outcome}
          </span>
        )}
        <ChevronUp
          size={16}
          className={`shrink-0 text-accent transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          } ${prefersReducedMotion ? "!transition-none" : ""}`}
        />
      </button>

      {/* Expanded content — always rendered for measurement */}
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
          <div className="px-6 pb-5 pt-0">
            <div className="border-t border-accent/20 mb-4" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {fields.map((field) => (
                <div key={field.key}>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-label/65 font-medium mb-1.5">
                    {field.label}
                  </p>
                  <p className={`text-sm leading-relaxed ${field.key === "outcome" ? "font-semibold text-label" : "text-foreground"}`}>
                    {data[field.key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTakeBottomSheet;
