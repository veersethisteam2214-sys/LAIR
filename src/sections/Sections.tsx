import Reveal from "@/components/Reveal";
import { audience, benefits, tiers, dashboardPanels } from "@/data/content";

/* ---------------------------------------------------------------- Nav --- */

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-lg font-semibold tracking-[0.3em] text-white">
          LAIR
        </a>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#what" className="transition-colors hover:text-white">What</a>
          <a href="#membership" className="transition-colors hover:text-white">Membership</a>
          <a href="#about" className="transition-colors hover:text-white">About</a>
          <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
        <a
          href="#waitlist"
          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
        >
          Early Access
        </a>
      </nav>
    </header>
  );
}

/* ----------------------------------------------------------- Section UI --- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-accent-soft">
      {children}
    </p>
  );
}

/* ----------------------------------------------------------- What LAIR --- */

export function WhatIsLair() {
  return (
    <section id="what" className="relative border-t border-white/5 px-6 py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>What LAIR is</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Not a to-do list. A personal operating system.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            LAIR is a private digital space to manage your routines, goals,
            tasks, and personal progress. Part planner, part progress tracker,
            part command center — a headquarters for who you&apos;re becoming.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Audience --- */

export function Audience() {
  return (
    <section id="who" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>Who it&apos;s for</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for people who want structure and progress
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audience.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-8">
                <h3 className="text-xl font-semibold text-white">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Benefits --- */

export function Benefits() {
  return (
    <section id="benefits" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>Why LAIR</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Turn ambition into structure
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-7">
                <div className="mb-4 h-9 w-9 rounded-lg border border-accent/40 bg-accent/10" />
                <h3 className="text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Membership --- */

export function Membership() {
  return (
    <section
      id="membership"
      className="scroll-mt-20 border-t border-white/5 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>Membership</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Choose your plan
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            Start free during early access. Pricing shown is a placeholder while
            LAIR is being built.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                  t.featured
                    ? "border-accent/50 bg-accent/[0.06] shadow-[0_0_60px_-15px_rgba(124,140,255,0.5)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {t.badge && (
                  <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black">
                    {t.badge}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <p className="mt-1 text-sm text-white/55">{t.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-white">{t.price}</span>
                  <span className="text-sm text-white/45">{t.cadence}</span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    t.featured
                      ? "bg-accent text-black"
                      : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/35">
          {/* TODO: connect real Stripe/payment checkout in a later phase */}
          Payments are not live yet — buttons join the early-access list.
        </p>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- Dashboard preview --- */

export function DashboardPreview() {
  return (
    <section id="dashboard" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Eyebrow>A glimpse inside</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your private dashboard
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">
            A calm, focused command center you&apos;ll want to return to daily.
            This is a preview — full functionality is coming.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
            <div className="flex items-center gap-2 px-2 pb-4">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="ml-3 text-xs text-white/40">lair / your space</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {dashboardPanels.map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
                >
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    {p.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">{p.value}</p>
                  <p className="mt-1 text-xs text-white/45">{p.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- About --- */

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-white/5 px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Eyebrow>About LAIR</Eyebrow>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            A command center for your life
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/60">
            LAIR exists to give people a private command center for their life —
            a place to organize what matters, track progress, and build better
            systems for who they want to become. Not another noisy productivity
            app. A focused space that&apos;s entirely yours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Trust ----- */

export function Trust() {
  return (
    <section id="trust" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 text-center sm:p-14">
            <Eyebrow>Private by design</Eyebrow>
            <h2 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Your LAIR is your private space to organize, plan, and grow.
            </h2>
            <p className="mt-4 text-white/55">
              No noise. No public feed. Just your system. You control your
              personal space, and your information is treated as yours alone.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA --- */

export function FinalCta() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Start your LAIR
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">
            Reserve your space and help shape the product before full launch.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Join Early Access
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Footer --- */

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
        <span className="tracking-[0.3em] text-white/70">LAIR</span>
        <p>© {new Date().getFullYear()} LAIR. Your private command center.</p>
        <div className="flex gap-6">
          <a href="#membership" className="hover:text-white">Membership</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
