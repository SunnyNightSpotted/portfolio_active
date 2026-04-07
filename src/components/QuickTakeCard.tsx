import type { QuickTake } from "@/data/quickTakeContent";

interface QuickTakeCardProps {
  data: QuickTake;
}

const fields: { key: keyof QuickTake; label: string }[] = [
  { key: "role", label: "Role" },
  { key: "problem", label: "Problem" },
  { key: "keyMove", label: "Key Move" },
  { key: "outcome", label: "Outcome" },
];

const QuickTakeCard = ({ data }: QuickTakeCardProps) => {
  return (
    <aside
      aria-label="Project summary"
      className="hidden lg:block w-[280px] shrink-0 sticky top-24 self-start"
    >
      <div className="border border-accent/15 border-t-accent border-t-[4px] rounded-sm p-5">
        <span className="text-[11px] tracking-[0.2em] uppercase text-accent font-semibold">
          Quick Take
        </span>

        <div className="mt-4 space-y-0">
          {fields.map((field, i) => (
            <div key={field.key}>
              {i > 0 && <div className="border-t border-border/60 my-3" />}
              <p className="text-[10px] tracking-[0.18em] uppercase text-label/65 font-medium mb-1.5">
                {field.label}
              </p>
              <p className="text-sm leading-relaxed text-foreground">
                {data[field.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default QuickTakeCard;
