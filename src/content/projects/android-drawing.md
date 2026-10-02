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

This project was built by a three-person team for CS 4530 at the
University of Utah. We developed a full Android drawing application
rather than a standalone canvas: users could create drawings, manage them
locally, authenticate with an account, upload or share work through
Firebase, and run image-analysis features against saved drawings.

Because development was collaborative, most major parts of the application
were touched by multiple team members. My work included Firebase
authentication and application integration, ViewModel and gallery changes,
drawing-tool fixes, testing and error handling, and later cloud/community
gallery fixes.

## Application architecture

We built the app in Kotlin with Jetpack Compose and used an MVVM-oriented
structure to keep UI state separate from persistence and external services.

The central ViewModel exposes drawing, gallery, brush, cloud, and
image-analysis state through StateFlows. Repository layers handle local
Room persistence, Firebase-backed cloud storage, authentication, and
external image-analysis requests.

That separation became increasingly important as what began as a drawing
canvas grew into an application with several independent workflows.

## Local and cloud persistence

Drawings can be maintained locally through Room without requiring an
account. Authenticated users gain additional cloud functionality through
Firebase Authentication, Firestore, and Firebase Storage.

Cloud-backed drawings can be saved, published, sent to another registered
user, or viewed in received/sent collections. This required coordinating
local drawing IDs and UI state with remote metadata and image storage.

I worked directly on the Firebase authentication setup and its integration
through the application's navigation, ViewModels, repositories, and
screens, and later worked on several cloud/gallery integration issues.

## Drawing and gallery workflows

The drawing surface supports freehand input along with line, rectangle,
and circle tools, configurable brush size and color, and undo/redo/clear
operations.

Saved drawings flow into a gallery where they can be reopened, deleted,
shared, uploaded, or selected for other features. I worked on several of
the interactions between drawing state, the ViewModel, and gallery UI,
including fixes to shape and undo/redo behavior.

## Image analysis

The application can send saved drawings to Google Vision for object
localization. Detection results are rendered back over the drawing as
bounding boxes alongside confidence information.

This feature introduced another asynchronous data path through the same
ViewModel/repository architecture and required loading, error, and
no-result states in the UI.

## Testing and collaboration

The project was developed collaboratively, so feature boundaries were not
strict ownership boundaries. We regularly modified shared ViewModels,
repositories, and Compose screens as later phases added persistence,
sharing, authentication, and image analysis.

My later work included unit-test additions and fixes, error-handling
changes, and integration cleanup across gallery, repository, and analysis
code.
