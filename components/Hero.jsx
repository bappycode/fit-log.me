import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse items-center gap-10 rounded-2xl border border-[#222630] bg-panel p-6 sm:p-10 lg:flex-row lg:justify-between lg:p-14">
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-[11px] font-bold leading-4 tracking-[0.2em] text-[#c2f800]">
          WORKOUT LIBRARY
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
          Train with intent. Log every set.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-6 text-muted lg:mx-0">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s
          plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="mt-7 inline-block rounded-md bg-[#c2f800] px-6 py-3 text-xs font-bold tracking-wider text-black transition hover:brightness-110"
        >
          BROWSE WORKOUTS
        </a>
      </div>

      <Image
        src="/banner.webp"
        alt="Muscle figure training on a preacher curl machine"
        width={334}
        height={334}
        priority
        className="size-56 object-contain sm:size-72 lg:size-[334px]"
      />
    </section>
  );
}
