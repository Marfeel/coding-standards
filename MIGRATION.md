# Migration from Lerna to npm Workspaces

This document outlines the changes made to migrate from Lerna to npm Workspaces using Node.js 18.

## Changes Made

1. **Root package.json**
   - Removed Lerna as a dependency
   - Added Node.js 18+ engine requirement
   - Updated scripts to use npm workspace commands:
     - `build`: Now uses `npm run build --workspaces --if-present` to run only on packages with a build script
     - `install-all`: Replaced Lerna bootstrap with standard npm install
     - Added `test`: Runs tests across all workspaces that have test scripts
     - Added `version-bump`: For versioning packages
     - Added `publish-packages`: For publishing packages

2. **Configuration Files**
   - Removed `lerna.json`
   - Updated `.npmrc` with workspace-specific settings
   - Updated `.gitignore` with additional npm-related patterns

3. **CI/CD Pipeline**
   - Updated `build/ci/publish` script to use npm workspaces commands
   - Updated `build/ci/Dockerfile`:
     - Changed base image to Node.js 18
     - Removed Lerna installation and bootstrap command
     - Simplified installation with npm workspaces

## Key Differences Between Lerna and npm Workspaces

### Package Versioning

- **Lerna**: Supported both fixed and independent versioning modes
- **npm Workspaces**: Each package maintains its own version independently

### Commands

| Lerna Command | npm Workspaces Equivalent |
|---------------|---------------------------|
| `lerna bootstrap` | `npm install` |
| `lerna run build` | `npm run build --workspaces --if-present` |
| `lerna publish` | `npm run publish-packages` |
| `lerna version` | `npm run version-bump` |

## Handling Packages Without Build Scripts

Some packages in this monorepo (like eslint-config-jasmine) only expose configuration files and don't require a build step. The updated scripts account for this by:

1. Using the `--if-present` flag with npm workspace commands
2. This flag ensures that commands only run on packages that have the relevant script defined
3. For packages without a build script, the build command will be skipped gracefully

## Next Steps

1. **Test the Migration**
   - Run `npm install` to install all dependencies
   - Run `npm run build` to verify the build process works for relevant packages
   - Run `npm test` to ensure tests still pass for packages with test scripts

2. **Package Dependencies**
   - Review any package interdependencies to ensure they're correctly specified
   - If packages depend on each other, update those dependencies as needed

3. **CI/CD Integration**
   - Verify that the CI/CD pipeline works correctly with the updated scripts
   - Run a test pipeline to ensure everything works as expected

## Troubleshooting

If you encounter issues with the npm workspaces setup, refer to the following resources:

- [npm Workspaces Documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
- [Node.js 18 Documentation](https://nodejs.org/docs/latest-v18.x/api/) 