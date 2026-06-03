"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/5 px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-accent-soft">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{f.q}</span>
                  <span
                    className={`shrink-0 text-xl text-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-7 text-white/55">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
