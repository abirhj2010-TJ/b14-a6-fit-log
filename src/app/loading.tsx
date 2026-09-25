import { FaDumbbell } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-64 sm:min-h-72 md:min-h-80 flex flex-col items-center justify-center px-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#C2F800]/20 animate-ping" />

        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-[#C2F800]/30 animate-spin flex items-center justify-center">
          <FaDumbbell className="text-[#C2F800] text-base sm:text-lg md:text-xl " />
        </div>
      </div>

      <div className="flex items-center mt-4 sm:mt-5 text-[#8A92A0] text-xs sm:text-sm md:text-base">
        <span>Loading workouts...</span>

      </div>
    </div>
  );
};

export default Loading;
