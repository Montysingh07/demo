# Atelier Forma — Construction, Architecture & Interior Design Website Demo

A modern, responsive, and highly animated frontend website demo for a construction, architecture, and interior design company. Built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, **React Router DOM**, **React Hook Form**, **Zod**, and **Lucide React**.

---

## 1. Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm**

### Installation & Running Locally
```bash
npm install
npm run dev
```
Then open the local URL printed by Vite (typically `http://localhost:5173`).

### Production Build Check
```bash
npm run build
```

---

## 2. Available Routes

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | Home | Full-bleed parallax hero, studio preview, 8 services, 6 featured projects, why choose us, 6-step interactive process, demo testimonials, and CTA. |
| `/about` | About Us | Studio introduction, mission & vision, working approach, expertise, and demo leadership roles. |
| `/services` | Services | Detailed breakdown of all 8 services with key features, scope of services, and direct enquiry links. |
| `/projects` | Projects / Portfolio | Interactive category-filtered portfolio (`All`, `Residential`, `Commercial`, `Interior Design`, `Renovation`, `Concept Design`). |
| `/projects/:slug` | Project Details | Dynamic case study page with interactive image gallery, lightbox preview, highlights, deliverables, and related projects. |
| `/contact` | Contact Us | Editable contact placeholders, WhatsApp CTA, map placeholder, and validated quick enquiry form. |
| `/get-started` | Start Your Project | 5-step interactive project enquiry wizard with validation, step progress bar, edit-before-submit review, and `localStorage` persistence. |
| `*` | 404 Not Found | Custom architectural 404 fallback page. |

---

## 3. Demo Functionality

- **Frontend-Only Architecture:** No backend server is required. All content is powered by typed local TypeScript data files in `src/data/`.
- **Local Enquiry Storage:** Submissions from both the 5-step **Start Your Project** wizard (`/get-started`) and the **Contact** form (`/contact`) are validated with Zod and saved in the browser's `localStorage` under `atelier_forma_demo_enquiries`. Clearly labelled notices inform users that the form is not connected to a live company system.
- **Animations:** Powered by Framer Motion (`ScrollProgressBar`, `MaskedTextReveal`, `ParallaxImage`, `StaggerContainer`, `AnimatePresence` route transitions, interactive process timeline, and layout-animated category filters). Respects OS `prefers-reduced-motion`.

---

## 4. Placeholder Information to Replace Before Client Presentation / Launch

Before presenting to a real client or deploying to production, update the following files:

1. **`src/data/siteConfig.ts`**
   - Replace `brandName`, `brandSubtext`, and `description`.
   - Replace `phonePlaceholder`, `emailPlaceholder`, `addressLine1`, `addressLine2`, `workingHours`, `whatsappNumberPlaceholder`, and `mapCoordinatesLabel`.
   - Update `social` links with real URLs.
2. **`src/data/projects.ts`**
   - Replace the 6 sample projects, demo locations, area specs, descriptions, and images with the client's real portfolio case studies.
3. **`src/data/services.ts`**
   - Tailor the 8 service descriptions, key features, and scopes to match the client's exact offerings.
4. **`src/data/homeContent.ts`**
   - Replace `DEMO_TESTIMONIALS` with verified client reviews (or remove the section if not yet available).
5. **`src/data/aboutContent.ts`**
   - Replace the demo team roles (`Lead Architect`, `Head of Construction`, `Interior Design Director`) and portraits with the client's real team information.
6. **`src/components/enquiry/enquirySchema.ts`**
   - Adjust `BUDGET_RANGE_OPTIONS` currency and brackets to match the client's regional market.

