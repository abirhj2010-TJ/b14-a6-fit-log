"use client";

import { FitLogContext } from "@/context/FitLogContext";
import PlanSavedCard from "@/components/shared/PlanSavedCard";
import { useContext, useState } from "react";
import { Workout } from "@/type/type";

const MyPlan = () => {
  const { plan, saved } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const activeWorkouts: Workout[] = activeTab === "plan" ? plan : saved;

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
        <div className="w-full">
          <div className="tabs w-fit bg-[#101115] rounded-xl p-1">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab bg-transparent text-[#8A92A0] checked:bg-[#232732] checked:text-[#C2F800] rounded-lg"
              aria-label="Today's Plan"
              checked={activeTab === "plan"}
              onChange={() => setActiveTab("plan")}
            />

            <input
              type="radio"
              name="my_tabs_6"
              className="tab bg-transparent text-[#8A92A0] checked:bg-[#232732] checked:text-[#C2F800] rounded-lg"
              aria-label="Saved"
              checked={activeTab === "saved"}
              onChange={() => setActiveTab("saved")}
            />
          </div>

          <div className="mt-4">
            {activeTab === "plan" ? (
              plan.length > 0 ? (
                <div className="space-y-3">
                  {plan.map((workout) => (
                    <PlanSavedCard
                      key={workout.id}
                      workout={workout}
                      type="plan"
                    />
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center text-[#8A92A0]">
                  No workouts in today&apos;s plan.
                </div>
              )
            ) : saved.length > 0 ? (
              <div className="space-y-3">
                {saved.map((workout) => (
                  <PlanSavedCard
                    key={workout.id}
                    workout={workout}
                    type="saved"
                  />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center text-[#8A92A0]">
                No saved workouts.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
