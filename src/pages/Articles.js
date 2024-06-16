import React, { useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { DataContext } from "../contexts/ContextProvider";
import ArticlePreview from "../components/ArticlePreview";

export default function Articles() {
    const { articles } = useContext(DataContext);

    return (
        <section>
            <Breadcrumbs items={articles} />
            <div className="content">
                <ul className='workouts'>
                    {articles.map(article => <li key={article.id}><ArticlePreview article={article} height={700} /></li>)}
                </ul>
            </div>
        </section>
    )
}

