import React from "react";

export default function Subscriptions() {
    return (
        <section className="text">
            <h2>Варианты подписок</h2>
            <ul className="subscriptions">
                <li className="subscriptions__item">
                    <h4>Месяц</h4>
                    <p>199 руб.</p>
                    <button className="button">Подписаться</button>
                </li>
                <li className="subscriptions__item">
                    <h4>Полгода</h4>
                    <p>999 руб.</p>
                    <button className="button">Подписаться</button>
                </li>
                <li className="subscriptions__item">
                    <h4>Год</h4>
                    <p>1899 руб.</p>
                    <button className="button">Подписаться</button>
                </li>
            </ul>
        </section>
    )
}