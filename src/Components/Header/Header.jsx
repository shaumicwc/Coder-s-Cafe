import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <>
        <nav className='header-container'>
            <h6 className='nav-title'>Coders Cafe</h6>
          
            <div>
            <img src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='header-img' />
            </div>
        </nav>
        <hr />
        </>
    );
};

export default Header