# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a monorepo containing Marfeel's coding standards and linting configurations. It uses npm workspaces for package management and contains multiple packages that provide standardized configurations for different tools and frameworks.

### Package Structure
- `packages/biomejs-config/` - Biome.js configuration with TypeScript/React support
- `packages/eslint-config-*` - ESLint configurations for different environments (JS, TS, React, Vue, Node, Jest, Jasmine)
- `packages/prettier-config/` - Prettier formatting configuration
- `packages/stylelint-config-styled-components/` - Stylelint configuration for styled-components
- `packages/md-lint-config/` - Markdown linting configuration with custom rules
- `packages/scss-lint-config/` - SCSS linting configuration
- `packages/eslint-plugin-whitecollar/` - Custom ESLint plugin with specific rules

### Key Configurations
- Uses tabs for indentation (consistent across Biome, ESLint, and Prettier)
- Line width limit of 120 characters
- Single quotes for JavaScript/TypeScript
- Private npm registry at `https://repositories.mrf.io/nexus/repository/npm-internal/`

## Common Commands

### Development Commands
```bash
# Install dependencies for all workspaces
npm install

# Build all packages (if build scripts exist)
npm run build

# Lint the entire codebase
npm run lint

# Run tests across all workspaces (if present)
npm run test

# Clean all workspaces (if clean scripts exist)
npm run clean
```

### Workspace Management
```bash
# Install a dependency in a specific workspace
npm install <package> --workspace=@marfeel/eslint-config-js

# Run a command in all workspaces
npm run <script> --workspaces

# Run a command in a specific workspace
npm run <script> --workspace=<package-name>

# List all workspace packages
npm ls --workspaces
```

## Code Standards

### JavaScript/TypeScript Standards
- Tab indentation (4 spaces equivalent)
- Single quotes for strings
- Semicolons required
- No trailing commas
- Maximum line length: 120 characters
- Complexity limit: 10 for functions
- Maximum nesting depth: 3

### React-Specific Rules
- Classic JSX runtime configuration
- Hook rules enforced (useHookAtTopLevel is error)
- Accessibility rules configured with some disabled (noPositiveTabindex, useKeyWithClickEvents)

### Biome.js Configuration
- Organizes imports disabled to avoid conflicts
- Excludes common build directories (lib, dist, build, .next, coverage)
- Different rule severity for test/story files
- Enhanced TypeScript support with warnings for `any` usage

## Testing

This repository primarily contains configuration packages rather than application code. Individual packages may have their own test configurations, but there's no centralized test command at the root level.

## Publishing

Packages are published to Marfeel's private npm registry. Each package has independent versioning. The `publishConfig` in package.json files points to the internal Nexus repository. Use `npm publish --workspace=<package-name>` to publish individual packages.