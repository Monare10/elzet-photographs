# Elzet Photographs

> **Every frame tells a story.**

A modern portfolio and booking site for **Elzet Photographs**, a professional photography studio based in South Africa. From birthday parties to brand shoots, gala dinners to matric dances — this site showcases services, merchandise, and makes it effortless for clients to get in touch.

---

## ✨ Features

- **Cinematic hero section** — Full-viewport background imagery with layered overlays and refined typography
- **Service showcase** — Six photography categories, each with its own gallery route
- **Merchandise page** — Browse exclusive branded apparel with interactive size selection
- **Contact hub** — Direct links to WhatsApp, Instagram, Facebook, and email
- **Responsive design** — Fluid layouts that adapt from mobile to ultra-wide
- **Dark, editorial aesthetic** — Gold accents, serif italics, and display typography for a premium feel

---

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build Tool | [Vite 8](https://vite.dev/) |
| Routing | [React Router 7](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) |
| Styling | Plain CSS with custom properties |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **20.19+** or **22.12+**
- npm (or pnpm / yarn — commands below use npm)

### Installation

```bash
git clone https://github.com/Monare10/elzet-photographs.git
cd elzet-photographs
npm install
Development
bash
npm run dev
The site will be live at http://localhost:5173.

Production Build
bash
npm run build
npm run preview

🎨 Design System
The site uses a small set of design tokens defined in src/index.css:

Token	Value	Purpose
--black	#0a0a0a	Background
--white	#f5f5f0	Primary text
--gold	#c9a84c	Accent / brand
--gold-light	#e8c97a	Hover states
--grey-dark	#1a1a1a	Cards
--grey-mid	#2e2e2e	Borders
--grey-text	#888	Secondary text
Typography:

Display: Bebas Neue

Body: Inter

Serif accent: Cormorant Garamond

📦 Deployment
The site is automatically deployed to Vercel on every push to main.

Manual deploy via CLI:

bash
npm install -g vercel
vercel --prod
📄 License
All photography, branding, and content © Elzet Photographs. Code is private and not for redistribution.
