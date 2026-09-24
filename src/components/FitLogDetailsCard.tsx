import Image from "next/image";
import type { Workout } from "@/type/type";
import FitLogDetailsCardButton from "./FitLogDetailsCardButton";


type FitLogDetailsCardProps = {
  fitLog: Workout;
};

const FitLogDetailsCard = ({ fitLog }: FitLogDetailsCardProps) => {


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 ">
      <div>
        <Image
          src={fitLog.image}
          alt={fitLog.name}
          width={700}
          height={700}
          className="
            w-full
            h-80
            sm:h-100
            md:h-140
            lg:h-170
            object-cover
            rounded-2xl
          "
        />
      </div>

      <div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
          {fitLog.name}
        </h1>

        <p className="text-sm sm:text-base text-[#9CA3AF] mt-3">
          {fitLog.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {fitLog.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="
                px-3 py-1
                rounded-full
                bg-[#C2F800]
                text-black
                text-xs
                font-semibold
              "
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-gray-800 bg-[#161920]">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Equipment
            </span>
            <span className="text-xs sm:text-sm">{fitLog.equipment}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Difficulty
            </span>
            <span className="text-xs sm:text-sm">{fitLog.difficulty}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Sets
            </span>
            <span className="text-xs sm:text-sm">{fitLog.sets}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Reps
            </span>
            <span className="text-xs sm:text-sm">{fitLog.reps}</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Duration
            </span>
            <span className="text-xs sm:text-sm">{fitLog.duration} min</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Calories
            </span>
            <span className="text-xs sm:text-sm">
              {fitLog.caloriesBurned} kcal
            </span>
          </div>

          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-[10px] uppercase text-[#9CA3AF] font-semibold">
              Rating
            </span>
            <span className="text-xs sm:text-sm">{fitLog.rating}</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-heading text-xl sm:text-2xl font-bold">
            INSTRUCTIONS
          </h2>

          <ol className="mt-3 space-y-3 ">
            {fitLog.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex gap-3 text-xs sm:text-sm text-[#B5B8C0]"
              >
                <span className="text-[#9CA3AF] min-w-4">{index + 1}.</span>

                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-7">
          <FitLogDetailsCardButton fitLog = {fitLog}></FitLogDetailsCardButton>
        </div>
      </div>
    </div>
  );
};

export default FitLogDetailsCard;
