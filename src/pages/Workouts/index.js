import React, { useContext } from "react";
import WorkoutPreview from "./WorkoutPreview";
import Filters from "./Filters";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ProfilesContext, TypesContext, DataContext } from "../../contexts/ContextProvider";

export default function Workouts() {
    const { workouts } = useContext(DataContext);
    const types = useContext(TypesContext);
    const profiles = useContext(ProfilesContext);
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
                    {filteredWorkouts.map(workout => <WorkoutPreview workout={workout} types={types} profiles={profiles} />)}
                </ul>
            </div>
        </section>
    )
}
