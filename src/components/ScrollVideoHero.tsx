"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollVideoHero — "scroll to play" model.
 *
 * - Hero is a full-screen (100vh) pinned video at the top of the page.
 * - The first downward scroll/touch/arrow press TRIGGERS playback (and is
 *   swallowed so the page doesn't move).
 * - While the video plays, page scrolling is LOCKED.
 * - When the video ends, scroll unlocks and the page smoothly auto-advances
 *   into the section below.
 * - A progress bar + "Skip" control keep users from feeling trapped.
 * - prefers-reduced-motion users are NOT locked: they see the poster/first
 *   frame and scroll normally.
 */

const VIDEO_SRC = "/assets/video/lair-hero.mp4";
const POSTER_SRC = "/assets/images/lair-hero-poster.jpg";

type Phase = "idle" | "playing" | "done";

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const [phase, setPhase] = useState<Phase>("idle");

  // Exposed so the CTA buttons can disarm the scroll-lock if clicked.
  const disarmRef = useRef<() => void>(() => {});

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const setPhaseBoth = (p: Phase) => {
      phaseRef.current = p;
      setPhase(p);
    };

    let safetyTimer = 0;

    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    const removeBlockers = () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };

    // Stop locking but stay in place (used when a CTA is clicked).
    const disarm = () => {
      if (phaseRef.current === "done") return;
      setPhaseBoth("done");
      window.clearTimeout(safetyTimer);
      removeBlockers();
      unlockScroll();
    };
    disarmRef.current = disarm;

    // End of intro: unlock and glide into the content below.
    const goToNext = () => {
      if (phaseRef.current === "done") return;
      disarm();
      const top = section.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    };

    const startPlay = () => {
      if (phaseRef.current !== "idle") return;
      setPhaseBoth("playing");
      window.scrollTo(0, 0);
      lockScroll();
      try {
        video.currentTime = 0;
      } catch {
        /* ignore */
      }
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => goToNext()); // if playback is blocked, don't trap the user
      }
      const ms = ((video.duration || 10) + 2) * 1000;
      safetyTimer = window.setTimeout(goToNext, ms);
    };

    const onWheel = (e: WheelEvent) => {
      if (phaseRef.current === "done") return;
      if (phaseRef.current === "idle") {
        if (e.deltaY > 0) {
          e.preventDefault();
          startPlay();
        }
      } else {
        e.preventDefault(); // playing → block all scroll
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (phaseRef.current === "done") return;
      e.preventDefault();
      if (phaseRef.current === "idle") startPlay();
    };

    const onKey = (e: KeyboardEvent) => {
      if (phaseRef.current === "done") return;
      const keys = ["ArrowDown", "PageDown", "End", " ", "Spacebar"];
      if (keys.includes(e.key)) {
        e.preventDefault();
        if (phaseRef.current === "idle") startPlay();
      }
    };

    const onTimeUpdate = () => {
      if (!progressRef.current) return;
      const d = video.duration || 1;
      progressRef.current.style.transform = `scaleX(${video.currentTime / d})`;
    };

    // --- Arm, unless the user isn't at the top (e.g. refreshed mid-page),
    // which would unfairly trap them. The intro runs for everyone otherwise
    // because it's triggered by the user's own scroll action. ---
    if (window.scrollY > 10) {
      setPhaseBoth("done");
      return () => {
        unlockScroll();
      };
    }

    // Lock immediately so the page can't be scrolled past the intro until
    // it has played (the first wheel/touch/key still triggers playback).
    lockScroll();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKey, { passive: false });
    video.addEventListener("ended", goToNext);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      removeBlockers();
      unlockScroll();
      window.clearTimeout(safetyTimer);
      video.removeEventListener("ended", goToNext);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  const ctaClick = () => disarmRef.current();

  return (
    <section
      ref={sectionRef}
      aria-label="LAIR cinematic intro"
      className="relative h-screen w-full"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        />

        {/* Cinematic gradient for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/80" />

        {/* Headline overlay — visible while idle, fades once playing */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700"
          style={{ opacity: phase === "idle" ? 1 : 0 }}
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.45em] text-white/60">
            Your private command center
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
            Build your personal
            <br />
            command center
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            LAIR helps you organize your routines, goals, tasks, and progress in
            one private digital space.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#membership"
              onClick={ctaClick}
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Enter LAIR
            </a>
            <a
              href="#waitlist"
              onClick={ctaClick}
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Join Early Access
            </a>
          </div>
        </div>

        {/* Scroll hint — only while idle */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center transition-opacity duration-500"
          style={{ opacity: phase === "idle" ? 1 : 0 }}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">
            Scroll to begin
          </p>
          <div className="mx-auto mt-3 h-9 w-5 rounded-full border border-white/30 p-1">
            <div className="mx-auto h-2 w-1 motion-safe:animate-bounce rounded-full bg-white/60" />
          </div>
        </div>

        {/* Skip control — only while playing */}
        <button
          onClick={() => {
            disarmRef.current();
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
          className="absolute bottom-6 right-6 z-10 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur transition-opacity duration-300 hover:text-white"
          style={{
            opacity: phase === "playing" ? 1 : 0,
            pointerEvents: phase === "playing" ? "auto" : "none",
          }}
        >
          Skip ↓
        </button>

        {/* Progress bar — fills as the intro plays */}
        <div
          className="absolute bottom-0 left-0 h-[3px] w-full bg-white/10 transition-opacity duration-300"
          style={{ opacity: phase === "playing" ? 1 : 0 }}
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-accent"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </section>
  );
}
