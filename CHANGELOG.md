# Change Log

All notable changes to the "marscript" extension will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025

### Added
- Complete syntax highlighting support for MarScript files
- Support for MarScript file extensions: `.sbr`, `.mpr`, `.inc`
- Syntax highlighting for:
  - Control flow keywords (BEGIN, END, IF, ELSE, FOR, WHILE, REPEAT, RETURN, PROC, TRY, CATCH, THEN, PROGRAM, SWITCH)
  - Data types (INT, DOUBLE, STRING)
  - Built-in functions (ABS, FLOOR, SQRT, PRINTF, STRLEN, FOPEN, FCLOSE, GET DATE, GET TIME, EXIT)
  - Operators (==, !=, <=, >=, =, <, >, +, -, *, /, etc.)
  - Comments (single-line // and multi-line /* */)
  - String literals with escape sequences (both double-quoted and single-quoted)
  - Preprocessor directives (#define, #include, #ifdef, #ifndef, #endif, #else, #elif, #error, #scramble, #endscramble)
- Language configuration with bracket matching, auto-closing pairs, and comment toggling
- Documentation with encoding recommendations (Windows-1252)
- Automated versioning with semantic-release
- Comprehensive contribution guidelines (CONTRIBUTING.md)
- Developer documentation (DEVELOPMENT.md)
