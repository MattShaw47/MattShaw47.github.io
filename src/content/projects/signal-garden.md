---
title: Signal Garden
slug: signal-garden
summary: A calm, collaborative incident dashboard that turns noisy service alerts into a shared timeline for small engineering teams.
year: 2026
featured: true
featuredOrder: 1
tech:
  - TypeScript
  - Astro
  - PostgreSQL
highlights:
  - Groups related alerts into one readable incident narrative.
  - Gives responders a low-friction handoff view without duplicating operational data.
  - Uses accessible color and redundant status labels throughout the interface.
github: https://github.com/MattShaw47/signal-garden
demo: https://example.com/signal-garden
heroImage: /images/projects/signal-garden.svg
heroAlt: Signal Garden dashboard showing a service timeline and three resolved alerts.
status: Prototype
---

Signal Garden explores how a focused interface can help a small team understand an incident without adding another complicated operations platform. The sample project is intentionally replaceable and exists to exercise image, link, and long-form content states.

## The challenge

Incident tools often split context across alerts, chat, and dashboards. This concept organizes those fragments around a single chronological view so responders can quickly see what changed, what has been checked, and what still needs attention.

## The approach

The interface emphasizes progressive disclosure, keyboard navigation, and useful summaries. It keeps the primary incident state visible while allowing deeper technical evidence to remain available on demand.
