import React, { useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { DataContext } from "../contexts/ContextProvider";
import StreamPreview from "../components/StreamPreview";

export default function Streams() {
    const { articles } = useContext(DataContext);

    return (
        <section>
            <Breadcrumbs items={articles} />
            <div className="content">
                <ul className='workouts'>
                    {articles.map(stream => <li key={stream.id}><StreamPreview stream={stream} /></li>)}
                </ul>
            </div>
        </section>
    )
}
