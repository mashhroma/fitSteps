import React, { useContext, useState } from "react";
import { ActiveCoachContext, DataContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import WorkoutPreview from "../components/WorkoutPreview";
import axios from "axios";

export default function CoachAccount() {
    const { activeCoach, setActiveCoach, editActiveCoach } = useContext(ActiveCoachContext);

    const { workouts } = useContext(DataContext);
    const myWorks = workouts.filter(workout => +workout.coachId === +activeCoach.id);

    const [allowEditName, setAllowEditName] = useState(false);
    const [name, setName] = useState(activeCoach.name)

    const [allowEditSurname, setAllowEditSurname] = useState(false);
    const [surname, setSurname] = useState(activeCoach.surname)

    const [allowEditBirthday, setAllowEditBirthday] = useState(false);
    const [birthday, setBirthday] = useState(activeCoach.birthday)

    const [allowEditEmail, setAllowEditEmail] = useState(false);
    const [email, setEmail] = useState(activeCoach.email)

    const [allowEditAbout, setAllowEditAbout] = useState(false);
    const [about, setAbout] = useState(activeCoach.about)

    const [allowEditPassword, setAllowEditPassword] = useState(false);
    const [password, setPassword] = useState(activeCoach.password);
    const [checkPassword, setCheckPassword] = useState('');

    const removeActiveCoach = () => {
        if (activeCoach) {
            localStorage.removeItem('activeCoach');
            setActiveCoach(null);
        }
    };

    const setEditedData = (newCoach) => {
        editActiveCoach(newCoach);
        localStorage.setItem('activeCoach', JSON.stringify(newCoach));
        axios.put(`https://66598df5de346625136ceaa4.mockapi.io/profiles/${newCoach.id}`, newCoach);
    }

    const editName = (e) => {
        onChangeAllowEditName();
        setName(e.target.value);
    }
    const onChangeAllowEditName = () => {
        setAllowEditName(true);
        document.getElementById('name').classList.add('white');
    }
    const onChangeName = () => {
        if (name.length >= 2) {
            setAllowEditName(false);
            const newCoach = activeCoach;
            newCoach.name = name;
            setEditedData(newCoach);
            document.getElementById('name').classList.remove('white');
        }
    }

    const editSurname = (e) => {
        onChangeAllowEditSurname();
        setSurname(e.target.value);
    }
    const onChangeAllowEditSurname = () => {
        setAllowEditSurname(true);
        document.getElementById('surname').classList.add('white');
    }
    const onChangeSurname = () => {
        if (surname.length >= 2) {
            setAllowEditSurname(false)
            const newCoach = activeCoach;
            newCoach.surname = surname;
            setEditedData(newCoach);
            document.getElementById('surname').classList.remove('white');
        }
    }

    const editBirthday = (e) => {
        onChangeAllowEditBirthday();
        setBirthday(e.target.value);
    }
    const onChangeAllowEditBirthday = () => {
        setAllowEditBirthday(true);
        document.getElementById('birthday').classList.add('white');

    }
    const onChangeBirthday = () => {
        setAllowEditBirthday(false)
        const newCoach = activeCoach;
        newCoach.birthday = birthday;
        setEditedData(newCoach);
        document.getElementById('birthday').classList.remove('white');
    }

    const editEmail = (e) => {
        onChangeAllowEditEmail();
        setEmail(e.target.value);
    }
    const onChangeAllowEditEmail = () => {
        setAllowEditEmail(true);
        document.getElementById('email').classList.add('white');

    }
    const onChangeEmail = () => {
        if (email.length >= 2) {
            setAllowEditEmail(false)
            const newCoach = activeCoach;
            newCoach.email = email;
            setEditedData(newCoach);
            document.getElementById('email').classList.remove('white');

        }
    }

    const editAbout = (e) => {
        onChangeAllowEditAbout();
        setAbout(e.target.value);
    }
    const onChangeAllowEditAbout = () => {
        setAllowEditAbout(true);
        document.getElementById('about').classList.add('white');

    }
    const onChangeAbout = () => {
        if (about.length >= 2) {
            setAllowEditAbout(false)
            const newCoach = activeCoach;
            newCoach.about = about;
            setEditedData(newCoach);
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
            const newCoach = activeCoach;
            newCoach.password = password;
            setEditedData(newCoach);
        }
    }

    return (
        <div className="personal">
            <section className="personal__data">
                <div className="personal__avatar">
                    <img src={activeCoach.avatar || null} alt="Avatar" />
                </div>
                <div className="personal__info">
                    <div className="personal__subscribe">
                        <span>Текущий баланс: {activeCoach.balance > 0 ? activeCoach.balance : 0} руб.</span>
                        <span>
                            {activeCoach.balance > 0 && <button className="button">вывести средства</button>}
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
                    <Link to='/'><button className='button' onClick={removeActiveCoach}>выйти из профиля</button></Link>
                </div>
                <div className="personal__about">
                    <h3>Обо мне</h3>
                    <textarea id="about" type="text" value={about} placeholder="Напишите о себе" onChange={editAbout} />
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
                    <p>У Вас пока нет занятий.</p>}

            </section>
        </div>
    )
}

