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

### From VS Code Marketplace

1. Open Visual Studio Code
2. Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "MarScript"
4. Click "Install"

### Manual Installation

Download the `.vsix` file from the [Releases](https://github.com/dborgards/marscript/releases) page and install it:

```bash
code --install-extension marscript-x.y.z.vsix
```

## Supported File Types

- `.sbr` - MarScript source files
- `.mpr` - MarScript program files
- `.inc` - MarScript include files

## ⚠️ Important: Character Encoding

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

This ensures that special characters (like umlauts: ä, ö, ü) are displayed correctly.

## Usage

Once installed, the extension automatically provides syntax highlighting for all `.sbr`, `.mpr`, and `.inc` files.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Reporting bugs
- Suggesting features
- Submitting pull requests
- Commit message conventions

## Development

For developers and maintainers, see [DEVELOPMENT.md](DEVELOPMENT.md) for information on:

- Project structure
- Local development setup
- Building and packaging
- Release process
- Repository maintenance

## License

[MIT](LICENSE)

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes in each version.

### 1.0.0 - Production Ready

First stable release with complete MarScript syntax highlighting support.
