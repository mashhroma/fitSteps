import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProfilesContext, DataContext } from "../contexts/ContextProvider";
import WorkoutPreview from "../components/WorkoutPreview";

export default function CoachPublicPage() {
    const { workouts } = useContext(DataContext);
    const { profiles } = useContext(ProfilesContext);

    const { id } = useParams();
    const coach = profiles.find(coach => coach.id === id);
    const coachWorkouts = workouts.filter(workout => workout.coachId === coach.id);

    return (
        <div className="personal">
            <section className="personal__data">
                <div className="personal__avatar">
                    <img src={coach.avatar || null} alt="Avatar" />
                </div>
                <div className="personal__info">
                    <div className="personal__info-item">
                        <span>Имя</span>
                        <input id="name" type="text" value={coach.name} />
                    </div>
                    <div className="personal__info-item">
                        <span>Фамилия</span>
                        <input id="surname" type="text" value={coach.surname} />
                    </div>
                </div>
                <div className="personal__about">
                    <h3>О тренере</h3>
                    <textarea id="about" type="text" value={coach.about} />
                </div>
            </section>
            <section className="favorites">
                <h3>Занятия, которые проводит тренер</h3>
                {coachWorkouts.length > 0 ?
                    <ul className="workouts">
                        {coachWorkouts.map(workout => <li key={workout.id}><WorkoutPreview workout={workout} width={200} height={400} /></li>)}
                    </ul> :
                    <p>У тренера пока нет занятий.</p>}
            </section>
        </div>
    )
}

