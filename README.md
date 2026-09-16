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

## GitHub Pages URL

The Astro configuration targets `https://MattShaw47.github.io/` and intentionally has no
`base` path. GitHub Pages serves that root URL only from the special repository named
`MattShaw47.github.io`.

Before deployment, rename `MattShaw47/Matt-Shaw-Page` to
`MattShaw47/MattShaw47.github.io`. If the repository keeps its current name instead, change
the Astro configuration to include `base: '/Matt-Shaw-Page'`; the resulting site URL will be
`https://MattShaw47.github.io/Matt-Shaw-Page/`.

The GitHub Actions deployment workflow will be added in the deployment phase.
