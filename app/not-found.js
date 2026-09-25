import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <Dumbbell className="size-12 -rotate-12" color="#ccff00" />
      <p className="mt-6 font-display text-7xl font-bold text-lime">404</p>
      <h1 className="mt-2 font-display text-2xl font-bold uppercase">Wrong rep. No such page.</h1>
      <p className="mt-3 text-sm text-muted">
        The page or workout you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-lime px-6 py-2.5 text-xs font-semibold text-black hover:brightness-110"
      >
        Back to workouts
      </Link>
    </div>
  );
}
