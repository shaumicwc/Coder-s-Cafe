import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <>
        <nav className='header-container'>
            <h6 className='nav-title'>Knowledge Cafe</h6>
          
            <div>
                <img className='header-img w-75' src='./src/images/avatar.png' alt="" />
            </div>
        </nav>
        <hr />
        </>
    );
};

export default Header