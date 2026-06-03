"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children with a subtle fade-up the first time they scroll
 * into view. Respects prefers-reduced-motion (renders immediately).
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown
          ? `lair-fade-up 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms both`
          : undefined,
      }}
    >
      {children}
    </div>
  );
}
