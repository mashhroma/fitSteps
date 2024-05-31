import React from "react";
import { Link } from 'react-router-dom';
import { getCoach, getScheduleHTML, getTypePath } from "./modules";

export default function WorkoutPreview({ workout, types, coaches }) {
    const typePath = getTypePath(workout, types);
    const schedule = getScheduleHTML(workout);
    const coach = getCoach(workout, coaches);

    return (
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
    )
}