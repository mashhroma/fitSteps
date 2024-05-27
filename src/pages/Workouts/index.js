import React from "react";
import WorkoutPreview from "./WorkoutPreview";

export function Workouts({ workouts }) {
    return (
        <section>
            <h1>Все занятия</h1>
            <ul className='workouts'>
                {workouts.map(workout => <WorkoutPreview workout={workout} />)}
            </ul>
        </section>
    )
}