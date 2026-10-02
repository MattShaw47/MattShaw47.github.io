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

HSR Overlay is a Windows desktop tool I built to automate relic evaluation in *Honkai: Star Rail*. Relics have several randomized stats, and deciding whether a new piece is worth upgrading normally means either eyeballing it or manually copying its stats into an external calculator.

The goal of the project is to remove that manual step. The current version watches the game window, reads relic information directly from the UI with OCR, converts the result into structured game data, and estimates how likely an unfinished relic is to become an upgrade over the piece already equipped.

What started as a fairly simple OCR experiment ended up being much more about dealing with unreliable input.

## Getting data out of the game UI

I don't OCR the entire game window. The overlay first detects when relevant menus are open, then captures small regions containing the relic name, stat labels, and stat values.

The capture regions are calculated relative to the game window rather than the desktop, so moving the game window does not break the pipeline.

From there, each region is handled according to the kind of text I expect to find in it.

## Making OCR usable

A single Tesseract configuration wasn't reliable enough for the game's UI.

Relic names, white stat text, and orange highlighted values all behave differently, so I ended up giving them separate preprocessing paths. Numeric values are enlarged and thresholded before OCR, while main-stat values use color filtering to isolate the orange text from the surrounding interface. Tesseract also uses different character restrictions and segmentation settings depending on whether I'm reading a number, a title, or general text.

That made the system much more predictable than asking OCR to interpret a large mixed screenshot.

## Cleaning up the result

Even with preprocessing, OCR output is never perfectly clean. The next part of the pipeline treats the recognized text as untrusted input.

The parser normalizes formatting, matches recognized relic names against known game data, pairs stat labels with values, and converts strings such as `CRIT DMG 22.0%` into typed relic stats. Readings that don't form a valid relic are rejected instead of being passed farther into the application.

Once that step succeeds, the rest of the program works with a normal structured relic object rather than OCR text.

## Estimating upgrade potential

The analysis layer compares a recognized relic against the piece currently equipped by that character.

For an unfinished relic, the program simulates its remaining upgrade rolls thousands of times using the game's roll rules. Each finished result is scored using character-specific stat weights and compared with the equipped relic.

The output is a probability that continuing to upgrade the new piece will produce an improvement, which is much more useful than simply displaying the stats OCR happened to read.

## Where I'm taking it next

The current implementation gets game state visually through screen capture and OCR. I'm also working on a separate packet-capture path using mirrored network traffic and a Raspberry Pi.

Long term, I want the analysis code to care about structured game data rather than where that data came from. OCR and decoded network traffic could then act as two different inputs to the same evaluation system.
