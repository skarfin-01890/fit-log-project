'use client';


import React, { createContext, useState } from 'react';

interface ExerciseProviderProps {
  children: React.ReactNode;
}

export const ExerciseContext = createContext({});

const ExerciseProvider = ({ children }: ExerciseProviderProps) => {
	const [todayPlan,setTodayPlan]=useState([]);
	const [saveLater,setSavelater]=useState([])
	const sharedData={

todayPlan, setTodayPlan, saveLater, setSavelater
	}
  return (
    <ExerciseContext.Provider value={sharedData}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;