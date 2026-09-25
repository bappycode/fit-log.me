import { Suspense } from "react";
import Hero from "@/components/Hero";
import Library from "@/components/Library";
import LibrarySkeleton from "@/components/LibrarySkeleton";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6">
      <Hero />

      <section id="library" className="scroll-mt-28">
        <h2 className="font-display text-3xl font-bold leading-9">THE LIBRARY</h2>
        <p className="mt-1 text-sm text-muted">Twelve lifts covering every major muscle group.</p>

        <div className="mt-8">
          <Suspense fallback={<LibrarySkeleton />}>
            <Library />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
