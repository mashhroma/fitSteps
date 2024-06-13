import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { getCoach } from '../modules/workoutsFunctions';
import { ProfilesContext, DataContext } from "../contexts/ContextProvider";

export default function ArticleDetails() {
    const { id } = useParams();
    const profiles = useContext(ProfilesContext);
    const { articles } = useContext(DataContext);
    const article = articles.find(article => article.id === id);
    const coach = getCoach(article, profiles);

    console.log(article);

    if (!article) {
        return <div>Такой статьи нет.</div>
    }

    return (
        <section className="text">
            <Breadcrumbs items={articles} />

            <h1 className="workouts__title">Статья: "{article.title}"</h1>
            <p className="workouts__block">Дата: {article.date}</p>
            <p className="workouts__block">Автор: <Link to={`/coaches/${article.coachId}`}>{coach.name} {coach.surname}</Link></p>
            <p className="workouts__block">{article.text}</p>
            <div className="workouts__block"><Link to='/articles'>К статьям</Link></div>

        </section>
    )
}
