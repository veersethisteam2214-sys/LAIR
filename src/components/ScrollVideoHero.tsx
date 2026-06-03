"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollVideoHero — "scroll to play, replayable" model.
 *
 * - Hero is a full-screen video pinned at the top. Scroll is locked.
 * - The first downward scroll/touch/arrow TRIGGERS playback (swallowed so the
 *   page doesn't move). Scrolling stays locked while it plays.
 * - When the video ends (or Skip), the screen fades THROUGH BLACK and the page
 *   jumps (under cover) into the section below, then fades back in — a clean,
 *   seamless hand-off with no visible scroll jump.
 * - If the user scrolls back up to the very top, the intro RE-ARMS: the video
 *   resets to its first frame and the whole experience can play again.
 */

const VIDEO_SRC = "/assets/video/lair-hero.mp4";
const POSTER_SRC = "/assets/images/lair-hero-poster.jpg";

type Phase = "idle" | "playing" | "done";

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const [phase, setPhase] = useState<Phase>("idle");

  // Exposed to JSX handlers.
  const bypassRef = useRef<() => void>(() => {});
  const skipRef = useRef<() => void>(() => {});

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const cover = coverRef.current;
    if (!video || !section) return;

    let safetyTimer = 0;
    let revealTimer = 0;

    const setPhaseBoth = (p: Phase) => {
      phaseRef.current = p;
      setPhase(p);
    };

    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
    const setCover = (opacity: number, ms: number) => {
      if (!cover) return;
      cover.style.transition = `opacity ${ms}ms ease`;
      cover.style.opacity = String(opacity);
    };

    // --- scroll/touch/key blockers ---
    const onWheel = (e: WheelEvent) => {
      if (phaseRef.current === "done") return;
      if (phaseRef.current === "idle") {
        if (e.deltaY > 0) {
          e.preventDefault();
          startPlay();
        }
      } else {
        e.preventDefault();
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
    const addBlockers = () => {
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("keydown", onKey, { passive: false });
    };
    const removeBlockers = () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
    };

    // --- re-arm when the user returns to the very top ---
    const onTopWatch = () => {
      if (window.scrollY <= 2) {
        removeTopWatcher();
        arm();
      }
    };
    const addTopWatcher = () =>
      window.addEventListener("scroll", onTopWatch, { passive: true });
    const removeTopWatcher = () =>
      window.removeEventListener("scroll", onTopWatch);

    const onTimeUpdate = () => {
      if (!progressRef.current) return;
      const d = video.duration || 1;
      progressRef.current.style.transform = `scaleX(${video.currentTime / d})`;
    };

    // Arm / re-arm: reset to first frame, lock, wait for scroll-to-play.
    const arm = () => {
      window.clearTimeout(safetyTimer);
      window.clearTimeout(revealTimer);
      try {
        video.pause();
        video.currentTime = 0;
      } catch {
        /* ignore */
      }
      if (progressRef.current) progressRef.current.style.transform = "scaleX(0)";
      setCover(0, 0);
      window.scrollTo(0, 0);
      lockScroll();
      setPhaseBoth("idle");
      addBlockers();
    };

    const startPlay = () => {
      if (phaseRef.current !== "idle") return;
      setPhaseBoth("playing");
      try {
        video.currentTime = 0;
      } catch {
        /* ignore */
      }
      const p = video.play();
      if (p && typeof p.catch === "function") p.catch(() => finishIntro());
      safetyTimer = window.setTimeout(
        finishIntro,
        ((video.duration || 10) + 2) * 1000
      );
    };

    // End of intro: fade through black, jump under cover, reveal next section.
    const finishIntro = () => {
      if (phaseRef.current === "done") return;
      window.clearTimeout(safetyTimer);
      setPhaseBoth("done");
      removeBlockers();
      setCover(1, 350);
      revealTimer = window.setTimeout(() => {
        unlockScroll();
        window.scrollTo({ top: section.offsetHeight, behavior: "auto" });
        setCover(0, 650);
        addTopWatcher();
      }, 380);
    };

    // CTA clicked during the intro: release without forcing the hand-off
    // (the anchor does its own scroll to the chosen section).
    const bypass = () => {
      if (phaseRef.current === "done") return;
      window.clearTimeout(safetyTimer);
      window.clearTimeout(revealTimer);
      setPhaseBoth("done");
      removeBlockers();
      unlockScroll();
      setCover(0, 0);
      addTopWatcher();
    };

    bypassRef.current = bypass;
    skipRef.current = finishIntro;

    video.addEventListener("ended", finishIntro);
    video.addEventListener("timeupdate", onTimeUpdate);

    if (window.scrollY > 10) {
      // Not at the top (e.g. refreshed mid-page) — don't trap; arm on return.
      setPhaseBoth("done");
      addTopWatcher();
    } else {
      arm();
    }

    return () => {
      removeBlockers();
      removeTopWatcher();
      unlockScroll();
      window.clearTimeout(safetyTimer);
      window.clearTimeout(revealTimer);
      video.removeEventListener("ended", finishIntro);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="LAIR cinematic intro"
      className="relative h-screen w-full"
    >
      {/* Fade-through-black cover for the hand-off into the next section */}
      <div
        ref={coverRef}
        className="pointer-events-none fixed inset-0 z-[60] bg-black"
        style={{ opacity: 0 }}
      />

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
              onClick={() => bypassRef.current()}
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Enter LAIR
            </a>
            <a
              href="#waitlist"
              onClick={() => bypassRef.current()}
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
          onClick={() => skipRef.current()}
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
