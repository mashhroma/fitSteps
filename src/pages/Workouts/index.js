import React from "react";
import WorkoutPreview from "./WorkoutPreview";
import Filters from "./Filters";
import { Link, useLocation, useParams } from "react-router-dom";

export function Workouts({ workouts, types }) {
    const {type} = useParams();
    let filteredWorkouts = [];
    if (type) {
        const filterTypes = type.split('+');
        filterTypes.forEach(filterType => {
            const currentWorkouts = workouts.filter(workout => workout.type === filterType);
            filteredWorkouts = [...filteredWorkouts, ...currentWorkouts];
        });
    } else {
        filteredWorkouts = workouts;
    }
    

    return (
        <section>
            <h3 className="breadcrumbs"><Link to='/workouts'>Все занятия</Link></h3>
            <div className="content">
                <Filters types={types} />
                <ul className='workouts'>
                    {filteredWorkouts.map(workout => <WorkoutPreview workout={workout} />)}
                </ul>
            </div>
            
        </section>
    )
}