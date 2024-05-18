import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer>
            <menu>
                <ul>
                    <li><Link to='/about'>О платформе FitSteps.ru</Link></li>
                    <li><Link to='/contacts'>Контактная информация</Link></li>
                    <li><Link to='/user_offer'>Оферта с пользователем</Link></li>
                    <li><Link to='/coach_offer'>Оферта с тренером</Link></li>
                    <li><Link to='/user_agreement'>Пользовательское соглашение</Link></li>
                    <li><Link to='/confidential_policy'>Политика конфиденциальности</Link></li>
                </ul>
                <ul>
                    <li><Link to='/workouts'>Занятия</Link></li>
                    <li><Link to='/channels'>Каналы</Link></li>
                    <li><Link to='/discussions'>Форум</Link></li>
                </ul>
            </menu>
            <div>2024</div>
        </footer>
    )
}