import BannerAbout from "./BannerAbout";
import Top5Items from "./Top5Items";
import SubscribeHome from "./SubscribeHome";
import Top3Articles from "./Top3Articles";
import { useContext } from "react";
import { WorkoutsContext } from "../../contexts/ContextProvider";

export default function Home() {
    const workouts = useContext(WorkoutsContext);

    return (
        <div>
            <BannerAbout />
            <Top5Items title='ТОП-5 онлайн-занятий' link='/workouts' items={workouts} />
            <SubscribeHome />
            <Top5Items title='Ближайшие вебинары' link='/streams' items={workouts} />
            <Top3Articles />
        </div>
    )
}