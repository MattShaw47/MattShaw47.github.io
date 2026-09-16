# Matthew Shaw Portfolio

Astro scaffold for Matthew Shaw's software engineering portfolio.

## Requirements

- Node.js 22.12 or newer
- pnpm 11

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm check` | Run Astro and TypeScript checks |
| `pnpm build` | Create the production site in `dist/` |
| `pnpm preview` | Preview the production build locally |

Before committing a change, run:

```sh
pnpm check
pnpm build
```

## Add a project page

Project pages are generated from Markdown files, so a new project does not need its own Astro page
or component.

1. Create `src/content/projects/<project-name>.md`. Use a lowercase, hyphen-separated name.
2. Add the required frontmatter and write the project narrative below it.
3. If the project has a hero image, place it in `public/images/projects/` and set both
   `heroImage` and `heroAlt`.
4. Run `pnpm check` to validate the content, then run `pnpm dev` to review the page locally.

Use this structure as a starting point:

```md
---
title: Project Name
slug: project-name
summary: A concise explanation of the project, its audience, and its purpose.
year: 2026
featured: false
featuredOrder: 4
tech:
  - TypeScript
  - Astro
highlights:
  - A specific outcome or important capability.
  - A meaningful technical or design decision.
github: https://github.com/MattShaw47/project-name
demo: https://example.com/project-name
heroImage: /images/projects/project-name.webp
heroAlt: A meaningful description of what the project image shows.
status: Maintained
---

Introductory context about the project and its purpose.

## The challenge

Describe the problem, constraints, and intended users.

## The approach

Explain the solution, important decisions, and results.
```

The required fields are `title`, `slug`, `summary`, `year`, `featured`, `featuredOrder`, `tech`,
and `highlights`. The `github`, `demo`, `heroImage`, `heroAlt`, and `status` fields are optional.
Remove unused optional fields rather than leaving them blank. When `heroImage` is present,
`heroAlt` is required; neither field should be included for a text-only project.

The `slug` becomes the public route (`/projects/project-name/`) and must contain only lowercase
letters, numbers, and single hyphens. Keep `featuredOrder` unique. The roadmap calls for exactly
three projects with `featured: true`; additional projects should normally use `featured: false`
until one of the featured projects is replaced.

### Project page structure

The project system is shared across every entry:

```text
src/content/projects/<project-name>.md  Project data and narrative
src/content.config.ts                   Frontmatter validation rules
src/pages/projects/[slug].astro         Generates one route per project
src/layouts/ProjectLayout.astro         Detail-page presentation
src/pages/projects/index.astro          Lists every project
src/components/ProjectCard.astro        Project index preview
src/components/ProjectFeature.astro     Featured homepage preview
src/components/TechTags.astro           Reusable technology list
public/images/projects/                 Optional project images
```

Frontmatter supplies the hero, metadata, links, technologies, and highlights. Markdown below the
frontmatter becomes the main article body. Shared layouts automatically omit missing images,
status labels, and external links, so no component changes are needed for those variations.

## GitHub Pages URL

The Astro configuration targets `https://MattShaw47.github.io/` and intentionally has no
`base` path. GitHub Pages serves that root URL only from the special repository named
`MattShaw47.github.io`.

Before deployment, rename `MattShaw47/Matt-Shaw-Page` to
`MattShaw47/MattShaw47.github.io`. If the repository keeps its current name instead, change
the Astro configuration to include `base: '/Matt-Shaw-Page'`; the resulting site URL will be
`https://MattShaw47.github.io/Matt-Shaw-Page/`.

The GitHub Actions deployment workflow will be added in the deployment phase.
