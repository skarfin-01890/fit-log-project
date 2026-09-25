import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { IExercise } from "@/types/exerciseTypes";
import Link from "next/link";



interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link href={`exercises/${exercise.id}`} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 rounded-2xl border border-[#2a2d35] bg-[#17191f]">

      {/* Image */}
      <div className="relative h-[205px] w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Muscle Groups */}
        <div className="mb-5 flex gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2 className="text-2xl font-extrabold uppercase text-white">
          {exercise.name}
        </h2>

        {/* Equipment */}
        <p className="mt-2 text-sm text-gray-400">
          {exercise.equipment}
        </p>

        {/* Bottom information */}
        <div className="mt-6 flex items-center gap-4 border-t border-[#282b34] pt-4 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{exercise.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <Flame size={16} />
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <Star size={16} />
            <span>{exercise.rating}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;