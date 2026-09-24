import Link from "next/link";
import { FaDumbbell } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <div className="text-center w-full max-w-xl">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-white leading-none mb-3 sm:mb-4">
          404
        </h1>

        <h2 className="font-heading text-lg md:text-2xl font-bold uppercase mb-2 sm:mb-3">
          Page Not Found
        </h2>

        <p className="text-[#8A92A0] text-xs sm:text-sm md:text-base max-w-md mx-auto mb-6 sm:mb-7">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#C2F800] text-black font-semibold text-xs sm:text-sm md:text-base px-4 py-2.5 rounded-xl sm:rounded-xl"
        >
          <FaDumbbell className="text-xs sm:text-sm" />
          Back to Workouts
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
