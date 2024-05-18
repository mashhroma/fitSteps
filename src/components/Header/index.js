import React from 'react';
import { Navigation } from '../Navigation';
import logo from '../../asserts/logo.png';
import './style.css'

export function Header() {
    return (
        <header className='Header'>
            <div>
                <img className='Logo' src={logo} />
            </div>
            <Navigation />
            <button className='Login'>войти</button>
        </header>
    )
}