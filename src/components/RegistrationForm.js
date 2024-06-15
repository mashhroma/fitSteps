import { useContext, useState } from "react";
import { ActiveCoachContext, ActiveUserContext, ProfilesContext } from "../contexts/ContextProvider";
import { findProfile, createProfile, isFormCorrect } from "../modules/formModules";
import axios from "axios";

export default function RegistrationForm({ role, closeRegForm }) {
    const { profiles, setProfiles } = useContext(ProfilesContext);
    const { setActiveUser } = useContext(ActiveUserContext);
    const { setActiveCoach } = useContext(ActiveCoachContext);
    const [message, setMessage] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const { elements } = e.target.parentElement;

        const trueForm = isFormCorrect(elements, role);
        if (!trueForm) {
            setMessage('Необходимо заполнить все поля формы');
        }

        if (trueForm) {
            const newProfile = createProfile(elements, role, profiles);
            const checkProfile = findProfile(profiles, newProfile.email, role);

            console.log(newProfile);

            if (checkProfile) {
                setMessage('Пользователь уже существует!');
            } else if (newProfile.password !== newProfile.checkPassword) {
                setMessage('Пароли не совпадают.')
            }
            else {
                axios.post(`https://66598df5de346625136ceaa4.mockapi.io/profiles/`, newProfile);
                setProfiles([...profiles, newProfile])
                setMessage('ВЫ УСПЕШНО ЗАРЕГИСТРИРОВАЛИСЬ!');
                localStorage.setItem(role === 'coach' ? 'activeCoach' : 'activeUser', JSON.stringify(newProfile));
                if (role === 'user') {
                    setActiveUser(newProfile);
                }
                if (role === 'coach') {
                    setActiveCoach(newProfile);
                }
                setTimeout(() => {
                    closeRegForm();
                }, 1000);
            }
        }
    }

    return (
        <form className="form reg">
            <h3>Регистрация {role === 'coach' ? 'тренера' : 'пользователя'}</h3>
            <input className="form__input" type="text" name="name" placeholder="Имя" required />
            <input className="form__input" type="text" name="surname" placeholder="Фамилия" required />
            <input className="form__input" type="email" name="email" placeholder="E-mail" required />
            <input className="form__input" type="password" name="password" placeholder="Пароль" required />
            <input className="form__input" type="password" name="checkPassword" placeholder="Повтор пароля" required />
            <button className="button" onClick={createUser}>Зарегистрироваться</button>
            <span>{message}</span>
        </form>
    )
}
