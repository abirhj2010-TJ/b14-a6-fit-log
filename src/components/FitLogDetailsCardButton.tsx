"use client";
import { FitLogContext } from "@/context/FitLogContext";
import { Workout } from "@/type/type";
import { useContext } from "react";
import { FaBookmark, FaCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const FitLogDetailsCardButton = ({ fitLog }: { fitLog: Workout }) => {
  const { plan, setPlan, saved, setSaved } = useContext(FitLogContext);

  const isPlanFull = plan.length >= 5;

  const handlePlan = () => {
    if (isPlanFull) return;
    const alreadyAdded = plan.some((item) => item.id === fitLog.id);

    if (alreadyAdded) {
      toast.error("Already added to Today's Plan");
      return;
    }

    setPlan((prev) => [...prev, fitLog]);
    toast.success("Added to Today's Plan");
  };

  const handleSaved = () => {
    const alreadySaved = saved.some((item) => item.id === fitLog.id);

    if (alreadySaved) {
      toast.error("Already added to Saved");
      return;
    }

    setSaved((prev) => [...prev, fitLog]);
    toast.success("Added to Saved");
  };

  return (
    <div className="w-full flex flex-col sm:flex-row gap-3">
      <button
        onClick={handlePlan}
        disabled={isPlanFull}
        className= "btn w-full sm:flex-1 bg-[#C2F800] hover:bg-[#C2F800] text-black border-0 rounded-xl font-semibold text-xs sm:text-sm disabled:opacity-50 "
      >
        <FaCalendarPlus />
        Add to Today&apos;s Plan
      </button>

      <button
        onClick={handleSaved}
        className=" btn w-full sm:flex-1 bg-transparent hover:bg-[#C2F800]/10 text-white  border border-gray-700 hover:border-[#C2F800] rounded-xl font-medium text-xs  sm:text-sm "
      >
        <FaBookmark />
        Save for later
      </button>
    </div>
  );
};

export default FitLogDetailsCardButton;
