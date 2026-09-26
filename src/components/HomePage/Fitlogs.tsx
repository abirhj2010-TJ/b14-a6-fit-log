import { Workout } from "@/type/type";
import FitlogsCard from "../FitlogsCard";

const getFitLogs = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await res.json();

  return data;
};

const Fitlogs = async () => {
  const fitLogsData: Workout[] = await getFitLogs();

  return (
    <div id="library" className="my-8 sm:my-10 md:my-12 lg:my-15 scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 font-heading">
        THE LIBRARY
      </h2>

      <p className="text-xs sm:text-sm md:text-base text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </p>

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-5 sm:mt-6 md:mt-8
        "
      >
        {fitLogsData.map((fitLog) => (
          <FitlogsCard key={fitLog.id} fitLog={fitLog} />
        ))}
      </div>
    </div>
  );
};

export default Fitlogs;
