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

> **Note for maintainers:** This project does not require CodeQL JavaScript/TypeScript analysis.
> If you see CodeQL errors about missing JS/TS code, please disable the "Default setup"
> for CodeQL in the repository security settings (Settings → Code security and analysis → CodeQL analysis).

## Feedback & Contributions

- Report bugs or suggest improvements by creating an issue
- Pull requests are welcome

## License

[MIT](LICENSE)

## Release Notes

### 0.0.1

- Initial release
- Basic syntax highlighting for MarScript