import React from "react";
import { Link, useParams } from "react-router-dom";

export default function PaymentPage() {
    const {subscribeType} = useParams();
    let price = 0;
    let type = '';
    switch (subscribeType) {
        case 'monthly':
            price = 199;
            type = 'Ежемесячная';
            break;
        case 'half_yearly':
            price = 999;
            type = 'Полугодовая';
            break;
        case 'yearly':
            price = 1899
            type = 'Годовая';
            break;
        default:
            break;
    }

    return (
        <section className="text">
            <h2>Вы выбрали подписку "{type}"!</h2>
            <h3>Стоимость подписки: {price} руб.</h3>
            <p>Перед оплатой просьба ознакомиться с <Link to='/user_offer'>договором оферты</Link>.</p>
            <form className="form" action="#">
                <span>Сумма к оплате: </span>
                <input className="form__input" type="text" value={price} />
                <p>
                    <input type="checkbox" name="agree" id="agree" />
                    <label htmlFor="agree">Я согласен с условиями договора оферты.</label>
                </p>
                <button className="button">Оплатить</button>
            </form>
            <h3>Вернуться к выбору <Link to='/subscriptions'>подписки</Link>.</h3>
        </section>
    )
}