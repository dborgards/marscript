# MarScript Extension for Visual Studio Code

This extension provides language support for MarScript and MarWin from Mahr GmbH.

## Features

- Syntax highlighting for MarScript files (\*.sbr, \*.mpr, \*.inc)
- Support for:
  - Keywords (BEGIN, END, IF, ELSE, etc.)
  - Data types (INT, DOUBLE, STRING)
  - Built-in functions (ABS, FLOOR, SQRT, etc.)
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

## Feedback & Contributions

- Report bugs or suggest improvements by creating an issue
- Pull requests are welcome

## License

[MIT](LICENSE)

## Release Notes

### 0.0.1

- Initial release
- Basic syntax highlighting for MarScript