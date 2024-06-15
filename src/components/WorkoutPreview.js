import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ActiveUserContext, ProfilesContext, TypesContext } from "../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { getCoach, getScheduleHTML, getTypePath, renderFavorite, toggleFavorite } from '../modules/workoutsFunctions';
import axios from "axios";

export default function WorkoutPreview({ workout, width = 400, height = 500 }) {
    const types = useContext(TypesContext);
    const { profiles } = useContext(ProfilesContext);
    const typePath = getTypePath(workout, types);
    const schedule = getScheduleHTML(workout);
    const coach = getCoach(workout, profiles);
    const [activeUser, editActiveUser] = useContext(ActiveUserContext);
    const [favoriteIcon, setFavoriteIcon] = useState(renderFavorite(activeUser, workout.id));

    const handleFavorite = () => {
        const newUser = toggleFavorite(activeUser, workout.id);
        editActiveUser(newUser);
        localStorage.setItem('activeUser', JSON.stringify(newUser));
        axios.put(`https://66598df5de346625136ceaa4.mockapi.io/profiles/${newUser.id}`, newUser);
        setFavoriteIcon(renderFavorite(activeUser, workout.id));
    }

    useEffect(() => {
        setFavoriteIcon(renderFavorite(activeUser, workout.id));
    }, [activeUser]);

    return (
        <article>
            {activeUser &&
                <div className="favorite" onClick={handleFavorite}>{favoriteIcon}</div>}

            <Link to={`/workouts/${typePath}/${workout.id}`}>
                <div className="workouts__item" style={{ width: `${width}px`, height: `${height}px` }}>
                    <span>{workout.type}</span>
                    <b>{workout.title}</b>
                    <img className='workouts__preview' src={workout.image} alt="Превью" />
                    <div>
                        <h4>Расписание:</h4>
                        <span>{schedule}</span>
                    </div>
                    <span>Продолжительность: {workout.duration * 60} мин.</span>
                    <h4>Тренер: <Link to={`/coaches/${workout.coachId}`}>{coach.name} {coach.surname}</Link></h4>
                </div>
            </Link>
        </article>
    );
}