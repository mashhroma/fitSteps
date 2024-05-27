import React from "react";
import { useLocation } from "react-router-dom";

export default function Title() {
    const {pathname} = useLocation();
    const clear = pathname.split('/')[1];
    let title = '';
    switch (clear) {
        case 'workouts':
            title = 'Онлайн-занятия';
            break;
        case 'streams':
            title = 'Вебинары';
            break;
        case 'articles':
            title = 'Статьи';
            break;
        case 'about':
            title = 'О платформе';
            break;
        case 'contacts':
            title = 'Контакты';
            break;
        default:
            break;
    }

    return (
        <h1 className="heading__title">{title}</h1>
    )
}