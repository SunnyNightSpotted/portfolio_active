import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteInfo, navLinks, footerContent } from "@/data/siteContent";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:border focus:border-border"
      >
        Skip to content
      </a>

      <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.02em' }}>
            <span className="text-foreground">Yoo</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wide transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  pathname === link.path
                    ? "text-foreground font-medium border-b-2 border-foreground pb-0.5"
                    : "text-body hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger + theme toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="w-11 h-11 flex items-center justify-center rounded-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-sm tracking-wide rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    pathname === link.path
                      ? "text-foreground font-medium"
                      : "text-body hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="main-content" className="flex-1">{children}</main>

      <footer aria-label="Site footer" className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-label">
            {footerContent.copyright}
          </p>
          <div className="flex gap-6 text-sm text-body">
            <a
              href={footerContent.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume (PDF)"
              className="hover:text-accent-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {footerContent.resumeLabel}
            </a>
            <a
              href={siteInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${footerContent.linkedInLabel} (opens in new tab)`}
              className="hover:text-accent-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {footerContent.linkedInLabel}
            </a>
            <a
              href={`mailto:${siteInfo.email}`}
              className="hover:text-accent-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {footerContent.emailLabel}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
