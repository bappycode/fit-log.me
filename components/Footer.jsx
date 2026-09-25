import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1a1d24] bg-foot">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-10 sm:flex-row">
        <Logo size="sm" />
        <p className="text-center text-xs text-[#6b7280]">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
