# Full Website CMS & Content Operations Blueprint

## 1. Scope and objective
This blueprint now targets the **entire website**, not only Case Studies.

Primary goal:
- Non-developers (marketing/content team) can update content weekly (or daily) across all pages
- Developers are not required for normal content changes
- Content changes are moderated, auditable, and publish-safe

This includes updates such as:
- Add/remove products
- Change product images, prices/cost ranges, descriptions
- Add/remove services, projects, testimonials
- Update hero banners, CTAs, page sections, FAQs, contact details, social links
- Publish case-study videos and media

---

## 2. Current system alignment (your existing stack)
Existing codebase already supports this direction:
- Frontend: Next.js (public site + admin under `/admin`)
- Backend: Next.js API Routes (serverless backend on Vercel)
- Database: Neon PostgreSQL
- Existing API pattern: `/api/products`, `/api/projects`, `/api/blog`, `/api/quotes`

### What must change
Move content source from static constants files to database-backed APIs for all core modules.

### 2.1 Public vs Admin access model (same deployment, separate surfaces)
The project will be deployed as one app, but with two clear route spaces:

- Public website (customers):
  - `https://concreteworks.vercel.app/`
  - `https://concreteworks.com/` (future)
- Admin CMS (internal users only):
  - `https://concreteworks.vercel.app/admin`
  - `https://concreteworks.com/admin` (future)

Critical rule:
- Do not expose Admin/CMS links in public navbar, footer, hero CTAs, or public sitemap menus.
- Admin is reachable only by direct URL and authentication.

Architecture shape:

```text
Browser
   |
   v
Vercel
 |- Frontend (Next.js)
 \- API Routes (serverless backend)
   |
   v
Neon PostgreSQL
```

Routing implementation approach (single codebase):
- Public routes: `/`, `/products`, `/services`, `/projects`, `/designs`, `/case-studies`, `/contact`, etc.
- Admin routes: `/admin/*` only.
- Admin route guard: unauthenticated users are redirected to `/admin/login`.
- Public layout and admin layout are separate wrappers.
- Use lazy loading for `/admin/*` bundle to keep public site fast.

---

## 3. Website-wide content domains (what becomes CMS-managed)

### 3.1 Global/site settings
- Company name, tagline
- Header/nav labels/order
- Footer text, contact details, social links
- SEO defaults (title/description/open graph)
- WhatsApp number/default message

### 3.2 Home page content blocks
- Hero section (headline, subheadline, video/image, primary/secondary CTA)
- Product category highlights
- Featured products
- Design showcase
- Project highlights
- Testimonials block
- Trust metrics block
- CTA strips

### 3.3 Products catalog
- Product categories
- Product records (name, slug, price/cost range, specs, stock/status)
- Product images gallery
- Product visibility (published/unpublished)
- Product ordering/featured flags

### 3.4 Services
- Service list, descriptions, cover images
- Feature bullets
- Service areas

### 3.5 Designs/patterns
- Design entries, images, best-use tags, difficulty labels

### 3.6 Projects gallery
- Project records, media, location, completion date, project type
- Before/after media

### 3.7 Case studies
- Verified interviews (YouTube IDs)
- Installation proof cards
- Evidence media
- Linked testimonials

### 3.8 Testimonials
- Client name, role, company
- Avatar image
- Rating
- Quote text
- Verification status

### 3.9 Blog/resources
- Blog posts, categories, featured state, draft/publish

### 3.10 Lead forms and contact content
- Contact page text blocks
- Quote request forms and status pipeline
- CRM/export integration later

---

## 4. Roles and permissions (whole website)

### Roles
- `admin`: full control (users, settings, publishing override)
- `media_manager`: create/edit drafts + manage media library
- `editor`: create/edit content drafts (no media library management)

### Permission matrix (summary)
- Create/edit draft: admin/media_manager/editor
- Upload/manage media: admin/media_manager
- Submit for review: admin/media_manager/editor
- Approve/reject: admin only
- Publish/unpublish: admin only
- Manage users/roles: admin only
- Change global settings: admin only

---

## 5. Data architecture for full CMS
Use modular tables/entities and shared workflow fields.

## 5.1 Shared workflow fields (apply to most entities)
- `status`: `draft | in_review | approved | published | archived`
- `created_by`, `updated_by`, `reviewed_by`
- `published_at`
- `created_at`, `updated_at`
- `version`

## 5.2 Core entities (minimum)
- `users`, `roles`, `sessions`
- `site_settings`
- `pages` (optional static page model)
- `page_sections` (flexible section builder for blocks)
- `media_assets` (images/files metadata)
- `products`, `product_categories`, `product_images`
- `services`
- `designs`
- `projects`, `project_media`
- `case_studies`, `case_study_videos`, `case_study_media`
- `testimonials`
- `blog_posts`, `blog_categories`
- `quotes` (already present, extend if needed)
- `audit_logs`
- `content_revisions`

## 5.3 Pricing/cost model recommendation
For products/services where price changes often:
- `price_type`: `fixed | range | quote_only`
- `price_min`, `price_max`, `currency`
- `effective_from`
- optional `price_history` table for traceability

---

## 6. API blueprint (website-wide)

### Public read APIs
- `GET /api/site-settings`
- `GET /api/pages/:slug`
- `GET /api/products`, `GET /api/products/:slug`
- `GET /api/services`
- `GET /api/designs`
- `GET /api/projects`
- `GET /api/case-studies`, `GET /api/case-studies/:slug`
- `GET /api/testimonials`
- `GET /api/blog`, `GET /api/blog/:slug`

### Admin/CMS APIs
- Auth: `/api/auth/login`, `/api/auth/refresh`, `/api/auth/logout`
- Content CRUD per module: `/api/admin/{module}`
- Workflow actions:
  - `/submit-review`
  - `/approve`
  - `/reject`
  - `/publish`
  - `/archive`
- Media upload: `/api/admin/media/upload`
- Review queue: `/api/admin/review-queue`
- Revisions/audit: `/api/admin/revisions/:entity`

### Admin API hard boundary
- Every `/api/admin/*` endpoint must enforce role middleware.
- Public APIs (`/api/products`, `/api/projects`, etc.) return published content only.
- Admin auth cookie/token should be scoped for admin usage and never required for public read routes.
- API handlers run as serverless functions on Vercel.

---

## 7. Wireframes

## 7.1 Public website display wireframe
```text
+--------------------------------------------------------------------------------+
| HEADER/NAV (dynamic labels/order from CMS)                                    |
+--------------------------------------------------------------------------------+
| HOME: Hero (headline, media, CTA)                                              |
|       Product highlights | Services | Designs | Projects | Testimonials | CTA |
+--------------------------------------------------------------------------------+
| PRODUCTS: filters | cards | details | pricing/cost/quote states               |
+--------------------------------------------------------------------------------+
| SERVICES / DESIGNS / PROJECTS / CASE STUDIES pages (CMS-driven blocks)        |
+--------------------------------------------------------------------------------+
| ABOUT / CONTACT / BLOG pages (CMS-driven sections + media)                    |
+--------------------------------------------------------------------------------+
| FOOTER (dynamic contact, social, legal links)                                  |
+--------------------------------------------------------------------------------+
```

## 7.2 Admin/CMS application wireframe
```text
+--------------------------------------------------------------------------------+
| TOPBAR: Brand | Global Search | Alerts | User Menu                             |
+--------------------------------------------------------------------------------+
| SIDEBAR                                                                       |
| Dashboard                                                                      |
| Content                                                                         |
|  - Home Blocks                                                                  |
|  - Products                                                                      |
|  - Services                                                                      |
|  - Designs                                                                       |
|  - Projects                                                                      |
|  - Case Studies                                                                  |
|  - Testimonials                                                                  |
|  - Blog                                                                          |
| Media Library                                                                    |
| Review Queue                                                                     |
| Site Settings                                                                    |
| Users & Roles (admin only)                                                      |
+--------------------------------------------------------------------------------+
| MAIN PANEL (depends on selected module):                                       |
| - List view (search/filter/status)                                              |
| - Editor form                                                                    |
| - Preview                                                                         |
| - Submit/Approve/Publish actions                                                 |
+--------------------------------------------------------------------------------+
```

## 7.3 Product editor layout (example)
```text
[General] [Pricing] [Media] [SEO] [Publishing]

General:
- name, slug, category, description, specs, tags
Pricing:
- price type (fixed/range/quote-only), min, max, currency
Media:
- cover image, gallery uploads, alt text, ordering
Publishing:
- status, schedule publish, feature flag
Actions:
- Save Draft | Submit Review | Publish (if approved)
```

## 7.4 Home page block editor layout (example)
```text
Home Sections Order:
1) Hero
2) Product Highlights
3) Trust Metrics
4) Testimonials
5) CTA

For each block:
- title/subtitle
- images/video
- CTA text + URL
- visibility toggle
- drag/drop reorder
```

---

## 8. How different users access and update content

## 8.1 Editor flow (weekly updates)
1. Login to CMS.
2. Open module (e.g., Products or Home Blocks).
3. Create/edit content as draft.
4. Submit for review.

## 8.2 Media manager flow
1. Login to CMS.
2. Upload/manage media in Media Library.
3. Create/edit drafts and attach approved media.
4. Submit for review.

## 8.3 Admin flow
1. Manage roles/users.
2. Open Review Queue and compare draft vs currently published version.
3. Approve/reject and publish/unpublish content.
4. Maintain global settings.
5. Audit logs and rollback if needed.
6. Emergency unpublish/archive when required.

---

## 9. Content governance for trust and consistency
- Mandatory fields before publish (module-specific rules)
- Media rules: required alt text + optimized file size
- Legal/compliance checklist for testimonials/interviews
- Automated slug uniqueness checks
- Revision history and rollback per content item
- Archive instead of hard delete for business-critical records

---

## 10. Security and quality controls
- JWT auth + refresh token rotation
- Password hashing (`bcrypt`)
- Role middleware for every admin endpoint
- Route-level guard for `/admin/*` in frontend
- Redirect public users from unknown admin states to `/admin/login`
- Input validation (`zod`/`joi`)
- Rate limiting + audit logging
- File upload constraints (type, size, virus scan if available)
- Backups and migration strategy

---

## 11. Phased implementation plan (whole website)

## Phase 1: Foundation (1-2 weeks)
- Auth/roles setup
- Shared workflow fields and base tables
- Media library service
- Site settings API
- Add route split: public routes + `/admin/*` route group with protected layout
- Build `/admin/login` and auth bootstrap

## Phase 2: High-impact modules (2-3 weeks)
- Products CMS (including pricing)
- Home page block CMS
- Testimonials CMS
- Public frontend reads from API for these modules

## Phase 3: Remaining content modules (2-3 weeks)
- Services, Designs, Projects, Case Studies, Blog
- Review queue and publish workflow for all modules

## Phase 4: Operations hardening (1-2 weeks)
- Revisions rollback UI
- Scheduled publishing
- Advanced filters/search
- Analytics dashboard for content performance

---

## 12. Mapping to your current repository

### Frontend changes
- Replace constant imports in pages with fetches to Next.js API routes
- Add module hooks:
  - `useProducts`, `useServices`, `useHomeBlocks`, `useCaseStudies`, etc.
- Add `/admin` route group for CMS UI
- Create separate layouts:
  - `PublicLayout` (website pages)
  - `AdminLayout` (CMS pages)
- Ensure public navigation components never render Admin links
- Add route protection component for `/admin/*`

### Backend changes
- Add Next.js API routes per module under `/api/*` and `/api/admin/*`
- Add auth middleware/utilities and role checks for admin handlers
- Add migration files for Neon PostgreSQL tables
- Separate public and admin handlers to avoid accidental data exposure

### Existing modules to refactor first
1. `src/constants/products.ts`
2. `src/constants/testimonials.ts`
3. `src/constants/projects.ts`
4. Homepage content blocks in `src/pages/HomePage.tsx`
5. Global content in footer/navbar/settings

---

## 13. Definition of done (whole website stage)
- Marketing can update all key pages/modules without developer assistance
- Updates follow draft -> review -> publish workflow
- Public pages read CMS data for all major modules
- Role-based permissions are enforced
- Audit trail and rollback exist
- Weekly updates can be completed end-to-end by non-developers
- Public UI has no visible Admin/CMS entry point
- `/admin` is fully functional for internal users via direct URL + auth

---

## 14. Recommended immediate next step
Start with **Products + Home Blocks + Testimonials** as the first CMS modules, because they change frequently and are most visible to users.

Then roll out remaining modules in the same workflow model.
