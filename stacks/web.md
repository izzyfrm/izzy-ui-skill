# Web Guidance

Applies to HTML, CSS, Tailwind, Astro, and similar web stacks.

- Prefer semantic HTML before adding extra wrapper elements.
- Use CSS layout systems intentionally: grid for two-dimensional structure, flex for one-dimensional alignment.
- Build responsive behavior with fluid sizing where practical.
- Keep design tokens or CSS variables for repeated colors, radii, spacing, and motion values.
- Avoid deep nested containers that only exist for styling.
- Keep hover styles supplemental; important actions must still be understandable on touch devices.
- Test focus-visible states and reduced-motion behavior.
- Do not ship horizontal overflow caused by decorative elements.
