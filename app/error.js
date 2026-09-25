"use client";

export default function Error({ error, reset }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <h1 className="font-display text-3xl font-bold uppercase">Something went wrong</h1>
      <p className="mt-3 text-sm text-muted">{error?.message || "Please try again."}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 cursor-pointer rounded-full bg-lime px-6 py-2.5 text-xs font-semibold text-black hover:brightness-110"
      >
        Try again
      </button>
    </div>
  );
}
