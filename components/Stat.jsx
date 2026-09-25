import { Clock, Flame, Star } from "lucide-react";

const ICONS = { duration: Clock, calories: Flame, rating: Star };

// Small "icon + value" used on cards and plan items.
export default function Stat({ type, children, accent = false }) {
  const Icon = ICONS[type];
  const color = accent ? "#ccff00" : "#9ca3af";
  return (
    <span className="flex items-center gap-1.5 text-xs leading-4">
      <Icon
        className="size-3.5 shrink-0"
        color={color}
        fill={type === "calories" ? color : "none"}
        strokeWidth={type === "calories" ? 0 : 2}
        aria-hidden
      />
      {children}
    </span>
  );
}
