"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import Stat from "./Stat";

export default function PlanItem({ workout, onDone, onRemove }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-[#14171e] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-xl bg-[#1f2937]">
          <Image src={workout.image} alt={workout.name} fill sizes="144px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold uppercase leading-6">{workout.name}</h3>
          <p className="text-xs text-muted-2">{workout.equipment}</p>
          <div className="mt-1.5 flex flex-wrap gap-3 text-[#d1d5db]">
            <Stat type="duration" accent>{workout.duration} min</Stat>
            <Stat type="calories" accent>{workout.caloriesBurned} kcal</Stat>
            <Stat type="rating" accent>{workout.rating}</Stat>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#374151] px-4 py-2 text-xs transition hover:border-white"
        >
          View Details
        </Link>
        {onDone && (
          <button
            type="button"
            onClick={() => onDone(workout)}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-semibold text-black transition hover:brightness-110"
          >
            <Check className="size-3.5" strokeWidth={2.5} />
            Mark as Done
          </button>
        )}
        <button
          type="button"
          onClick={() => onRemove(workout)}
          aria-label={`Remove ${workout.name}`}
          title="Remove"
          className="grid size-7 cursor-pointer place-items-center rounded-full text-[#6b7280] transition hover:bg-red-500/10 hover:text-red-400"
        >
          <X className="size-4" />
        </button>
      </div>
    </article>
  );
}
