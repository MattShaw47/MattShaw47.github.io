---
title: Trail Notes
slug: trail-notes
summary: An offline-first field journal for recording trail conditions, observations, and follow-up tasks when a connection is unreliable.
year: 2025
featured: true
featuredOrder: 2
tech:
  - TypeScript
  - IndexedDB
  - Service Workers
highlights:
  - Saves every field note locally before attempting synchronization.
  - Makes pending and completed uploads understandable at a glance.
  - Supports quick keyboard entry and touch-friendly controls.
github: https://github.com/MattShaw47/trail-notes
status: Maintained
---

Trail Notes is representative content for a project without imagery or a hosted demo. Its text-only presentation should expand naturally when the reusable project components arrive in the next phase.

## The challenge

Field observations are often captured where connectivity is intermittent. The application treats local storage as the primary workspace and synchronization as a background enhancement rather than a prerequisite.

## The approach

Each note has a visible sync state, a durable local copy, and a concise activity history. The design favors confidence and recovery over invisible automation.
