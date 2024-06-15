import React, { useContext, useState } from "react";
import { ActiveUserContext, DataContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import WorkoutPreview from "../components/WorkoutPreview";
import axios from "axios";

export default function UserAccount() {
    const { activeUser, editActiveUser } = useContext(ActiveUserContext);
    const { workouts } = useContext(DataContext);
    const myWorks = activeUser.favorites.map(favorite => workouts.find(workout => +workout.id === favorite));

    const [allowEditName, setAllowEditName] = useState(false);
    const [name, setName] = useState(activeUser.name)

    const [allowEditSurname, setAllowEditSurname] = useState(false);
    const [surname, setSurname] = useState(activeUser.surname)

    const [allowEditBirthday, setAllowEditBirthday] = useState(false);
    const [birthday, setBirthday] = useState(activeUser.birthday)

    const [allowEditEmail, setAllowEditEmail] = useState(false);
    const [email, setEmail] = useState(activeUser.email)

    const [allowEditAbout, setAllowEditAbout] = useState(false);
    const [about, setAbout] = useState(activeUser.about)

    const [allowEditPassword, setAllowEditPassword] = useState(false);
    const [password, setPassword] = useState(activeUser.password);
    const [checkPassword, setCheckPassword] = useState('');

    const setEditedData = (newUser) => {
        editActiveUser(newUser);
        localStorage.setItem('activeUser', JSON.stringify(newUser));
        axios.put(`https://66598df5de346625136ceaa4.mockapi.io/profiles/${newUser.id}`, newUser);
    }

    const editName = (e) => {
        onChangeAllowEditName()
        setName(e.target.value);
    }
    const onChangeAllowEditName = () => {
        setAllowEditName(true);
        document.getElementById('name').classList.add('white');
    }
    const onChangeName = () => {
        if (name.length >= 2) {
            setAllowEditName(false);
            const newUser = activeUser;
            newUser.name = name;
            setEditedData(newUser);
            document.getElementById('name').classList.remove('white');
        }
    }

    const editSurname = (e) => {
        onChangeAllowEditSurname()
        setSurname(e.target.value);
    }
    const onChangeAllowEditSurname = () => {
        setAllowEditSurname(true);
        document.getElementById('surname').classList.add('white');
    }
    const onChangeSurname = () => {
        if (surname.length >= 2) {
            setAllowEditSurname(false)
            const newUser = activeUser;
            newUser.surname = surname;
            setEditedData(newUser);
            document.getElementById('surname').classList.remove('white');

        }
    }

    const editBirthday = (e) => {
        onChangeAllowEditBirthday()
        setBirthday(e.target.value);
    }
    const onChangeAllowEditBirthday = () => {
        setAllowEditBirthday(true);
        document.getElementById('birthday').classList.add('white');

    }
    const onChangeBirthday = () => {
        setAllowEditBirthday(false)
        const newUser = activeUser;
        newUser.birthday = birthday;
        setEditedData(newUser);
        document.getElementById('birthday').classList.remove('white');
    }

    const editEmail = (e) => {
        onChangeAllowEditEmail()
        setEmail(e.target.value);
    }
    const onChangeAllowEditEmail = () => {
        setAllowEditEmail(true);
        document.getElementById('email').classList.add('white');

    }
    const onChangeEmail = () => {
        if (email.length >= 2) {
            setAllowEditEmail(false)
            const newUser = activeUser;
            newUser.email = email;
            setEditedData(newUser);
            document.getElementById('email').classList.remove('white');

        }
    }

    const editAbout = (e) => {
        onChangeAllowEditAbout()
        setAbout(e.target.value);
    }
    const onChangeAllowEditAbout = () => {
        setAllowEditAbout(true);
        document.getElementById('about').classList.add('white');

    }
    const onChangeAbout = () => {
        if (about.length >= 2) {
            setAllowEditAbout(false)
            const newUser = activeUser;
            newUser.about = about;
            setEditedData(newUser);
            document.getElementById('about').classList.remove('white');
        }
    }

    const editPassword = (e) => {
        if (allowEditPassword) {
            setPassword(e.target.value);
        }
    }
    const checkingPassword = (e) => {
        if (allowEditPassword) {
            setCheckPassword(e.target.value);
        }
    }
    const onChangeAllowEditPassword = () => {
        setAllowEditPassword(true);
    }
    const onChangePassword = () => {
        if (password.length >= 5 && password === checkPassword) {
            setAllowEditPassword(false)
            const newUser = activeUser;
            newUser.password = password;
            setEditedData(newUser);
        }
    }

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
                        <input id="name" type="text" value={name} onChange={editName} />
                        {allowEditName ?
                            <img width={20} height={20} src="/images/checked.png" alt="Edit" onClick={onChangeName} /> :
                            <img width={20} height={20} src="/images/edit.png" alt="Edit" onClick={onChangeAllowEditName} />}
                    </div>
                    <div className="personal__info-item">
                        <span>Фамилия</span>
                        <input id="surname" type="text" value={surname} onChange={editSurname} />
                        {allowEditSurname ?
                            <img width={20} height={20} src="/images/checked.png" alt="Edit" onClick={onChangeSurname} /> :
                            <img width={20} height={20} src="/images/edit.png" alt="Edit" onClick={onChangeAllowEditSurname} />}
                    </div>
                    <div className="personal__info-item">
                        <span>День рождения</span>
                        <input id="birthday" type="date" value={birthday} onChange={editBirthday} />
                        {allowEditBirthday ?
                            <img width={20} height={20} src="/images/checked.png" alt="Edit" onClick={onChangeBirthday} /> :
                            <img width={20} height={20} src="/images/edit.png" alt="Edit" onClick={onChangeAllowEditBirthday} />}
                    </div>
                    <div className="personal__info-item">
                        <span>Эл. почта</span>
                        <input id="email" type="text" value={email} onChange={editEmail} />
                        {allowEditEmail ?
                            <img width={20} height={20} src="/images/checked.png" alt="Edit" onClick={onChangeEmail} /> :
                            <img width={20} height={20} src="/images/edit.png" alt="Edit" onClick={onChangeAllowEditEmail} />}
                    </div>
                    {allowEditPassword ?
                        <form className="form">
                            <input className="form__input" type="password" value={password} placeholder="Введите пароль" onChange={editPassword} />
                            <input className="form__input" type="password" value={checkPassword} placeholder="Повторите пароль" onChange={checkingPassword} />
                            {password === checkPassword && password.length >= 5 ?
                                <img width={20} height={20} src="/images/edit.png" alt="Edit" onClick={onChangePassword} /> :
                                <span className="error">Пароли не совпадают или указан пароль менее 5 символов</span>}
                        </form> :
                        <button className="change-pass" onClick={onChangeAllowEditPassword}>Изменить пароль</button>
                    }
                </div>
                <div className="personal__about">
                    <h3>Обо мне</h3>
                    <textarea id="about" type="text" value={about} onChange={editAbout} placeholder="Напишите о себе" />
                    {allowEditAbout ?
                        <img width={30} height={30} src="/images/checked.png" alt="Edit" onClick={onChangeAbout} /> :
                        <img width={30} height={30} src="/images/edit_big.png" alt="Edit" onClick={onChangeAllowEditAbout} />}
                </div>

            </section>
            <section className="favorites">
                <h3>Мои занятия</h3>
                {myWorks.length > 0 ?
                    <ul className="workouts">
                        {myWorks.map(workout => <li key={workout.id}><WorkoutPreview workout={workout} width={200} height={400} /></li>)}
                    </ul> :
                    <div className="text"><p>Вы пока не добавили ни одного онлайн-занятия в избранное. Выберите занятие <Link to='/workouts'>в разделе "онлайн-занятий".</Link></p>
                    </div>}

            </section>
        </div>
    )
}
