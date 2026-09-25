export default function LibrarySkeleton({ count = 6 }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading workouts">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse overflow-hidden rounded-2xl border border-[#222630] bg-panel">
          <div className="h-48 bg-[#1f232b]" />
          <div className="space-y-3 p-6">
            <div className="flex gap-2">
              <div className="h-5 w-14 rounded-full bg-[#232732]" />
              <div className="h-5 w-12 rounded-full bg-[#232732]" />
            </div>
            <div className="h-6 w-2/3 rounded bg-[#232732]" />
            <div className="h-4 w-1/3 rounded bg-[#1c1f27]" />
            <div className="h-px bg-line-soft" />
            <div className="h-4 w-1/2 rounded bg-[#1c1f27]" />
          </div>
        </div>
      ))}
    </div>
  );
}
