import { useState } from "react";
import { getUserDataFromForm, isFormCorrect, setErrorMessageVisibility } from "./modules";

export default function RegistrationForm() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers(users => [...users, user]);
        console.log(users);
    }

    const createUser = (e) => {
        e.preventDefault();
        const { elements } = e.target.parentElement;

        const trueForm = isFormCorrect(elements);
        setErrorMessageVisibility(trueForm)

        if (trueForm) {
            const newUser = getUserDataFromForm(elements);
            addUser(newUser);
        }
    }

    return (
        <form className="form reg">
            <input className="form__input" type="text" name="name" placeholder="Имя" required />
            <input className="form__input" type="text" name="surname" placeholder="Фамилия" required />
            <input className="form__input" type="text" name="email" placeholder="E-mail" required />
            <input className="form__input" type="password" name="password" placeholder="Пароль" required />
            <button className="button" onClick={createUser}>Зарегистрироваться</button>
            <span className="message">Необходимо заполнить все поля формы</span>
        </form>
    )
}