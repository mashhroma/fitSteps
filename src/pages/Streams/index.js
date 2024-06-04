import React, { useContext } from "react";
// import Filters from "./Filters";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ProfilesContext, DataContext } from "../../contexts/ContextProvider";
import StreamPreview from "./StreamPreview";

export default function Streams() {
    const { streams } = useContext(DataContext);
    console.log(streams);
    const profiles = useContext(ProfilesContext);

    return (
        <section>
            <Breadcrumbs items={streams} />
            <div className="content">
                {/* <Filters types={types} /> */}
                <ul className='workouts'>
                    {streams.map(stream => <StreamPreview stream={stream} profiles={profiles} />)}
                </ul>
            </div>
        </section>
    )
}
