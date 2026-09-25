"use client";

import { Bookmark, BookmarkCheck, CalendarCheck, CalendarPlus } from "lucide-react";
import { usePlan } from "@/context/PlanContext";

export default function DetailActions({ workout }) {
  const { addToPlan, saveForLater, isInPlan, isSaved } = usePlan();
  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  return (
    <div className="mt-9 flex flex-wrap gap-4">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="flex cursor-pointer items-center gap-2 rounded-xl bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110 active:scale-[0.98]"
      >
        {inPlan ? <CalendarCheck className="size-4" /> : <CalendarPlus className="size-4" />}
        {inPlan ? "In today's plan" : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={() => saveForLater(workout)}
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-medium text-[#e5e7eb] transition hover:border-lime hover:text-white active:scale-[0.98]"
      >
        {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
        {saved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
