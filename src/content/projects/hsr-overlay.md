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

HSR Overlay is a Windows desktop project I built to evaluate relics in
Honkai: Star Rail without requiring the player to manually enter every
stat into an external calculator. The current implementation reads the
game UI directly, converts the captured text into structured relic data,
and uses that data to estimate whether an unfinished relic is likely to
become an upgrade.

The project began as an experiment with screen capture and OCR, but the
main challenge quickly became making imperfect visual data reliable enough
to drive actual analysis.

## Reading the game screen

The application monitors the Honkai: Star Rail window and uses small
screen probes to recognize when relevant interfaces are open. Instead of
running OCR against an entire screenshot, it captures targeted regions
containing information such as relic names, stat labels, and numeric
values.

Those regions are defined relative to the game window rather than as
fixed desktop coordinates, allowing the capture pipeline to reason about
the game UI independently of where the window is positioned.

## Making OCR reliable

Generic OCR worked poorly on several parts of the interface. Stat values,
names, and highlighted main stats use different colors and layouts, so I
built separate preprocessing paths for different categories of text.

Numeric regions are enlarged and thresholded before recognition, while
highlighted main-stat values use color-based filtering to isolate the
orange text from the surrounding UI. Tesseract also runs with different
recognition profiles depending on whether the expected input is a number,
a relic title, or general text.

This reduced the problem from "understand this screenshot" to several much
smaller OCR tasks with constrained inputs.

## Turning imperfect text into structured data

OCR output is still noisy, so recognized text passes through a second
domain-specific parsing layer before it is trusted.

The parser normalizes formatting, separates stat labels from values,
identifies relic pieces using known game data, and converts text such as
"crit dmg 22.0%" into structured stat objects. Additional validation and
sanitization reject readings that do not correspond to valid relic
configurations.

The result is a structured model that the rest of the application can use
without knowing anything about how the original information was captured.

## Evaluating relic upgrades

Once a relic has been recognized, the application evaluates it using
character-specific stat weights and the relic currently equipped in the
same slot.

For relics that are not fully upgraded, the analyzer simulates the
remaining upgrade rolls thousands of times and measures how frequently
the candidate finishes with a better weighted score than the equipped
piece. 

## Future work

The current version obtains game state visually through screen capture and
OCR. I am also experimenting with an external packet-capture pipeline that
would move data acquisition away from the gaming PC.

The longer-term goal is to keep the analysis layer independent of its data
source, allowing structured game information from either OCR or decoded
network traffic to feed the same evaluation system.
