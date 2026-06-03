# LAIR Website and Business Build Prompt

## Start Here: Workflow Setup Before Building

Before executing the rest of this prompt, first guide me through setting up the full development workflow for LAIR.

The workflow should connect:

1. **GitHub repository**
2. **Local or online coding environment**
3. **Vercel deployment**
4. **Automatic live-site updates after pushing code**

Do **not** begin building the LAIR website yet.

First, help me confirm or set up the following:

### Step 1: GitHub Repository Setup

Guide me to either:

- Create a new GitHub repository for LAIR, or
- Confirm the correct existing GitHub repository that should be used.

Make sure the repository is ready for development and has the correct project files.

Confirm:

- Repository name
- Repository owner/account
- Default branch
- Whether the project already has source code
- Whether the repo is public or private
- Whether the repo is connected to any deployment service already

### Step 2: Vercel Setup

Guide me to connect the GitHub repository to Vercel.

The goal is that whenever code is pushed to the correct GitHub branch, Vercel automatically builds and deploys the latest version of the site.

Confirm:

- The GitHub repo is connected to Vercel.
- The correct production branch is selected.
- The framework/build settings are correct.
- The install command is correct.
- The build command is correct.
- The output directory is correct.
- The deployment URL is available.
- Future pushes will trigger new deployments.

### Step 3: Environment and Project Setup

Guide me to confirm:

- The tech stack being used
- The package manager
- Install command
- Development command
- Build command
- Preview command
- Output directory
- Any required environment variables
- Whether authentication is being added now or later
- Whether a database is being added now or later
- Whether payments/subscriptions are being added now or later
- Whether analytics are being added now or later

Do not assume these details. Ask me for anything needed.

### Step 4: Test the Workflow

Before building the full project, guide me through a small test update to confirm the workflow works.

The test should prove that:

- Code can be changed.
- Code can be committed to GitHub.
- GitHub can push to the correct branch.
- Vercel automatically deploys the update.
- The live site updates successfully.

The test update should be small and reversible, such as editing a test line of text, adding a temporary deployment marker, or creating a simple starter page.

### Required Pause Before Continuing

Once the GitHub-to-Vercel workflow is fully set up and tested, stop and ask me for confirmation before executing the rest of the LAIR build prompt.

Ask me:

**“The GitHub and Vercel workflow is now set up and tested. Do you want me to proceed with building the LAIR website based on the rest of the prompt?”**

Only continue with the rest of the prompt after I clearly approve.

---

# Project Name

**LAIR**

## One-Sentence Positioning

**LAIR is a personal command center for ambitious people who want to organize their routines, goals, tasks, and progress in one private digital space.**

## Project Overview

Build the first version of **LAIR**, a sleek personal organization platform that gives users a private digital space to manage their routines, goals, tasks, and personal progress.

LAIR should not feel like a basic to-do list or ordinary productivity dashboard. It should feel like a personal operating system: part planner, part progress tracker, part private dashboard, and part command center for someone’s life.

The first priority is creating a strong landing page experience that introduces LAIR clearly, feels immersive, and makes users want to sign up or join early access.

## Core Concept

LAIR is a personal organization hub. Each user should eventually have their own profile space where they can track:

- Daily routines
- Goals
- Tasks
- Personal progress
- Membership/account status
- Weekly focus areas
- Personal systems
- Long-term improvement

The platform should feel like a private, intelligent personal space rather than a generic task app.

## Target Audience

LAIR should be designed for people who want structure, focus, and progress in their personal or professional lives.

### 1. Students

Students need a space to manage schoolwork, goals, routines, deadlines, projects, and self-improvement.

### 2. Entrepreneurs

Entrepreneurs need a system to organize tasks, business goals, routines, project progress, and daily execution.

### 3. Creators and Self-Improvement Users

Creators, athletes, builders, and self-improvement-focused users need consistency, personal accountability, and a clear place to track progress.

## Brand Identity

LAIR should feel:

- Private
- Focused
- Intelligent
- Premium
- Calm
- Ambitious
- Cinematic
- Organized
- Futuristic but not overwhelming
- Minimal but memorable

The brand should feel like a powerful personal space that users enter, not just a website they visit.

## Main Website Flow

### 1. Immersive Landing Page

Create a visually strong landing page with a dynamic video-background experience.

The video background should behave interactively with scrolling:

- When the user scrolls down, the video moves forward.
- When the user scrolls up, the video rewinds.
- The scroll movement should feel smooth and cinematic.
- The landing page should feel like the user is entering the world of LAIR.

Once the video reaches its ending point, the website should smoothly transition into the next section where the user can explore membership options.

The landing page should include a clear headline, strong subheadline, and meaningful call-to-action.

Possible call-to-action examples:

- Enter LAIR
- Build Your Personal System
- Start Your LAIR
- Join Early Access
- Choose Your Plan

The call-to-action should match the immersive and premium feel of the brand.

### 2. Early-Access / Waitlist Option

Before the full product is complete, the landing page should include an early-access or waitlist option.

This should allow visitors to show interest before the full app is finished.

Include:

- Early-access sign-up form
- Email field
- Optional name field
- Short message explaining that LAIR is being built
- CTA such as “Join Early Access” or “Reserve Your LAIR”

This helps test demand before building every advanced feature.

### 3. Membership Section

After the landing experience, show a clean membership selection section.

Include **three membership tiers**.

Suggested tier structure:

#### Tier 1: Starter

Purpose: Let users try the basic LAIR experience.

Possible features:

- Basic profile space
- Simple task tracking
- Basic routine tracking
- Limited goals
- Early-access updates

#### Tier 2: Pro

Purpose: Main paid plan for users who want the full personal dashboard.

Possible features:

- Full personal dashboard
- Unlimited goals
- Unlimited routines
- Task organization
- Progress tracking
- Weekly planning
- Personal system templates

#### Tier 3: Elite / Premium / Founder

Purpose: Higher-value plan for users who want advanced features and future upgrades.

Possible features:

- Everything in Pro
- Advanced progress insights
- Premium templates
- Priority feature access
- Future AI planning assistant access
- Founder or premium badge
- Early access to new tools

Each tier should include:

- Tier name
- Short description
- Feature list
- Price placeholder
- Clear sign-up button

The design should make the tiers easy to compare.

### 4. Sign-Up Flow

Create a simple sign-up flow connected to the membership section.

The user should be able to:

- Choose one of the three tiers
- Click a sign-up button
- Move toward account creation or profile setup

For now, this can be a front-end flow or placeholder flow unless backend/authentication details are provided later.

### 5. Guided Onboarding Flow

After sign-up, the user should be guided through a short onboarding experience before entering their personal space.

The onboarding should ask questions such as:

- What are you focused on right now?
- What goals are you working toward?
- What routines do you want to build?
- What does a successful week look like?
- Are you using LAIR for school, business, creativity, fitness, personal life, or something else?
- What kind of progress do you want to track?

The goal of onboarding is to make the user’s LAIR feel personalized from the beginning.

Avoid leaving users in an empty dashboard with no guidance. The first experience should help them take action right away.

### 6. About Us Section

Add an **About Us** section that explains what LAIR is and why it exists.

The message should communicate that LAIR helps people organize their personal lives, routines, goals, and progress in one focused digital space.

The About section should make LAIR feel like a mission-driven product, not just a productivity tool.

Suggested message direction:

**LAIR exists to give people a private command center for their life — a place to organize what matters, track progress, and build better systems for who they want to become.**

### 7. Contact Section

Add a **Contact** section or contact page.

Include:

- Contact form placeholder
- Name field
- Email field
- Message field
- Submit button

The form does not need to be fully connected yet unless backend details are added later.

### 8. User Profile / Personal Space

Create the foundation for a user profile section.

This should represent the user’s private LAIR space after sign-up.

Include starter areas for:

- Profile overview
- Current goals
- Daily routines
- Task list
- Weekly focus
- Progress tracking
- Membership/account status
- Personal system setup

This does not need to be fully functional in the first version, but the structure should be ready for future development.

## Dashboard Experience

The dashboard should feel like the user’s private personal operating system.

It should not look cluttered or overwhelming.

The dashboard should include clear sections such as:

- Today’s Focus
- Goals
- Routines
- Tasks
- Progress
- Weekly Review
- Personal Notes or System Builder

The dashboard should encourage users to return daily.

## Differentiation

LAIR should be positioned as more than a to-do list.

It should feel different from common productivity apps by focusing on:

- Personal identity
- Long-term progress
- Routines and systems
- A private command-center experience
- Premium, immersive design
- Personal growth and execution
- A dashboard that feels customized to the user

The product should feel like a personal headquarters for someone’s goals and routines.

## Trust and Privacy

Because LAIR may involve personal goals, routines, notes, and progress, the website should communicate trust and privacy.

Include messaging that suggests:

- The user’s LAIR is private.
- The user controls their personal space.
- The product is designed for focus, not public social sharing.
- Personal information should feel protected and respected.

Possible trust section copy:

**Your LAIR is your private space to organize, plan, and grow. No noise. No public feed. Just your system.**

## Marketing and SEO Requirements

The first version should include basic marketing structure so the site feels like a real startup.

Include:

- SEO title
- Meta description
- Strong homepage headline
- Clear subheadline
- Benefits section
- FAQ section
- Social proof/testimonial placeholder
- Founder note or mission section
- Open Graph preview image placeholder
- Clear page structure for search engines

Possible homepage headline:

**Build Your Personal Command Center**

Possible subheadline:

**LAIR helps you organize your routines, goals, tasks, and progress in one private digital space.**

## Suggested Website Sections

The homepage should include these sections in order:

1. Immersive scroll-controlled video hero
2. Main headline and CTA
3. Early-access/waitlist sign-up
4. What LAIR is
5. Who LAIR is for
6. Key benefits
7. Membership tiers
8. About Us
9. Starter dashboard/profile preview
10. Trust and privacy message
11. FAQ
12. Contact section
13. Final CTA

## Benefits Section

Add a section that clearly explains what users get from LAIR.

Possible benefits:

- Organize your life in one place
- Track your goals and routines
- Build better personal systems
- See your progress over time
- Stay focused on what matters
- Turn ambition into structure

## FAQ Section

Add a basic FAQ section.

### What is LAIR?

LAIR is a personal command center for organizing your routines, goals, tasks, and progress.

### Who is LAIR for?

LAIR is for students, entrepreneurs, creators, and anyone who wants a private space to organize their life and track growth.

### Is LAIR a to-do list app?

No. LAIR includes task tracking, but it is designed to be a larger personal operating system for goals, routines, and progress.

### Will LAIR have memberships?

Yes. LAIR should include three membership tiers with different levels of access and features.

### Is LAIR available now?

The first version can include an early-access or waitlist flow while the full product is being built.

## Analytics and Success Metrics

The project should include or be ready for analytics tracking.

Important metrics to track:

- Landing page visits
- Scroll depth
- CTA clicks
- Early-access sign-ups
- Membership tier clicks
- Sign-up starts
- Account creation rate
- Dashboard activation
- Returning users
- Conversion rate from visitor to sign-up
- Conversion rate from free user to paid user

The first version should prove three things:

1. People understand what LAIR is.
2. People are interested enough to sign up or join early access.
3. The dashboard concept feels valuable enough to become a paid product.

## Financial and Business Model Placeholders

LAIR should be designed with a subscription business model in mind.

Include placeholders for:

- Monthly price per tier
- Annual price per tier
- Expected free-to-paid conversion rate
- Monthly recurring revenue goal
- Customer acquisition cost
- Customer lifetime value
- Churn rate
- Number of active users
- Number of paying users

The first version does not need full financial calculations, but the product structure should support future pricing, subscriptions, and growth tracking.

## Membership Business Logic

The membership model should support:

- A free or low-cost entry point
- A main paid plan
- A premium plan for high-value users
- Future upgrades
- Clear feature differences between plans
- Simple comparison between tiers

The goal is to make LAIR feel like a product people could realistically pay for, not just a free productivity page.

## Performance and Mobile Requirements

The immersive scroll-controlled video effect should be impressive, but it must not make the site slow or difficult to use.

Requirements:

- Use optimized video files.
- Add fallback images for slow devices.
- Make the landing page work on mobile.
- Keep scrolling smooth.
- Do not let the video effect hide or break the main CTA.
- Respect reduced-motion accessibility settings.
- Make sure the site loads quickly.
- Avoid heavy animations that hurt performance.

The design should work well on:

- Desktop
- Tablet
- Mobile

## Accessibility Requirements

The site should be usable and readable for different users.

Include:

- Clear text contrast
- Keyboard-friendly navigation
- Responsive font sizes
- Alt text for important images
- Reduced-motion support
- Clear labels for forms
- Simple, understandable page structure

## Development Requirements

Build the project using the existing repository and tech stack if one already exists.

Code should be organized clearly into reusable components, such as:

- Landing section
- Scroll video section
- Early-access form
- Membership tiers
- About section
- Contact section
- FAQ section
- Profile/dashboard section
- Trust/privacy section
- Analytics setup

The site should be responsive and work well on desktop and mobile.

## GitHub and Vercel Workflow

All code changes should be pushed to the connected GitHub repository.

The workflow should support deployment through Vercel:

1. Make code changes locally or through the coding environment.
2. Commit the changes to the GitHub repository.
3. Push the changes to the correct branch.
4. Trigger the Vercel deployment automatically.
5. Confirm that the live site updates successfully.

## Product Roadmap

Separate the project into phases so the first version stays focused.

### Phase 1: Landing Page and Product Concept

Build:

- Immersive scroll-controlled video landing page
- Clear product positioning
- Early-access/waitlist form
- Membership tier section
- About Us section
- Contact section
- Starter dashboard/profile preview
- Trust/privacy messaging
- FAQ section
- Responsive design

### Phase 2: Real User Accounts

Build:

- Authentication
- User accounts
- Saved profile data
- Saved goals
- Saved routines
- Saved tasks
- Basic dashboard functionality

### Phase 3: Progress and Personal Systems

Build:

- Progress analytics
- Weekly review
- Routine streaks
- Goal milestones
- Personal system templates
- Better dashboard customization

### Phase 4: Advanced Features

Build:

- AI planning assistant
- Smart suggestions
- Reminders
- Calendar integrations
- Mobile app
- Team, family, or group spaces
- Premium templates and advanced insights

## First Build Goal

The first build should focus on creating a working front-end version of LAIR with:

- Immersive scroll-controlled video landing page
- Smooth transition into membership tiers
- Three-tier membership layout
- Early-access/waitlist option
- Strong brand positioning
- Target audience messaging
- About Us section
- Contact section
- FAQ section
- Trust and privacy messaging
- Starter user profile/dashboard section
- Responsive layout
- Clean, modern styling
- GitHub-to-Vercel deployment readiness

The first version should prove three things:

1. People understand LAIR.
2. People are interested enough to sign up or join early access.
3. The dashboard concept feels valuable enough to become a paid product.

## Acceptance Criteria

The first version is successful when:

- The homepage loads properly.
- The landing page has a scroll-driven video effect.
- Scrolling down moves the experience forward.
- Scrolling up reverses the experience.
- The page transitions into the membership section after the video.
- Three membership tiers are visible.
- There is an early-access or waitlist form.
- The site clearly explains what LAIR is.
- The site clearly explains who LAIR is for.
- The site communicates that LAIR is more than a to-do list.
- About Us and Contact sections exist.
- A basic FAQ section exists.
- A trust/privacy message exists.
- A starter user profile/personal space exists.
- The design feels modern, immersive, and premium.
- The site works on desktop and mobile.
- The video experience does not make the site unusable on mobile.
- The project can be pushed to GitHub and deployed through Vercel.
- The structure supports future subscription pricing and user accounts.
