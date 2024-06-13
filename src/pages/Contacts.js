export default function Contacts() {
    return (
        <section className='text'>
            <h3>Уважаемые посетители сайта!</h3>
            <p>По любым вопросам Вы всегда можете обратиться к нам по телефону, электронной почте, либо оставить сообщение, заполнив форму ниже.</p>
            <p>+7 800 000-00-00</p>
            <p>info@fitsteps.ru</p>
            <form className='form'>
                <input className='form__input' type='text' required placeholder='Ваше имя' />
                <input className='form__input' type='email' required placeholder='Ваша эл.почта' />
                <input className='form__input' type='number' placeholder='Ваш телефон' />
                <textarea className='form__input' placeholder='Введите Ваше сообщение'></textarea>
                <button className='button'>Отправить</button>
            </form>
        </section>
    )
}
