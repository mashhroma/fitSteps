import React from 'react';

export function ContactForm() {
    return (
        <form>
            <input type='text' required placeholder='Ваше имя' />
            <input type='email' required placeholder='Ваша эл.почта' />
            <input type='number' placeholder='Ваш телефон' />
            <textarea placeholder='Введите Ваше сообщение'></textarea>
            <button>Отправить</button>
        </form>
    )
}