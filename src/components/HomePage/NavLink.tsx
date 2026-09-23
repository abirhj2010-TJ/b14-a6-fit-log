"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link
          className={`${pathname === "/" ? "active text-[#C2F800] bg-[#C2F800]/10 " : " hover:bg-[#C2F800]/10"} rounded-full`}
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link  className={`${pathname === "/my-plan" ? "active text-[#C2F800] bg-[#C2F800]/10" : " hover:bg-[#C2F800]/10"} rounded-full`} href={"/my-plan"}>My Plan</Link>
      </li>
    </>
  );
};

export default NavLink;
