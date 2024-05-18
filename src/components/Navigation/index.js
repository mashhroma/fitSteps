import React from 'react';
import './style.css';

export function Navigation() {
    return (
        <ul className="menu">
            <li className="menu__link">уроки</li>
            <li className="menu__link">каналы</li>
            <li className="menu__link">форум</li>
        </ul>
    );
}