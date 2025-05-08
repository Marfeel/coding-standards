# Marfeel - coding-standards

## Overview

This repository contains Marfeel's coding standards and configurations for various linting tools.

## Setup

This is a monorepo managed with npm workspaces (Node.js 18+).

### Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Build all packages:
   ```
   npm run build
   ```

3. Run tests:
   ```
   npm test
   ```

### Available Scripts

- `npm run lint` - Run ESLint across the codebase
- `npm run build` - Build all packages
- `npm test` - Run tests for all packages
- `npm run version-bump -- [patch|minor|major]` - Bump version of all packages
- `npm run publish-packages` - Publish all packages

### Workspace Structure

The repository is organized into the following packages:

- `eslint-config-*` - ESLint configurations for various environments
- `md-lint-config` - Markdown linting configuration
- `prettier-config` - Prettier configuration
- `scss-lint-config` - SCSS linting configuration
- `stylelint-config-styled-components` - Stylelint configuration for styled-components

