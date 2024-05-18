import React from 'react';
import { workoutMini } from './workoutMini';

const posts = [
    {
        id: 101,
        name: 'Emmy',
        date: '28.05.2024',
        image: 'https://s1.1zoom.ru/big7/370/Fitness_Earobics_kind_459352.jpg'
    },
    {
        id: 102,
        name: 'Yolia',
        date: '29.05.2024',
        image: 'https://mykaleidoscope.ru/uploads/posts/2022-08/1660584642_36-mykaleidoscope-ru-p-fitnes-trenirovka-doma-dizain-krasivo-foto-39.jpg'
    },
    {
        id: 103,
        name: 'Mashhroma',
        date: '29.05.2024',
        image: 'https://de-fragrance.ru/wp-content/uploads/9/e/7/9e7a84c19e7da9f998a0df5e5f0acdc7.jpeg'
    }
];

export function UsersPosts() {
    return (
        <ul className='Workouts'>
            {workouts.map(workout => workoutMini(workout))}
        </ul>
    )
}
