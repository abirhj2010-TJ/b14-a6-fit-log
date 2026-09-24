"use client";
import { Workout } from "@/type/type";
import { createContext, useState } from "react";

interface FitLogContextType {
  plan: Workout[];
  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const FitLogContext = createContext<FitLogContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

const sharedFitLog = {
    plan,
    setPlan,
    saved,
    setSaved,
}


  return <FitLogContext.Provider value={sharedFitLog}>
    {children}
  </FitLogContext.Provider>;
};

export default FitLogProvider;
