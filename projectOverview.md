# 🚀 UiQubes — Project Overview

## 1. Introduction

**UiQubes** is an open-source platform that connects **designers and developers** in a structured workflow.

- Designers submit UI designs (components, sections, landing pages)
- Developers convert those designs into **production-ready React/Next.js components**
- Users can browse and copy-paste components into their projects

> Think: Dribbble + Open Source Component Library

---

## 2. User Roles

### 🎨 Designers
- Register/Login (via Clerk)
- Submit UI designs
- Showcase work publicly

### 💻 Developers
- Browse design library
- Build components from designs
- Contribute via GitHub PRs
- Gain visibility

### 👀 Users
- Browse components
- Copy and use code
- No login required

---

## 3. Platform Structure

### `/designs`
Collection of all submitted designs.

Each design includes:
- Title
- Description
- Category (Hero, Card, Navbar, etc.)
- Preview (Image / Figma link)
- Created by (designer)
- Status (pending / approved / developed)

---

### `/qubes`
Collection of actual working components.

Each qube includes:
- Linked design reference
- Live preview
- Copy-paste code
- Framework tag (React / Next.js)
- Contributor (developer)
- GitHub PR reference

---

## 4. Core Flow

### Designer Flow
1. Login via Clerk
2. Submit design
3. Design appears in `/designs`

---

### Developer Flow
1. Browse `/designs`
2. Pick a design
3. Build component locally
4. Submit via GitHub PR

---

### Publishing Flow
1. PR is reviewed
2. If approved:
   - Component added to `/qubes`
   - Linked to design
   - Design marked as developed

---

## 5. Design → Qube Linking System

### Core Rule

> One design = One official component

Once a design is developed:
- It is **linked to a Qube**
- It is marked as **developed**
- No duplicate implementations allowed

---

### Design Schema Updates
isDeveloped: boolean (default: false)
qubeId: string (nullable)

---

### Qube Schema
designId: string (required, UNIQUE)


> UNIQUE constraint ensures no duplicate components for the same design

---

### Design States

| State        | Meaning |
|-------------|--------|
| pending     | Waiting for approval |
| approved    | Available for developers |
| in-progress | (Optional) Claimed by developer |
| developed   | Component created |

---

### UX Behavior

#### If NOT developed:
- Show: "Build this component"

#### If developed:
- Show: "Already Built"
- Link to `/qubes/[id]`

---

## 6. Monorepo Architecture


uiqubes/
│
├── website/ # Next.js platform
│
├── packages/
│ ├── qubes/ # All UI components
│ ├── utils/ # Shared logic
│
├── data/ # Metadata (optional)
│
├── README.md
├── pnpm-workspace.yaml


### Rules:
- Website = Platform UI
- Packages = Open-source components
- Contributors only modify `/packages`

---

## 7. Authentication

Using **Clerk** for:
- Login / Signup
- Session management

Stored data:
- `userId` (Clerk)
- Optional profile info

---

## 8. Design Handling (MVP Approach)

### Recommended (MVP)

Designers can submit:
- Image (stored via Cloudinary)
- OR Figma link

Store metadata in DB.

---

## 9. Backend APIs

### Designs
- `POST /designs` → Submit design
- `GET /designs` → List designs
- `GET /designs/:id` → Design details

### Qubes
- `GET /qubes` → List components
- `GET /qubes/:id` → Component details

---

## 10. Database Schema

### Users

id (clerkId)
name
email
role (designer/dev)


---

### Designs

id
title
description
category
previewUrl
figmaLink
createdBy
status
isDeveloped
qubeId
createdAt


---

### Qubes

id
title
designId (UNIQUE)
componentPath
framework
createdBy
githubPR
createdAt


---

## 11. GitHub Contribution Flow

### Steps:
1. Pick a design
2. Build component inside:


/packages/qubes/<component-name>


3. Add metadata:


meta.json


Example:
```json
{
  "designId": "xyz123",
  "name": "HeroSectionV1",
  "framework": "next"
}
Submit PR
PR Validation Rules
Design must not already be developed
Clean and reusable code
Responsive UI
Proper structure
12. Frontend Pages
/ → Landing page
/designs → Design listing
/designs/[id] → Design details
/qubes → Component listing
/qubes/[id] → Component details
/submit-design → Submit form
13. Key Features
Search & filters
Category tagging
Preview cards
Copy-to-clipboard code
Live component preview
14. Concurrency & Data Safety
Problem:

Multiple devs may try to build same design

Solution:
UNIQUE constraint on designId
Atomic insert/update logic
15. MVP Scope (Build This First)
Clerk authentication
Design submission
Design listing
GitHub contribution flow
Qubes listing (basic)
16. Future Scope
Upvotes / likes
Leaderboards
Favorites
AI design-to-code
NPM package export
17. Risks
Low-quality design submissions
Inconsistent component quality
Duplicate contributions (if not controlled)
18. Final Vision

UiQubes should become:

A platform where designers get exposure
Developers build credibility
Users get ready-to-use UI components
🔥 Key Principle

Each design can only be developed once.
Once built, it is linked to a Qube and marked as "Developed" to prevent duplicates and maintain quality.


---

If you want next step, I’d strongly suggest:
👉 turning this into a **GitHub README + CONTRIBUTING.md + PR template**  
That’s where most open-source projects either win… or die 😄