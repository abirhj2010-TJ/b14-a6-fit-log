import type { Workout } from "@/type/type";
import FitLogDetailsCard from "@/components/shared/FitLogDetailsCard";

type Props = {
  params: Promise<{
    fitLogId: string;
  }>;
};

const getFitLog = async (id: string): Promise<Workout> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  return res.json();
};

const FitLogDetailsPage = async ({ params }: Props) => {
  const { fitLogId } = await params;

  const fitLog = await getFitLog(fitLogId);

  return (
    <div className="my-8 px-4 md:px-8 lg:px-16 xl:px-24 ">
      <FitLogDetailsCard fitLog={fitLog}></FitLogDetailsCard>
    </div>
  );
};

export default FitLogDetailsPage;
