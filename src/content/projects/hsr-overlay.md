---
title: HSR Overlay
slug: hsr-overlay
summary: "A Windows desktop overlay that reads in-game relic data from Honkai: Star Rail using OCR and turns noisy screen captures into structured information for real-time relic evaluation."
year: 2026
featured: true
featuredOrder: 1
tech:
  - C#
  - .NET 8
  - WPF
  - Tesseract OCR
highlights:
  - Extracts relic names, stats, and values directly from targeted regions of the game window.
  - Uses specialized image preprocessing and OCR profiles to improve recognition of different UI elements.
  - Parses OCR output into structured relic data and simulates future upgrades to estimate improvement potential.
status: Active Development
---
---

## Future work

The current implementation obtains game state visually through screen capture
and OCR. I am exploring a second data path based on externally captured network
traffic, with the goal of separating telemetry collection from the gaming PC.