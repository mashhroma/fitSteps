import { useContext } from "react";
import { ProfilesContext } from "../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { getCoach } from '../modules/workoutsFunctions';

export default function StreamPreview({ stream, width = 400, height = 500 }) {
    const { profiles } = useContext(ProfilesContext);
    const [date, time] = stream.date.split('-');
    const coach = getCoach(stream, profiles);

    return (
        <article>
            <Link to={`/streams/${stream.id}`}>
                <div className="workouts__item" style={{ width: `${width}px`, height: `${height}px` }}>
                    <b>{stream.title}</b>
                    <img className='workouts__preview' src={stream.image} alt="Превью" />
                    <div>
                        <h4>Дата: {date}</h4>
                        <span>Время: {time}</span>
                    </div>
                    <span>Продолжительность: {stream.duration * 60} мин.</span>
                    <h4>Тренер: <Link to={`/coaches/${stream.coachId}`}>{coach.name} {coach.surname}</Link></h4>
                </div>
            </Link>
        </article>
    );
}
