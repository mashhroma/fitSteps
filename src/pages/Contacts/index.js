import React from 'react';
import { ContactForm } from './ContactForm';

export function Contacts() {
    return (
        <section>
            <p>По любым вопросам Вы всегда можете обратиться к нам по телефону, электронной почте, либо оставить сообщение, заполнив форму ниже.</p>
            <p>+7 800 000-00-00</p>
            <p>info@fitsteps.ru</p>
            <ContactForm />
        </section>
    )
}