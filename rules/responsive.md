# Responsive Rules

Responsive design is not shrinking desktop until it fits.

## General

- Design fluidly between breakpoints instead of only at a few fixed widths.
- Prevent horizontal overflow.
- Let content determine when layout changes are needed.
- Keep important actions reachable and visible.
- Re-evaluate navigation, density, and interaction patterns on smaller screens.

## Mobile

- Prioritize the primary action and most important content.
- Stack content when side-by-side layouts become cramped.
- Avoid tiny desktop-style sidebars.
- Use drawers, sheets, compact headers, or bottom navigation only when they improve the product.
- Keep tap targets comfortable.
- Do not hide important functionality just because the viewport is smaller.

## Tablet

Tablet should not automatically inherit either phone or desktop layout. Use the available width intelligently and avoid awkward empty columns.

## Desktop

- Use available space without stretching content unnecessarily.
- Keep major regions visually connected.
- Sidebars should have a clear purpose and reasonable width.
- Long-form content should not span the entire viewport.

## Testing widths

At minimum, mentally or visually check:

```text
360px
390px
768px
1024px
1440px
```

Also check unusual intermediate widths where layouts often break.
