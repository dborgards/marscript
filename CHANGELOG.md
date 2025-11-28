# Change Log

All notable changes to the "marscript" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.0.1] - 2024

### Added
- Initial release with syntax highlighting support for MarScript files
- Support for MarScript file extensions: `.sbr`, `.mpr`, `.inc`
- Syntax highlighting for:
  - Control flow keywords (BEGIN, END, IF, ELSE, FOR, WHILE, REPEAT, RETURN, PROC, TRY, CATCH, THEN, PROGRAM, SWITCH)
  - Data types (INT, DOUBLE, STRING)
  - Built-in functions (ABS, FLOOR, SQRT, PRINTF, STRLEN, FOPEN, FCLOSE, GET DATE, GET TIME, EXIT)
  - Operators (==, !=, <=, >=, =, <, >, +, -, *, /, etc.)
  - Comments (single-line // and multi-line /* */)
  - String literals with escape sequences
  - Preprocessor directives (#define, #include, #ifdef, #ifndef, #endif, #else, #elif, #error, #scramble, #endscramble)
- Language configuration with bracket matching, auto-closing pairs, and comment toggling
- Documentation with encoding recommendations (Windows-1252)
