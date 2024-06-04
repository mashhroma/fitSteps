import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs";
import { getCoach, getDescription, getScheduleHTML, getClosestStreamDate, renderFavorite, toggleFavorite } from '../../modules/workoutsFunctions';
import { ActiveUserContext, ProfilesContext, TypesContext, DataContext } from "../../contexts/ContextProvider";

export default function StreamsDetails() {
    const { id } = useParams();
    const profiles = useContext(ProfilesContext);
    const [activeUser, editActiveUser] = useContext(ActiveUserContext);
    const { streams } = useContext(DataContext);
    const stream = streams.find(stream => stream.id === id);
    const [date, time] = stream.date.split('-');
    const coach = getCoach(stream, profiles);

    const [favoriteIcon, setFavoriteIcon] = useState(renderFavorite(activeUser, stream.id));

    const handleFavorite = () => {
        const newUser = toggleFavorite(activeUser, stream.id);
        editActiveUser(newUser);
        setFavoriteIcon(renderFavorite(activeUser, stream.id));
    }

    useEffect(() => {
        setFavoriteIcon(renderFavorite(activeUser, stream.id));
    }, [activeUser]);

    if (!stream) {
        return <div>Такого занятие нет.</div>
    }

    return (
        <section className="text">
            <Breadcrumbs items={streams} />

            <h1 className="workouts__title">Курс занятий: "{stream.title}"</h1>
            <div className="favorite-details" onClick={handleFavorite}>
                {favoriteIcon}
            </div>
            <div className="workouts__info">
                <div className="workouts__left">
                    <p className="workouts__block">Дата вебинара: {date}</p>
                    <p className="workouts__block">Время начала вебинара: {time}</p>
                    <p className="workouts__block">Продолжительность: {stream.duration * 60} мин.</p>
                </div>
                <div className="workouts__right">
                    <p className="workouts__block">{stream.description}</p>
                    <p className="workouts__block">Тренер: {coach.name} {coach.surname}</p>
                </div>
            </div>
            <div className="workouts__block">Ссылка на ближайшее онлайн-занятие: {stream.streamUrl}</div>

            <img className="workouts__img" src={stream.image} alt="Превью" />
            <div className="workouts__block"><Link to='/workouts'>К занятиям</Link></div>
        </section>
    )
}