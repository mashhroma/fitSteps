import React, { useContext } from "react";
import { ActiveUserContext, TypesContext, DataContext } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";
import WorkoutListItem from "./WorkoutListItem";

export function UserAccount() {
    const types = useContext(TypesContext);
    const { workouts } = useContext(DataContext);
    const [activeUser] = useContext(ActiveUserContext);

    const myWorks = activeUser.favorites.map(favorite => workouts.find(workout => +workout.id === favorite));
    console.log(myWorks);

    return (
        <div className="personal">
            <section className="personal__data">
                <div className="personal__avatar">
                    <img src={activeUser.avatar || null} alt="Avatar" />
                </div>
                <div className="personal__info">
                    <div className="personal__subscribe">
                        <span>Активная подписка:
                            {activeUser.subscribe.isActive ? `до ${activeUser.subscribe.endDate} г.` : ' НЕТ'}
                        </span>
                        <span>
                            {activeUser.subscribe.Type ? `Тип подписки: ${activeUser.subscribe.type}` : <Link to="/subscriptions"><button className="button">оформить подписку</button></Link>}
                        </span>
                    </div>
                    <div className="personal__info-item">
                        <span>Имя</span>
                        <input type="text" value={activeUser.name} />
                        <img width={20} height={20} src="/images/edit.png" alt="Edit" />
                    </div>
                    <div className="personal__info-item">
                        <span>Фамилия</span>
                        <input type="text" value={activeUser.surname} />
                        <img width={20} height={20} src="/images/edit.png" alt="Edit" />
                    </div>
                    <div className="personal__info-item">
                        <span>День рождения</span>
                        <input type="text" value={activeUser.birthday} />
                        <img width={20} height={20} src="/images/edit.png" alt="Edit" />
                    </div>
                    <div className="personal__info-item">
                        <span>Эл. почта</span>
                        <input type="text" value={activeUser.email} />
                        <img width={20} height={20} src="/images/edit.png" alt="Edit" />
                    </div>
                    <button className="change-pass">Изменить пароль</button>
                    <div className="personal__interests">
                        <h3>Интересы</h3>
                        <ul>
                            {types.map(type => <li key={type.id}>
                                <input type="checkbox" id={type.name} />
                                <label htmlFor={type.name}>{type.name}</label></li>)}
                        </ul>
                    </div>
                </div>
                <div className="personal__about">
                    <h3>Обо мне</h3>
                    <textarea type="text" value={activeUser.about} />
                    <img width={20} height={20} src="/images/edit.png" alt="Edit" />
                </div>

            </section>
            <section className="favorites">
                <h3>Мои занятия</h3>
                <ul className="workouts">
                    {myWorks.map(workout => <WorkoutListItem workout={workout} types={types} />)}
                </ul>
            </section>
        </div>
    )
}