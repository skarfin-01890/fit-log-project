"use client";

import { ExerciseContext } from '@/Context/ExerciseContext';

import Image from 'next/image';
import Link from 'next/link';

import React, { useContext } from 'react';
import { IExercise } from './../../types/exerciseTypes';

const TodayPlanCard = () => {
	const { todayPlan, setTodayPlan } = useContext(ExerciseContext);

return (
  <div className="space-y-4">

	{todayPlan.length === 0 ? (
  <div className="mt-5  min-h-[300px] w-full flex flex-col items-center justify-center border border-dashed border-white/10">
    <h2 className="text-2xl font-black uppercase">
      Nothing Here Yet
    </h2>

    <p className="mt-3 text-sm text-white/60">
      Browse the library and add a lift to get today moving.
    </p>

    <Link href="/">
      <button className="mt-6 rounded-xl bg-[#dfff00] px-7 py-3 text-sm font-bold text-black">
        Go to workouts
      </button>
    </Link>
  </div>
) : (
  todayPlan.map((exercise: IExercise) => (
    <div
      key={exercise.id}
      className="flex w-full items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
    >
      {/* Image */}
      <div className="relative h-24 w-44 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-black uppercase">
          {exercise.name}
        </h3>

        <p className="mt-1 text-sm text-white/60">
          {exercise.equipment}
        </p>

        <div className="mt-3 flex items-center gap-5 text-sm font-semibold">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-[3px] border-[#dfff00]" />
            {exercise.duration} min
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#dfff00]">♨</span>
            {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#dfff00]">✦</span>
            {exercise.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex shrink-0 items-center gap-4">
		<Link href={`exercises/${exercise.id}`}>

        <button type="button"
          className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
        >
          View Details
        </button>
		</Link>

        <button
          type="button"
          className="rounded-full bg-[#dfff00] px-7 py-2.5 text-sm font-bold text-black transition hover:bg-[#c9e600]"
        >
          Mark as Done
        </button>
      </div>
    </div>
  ))
)}

  </div>
);
};

export default TodayPlanCard;