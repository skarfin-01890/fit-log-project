'use client'

import Link from 'next/link';
import React, { useContext } from 'react';
import { ExerciseContext } from '@/Context/ExerciseContext';

const Navbar = () => {
	const links=<div className='flex gap-5 text-gray-300'>

<Link href={"/"}>Workouts</Link>
<Link href={"/myPlan"}>My Plan</Link>


	</div>
	const {todayPlan, setTodayPlan, saveLater, setSavelater}=useContext(ExerciseContext)
	return (

		<div className='bg-black border-b border-gray-900'>
		<div className="navbar  shadow-sm container mx-auto p-3 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">FITLOG</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <a className="">Plan  <span className="bg-[#c2f800] text-black p-1 rounded-full">{todayPlan.length}</span> </a>
	<a className="">Saved {saveLater.length}</a>
  </div>
</div>
</div>
	);
};

export default Navbar;