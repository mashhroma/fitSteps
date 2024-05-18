import React from "react";
import './Home.css';
import { BannerAbout } from "./BannerAbout";
import { Top5workouts } from "./Top5workouts";
import { SubscribeHome } from "./SubscribeHome";




export function Home({ workouts }) {
    return (
        <div>
            <BannerAbout />
            <Top5workouts workouts={workouts} />
            <SubscribeHome />
        </div>
    )
}