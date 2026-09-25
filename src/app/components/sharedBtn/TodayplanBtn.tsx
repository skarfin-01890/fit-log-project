'use client'

import { ExerciseContext } from '@/Context/ExerciseContext';
import { IExercise } from '@/types/exerciseTypes';
import React, { useContext } from 'react';
import { MdAddToPhotos } from 'react-icons/md';
import { toast } from 'react-toastify';

const TodayplanBtn = ({exercise}:{exercise:IExercise}) => {
	const {todayPlan,setTodayPlan}=useContext(ExerciseContext)

	const handleTodaybtn=()=>{

 const alreadyAdded = todayPlan.some(
    (item:IExercise) => item.id === exercise.id
  );

  if (alreadyAdded) {
    toast.error("Card already added to today's plan!");
    return;
  }


setTodayPlan([...todayPlan, exercise])
toast.success(`${exercise.name} added to today's plan`)
console.log(todayPlan)
}
	return (
		<div>
		 <button onClick={()=> handleTodaybtn()}
                type="button"
                className="flex items-center gap-2 rounded-xl bg-[#dfff00] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#c9e600]"
              >
               <MdAddToPhotos /> Add to today's plan
              </button>
			  </div>
	);
};

export default TodayplanBtn;