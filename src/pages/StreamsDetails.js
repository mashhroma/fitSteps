import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { getCoach } from '../modules/workoutsFunctions';
import { ProfilesContext, DataContext } from "../contexts/ContextProvider";

export default function StreamsDetails() {
    const { id } = useParams();
    const profiles = useContext(ProfilesContext);
    const { streams } = useContext(DataContext);
    const stream = streams.find(stream => stream.id === id);
    const [day, time] = stream.date.split('-');
    const coach = getCoach(stream, profiles);

    if (!stream) {
        return <div>Такого вебинара нет.</div>
    }

    return (
        <section className="text">
            <Breadcrumbs items={streams} />

            <h1 className="workouts__title">Вебинар: "{stream.title}"</h1>
            <div className="workouts__info">
                <div className="workouts__left">
                    <p className="workouts__block">Дата вебинара: {day}</p>
                    <p className="workouts__block">Время начала вебинара: {time}</p>
                    <p className="workouts__block">Продолжительность: {stream.duration * 60} мин.</p>
                </div>
                <div className="workouts__right">
                    <p className="workouts__block">{stream.description}</p>
                    <p className="workouts__block">Тренер: <Link to={`/coaches/${stream.coachId}`}>{coach.name} {coach.surname}</Link></p>
                </div>
            </div>
            <div className="workouts__block">Ссылка на вебинар {stream.streamUrl}</div>

            <img className="workouts__img" src={stream.image} alt="Превью" />
            <div className="workouts__block"><Link to='/streams'>К вебинарам</Link></div>

        </section>
    )
}
