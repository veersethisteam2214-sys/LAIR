// LAIR — workflow starter page.
// This is a placeholder used to verify the GitHub -> Vercel auto-deploy pipeline.
// The real landing page / scroll-video hero is NOT built yet.

const DEPLOY_MARKER = "v2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-zinc-100">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
        Private command center
      </p>
      <h1 className="text-6xl font-semibold tracking-tight sm:text-8xl">
        LAIR
      </h1>
      <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
        Organize your routines, goals, tasks, and progress in one private
        digital space. Something is being built here.
      </p>
      <span className="mt-12 rounded-full border border-zinc-800 px-4 py-1.5 text-xs text-zinc-500">
        deploy marker: {DEPLOY_MARKER}
      </span>
    </main>
  );
}
