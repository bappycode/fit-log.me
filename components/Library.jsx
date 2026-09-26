import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";

// Server Component: fetches the workouts from the API and renders the grid.
export default async function Library() {
  let workouts;
  try {
    workouts = await getWorkouts();
  } catch {
    return (
      <div className="rounded-xl border border-white/10 bg-[#111317]/50 px-4 py-16 text-center">
        <h3 className="font-display text-xl font-bold">COULDN&apos;T LOAD WORKOUTS</h3>
        <p className="mt-2 text-sm text-muted">
          The workout API is not responding. Please check your connection and refresh the page.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
