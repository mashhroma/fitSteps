import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export function Navigation() {
    return (
        <ul className="menu">
            <Link to={`/workouts`}><li className="menu__link">уроки</li></Link>
            <li className="menu__link">каналы</li>
            <li className="menu__link">форум</li>
        </ul>
    );
}