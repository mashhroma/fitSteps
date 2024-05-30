import { getUserDataFromForm, isFormCorrect, setErrorMessageVisibility } from "./modules";

export default function LoginUserForm() {
    const loginUser = (e) => {
        e.preventDefault();
        const { elements } = e.target.parentElement;

        const trueForm = isFormCorrect(elements);
        setErrorMessageVisibility(trueForm)

        if (trueForm) {
            const userLoginData = getUserDataFromForm(elements);
            console.log(userLoginData);
        }
    }

    return (
        <form className="form reg">
            <input className="form__input" type="text" name="email" placeholder="E-mail" required />
            <input className="form__input" type="password" name="password" placeholder="Пароль" required />
            <button className="button" onClick={loginUser}>Зарегистрироваться</button>
            <span className="message">Необходимо заполнить все поля формы</span>
        </form>
    )
}