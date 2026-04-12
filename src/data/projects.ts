export interface CaseStudySection {
  label: string;
  subtitle: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imagePosition?: 'before' | 'after';
  imageBefore?: string;
  imageBeforeAlt?: string;
  imageBeforeCaption?: string;
  video?: string;
  videoAlt?: string;
  videoCaption?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  overviewImage?: string;
  overviewVideo?: string;
  heroAlt?: string;
  overviewAlt?: string;
  overviewCaption?: string;
  role: string;
  client: string;
  agency: string;
  timeline: string;
  scope: string;
  team: string;
  platform: string;
  tags: string[];
  order: number;
  narrativeIntro: string;
  sections: CaseStudySection[];
}

export const projects: Project[] = [
  {
    slug: "mcdonalds-canada-monopoly",
    title: "McDonald's Canada Monopoly",
    subtitle: "Three Years of Getting the Seams Right",
    description: "Rebuilding Canada's biggest in-app promotion three years running",
    thumbnail: "/images/CAMON_Hero.png",
    heroImage: "/images/CAMON_Hero.png",
    heroAlt: "Monopoly man holding fries and a phone with the Monopoly Double Play logo above him",
    overviewImage: "/images/CAMON_Overview.png",
    overviewAlt: "Case study overview image showing three mobile screens of the McDonald's Canada Monopoly digital homepage with arrows pointing to the next between each screen.",
    role: "UX Lead",
    client: "McDonald's Canada",
    agency: "TMS (a HAVI Co.)",
    timeline: "April to October annually, 2023 through 2025",
    scope: "In-app webview (40 to 80+ screens per year), promotional microsite, prize claim flows, design system",
    team: "",
    platform: "McDonald's Canada App webview",
    tags: ["Data-Driven", "In-App", "Responsive", "UX", "Webview"],
    order: 1,
    narrativeIntro: "Every October, millions of Canadians peel a stamp off their McDonald's packet and hit a wall: a 12-digit code, a registration flow, a skill-testing question required by law, and a prize claim process asking for mailing addresses, guardian consent, and corrected postal codes. The physical game is simple. The digital layer is where people struggle.\n\nI owned the end-to-end webview experience across three consecutive years, rebuilding the design system from Sketch to Figma, designing the Double Play mechanic (44M+ digital peels in year one), and using post-promotion data to iterate claim flows, code entry, and prize discovery each cycle.\n\nCode entries increased over 300% by 2023. By 2025, I was designing banking integrations where a mistyped email could send prize money to a stranger. The system got sharper each year. So did the stakes.",
    sections: [
      {
        label: "Challenge",
        subtitle: "A legally constrained transactional system at 100-million-stamp scale",
        body: "This is not a marketing microsite. It is a phased, legally constrained transactional system embedded inside the McDonald's Canada app. The experience runs across two surfaces: the in-app webview (handling profile creation, age verification, a mandated Skill Testing Question, code entry via manual and OCR, a digital peel mechanic, prize confirmation, property tracking, and full prize claim flows with PII collection) and a promotional microsite for users who haven't downloaded the app, running across Coming Soon, Live, and Expired phases.\n\nBoth surfaces must account for promotion phase, user type (adult vs. minor with guardian), prize type (food, non-food, cash, loyalty points, sweepstakes), and the legal requirements of Canadian contest law. Every handoff between surfaces is a place someone can drop off. The promotion generates over 100 million game stamps. The UX has to hold at that scale while staying compliant, remaining legible to a first-time user, and not losing someone between \"I won something\" and \"I actually claimed it.\"",
      },
      {
        label: "Discovery & Research",
        subtitle: "Post-promotion data as a research program",
        body: "There was no user testing budget across any of the three years. Instead, I treated post-promotion data as a research program: CSAT (customer satisfaction) data, claim flow dropout rates, code entry volumes, engagement window analysis, consumer surveys, and social listening all became usable signal when synthesized.\n\n**In 2023,** the claim flow showed significant dropout rate. The largest fallout point by users sat between providing their personal information and reviewing before submission. This dropout data became the design brief for 2024.\n\n**In 2024,** CSAT data surfaced a specific operational issue: incorrect addresses in the redemption flow were generating the highest volume of downstream problems for the prize fulfillment team.\n\n**By 2025,** social listening during the campaign confirmed that code entry friction persisted as a user pain point even after an OCR (Optical Character Recognition) scanner was introduced. Consumer research showed participation enthusiasm and excitement about prizing were both lower than the prior year. The data told a more nuanced story: the system worked, but working wasn't enough to sustain engagement growth in a third consecutive year.",
      },
      {
        label: "Design Process",
        subtitle: "Three years of building, breaking, and rebuilding the same product",
        body: "**Year 1 (2023): Build the foundation.** I migrated the inherited Sketch design system to Figma with a full rebuild rather than an import-and-patch. The Sketch elements were dated and the rebuild gave development a single source of truth and let visual QA happen in the design layer. I replaced the creative team's default carousel approach on prize-heavy screens with vertical scroll and static grids to better align with more recent scroll behaviors. As a new feature to bring excitement to the digital platform, 2023 introduced the idea of \"Double Play\" where participants could win from physical peels and play again digitally to win something more. I designed the Double Play mechanic and spec'd the claim flow across seven confirmation screen variants and four PII form variants.\n\n**Year 2 (2024): Let the data close the loop.** OCR scanning moved from a secondary, optional method to the main input method for code entry. This required extensive testing to ensure high reliability, while maintaining a manual entry option as a plan for potential fail state solutions. I introduced integrated address correction mechanisms in the claim flow as a direct response to the CSAT findings that people were struggling to understand what \"Address 2\" meant, incorporated a new real-time Cash per Minute prize category, and built phase-aware navigation states so users returning after the Double Play period closed could still see what was actionable without needing a support contact.\n\n**Year 3 (2025): Protect the scope, ship the hard problem.** In real life, we face budgetary limitations. Initial guidance was 100% wireframe reuse from the previous year. Then changes arrived: a banking integration, verification codes, an employee eligibility check. I pushed for a definitive impact manifest listing everything changing before committing UX resources which helped provide visibility to other teams and their impacts.",
        image: "/images/CAMON_Design_Process.png",
        imageAlt: "Sketch components, including the header, buttons, and card molecules, shown in a column with the Sketch logo lightly overlaid on top. An arrow points to Figma component counterparts and an example mobile Sweepstakes screen with the Figma logo lightly overlaid on top.",
      },
      {
        label: "Solution",
        subtitle: "Designing a form that breaks autopilot on purpose",
        body: "The biggest design value in 2025 was the Interac banking integration. Low-value cash prizes would deposit directly to users via Interac (Canada's equivalent to Zelle). The challenge being that digital participants were registered users on the McDonald's app. They would need to be taught the difference between their Monopoly profile and information tied to their banking platform. A mistyped email sends money to the wrong person. Since the information had to match their Interac banking details, not their app profile, name and email fields required manual entry. (Fun fact: one of the most used names in Monopoly is \"Santa\".) A \"verify email\" field required manual re-entry with copy-and-paste disabled. The client's team wanted to show the McDonald's app registered email alongside additional entry fields. I recommended against it: users would autopilot and match the pre-filled email without checking whether it corresponded to their banking details. The form needed to break the autopilot, not reinforce it.",
        video: "/videos/CAMON_Solution.mp4",
        videoAlt: "Black and white mid-fidelity Figma prototype of the Interac claim process",
      },
      {
        label: "Impact",
        subtitle: "300%+ code increase in year one, record digital spend in year two",
        body: "**2023:** Over 45 million codes entered (>300% increase). 2.5 million registrations (up approximately 250%). 44M+ Double Plays taken. Single-day engagement dropped by 20% leading to more return users.\n\n**2024:** 80+ screens delivered. Per TMS's Shorty Awards entry: highest number of new app registrants for all of 2024, digital purchase spend at an all-time record high, Double Play registrations up 6%, total codes entered up 11%.\n\n**2025:** The promotion drove year-over-year increases in both sales and guest counts, outperforming 2024 on both metrics. But digital engagement stabilized rather than grew. Registrations and codes entered held in the prior-year range while the growth trajectory flattened. Participation enthusiasm softened in consumer research. The experience that felt fresh in 2023 was familiar by 2025. The Double Play was clearly understood by users but no longer generating discovery or delight.",
      },
      {
        label: "Reflection",
        subtitle: "Living with your own decisions long enough to learn from them",
        body: "Three years revealed both the power and the ceiling of constrained iteration. The OCR scanner reduced manual entry errors and prioritized user's convenience. The address correction mechanisms reduced fulfillment problems. The Interac form anticipated a new risk category before it could manifest. None were redesigns. All made the system measurably better. But the 2025 results showed that incremental iteration can plateau. The next meaningful improvement probably isn't another surgical fix. It's a rethinking of how the digital layer creates value for users who've already seen the pattern, especially younger users signaling an expectation for a richer experience than the current system provides.\n\nMost agency designers hand off a project and never learn what happened. I lived with my own decisions for three years: seeing where the 2023 claim flow broke, fixing it in 2024, watching the 2025 data confirm both what held and what hit its limits. That feedback loop made me more honest. It's easy to ship something and assume it worked. It's harder, and more useful, to watch the data come back and let it tell you where you were right but not enough.",
      },
    ],
  },
  {
    slug: "save-the-smile-dm4",
    title: "Save the Smile",
    subtitle: "Designing Save the Smile, an Accessible Global Game for McDonald's x Despicable Me 4",
    description: "An accessible game for 84 markets and 43 languages",
    thumbnail: "/images/DM4_Hero.png",
    heroImage: "/images/DM4_Hero.png",
    heroAlt: "Despicable Me 4 logo with two Minions holding Happy Meal boxes on a blue grid background with yellow and black caution tape",
    overviewVideo: "/videos/DM4_Overview.mp4",
    overviewAlt: "Video walkthrough of the Save the Smile game overview screens",
    role: "UX Lead",
    client: "McDonald's & Universal Studios",
    agency: "TMS (a HAVI Co.)",
    timeline: "November 2023 to June 2024",
    scope: "Browser-based catching game with 3 levels, 80+ markets, 40+ languages",
    team: "Worked with stakeholders across creative, motion, dev, QA, accessibility, copy, account, and more",
    platform: "",
    tags: ["Accessibility", "Gamification", "Global", "Mobile-First", "User Research", "UX"],
    order: 2,
    narrativeIntro: "When a kid rips open a Happy Meal, they're not thinking about your stakeholder alignment or your localization matrix. They want to play. For Despicable Me 4, \"play\" meant a browser-based catching game tied to physical mission code cards, shipping across 84 markets in 43 languages, with a target audience whose average patience for onboarding is roughly zero. I owned all parts of the user experience, including the user flows and wireframe specs, while pushing for something the program hadn't done before: building accessibility into the game from the start, not its margins.",
    sections: [
      {
        label: "Challenge",
        subtitle: "80+ markets, two different stakeholders, and a physical-digital handoff with lots of edge cases",
        body: "The constraints stacked up fast. 84 markets and 43 languages meant every screen had to survive localization. Two stakeholders (McDonald's and Universal Studios) had different priorities: McDonald's wanted a clear narrative about stolen smiles, a symbol quintessentially identified with McDonald's, while Universal focused on consistencies with the film's tone. The game's entry point was a physical card packed inside a Happy Meal toy, which showed a QR code linking to the site and a three-digit mission code that would be needed once on the site. Not all of the toys were the same though, as figurines contained cards, but books which were the preferred toy in certain European countries shipped with a QR code and no mission code at all, meaning a bypass flow was a requirement. As for the gameplay, the team's early accessibility exploration had already revealed that audio-panning directional cues (left ear vs. right ear) failed for users who were deaf or hard of hearing in one ear.",
      },
      {
        label: "Discovery & Research",
        subtitle: "What six games and five kids taught us about catching mechanics",
        body: "**Comparative analysis** examined six games (Fastlane, Fishing Food, Alien Shooter, Cabbage Catch Kids, Temple Run, Subway Surfers) to identify patterns kids already knew. Catching games typically used 5 to 7 columns, runner games used 3, and almost all used swipe or slide controls. We aligned on 3 lanes (matching the simpler runner mental model given the wide age range of the audience – 5 to 9 year olds), left/right arrow button controls (more precise for young kids and compatible with screen readers), and a smile meter as a progress checker.\n\n**Usability testing** collaborated with UXR to identify questions and determine a test plan. 5 participants were recruited and studied using a prototype which surfaced two findings that changed the design. Most kids skipped the mission code entirely: only 2 of 5 entered it from the physical card. The rest didn't notice and tapped straight through to get to the game. This validated the bypass flow as a critical path, not an edge case. Second, zero out of five participants interpreted the smile meter correctly. They expected it to represent a timer, a win/loss ratio, or their current level. Nobody read it as \"smiles remaining\" which was the direction determined by client and partner narratives. Spoiler alert: the 'smile meter' would go on to be improved to an ascending model in a future game iteration which utilized the same mechanic.\n\n**Accessibility exploration** pivoted away from the audio-panning approach which was the front-running solution for users with audio disabilities after the accessibility team confirmed it excluded certain deaf and hard-of-hearing users, particularly deaf-blind users. One team member noted they struggled when any background audio played simultaneously.",
      },
      {
        label: "Design Process",
        subtitle: "Fixing infinite loops, advocating against an onboarding video, and adding wraparound movement",
        body: "**The mechanic pivot.** The original design used a smile meter that filled as kids caught infinite number of falling smiles. The problem: smiles would fall continuously, but a kid who struggled could be stuck in an infinite loop with no way out of the level. I flagged this and proposed two alternatives. The fixed-smile approach shipped: a set number of smiles per level (roughly 50, 75, and 100 across the three difficulty tiers) and a score at the end, giving each level a clear endpoint and ensuring every player reached the end screen.\n\n**Less videos please.** After testing revealed kids rushed past the mission code screen, the team proposed adding a video to better connect the physical card to the digital entry point. I put my recommendation in writing: every additional screen is another chance for a kid to drop off. The video didn't solve the mission code discovery problem; it just added more content before the game. There needed to be more conscious work done if we wanted to connect the mission card, a physical component, with the digital game. Unfortunately, the cards were already printed and couldn't be revised. So the team moved forward with the video to try and explain through the narrative that you had to enter a code to start your mission. Post-launch research confirmed the instinct: only about half of kids noticed the broader campaign messaging, but nearly all said the game was fun. And on my end, to better solution for edge cases where the user may not have their mission card, I made sure an alternative option which let kids bypass the entry was provided.\n\n**Looped movement.** A small interaction detail with outsized impact. In the original wireframes, if the character sat in the leftmost lane and the player tapped \"left,\" nothing happened. This is customary for most games of this nature, but for users who couldn't see the game, it meant they needed to track where their character was at any given time and also which lane to move to. Too much mental load for the young audience. What I wanted was to track the character's location in comparison to the location of the next smile and provide a single auditory cue. To achieve this, we changed the lane movement to a Pac-Man-style wraparound: tapping left from the far-left lane wraps to character to the far-right, and vice versa. For all users, it reduced taps needed to reach any lane. For screen reader users, it made directional cues cleaner: \"left\" always meant \"go left,\" period.",
        image: "/images/DM4_Design_Process.png",
        imageAlt: "Wireframe screens showing game instructions, level gameplay with falling smiles, interrupter transitions, and end screens with annotations for accessibility and interaction design decisions",
      },
      {
        label: "Solution",
        subtitle: "Could a kid finish all three levels on sound alone?",
        body: "Accessibility was built into the wireframe annotations from the start, co-authored with our accessibility specialists. Directional sound effects announced the direction a player needed to move (e.g., \"left = beep\" \"right = boop\") as each smile fell. The smile meter was announced at 25%, 50%, 75%, and 100% intervals for screen reader users. A successful catch triggered a different audio cue; misses produced no sound, avoiding overload. We were limited by resources and couldn't include a separate background music toggle, so we ensured background music would be at a lower level than the informational sound cues being provided. The bar I set: could someone complete all three levels without looking at the screen? We hoped the answer was yes.\n\nThe shipped experience followed a clean path from disclaimer through mission code entry (with bypass), mission video, interactive tutorial, and three levels of gameplay with end screens which allowed users to replay each level. Four unique mission codes delivered different character representations and environments. Five market groupings determined regional character sets.",
        image: "/images/DM4_Solution.png",
        imageAlt: "Save the Smile solution overview",
      },
      {
        label: "Impact",
        subtitle: "Increased repeat play and purchase intent",
        body: "In a post-launch research comparing the experience against McDonald's rolling average for other Happy Meal digital promotions, nearly 80% of kids played the game more than once—a roughly 40% increase over the running average. Nearly all kids rated it exciting to play. We saw a small increase in the percentage of kids who said it was easy to play compared to previous promotions. Parents stated the experience made Happy Meal feel more in tune with today's kids, and most kids interacted with the toy longer because of the digital experience. The big win being that people expressed they were more likely to buy a Happy Meal compared to before.",
      },
      {
        label: "Reflection",
        subtitle: "Reversing the meter and embedding the tutorial",
        body: "As I've noted in an earlier spoiler, I reversed the smile meter direction. For Despicable Me 4, the meter started full and decreased, but children's mental models expect \"filling up\" to mean progress. This change is already applied to a program in development. I'd also integrate the tutorial into the first level rather than keeping it as a separate screen, embedding the teaching into the opening moments where the first few smiles fall slowly with on-screen prompts. This approach aligns with what I most often see in my comparative analysis: games with gradual complexity rely on in-gameplay tutorials to capture the user, rather than having separate instruction pages.",
      },
    ],
  },
  {
    slug: "wcdonalds",
    title: "WcDonald's",
    subtitle: "Architecting the Digital Hub Behind McDonald's Anime Universe",
    description: "Content architecture for McDonald's anime universe",
    thumbnail: "/images/WcD_Hero.png",
    heroImage: "/images/WcD_Hero.png",
    heroAlt: "WcDonald's logo with Japanese katakana surrounded by 22 original anime characters on a golden background",
    overviewImage: "/images/WcD_Overview.png",
    overviewAlt: "Two smartphones displaying WcDonald's wireframes showing synopsis overview, how to participate steps, manga titles, anime episodes, and character line-up sections",
    role: "UX Lead",
    client: "McDonald's / Wieden+Kennedy",
    agency: "TMS (a HAVI Co.)",
    timeline: "August 2023 to February 2024",
    scope: "Mobile-first microsite with episodic content, QR-gated access system, 22 original characters, 4-week rolling release",
    team: "20+ across strategy, account, creative/UI, development, project management",
    platform: "",
    tags: ["Content Architecture", "Mobile-First", "QR Gating", "UX"],
    order: 3,
    narrativeIntro: "McDonald's flipped its golden arches upside down and became WcDonald's, a fictional fast-food chain that appears across dozens of anime and manga series as a copyright-friendly stand-in for the real thing. The brand commissioned original manga chapters, anime shorts, a new sauce, themed packaging, and 22 original characters rolling out over four weeks. TMS built the digital experience: a mobile-first microsite accessed primarily through QR codes printed on millions of bags and boxes in McDonald's restaurants. I owned every screen, flow, and interaction.",
    sections: [
      {
        label: "Challenge",
        subtitle: "Two audiences, five phases, zero learning curve",
        body: "The experience had to serve two distinct audiences with fundamentally different access levels, release content on a rolling weekly schedule, and change state across five phases (pre-launch, then weeks one through four content) without requiring users to learn how any of that worked. Users who scanned the QR code from meal packaging unlocked that week's premium content (manga and anime). Users who arrived via direct URL without a scanned QR code could browse character bios but found premium content locked.\n\nThe UX challenge: make locked content feel like anticipation, not punishment. Build a system that rewards in-store customers without alienating curious browsers who might become customers next week. Add 22 characters releasing in batches, four manga PDFs, four anime episodes with audio description toggles, accessibility requirements, and an external development partner building the site from my wireframes.",
      },
      {
        label: "Discovery & Research",
        subtitle: "Studying how anime fans already consume episodic content",
        body: "I audited the platforms where anime fans actually spend time. On Crunchyroll and Rakuten Viki, I studied episodic content handling, series landing pages, and premium/free content gating. Viki's episode list structure influenced the video player template and the conversion opportunity around \"find your nearest McDonald's.\"\n\nOn MangaPlaza and Webtoon, I looked at how chapters are organized, how \"new\" badges signal fresh content, and how free-to-paid tier transitions work. The WcDonald's locked/unlocked mechanic needed to feel as natural as a freemium manga reader, not a corporate gate. Jujutsu Kaisen's character page influenced my recommendation to use close-up headshots rather than full-body images in the grid thumbnails, since headshots are more scannable at small sizes. I also sourced reference examples for specific micro-interactions: card-flip animations for character reveals, cascading slide-ins for weekly sections, and subtle parallax for the hero.",
      },
      {
        label: "Design Process",
        subtitle: "Weekly-tabs, gating logic, and the architecture of anticipation",
        image: "/images/WcD_Design_Process.png",
        imageAlt: "Four wireframe versions of the WcDonald's homepage layout showing mobile and desktop iterations with annotations for collapsed views, locked content states, coming soon tabs, and content hierarchy",
        body: "I presented two distinct homepage architectures. **Version 1 (Week-Tab Model):** a single scrolling page organized by weekly tabs, with the latest week active by default. **Version 2 (Content-Type Model):** top navigation with dedicated subpages for Manga, Anime, and Characters.\n\nThe client chose Version 1. I agreed. The campaign depended on repeat visits, and the week-tab model put recency front and center. When users returned, they'd see a \"New!\" badge on the latest week and tap to find fresh content. The structure itself communicated \"there's something new here.\" The content-type model would suit a permanent library. This was a four-week event. The UX needed to feel like a countdown, not a catalog.\n\nThe gating logic was the most technically nuanced piece. I mapped every permutation across two access methods and five time phases, documenting what each user type could see, tap, and unlock at every stage. Direct URL users who hit locked content were scrolled back to the \"How to Participate\" section (which expanded if collapsed), turning a dead end into a teaching moment. Coming soon states showed greyed-out tab icons that remained tappable so users could explore the structure, with \"Coming MM.DD\" overlays to build anticipation.",
      },
      {
        label: "Solution",
        subtitle: "Protecting the content loop from two well-meaning client requests",
        image: "/images/WcD_Solution.png",
        imageAlt: "Multiple devices including laptops and smartphones displaying the final WcDonald's website with anime characters, manga chapters, anime shorts, and character lineup sections",
        body: "Three decisions shaped the final product. When the client asked whether the hero carousel could deep-link to the McDonald's app for ordering, I recommended against it. We wanted users exploring content, not bouncing to another app within seconds. Having one carousel slide behave differently from the other three would break the interaction pattern users had just learned. But sometimes, the client gets what they want. We compromised on having an automatic scrolling carousel, which could be stopped with a \"pause\" button and the last image including a deep-link to McDonalds.\n\nFor social sharing, rather than a blanket yes or no, I scoped feasibility by format. Manga opened in native PDF viewers with minimal sharing control to maintain the QR code gate. Anime episodes were locked content, so sharing links would lead non-QR users to a locked state. Character bios were public, self-contained, and visually shareable. I recommended limiting sharing to character bio pages if the feature was pursued. Ultimately, we opted to allow the audience to download character images without explicit social sharing links.",
      },
      {
        label: "Impact",
        subtitle: "A cultural moment that outlived the campaign and lifted an entire menu category",
        body: "The WcDonald's campaign generated significant cultural momentum well beyond its four-week window. The introductory anime episode drove millions of views. WcDonald's sauce cups hit the highest end of projections in the first full week. McDonald's credited the campaign with lifting Chicken McNugget category sales across more than 30 markets. The LA pop-up sold out in minutes. Fans created fan art, cosplayed the original characters, and the organic reach extended far beyond paid media. Every piece of content that drove those numbers lived on the platform I architected.",
      },
      {
        label: "Reflection",
        subtitle: "What native manga reading and better analytics would have changed",
        body: "I'd push harder on two things. First, native manga reading. Delivering chapters as PDFs that open in the device's native viewer was pragmatic given timeline and budget, but it pulled users out of the branded experience. Even a simple in-browser page-turner would have kept users in the WcDonald's world and given us better engagement data on read depth. Second, microsite-specific analytics. The campaign's macro numbers are impressive, but I don't have granular data on user movement through the site: which weeks had the highest return rates, how many users converted from direct URL to QR scan, whether the character grid drove more engagement than manga or anime. I'd advocate earlier for a tagging plan that captures those patterns.",
      },
    ],
  },
  {
    slug: "frequent-fryer-program",
    title: "Frequent Fryer Program 2.0",
    subtitle: "Code scanning, gamified collectibles, and 150,000 instant-win prizes",
    description: "A five-week Canada-wide scavenger hunt combining OCR scanning, 150,000 instant-win prizes, and a passport-style progression system",
    thumbnail: "/images/FFP_Hero.png",
    heroImage: "/images/FFP_Hero.png",
    heroAlt: "My McDonald's Rewards Frequent Fryer Program logo on a gradient background with dotted flight paths and airplane silhouettes",
    overviewImage: "/images/FFP_Overview.png",
    overviewAlt: "Three iPhones held in hands showing the Frequent Fryer Program homepage, Skill Testing Question, and manual code entry screens",
    role: "UX Lead",
    client: "McDonald's Canada",
    agency: "TMS (a HAVI Co.)",
    timeline: "February to May 2024",
    scope: "Five-week, Canada-wide scavenger hunt tied to a new menu item launch; in-app webview experience with OCR scanning, gamified collectibles system, and 150,000 instant-win prizes",
    team: "20+ including strategy, account, creative (UI), development, PM",
    platform: "McDonald's Canada App (webview)",
    tags: ["Gamification", "In-App", "Loyalty", "UX", "Webview"],
    order: 4,
    narrativeIntro: "Entering a code to win a free order of fries sounds simple. Making that experience work across two languages, inside a third-party app's webview, with a legal compliance gate, a gamified collectibles system, and a new camera scanning feature is a different challenge entirely. Users hunted for Frycon codes hidden across physical and digital media, entered them in the app for a chance to win instant prizes, and collected codes in a passport-style progression system with four status tiers. I owned the end-to-end user experience and architecture: flow mapping, wireframe production, and cross-functional feedback loops with legal, client, and development through multiple review cycles.",
    sections: [
      {
        label: "Challenge",
        subtitle: "Three competing goals stacked on one code-entry flow",
        body: "The brief layered three distinct goals on top of each other, and each one created constraints the others had to work around. First, the promotional goal: drive trial of a new menu item through a code-entry sweepstakes with 150,000 instant-win prizes. Second, a technology pilot: introduce OCR (Optical Character Recognition) scanning to the promotion for the first time, using this program as a lower-risk test environment ahead of a larger promotion. Third, engagement depth: turn a repetitive weekly code-entry loop into something with enough retention pull to bring users back across five weeks.",
      },
      {
        label: "Discovery & Research",
        subtitle: "Mapping the full game mechanic before drawing a single screen",
        body: "Before wireframes, I worked through the full game mechanic against the technical constraints of the app's webview integration. The experience had to handle SSO authentication, a one-time Skill Testing Question for legal compliance, two code entry paths (manual and camera scan), an instant-win engine, and prize delivery directly to the user's McDonald's app wallet. Getting the logic right at the flow level meant fewer surprises for development and a cleaner legal walkthrough.",
      },
      {
        label: "Design Process",
        subtitle: "Designing around an unconfirmed technology without letting it become a liability",
        body: "**The OCR decision.** Manual entry was the default code path. The tech team wasn't confident OCR would be ready by launch, and a promotion built around a primary interaction that might not ship was an unacceptable risk for the user and the client. OCR was designed in as a surfaced, supported option: visible to users who wanted to explore it, but not load-bearing. That positioning also protected the pilot itself. Camera permissions can be denied. Lighting varies. The Frycon codes were 6 alphanumeric digits hidden across a wide range of surfaces. Keeping manual entry as the reliable default meant users always had a clean path to entry, and the scanner could be evaluated honestly without the pressure of carrying the full experience.\n\n**The passport system.** The collectibles layer started as a client question during kickoff: what happens when someone finds all the codes? Left unresolved, the end state of the most engaged users would be anticlimactic. The solution was a passport-style code collection page with a visible progress bar, four named tiers (Bronze, Silver, Gold, Platinum), and milestone reveals at each threshold: hints, bonus codes, and at Platinum, a direct loyalty points reward. Every Frycon code became a stamp. The collection view was paginated like a real passport booklet. This changed the mechanic from a transactional loop into a progression system. Users had a reason to keep entering codes beyond the immediate prize outcome.\n\n**Iterating through review cycles.** The wireframes went through a legal walkthrough, a client review, a technical walkthrough, and a second internal review before final handoff, all within a four-week window. Each cycle produced specific changes: Skill Testing Question (STQ) copy requirements from legal, the OCR hierarchy discussion switching from default to alternative option from the client review, registration simplification attempts weighed against Apple ID compatibility. The bilingual requirement (English and French Canadian) ran throughout. Language toggle, accessibility annotations, and other requirements were spec'd in wireframes and carried through to production.",
        image: "/images/FFP_Design_Process.png",
        imageAlt: "Wireframe user flow showing the complete Frequent Fryer Program experience including homepage, code entry, STQ, OCR scanner, confirmation screens, and code collection pages",
      },
      {
        label: "Solution",
        subtitle: "From SSO to passport: the shipped experience end to end",
        body: "The shipped experience walked users from SSO authentication through the Skill Testing Question, into a code entry screen defaulting to manual entry with scanning available as an alternate path, through instant-win results delivered directly to the app wallet, and into the passport collection page showing personalized progress. The personalization from SSO landed in production exactly as spec'd.",
        image: "/images/FFP_Solution.png",
        imageAlt: "Wireframes to final product comparison showing My Code Collection passport pages evolving from low-fidelity wireframes to high-fidelity mobile screens with Frycon stamps and milestone badges",
      },
      {
        label: "Impact",
        subtitle: "Supported 150,000 instant-win prizes with no friction, and validated a technology that shipped again",
        body: "The 2024 Frequent Fryer Program exceeded its KPIs significantly. The client cited this promotion as a prime example of driving digital market share through loyalty engagement. The app experience supported 150,000 instant-win prizes delivered directly to user accounts with no redirect and no friction at the reward step. The OCR scanner pilot validated the technology for a larger McDonald's Canada promotion that followed.",
      },
      {
        label: "Reflection",
        subtitle: "What the spec handled that real users never validated before launch",
        body: "The milestone thresholds in my wireframes shifted in production to a different scale after handoff, likely in response to the final confirmed code pool count. OCR technology had to pivot from the default code entry method to a secondary option based on OCR readiness, so the entry flow hierarchy had to be adjusted mid-execution. It allowed the team to plan for the worst case scenario in ways that would not impact the promotion, but defaulting to conservative designs to alleviate risk deprioritized the technology reveal. I'd also push harder for usability testing on the OCR flow specifically. The scanner was new to the ecosystem, and the edge cases (camera denial, poor lighting, unfamiliar code format) were handled in the spec but never observed with real users before launch.",
      },
    ],
  },
  {
    slug: "hmpu-design-library",
    title: "Happy Meal Digital Experience: UX Design Library",
    subtitle: "Designing the factory, not just the product",
    description: "A centralized Figma design library and 10+ mechanic-specific starter files for McDonald's Happy Meal gaming platform, cutting UX delivery timelines from 15 days to 10 per program.",
    thumbnail: "/images/HMPUDL_Hero.png",
    heroImage: "/images/HMPUDL_Hero.png",
    overviewImage: "/images/HMPUDL_Overview.png",
    overviewAlt: "Before and after comparison showing the evolution from basic wireframe components to a fully structured Figma screen with detailed annotations, toggle controls, and accessibility notes",
    role: "Sr. UX Designer",
    client: "McDonald's (internal initiative)",
    agency: "TMS (a HAVI Co.)",
    timeline: "July to December 2025 (presented to team January 2026)",
    scope: "Centralized Figma UX design library, 10+ mechanic-specific starter file templates, documentation and rollout",
    team: "UX Director, 2 Sr. UX Designers, 1 Sr. UX Researcher, 1 Jr. UX Designer",
    platform: "Figma",
    tags: ["Design Systems", "Figma", "Internal Tooling", "UX Ops"],
    order: 5,
    narrativeIntro: "Happy Meal \"Power Ups\" is a digital gaming experience where kids scan a QR code on their Happy Meal box or toy and play a themed browser game. New programs launch every few weeks, each with a different IP and visual theme but often following the same underlying sequence. The UX team was rebuilding the same structure and screens from near-scratch every time. I identified the problem, pitched to leadership, designed and built a centralized Figma library and 10+ mechanic-specific starter files, cutting UX delivery timelines for repeated mechanics by more than 30%.",
    sections: [
      {
        label: "Challenge",
        subtitle: "50+ programs, same screens, rebuilt from scratch every time",
        body: "Over 50 programs have shipped over the product's lifetime. A catcher game built for Despicable Me and a catcher game built for a different franchise use the same screen types: disclaimer, intro animation, game menu, tutorial, gameplay, end screen, and a full suite of admin screens. The wireframes, user flows, and annotation structures are functionally identical. The creative skin changes. Smaller changes to improve the mechanics are introduced. The UX skeleton doesn't.\n\nNobody had formalized this. Every new program started from a file that contained basic UI elements but no pre-built screens, no reusable annotations, and no mechanic-specific templates. Designers duplicated the file and rebuilt everything from memory or spent a large amount of time reviewing multiple projects to try and copy/paste what seemed relevant. The result: a significant proportion of components were broken on any given project. Detached instances, mislinked libraries, annotations that had drifted from the source. Designers were spending hours on reconstruction, not design. The work that actually required thinking (game-specific interactions, new mechanic explorations, accessibility edge cases) got squeezed into whatever time remained.",
      },
      {
        label: "Discovery & Research",
        subtitle: "Cataloging what's reusable versus what just feels reusable",
        body: "Before building anything, I needed to understand what was actually reusable versus what just felt reusable. I mapped the full HMPU experience flow, which follows a consistent decision path regardless of game mechanic: QR scan to Happy Meal landing → disclaimer → intro animation settling into a promo landing state → game menu → instructions → gameplay → end screen, with a loop back for multiple levels.\n\nI cataloged screen types across the program archive and sorted them into three categories. **Universal screens** appeared in every program: disclaimer, intro/outro, pause, options, language settings, accessibility settings, device orientation, etc. These became Design Library components. **Mechanic-shared screens** appeared across all programs using a specific game type. A catcher game's tutorial, gameplay screens, and end screen follow the same structure regardless of IP. These became the basis for Starter Files. **Program-unique screens** were genuinely one-off designs. These stayed out of the system. Trying to templatize the un-templatizable is how design systems become bureaucracies.",
      },
      {
        label: "Design Process",
        subtitle: "A three-layer system: library, starter files, and program files",
        imageBefore: "/images/HMPUDL_Design_Process_01.png",
        imageBeforeAlt: "Organizational structure diagram showing three layers: Design Library as the single source of truth, Starter Files as mechanic-specific templates, and Program Files as the final deliverables for each IP",
        image: "/images/HMPUDL_Design_Process_02.png",
        imageAlt: "Detailed wireframe key showing screen and annotation component structure with color-coded review status indicators and accessibility requirements",
        body: "I wrote a pitch framing the initiative for my UX Director, who brought it to the SVP of Account. The pitch focused on the pattern (we were doing custom builds for work that should have been configuration), the payoff (new projects start with pre-built, pre-annotated screens, creating major efficiencies), and the cost (estimated at a fixed number of hours).\n\nThe system has three layers. **The HMPU Design Library:** a single Figma file as the source of truth, with base elements, full screen components (each containing title, description, and wireframe), and annotation components with five toggleable slots per section to allow for mechanic-specific additions. Screen and annotation components are intentionally paired but separate so you can view screens clean for stakeholder reviews or annotated for internal handoffs without maintaining two files.\n\n**Starter Files:** more than ten mechanic-specific Figma files pre-populated with screens, flows, and annotations relevant to that game type. The starter file library covers Portrait-oriented template, Landscape-oriented template, Catcher, Customization, two versions of Mazes, Rhythm-Tap Game, Platformer, Simon Says, and more. For brand-new mechanics, designers use the Template starter file, which provides structure without mechanic-specific content.\n\n**Program Files:** the actual deliverables, duplicated from the appropriate starter file, connected to the library, then customized for the specific program's IP.\n\nAnnotations were the most careful piece. A single annotated wireframe needs to communicate to account teams, accessibility specialists, business analysts, creative directors, copywriters, developers, content strategists, and project managers. I designed the annotation component with interactive/directional elements describing button actions and destinations, plus team-specific notes grouped under labeled headers. A UX-specific color-coded review system (red for unreviewed, blue for edited, black for confirmed) allows a designer on my team opening a starter file for the first time to immediately see what needs attention.\n\nAccessibility requirements are embedded at the component level: heading levels, button labels with role and focus indicators, alt text requirements, contrast ratios, PEAT compliance, and focus order. They travel with the screen, not in a separate checklist.",
      },
      {
        label: "Solution",
        subtitle: "Onboarding docs built into the files, not beside them",
        image: "/images/HMPUDL_Solution.png",
        imageAlt: "Figma project view showing the HMPU Starter Files library with nine mechanic-specific files alongside an open starter file with organized page structure and wireframe sections",
        body: "I built step-by-step onboarding documentation directly into the starter files covering both workflows: creating from the Template (for new mechanics) and creating from a mechanic-specific file (for reskins). A change log tracker in the Design Library logs every modification with description, rationale, previous state, and author, tagged as ADDED, MODIFIED, REMOVED, or FIXED.\n\nThe full system was presented and received with great excitement to the UX team in January 2026.",
      },
      {
        label: "Impact",
        subtitle: "33% reduction in delivery timelines across qualifying programs",
        body: "UX delivery timelines dropped from 15 days to 10 on qualifying programs, a 33% reduction that compounds across every reskin. More than 10 mechanic-specific starter files now cover the most frequently used game types. The broken component rate is expected to drop significantly as programs adopt the library. The first program using the full system is in production and the projected timeline reduction held during the UX phase.",
      },
      {
        label: "Reflection",
        subtitle: "Start smaller, learn faster, scale with the team",
        body: "If I were starting over, I'd build fewer starter files upfront and get the team using two or three on real projects before scaling to ten. My instinct was to be comprehensive, but I built primarily based on my audit of past projects rather than iterating with team feedback on live ones due to resourcing and time constraints. A phased rollout could have given me real usage data earlier and given the team co-ownership sooner. The best design system is the one your team helped shape, not the one that arrived fully formed. The system is live, but it isn't finished. That's by design.",
      },
    ],
  },
  {
    slug: "pinside-out-io2",
    title: "Pinside Out!",
    subtitle: "Designing Pinside Out, the McDonald's x Inside Out 2 Happy Meal Game for Kids Who've Never Known Pinball",
    description: "A mobile web pinball game for kids ages 5 to 9 tied to Inside Out 2, designed for an audience that had never encountered a pinball machine, with spatial audio accessibility that lets visually impaired users complete the game without seeing the screen.",
    thumbnail: "/images/IO2_Hero.png",
    heroImage: "/images/IO2_Hero.png",
    overviewImage: "/images/IO2_Overview.png",
    overviewAlt: "Wireframe screens showing the full Pinside Out game flow from disclaimer through gameplay to end score",
    role: "UX Lead",
    client: "McDonald's & Disney Pixar",
    agency: "TMS (a HAVI Co.)",
    timeline: "June 2023 to May 2024",
    scope: "Mobile web pinball game with physical toy integration, 10 character skins, 3 game board designs, 3 languages, 20+ countries",
    team: "25+ across UX, UXR, creative, dev, accessibility, copy, content, QA, and account",
    platform: "Mobile browser (US + LATAM)",
    tags: ["Accessibility", "Gamification", "Mobile-First", "User Research", "UX"],
    order: 6,
    narrativeIntro: "McDonald's and Disney Pixar partnered on a Happy Meal digital experience tied to Inside Out 2, which went on to gross $1.7 billion and become the highest-grossing animated film of its time. The digital component: a pinball game called \"Pinside Out!\" played on a mobile browser with a physical toy placed on the top half of the screen. I owned the execution direction from kickoff through launch for UX, delivering user flows, annotated wireframes, research coordination, and collaborating on accessibility strategy. The core problem: our audience (kids ages 5 to 9) had largely never encountered a pinball machine.",
    sections: [
      {
        label: "Challenge",
        subtitle: "The concept assumed kids knew what pinball was. They didn't.",
        body: "The concept carried a foundational assumption that kids would know what pinball is. Our surprise? They didn't. Beyond the comprehension gap, the game needed to work as a mobile browser experience accessed via QR code (no app install), integrate with a physical toy whose translucent base lit up through the phone screen, compress the play field into roughly the bottom 60% of the screen (the toy occupied the rest), and be accessible to users with visual impairments, which is not a standard problem for a physics-based game where the ball moves fast and the field is dense with elements.",
      },
      {
        label: "Discovery & Research",
        subtitle: "Two rounds of testing that changed the design direction each time",
        body: "**Round 1 (June 2023):** In-person moderated testing with 5 participants, ages 5 to 9. The results were clear. The majority of participants couldn't figure out how to start the game. They tapped targets, swiped the background, and pressed decorative elements. The pinball launcher, obvious to any adult who's played pinball, was invisible to them. More than half misunderstood the goal entirely: rather than using flippers to keep the ball in play, they tried to let the ball fall through the bottom. They thought the gap between the flippers was the destination, not the failure state. Only 1 participant, on the top of the age range, had any prior pinball experience, and even that child couldn't figure out the mobile controls.\n\n**Round 2 (October 2023):** 4 participants, ages 5 to 7, testing the tutorial design with an interactive prototype and in-browser gameplay. The launch problem was solved: all of the participants successfully tapped the launch area after going through the tutorial. But one participant still misunderstood the objective when probed after his second playthrough. He associated the game with soccer and treated the flipper gap as a goal. That was the most important insight. Teaching controls wasn't sufficient. We needed to teach the objective itself, because a kid who's never seen pinball will map the game to whatever framework they already have.",
      },
      {
        label: "Design Process",
        subtitle: "A hybrid tutorial, geo-stereo sound, and physical toy pixel math",
        body: "**The tutorial.** A simple instruction screen wouldn't cut it. The research revealed a comprehension problem, not just a controls problem. I designed a hybrid-interactive tutorial where the game engine runs underneath and pauses at each new concept. The player performs the action, then moves forward. The sequence: highlight the ball and instruct to tap (ball launches, tutorial pauses), user taps anywhere on the screen to continue, ball slides to a predetermined position near the flipper and stops (instruct to tap flippers, both fire on any screen tap for small hands and small screens), taps on the screen to continue, then ball bounces off targets and bumpers showing point values associated with the targets before falling through the flippers to demonstrate what \"losing a ball\" looks like. The continue gates were added after the second round showed kids absorbing instructions unevenly. The tutorial only appears on the first playthrough of a session; any replays skip the tutorial.\n\n**Accessibility as a design driver.** I worked with our accessibility team from the earliest stages. The central question: how do you describe where the ball is for someone who can't see it? The solution we proceeded with was geo-stereo sound design. The ball's position is conveyed through spatial audio that shifts directionally and changes pitch and volume based on distance from the flipper area. During the tutorial, audio description users hear element-specific sound introductions at each pause point. Once gameplay starts, only the sounds play, reducing auditory load while preserving the information. Every interactive object was categorized (flippers, bumpers, kick-out holes, pop bumpers, spinners, inlanes), and all components within a category share the same sound, behavior, and point value, making the soundscape learnable rather than chaotic. For screen reader users, the system announces \"tap now\" as the ball approaches the flipper, with dev confirming they could track ball position to trigger announcements.\n\n**Physical-digital integration.** I measured the physical toy dimensions and converted them to pixel space to ensure the toy area and game area were properly proportioned. The toy's light-up base effect didn't scale to tablets (less than 30% of devices), so it couldn't be relied on as a core mechanic. I advocated for overage on the light area so the toy didn't need to be positioned exactly, because kids will never place it precisely where it needs to go and toys can move as you tap the screen.\n\n**Replayability.** I pushed for high score tracking within active sessions (current score vs. best score on the end screen) and in-game encouragement messaging at point thresholds with brief congratulatory messages that don't interrupt gameplay. The encouragement directly addressed the finding that kids didn't understand how to \"do good\" in the game.",
        image: "/images/IO2_Design_Process.png",
        imagePosition: 'before',
      },
      {
        label: "Solution",
        subtitle: "10 skins, 3 boards, accessibility features, and a toy that lights up through the screen",
        body: "The shipped experience featured 10 character-specific game skins across 3 board designs, the hybrid-interactive tutorial with sequenced mechanics, physical toy integration with light-up effects, geo-stereo sound design for spatial ball tracking, full accessibility support (audio descriptions, closed captions, photosensitivity warnings, and screen reader navigation), and localization in English, Spanish, and Brazilian Portuguese. It launched across the US and LATAM markets timed to Inside Out 2's theatrical release.",
        video: "/videos/IO2_Solution.mp4",
      },
      {
        label: "Impact",
        subtitle: "Shipped on time across 20+ countries with accessibility built in from day one",
        body: "The experience launched alongside what became the highest-grossing animated film in history at the time, with Inside Out 2 setting box office records in several of the same LATAM markets where the digital experience was live. The game shipped on time across 20+ countries and 3 languages with full accessibility support built in from the start rather than retrofitted. Parents reveled at the nostalgia and the chance to introduce their kids to a beloved game of their past: pinball.",
      },
      {
        label: "Reflection",
        subtitle: "Research as a feedback loop, not a phase",
        body: "I'd push harder on the second research round. The prototype didn't have sound during the tutorial, which meant the most innovative part of the accessibility strategy (sound-to-element mapping) couldn't be validated before production. If timing allowed, a third round with sound implemented and users with varying visual capabilities would have closed that gap. I'd also want a way to measure the encouragement messaging impact: the in-game messages at point thresholds addressed a real finding.\n\nThe broader lesson from this project: research isn't a phase, it's a feedback loop. The first round identified the surface problem (controls). The second exposed the deeper one (objective comprehension). Each finding changed the design. And the accessibility work made the product better for everyone. Geo-stereo sound was built for users with visual impairments. It also made the game more immersive for every player.",
      },
    ],
  },
  {
    slug: "first-student",
    title: "First Student",
    subtitle: "Audited and rebuilt the design system for one of North America's largest student transportation companies, stabilizing a fragmented site before rebranding it, and delivering a component library that absorbed two CMO changes and two rounds of brand color updates during a single engagement.",
    description: "Rebranding a company that moves 4.6 million students a day",
    thumbnail: "/images/FIRST_Hero.png",
    heroImage: "/images/FIRST_Hero.png",
    heroAlt: "First Student logo overlaid on a blurred background showing the Figma design system with color accessibility guidelines, typography samples, icons, and component library elements",
    overviewImage: "/images/FIRST_Overview.png",
    overviewAlt: "Side-by-side comparison of the First Student homepage before and after rebranding, showing the shift from a magenta and navy color system to a red, white, and blue identity with stronger trust signals and clearer navigation",
    role: "UX & UI Designer, UX Researcher",
    client: "First Student",
    agency: "Pathfinders Advertising",
    timeline: "March to June 2022",
    scope: "Full site audit, standardized Figma component library, competitive analysis, homepage research, high-fidelity mockups (desktop and mobile), digital brand guidelines portal, development handoff",
    team: "",
    platform: "",
    tags: ["Design Systems", "UX", "UI", "Branding", "Responsive"],
    order: 7,
    narrativeIntro: "First Student is one of the largest student transportation companies in North America: 4.6 million student journeys a day, 47,000 vehicles, 63,000 employees. When the engagement started, their site had been running on a magenta and navy color system, with a full bleed video hero, a thought-leadership-forward navigation, and years of compounding design debt underneath.\n\nBy the time the project ended, the brand had changed color palettes twice and moved through two CMOs. The rebranded site is live. The design system survived all of it and helped save time and money in the process.",
    sections: [
      {
        label: "Challenge",
        subtitle: "A B2B brand selling trust to school districts, built on a foundation that kept shifting",
        body: "The main audience for firststudentinc.com isn't parents. It's school district administrators evaluating multi-year fleet contracts worth millions of dollars. The site needed to communicate safety, reliability, and operational scale to procurement decision-makers running RFP processes.\n\nThe previous site had been making a different argument: its primary navigation led with \"Partner With Us,\" its hero video was unclear in its message, and its color system had no connection to the brand identity the Creative Director was developing for the rebrand.\n\nThree problems had converged beneath that. Visual inconsistency was structural: buttons in three styles, typography varying page to page, components existing in multiple versions with no single source of truth. There was no component library: developers were building from screenshots and best guesses, which meant every build introduced new drift. And the brand wasn't translating to digital: the identity carried real weight around safety, reliability, and national scale, but the site wasn't communicating those values through its design.\n\nA newer competitor had entered the market and was doing exactly that.\n\nThe recurring creative tension throughout the engagement: the new brand's palette of red, white, and blue had to feel trustworthy and modern without reading as a political campaign. That tension got more complicated when the brand colors changed. And then changed again.",
      },
      {
        label: "Discovery & Research",
        subtitle: "A manual audit, done the hard way",
        body: "There were no shortcuts here. I went through the live site page by page (this was a time before our current age of AI), and cataloged every instance of typography, buttons, content bands, and UI patterns in use. The same component appeared in multiple versions, sometimes on the same page. I documented all of it before starting any sort of re-design.\n\nThat sequencing was deliberate. By mapping existing components first, developers could begin transitioning the live site to a cleaner version of itself before the new brand launched. Fixing structural problems and applying new visuals as separate phases, rather than simultaneously, reduced risk and would prove important when brand direction shifted mid-project.\n\nThe competitive analysis covered multiple companies, such as Zum, Durham School Services, Student Transportation of America, and National Express. The homepage comparison was the most instructive piece. Zum stood out most clearly: their site led with the emotional storytelling and a founding narrative that made them feel like a mission-driven company rather than a fleet operator.\n\nFirst Student had scale and operational credibility that none of the competitors could match. 4.6 million student journeys a day versus Durham's 23,000 buses. But the site wasn't leading with any of it in a way that landed emotionally.\n\nThe account team framed the brief clearly: what was needed was an evergreen executive summary story that would resonate with district administrators going through an RFP process. First Student's homepage was functional where competitors were persuasive.\n\nThere was also a behavioral problem the client had identified. Users were stopping at the nearly full screen video hero and not scrolling further. Trust signals, statistics, case studies: none of it was pulling people down the page. That became a specific design constraint. The mockups needed to create a reason to keep scrolling, not just a reason to land.",
        image: "/images/FIRST_Discovery_Research.png",
        imageAlt: "Competitive analysis comparing the First Student and Zum homepages, listing pros, areas of improvement, and recommendations for each",
      },
      {
        label: "Design Process",
        subtitle: "Translating a Creative Director's vision into a system built to absorb change",
        body: "Working from the Creative Director's brand direction, my job was to make that vision functional as a digital system. That's a distinct skill from brand design. A color that works in a print campaign may fail WCAG contrast standards at 14px on a white background. A typographic treatment that reads bold and confident in a logo can become illegible when applied to mobile body copy. Translation from brand intent to component behavior is where most of this project lived.\n\nI collaborated with developers early to map the existing CMS template pages. Before building any mockups, you need to know which templates already exist so your designs map to real development work rather than aspirational layouts.\n\nOnce that map was in place, I built a Figma UI kit with the new brand guidelines applied: standardized heading hierarchy, body text styles, a color system tested against WCAG contrast standards, a unified button set replacing the accumulated variants, and standardized content band templates.\n\nThen the brand colors changed. And then they changed again.\n\nBecause every component in the system was built from centralized style tokens rather than hardcoded values, an update to the color system cascaded across the entire library automatically. What would have been weeks of rework across dozens of screens was saved with just hours of style updates.\n\nThe engagement saw two CMOs, each bringing different creative direction. The design system absorbed both. That outcome doesn't show up in a final screenshot. It's the point of doing this work correctly in the first place.\n\nThe color work required particular care regardless of which palette we were working with. Red, white, and blue can easily tip into political campaign territory. The goal was trustworthy and modern: patriotic in the quiet sense, not the declarative one. That meant controlling color ratios, choosing contrast pairings that felt professional rather than emphatic, and letting photography carry emotional weight.\n\nHigh-fidelity mockups for each template page were built directly from the component library, so every screen was automatically consistent with the design system. Developers could reference any element without interpreting the mockup.",
        image: "/images/FIRST_Design_Process.png",
        imageAlt: "Sitemap diagram showing the full First Student website architecture with color-coded page categories, template types, and navigation hierarchy",
      },
      {
        label: "Solution",
        subtitle: "Stabilize first, then transform",
        body: "The two-phase approach was deliberate: stabilize the existing site first, then apply the new brand on a clean foundation. Trying to fix structural problems and launch new visuals simultaneously would have been chaotic for developers and impossible to QA.\n\nDeliverables included the Figma component library, a brand portal for internal reference, competitive analysis documentation, homepage research, and high-fidelity desktop and mobile mockups for each CMS template.\n\nThe brand portal documented the reasoning behind specific choices, not just the outcomes.\n\nThe site went live at firststudentinc.com in 2022. The current site has gone through some iterations, but the design system as I created it, lives on. Clear typography hierarchy, color consistency, a trust signal section with award recognition, statistics communicating organizational scale, and a navigation structure with descriptive sublabels built for district administrators to be able to find exactly what they're looking for.",
        image: "/images/FIRST_Solution.png",
        imageAlt: "Multi-device mockup showing the rebranded First Student website across desktop, laptop, tablet, and mobile viewports with consistent red, white, and blue design system",
      },
      {
        label: "Impact",
        subtitle: "The part the client could see, and the part they couldn't",
        body: "The client's feedback: \"This looks and works way better than what we had.\" What that validates is the two-phase approach. They didn't just see a more attractive site. They saw one that worked better structurally. The cleanup and standardization, the part invisible to any visitor, is what made the visible redesign possible.\n\nThe more significant outcome is harder to photograph: a design system that absorbed two rounds of brand color changes and two CMO transitions during a single engagement without requiring a rebuild.\n\nA redesign is an event. A design system is infrastructure. Infrastructure compounds.",
      },
      {
        label: "Reflection",
        subtitle: "Infrastructure outlasts the rebrand. Documentation outlasts the team.",
        body: "I'd add a formal content audit running parallel to the component audit. The visual audit mapped every UI pattern, but a parallel pass at messaging, what exists on each page, what's redundant, what's missing, would have given the wireframes a stronger strategic foundation.\n\nI'd also establish a component governance process as part of the library delivery, because a design system without governance can have a shorter expiration date.",
      },
    ],
  },
  {
    slug: "naturally-fresh",
    title: "Naturally Fresh",
    subtitle: "Translated a Creative Director's 'Live Odorless' campaign concept into a functioning digital system across 7 website pages and 2 email campaigns, pivoting brand messaging from eco-friendly to odor control to reach a new primary audience.",
    description: "Reorienting a cat litter brand around what actually sells",
    thumbnail: "/images/NF_Hero.png",
    heroImage: "/images/NF_Hero.png",
    heroAlt: "Naturally Fresh logo with walnut icon over a green-tinted background of walnut shell cat litter, with a cat's ears peeking up from the bottom",
    overviewImage: "/images/NF_Overview.png",
    overviewAlt: "Side-by-side comparison of the Naturally Fresh website on mobile and desktop showing the updated homepage with promotional banner, hero imagery, and product lineup",
    role: "UX & UI Designer",
    client: "Naturally Fresh",
    agency: "Pathfinders Advertising",
    timeline: "3-week sprint in 2022",
    scope: "Website assessment of 7 pages with annotated wireframes, 2 promotional email campaigns (4 design iterations), SEO content recommendations, developer handoff documentation",
    team: "",
    platform: "",
    tags: ["UX", "UI", "Email", "SEO", "Branding"],
    order: 8,
    narrativeIntro: "The Naturally Fresh website, before this project, acted more like a product catalog. Plain background, floating product bags, stock typography, no lifestyle imagery, no emotional hook, and no meaningful odor control messaging anywhere above the fold.\n\nThe brand had been built around its original audience: older, environmentally-conscious cat owners who responded to sustainability credentials. Then the target audience shifted. Millennial cat dads had become the primary buyer. They cared about performance, specifically whether a litter could actually handle two cats in a shared apartment where they also worked, cooked, and had people over.\n\nThe client's sales data confirmed it plainly: the number one purchase driver for this audience wasn't eco-friendliness. It was odor control. In three weeks, I assessed seven pages, identified every place where messaging missed that priority, and rebuilt the digital experience to speak to the person who was actually buying, without touching the underlying site functionality.",
    sections: [
      {
        label: "Challenge",
        subtitle: "The right product. The wrong story. The wrong audience.",
        body: "Naturally Fresh had just wrapped a \"Gotcha Day\" adoption campaign leaning hard on eco-friendly messaging: walnut shell litter, sustainable materials, feel-good brand storytelling. The campaign was brand-right. But the brand was in the middle of an audience transition, and sustainability wasn't the lever that moved the new buyers to purchase.\n\nThe website wasn't converting. Key pages underserved the odor control story. Product pages led with ingredients rather than performance claims. CTAs to retailer sites were missing or buried. The email program was structured like a newsletter: informative, on-brand, and almost entirely non-promotional. Subscribers were learning about Naturally Fresh. They weren't being given a reason to buy.\n\nThe core constraint that shaped every decision: no full redesign. The client had an existing site maintained by an external development team I had no direct relationship with. Functionality wouldn't change. This was a UI and messaging refresh, executed through annotated wireframe documentation precise enough for developers who would never meet me.",
      },
      {
        label: "Discovery & Research",
        subtitle: "One finding that reframed the entire brief",
        body: "The project started with a clear brief: the client's own sales data had identified odor control as the top purchase driver for the target audience. That insight didn't come from research we conducted. It came from what was actually moving product on shelves. Our job was to close the gap between what the product could do and what the website was saying about it.\n\nThe eco-friendly angle wasn't wrong. It just wasn't the door. Odor control was the door. Sustainability was what people felt good about after they'd already walked through it.\n\nTo align the team around the audience shift, the campaign was grounded in a new persona: Matthew Millennial, 31 years old, cat dad, Chicago, working from home alongside two cats. He's looked into natural litter and genuinely wants to do right by his cats. But he has a specific hesitation: will eco-friendly actually handle two cats' worth of odor in a shared apartment? That doubt is the campaign in a sentence. Resolving it across every page, every email, and every CTA was the job.",
      },
      {
        label: "Design Process",
        subtitle: "Taking a Creative Director's campaign concept and making it work in digital",
        body: "A Creative Director at Pathfinders developed the campaign direction: \"Live Odorless.\" The concept, voice, and visual language were defined before any digital design began. The idea was to animate the brand around a simple promise: you could share your home with your cat kids and not smell them. Voice: whimsical, thoughtful, relatable. Design direction: natural tones with yellow accent color tied to the product line, particularly Ultra Odor Control. Imagery: cats and litter boxes in real living spaces like living rooms and kitchens, not tucked into closets, laundry rooms, or utility corners.\n\nThat imagery choice was strategic. Showing the litter box as part of a well-designed, lived-in home was itself an odor control argument. You only put it in the living room if it doesn't smell.\n\nMy job was to take that creative direction and make it function as a digital system. A handwritten script headline that looks warm and editorial in a campaign deck has to be evaluated at mobile breakpoints, checked against body copy weight, and confirmed legible across email clients. Yellow accent ratios that feel energetic in a print layout need to be tested for contrast compliance in a web context. Photography cropped and scaled for a social post behaves differently as a website hero image and as an email hero at 600 pixels wide.\n\nTranslation from creative intent to component behavior is where most of this project lived.\n\nI assessed seven pages: homepage, three product pages, resources page, a blog post, and the store locator. Recommendations split into two categories. Messaging changes reordered copy to lead with odor control and repositioned sustainability as supporting evidence rather than the headline claim. Design changes introduced new content bands to surface the odor control story where it had been absent, and restructured visual hierarchy on product pages to put performance claims before ingredient claims.\n\nThe developer handoff was a real constraint. I couldn't implement nor collaborate on any of this directly. Everything had to be communicated through annotated wireframes clear enough for developers I'd never speak to. Each wireframe documented what was updated versus new, the reasoning behind each change, interactive behaviors, and specific link destinations. When you don't control implementation, your documentation has to do the persuading and the explaining without a follow-up call to clarify intent.\n\nFor the email campaigns, the structural shift from the old template was significant. The previous template buried the action below informational content. I redesigned both with an expanded hero carrying an immediate CTA, product imagery deployed as visual shopping signals with promotional details in the button copy itself, and a compressed odor control benefits section with direct retailer links. Two emails sent roughly a month apart, each tightening urgency as the promotion window closed. Four iterations total, each one sharpening hierarchy, strengthening CTAs, and calibrating the balance between promotional urgency and the brand's warmer conversational tone.",
        image: "/images/NF_Design_Process.png",
        imageAlt: "Project planning flowchart showing the website assessment strategy, page-by-page annotation plan, email campaign timeline, and promotional coordination across retailers",
      },
      {
        label: "Solution",
        subtitle: "The right message on every surface, built for someone who won't read the brand story",
        body: "Every page assessment, every email iteration, and every SEO recommendation pointed the same direction. The annotated wireframes covered all seven pages. Two email campaigns shipped across four design iterations to help boost the effects of the website rebrand.\n\nUpdated content copy carried the odor control message into the sections that had been missing it entirely. The campaign ran under a single headline: \"live odorless.\" Direct, benefit-forward, and a clean break from the eco-first framing that had come before it.",
        image: "/images/NF_Solution.png",
        imageAlt: "Annotated wireframe of the Naturally Fresh Ultra Odor Control product page showing updated copy recommendations, imagery swaps, and SEO keyword changes",
      },
      {
        label: "Impact",
        subtitle: "An audience pivot executed without rebuilding anything",
        body: "The website recommendations were implemented by the client's external development team. The campaign increased site exploration, engagement, and newsletter subscriptions.\n\nThe more durable proof point is what the project didn't require. No new architecture, no rebuild in functionality, no redesigned pages. The single odor-control insight and every UI decision amplified the pivot across every touchpoint.\n\nThe messaging reorientation also appears to have held: the current Naturally Fresh site leads with \"Love them. Don't smell them.\" and positions odor control as the primary product promise almost 4 years later, with sustainability as the supporting story. That's the argument the campaign kick started. It's still the argument the brand is making.\n\nAudience transitions don't always require new products or new infrastructure. Sometimes they require re-translating what already exists for the person who's actually standing in front of it.",
        image: "/images/NF_Impact.png",
        imageAlt: "Multi-device mockup showing the Live Odorless email campaign on laptop, the Where to Buy page with store locator and retailer logos on desktop, and the rebranded mobile homepage with product lineup",
      },
      {
        label: "Reflection",
        subtitle: "What I'd track differently",
        body: "I'd track the full funnel. The campaign drove engagement and subscriptions, but I didn't have visibility into purchases at retailer sites. Tracking links on email CTAs and retailer buttons would have made the outcome story significantly more concrete.\n\nI'd also build A/B testing into the email sequence. The four iterations were sequential refinements based on judgment given the quick timelines, not controlled experiments. Even a single subject line or CTA placement test on the first send would have given the second email a data-backed starting point rather than an informed one.\n\nThe broader lesson: sometimes the most effective rebrand isn't a redesign. It's identifying who's actually in front of your product, understanding what they need to hear, and adjusting every visual and messaging decision until it lands for them.",
      },
    ],
  },
];
