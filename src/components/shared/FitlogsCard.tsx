import { Workout } from "@/type/type";
import Image from "next/image";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

export interface FitlogsCardProps {
  fitLog: Workout;
}

const FitlogsCard = ({ fitLog }: FitlogsCardProps) => {
  return (
    <div
      className="bg-[#15171D] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#C2F800]"
    >
      <Image
        src={fitLog.image}
        alt={fitLog.name}
        width={500}
        height={300}
        className="w-full h-52 sm:h-60 object-cover"
      />

      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {fitLog.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#C2F800]/10 text-[#C2F800]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-1">
          {fitLog.name}
        </h3>

        <p className="text-sm text-[#9CA3AF]">{fitLog.equipment}</p>

        <div className="border-t border-gray-700 my-4" />

        <div className="flex items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <FaClock className="text-[#C2F800]" />
            <span>{fitLog.duration} min</span>
          </div>

          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <FaFire className="text-[#C2F800]" />
            <span>{fitLog.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <FaStar className="text-[#C2F800]" />
            <span>{fitLog.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitlogsCard;
