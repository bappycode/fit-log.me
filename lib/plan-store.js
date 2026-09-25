// A tiny store for Today's Plan + Saved list, persisted in localStorage.
// It is read with useSyncExternalStore (see context/PlanContext.jsx), which keeps
// the server HTML and the first client render identical (no hydration errors).

const STORAGE_KEY = "fitlog:plan";
export const PLAN_LIMIT = 5;

const EMPTY = { plan: [], saved: [], completed: 0 };

let state = EMPTY;
let loaded = false;
const listeners = new Set();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) state = { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    state = EMPTY;
  }
}

function emit() {
  listeners.forEach((listener) => listener());
}

export function subscribe(listener) {
  listeners.add(listener);

  // keep several open tabs in sync
  const onStorage = (e) => {
    if (e.key !== STORAGE_KEY) return;
    loaded = false;
    load();
    emit();
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function getSnapshot() {
  load();
  return state;
}

export function getServerSnapshot() {
  return EMPTY;
}

export function setState(updater) {
  load();
  state = updater(state);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage full or blocked — keep working in memory */
  }
  emit();
}
