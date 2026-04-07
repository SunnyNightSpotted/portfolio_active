import { useState, FormEvent } from "react";
import { usePageTitle } from "@/hooks/usePageTitle";

const SITE_PASSWORD = "SunnyD";

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem("portfolio_unlocked") === "true"
  );
  const [unlocking, setUnlocking] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  usePageTitle("Coming Soon");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("portfolio_unlocked", "true");
      setUnlocking(true);
      setTimeout(() => setUnlocked(true), 600);
    } else {
      setError(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 transition-all duration-500 ${
        unlocking ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: 'hsl(239 37% 32%)' }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(33 100% 97%) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="w-full max-w-sm relative z-10 animate-fade-in">
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'hsl(33 100% 97% / 0.5)' }}>
          Stephanie Yoo
        </p>
        <h1 className="text-3xl font-bold mb-3" style={{ color: 'hsl(33 100% 97%)' }}>
          Under Construction
        </h1>
        <p className="text-sm mb-1" style={{ color: 'hsl(33 100% 97% / 0.6)' }}>
          This site is currently being updated with new work.
        </p>
        <p className="text-sm mb-10" style={{ color: 'hsl(33 100% 97% / 0.6)' }}>
          Enter the password to preview.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none transition-colors"
            style={{
              border: '1px solid hsl(33 100% 97% / 0.2)',
              backgroundColor: 'hsl(33 100% 97% / 0.1)',
              color: 'hsl(33 100% 97%)',
            }}
            autoFocus
          />
          {error && (
            <p className="text-xs" style={{ color: 'hsl(33 100% 97% / 0.8)' }}>
              Incorrect password. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-sm text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: 'hsl(33 100% 97%)',
              color: 'hsl(239 37% 32%)',
            }}
          >
            View Work
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
