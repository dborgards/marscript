# Contributing to MarScript Extension

Thank you for your interest in contributing to the MarScript Extension for Visual Studio Code!

## How to Contribute

1. **Report Bugs**: Create an issue with a clear description of the bug and steps to reproduce it
2. **Suggest Features**: Open an issue to discuss new features or improvements
3. **Submit Pull Requests**: Fork the repository, make your changes, and submit a pull request

## Commit Message Guidelines

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning. Please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for all commit messages.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - A new feature (triggers **minor** version bump, e.g., 1.0.0 → 1.1.0)
- `fix:` - A bug fix (triggers **patch** version bump, e.g., 1.0.0 → 1.0.1)
- `docs:` - Documentation changes only
- `style:` - Code style changes (formatting, missing semicolons, etc.)
- `refactor:` - Code changes that neither fix bugs nor add features
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependency updates, etc.

### Breaking Changes

To trigger a **major** version bump (e.g., 1.0.0 → 2.0.0), include `BREAKING CHANGE:` in the commit footer or use `!` after the type:

```
feat!: remove support for legacy file format

BREAKING CHANGE: The old .mar file format is no longer supported.
```

### Examples

Good commit messages:

```bash
feat: add support for single-quoted strings
fix: resolve syntax highlighting issue with hex numbers
docs: update installation instructions
refactor: simplify grammar definition structure
chore: update dependencies
```

Bad commit messages:

```bash
update stuff
fix bug
WIP
changes
```

## Pull Request Process

1. Ensure your code follows the existing style and structure
2. Update documentation if necessary
3. Use meaningful commit messages following the Conventional Commits format
4. The PR title should also follow the Conventional Commits format
5. Wait for review and address any feedback

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming environment for all contributors

## Questions?

If you have questions or need help, feel free to open an issue for discussion.
