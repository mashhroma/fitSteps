import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProfilesContext, DataContext } from "../../contexts/ContextProvider";

export default function CoachPublicPage() {
    const { workouts } = useContext(DataContext);
    const coaches = useContext(ProfilesContext);

    const { id } = useParams();
    const coach = coaches.find(coach => coach.id === id);
    const coachWorkouts = workouts.filter(workout => workout.coachId === coach.id);

    return (
        <section className="text">
            <h2>Тренер: {coach.name} {coach.surname}</h2>
            <h3>Проводит онлайн-занятия:</h3>
            <ul>
                {coachWorkouts.map(coachWorkout => {
                    return <li>{coachWorkout.title}</li>
                })}
            </ul>

        </section>
    )
}