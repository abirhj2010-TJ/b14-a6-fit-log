import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import '../../app/globals.css'
import NavBadge from "./NavBadge";

const Navbar = () => {
  return (
    <div
      className="
        navbar
        border-b border-gray-800
        shadow-sm
        sticky
        top-0
        bg-[#090A0D]
        z-50
        px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24
      "
    >
      <div className="navbar-start min-w-0">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm p-2">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#C2F800]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="
              menu menu-sm
              dropdown-content
              bg-base-100
              rounded-box
              z-10
              mt-3
              w-52
              p-2
              shadow-lg
            "
          >
            <NavLink />
          </ul>
        </div>

        <div className="flex items-center min-w-0">
          <Image
            src="/logo.png"
            alt="Fitlog"
            width={30}
            height={20}
            className="
              w-6
              sm:w-7
              md:w-8
              h-auto
            "
          />

          <Link
            href="/"
            className="
              btn btn-ghost
              px-1 sm:px-2
              text-base
              sm:text-lg
              md:text-xl
              font-bold
              font-heading
            "
          >
            FITLOG
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink></NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        <NavBadge></NavBadge>
      </div>
    </div>
  );
};

export default Navbar;
