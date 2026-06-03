# LAIR Development Workflow Guide for Codex and Cursor

## Purpose

This file explains the workflow for building LAIR so coding agents such as Codex and Cursor understand how to work safely with the project.

The goal is to avoid errors, broken deployments, missing environment variables, wrong branches, and accidental overwrites.

Use this guide before making code changes.

---

# Core Workflow

LAIR should follow this development flow:

1. Work in the correct GitHub repository.
2. Make changes in a local or online coding environment.
3. Test the project locally or in preview.
4. Commit changes to Git.
5. Push changes to the correct GitHub branch.
6. Let Vercel automatically deploy the latest version.
7. Verify the live deployment.
8. Report what changed, what was tested, and what still needs attention.

Do not skip testing unless the user explicitly asks for a rough draft/prototype only.

---

# Required Project Information

Before making changes, confirm these details with the user or by inspecting the repo:

- GitHub repository URL:
- GitHub repository full name:
- Default branch:
- Working branch:
- Vercel project name:
- Vercel production URL:
- Vercel preview URL:
- Framework:
- Package manager:
- Install command:
- Development command:
- Build command:
- Preview command:
- Output directory:
- Environment variables required:
- Database provider, if any:
- Authentication provider, if any:
- Payment provider, if any:
- Analytics provider, if any:

Do not invent these values. If they are unknown, ask the user or inspect the repository.

---

# Branch Rules

Use this branch strategy unless the user says otherwise:

- `main` or `master`: production branch
- `develop`: optional staging branch
- `feature/lair-landing-page`: landing page work
- `feature/lair-dashboard-shell`: dashboard/profile shell
- `feature/lair-waitlist`: waitlist and early-access flow
- `fix/...`: bug fixes

Recommended flow:

1. Pull latest changes from the base branch.
2. Create a feature branch.
3. Make focused changes.
4. Run local tests/build.
5. Commit with a clear message.
6. Push the feature branch.
7. Open a pull request if the project uses PRs.
8. Merge only after the build passes.

If the user wants a simpler solo-founder workflow, changes may be pushed directly to the production branch, but only after confirming that this is acceptable.

---

# Repository Inspection Checklist

Before editing, inspect:

- `package.json`
- `README.md`
- `vite.config.*`, `next.config.*`, or other framework config
- `src/` or `app/` directory
- Existing routes/pages
- Existing components
- Existing CSS/styling system
- Existing environment variable examples
- Existing deployment config
- Existing lint/build scripts
- Existing TypeScript configuration

Do not rewrite the app from scratch unless the user explicitly approves.

Prefer improving the current structure.

---

# Package Manager Rules

Use the package manager already used by the repo.

Check for lockfiles:

- `package-lock.json` means likely npm.
- `pnpm-lock.yaml` means pnpm.
- `yarn.lock` means Yarn.
- `bun.lockb` or `bun.lock` means Bun.

Do not switch package managers without asking.

Use the matching commands:

## npm

```bash
npm install
npm run dev
npm run build
```

## pnpm

```bash
pnpm install
pnpm dev
pnpm build
```

## Yarn

```bash
yarn install
yarn dev
yarn build
```

## Bun

```bash
bun install
bun dev
bun run build
```

---

# Environment Variable Rules

Never commit real secrets.

Do not commit:

- `.env`
- `.env.local`
- `.env.production`
- API keys
- Database passwords
- Payment secret keys
- Auth secrets
- Private tokens

If environment variables are needed, create or update:

```text
.env.example
```

Use placeholder values only, for example:

```text
VITE_PUBLIC_SITE_URL=
VITE_WAITLIST_ENDPOINT=
DATABASE_URL=
AUTH_SECRET=
STRIPE_SECRET_KEY=
```

If using Vercel, remind the user to add real environment variables inside the Vercel project settings.

---

# Vercel Deployment Rules

After pushing code, Vercel should automatically create a deployment if the GitHub repo is connected.

Before assuming deployment is working, confirm:

- The repo is connected to Vercel.
- The production branch is correct.
- The build command is correct.
- The output directory is correct.
- Required environment variables exist in Vercel.
- The build passes.
- The deployment URL loads.

If Vercel fails, inspect the build logs before guessing.

Common Vercel issues:

- Wrong build command
- Missing environment variable
- Wrong output directory
- TypeScript error
- Missing dependency
- Package manager mismatch
- Node version mismatch
- Import path casing issue
- Browser-only code running during server build
- Large video or media file causing performance issues

---

# Local Testing Checklist

Before pushing, run the appropriate commands:

```bash
install command
development command
build command
preview command, if available
```

For example:

```bash
npm install
npm run build
npm run preview
```

Check:

- Homepage loads
- No console errors
- Mobile layout works
- CTA buttons work
- Waitlist form does not crash
- Membership cards display correctly
- Contact form placeholder works
- Dashboard/profile preview loads
- Video fallback works
- Reduced motion fallback works if implemented
- Build completes successfully

---

# LAIR-Specific Build Priorities

Do not overbuild the backend in the first pass.

The first LAIR build should focus on:

1. Immersive landing page
2. Scroll-controlled video hero or safe animated fallback
3. Clear product positioning
4. Early-access/waitlist form
5. Membership tier cards
6. About section
7. Contact section
8. FAQ section
9. Trust/privacy message
10. Dashboard/profile preview
11. Mobile responsiveness
12. Deployment readiness

Only add authentication, database, payments, or AI if the user explicitly approves that phase.

---

# Scroll-Controlled Video Requirements

The landing page should include a cinematic video-style hero experience if technically practical.

Rules:

- Do not make the site unusably slow.
- Use optimized video files.
- Add a static fallback for mobile or low-performance devices.
- Respect reduced-motion settings.
- Do not block the main CTA.
- Test mobile scrolling carefully.
- If the real video asset is missing, use a placeholder component and clearly mark where the video should be inserted.

Do not use a huge unoptimized video file directly in the repo without checking size and performance.

---

# Asset Rules

Use clear folders:

```text
public/
  assets/
    video/
    images/
    icons/
src/
  components/
  pages/
  sections/
  data/
  styles/
```

Recommended placeholders:

```text
public/assets/video/lair-hero-placeholder.mp4
public/assets/images/og-image-placeholder.png
```

If real assets are not provided, use placeholders and document where replacements belong.

---

# Suggested Component Structure

Use reusable components such as:

```text
src/components/
  Button.tsx
  Section.tsx
  MembershipCard.tsx
  FAQItem.tsx
  ContactForm.tsx

src/sections/
  HeroVideoSection.tsx
  WaitlistSection.tsx
  BenefitsSection.tsx
  AudienceSection.tsx
  MembershipSection.tsx
  AboutSection.tsx
  DashboardPreviewSection.tsx
  TrustPrivacySection.tsx
  FAQSection.tsx
  ContactSection.tsx
  FinalCTASection.tsx
```

Adapt this structure to the actual framework.

---

# Analytics Event Plan

If analytics are added, track:

- `page_view`
- `hero_cta_click`
- `waitlist_signup`
- `membership_tier_click`
- `signup_start`
- `contact_submit`
- `dashboard_preview_view`
- `faq_open`
- `scroll_depth`

If analytics are not ready, leave clean TODO comments or a simple analytics helper file.

Do not add a third-party analytics service without user approval.

---

# Waitlist Rules

For the beta version, the waitlist can be:

- A front-end placeholder form
- A form connected to a simple endpoint
- A Google Form link
- A Supabase table
- A serverless function
- Another user-approved system

Do not claim the waitlist saves data unless it actually does.

If not connected, label it clearly in code or comments as a placeholder.

---

# Payments and Membership Rules

The first build should show membership tiers visually.

Do not implement real payments unless the user explicitly approves.

If payments are not implemented:

- Use placeholder pricing.
- Use buttons like “Join Early Access” or “Choose Plan.”
- Do not make fake checkout pages look live.
- Add TODO notes for future Stripe or payment integration.

---

# Authentication and Database Rules

Do not add authentication or a database until approved.

For the first build, a dashboard preview is acceptable.

If auth/database are approved later, confirm:

- Provider
- Environment variables
- Data model
- User fields
- Security rules
- Deployment environment settings

Do not store personal user data without a clear plan.

---

# Commit Message Format

Use clear commit messages.

Examples:

```text
feat: add LAIR landing page sections
feat: add membership tier cards
feat: add waitlist placeholder form
feat: add dashboard preview
fix: improve mobile hero layout
fix: resolve Vercel build error
docs: add workflow setup guide
```

---

# Pull Request Summary Format

When opening a pull request or summarizing changes, include:

## Summary

- What was built
- What files changed
- What user-facing behavior changed

## Testing

- Commands run
- Build result
- Manual testing completed

## Deployment

- Branch pushed
- Vercel preview URL
- Any deployment issues

## Notes

- Placeholder features
- Missing assets
- Required environment variables
- Recommended next steps

---

# Common Roadblocks and Fixes

## Roadblock: Build works locally but fails on Vercel

Check:

- Node version
- Missing environment variables
- Wrong package manager
- Case-sensitive import paths
- Build command
- Output directory

## Roadblock: Vercel does not deploy after push

Check:

- GitHub repo is connected to Vercel
- Branch is connected
- Vercel Git integration is enabled
- Push was made to the correct branch

## Roadblock: Waitlist form submits but no data appears

Check:

- Whether the form is connected to a real backend
- Endpoint URL
- Environment variables
- Network errors
- Database permissions

## Roadblock: Video hero is laggy

Check:

- Video file size
- File format
- Mobile fallback
- Reduced-motion handling
- Whether scroll logic is too heavy

## Roadblock: Styling breaks on mobile

Check:

- Responsive CSS
- Overflow issues
- Fixed heights
- Video positioning
- Font sizes
- CTA visibility

## Roadblock: Git conflicts

Do not guess.

Steps:

1. Pull latest branch.
2. Inspect conflicted files.
3. Preserve user-created work.
4. Resolve carefully.
5. Run build again.
6. Commit conflict resolution.

---

# Safety Rules for Code Agents

- Do not delete existing work without confirmation.
- Do not commit secrets.
- Do not change package manager without confirmation.
- Do not add paid services without confirmation.
- Do not implement real payment checkout without confirmation.
- Do not implement data collection without explaining what is stored.
- Do not push broken code if a build error is known.
- Do not claim a feature works unless tested.
- Do not mark placeholder features as production-ready.

---

# Recommended First Execution Order

Use this order for LAIR:

1. Inspect repo.
2. Confirm workflow details.
3. Confirm Vercel connection.
4. Make a small test change.
5. Push test change.
6. Confirm Vercel deployment.
7. Ask user for approval to continue.
8. Build landing page.
9. Add waitlist section.
10. Add membership tiers.
11. Add About, FAQ, Contact, Trust sections.
12. Add dashboard preview.
13. Optimize mobile.
14. Run build.
15. Push to GitHub.
16. Confirm Vercel deploy.
17. Report results.

---

# Final Confirmation Rule

After the workflow test is complete, stop and ask the user:

**“The GitHub and Vercel workflow is now set up and tested. Do you want me to proceed with building the LAIR website based on the full product prompt?”**

Do not continue with the full build until the user approves.
