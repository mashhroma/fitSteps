import React from "react";
import { useLocation } from "react-router-dom";

export default function Title() {
    const {pathname} = useLocation();
    const clear = pathname.split('/')[1];
    let title = '';
    switch (clear) {
        case '':
            title = '';
            break;
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
        case 'subscriptions':
            title = 'Подписки';
            break;
        case 'payment_subscription':
            title = 'Оплата подписки';
            break;
        case 'coach_about':
            title = 'Стать тренером';
            break;
        case 'user_offer':
            title = 'Оферта с пользователем';
            break;
        case 'coach_offer':
            title = 'Оферта с тренером';
            break;
        case 'user_agreement':
            title = 'Пользовательское соглашение';
        case 'confidential_policy':
            title = 'Политика конфиденциальности ';
            break;
        case 'email_confirm':
            title = 'Регистрация завершена';
            break;
        default:
            title = 'Ooops...';
            break;
    }

    return (
        <h1 className="subheader__title">{title}</h1>
    )
}