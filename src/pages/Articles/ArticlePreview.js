import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ActiveUserContext } from "../../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { getCoach, renderFavorite, toggleFavorite } from '../../modules/workoutsFunctions';

export default function StreamPreview({ article, profiles }) {
    const coach = getCoach(article, profiles);
    const [activeUser, editActiveUser] = useContext(ActiveUserContext);
    const [favoriteIcon, setFavoriteIcon] = useState(renderFavorite(activeUser, article.id));

    const handleFavorite = () => {
        const newUser = toggleFavorite(activeUser, article.id);
        editActiveUser(newUser);
        setFavoriteIcon(renderFavorite(activeUser, article.id));
    }

    useEffect(() => {
        setFavoriteIcon(renderFavorite(activeUser, article.id));
    }, [activeUser]);

    return (
        <article>
            <div className="favorite" onClick={handleFavorite}>
                {favoriteIcon}
            </div>
            <Link to={`/article/${article.id}`}>
                <li className="workouts__item" key={article.id}>
                    <b>{stream.title}</b>
                    <img width={380} height={250} className='workouts__preview' src={article.image} alt="Превью" />
                    <div>
                        <h4>Дата: {article.date}</h4>
                    </div>
                    <h4>Автор: <Link to={`/coaches/${article.coachId}`}>{coach.name} {coach.surname}</Link></h4>
                </li>
            </Link>
        </article>
    );
}