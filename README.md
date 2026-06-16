# Practical AI

A comprehensive, hands-on learning resource covering practical AI techniques and tools in the modern era.

📖 **[Read the Book](https://your-github-pages-url-here)** | 🚀 [Quick Start](#development)

---

## About

**Practical AI** is an mdBook-based guide designed to help developers, researchers, entrepreneurs, and learners master artificial intelligence through clear explanations, real-world examples, and hands-on tutorials.

### What's Inside

- **Foundational Concepts** — Core AI and ML principles explained clearly
- **Practical Implementation** — How to use modern AI APIs, frameworks, and tools
- **Hands-On Tutorials** — Build real projects with working code examples
- **References & Resources** — Curated links and further reading

---

## Development

### Prerequisites

mdBook must be installed. If not already present:

```bash
# Using Rust/Cargo (recommended)
cargo install mdbook

# Or download a pre-built binary
# https://github.com/rust-lang/mdBook/releases
```

### Build & Serve

```bash
# Serve locally with live-reload (http://localhost:3000)
mdbook serve

# Build the book (outputs to ./book/)
mdbook build

# Clean build artifacts
mdbook clean
```

### Workflow

1. **Write/Edit** — Modify markdown files in `src/`
2. **Update Navigation** — Edit `src/SUMMARY.md` to add/reorder chapters
3. **Live Preview** — Changes appear instantly at http://localhost:3000
4. **Publish** — Push to main; GitHub Actions deploys to GitHub Pages

### Project Structure

```
practical_ai/
├── src/                    # Source markdown files
│   ├── SUMMARY.md         # Book structure and navigation
│   ├── index.md           # Book introduction/landing page
│   ├── chapter_1.md       # Chapter content
│   └── [other chapters]
├── book.toml              # mdBook configuration
├── book/                  # Build output (generated)
├── .obsidian/             # Obsidian vault config
└── .claude/               # Claude Code settings
```

---

## Key Files

- **`src/SUMMARY.md`** — Navigation backbone; defines chapter order and structure
- **`src/index.md`** — Book introduction; reader-facing landing page
- **`book.toml`** — mdBook configuration (theme, preprocessors, build options)

---

## Contributing

Contributions are welcome! Whether it's:
- 📝 New chapters or sections
- 🐛 Bug fixes or clarity improvements
- 💡 Suggestions for additional topics
- 🔗 Resource recommendations

Feel free to open an issue or submit a pull request.

---

## Publishing

This book is published via **GitHub Pages**. 

**Current Setup:**
- Build: `mdbook build` → `./book/`
- Deployment: Automated via GitHub Actions on push to `main`
- Destination: GitHub Pages (configure in repo settings)

**To publish:**
1. Make changes in the `src/` directory
2. Update `src/SUMMARY.md` if changing structure
3. Push to main; GitHub Actions handles the rest

---

## License

[Add your license here]

---

## Contact

Questions or feedback? Reach out at **dr.rbeane@gmail.com**

---

**Happy learning!** 🚀
