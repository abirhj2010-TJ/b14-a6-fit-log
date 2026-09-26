'use client';
import { FitLogContext } from "@/context/FitLogContext";
import Link from "next/link";
import { useContext } from "react";


const NavBadge = () => {

    const {plan, saved} = useContext(FitLogContext);

  return (
    <div className="flex gap-1 sm:gap-2">
      <Link
        href="/my-plan"
        className="btn btn-ghost rounded-full btn-xs sm:btn-sm md:btn-md px-2 text-[10px] sm:text-xs md:text-sm hover:border-[#C2F800] "
      >
        <span>Plan</span>

        <div
          className="badge rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-[#C2F800] text-black text-[10px] sm:text-xs "
        >
          {plan.length}
        </div>
      </Link>

      <Link
        href="/my-plan"
        className=" btn btn-ghost rounded-full btn-xs sm:btn-sm md:btn-md px-2 text-[10px] sm:text-xs md:text-sm hover:border-[#C2F800]"
      >
        <span>Saved</span>

        <div
          className="badge rounded-full w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[10px] sm:text-xs"
        >
          {saved.length}
        </div>
      </Link>
    </div>
  );
};

export default NavBadge;
