import React from 'react';
import { workoutMini } from './workoutMini';

const workouts = [
    {
        id: 101,
        name: 'Стэп',
        date: '28.05.2024',
        duration: '60 минут',
        image: 'https://s1.1zoom.ru/big7/370/Fitness_Earobics_kind_459352.jpg'
    },
    {
        id: 102,
        name: 'Йога',
        date: '29.05.2024',
        duration: '60 минут',
        image: 'https://mykaleidoscope.ru/uploads/posts/2022-08/1660584642_36-mykaleidoscope-ru-p-fitnes-trenirovka-doma-dizain-krasivo-foto-39.jpg'
    },
    {
        id: 103,
        name: 'Фитнес билд',
        date: '29.05.2024',
        duration: '60 минут',
        image: 'https://de-fragrance.ru/wp-content/uploads/9/e/7/9e7a84c19e7da9f998a0df5e5f0acdc7.jpeg'
    },
    {
        id: 104,
        name: 'Фитнесс-малина',
        date: '30.05.2024',
        duration: '60 минут',
        image: 'https://ucare.timepad.ru/ca2caee3-2674-4082-8ce5-16c10435ffab/poster_event_1763988.jpg'
    },
    {
        id: 105,
        name: 'Джумба',
        date: '31.05.2024',
        duration: '60 минут',
        image: 'https://sportishka.com/uploads/posts/2022-11/1667438976_54-sportishka-com-p-khip-khop-kostyumi-dlya-sovremennikh-tants-55.jpg'
    }
];

export function Top5workouts() {
    return (
        <ul className='Workouts'>
            {workouts.map(workout => workoutMini(workout))}
        </ul>
    )
}