import Image from "next/image";
import Link from "next/link";
import Stat from "./Stat";

export default function WorkoutCard({ workout }) {
  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/workouts/${id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#222630] bg-panel transition hover:-translate-y-1 hover:border-lime/60"
    >
      <div className="relative h-48 bg-[#1f232b]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c2f800] px-2.5 py-0.5 text-[11px] font-bold uppercase leading-4 text-black"
            >
              {group}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-display text-lg font-bold uppercase leading-7">{name}</h3>
        <p className="mt-1 text-xs text-muted">{equipment}</p>

        <div className="mt-auto pt-4">
          <div className="flex gap-4 border-t border-line-soft pt-3 text-muted">
            <Stat type="duration">{duration} min</Stat>
            <Stat type="calories">{caloriesBurned} kcal</Stat>
            <Stat type="rating">{rating}</Stat>
          </div>
        </div>
      </div>
    </Link>
  );
}
