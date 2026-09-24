"use client";

import { Workout } from "@/type/type";
import { createContext, useEffect, useState } from "react";

interface FitLogContextType {
  plan: Workout[];
  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
  loading: boolean;
}

export const FitLogContext = createContext<FitLogContextType>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  loading: true,
});

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPlan = localStorage.getItem("plan");
    const storedSaved = localStorage.getItem("saved");

    if (storedPlan) {
      setTimeout(() => {
        setPlan(JSON.parse(storedPlan));
      }, 0);
    }

    if (storedSaved) {
      setTimeout(() => {
        setSaved(JSON.parse(storedSaved));
      }, 0);
    }

    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("plan", JSON.stringify(plan));
    }
  }, [plan, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }, [saved, loading]);

  const sharedFitLog = {
    plan,
    setPlan,
    saved,
    setSaved,
    loading,
  };

  return (
    <FitLogContext.Provider value={sharedFitLog}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
