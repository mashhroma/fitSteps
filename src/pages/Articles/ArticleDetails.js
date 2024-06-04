import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import Breadcrumbs from "../../components/Breadcrumbs";
import { getCoach, renderFavorite, toggleFavorite } from '../../modules/workoutsFunctions';
import { ActiveUserContext, ProfilesContext, DataContext } from "../../contexts/ContextProvider";

export default function ArticleDetails() {
    const { id } = useParams();
    const profiles = useContext(ProfilesContext);
    const [activeUser, editActiveUser] = useContext(ActiveUserContext);
    const { articles } = useContext(DataContext);
    const article = articles.find(article => article.id === id);
    const coach = getCoach(stream, profiles);

    const [favoriteIcon, setFavoriteIcon] = useState(renderFavorite(activeUser, article.id));

    const handleFavorite = () => {
        const newUser = toggleFavorite(activeUser, article.id);
        editActiveUser(newUser);
        setFavoriteIcon(renderFavorite(activeUser, article.id));
    }

    useEffect(() => {
        setFavoriteIcon(renderFavorite(activeUser, article.id));
    }, [activeUser]);

    if (!stream) {
        return <div>Такого занятие нет.</div>
    }

    return (
        <section className="text">
            <Breadcrumbs items={article} />

            <h1 className="workouts__title">Статья: "{article.title}"</h1>
            <div className="favorite-details" onClick={handleFavorite}>
                {favoriteIcon}
            </div>
            <div className="workouts__info">
                <div className="workouts__left">
                    <p className="workouts__block">Дата: {date}</p>
                </div>
                <div className="workouts__right">
                    <p className="workouts__block">Автор: {coach.name} {coach.surname}</p>
                </div>
                <p className="workouts__block">{article.text}</p>
            </div>
            <div className="workouts__block"><Link to='/articles'>К статьям</Link></div>
        </section>
    )
}