import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <>
        <nav className='header'>
            <h6 className='nav-title'>Knowledge Cafe</h6>
            <div>
                <a href="" herf="/blog">Blog</a>
                <a href="" herf="/courses">Courses</a>
                <a href="" herf="/contact-us">Contact Us</a>
                <a href="" herf="/login">Login</a>
            </div>
            <div>
                <img className='header-img w-75' src='/src/images/avatar.png' alt="" />
            </div>
        </nav>
        <hr />
        </>
    );
};

export default Header