"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import toast from "react-hot-toast";
import {
  PLAN_LIMIT,
  getServerSnapshot,
  getSnapshot,
  setState,
  subscribe,
} from "@/lib/plan-store";
import { toPlanItem } from "@/lib/workout";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const { plan, saved, completed } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const isInPlan = (id) => plan.some((w) => w.id === id);
  const isSaved = (id) => saved.some((w) => w.id === id);

  function addToPlan(workout) {
    if (isInPlan(workout.id)) {
      toast.error(`${workout.name} is already in today's plan`);
      return;
    }
    if (plan.length >= PLAN_LIMIT) {
      toast.error(`Today's plan is full (${PLAN_LIMIT} lifts). Finish one first.`);
      return;
    }
    setState((s) => ({ ...s, plan: [...s.plan, toPlanItem(workout)] }));
    toast.success(`${workout.name} added to today's plan`);
  }

  function saveForLater(workout) {
    if (isSaved(workout.id)) {
      toast.error(`${workout.name} is already saved`);
      return;
    }
    setState((s) => ({ ...s, saved: [...s.saved, toPlanItem(workout)] }));
    toast.success(`${workout.name} saved for later`);
  }

  function removeFromPlan(workout) {
    setState((s) => ({ ...s, plan: s.plan.filter((w) => w.id !== workout.id) }));
    toast(`${workout.name} removed from today's plan`, { icon: "🗑️" });
  }

  function removeFromSaved(workout) {
    setState((s) => ({ ...s, saved: s.saved.filter((w) => w.id !== workout.id) }));
    toast(`${workout.name} removed from saved`, { icon: "🗑️" });
  }

  // Finishing a lift frees a slot — "Finish them, then load more."
  function markAsDone(workout) {
    setState((s) => ({
      ...s,
      plan: s.plan.filter((w) => w.id !== workout.id),
      completed: s.completed + 1,
    }));
    toast.success(`${workout.name} done. Nice work! 💪`);
  }

  const value = {
    plan,
    saved,
    completed,
    planLimit: PLAN_LIMIT,
    isInPlan,
    isSaved,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
