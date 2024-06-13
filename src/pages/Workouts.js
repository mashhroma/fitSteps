import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TypesContext, DataContext } from "../contexts/ContextProvider";
import Breadcrumbs from "../components/Breadcrumbs";
import WorkoutPreview from "../components/WorkoutPreview";

export default function Workouts() {
    const types = useContext(TypesContext);
    const { workouts } = useContext(DataContext);
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
                <ul className='workouts'>
                    {filteredWorkouts.map(workout => <li key={workout.id}><WorkoutPreview workout={workout} /></li>)}
                </ul>
            </div>
        </section>
    )
}
