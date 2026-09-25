import { Dumbbell } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <Dumbbell className="size-10 animate-spin" color="#ccff00" />
      <p className="text-xs tracking-[0.2em] text-muted">LOADING…</p>
    </div>
  );
}
