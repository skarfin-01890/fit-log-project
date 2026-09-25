import InfoRow from "@/app/components/InfoRow";
import SavedBtn from "@/app/components/sharedBtn/SavedBtn";
import TodayplanBtn from "@/app/components/sharedBtn/TodayplanBtn";
import { IExercise } from "@/types/exerciseTypes";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { toast } from "react-toastify";


const CardDetails = async ({ params, }: { params: Promise<{ id: string }>; }) =>
	{ const { id } = await params;


const res = await fetch( `https://api.abcz.workers.dev/api/fitlog/${id}` );
 const exercise = await res.json();

  return (
    <section className="min-h-screen bg-[#101827] px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[588px_1fr]">

          {/* Image */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl lg:h-[735px]">
            <Image
              src={exercise.image}
              alt={exercise.name}

              className="object-cover"
               fill

              sizes="(max-width: 1024px) 100vw, 588px"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            {/* Title */}
            <div>
              <h1 className="text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
                {exercise.name}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
                {exercise.description}
              </p>
            </div>

            {/* Muscle Groups */}
            <div className="mt-6 flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#dfff00] px-4 py-2 text-xs font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Information */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">

              <InfoRow
                label="Equipment"
                value={exercise.equipment}
              />

              <InfoRow
                label="Difficulty"
                value={exercise.difficulty}
              />

              <InfoRow
                label="Sets"
                value={exercise.sets}
              />

              <InfoRow
                label="Reps"
                value={exercise.reps}
              />

              <InfoRow
                label="Duration"
                value={`${exercise.duration} min`}
              />

              <InfoRow
                label="Calories"
                value={`${exercise.caloriesBurned} kcal`}
              />

              <InfoRow
                label="Rating"
                value={exercise.rating}
              />
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-xl font-bold uppercase">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {exercise.instructions.map((instruction:string, index:number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-white/75"
                  >
                    <span className="font-bold text-white">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
             <TodayplanBtn exercise={exercise}></TodayplanBtn>

              <SavedBtn exercise={exercise}></SavedBtn>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;