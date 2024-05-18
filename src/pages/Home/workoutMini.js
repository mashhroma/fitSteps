import React from 'react';

export function workoutMini(workout) {
    return (
        <li className='Workouts__mini'>
            <span>{workout.name}</span>
            <img className='Workouts__preview' src={workout.image} />
            <span>{workout.date} {workout.duration}</span>
        </li>
    )
}