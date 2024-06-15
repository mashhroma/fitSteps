import { useContext, useState } from "react";
import { ActiveCoachContext, ActiveUserContext, ProfilesContext } from "../contexts/ContextProvider";
import { findProfile, getProfileDataFromForm, isFormCorrect, isPasswordCorrect } from "../modules/formModules";

export default function LoginForm({ role, closeLoginForm }) {
    const { profiles } = useContext(ProfilesContext);
    const [activeUser, setActiveUser] = useContext(ActiveUserContext);
    const [activeCoach, setActiveCoach] = useContext(ActiveCoachContext);
    const [message, setMessage] = useState('');
    let profile = {};

    const loginProfile = (e) => {
        e.preventDefault();
        const { elements } = e.target.parentElement;

        const trueForm = isFormCorrect(elements);
        if (!trueForm) {
            setMessage('Необходимо заполнить все поля формы');
        }

        if (trueForm) {
            const profileLoginData = getProfileDataFromForm(elements, role);
            profile = findProfile(profiles, profileLoginData.email, role);

            if (profile) {
                if (isPasswordCorrect(profile, profileLoginData.password)) {
                    localStorage.setItem(role === 'coach' ? 'activeCoach' : 'activeUser', JSON.stringify(profile));
                    if (role === 'user') {
                        setActiveUser(profile);
                    }
                    if (role === 'coach') {
                        setActiveCoach(profile);
                    }
                    setMessage('');
                    closeLoginForm();
                } else {
                    setMessage('Неверный пароль');
                }
            } else {
                setMessage('Пользователь не найден');
            }
        }
    }

    return (
        <form className="form reg">
            <h3>Войти как {role === 'coach' ? 'тренер' : 'пользователь'}</h3>
            <input className="form__input" type="text" name="email" placeholder="E-mail" required />
            <input className="form__input" type="password" name="password" placeholder="Пароль" required />
            <button className="button" onClick={loginProfile}>Войти</button>
            <span>{message}</span>
        </form>
    )
}