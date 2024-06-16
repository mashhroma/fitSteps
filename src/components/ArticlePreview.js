import { useContext } from "react";
import { ProfilesContext } from "../contexts/ContextProvider";
import { Link } from 'react-router-dom';
import { getCoach } from '../modules/workoutsFunctions';

export default function ArticlePreview({ article, width = 800, height = 600 }) {
    const { profiles } = useContext(ProfilesContext);
    const coach = getCoach(article, profiles);

    return (
        <article>
            <Link to={`/articles/${article.id}`}>
                <div className="workouts__item" style={{ width: `${width}px`, height: `${height}px` }}>
                    <b>{article.title}</b>
                    <img className='workouts__preview' src={article.image} alt="Превью" />
                    <div>
                        <h4>Дата: {article.date}</h4>
                    </div>
                    <h4>Автор: <Link to={`/coaches/${article.coachId}`}>{coach.name} {coach.surname}</Link></h4>
                </div>
            </Link>
        </article>
    );
}

