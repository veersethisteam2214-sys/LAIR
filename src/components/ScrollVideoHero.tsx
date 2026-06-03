"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollVideoHero
 * ----------------
 * A full-screen video whose timeline is driven by the scroll wheel.
 *
 * How it works:
 *  - The outer <section> is very tall (SCROLL_VH) and acts as the "scroll track".
 *  - An inner container is `sticky` so the video stays pinned full-screen while
 *    the user scrolls through that track.
 *  - Each animation frame we compute how far we are through the track (0 -> 1)
 *    and map that to `video.currentTime` ( = progress * duration ).
 *  - We lerp toward the target time so scrubbing feels smooth instead of jumpy.
 *
 * The video is NEVER autoplayed/looped — scroll is the only thing that moves it.
 */

const SCROLL_VH = 500; // height of the scroll track in viewport heights
const VIDEO_SRC = "/assets/video/lair-hero.mp4";
const POSTER_SRC = "/assets/images/lair-hero-poster.jpg";

export default function ScrollVideoHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduced(prefersReduced);

    // Make sure we control playback manually.
    video.pause();

    let duration = video.duration || 10;
    let smoothed = 0;
    let raf = 0;

    const onMeta = () => {
      duration = video.duration || 10;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    const getProgress = () => {
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      return total > 0 ? scrolled / total : 0;
    };

    const tick = () => {
      const progress = getProgress();
      const target = progress * duration;

      // Smooth toward the target frame for a premium, fluid scrub.
      smoothed += (target - smoothed) * 0.12;
      if (Math.abs(target - smoothed) < 0.004) smoothed = target;

      // Only seek when it actually changes and the decoder is free.
      if (
        duration &&
        !video.seeking &&
        Math.abs(video.currentTime - smoothed) > 0.01
      ) {
        try {
          video.currentTime = smoothed;
        } catch {
          /* seeking before ready — ignore, next frame retries */
        }
      }

      // Fade the headline overlay out as the user scrubs in.
      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(
          Math.max(0, 1 - progress * 2.2)
        );
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(0, 1 - progress * 6));
      }

      raf = requestAnimationFrame(tick);
    };

    if (prefersReduced) {
      // Accessibility: no scrubbing — just show the first frame.
      try {
        video.currentTime = 0;
      } catch {
        /* ignore */
      }
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="LAIR cinematic intro"
      style={{ height: reduced ? "100vh" : `${SCROLL_VH}vh` }}
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          playsInline
          preload="auto"
          // No controls, no autoplay, no loop — scroll drives everything.
          tabIndex={-1}
        />

        {/* Cinematic gradient so text stays readable over the footage */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />

        {/* Headline overlay — fades out as you scrub forward */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
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
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Enter LAIR
            </a>
            <a
              href="#waitlist"
              className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Join Early Access
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">
            Scroll to enter
          </p>
          <div className="mx-auto mt-3 h-9 w-5 rounded-full border border-white/30 p-1">
            <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
