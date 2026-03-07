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
- Frontend: React + Vite (`src/pages`, `src/components`, constants currently used as content source)
- Backend: Express + TypeScript (`server/src/routes`, `server/src/services`)
- Database: PostgreSQL (`server/src/db/connection.ts`)
- Existing API pattern: `/api/products`, `/api/projects`, `/api/blog`, `/api/quotes`

### What must change
Move content source from static constants files to database-backed APIs for all core modules.

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
- `editor`: create/edit content drafts across modules
- `reviewer`: approve/reject, publish approved items
- `media_manager`: upload/manage media library
- `viewer`: read-only dashboard access

### Permission matrix (summary)
- Create/edit draft: admin/editor
- Upload media: admin/media_manager/editor
- Submit for review: admin/editor
- Approve/reject: admin/reviewer
- Publish/unpublish: admin/reviewer
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

## 8.1 Marketing editor flow (weekly updates)
1. Login to CMS.
2. Open module (e.g., Products or Home Blocks).
3. Create/edit content as draft.
4. Upload media from Media Library.
5. Submit for review.

## 8.2 Reviewer flow
1. Open Review Queue.
2. Compare draft vs current published version.
3. Approve or reject with comment.
4. Publish approved content (immediately or scheduled).

## 8.3 Admin flow
1. Manage roles/users.
2. Maintain global settings.
3. Audit logs and rollback if needed.
4. Emergency unpublish/archive when required.

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
- Replace constant imports in pages with `apiClient` fetching
- Add module hooks:
  - `useProducts`, `useServices`, `useHomeBlocks`, `useCaseStudies`, etc.
- Add `/admin` route group for CMS UI

### Backend changes
- Add routes and services per module in `server/src/routes` and `server/src/services`
- Add auth middleware and role checks
- Add migration files for new CMS tables

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

---

## 14. Recommended immediate next step
Start with **Products + Home Blocks + Testimonials** as the first CMS modules, because they change frequently and are most visible to users.

Then roll out remaining modules in the same workflow model.