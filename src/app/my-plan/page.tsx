"use client";
import { FitLogContext } from "@/context/FitLogContext";
import PlanSavedCard from "@/components/shared/PlanSavedCard";
import Link from "next/link";
import { useContext, useState } from "react";
import { Workout } from "@/type/type";

const MyPlan = () => {
  const { plan, saved } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const activeWorkouts:Workout[] = activeTab === "plan" ? plan : saved;

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

      <div className="flex items-center bg-[#232732] p-5 md:p-8 lg:p-10 rounded-2xl gap-4 md:gap-5 lg:gap-7">
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
        <div className="tabs tabs-box w-full">
          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Today's Plan"
            checked={activeTab === "plan"}
            onChange={() => setActiveTab("plan")}
          />

          <div className="tab-content w-full bg-[#101115] border border-[#2a2e3b] rounded-b-2xl p-2 md:p-3">
            {plan.length > 0 ? (
              <div className="space-y-3 p-3 md:p-5">
                {plan.map((workout) => (
                  <PlanSavedCard
                    key={workout.id}
                    workout={workout}
                    type="plan"
                  />
                ))}
              </div>
            ) : (
              <div className="min-h-60 md:min-h-64 lg:min-h-72 border border-dashed border-[#272b34] rounded-xl flex flex-col justify-center items-center text-center px-5">
                <h2 className="uppercase font-heading font-bold text-base md:text-lg mb-2">
                  Nothing Here Yet
                </h2>

                <p className="text-xs md:text-sm text-[#8A8D96] mb-5">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link
                  href="/"
                  className="btn bg-[#C2F800] hover:bg-[#C2F800] text-black font-semibold rounded-3xl border-0 text-xs sm:text-sm px-5 sm:px-6"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_6"
            className="tab"
            aria-label="Saved"
            checked={activeTab === "saved"}
            onChange={() => setActiveTab("saved")}
          />

          <div className="tab-content w-full bg-[#101115] border border-[#2a2e3b] rounded-b-2xl p-2 md:p-3">
            {saved.length > 0 ? (
              <div className="space-y-3 p-3 md:p-5">
                {saved.map((workout) => (
                  <PlanSavedCard
                    key={workout.id}
                    workout={workout}
                    type="saved"
                  />
                ))}
              </div>
            ) : (
              <div className="min-h-60 md:min-h-64 lg:min-h-72 border border-dashed border-[#272b34] rounded-xl flex flex-col justify-center items-center text-center px-5">
                <h2 className="uppercase font-heading font-bold text-base md:text-lg mb-2">
                  Nothing Here Yet
                </h2>

                <p className="text-xs md:text-sm text-[#8A8D96] mb-5">
                  Save your favorite lifts and find them here later.
                </p>

                <Link
                  href="/"
                  className="btn bg-[#C2F800] hover:bg-[#C2F800] text-black font-semibold rounded-3xl border-0 text-xs sm:text-sm px-5 sm:px-6"
                >
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
