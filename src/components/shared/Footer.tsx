import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-start md:flex-row md:justify-between gap-2 md:items-center border-t border-gray-800 py-7 px-5 md:px-8 lg:px-16 xl:px-24">
      <div className="flex justify-center items-center gap-2">
        <Image
          src="/logo.png"
          alt="fitlog"
          width={30}
          height={20}
          className="-rotate-45"
        />
        <span className="font-bold text-base font-heading">FITLOG</span>
      </div>
      <div>
        <p className="text-xs text-gray-500 font-semibold">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
};

export default Footer;
