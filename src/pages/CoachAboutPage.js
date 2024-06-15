import { Link } from "react-router-dom";
import { ActiveCoachContext } from "../contexts/ContextProvider";
import { useContext } from "react";

export default function CoachAboutPage({ toggleCoachRegForm, toggleCoachLoginForm }) {
    const { activeCoach, setActiveCoach } = useContext(ActiveCoachContext);

    const removeActiveCoach = () => {
        if (activeCoach) {
            localStorage.removeItem('activeCoach');
            setActiveCoach(null);
        }
    };

    return (
        <section className="text">
            {activeCoach ?
                <div className="coach coach__button">
                    <Link to={`/profiles/${activeCoach.id}`}><h3>Страница тренера: {activeCoach.name} {activeCoach.surname}</h3></Link>
                    <button className='button' onClick={removeActiveCoach}>выйти</button>
                </div> :
                <div className="coach coach__button">
                    <button className="button" onClick={toggleCoachLoginForm}>Войти в личный кабинет</button>
                </div>}

            <div className="coach coach__banner">
                <ul>
                    <li>Удобная площадка</li>
                    <li>Создавайте тренировки по своим методикам</li>
                    <li>Выбирайте любое время для своего расписания</li>
                    <li>Пишите статьи и поднимайте рейтинг своих занятий</li>
                    <li>Чем больше посещений - тем выше доход</li>
                    <li>Удобный вывод денежных средств</li>
                </ul>
                <p>Подробная информация указана в <Link to='/coach_offer'>договоре оферты с тренерами</Link>.</p>
            </div>
            <div className="coach coach__button"><button className="button" onClick={toggleCoachRegForm}>Зарегистрируйся и стань тренером!</button></div>
            <div className="coach coach__conditions">
                <h3>Требования к тренерам:</h3>
                <ul>
                    <li>Подтверждение профильного образования</li>
                    <li>Необходимо быть зарегистрированным как самозанятый или быть индивидуальным предпринимателем.</li>
                    <li>Наличие технической возможности проводить онлайн-трансляции (компьютер, видеокамера, микрофон, интернет и т.п.)</li>
                </ul>
            </div>
            <div className="coach coach___todo">
                <h3>Чтобы стать тренером достаточно сделать несколько простых шагов:</h3>
                <ul>
                    <li>Зарегистрируйтесь на нашей платформе в качестве тренера</li>
                    <li>В личном кабинете заполните анкету</li>
                    <li>Укажите свои реквизиты, платежные данные</li>
                    <li>Отправьте нам Ваши документы о профильном образовании</li>
                    <li>Создайте свою тренировку и укажите в ней расписание</li>
                </ul>
            </div>
        </section>
    )
}
