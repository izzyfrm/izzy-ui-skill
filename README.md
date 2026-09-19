# izzy-ui-skill

An opinionated UI/UX skill for coding agents that helps them build clean, intentional interfaces without the generic AI-generated look.

The goal is simple: give agents better design judgment before they touch the code.

## Install

Once the npm package is published, install it globally for your coding agent with one command:

### Claude Code

```bash
npx izzy-ui-skill --claude
```

Installs to:

```text
~/.claude/skills/izzy-ui/
```

### Codex

```bash
npx izzy-ui-skill --codex
```

Installs to:

```text
~/.agents/skills/izzy-ui/
```

No extra dependencies are required beyond Node.js 18+.

Until the npm package is published, the repository can still be copied manually into the matching skill folder.

## What it focuses on

- strong visual hierarchy
- balanced spacing and layout
- responsive design from the start
- accessible interaction patterns
- restrained motion
- product-specific design decisions
- avoiding common AI UI clichés

## What it does not try to be

This is not a giant design database, component library, or framework. It stays intentionally small so an agent can understand and apply it quickly.

## Structure

```text
izzy-ui-skill/
├── README.md
├── LICENSE
├── package.json
├── SKILL.md
├── bin/
│   └── izzy-ui-skill.js
├── rules/
│   ├── accessibility.md
│   ├── anti-vibecode.md
│   ├── design.md
│   └── responsive.md
├── styles/
│   └── presets.md
├── stacks/
│   ├── react.md
│   ├── swiftui.md
│   └── web.md
└── examples/
    └── prompts.md
```

## Usage

After installation, ask your agent naturally:

```text
Build a clean dashboard for my Discord bot using the izzy UI style.
```

```text
Redesign this landing page so it feels intentional and not AI-generated.
```

```text
Make this responsive without changing the product's current behavior.
```

The agent reads `SKILL.md` first and uses the supporting rules when relevant.

## Philosophy

Good UI is not about adding more. It is about making the right things clear, useful, consistent, and intentional.

## License

MIT
