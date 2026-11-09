# Watnot Technologies — Premium Creative Portfolio

A creative portfolio website closely inspired by and recreating the visual design, editorial typography, interactions, spacing, and user experience of the high-end creative agency Framer reference website ([Watnot Technologies Portfolio](https://personal-outcomes-516279.framer.app/)).

Built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **custom WebGL shaders**.

---

## ✦ Key Features

- **Global Design Language**: Minimalist champagne & dark obsidian aesthetic (`#DAC5A7` on `#0E0E0E`) with generous whitespace, tight display line-heights, and an SVG organic film grain texture.
- **Interactive WebGL Dither Reveal (`components/DitherReveal.tsx`)**:
  - Algorithmic Bayer 8×8 Matrix dithering (`bayer8`, `lines`, `noise` styles).
  - Idle fluid wave ripple distortion across the canvas.
  - Smooth cursor-tracking flashlight reveal restoring rich authentic colors under user pointer.
  - Zero CORS taint issues by bundling local high-resolution photography assets.
- **The Process ("Your Website in 5 Steps") (`components/Process.tsx`)**:
  - Faithfully modeled after the reference screen recording:
    - Top arrow indicator `( ↓ )`
    - Vertical center timeline with scroll-linked spring fill (`useScroll` + `useSpring`)
    - Circular step numbers (`01`, `02`, `03`, `04`, `05`)
    - Alternating card layout (01 Right, 02 Left, 03 Right, 04 Left, 05 Right)
    - Top-right duration pills (`2 HOURS`, `2 WEEKS`) and bulleted deliverables
    - Fully responsive with mobile left-aligned timeline
- **Selected Work Portfolio (`components/Work.tsx`)**:
  - Featured projects (Space, Nova, Sonic, Solar, Supersonic, Vanguard) with hover zoom, parallax, category tags, and an expandable "See all" toggle.
  - Deep-dive case study drawers (`ProjectModal.tsx`) with problem/solution breakdowns and live preview links.
- **Editorial Services Showcase (`components/Services.tsx`)**:
  - 01 Web Design, 02 Development, 03 Content & SEO with hover highlights and full service breakdown modals (`ServiceModal.tsx`).
- **Interactive Testimonials Carousel (`components/Testimonials.tsx`)**:
  - Bespoke SVG brand marks (Sonic, Supersonic, Stars, Solar), client avatars, 5-star ratings, and smooth horizontal carousel navigation.
- **Editorial Brand Story (`components/About.tsx`)**:
  - Persona bio, craftsmanship pillars, and live stats bar (`8+ Years`, `65+ Projects`, `99.4% Client Satisfaction`).
- **Thought Leadership (`components/BlogSection.tsx`)**:
  - Curated insights articles with a full slide-over reading drawer.
- **Dominant Final CTA (`components/CTA.tsx`)**:
  - Large statement typography ("Project in mind? Let's make your Website shine") leading into the interactive contact modal.
- **Interactive Modals**:
  - `ContactModal`: Full interactive inquiry form with project type tags, budget ranges, and feedback confetti.
  - `PricingModal`: Transparent tiered packages (Starter, Growth, Bespoke).
- **Luxury Custom Cursor (`components/CustomCursor.tsx`)**:
  - Magnetic trailing ring cursor that smoothly expands over interactive elements and displays a `✦ REVEAL` badge over the WebGL Dither canvas.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Shader Pipeline**: WebGL 1.0 (GLSL Vertex & Fragment Shaders)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Confetti**: Canvas-confetti

---

## 🚀 Getting Started

### 1. Installation

```bash
# Clone or navigate to the project directory
cd "watnot technologie"

# Install dependencies
npm install
```

### 2. Development Server

```bash
# Start the local development server (default port 3001)
npm run dev -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001) with your browser to view the portfolio.

### 3. Production Build

```bash
# Create an optimized production bundle
npm run build

# Start the production server
npm run start -- -p 3001
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css         # Global styles, color tokens, font-face, SVG grain overlay
│   ├── layout.tsx          # Root layout, Google Fonts preload, SEO metadata
│   └── page.tsx            # Main page orchestrating all 11 sections and modals
├── components/
│   ├── Navbar.tsx          # Fixed sticky blur navigation & mobile menu drawer
│   ├── Hero.tsx            # Hero section with Arched Frame and DitherReveal
│   ├── DitherReveal.tsx    # Interactive WebGL Bayer dithering shader canvas
│   ├── Services.tsx        # 01 Web Design, 02 Development, 03 Content & SEO
│   ├── Work.tsx            # Selected work portfolio grid & "See all" toggle
│   ├── Process.tsx         # "Your Website in 5 Steps" alternating timeline
│   ├── Testimonials.tsx    # Client testimonials carousel with custom SVG brand marks
│   ├── About.tsx           # Personal brand story, portrait, & craftsmanship pillars
│   ├── BlogSection.tsx     # Thought leadership articles & reading drawer
│   ├── CTA.tsx             # Final dominant statement & CTA button
│   ├── Footer.tsx          # 4-column directory, copyright & smooth "To Top" button
│   ├── CustomCursor.tsx    # Magnetic trailing ring cursor with hover states
│   ├── ContactModal.tsx    # Interactive inquiry form & budget selector
│   ├── PricingModal.tsx    # Transparent pricing packages modal
│   ├── ProjectModal.tsx    # Comprehensive project case study drawer
│   └── ServiceModal.tsx    # Service deliverable breakdown modal
├── lib/
│   ├── data.ts             # Services data, 5-step process data, navigation links
│   ├── projects.ts         # Portfolio case studies & project details
│   ├── testimonials.ts     # Client testimonials & reviews
│   └── blog.ts             # Editorial articles data
├── public/
│   └── images/             # Local high-resolution photography assets
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind color palette and typography tokens
└── tsconfig.json           # TypeScript configuration
```

---

## 🎨 Customizing Content

All data is separated into clean, typed TypeScript data files in the `lib/` folder:

- **Projects**: Modify `lib/projects.ts` to add, edit, or reorder portfolio case studies.
- **Services & Process Steps**: Modify `lib/data.ts` to update service offerings, durations, and deliverables.
- **Testimonials**: Modify `lib/testimonials.ts` to update client quotes, roles, and brand logos.
- **Articles**: Modify `lib/blog.ts` to publish new thought leadership write-ups.

---

## 🚢 Deployment

The project can be deployed seamlessly to Vercel or any modern static hosting platform:

### Deploy to Vercel

```bash
npx vercel
```

Or connect the repository to your [Vercel Dashboard](https://vercel.com/) for automatic CI/CD preview and production deployments.

---

## 📄 License

MIT License. Designed and engineered for high-performance creative agency and personal brand websites.

