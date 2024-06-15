import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <menu className="footer__menu">
                <ul className="footer__menu-left">
                    <li><Link to='/about'>О платформе FitSteps.ru</Link></li>
                    <li><Link to='/contacts'>Контактная информация</Link></li>
                    <li><Link to='/subscriptions'>Оформить подписку</Link></li>
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
                <ul className="footer__menu-coach">
                    <li><Link to='/coach_about'>Стать тренером</Link></li>
                </ul>
            </menu>
            <div className="footer__copyright">
                <b>&copy; 2024 Это учебный проект Марии Савкиной</b><br />
                Вся информация на сайте несет исключительно информационный характер и создана для имитации работающего сайта в рамках дипломного проекта по специализации Frontend React.</div>
        </footer>
    )
}