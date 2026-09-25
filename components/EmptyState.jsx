import Link from "next/link";

export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-[#111317]/50 px-4 py-24 text-center">
      <h2 className="font-display text-xl font-bold leading-5">NOTHING HERE YET</h2>
      <p className="mt-2 text-xs text-[#a1a1aa]">{message}</p>
      <Link
        href="/#library"
        className="mt-6 rounded-full bg-[#c2f10d] px-6 py-2.5 text-xs font-semibold text-black transition hover:brightness-110"
      >
        Go to workouts
      </Link>
    </div>
  );
}
