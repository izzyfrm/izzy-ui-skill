# izzy-ui-skill

An opinionated UI/UX skill for coding agents that helps them build clean, intentional interfaces without the generic AI-generated look.

The goal is simple: give agents better design judgment before they touch the code.

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
├── SKILL.md
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

## Install

Use the repository as a skill folder for your coding agent.

### Codex / universal agents

```text
.agents/skills/izzy-ui/
```

### Claude Code

```text
.claude/skills/izzy-ui/
```

Copy the repository contents into the matching folder and keep `SKILL.md` at the skill root.

## Usage

You should be able to ask naturally:

```text
Build a clean dashboard for my Discord bot using the izzy UI style.
```

```text
Redesign this landing page so it feels intentional and not AI-generated.
```

```text
Make this responsive without changing the product's current behavior.
```

The agent should read `SKILL.md` first, then use the supporting rules only when relevant.

## Philosophy

Good UI is not about adding more. It is about making the right things clear, useful, consistent, and intentional.
