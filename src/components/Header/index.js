import React from 'react';
import { Navigation } from '../Navigation';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='Header'>
            <Link to='/'><a><img className='Logo' src='/images/logo.png' /></a></Link>
            <Navigation />
            <button className='Login'>войти</button>
        </header>
    )
}