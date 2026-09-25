import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import DetailActions from "@/components/DetailActions";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id).catch(() => null);
  return { title: workout ? workout.name : "Workout not found" };
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);
  if (!workout) notFound();

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-14">
      {/* Left: image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] md:sticky md:top-28 md:self-start">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(min-width: 768px) 600px, 100vw"
          className="object-cover"
        />
      </div>

      {/* Right: info */}
      <div>
        <h1 className="font-display text-3xl font-bold uppercase leading-10 sm:text-4xl">
          {workout.name}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-6 text-muted">{workout.description}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-lime px-3.5 py-1 text-xs font-semibold text-ink"
            >
              {group}
            </span>
          ))}
        </div>

        <dl className="mt-7 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
          {specs.map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-center justify-between gap-4 px-6 py-3.5 ${
                i > 0 ? "border-t border-[#1e2330]" : ""
              }`}
            >
              <dt className="text-xs font-bold uppercase text-muted">{label}</dt>
              <dd className="text-right text-sm font-medium text-[#e5e7eb]">{value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-8">
          <h2 className="text-base font-extrabold uppercase">Instructions</h2>
          <ol className="mt-4 space-y-3">
            {workout.instructions.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm leading-6">
                <span className="text-muted">{i + 1}.</span>
                <span className="text-[#d1d5db]">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <DetailActions workout={workout} />
      </div>
    </div>
  );
}
