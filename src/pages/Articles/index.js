import React, { useContext } from "react";
// import Filters from "./Filters";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ProfilesContext, DataContext } from "../../contexts/ContextProvider";
import ArticlePreview from "./ArticlePreview";

export default function Articles() {
    const { articles } = useContext(DataContext);
    const profiles = useContext(ProfilesContext);

    return (
        <section>
            <Breadcrumbs items={articles} />
            <div className="content">
                {/* <Filters types={types} /> */}
                <ul className='workouts'>
                    {articles.map(article => <ArticlePreview article={article} profiles={profiles} />)}
                </ul>
            </div>
        </section>
    )
}
