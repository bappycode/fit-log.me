"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { sortWorkouts } from "@/lib/workout";
import PlanItem from "./PlanItem";
import EmptyState from "./EmptyState";
import SortDropdown from "./SortDropdown";

const TABS = [
  { id: "plan", label: "Today's Plan" },
  { id: "saved", label: "Saved" },
];

export default function MyPlanView() {
  const { plan, saved, planLimit, markAsDone, removeFromPlan, removeFromSaved } = usePlan();
  const [tab, setTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const list = tab === "plan" ? plan : saved;
  const sorted = sortWorkouts(list, sortBy);

  const minutes = list.reduce((sum, w) => sum + w.duration, 0);
  const calories = list.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-12">
      <h1 className="font-display text-3xl font-bold leading-9">MY PLAN</h1>
      <p className="mt-2 text-sm text-muted-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <section className="mt-6 grid grid-cols-3 rounded-2xl border border-line bg-panel-2 px-4 py-6 sm:px-6 sm:pt-8">
        <Metric label="Exercises" value={list.length} accent
          hint={tab === "plan" ? `of ${planLimit}` : undefined} />
        <Metric label="Minutes" value={minutes} divider />
        <Metric label="Calories" value={calories} divider />
      </section>

      {/* Tabs + sort */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
        <div role="tablist" className="flex gap-1 rounded-xl border border-line bg-[#151921] p-1">
          {TABS.map((t) => {
            const active = tab === t.id;
            const count = t.id === "plan" ? plan.length : saved.length;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`cursor-pointer rounded-lg border px-4 py-1.5 text-xs leading-4 transition ${
                  active
                    ? "border-[#2b303d] bg-[#1f242d] font-bold text-white"
                    : "border-transparent text-muted-2 hover:text-white"
                }`}
              >
                {t.label} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {/* List */}
      <section className="mt-6 flex flex-col gap-4">
        {sorted.length === 0 ? (
          <EmptyState
            message={
              tab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Save a lift from its details page and it will wait for you here."
            }
          />
        ) : (
          sorted.map((w) => (
            <PlanItem
              key={w.id}
              workout={w}
              onDone={tab === "plan" ? markAsDone : undefined}
              onRemove={tab === "plan" ? removeFromPlan : removeFromSaved}
            />
          ))
        )}
      </section>
    </div>
  );
}

function Metric({ label, value, accent = false, divider = false, hint }) {
  return (
    <div className={divider ? "border-l border-line/60 pl-4 sm:pl-8" : "pr-4"}>
      <p className="text-xs text-muted-2">{label}</p>
      <p className={`mt-1 font-display text-3xl font-bold sm:text-4xl ${accent ? "text-lime" : "text-white"}`}>
        {value}
        {hint && <span className="ml-2 font-sans text-xs font-normal text-muted-2">{hint}</span>}
      </p>
    </div>
  );
}
