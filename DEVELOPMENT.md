# Development Guide

This document contains information for developers and maintainers of the MarScript Extension.

## Project Structure

This is a **pure syntax highlighting extension** with no JavaScript/TypeScript source code. The project contains only JSON configuration files for VS Code TextMate grammar:

- `package.json` - Extension manifest and metadata
- `syntaxes/marscript.tmLanguage.json` - TextMate grammar definition
- `language-configuration.json` - Language configuration (brackets, comments, auto-closing)
- `.vscodeignore` - Files to exclude from the extension package

## Local Development

### Prerequisites

- Visual Studio Code
- Node.js and npm (for packaging and publishing)

### Testing the Extension

1. Open this project in VS Code
2. Press `F5` to launch a new Extension Development Host window
3. Create or open a `.sbr`, `.mpr`, or `.inc` file
4. Verify that syntax highlighting works correctly

### Making Changes

1. Edit the grammar file: `syntaxes/marscript.tmLanguage.json`
2. Edit language configuration: `language-configuration.json`
3. Reload the Extension Development Host window (`Ctrl+R` or `Cmd+R`) to see changes
4. Test your changes thoroughly

## Versioning and Releases

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and release management.

### Automated Release Process

When changes are pushed to the `main` branch, the CI/CD pipeline automatically:

1. Analyzes commit messages (following Conventional Commits)
2. Determines the next version number
3. Updates `CHANGELOG.md`
4. Updates version in `package.json`
5. Creates a Git tag
6. Creates a GitHub release
7. Publishes to VS Code Marketplace (if configured)

### Manual Version Check

To see what version would be released based on current commits:

```bash
npx semantic-release --dry-run
```

## Building and Packaging

### Create VSIX Package

```bash
# Install vsce if not already installed
npm install -g @vscode/vsce

# Package the extension
vsce package
```

This creates a `.vsix` file that can be:
- Installed locally: `code --install-extension marscript-x.y.z.vsix`
- Distributed manually
- Published to the marketplace

### Publishing to Marketplace

Publishing is typically handled by semantic-release in CI/CD, but can be done manually:

```bash
vsce publish
```

**Note**: Requires a Personal Access Token (PAT) from Azure DevOps.

## Repository Maintenance

### ⚙️ Disabling CodeQL

This project does not contain JavaScript/TypeScript source code, so CodeQL analysis must be **disabled manually** in the repository settings to prevent CI/CD errors.

**How to disable CodeQL Default setup:**

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In the left sidebar, click **Code security and analysis**
4. Scroll down to the **Code scanning** section
5. Find **CodeQL analysis**
6. If "Default setup" is shown as **Enabled**, click **⋮** (three dots) next to it
7. Select **Disable CodeQL**
8. Confirm the action

**Why this is necessary:** GitHub's CodeQL Default setup automatically detects project languages. Since this project previously had TypeScript configuration files (now removed), CodeQL may still attempt to scan for JavaScript/TypeScript code that doesn't exist.

## CI/CD Configuration

The project uses GitHub Actions for:

- **Automated releases** - Triggered on push to `main` branch
- **Semantic versioning** - Based on commit messages
- **Changelog generation** - Automatically updated
- **Marketplace publishing** - (if configured)

See `.github/workflows/` for workflow configurations.

## Troubleshooting

### Extension Not Loading

- Check `package.json` for correct paths to grammar and configuration files
- Verify file extensions match those defined in `package.json`

### Syntax Highlighting Issues

- Test with the TextMate grammar inspector: `Developer: Inspect Editor Tokens and Scopes` in VS Code
- Review the grammar file for regex pattern errors
- Check scope names match VS Code theme expectations

### Build/Package Issues

- Ensure all required files are included (check `.vscodeignore`)
- Verify `package.json` metadata is complete
- Check for any file permission issues

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [TextMate Grammar Guide](https://macromates.com/manual/en/language_grammars)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [semantic-release](https://github.com/semantic-release/semantic-release)
