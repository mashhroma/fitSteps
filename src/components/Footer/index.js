import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <menu className="footer_menu">
                <ul className="footer__menu-left">
                    <li><Link to='/about'>О платформе FitSteps.ru</Link></li>
                    <li><Link to='/contacts'>Контактная информация</Link></li>
                    <li><Link to='/user_offer'>Оферта с пользователем</Link></li>
                    <li><Link to='/coach_offer'>Оферта с тренером</Link></li>
                    <li><Link to='/user_agreement'>Пользовательское соглашение</Link></li>
                    <li><Link to='/confidential_policy'>Политика конфиденциальности</Link></li>
                </ul>
                <ul className="footer__menu-right">
                    <li><Link to='/workouts'>Занятия</Link></li>
                    <li><Link to='/streams'>Вебинары</Link></li>
                    <li><Link to='/articles'>Статьи</Link></li>
                </ul>
            </menu>
            <div className="footer__date">2024</div>
        </footer>
    )
}