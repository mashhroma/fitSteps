import React from "react";
import { Link } from 'react-router-dom';

export default function WorkoutPreview({ workout }) {
    return (
        <Link to={`/workouts/${workout.id}`}>
            <li className="workouts__item" key={workout.id}>
                <span>{workout.name}</span>
                <img className='workouts__preview' src={workout.image} alt="Превью" />
                <span>{workout.date} {workout.duration}</span>
            </li>
        </Link>
    )
}