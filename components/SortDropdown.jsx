"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { SORT_OPTIONS } from "@/lib/workout";

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = SORT_OPTIONS.find((o) => o.value === value);

  // close when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-2">Sort By</span>
      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex min-w-24 cursor-pointer items-center justify-between gap-2 rounded-[9px] border border-line bg-panel-2 px-3 py-2 text-xs"
        >
          {current?.label}
          <ChevronDown className={`size-3.5 text-muted-2 transition ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-lg border border-line bg-panel-2 py-1 shadow-xl shadow-black/40"
          >
            {SORT_OPTIONS.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className="flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-xs hover:bg-[#1f242d]"
                >
                  {option.label}
                  {option.value === value && <Check className="size-3.5 text-lime" />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
