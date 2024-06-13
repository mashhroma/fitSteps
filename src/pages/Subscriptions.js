import { Link } from "react-router-dom";

export default function Subscriptions() {
    return (
        <section className="text">
            <h2>Варианты подписок</h2>
            <ul className="subscriptions">
                <li className="subscriptions__item">
                    <h4>Месяц</h4>
                    <p>199 руб.</p>
                    <Link to='/payment_subscription/monthly'>
                        <button className="button">Подписаться</button>
                    </Link>

                </li>
                <li className="subscriptions__item">
                    <h4>Полгода</h4>
                    <p>999 руб.</p>
                    <Link to='/payment_subscription/half_yearly'>
                        <button className="button">Подписаться</button>
                    </Link>
                </li>
                <li className="subscriptions__item">
                    <h4>Год</h4>
                    <p>1899 руб.</p>
                    <Link to='/payment_subscription/yearly'>
                        <button className="button">Подписаться</button>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
