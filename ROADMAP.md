# Personal Portfolio Website — Implementation Roadmap

This roadmap breaks the implementation into small, independently testable phases. Establish the content model and GitHub Pages configuration before investing heavily in visual polish.

## Phase 0 — Confirm deployment and content assumptions

### Confirmed decisions

- **GitHub repository:** [MattShaw47/MattShaw47.github.io](https://github.com/MattShaw47/MattShaw47.github.io)
- **Target URL:** `https://MattShaw47.github.io`
- The site should be deployed as the account-level GitHub Pages site, not beneath a repository-name path.
- GitHub, LinkedIn, email, résumé URLs, and final project information are not required during the initial setup.
- The site scaffold and architecture must not depend on final written content. Use clearly identifiable sample content where content is required for development or testing.
- Within reasonable limits, the layout must tolerate variations in title, summary, label, and body length. It must not rely on exact character counts or line breaks.
- The implementation must not require advance knowledge of which projects will have images. Every project component and page must select its layout from the presence or absence of image metadata.
- The Writing/blog section must remain absent from the homepage and navigation until at least one published post exists.

### Repository-name consideration

GitHub normally serves an account-level Pages site from a repository named `MattShaw47.github.io`. The current repository is named `Matt-Shaw-Page`. Before deployment, either rename it to `MattShaw47.github.io` or confirm a GitHub Pages configuration that produces the required account-level URL. Do not compensate for this with an Astro `base` path unless the final site will intentionally live at `/Matt-Shaw-Page/`.

### Deliverable

A documented set of implementation assumptions, plus representative sample content covering:

- a project with an image;
- a project without an image;
- a project with external links;
- a project without external links;
- short and long titles and summaries; and
- an empty writing collection.

## Phase 1 — Scaffold the Astro project

1. Create a minimal Astro project with TypeScript.
2. Establish the main directories:
   - `src/components/`
   - `src/layouts/`
   - `src/content/projects/`
   - `src/content/posts/`
   - `src/pages/`
   - `src/styles/`
   - `public/images/`
3. Configure Astro for `https://MattShaw47.github.io`.
4. Leave `base` unset for the intended account-level deployment.
5. Add npm scripts for development, validation, building, and previewing.
6. Confirm a production build succeeds before feature work begins.

### Definition of done

- The local development server works.
- `npm run check` and `npm run build` pass.
- The scaffold contains no dependency on final portfolio copy or links.
- Routes and asset paths are compatible with the intended account-level URL.

## Phase 2 — Establish the design foundation

1. Define design tokens for colors, spacing, typography, borders, shadows, content widths, and breakpoints.
2. Add a small global reset and base typography.
3. Implement:
   - `BaseLayout.astro`
   - `Header.astro`
   - `Footer.astro`
4. Add consistent styles for buttons, text links, external links, focus indicators, technology tags, and article prose.
5. Use flexible layout primitives that tolerate ordinary variations in content length.
6. Respect `prefers-reduced-motion`.

### Definition of done

- The header and footer work on desktop and mobile.
- Keyboard focus is obvious.
- No horizontal scrolling occurs at common viewport sizes.
- Longer sample titles and summaries wrap without collision or clipping.
- The visual foundation matches the restrained, content-focused direction.

## Phase 3 — Implement the content collections

1. Define the projects collection schema.
2. Support at minimum:
   - `title`
   - `slug`
   - `summary`
   - `year`
   - `featured`
   - `featuredOrder`
   - `tech[]`
   - `highlights[]`
   - optional `github`
   - optional `demo`
   - optional `heroImage`
   - optional `heroAlt`
   - optional `status`
3. Require meaningful alternative text when an image is configured.
4. Define the writing collection schema and draft behavior.
5. Add exactly three representative sample projects with realistic but replaceable text.
6. Include both image-present and image-absent cases solely to test the layouts; do not encode either case into component selection or ordering.
7. Keep the writing collection empty initially.

### Definition of done

- Invalid frontmatter fails clearly during development.
- All three projects load and sort from the collection.
- Replacing sample text does not require component changes.
- Adding or removing image metadata automatically changes the rendered layout.

## Phase 4 — Build the reusable project system

Create data-driven components and routes:

1. `TechTags.astro`
2. `ProjectFeature.astro` for large homepage previews
3. `ProjectCard.astro` for the projects index
4. `ProjectLayout.astro` for project detail pages
5. Dynamic `/projects/[slug]/` generation
6. `/projects/` index showing every project

### Interaction requirements

- Make each project preview broadly clickable without creating invalid nested interactive elements.
- Keep GitHub and demo links independently operable.
- Do not render controls for missing URLs.
- Select image or text-only presentation from the content data at render time.
- On mobile, place an existing image above the text.
- Allow project names, summaries, tags, and highlights to wrap naturally.

### Definition of done

- Adding a project Markdown file creates a detail page automatically.
- No project-specific page component is required.
- Image and no-image projects both look intentional.
- Removing an image or URL does not leave a blank container or disabled control.
- External links do not accidentally activate project-page navigation.

## Phase 5 — Assemble the homepage

Build the homepage in this order:

1. concise hero;
2. featured projects;
3. conditional Writing section;
4. About/contact section; and
5. footer.

Featured-project selection should:

1. filter for `featured: true`;
2. sort by `featuredOrder`;
3. select exactly three entries; and
4. report a clear development-time error if the collection does not produce three featured projects.

Use sample introductory, project, About, and contact text until final copy is supplied. Keep that content isolated from layout and component logic.

### Definition of done

- A visitor can understand all three projects from the homepage alone.
- Exactly three featured projects appear.
- Projects begin reasonably close to the top of the page.
- The About link reaches the correct section.
- The Writing section and its navigation item do not render while there are no published posts.
- Replacing sample content requires editing data or page copy, not CSS or component structure.

## Phase 6 — Complete the writing infrastructure

1. Create `PostPreview.astro`.
2. Implement `PostLayout.astro`.
3. Generate `/writing/[slug]/` pages from the posts collection.
4. Add the `/writing/` index.
5. Exclude drafts everywhere.
6. Compute whether published posts exist before rendering Writing navigation or homepage content.

### Definition of done

- An empty collection produces no Writing navigation, empty section, or “Coming Soon” message.
- Adding the first published Markdown post automatically reveals the Writing navigation, index, homepage section, and detail page.
- Draft posts never appear in production output.

## Phase 7 — Add metadata and static assets

1. Add page-specific titles and descriptions.
2. Configure canonical URLs for `https://MattShaw47.github.io`.
3. Add Open Graph metadata with sensible fallbacks.
4. Derive project metadata from frontmatter.
5. Add a favicon.
6. Add `public/resume.pdf` when the final résumé is available.
7. Hide the résumé link until the file or final URL exists.
8. Optimize project images to WebP or another suitable format.
9. Set dimensions or aspect ratios to prevent layout shift.
10. Lazy-load non-critical images.
11. Add a useful `404.astro` page.

### Definition of done

- Every route has a meaningful title and description, using temporary values where final text is unavailable.
- Social previews have appropriate metadata.
- Missing résumé, external URLs, or optional images do not produce broken links, controls, or containers.
- Image loading does not cause significant layout shift.

## Phase 8 — Configure GitHub Pages deployment

1. Ensure the repository name and Pages configuration can produce `https://MattShaw47.github.io`.
2. Add the official Astro/GitHub Pages Actions workflow.
3. Configure GitHub Pages to deploy through Actions.
4. Set Astro's `site` value to the final account-level URL.
5. Push to `main` and verify the workflow.
6. Inspect the deployed site rather than relying only on local preview.
7. Test direct navigation to nested project routes.
8. Confirm assets, favicon, and canonical URLs resolve correctly.

### Definition of done

- A push to `main` triggers a successful deployment.
- The site is available at `https://MattShaw47.github.io`.
- Every page and asset works at the public URL.
- Directly loading a nested route works correctly.

## Phase 9 — Run the acceptance test matrix

| Scenario | Expected result |
|---|---|
| Desktop project with image | Balanced text/image layout |
| Desktop project without image | Text expands without empty space |
| Mobile project with image | Image stacks above text |
| Mobile project without image | Clean text-only layout |
| Project with GitHub URL | Direct GitHub link appears |
| Project without GitHub URL | No empty or disabled control |
| Long project title | Wraps without breaking the layout |
| Longer summary | Remains readable and balanced |
| Empty writing collection | No Writing UI appears |
| First published post added | Writing navigation and sections appear |
| Draft writing post | Hidden everywhere |
| Missing résumé | No broken résumé link appears |
| Keyboard navigation | Logical order and visible focus |
| Reduced-motion preference | Nonessential motion is removed |
| Direct nested URL load | Works on GitHub Pages |

Also run:

- Astro type and content checks;
- a production build;
- responsive browser inspection;
- a Lighthouse or equivalent accessibility and performance audit;
- a manual link check; and
- an HTML heading-hierarchy review.

## Recommended milestone sequence

Use small commits or pull requests so each milestone is reviewable:

1. `chore: scaffold Astro portfolio`
2. `style: add design tokens and shared layout`
3. `content: define project and writing collections`
4. `feat: add reusable project pages`
5. `feat: build projects index and homepage features`
6. `feat: add conditional writing system`
7. `feat: add metadata and optional asset handling`
8. `ci: deploy portfolio to GitHub Pages`
9. `fix: complete responsive and accessibility QA`

## Keep out of the first release

Defer these until the core site is deployed and final content is ready:

- dark mode;
- a theme switcher;
- project filtering or search;
- analytics;
- a contact-form backend;
- animation libraries;
- React components;
- CMS integration;
- an automatic image pipeline; and
- complex MDX widgets.

The first useful release is a deployed homepage, three data-driven sample project pages, robust optional-content behavior, and a polished responsive layout. Final résumé, profile links, project data, images, and writing can then be added without restructuring the site.
