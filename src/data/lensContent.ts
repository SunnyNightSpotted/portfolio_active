export type LensKey = "default" | "think" | "built" | "mattered";

export interface LensContent {
  default: string;
  think: string;
  built: string;
  mattered: string;
}

export const lensContentBySlug: Record<string, LensContent> = {
  "mcdonalds-canada-monopoly": {
    default: "End-to-end UX ownership across three consecutive years of a legally constrained, 100M+ stamp promotional system.",
    think: "With no testing budget, post-promotion data became the research program to shape the next year's design brief.",
    built: "40 to 80+ screens per year across OCR code entry, digital peel mechanics, 7 claim flow variants, 4 PII form variants, banking integration, and a full Sketch-to-Figma design system rebuild.",
    mattered: "300%+ code increase in Year 1, all-time record digital spend in Year 2, and Year 3 data that revealed where iteration plateaus.",
  },
  "save-the-smile-dm4": {
    default: "Accessible browser-based catching game for McDonald's × Despicable Me 4, shipped across 80+ markets in 40+ languages with accessibility as a primary design constraint from day one.",
    think: "Usability testing revealed kids skipped the mission code entirely, making the bypass flow a critical path, not an edge case.",
    built: "3-lane catching game with fixed smile-count levels, looped Pac-Man-style movement, directional audio descriptions for screen reader users, and a bypass flow for physical toy variants that shipped without mission codes.",
    mattered: "Outpaced McDonald's repeat-play running average by nearly 40%, with parents reporting the experience directly increased their likelihood to buy.",
  },
  wcdonalds: {
    default: "Mobile-first microsite behind McDonald's anime campaign.",
    think: "Chose a week-tab architecture over a content-type model because a four-week campaign needs to feel like a countdown, not a catalog.",
    built: "Full content gating logic across 2 access types × 5 time phases, coming-soon states, direct-URL-to-QR-scan conversion flows, anime player with audio description toggle, and a negotiated carousel compromise that preserved the interaction pattern while meeting client needs.",
    mattered: "Lifted McNugget sales across 30+ markets, sold out the LA pop-up in minutes, and generated fan art and cosplay well past the campaign's four-week run.",
  },
  "frequent-fryer-program": {
    default: "A five-week Canada-wide scavenger hunt combining an scanning tech pilot, 150,000 instant-win prizes, and a passport-style progression system tied to a new menu item launch.",
    think: "Turned a transactional code-entry loop into a five-week retention mechanic by asking what happens when the most engaged user runs out of codes.",
    built: "End-to-end flow architecture: SSO auth → Skill Testing Question → manual code entry (default) with OCR as optional scanning path → instant-win engine → app wallet delivery → passport collection page with four progression tiers and milestone reveals.",
    mattered: "Delivered 150,000 instant-win prizes with no friction at the reward step, and validated the OCR technology that shipped again on a larger promotion.",
  },
  "hmpu-design-library": {
    default: "A centralized Figma design library and 10+ mechanic-specific starter files for McDonald's Happy Meal gaming platform, cutting UX delivery timelines from 15 days to 10 per program.",
    think: "Audited 50+ shipped programs to categorize screens into three tiers: universal, mechanic-shared, and program-unique.",
    built: "Three-layer Figma system: a single-source-of-truth library, 10+ mechanic-specific starter files with pre-annotated screens, and program files with color-coded review states and embedded accessibility requirements.",
    mattered: "33% faster delivery, confirmed on the first production build, compounding across every reskin on a 50+ program platform.",
  },
  "pinside-out-io2": {
    default: "Mobile web pinball for kids who'd never seen a pinball machine.",
    think: "Two rounds of testing revealed the problem wasn't controls. Kids mapped pinball to whatever framework they already knew, so we retaught the gaps.",
    built: "Hybrid-interactive tutorial with game engine running underneath, geo-stereo sound design for spatial ball tracking, physical toy pixel-space integration, 10 character skins across 3 board designs, and in-game encouragement messaging at point thresholds.",
    mattered: "Launched on time across 20+ countries alongside the highest-grossing animated film in history, with accessibility strategized from day one.",
  },
  "first-student": {
    default: "Audited and rebuilt the design system for one of North America's largest student transportation companies, stabilizing a fragmented site before rebranding it, and delivering a component library that absorbed two CMO changes and two rounds of brand color updates during a single engagement.",
    think: "Ran a manual page-by-page site audit to catalog all design debt before touching a component, then sequenced the work in two phases so developers could transition the live site incrementally rather than all at once.",
    built: "Figma component library with centralized color tokens, standardized typography system, WCAG-tested contrast pairings, CMS-mapped template mockups for desktop and mobile, and a brand portal documenting decisions alongside outcomes.",
    mattered: "The design system didn't just enable the rebrand. It survived the rebrands. When brand direction changed twice mid-engagement, the system updated in hours, not weeks.",
  },
};

export const lensOrder: Record<LensKey, string[]> = {
  default: [
    "mcdonalds-canada-monopoly",
    "save-the-smile-dm4",
    "wcdonalds",
    "frequent-fryer-program",
    "hmpu-design-library",
    "pinside-out-io2",
    "first-student",
  ],
  think: [
    "pinside-out-io2",
    "save-the-smile-dm4",
    "wcdonalds",
    "mcdonalds-canada-monopoly",
    "frequent-fryer-program",
    "hmpu-design-library",
    "first-student",
  ],
  built: [
    "hmpu-design-library",
    "mcdonalds-canada-monopoly",
    "pinside-out-io2",
    "save-the-smile-dm4",
    "frequent-fryer-program",
    "wcdonalds",
    "first-student",
  ],
  mattered: [
    "frequent-fryer-program",
    "mcdonalds-canada-monopoly",
    "wcdonalds",
    "save-the-smile-dm4",
    "hmpu-design-library",
    "pinside-out-io2",
    "first-student",
  ],
};
