import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ActiveUserContext } from "../../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { getCoach, renderFavorite, toggleFavorite } from '../../modules/workoutsFunctions';

export default function StreamPreview({ stream, profiles }) {
    const [date, time] = stream.date.split('-');
    const coach = getCoach(stream, profiles);
    const [activeUser, editActiveUser] = useContext(ActiveUserContext);
    const [favoriteIcon, setFavoriteIcon] = useState(renderFavorite(activeUser, stream.id));

    const handleFavorite = () => {
        const newUser = toggleFavorite(activeUser, stream.id);
        editActiveUser(newUser);
        setFavoriteIcon(renderFavorite(activeUser, stream.id));
    }

    useEffect(() => {
        setFavoriteIcon(renderFavorite(activeUser, stream.id));
    }, [activeUser]);

    return (
        <article>
            <div className="favorite" onClick={handleFavorite}>
                {favoriteIcon}
            </div>
            <Link to={`/streams/${stream.id}`}>
                <li className="workouts__item" key={stream.id}>
                    <b>{stream.title}</b>
                    <img width={380} height={250} className='workouts__preview' src={stream.image} alt="Превью" />
                    <div>
                        <h4>Дата: {date}</h4>
                        <span>Время: {time}</span>
                    </div>
                    <span>Продолжительность: {stream.duration * 60} мин.</span>
                    <h4>Тренер: <Link to={`/coaches/${stream.coachId}`}>{coach.name} {coach.surname}</Link></h4>
                </li>
            </Link>
        </article>
    );
}
