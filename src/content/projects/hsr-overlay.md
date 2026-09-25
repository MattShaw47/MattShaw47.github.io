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
  - Targeted screen capture and OCR for relic names, stats, and values.
  - UI-specific image preprocessing to improve Tesseract recognition.
  - Structured relic parsing and Monte Carlo upgrade evaluation.
github: https://github.com/MattShaw47/HSR-Overlay
status: Active Development
---
---

## Future work

The current implementation obtains game state visually through screen capture
and OCR. I am exploring a second data path based on externally captured network
traffic, with the goal of separating telemetry collection from the gaming PC.
