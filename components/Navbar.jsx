"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { usePlan } from "@/context/PlanContext";

const LINKS = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

function isActive(pathname, href) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/workouts");
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-40 border-b border-[#1c1f26] bg-ink-deep/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 sm:px-6 md:h-20 md:flex-nowrap md:py-0">
        <Logo />

        <nav
          aria-label="Main"
          className="order-3 flex w-full justify-center md:order-none md:w-auto"
        >
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-1.5 text-xs leading-4 transition-colors ${
                  active
                    ? "bg-lime-soft font-semibold text-[#c2f800]"
                    : "font-medium text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/my-plan"
          className="flex items-center gap-6 text-xs font-medium"
          aria-label={`Plan: ${plan.length}, Saved: ${saved.length}`}
        >
          <span className="flex items-center gap-2">
            <span className="text-[#d1d5db]">Plan</span>
            <span className="grid size-5 place-items-center rounded-full bg-[#c2f800] text-[11px] font-bold text-black">
              {plan.length}
            </span>
          </span>
          <span className="flex items-center gap-2">
            <span className="text-muted">Saved</span>
            <span className="grid size-5 place-items-center rounded-full border border-[#2d313b] text-[11px] text-[#d1d5db]">
              {saved.length}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
