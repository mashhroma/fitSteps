import React from 'react';
import { Navigation } from '../Navigation';
import logo from '../../asserts/logo.png';
import './style.css'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='Header'>
            <Link to='/'><a><img className='Logo' src={logo} /></a></Link>
            <Navigation />
            <button className='Login'>войти</button>
        </header>
    )
}