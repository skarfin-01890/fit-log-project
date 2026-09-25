import Image from 'next/image';
import BannerImg from "../../assets/banner.png";
import React from 'react';

const Bannner = () => {
	return (
		<div className="bg-[#222630] w-full min-h-[446px] rounded-2xl container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center border border-gray-600 mt-12 gap-8 p-6 lg:p-12">

  {/* Text */}
  <div className="space-y-6 text-center lg:text-left">
    <p className="text-[#c2f800]">WORKOUT LIBRARY</p>

    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
      TRAIN WITH INTENT. LOG
      <br className="hidden sm:block" />
      EVERY SET.
    </h1>

    <p className="text-gray-400 text-sm sm:text-base">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      <br className="hidden sm:block" />
      into today's plan, and watch the week's work add up.
    </p>

    <button className="btn bg-[#c2f800] text-black">
      BROWSE WORKOUTS
    </button>
  </div>

  {/* Image */}
  <div>
    <Image
      src={BannerImg}
      alt="train image"
      width={334}
      height={334}
      className="w-[220px] sm:w-[280px] lg:w-[334px] h-auto"
    />
  </div>

</div>
	);
};

export default Bannner;