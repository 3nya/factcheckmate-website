import React, { useEffect, useState } from 'react'
import logo from './images/logo.png'

import './header.css'

const Header = () => {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header') as HTMLElement;
            const scrollPosition = window.scrollY;


            if (scrollPosition <= 200) { 
                header.classList.remove('transparent');
            } else {
                header.classList.add('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar items-center justify-items-center'>
                <div>

                    <button className='header-button'> How It Works </button>
                    <button className='header-button'> Results </button>
                    <button className='header-button'> Abstract </button>
                </div>
            </nav>
        </div>
    )
}


export default Header