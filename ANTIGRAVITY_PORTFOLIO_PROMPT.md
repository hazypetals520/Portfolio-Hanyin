# ANTIGRAVITY MASTER PROMPT — HANIN MARYAM KHAIRUNNISA PERSONAL BRANDING WEBSITE

> **Instruction for Antigravity Agent:**  
> Execute the following specifications to build a complete, production-ready, fully responsive personal branding portfolio website for **Hanin Maryam Khairunnisa**. Build the application directly in this workspace using Vite, React, TypeScript, Tailwind CSS, Three.js, Motion, and Lucide React. Do not stop at a mockup; deliver a fully functioning website with all interactive components running without errors.

---

## 1. Project Overview & Identity

- **Owner**: Hanin Maryam Khairunnisa
- **Role / Monogram**: Aspiring UI/UX Designer / `HMK`
- **Hero Tagline**: `FUTURE UI/UX DESIGNER`
- **Design Philosophy / Visual Direction**: **Minimalist Swiss International Typographic Style** inspired by high-end editorial fashion layouts (reference: GAZU).
  - Bold, oversized grotesk typography (`clamp()` scaling).
  - Strict 12-column grid alignment and generous whitespace.
  - Asymmetric editorial composition with high contrast.
  - Restrained monochrome palette with subtle sage/olive accenting.
  - Seamless interactive 3D physics and typographic micro-animations.

---

## 2. Color Palette & Design Tokens

Configure Tailwind CSS with these exact design tokens:

- **Background Canvas**: `#F1F0EC` (Warm off-white / Swiss paper)
- **Primary Text / Solids**: `#111111` (Deep charcoal black)
- **Secondary / Muted Text**: `#666666`
- **Borders & Dividers**: `#D5D4CF`
- **Card & Surface Backgrounds**: `#FAF9F6`
- **Dark Inverted Sections**: `#111111`
- **Selective Accent**: `#B7C8B0` (Soft sage green — reserved for active badges, indicators, and focus states)

---

## 3. Technology Stack & Dependencies

Set up a React + Vite + TypeScript application with Tailwind CSS and the following packages:

```bash
npm install three motion lucide-react clsx tailwind-merge
npm install -D @types/three @types/node tailwindcss postcss autoprefixer
```

### Folder Architecture
Organize the codebase following clean shadcn/ui conventions:

```text
src/
├── assets/
│   └── images/
├── components/
│   ├── ui/
│   │   ├── Lanyard.tsx
│   │   ├── Lanyard.css
│   │   ├── DecryptedText.tsx
│   │   ├── glass-folder-cards.tsx
│   │   └── Modal.tsx
│   ├── layout/
│   │   ├── UtilityBar.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutMe.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── projects/
│       ├── ProjectCard.tsx
│       └── ProjectPreviewModal.tsx
├── data/
│   ├── portfolioData.ts
│   └── projectsData.ts
├── hooks/
│   └── useActiveSection.ts
├── types/
│   └── index.ts
├── styles/
│   └── index.css
├── App.tsx
└── main.tsx
```

---

## 4. Navigation & Global Layout

### A. Top Utility Bar
A thin, 32px black bar (`#111111`) pinned at the very top:
- Left: `PORTFOLIO / 2026` (small uppercase font, letter-spacing `0.2em`, `#FAF9F6`).
- Right: `ASPIRING UI/UX DESIGNER · OPEN TO LEARNING` (with a small `#B7C8B0` pulsing status dot).

### B. Main Header Navigation
Sticky horizontal navigation matching the background `#F1F0EC` with a subtle bottom border (`#D5D4CF`):
- **Brand / Monogram**: `HMK` in bold grotesque typography with a minimal dot.
- **Nav Links**:
  1. `Home` (`#hero`)
  2. `About Me` (`#about`)
  3. `Skills` (`#skills`)
  4. `Projects` (`#projects`)
  5. `Contact` (`#contact`)
- **Features**: Smooth scroll spy indicating the active section, subtle underline/dot indicator, and a fully accessible mobile hamburger drawer.

---

## 5. Hero Section — The Architectural Centerpiece

Reproduce the high-impact visual composition from the Swiss/GAZU reference:

1. **Top Sub-header**:
   - Left: `PORTFOLIO — 2026`
   - Tagline: `FUTURE UI/UX DESIGNER`
2. **Oversized Background Wordmark**:
   - The word **`HANIN`** rendered in massive, bold, uppercase typography (`text-[18vw]` or `clamp(5rem, 20vw, 22rem)`).
   - Integrated with **React Bits `<DecryptedText />`** for a sleek character-decoding scramble animation upon viewport entry or hover.
3. **Interactive 3D Lanyard (`<Lanyard />`)**:
   - Positioned in front of the `HANIN` wordmark (center-right), casting a realistic 3D shadow.
   - Interactive Three.js physics allowing users to drag, swing, and click to flip the ID badge.
   - Front badge displays: `HANIN` monogram, `HMK`, and `UI/UX DESIGNER · 2026`.
   - Back badge displays: Contact QR code / minimal geometric identity mark.
   - Transparent Three.js WebGL canvas allowing the oversized text behind it to remain visible.
4. **Supporting Identity Content**:
   - Full name: `HANIN MARYAM KHAIRUNNISA` (understated editorial uppercase).
   - Bio snippet: *"Designing intuitive digital experiences through thoughtful research, clear interfaces, and purposeful interactions."*
   - CTA Buttons:
     - `EXPLORE PROJECTS` (Solid `#111111` button with inverted text, scrolls to `#projects`).
     - `ABOUT ME` (Outlined minimal button with hover state, scrolls to `#about`).
5. **Bottom Scroll Indicator**:
   - `SCROLL TO EXPLORE ↓` positioned at the bottom left with coordinates/metadata.

---

## 6. About Me Section

Section Title: `A LITTLE ABOUT ME`  
Editorial 2-column Swiss grid layout:

### Column 1: Philosophy & Identity
- Category badge: `01 / IDENTITY`
- Editorial headline: *"Bridging Human Intent & Digital Systems."*
- Personal Statement:  
  *"I'm Hanin Maryam Khairunnisa, an aspiring UI/UX designer with a deep interest in crafting intuitive, accessible, and meaningful digital experiences. I explore how design and technology intersect to solve everyday friction and create interfaces that feel deliberate and natural."*
- Sub-block: **`WHY I DESIGN`**  
  *"My interest in information technology goes beyond how things operate under the hood—I am captivated by how people interact with them. UI/UX design allows me to combine structured systems thinking, visual clarity, and empathy to create experiences that feel intuitive and purposeful."*

### Column 2: Structured Education & Achievement Timeline
- Category badge: `02 / EDUCATION`
- Clean vertical editorial timeline with dates and institution metadata:
  1. **Vocational High School 7 Semarang (SMK Negeri 7 Semarang)**  
     *Major*: Sistem Informasi, Jaringan, dan Aplikasi (SIJA) — System Information, Network, and Applications.
  2. **Junior High School 21 Semarang (SMP Negeri 21 Semarang)**
  3. **Hidayatullah Islamic Elementary School**
- Category badge: `03 / ACHIEVEMENT`
  - **3rd Winner — Clash of Minds Competition**
  - Interactive link: `[VIEW CERTIFICATE ↗]` (connected to a configurable URL in `portfolioData.ts`, opens in new tab with a fallback preview modal).

---

## 7. Skills Section

Section Title: `TOOLS, THINKING & EXECUTION`

### Area A: Looping Tech Stack Ticker
An infinite, hardware-accelerated horizontal marquee featuring clean monochrome icons and typography:
- `GitHub` · `Vercel` · `React` · `JavaScript` · `CSS` · `Tailwind CSS` · `Figma`
- Smooth seamless loop, pauses on hover, respects `prefers-reduced-motion`.

### Area B & C: Interactive Skill Category Switcher
A two-state segmented control allowing users to switch between:
1. `UI/UX DESIGN`
2. `PROGRAMMING`

Display exact skill bars with smooth layout animations and clean percentage readouts:

#### Category 1: UI/UX DESIGN
- **Mock-up** — `70%`
- **Style Guide** — `62%`
- **UX Research** — `60%`

#### Category 2: PROGRAMMING
- **AI Prompting** — `45%`
- **Front-end** — `42%`
- **Web Testing** — `38%`

*Design*: Minimal 3px dark progress track with `#111111` indicator fill and monospace percentage counters.

---

## 8. Projects Section — Featuring Glass Folder Cards & Previews

Section Title: `SELECTED WORK`

### Filter Controls
- `UI/UX DESIGN` | `PROGRAMMING`

### Presentation Architecture
1. **Glass Folder Cards Integration (`glass-folder-cards.tsx`)**:
   - Embed the interactive 3D frosted glass folder component to showcase project archives, design files, case study decks, and wireframes.
   - Support hover leaning, open fan interaction, and file clicking.
2. **Project Case Study Grid**:
   - Grid cards inspired by the GAZU product layout: minimal borders, crisp typography, clean category badges, preview images, and `VIEW PROJECT ↗` affordances.
3. **Accessible Project Preview Modal**:
   - Clicking any project opens an editorial modal dialog displaying:
     - Project Title & Category
     - Detailed Overview & Problem Statement
     - Design/Development Solution
     - Hanin's Role & Contribution
     - Tools & Technologies Used
     - External Prototype / Repository link (`VIEW FULL PROJECT`)
     - Accessible close button, `Escape` key listener, focus trapping, and background scroll lock.

---

## 9. Contact & Connect Section

Section Title: `HAVE AN IDEA? LET'S CONNECT.`

Supporting text:  
*"I am always excited to learn, collaborate, and contribute to innovative digital products. Feel free to reach out for design inquiries, discussions, or opportunities."*

### Configurable Channels & Links (Defined in `portfolioData.ts`):
- **Contact Person**: Hanin Maryam Khairunnisa
- **Phone / WhatsApp**: `+62 8XX-XXXX-XXXX` (configurable)
- **Email**: `mailto:contact@haninmaryam.dev` (with copy-to-clipboard CTA)
- **Curriculum Vitae**: `[DOWNLOAD CV / RESUME ↗]` (direct download/view button)
- **Social & Platform Links**:
  - `GitHub` (`https://github.com/...`)
  - `LinkedIn` (`https://linkedin.com/in/...`)
  - `Spotify` (`https://open.spotify.com/user/...`)
  - `Instagram` (`https://instagram.com/...`)
  - `Discord` (`@username` or server link)

### Minimalist Editorial Footer
- Monogram mark: `HMK — HANIN MARYAM KHAIRUNNISA`
- Subtitle: `ASPIRING UI/UX DESIGNER`
- Dynamic copyright: `© {new Date().getFullYear()} · ALL RIGHTS RESERVED`
- `[BACK TO TOP ↑]` smooth scroll button.

---

## 10. Required Component Implementations

Ensure the following components are placed in `src/components/ui/`:

### 1. `Lanyard.tsx` & `Lanyard.css`
- Interactive Three.js physical simulation with verlet constraints, canvas texture generation, card tilt, drag, bounce, and flip.

### 2. `DecryptedText.tsx`
- Scramble decryption text animation powered by `motion` with customizable speed, reveal direction, and viewport triggers.

### 3. `glass-folder-cards.tsx`
- Frosted glass folder cards with procedural canvas fluid artwork, interactive open/fan states, and keyboard accessibility.

---

## 11. Final Quality & Performance Standards

1. **Zero Layout Shifts (CLS 0)**: Ensure canvas and large headings reserve their layout dimensions.
2. **Full Responsive Scaling**: Tested across 375px (Mobile), 768px (Tablet), 1024px (Laptop), and 1440px+ (Ultra-wide).
3. **Accessibility (a11y)**: Semantic tags (`<header>`, `<main>`, `<section>`, `<footer>`), `aria-expanded`, keyboard focus outlines, and `prefers-reduced-motion` compliance.
4. **Execution Verification**: Start Vite dev server (`npm run dev`), inspect console for zero warnings, verify interactive physics, modal triggers, and mobile drawer functionality.
