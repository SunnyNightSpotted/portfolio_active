import { useLens } from "@/contexts/LensContext";
import type { LensKey } from "@/data/lensContent";

const LENS_OPTIONS: { key: Exclude<LensKey, "default">; label: string }[] = [
  { key: "think", label: "How I Think" },
  { key: "built", label: "What I Built" },
  { key: "mattered", label: "Why It Mattered" },
];

const RoleLensToggle = () => {
  const { activeLens, setActiveLens, toggleLens } = useLens();

  return (
    <div className="mb-10">
      <span className="block md:hidden text-[10px] tracking-widest uppercase text-muted-foreground font-normal select-none mb-2">
        View by
      </span>
      <div className="flex items-center gap-x-4">
        <span className="hidden md:inline text-[10px] tracking-widest uppercase text-muted-foreground font-normal select-none">
          View by
        </span>
        <div
          className="flex flex-wrap items-center gap-2"
          role="radiogroup"
          aria-label="Filter projects by lens"
        >
          {LENS_OPTIONS.map(({ key, label }) => {
            const isActive = activeLens === key;
            return (
              <button
                key={key}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => toggleLens(key)}
                className={`text-[13px] md:text-sm tracking-wide font-medium px-3 py-1 md:px-4 md:py-1.5 border rounded-full transition-colors duration-200 ${
                  isActive
                    ? "bg-foreground text-background border-foreground"
                    : "text-muted-foreground border-muted-foreground/40 hover:border-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
          {activeLens !== "default" && (
            <button
              type="button"
              onClick={() => setActiveLens("default")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Clear lens filter"
            >
              × Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleLensToggle;
