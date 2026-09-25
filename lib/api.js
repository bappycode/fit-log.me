// All data comes from the public FitLog API.
export const API_URL =
  process.env.NEXT_PUBLIC_FITLOG_API_URL || "https://api.abcz.workers.dev/api/fitlog";

// Fetch the whole library (12 workouts). Cached for 5 minutes.
export async function getWorkouts() {
  const res = await fetch(API_URL, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`Failed to load workouts (${res.status})`);
  return res.json();
}

// Fetch one workout. Returns null when the id doesn't exist, so the page can show 404.
export async function getWorkout(id) {
  if (!/^\d+$/.test(String(id))) return null;
  const res = await fetch(`${API_URL}/${id}`, { next: { revalidate: 300 } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load workout ${id} (${res.status})`);
  const data = await res.json();
  return data && data.id ? data : null;
}
