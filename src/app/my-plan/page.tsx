"use client";

import { FitLogContext } from "@/context/FitLogContext";
import PlanSavedCard from "@/components/shared/PlanSavedCard";
import { useContext, useEffect, useState } from "react";
import { Workout } from "@/type/type";
import Link from "next/link";
import { FaDumbbell, FaChevronDown } from "react-icons/fa";

const MyPlan = () => {
  const { plan, saved } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const [loading, setLoading] = useState(false);

  const activeWorkouts: Workout[] = activeTab === "plan" ? plan : saved;
  const isEmpty = activeWorkouts.length === 0;

  useEffect(() => {
    if (isEmpty) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab, isEmpty]);

  const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return b.rating - a.rating;
  });

  const totalMinutes = activeWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = activeWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="my-7 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="mb-5">
        <h2 className="font-heading uppercase font-bold text-xl md:text-2xl lg:text-3xl mb-2">
          My Plan
        </h2>

        <p className="text-[#8A92A0] text-sm md:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="flex items-center bg-[#13161D] p-5 md:p-8 lg:p-10 rounded-2xl gap-4 md:gap-5 lg:gap-7">
        <div className="border-[#2a2e3b] border-r-2 flex-1">
          <h3 className="text-[#8A92A0] text-xs md:text-sm">Exercises</h3>
          <span className="text-[#C2F800] font-bold text-xl md:text-2xl lg:text-3xl">
            {activeWorkouts.length}
          </span>
        </div>

        <div className="border-[#2a2e3b] border-r-2 flex-1">
          <h3 className="text-[#8A92A0] text-xs md:text-sm">Minutes</h3>
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">
            {totalMinutes}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-[#8A92A0] text-xs md:text-sm">Calories</h3>
          <span className="font-bold text-xl md:text-2xl lg:text-3xl">
            {totalCalories}
          </span>
        </div>
      </div>

      <div className="my-10">
        <div className="flex items-center justify-between gap-1 min-w-0">
          <div className="tabs flex-nowrap shrink-0 w-fit bg-[#101115] rounded-xl p-1">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab shrink-0 min-w-0 bg-transparent text-[#8A92A0] checked:bg-[#232732] checked:text-[#C2F800] rounded-lg px-2 text-xs md:text-base"
              aria-label="Today's Plan"
              checked={activeTab === "plan"}
              onChange={() => setActiveTab("plan")}
            />

            <input
              type="radio"
              name="my_tabs_6"
              className="tab shrink-0 min-w-0 bg-transparent text-[#8A92A0] checked:bg-[#232732] checked:text-[#C2F800] rounded-lg px-2 text-xs md:text-base"
              aria-label="Saved"
              checked={activeTab === "saved"}
              onChange={() => setActiveTab("saved")}
            />
          </div>

          <div className="flex items-center gap-1 md:gap-2 shrink-0">
            <span className="text-[#8A92A0] text-xs md:text-base whitespace-nowrap">
              Sort By
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "duration" | "calories" | "rating",
                  )
                }
                className="appearance-none bg-[#13161D] border border-[#2a2e3b] text-white text-xs md:text-sm rounded-lg pl-2 pr-6 py-1.5 outline-none focus:border-[#C2F800] cursor-pointer"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>

              <FaChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[#8A92A0] text-[8px] pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          {loading ? (
            <div className="min-h-72 rounded-2xl border border-[#2a2e3b] bg-[#13161D] flex flex-col items-center justify-center">
              <span className="loading loading-spinner loading-md text-[#C2F800]"></span>

              <p className="text-[#8A92A0] text-sm mt-3">
                Loading workouts…
              </p>
            </div>
          ) : isEmpty ? (
            <div className="min-h-72 rounded-2xl border border-[#2a2e3b] bg-[#13161D] flex flex-col items-center justify-center text-center px-5 py-12">
              <h3 className="font-heading uppercase font-bold text-xl md:text-2xl mb-2">
                Nothing Here Yet
              </h3>

              <p className="text-[#8A92A0] text-sm md:text-base max-w-md leading-relaxed mb-6">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#C2F800] text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#C2F800] transition"
              >
                <FaDumbbell className="text-xs" />
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedWorkouts.map((workout) => (
                <PlanSavedCard
                  key={workout.id}
                  workout={workout}
                  type={activeTab}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;