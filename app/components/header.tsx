import React, { useState } from 'react'
import logo from './images/logo.png'

import './header.css'

const Header = () => {

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header') as HTMLElement;
        const scrollPosition = window.scrollY;
    
        if (scrollPosition > 200) { // Adjust this value as needed
            header.classList.remove('transparent');
        } else {
            header.classList.add('transparent');
        }
            
    });
    

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar items-center justify-items-center'>
                <div>

                    <button className='header-button'> How It Works </button>
                    <button className='header-button'> Other </button>
                    <button className='header-button'> Buttons </button>
                    <button className='header-button'> For Now </button>
                </div>
            </nav>
        </div>
    )
}


export default Header