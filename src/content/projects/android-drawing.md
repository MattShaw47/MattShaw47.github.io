---
title: Android Drawing App
slug: android-drawing-app
summary: A collaborative Android drawing application with freehand and shape tools, local persistence, cloud-backed accounts and sharing, and a gallery for managing and publishing drawings.
year: 2025
featured: true
featuredOrder: 2
tech:
  - Kotlin
  - Jetpack Compose
  - MVVM
  - Room
  - Firebase
highlights:
  - Jetpack Compose drawing and gallery interfaces.
  - Room persistence with Firebase authentication and cloud features.
  - MVVM separation across UI, ViewModels, repositories, and storage.
github: https://github.com/MattShaw47/Android-Drawing-App
status: Completed
context: Academic Team Project · CS 4530
---

This project was developed as a team project for CS 4530 at the
University of Utah. The goal was to build a full Android drawing
application rather than an isolated canvas component.

## The challenge

The application needed to combine an interactive drawing surface with
persistent drawings, navigation, account functionality, and sharing
without letting UI state and storage concerns become tightly coupled.

## The approach

We structured the application around Jetpack Compose and MVVM, separating
screens and reusable UI components from ViewModels, repositories, and
persistence. Drawings could be stored locally through Room, while Firebase
provided authentication and cloud/community functionality.

...
