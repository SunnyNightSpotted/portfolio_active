import { createContext, useContext, useState, type ReactNode } from "react";
import type { LensKey } from "@/data/lensContent";

interface LensContextValue {
  activeLens: LensKey;
  setActiveLens: (lens: LensKey) => void;
  toggleLens: (key: Exclude<LensKey, "default">) => void;
}

const LensContext = createContext<LensContextValue | null>(null);

export const LensProvider = ({ children }: { children: ReactNode }) => {
  const [activeLens, setActiveLens] = useState<LensKey>("default");

  const toggleLens = (key: Exclude<LensKey, "default">) => {
    setActiveLens((prev) => (prev === key ? "default" : key));
  };

  return (
    <LensContext.Provider value={{ activeLens, setActiveLens, toggleLens }}>
      {children}
    </LensContext.Provider>
  );
};

export const useLens = () => {
  const ctx = useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used within LensProvider");
  return ctx;
};
