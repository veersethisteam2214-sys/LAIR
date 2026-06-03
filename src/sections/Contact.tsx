"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

/**
 * Contact form — front-end placeholder.
 * TODO (later phase): wire submit to an email service or serverless endpoint.
 */
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-accent-soft">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Questions, ideas, or partnership interest? Send us a note.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          {sent ? (
            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
              <p className="text-lg font-semibold text-white">Message received ✦</p>
              <p className="mt-2 text-sm text-white/60">
                Thanks for reaching out — we&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-xs text-white/50">
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-accent/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-xs text-white/50">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-accent/60"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-msg" className="mb-2 block text-xs text-white/50">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-accent/60"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="self-start rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Send message
              </button>
              <p className="text-[11px] text-white/35">
                {/* Placeholder form — not yet connected to a backend. */}
                This form is a placeholder during early access.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
