import { Link } from "react-router-dom";

export default function EmailConfirmPage() {
    return (
        <section className="text">
            <h2>Поздравляем!</h2>
            <p>Ваш e-mail успешно подтвержден.</p>
            <p>Вернуться на <Link to='/'>главную страницу</Link>.</p>
        </section>
    )
}
