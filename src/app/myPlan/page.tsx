import { ExerciseContext } from "@/Context/ExerciseContext";
import Link from "next/link";
import { useContext } from "react";
import TodayPlanCard from "../components/TodayPlanCard";
import SavedCard from "../components/SavedBtnCard";

export default function MyPlan() {

  return (
    <main className="container mx-auto bg-[#101827] px-6 py-12 text-white">
      <div className=" ">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black uppercase tracking-tight">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-white/60">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-1">
          <div className="grid grid-cols-3">

            <div className="px-6 py-7">
              <p className="text-xs font-semibold text-white/60">
                Exercises
              </p>

              <h2 className="mt-1 text-4xl font-black text-[#dfff00]">
                2
              </h2>
            </div>

            <div className="border-l border-white/10 px-6 py-7">
              <p className="text-xs font-semibold text-white/60">
                Minutes
              </p>

              <h2 className="mt-1 text-4xl font-black">
                23
              </h2>
            </div>

            <div className="border-l border-white/10 px-6 py-7">
              <p className="text-xs font-semibold text-white/60">
                Calories
              </p>

              <h2 className="mt-1 text-4xl font-black">
                190
              </h2>
            </div>

          </div>
        </div>

        {/* Controls */}
        <div className="mt-7 w-full ">

         {/* name of each tab group should be unique */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Today's Plan" defaultChecked  />
  <div className="tab-content border-base-300  p-10"><TodayPlanCard></TodayPlanCard></div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" />
  <div className="tab-content border-base-300  p-10">

<SavedCard></SavedCard></div>


</div>



        </div>




      </div>
    </main>
  );
}