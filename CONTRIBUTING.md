# Contributing to UI Qubes

First off, thank you for considering contributing to **UI Qubes**! It's people like you that make open-source such a fantastic community. 

## 🏗️ Repository Architecture
UI Qubes is a **pnpm workspaces** + **Turborepo** monorepo.
- `apps/web`: The Next.js showcase/documentation site.
- `packages/ui`: The reusable UI components.
- `packages/utils`: Helper functions (e.g. `cn` for Tailwind merges).

## 🚀 Setup for Local Development

1. **Fork the repo** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/uiqubes.git
   cd uiqubes
   ```
3. **Install dependencies** (Make sure you use `pnpm` >= 10):
   ```bash
   pnpm install
   ```
4. **Start the development server**:
   ```bash
   pnpm dev
   ```
5. **Run Linting**:
   ```bash
   pnpm lint
   ```

## 🌳 Branching Strategy
Please create a new branch for your work. We use the following branching naming convention:
- `feature/component-name` (e.g., `feature/modal-component`)
- `bugfix/issue-description` (e.g., `bugfix/button-hover-state`)
- `docs/what-changed` (e.g., `docs/update-readme`)

## 📝 Submitting a Pull Request
1. Keep PRs focused. Do not mix unrelated changes in one PR.
2. Before opening a PR, ensure that:
   - Your code passes all ESLint rules (`pnpm lint`).
   - You have visually tested your component in `apps/web`.
3. Provide a clear and descriptive PR title.
4. Fill out the Pull Request template comprehensively, including screenshots or videos if making UI changes.

## 🎨 Adding a New Component
If you are adding a new component to `@uiqubes/ui`:
1. Use standard HTML/React semantics.
2. Use Tailwind CSS v4 classes for styling.
3. Allow flexibility by wrapping `className` with the `cn` utility from `@uiqubes/utils`.
4. Create an entry in `apps/web` to showcase the component's preview, props, and variants.

## 🤝 Code of Conduct
Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
