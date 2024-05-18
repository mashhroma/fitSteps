import React from "react";

export function Workouts({ workouts }) {
    return (
        <div>
            {workouts.map(workout => <li key={workout.id}>
                <span>{workout.name}</span>
                <img className='Workouts__preview' src={workout.image} alt="Превью" />
                <span>{workout.date} {workout.duration}</span>
            </li>)}
        </div>
    )
}