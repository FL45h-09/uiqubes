# Contributing to UIBrix

Welcome to **UIBrix** — and thank you for thinking about contributing! Whether you’re fixing a bug, improving components, or dropping a 🔥 new feature — we’re glad to have you here.

---

## ⚠️ Rules of the Game

### 🛑 DO NOT touch the `/website` folder unless:

- You're fixing a verified bug 🐞
- You're submitting an enhancement suggestion with clear reasoning ✨

**All feature work should be done inside `/packages` only.**  
The `/website` is maintained exclusively by the core team (read: me 😎).

---

## 🛠️ Local Development Setup

1. **Fork this repo** and clone your fork:

```bash
git clone https://github.com/FL45h-09/uibrix
cd uibrix-monorepo
pnpm install
pnpm dev
```
Use this only to test components you build inside packages.

## 📦 Monorepo Structure

/packages/      # ✅ You work here
/website/       # ❌ Hands off unless bug fix or suggestion

## 🧪 Making a Contribution

- Create a branch ``` git checkout -b feat/add-new-component ```
- Work on your feature inside /packages/.
- Test it inside the Next.js preview (pnpm dev), if needed.
- Commit your changes: ``` git commit -m "feat: add NewComponent to ui package" ```
- Push and open a PR: ``` git push origin feat/add-new-component ```

## 🧱 Component Guideline

Use TypeScript for components.

Place components in /src, and export them via index.ts.

Follow naming conventions:

MyComponent.tsx → PascalCase

useSomething.ts → camelCase

## ✅ Before You Open a PR

Make sure you:

- Only modified files inside /packages
- Didn't touch /website (unless bug fix)
- Tested your changes via dev server
- Updated exports + README if applicable
- Wrote a clean commit message

## 💬 Questions?

Need help or unsure about something? Open an issue or drop your question in the discussion tab.

Thanks again for contributing — you're helping build a dev tool for devs. Let’s make component fatigue a thing of the past 🔥