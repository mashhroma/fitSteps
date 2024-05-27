import React from 'react';
import { ContactForm } from './ContactForm';

export function Contacts() {
    return (
        <section className='text'>
            <h3>Уважаемые посетители сайта!</h3>
            <p>По любым вопросам Вы всегда можете обратиться к нам по телефону, электронной почте, либо оставить сообщение, заполнив форму ниже.</p>
            <p>+7 800 000-00-00</p>
            <p>info@fitsteps.ru</p>
            <ContactForm />
        </section>
    )
}