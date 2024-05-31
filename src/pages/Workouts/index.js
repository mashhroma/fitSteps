import React, { useContext } from "react";
import WorkoutPreview from "./WorkoutPreview";
import Filters from "./Filters";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import { ProfilesContext, TypesContext, WorkoutsContext } from "../../contexts/ContextProvider";

export default function Workouts() {
    const workouts = useContext(WorkoutsContext);
    const types = useContext(TypesContext);
    const coaches = useContext(ProfilesContext);

    const { typePath } = useParams();

    let filteredWorkouts = [];
    if (typePath) {
        const type = types.find(type => type.path === typePath);
        filteredWorkouts = workouts.filter(workout => workout.type === type.name);
    } else {
        filteredWorkouts = workouts;
    }

    return (
        <section>
            <Breadcrumbs items={workouts} types={types} />
            <div className="content">
                <Filters types={types} />
                <ul className='workouts'>
                    {filteredWorkouts.map(workout => <WorkoutPreview workout={workout} types={types} coaches={coaches} />)}
                </ul>
            </div>

        </section>
    )
}