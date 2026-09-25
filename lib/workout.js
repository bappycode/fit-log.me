// Only keep the fields the plan list needs (keeps localStorage small).
export function toPlanItem(w) {
  return {
    id: w.id,
    name: w.name,
    image: w.image,
    equipment: w.equipment,
    duration: w.duration,
    caloriesBurned: w.caloriesBurned,
    rating: w.rating,
  };
}

export const SORT_OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export function sortWorkouts(list, sortBy) {
  const copy = [...list];
  if (sortBy === "duration") copy.sort((a, b) => a.duration - b.duration);
  if (sortBy === "calories") copy.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
  if (sortBy === "rating") copy.sort((a, b) => b.rating - a.rating);
  return copy;
}
