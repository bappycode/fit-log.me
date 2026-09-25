export default function Loading() {
  return (
    <div className="mx-auto grid max-w-7xl animate-pulse gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:gap-14">
      <div className="aspect-[4/5] rounded-2xl bg-[#171a21]" />
      <div className="space-y-5">
        <div className="h-10 w-3/4 rounded bg-[#1c1f27]" />
        <div className="h-12 rounded bg-[#15171d]" />
        <div className="h-6 w-40 rounded-full bg-[#1c1f27]" />
        <div className="h-80 rounded-2xl bg-[#151922]" />
      </div>
    </div>
  );
}
