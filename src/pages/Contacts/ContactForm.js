import React from 'react';

export function ContactForm() {
    return (
        <form className='contact'>
            <input className='contact__input' type='text' required placeholder='Ваше имя' />
            <input className='contact__input' type='email' required placeholder='Ваша эл.почта' />
            <input className='contact__input' type='number' placeholder='Ваш телефон' />
            <textarea className='contact__input' placeholder='Введите Ваше сообщение'></textarea>
            <button className='contact__button'>Отправить</button>
        </form>
    )
}