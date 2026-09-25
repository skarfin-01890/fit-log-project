import InfoRow from "@/app/components/InfoRow";
import { IExercise } from "@/types/exerciseTypes";
import Image from "next/image";

type ExerciseDetailsProps = {
  exercise: IExercise;
};

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
                {exercise.instructions.map((instruction, index) => (
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
              <button
                type="button"
                className="rounded-xl bg-[#dfff00] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#c9e600]"
              >
                Add to today&apos;s plan
              </button>

              <button
                type="button"
                className="rounded-xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                ♡ Save for later
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;