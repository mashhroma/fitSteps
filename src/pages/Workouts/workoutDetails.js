import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import Breadcrumbs from "../../components/breadcrumbs";
import { getCoach, getDescription, getScheduleHTML, getClosestStreamDate } from "./modules";
import { TypesContext, WorkoutsContext } from "../../contexts/ContextProvider";

export default function WorkoutDetails() {
    const workouts = useContext(WorkoutsContext);
    const types = useContext(TypesContext);

    const { id } = useParams();
    const workout = workouts.find(workout => workout.id === id);
    const schedule = getScheduleHTML(workout);
    const coach = getCoach(workout);
    const description = getDescription(workout, types);
    const streamDate = getClosestStreamDate(workout);

    if (!workout) {
        return <div>Такого занятие нет.</div>
    }

    return (
        <section className="text">
            <Breadcrumbs items={workouts} types={types} />

            <h1 className="workouts__title">Курс занятий: "{workout.title}"</h1>

            <div className="workouts__info">
                <div className="workouts__left">
                    <p className="workouts__block">Дата ближайшего занятия: {streamDate}</p>
                    <div className="workouts__block">
                        <h3>Расписание:</h3>
                        <ul>
                            {schedule}
                        </ul>
                    </div>
                    <p className="workouts__block">Продолжительность: {workout.duration * 60} мин.</p>
                </div>
                <div className="workouts__right">
                    <p className="workouts__block">{description}</p>
                    <p className="workouts__block">Тренер: {coach.name} {coach.surname}</p>
                </div>
            </div>
            <div className="workouts__block">Ссылка на ближайшее онлайн-занятие: {workout.streamUrl}</div>

            <img className="workouts__img" src={workout.image} alt="Превью" />
            <div className="workouts__block"><Link to='/workouts'>К занятиям</Link></div>
        </section>
    )
}