import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";
import BannerAbout from "./BannerAbout";
import SubscribeHome from "./SubscribeHome";
import Top5Workouts from "./Top5Workouts";
import Top3Articles from "./Top3Articles";
import Top5Streams from "./Top5Streams";

export default function Home() {
    const { workouts } = useContext(DataContext);
    const { streams } = useContext(DataContext);
    const { articles } = useContext(DataContext);

    return (
        <div>
            <BannerAbout />
            <Top5Workouts workouts={workouts} />
            <SubscribeHome />
            <Top5Streams streams={streams} />
            <Top3Articles articles={articles} />
        </div>
    )
}