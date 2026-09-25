import { IExercise } from '@/types/exerciseTypes';
import React from 'react';
import ExerciseCard from './ExerciseCard';



const dataFetching=async()=>{
const res=await fetch(" https://api.abcz.workers.dev/api/fitlog")
const data=await res.json()
return data

}

const ExerciseLibrary = async() => {
	const exerciseData=await dataFetching()
	console.log(exerciseData)
	return (
		<section className='container mx-auto mt-16'>
			<h1 className='font-extrabold text-4xl mb-2'>THE LIBRARY</h1>
			<p className='text-gray-500 text-xl'>Twelve lifts covering every major muscle group.</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">

				{
					exerciseData.map((exercise:IExercise)=>(
						<ExerciseCard exercise={exercise} key={exercise.id}></ExerciseCard>
					))
				}
			</div>
		</section>
	);
};

export default ExerciseLibrary;