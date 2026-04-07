export interface QuickTake {
  role: string;
  problem: string;
  keyMove: string;
  outcome: string;
}

export const quickTakeBySlug: Record<string, QuickTake> = {
  "mcdonalds-canada-monopoly": {
    role: "UX Lead - end-to-end webview experience across 3 consecutive years",
    problem: "A legally constrained digital layer losing users between \"I won\" and \"I claimed it\" at 100M+ stamp scale.",
    keyMove: "Treated post-promotion data as a research program. CSAT, dropout rates, and social listening each became the next year's design brief.",
    outcome: "300%+ code increase, record digital spend in Year 2. Year 3 data revealed where iteration plateaus.",
  },
  "save-the-smile-dm4": {
    role: "UX Lead - creating flows, wireframes, and research; collaborating on accessibility strategy across 80+ markets",
    problem: "A catching game for kids who have zero patience for onboarding and centering an accessible experience.",
    keyMove: "Treating accessibility as a primary design constraint from day one, not a retrofit, which shaped every major decision, from controls to audio cues to movement mechanics.",
    outcome: "Kids returned for repeated play at nearly 40% above McDonald's running average, with parents reporting increased purchase intent.",
  },
  "wcdonalds": {
    role: "UX Lead, sole designer for end-to-end screen, flow, and interaction.",
    problem: "A four-week rolling content release across two access levels, where locked content had to feel like anticipation, not punishment.",
    keyMove: "Chose a weekly-tab architecture that made recency the organizing principle. The structure itself communicated \"there's something new\".",
    outcome: "McNugget sales lifted across 30+ markets. Every piece of content that drove the campaign's cultural momentum lived on the platform I architected.",
  },
  "frequent-fryer-program": {
    role: "UX Lead, end-to-end experience architecture including first-ever code scanning pilot for the market.",
    problem: "Three goals (drive product trial, pilot OCR technology, sustain 5 weeks of engagement) stacked on each other, each constraining the others.",
    keyMove: "Designed a passport progression system that turned a transactional code-entry loop into a retention mechanic with visible milestones.",
    outcome: "Exceeded KPIs significantly. OCR pilot validated and shipped again on a larger promotion.",
  },
  "hmpu-design-library": {
    role: "Sr. UX Designer - identified the problem, pitched leadership, designed and built the entire system",
    problem: "30–50 shipped programs on the same platform, and the UX team rebuilt identical screens every time.",
    keyMove: "Categorized all screens into three tiers (universal, mechanic-shared, unique) and built the necessary files to jumpstart the team.",
    outcome: "UX delivery timelines cut from 15 to 10 days per program (33% reduction), compounding across every reskin.",
  },
  "pinside-out-io2": {
    role: "UX Lead, flows, wireframes, research and accessibility strategy from kickoff through launch",
    problem: "A pinball game for kids ages 5 to 9 who had never encountered a pinball machine. Most couldn't start the game and misunderstood the goal entirely.",
    keyMove: "Designed geo-stereo spatial audio strategy so visually impaired users could complete the game without seeing the screen.",
    outcome: "Shipped across 20+ countries with full accessibility. Launched alongside the highest-grossing animated film in history.",
  },
};
