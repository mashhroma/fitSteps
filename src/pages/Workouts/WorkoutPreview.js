import React from "react";
import { Link } from 'react-router-dom';

export default function WorkoutPreview({ workout }) {
    return (
        <Link to={`/workouts/all/${workout.id}`}>
            <li className="workouts__item" key={workout.id}>
                <span>{workout.type}</span>
                <b>{workout.title}</b>
                <img width={380} height={250} className='workouts__preview' src={workout.image} alt="Превью" />
                <span>Продолжительность: {workout.duration*60} мин.</span>
            </li>
        </Link>
    )
}