import React from 'react';


export function Top5workouts({ workouts }) {

    return (
        <ul className='Workouts'>
            {workouts.map(workout => {
                return <li className='Workouts__mini' key={workout.id}>
                    <span>{workout.name}</span>
                    <img className='Workouts__preview' src={workout.image} alt='Превью' />
                    <span>{workout.date} {workout.duration}</span>
                </li>
            })}
        </ul>
    )
}