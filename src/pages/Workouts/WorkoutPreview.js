import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ActiveUserContext } from "../../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { getCoach, getScheduleHTML, getTypePath, renderFavorite, toggleFavorite } from '../../modules/workoutsFunctions';

export default function WorkoutPreview({ workout, types, profiles }) {
    const typePath = getTypePath(workout, types);
    const schedule = getScheduleHTML(workout);
    const coach = getCoach(workout, profiles);
    const [activeUser, editActiveUser] = useContext(ActiveUserContext);
    const [favoriteIcon, setFavoriteIcon] = useState(renderFavorite(activeUser, workout.id));

    const handleFavorite = () => {
        const newUser = toggleFavorite(activeUser, workout.id);
        editActiveUser(newUser);
        setFavoriteIcon(renderFavorite(activeUser, workout.id));
    }

    useEffect(() => {
        setFavoriteIcon(renderFavorite(activeUser, workout.id));
    }, [activeUser]);

    return (
        <article>
            <div className="favorite" onClick={handleFavorite}>
                {favoriteIcon}
            </div>
            <Link to={`/workouts/${typePath}/${workout.id}`}>
                <li className="workouts__item" key={workout.id}>
                    <span>{workout.type}</span>
                    <b>{workout.title}</b>
                    <img width={380} height={250} className='workouts__preview' src={workout.image} alt="Превью" />
                    <div>
                        <h4>Расписание:</h4>
                        <span>{schedule}</span>
                    </div>
                    <span>Продолжительность: {workout.duration * 60} мин.</span>
                    <h4>Тренер: <Link to={`/coaches/${workout.coachId}`}>{coach.name} {coach.surname}</Link></h4>
                </li>
            </Link>
        </article>
    );
}