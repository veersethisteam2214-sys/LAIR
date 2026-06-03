"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * Early-access / waitlist form.
 * NOTE: This is a front-end placeholder. It does NOT yet persist data anywhere.
 * TODO (later phase): POST to NEXT_PUBLIC_WAITLIST_ENDPOINT (Supabase / serverless fn).
 */
export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder only — no network request yet.
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="rounded-3xl border border-accent/30 bg-gradient-to-b from-accent/[0.08] to-transparent p-8 text-center sm:p-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-accent-soft">
              Early access
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Reserve your LAIR
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60">
              LAIR is being built. Join early access to claim your space and help
              shape what it becomes.
            </p>

            {submitted ? (
              <div className="mx-auto mt-8 max-w-md rounded-2xl border border-accent/40 bg-accent/10 p-6">
                <p className="text-lg font-semibold text-white">
                  You&apos;re on the list ✦
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Thanks{ name ? `, ${name}` : "" }. We&apos;ll reach out at{" "}
                  <span className="text-white">{email}</span> as LAIR opens up.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3"
              >
                <label className="sr-only" htmlFor="wl-name">
                  Name (optional)
                </label>
                <input
                  id="wl-name"
                  type="text"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-accent/60"
                />
                <label className="sr-only" htmlFor="wl-email">
                  Email
                </label>
                <input
                  id="wl-email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-accent/60"
                />
                <button
                  type="submit"
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  Join Early Access
                </button>
                <p className="mt-1 text-[11px] text-white/35">
                  No spam. Your email stays private.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
