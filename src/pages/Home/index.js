import BannerAbout from "./BannerAbout";
import Top5Items from "./Top5Items";
import SubscribeHome from "./SubscribeHome";
import Top3Articles from "./Top3Articles";

export function Home({ workouts }) {
    return (
        <div>
            <BannerAbout />
            <Top5Items title='ТОП-5 онлайн-занятий' items={workouts} />
            <SubscribeHome />
            <Top5Items title='Ближайшие вебинары' items={workouts} />
            <Top3Articles />
        </div>
    )
}