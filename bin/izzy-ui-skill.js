#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const args = new Set(process.argv.slice(2));
const skillName = "izzy-ui";
const packageRoot = path.resolve(__dirname, "..");

function printHelp() {
  console.log(`
izzy-ui-skill

Usage:
  npx izzy-ui-skill --claude
  npx izzy-ui-skill --codex

Options:
  --claude   Install globally for Claude Code
  --codex    Install globally for Codex
  --help     Show this help message
`);
}

function copyEntry(name, targetRoot) {
  const source = path.join(packageRoot, name);
  const target = path.join(targetRoot, name);

  if (!fs.existsSync(source)) return;

  fs.cpSync(source, target, {
    recursive: true,
    force: true
  });
}

function install(targetRoot, agentName) {
  fs.rmSync(targetRoot, { recursive: true, force: true });
  fs.mkdirSync(targetRoot, { recursive: true });

  for (const entry of [
    "SKILL.md",
    "rules",
    "styles",
    "stacks",
    "examples"
  ]) {
    copyEntry(entry, targetRoot);
  }

  console.log(`✓ Installed izzy-ui for ${agentName}`);
  console.log(`  ${targetRoot}`);
}

if (args.has("--help") || args.size === 0) {
  printHelp();
  process.exit(0);
}

const selected = [
  args.has("--claude") ? "claude" : null,
  args.has("--codex") ? "codex" : null
].filter(Boolean);

if (selected.length !== 1) {
  console.error("Choose exactly one target: --claude or --codex");
  process.exit(1);
}

if (selected[0] === "claude") {
  install(
    path.join(os.homedir(), ".claude", "skills", skillName),
    "Claude Code"
  );
}

if (selected[0] === "codex") {
  install(
    path.join(os.homedir(), ".agents", "skills", skillName),
    "Codex"
  );
}
