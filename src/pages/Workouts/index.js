import React from "react";
import WorkoutPreview from "./WorkoutPreview";
import Filters from "./Filters";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";

export function Workouts({ workouts, types }) {
    const {typePath} = useParams();
    let filteredWorkouts = [];
    if (typePath) {
        const type = types.find(type => type.path === typePath);
        filteredWorkouts = workouts.filter(workout => workout.type === type.name);
    } else {
        filteredWorkouts = workouts;
    }

    return (
        <section>
            <Breadcrumbs types={types} />
            <div className="content">
                <Filters types={types} />
                <ul className='workouts'>
                    {filteredWorkouts.map(workout => <WorkoutPreview workout={workout} types={types} />)}
                </ul>
            </div>
            
        </section>
    )
}