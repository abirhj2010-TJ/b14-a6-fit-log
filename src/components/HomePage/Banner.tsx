import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="
        flex flex-col
        md:flex-row
        md:justify-between
        items-center
        bg-[#222630]
        rounded-2xl
        px-5 py-8
        sm:px-8 sm:py-10
        md:px-10 md:py-12
        lg:px-16 lg:py-16
        xl:px-20 xl:py-20
        gap-8
        md:gap-6
        lg:gap-10
        mb-8
        md:mb-10
      "
    >
      <div className="space-y-4 sm:space-y-5 w-full md:w-1/2">
        <span className="text-[#C2F800] text-xs sm:text-sm font-bold font-body">
          WORKOUT LIBRARY
        </span>

        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-heading
            font-bold
            max-w-2xl
            mt-3
          "
        >
          TRAIN WITH INTENT. LOG EVERY SET
        </h2>

        <p
          className="
            text-sm
            sm:text-base
            text-[#9CA3AF]
            max-w-md
          "
        >
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <a
          href="#library"
          className="
            btn
            bg-[#C2F800]
            hover:bg-[#C2F800]
            text-black
            font-semibold
            rounded-xl
            border-0
            text-xs
            sm:text-sm
            px-5
            sm:px-6
            w-full
            sm:w-auto
          "
        >
          BROWSE WORKOUTS
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/banner.png"
          alt="banner image"
          width={400}
          height={400}
          className="
            w-56
            sm:w-64
            md:w-72
            lg:w-80
            xl:w-96
          "
        />
      </div>
    </div>
  );
};

export default Banner;
