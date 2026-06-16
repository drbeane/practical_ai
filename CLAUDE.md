# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Practical AI** is an mdBook-based learning resource covering practical AI techniques and tools in the modern era. It serves as:
- A structured learning guide with chapters and sections
- A reference for AI concepts and patterns
- A collection of hands-on tutorials
- A curated list of learning resources and references

The book is published to GitHub Pages and sources content from markdown files in the `src/` directory.

## Quick Start: Development Commands

### Prerequisites

mdBook must be installed. If not already installed:
```bash
# Using Rust/Cargo (recommended):
cargo install mdbook

# Or use a pre-built binary from: https://github.com/rust-lang/mdBook/releases
```

### Build & Serve

```bash
# Build the book (outputs to ./book/)
mdbook build

# Serve locally with live-reload on http://localhost:3000
mdbook serve

# Clean build artifacts
mdbook clean
```

### Development Workflow

1. **Write/Edit Content**: Modify markdown files in `src/` (e.g., `src/chapter_1.md`)
2. **Update Navigation**: Edit `src/SUMMARY.md` to add/reorder chapters and sections
3. **Live Preview**: Run `mdbook serve` and view changes at http://localhost:3000 in real-time
4. **Publish**: Push to main branch; GitHub Actions will build and deploy to GitHub Pages

## Project Structure

```
practical_ai/
├── src/                    # Source markdown files
│   ├── SUMMARY.md         # Book structure and navigation (required)
│   ├── chapter_1.md       # Chapter content
│   └── [other chapters]
├── book.toml              # mdBook configuration
├── book/                  # Build output (gitignored, generated)
├── .obsidian/             # Obsidian vault config
└── .claude/               # Claude Code settings
```

### Key Files

- **`src/SUMMARY.md`**: The navigation backbone of the book. Defines chapter order, nesting, and front/back matter. Modify this first when restructuring the book.
- **`book.toml`**: mdBook configuration. Currently minimal; extend as needed for themes, preprocessors, or build options.
- **Markdown Files**: Each chapter is a `.md` file. Use standard Markdown syntax; mdBook supports:
  - Wiki-links (if preprocessor enabled): `[[file]]`
  - Code blocks with language specification
  - Tables, lists, emphasis
  - Images from relative paths (store in media folder)

## Architecture & Content Organization

### Design Pattern: Obsidian + mdBook

This project uses **Obsidian as the writing/organization tool** and **mdBook as the publication engine**:

- **Obsidian (.obsidian/)**: Provides a knowledge graph interface, backlinks, and search. Useful for organizing interconnected concepts and research during writing.
- **mdBook (book.toml + src/)**: Generates a static website. Content for publication lives in `src/`; navigation is defined in `SUMMARY.md`.

**Workflow Implication**: Content can be written in Obsidian notes but must be exported/migrated to `src/` markdown files for publication.

### Content Layers

The book is structured in **learning tiers**:

1. **Foundational Chapters**: Core AI concepts (what is ML, neural networks, LLMs, etc.)
2. **Practical Guides**: How to use modern AI tools (APIs, frameworks, deployment)
3. **Hands-On Tutorials**: Step-by-step walkthroughs with code examples
4. **References & Resources**: Curated links, glossary, further reading

When expanding the book, ensure SUMMARY.md hierarchy reflects this structure clearly.

### Reference & Source Management

- **External Links**: Use standard Markdown links: `[text](https://example.com)`
- **Internal Cross-References**: Use mdBook-style relative links: `[text](./chapter_filename.md)` or section anchors `[text](./chapter.md#section-name)`
- **Code Examples**: Embed in markdown with triple backticks and language tag:
  ```python
  # Example code
  ```
- **Images**: Store in a media folder (e.g., `src/media/`), embed as `![alt](./media/image.png)`

## Writing Style Guidelines

**Em-dashes**: Avoid em-dashes (—) in content. Use en-dashes surrounded by spaces ( – ) as a selective alternative, or prefer:
- Commas or periods for separation
- Parentheses (like this) for asides or clarifications
- Colons: when introducing explanations or lists
- This keeps the text more accessible and easier to parse

## Common Development Patterns

### Adding a New Chapter

1. Create `src/chapter_name.md` with content:
   ```markdown
   # Chapter Title
   
   Introduction paragraph...
   
   ## Section 1
   Content here
   ```

2. Add entry to `src/SUMMARY.md`:
   ```markdown
   - [Chapter Title](./chapter_name.md)
     - [Section 1](#section-1)
   ```

3. Save and `mdbook serve` will hot-reload.

### Linking Between Chapters

Use relative paths from the current file:
```markdown
See also [Previous Chapter](./chapter_1.md) for more details.
Jump to [specific section](./chapter_2.md#subsection-anchor).
```

### Including Code Examples

For inline code:
```markdown
Use the `example()` function to...
```

For code blocks with syntax highlighting:
````markdown
```python
def hello():
    print("Hello, AI!")
```
````

## Publishing

- **Destination**: GitHub Pages (typically from `/docs` or `gh-pages` branch)
- **Build**: `mdbook build` generates static HTML in `./book/`
- **Deployment**: Configure GitHub Actions to build and deploy on push to main
- **Current Status**: book.toml is minimal; adjust build settings and themes as needed

## Notes for Future Work

- **mdBook Themes**: Consider extending book.toml with custom CSS or installing a theme (e.g., `theme = "my-theme"`)
- **Preprocessors**: If Wiki-links or other Obsidian-style features are needed in the published book, mdBook preprocessors can be added to book.toml
- **GitHub Pages Config**: Ensure repo settings point to the correct branch/folder for publishing
- **Obsidian → mdBook Sync**: Currently manual; if content scales, consider a tool or workflow to sync Obsidian files to src/

## Getting Help

- mdBook Docs: https://rust-lang.github.io/mdBook/
- Markdown Syntax: https://commonmark.org/
- GitHub Pages Publishing: https://docs.github.com/en/pages
