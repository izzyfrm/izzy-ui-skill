# Design Rules

## Hierarchy

Every screen should have a clear primary purpose. The most important action or information gets the strongest visual weight. Secondary controls should support it without competing for attention.

Avoid making every heading, button, metric, and card visually loud.

## Layout

- Prefer a strong page grid over scattered floating elements.
- Align related content to shared edges.
- Use whitespace as structure.
- Avoid wrapping every section in a card.
- Keep dense tool interfaces dense enough to be useful, but never cramped.
- Keep reading widths comfortable for long text.

## Spacing

Use a small, repeatable spacing scale. For example:

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
```

Do not choose random gaps for every element. Small gaps communicate close relationships. Larger gaps communicate new groups or sections.

## Typography

- Use as few font families as possible.
- Build hierarchy with size, weight, spacing, and contrast rather than many fonts.
- Body text should remain easy to scan.
- Avoid giant hero text unless the page actually benefits from it.
- Keep labels concise and natural.
- Avoid making every heading lowercase or uppercase unless it is part of the chosen direction.

## Color

- Start with neutral surfaces and introduce accent color intentionally.
- Do not use accent colors on everything.
- Ensure text and controls remain readable in both light and dark themes.
- Avoid gradients unless they serve the visual direction instead of acting as default decoration.

## Surfaces

Use cards when content needs grouping, containment, interaction, or separation. Do not use them as the automatic solution for every block of content.

Prefer subtle differences in background, spacing, or dividers before adding heavy shadows.

## Corners

Keep corner radii consistent. Avoid making every object extremely rounded. Pills should normally be reserved for tags, segmented controls, compact filters, and similar elements.

## Motion

Motion should explain state changes, reinforce relationships, or make navigation feel smoother.

- keep common transitions short
- prefer opacity and transform for subtle motion
- avoid animating every element on page load
- do not make users wait for decorative animation
- respect reduced-motion settings

A polished static interface is better than a noisy animated one.
