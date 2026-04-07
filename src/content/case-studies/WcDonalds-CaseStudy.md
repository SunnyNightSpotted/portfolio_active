---
title: "WcDonald's: Architecting the Digital Hub Behind McDonald's Anime Universe"
slug: wcdonalds
description: "Mobile-first microsite with episodic content, QR-gated access system, 22 original characters, and a 4-week rolling release for McDonald's anime campaign"
role: "UX Lead"
client: "McDonald's / Wieden+Kennedy"
agency: "TMS (a HAVI Co.)"
timeline: "August 2023 — February 2024"
tools: "Figma, Wireframing, QA Documentation"
team: "20+ across strategy, account, creative/UI, development, project management"
shipped: "February 26, 2024"
thumbnail: ""
heroImage: ""
sections:
  - label: "Overview"
  - label: "Challenge"
  - label: "Discovery & Research"
  - label: "Design Process"
  - label: "Solution"
  - label: "Impact"
  - label: "Reflection"
---

# WcDonald's: Architecting the Digital Hub Behind McDonald's Anime Universe

## Overview

**Role:** UX Lead
**Client:** McDonald's / Wieden+Kennedy
**Agency:** TMS (a HAVI Co.)
**Timeline:** August 2023 to February 2024
**Scope:** Mobile-first microsite with episodic content, QR-gated access system, 22 original characters, 4-week rolling release
**Team:** 20+ across strategy, account, creative/UI, development, project management
**Shipped:** February 26, 2024

McDonald's flipped its golden arches upside down and became WcDonald's, a fictional fast-food chain that appears across dozens of anime and manga series as a copyright-friendly stand-in for the real thing. The brand commissioned original manga chapters, anime shorts, a new sauce, themed packaging, and 22 original characters rolling out over four weeks. TMS built the digital experience: a mobile-first microsite accessed primarily through QR codes printed on millions of bags and boxes in McDonald's restaurants. I owned every screen, flow, and interaction.

## Challenge

The experience had to serve two distinct audiences with fundamentally different access levels, release content on a rolling weekly schedule, and change state across five phases (pre-launch, then weeks one through four) without requiring users to learn how any of that worked. Users who scanned the QR code from meal packaging unlocked that week's manga and anime. Users who arrived via direct URL could browse character bios but found premium content locked.

The UX challenge: make locked content feel like anticipation, not punishment. Build a system that rewards in-store customers without alienating curious browsers who might become customers next week. Add 22 characters releasing in batches, four manga PDFs, four anime episodes with audio description toggles, accessibility requirements, and a development partner (Votigo) building the site from my wireframes.

## Discovery & Research

I audited the platforms where anime fans actually spend time. On Crunchyroll and Rakuten Viki, I studied episodic content handling, series landing pages, and premium/free content gating. Viki's episode list structure influenced the video player template and the conversion opportunity around "find your nearest McDonald's."

On MangaPlaza and Webtoon, I looked at how chapters are organized, how "new" badges signal fresh content, and how free-to-paid tier transitions work. The WcDonald's locked/unlocked mechanic needed to feel as natural as a freemium manga reader, not a corporate gate. Jujutsu Kaisen's character page influenced my recommendation to use close-up headshots rather than full-body images in the grid thumbnails, since headshots are more scannable at small sizes. I also sourced CodePen examples for specific micro-interactions: card-flip animations for character reveals, cascading slide-ins for weekly sections, and subtle parallax for the hero.

## Design Process

I presented two distinct homepage architectures. **Version 1 (Week-Tab Model):** a single scrolling page organized by weekly tabs, with the latest week active by default. **Version 2 (Nav-Based Model):** top navigation with dedicated subpages for Manga, Anime, and Characters.

The client chose Version 1. I agreed. The campaign depended on repeat visits, and the week-tab model put recency front and center. When users returned, they'd see a "New!" badge on the latest week and tap to find fresh content. The structure itself communicated "there's something new here." The nav model would suit a permanent library. This was a four-week event. The UX needed to feel like a countdown, not a catalog.

The gating logic was the most technically nuanced piece. I mapped every permutation across two access methods and five time phases, documenting what each user type could see, tap, and unlock at every stage. Direct URL users who hit locked content were scrolled back to the "How to Participate" section (which expanded if collapsed), turning a dead end into a teaching moment. Coming soon states showed greyed-out tab icons that remained tappable so users could explore the structure, with "Coming MM.DD" overlays. On desktop, the cursor did not change to a pointer on non-interactive cards, preventing the false affordance of clickability.

## Solution

Three decisions shaped the final product. When the client asked whether the hero carousel could deep-link to the McDonald's app for ordering, I recommended against it. We wanted users exploring content, not bouncing to another app within seconds. Having one carousel slide behave differently from the other three would break the interaction pattern users had just learned. The client accepted.

For social sharing, rather than a blanket yes or no, I scoped feasibility by format. Manga opened in native PDF viewers with minimal sharing control. Anime episodes were locked content, so sharing links would lead non-QR users to a locked state. Character bios were public, self-contained, and visually shareable. I recommended limiting sharing to character bio pages if the feature was pursued.

During QA, I caught that the hero carousel's control icon showed "play" while actively rotating. That's backwards: the icon should represent the action the user can take (pause), not the current state. I flagged it alongside date formatting inconsistencies, cursor states, and FAB positioning.

## Impact

6.3 billion potential reach. 29.6 million social media impressions. 84,400 social media engagements. 250,000+ views on the introductory anime episode. WcDonald's sauce cups hit the highest end of projections in the first full week. McNugget sales saw a significant lift above projections, and McDonald's credited the campaign with lifting Chicken McNugget category sales across more than 30 markets. The LA pop-up sold out in minutes. Fans created fan art, cosplayed the original characters, and the campaign generated organic cultural momentum well beyond the four-week window. Every piece of content that drove those numbers lived on the platform I architected.

## Reflection

I'd push harder on two things. First, native manga reading. Delivering chapters as PDFs that open in the device's native viewer was pragmatic given timeline and budget, but it pulled users out of the branded experience. Even a simple in-browser page-turner would have kept users in the WcDonald's world and given us better engagement data on read depth. Second, microsite-specific analytics. The campaign's macro numbers are impressive, but I don't have granular data on user movement through the site: which weeks had the highest return rates, how many users converted from direct URL to QR scan, whether the character grid drove more engagement than manga or anime. I'd advocate earlier for a tagging plan that captures those patterns.
