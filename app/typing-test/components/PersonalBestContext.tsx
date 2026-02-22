"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type PersonalBestContextType = {
  personalBest: number;
  updatePersonalBest: (score: number) => void;
};

const PersonalBestContext = createContext<PersonalBestContextType | undefined>(
  undefined
);

export function PersonalBestProvider({ children }: { children: ReactNode }) {
  const [personalBest, setPersonalBest] = useState<number>(0);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage AFTER mount (prevents hydration mismatch)
  useEffect(() => {
    const stored = localStorage.getItem("typing-test-personal-best");
    setPersonalBest(stored ? Number(stored) : 0);
    setHydrated(true);
  }, []);

  // Save whenever it changes (only after hydration)
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "typing-test-personal-best",
      personalBest.toString()
    );
  }, [personalBest, hydrated]);

  const updatePersonalBest = (score: number) => {
    setPersonalBest((prev) => (score > prev ? score : prev));
  };

  return (
    <PersonalBestContext.Provider
      value={{ personalBest, updatePersonalBest }}
    >
      {children}
    </PersonalBestContext.Provider>
  );
}

export function usePersonalBest() {
  const context = useContext(PersonalBestContext);
  if (!context) {
    throw new Error(
      "usePersonalBest must be used inside PersonalBestProvider"
    );
  }
  return context;
}
