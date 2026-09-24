"use client";

import { FitLogContext } from "@/context/FitLogContext";
import { Workout } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

type PlanSavedCardProps = {
  workout: Workout;
  type: "plan" | "saved";
};

const PlanSavedCard = ({ workout, type }: PlanSavedCardProps) => {
  const { setPlan, setSaved } = useContext(FitLogContext);

  const handleRemove = () => {
    if (type === "plan") {
      setPlan((prev) => prev.filter((item) => item.id !== workout.id));
      toast.success("Workout removed from your plan");
    } else {
      setSaved((prev) => prev.filter((item) => item.id !== workout.id));
      toast.success("Workout removed from saved");
    }
  };

  const handleDone = () => {
    setPlan((prev) => prev.filter((item) => item.id !== workout.id));
    toast.success("Workout completed!");
  };

  return (
    <div className="bg-[#13161D] rounded-xl p-3 sm:p-4 w-full">
      <div className="flex items-center gap-3 sm:gap-4">
        <Image
          src={workout.image}
          alt={workout.name}
          width={160}
          height={120}
          className="w-20 h-20 sm:w-28 sm:h-24 md:w-36 md:h-28 lg:w-40 lg:h-30 object-cover rounded-lg shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-bold text-sm sm:text-base md:text-lg uppercase truncate">
            {workout.name}
          </h3>

          <p className="text-[#8A92A0] text-xs sm:text-sm mt-1 truncate">
            {workout.equipment}
          </p>

          <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 mt-2 sm:mt-3 text-xs sm:text-sm">
            <span className="flex items-center gap-1 text-[#8A92A0]">
              <FaClock className="text-[#C2F800]" />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1 text-[#8A92A0]">
              <FaFire className="text-[#C2F800]" />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 text-[#8A92A0]">
              <FaStar className="text-[#C2F800]" />
              {workout.rating}
            </span>
          </div>
        </div>

        <div className="hidden sm:flex shrink-0 items-center gap-1.5 md:gap-2">
          <Link
            href={`/fitLogs/${workout.id}`}
            className="btn btn-xs md:btn-sm border border-gray-500 rounded-3xl px-2 md:px-4 text-[10px] md:text-xs whitespace-nowrap"
          >
            View Details
          </Link>

          {type === "plan" && (
            <button
              onClick={handleDone}
              className="btn btn-xs md:btn-sm bg-[#C2F800] text-black border-0 hover:bg-[#C2F800] rounded-3xl px-2 md:px-4 text-[10px] md:text-xs whitespace-nowrap"
            >
              <TiTick size={16} />
              Mark as Done
            </button>
          )}

          <button
            onClick={handleRemove}
            className="bg-transparent border-0 text-[#C2F800] hover:bg-transparent hover:text-white p-1.5 md:p-2"
            aria-label="Remove workout"
          >
            <RxCross2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex sm:hidden items-center mt-3">
        {type === "plan" ? (
          <>
            <div className="flex items-center gap-1.5">
              <Link
                href={`/fitLogs/${workout.id}`}
                className="btn btn-xs border border-gray-500 rounded-3xl px-2 text-[9px] whitespace-nowrap"
              >
                View Details
              </Link>

              <button
                onClick={handleDone}
                className="btn btn-xs bg-[#C2F800] text-black border-0 hover:bg-[#C2F800] rounded-3xl px-2 text-[9px] whitespace-nowrap"
              >
                <TiTick size={14} />
                Mark as Done
              </button>
            </div>

            <button
              onClick={handleRemove}
              className="ml-auto bg-transparent border-0 text-[#C2F800] hover:bg-transparent hover:text-white p-1.5"
              aria-label="Remove workout"
            >
              <RxCross2 className="w-4.5 h-4.5" />
            </button>
          </>
        ) : (
          <div className="ml-auto flex items-center gap-1.5">
            <Link
              href={`/fitLogs/${workout.id}`}
              className="btn btn-xs border border-gray-500 rounded-3xl px-2 text-[9px] whitespace-nowrap"
            >
              View Details
            </Link>

            <button
              onClick={handleRemove}
              className="bg-transparent border-0 text-[#C2F800] hover:bg-transparent hover:text-white p-1.5"
              aria-label="Remove workout"
            >
              <RxCross2 className="w-4.5 h-4.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanSavedCard;