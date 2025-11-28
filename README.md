# MarScript Extension for Visual Studio Code

This extension provides language support for MarScript and MarWin from Mahr GmbH.

## Features

- Syntax highlighting for MarScript files (\*.sbr, \*.mpr, \*.inc)
- Support for:
  - Keywords (BEGIN, END, IF, ELSE, etc.)
  - Data types (INT, DOUBLE, STRING)
  - Built-in functions (ABS, FLOOR, SQRT, etc.)
  - Numeric literals (integers, floats, hex, binary, scientific notation)
  - Comments (Single line // and Multi line /\* \*/)
  - Operators

## Installation

1. Open Visual Studio Code
2. Open the Extensions view (Ctrl+Shift+X)
3. Search for "MarScript"
4. Click "Install"
5. Or via console (direct install): `code --install-extension marscript-0.0.1.vsix`

## Supported File Types

- `.sbr` - MarScript source files
- `.mpr` - MarScript program files
- `.inc` - MarScript include files

## ⚠️ Hint to encoding

MarScript files typically use the character encoding **Windows-1252** (ISO 8859-1).  
Please make sure that the following setting is set in your `.vscode/settings.json`:

```json
{
  "files.encoding": "windows1252",
  "[marscript]": {
    "files.encoding": "windows1252"
  }
}
```

## Project Structure

This is a **pure syntax highlighting extension** with no JavaScript/TypeScript source code.
The project contains only JSON configuration files for VS Code TextMate grammar.

### ⚙️ For Repository Maintainers: Disabling CodeQL

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

After disabling, the "CodeQL detected code written in GitHub Actions, but not any written in JavaScript/TypeScript" error will no longer occur.

**Why this is necessary:** GitHub's CodeQL Default setup automatically detects project languages. Since this project previously had TypeScript configuration files (now removed), CodeQL may still attempt to scan for JavaScript/TypeScript code that doesn't exist.

## Development

### Versioning

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and release management. Releases are automatically created based on commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) specification.

**Commit Message Format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` - New feature (triggers minor version bump)
- `fix:` - Bug fix (triggers patch version bump)
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `BREAKING CHANGE:` - Breaking changes (triggers major version bump)

**Examples:**
```bash
feat: add support for single-quoted strings
fix: resolve syntax highlighting issue with hex numbers
docs(README): update installation instructions
```

### Release Process

Releases are automatically created when changes are pushed to the `main` branch. The CI/CD pipeline will:
1. Analyze commit messages
2. Determine the next version number
3. Update CHANGELOG.md
4. Create a Git tag
5. Create a GitHub release

## Feedback & Contributions

- Report bugs or suggest improvements by creating an issue
- Pull requests are welcome
- Please follow the Conventional Commits format for commit messages

## License

[MIT](LICENSE)

## Release Notes

### 0.0.1

- Initial release
- Basic syntax highlighting for MarScript