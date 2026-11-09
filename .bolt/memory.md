# Project memory

## Product intent & audience

- Vite + React project for an official society/organization.
- Public-facing site likely shared via messaging apps and social media; link preview quality matters.

## Brand personality & voice

- Society uses an official emblem/seal as primary branding asset.

## Visual design & UX direction

- Official society logo/seal is stored in `public/` and referenced as the Open Graph image in `index.html` (`og:image`).
- Avoid Bolt/default branding in user-visible surfaces (meta previews, headers, etc.).

## Decisions, constraints & rationale

- OG image path in `index.html` points to the uploaded logo in `public/` using its original filename.
- WhatsApp/social preview caches may lag behind image changes; noted as expected behavior, not a defect.
- Stack: JSX + Tailwind CSS, React hooks, Lucide React icons; `@/` alias maps to `src/` (per `.bolt/prompt`).

## Open questions & assumptions

- Exact society name and full scope of the site not yet established.
- No additional pages, sections, or content requirements defined yet.
- No firm color palette, typography, or layout system inferred beyond logo usage.