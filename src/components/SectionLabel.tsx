import { ChevronDown } from "lucide-react";

interface SectionLabelProps {
  label: string;
  collapsible?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const SectionLabel = ({ label, collapsible, isExpanded, onToggle }: SectionLabelProps) => {
  if (collapsible) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 mb-10 cursor-pointer group text-left relative before:absolute before:-inset-y-3 before:inset-x-0 before:content-['']"
        aria-expanded={isExpanded}
      >
        <span className="text-xs tracking-widest uppercase text-label font-medium whitespace-nowrap group-hover:text-foreground transition-colors">
          {label}
        </span>
        <div className="flex-1 border-t border-border" />
        <ChevronDown
          size={14}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-xs tracking-widest uppercase text-label font-medium whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 border-t border-border" />
    </div>
  );
};

export default SectionLabel;
