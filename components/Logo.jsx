import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Logo({ size = "md" }) {
  const big = size === "md";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="FitLog home">
      <Dumbbell
        className={big ? "size-7" : "size-5"}
        color="#ccff00"
        strokeWidth={big ? 2.2 : 2.4}
        aria-hidden
      />
      <span
        className={`font-display font-bold tracking-wide ${big ? "text-xl leading-7" : "text-sm leading-5"}`}
      >
        FITLOG
      </span>
    </Link>
  );
}
