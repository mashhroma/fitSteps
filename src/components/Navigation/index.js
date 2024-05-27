import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <ul className="menu">
            <Link to={`/workouts`}><li className="menu__link">уроки</li></Link>
            <Link to={`/streams`}><li className="menu__link">вебинары</li></Link>
            <Link to={`/articles`}><li className="menu__link">статьи</li></Link>
        </ul>
    );
}