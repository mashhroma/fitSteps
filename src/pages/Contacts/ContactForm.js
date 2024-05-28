import React from 'react';

export default function ContactForm() {
    return (
        <form className='form'>
            <input className='form__input' type='text' required placeholder='Ваше имя' />
            <input className='form__input' type='email' required placeholder='Ваша эл.почта' />
            <input className='form__input' type='number' placeholder='Ваш телефон' />
            <textarea className='form__input' placeholder='Введите Ваше сообщение'></textarea>
            <button className='button'>Отправить</button>
        </form>
    )
}