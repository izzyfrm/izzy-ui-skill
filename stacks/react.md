# React Guidance

- Componentize repeated UI patterns, not every individual wrapper.
- Keep component APIs small and understandable.
- Separate product state from purely visual state when it improves clarity.
- Preserve existing behavior during visual refactors unless the user explicitly requests flow changes.
- Avoid adding dependencies for UI that can be implemented cleanly with the existing stack.
- Design loading, empty, error, disabled, and success states alongside the default state.
- Avoid giant components, but do not split a simple page into dozens of tiny files without a maintenance reason.
- Reuse tokens and primitives so the final interface feels consistent.
