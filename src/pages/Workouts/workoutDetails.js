import React from "react";
import { useParams, Link } from "react-router-dom";

export function WorkoutDetails({ workouts }) {
    const { id } = useParams();
    const workout = workouts.find(workout => workout.id === parseInt(id));

    if (!workout) {
        return <div>Такого занятие нет.</div>
    }

    return (
        <section>
            <h1>{workout.name}</h1>
            <p>Дата начала: {workout.date}</p>
            <p>Продолжительность {workout.duration}</p>
            {/* <p>{workout.description}</p> */}
            <img src={workout.image} alt="Превью" />
            {/* <p><Link to={workout.url}>Вход на онлайн-занятие</Link></p> */}
            <Link to='/workouts'>К занятиям</Link>
        </section>
    )
}