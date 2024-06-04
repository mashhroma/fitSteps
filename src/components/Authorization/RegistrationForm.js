import { useContext, useState } from "react";
import { ProfilesContext } from "../../contexts/ContextProvider";
import { findProfile, getProfileDataFromForm, isFormCorrect } from "../../modules/formModules";
import axios from "axios";

export default function RegistrationForm({ role }) {
    const profiles = useContext(ProfilesContext);
    const [message, setMessage] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const { elements } = e.target.parentElement;

        const trueForm = isFormCorrect(elements, role);
        if (!trueForm) {
            setMessage('Необходимо заполнить все поля формы');
        }

        if (trueForm) {
            const newProfile = getProfileDataFromForm(elements);
            const checkProfile = findProfile(profiles, newProfile.email, role);

            if (checkProfile) {
                setMessage('Пользователь уже существует!');
            } else {
                axios.post(`https://66598df5de346625136ceaa4.mockapi.io/profiles/`, newProfile);
                setMessage('');
            }
        }
    }

    return (
        <form className="form reg">
            <h3>Регистрация {role === 'coach' ? 'тренера' : 'пользователя'}</h3>
            <input className="form__input" type="text" name="name" placeholder="Имя" required />
            <input className="form__input" type="text" name="surname" placeholder="Фамилия" required />
            <input className="form__input" type="text" name="email" placeholder="E-mail" required />
            <input className="form__input" type="password" name="password" placeholder="Пароль" required />
            <button className="button" onClick={createUser}>Зарегистрироваться</button>
            <span>{message}</span>
        </form>
    )
}
