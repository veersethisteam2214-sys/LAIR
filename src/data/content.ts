// Central content for the LAIR landing page.
// Edit copy, pricing, and features here — sections read from this file.

export const audience = [
  {
    title: "Students",
    body: "Manage schoolwork, deadlines, projects, and self-improvement in one focused space — without losing track of what matters.",
  },
  {
    title: "Entrepreneurs",
    body: "Organize business goals, daily execution, routines, and project progress so nothing slips through the cracks.",
  },
  {
    title: "Creators & Builders",
    body: "Stay consistent, hold yourself accountable, and track the progress that turns ambition into real momentum.",
  },
];

export const benefits = [
  {
    title: "Organize your life in one place",
    body: "Routines, goals, tasks, and notes — unified in a single private command center instead of scattered apps.",
  },
  {
    title: "Track goals and routines",
    body: "Turn intentions into systems you actually follow, and watch consistency compound over time.",
  },
  {
    title: "See your progress",
    body: "Understand how far you've come with a clear view of your momentum, streaks, and milestones.",
  },
  {
    title: "Stay focused on what matters",
    body: "No public feed. No noise. Just your priorities and the next action in front of you.",
  },
  {
    title: "Build better systems",
    body: "Use personal templates and weekly planning to design the version of you that you're working toward.",
  },
  {
    title: "Turn ambition into structure",
    body: "LAIR gives shape to big goals, breaking them into routines and tasks you can execute daily.",
  },
];

export type Tier = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    tagline: "Try the core LAIR experience.",
    price: "$0",
    cadence: "free while in early access",
    features: [
      "Personal profile space",
      "Simple task tracking",
      "Basic routine tracking",
      "Up to 3 active goals",
      "Early-access product updates",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    tagline: "Your full personal dashboard.",
    price: "$12",
    cadence: "/month (placeholder)",
    features: [
      "Everything in Starter",
      "Unlimited goals & routines",
      "Full task organization",
      "Progress tracking",
      "Weekly planning",
      "Personal system templates",
    ],
    cta: "Choose Pro",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Founder",
    tagline: "For people who want every edge.",
    price: "$29",
    cadence: "/month (placeholder)",
    features: [
      "Everything in Pro",
      "Advanced progress insights",
      "Premium templates",
      "Priority feature access",
      "Future AI planning assistant",
      "Founder badge",
    ],
    cta: "Become a Founder",
    badge: "Premium",
  },
];

export const faqs = [
  {
    q: "What is LAIR?",
    a: "LAIR is a personal command center for organizing your routines, goals, tasks, and progress — a private digital space designed to feel like a personal operating system, not a basic to-do list.",
  },
  {
    q: "Who is LAIR for?",
    a: "Students, entrepreneurs, creators, and anyone who wants a private space to organize their life, build better systems, and track real growth.",
  },
  {
    q: "Is LAIR just a to-do list app?",
    a: "No. LAIR includes task tracking, but it's built to be a larger personal operating system for goals, routines, progress, and the systems behind who you want to become.",
  },
  {
    q: "Will LAIR have memberships?",
    a: "Yes. LAIR offers three tiers — Starter, Pro, and Founder — with different levels of access and features. Pricing shown is a placeholder during early access.",
  },
  {
    q: "Is LAIR available now?",
    a: "LAIR is being built. You can join early access today to reserve your space and help shape the product before full launch.",
  },
];

export const dashboardPanels = [
  { label: "Today's Focus", value: "3 priorities", hint: "Deep work · Workout · Outreach" },
  { label: "Goals", value: "5 active", hint: "2 on track · 1 at risk" },
  { label: "Routines", value: "4 daily", hint: "Morning · Training · Review" },
  { label: "Progress", value: "78%", hint: "Weekly completion" },
  { label: "Weekly Review", value: "Sunday", hint: "Reflect & plan next week" },
  { label: "Streak", value: "12 days", hint: "Longest: 21 days" },
];
