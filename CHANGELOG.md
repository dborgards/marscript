# 1.0.0 (2025-11-28)


### Bug Fixes

* update Node.js version to 22 in GitHub Actions workflows ([060d1e9](https://github.com/dborgards/marscript/commit/060d1e9e786dfeb999466a97dbbe14a70302f6aa))


### Features

* add semantic-release for automated versioning ([24ff7fc](https://github.com/dborgards/marscript/commit/24ff7fc18c2ada7fd070fdcdafbae4e7ff9bba2a))
* add variable support and enhance function matching in MarScript syntax ([cf0266f](https://github.com/dborgards/marscript/commit/cf0266fdec2260affd09fcbff09b14b45dc293d1))
* enhance MarScript syntax highlighting with functions, macros, and string patterns ([d386e20](https://github.com/dborgards/marscript/commit/d386e20392ec023a2e1990b15c3ead390f7ef3c8))

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
