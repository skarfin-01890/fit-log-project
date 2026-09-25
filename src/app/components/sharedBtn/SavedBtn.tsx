"use client";

import { ExerciseContext } from "@/Context/ExerciseContext";
import { IExercise } from "@/types/exerciseTypes";
import React, { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { toast } from "react-toastify";

const SavedBtn = ({ exercise }: { exercise: IExercise }) => {
  const context = useContext(ExerciseContext);

  

  const { saveLater,setSavelater } = context;

  const handleSavebtn = () => {
    const alreadyAdded = saveLater.some(
      (item) => item.id === exercise.id
    );

    if (alreadyAdded) {
      toast.error("Card already Saved for later!");
      return;
    }

    setSavelater([...saveLater,exercise]);

    toast.success(`${exercise.name} Saved for later`);
  };

  return (
    <div>
      <button type="button" onClick={()=> handleSavebtn()} className=" flex items-center gap-2  rounded-xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                <FaBookmark /> Save for later
              </button>
    </div>
  );
};

export default SavedBtn;