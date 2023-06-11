import React from 'react';
import './Header.css'



const Header = () => {
    return (
         <nav className='nav_header'>
            <h1 className='logo_text'>Fashion Zone</h1>
            <div className='nav_header_list'>
                <a href="/home">Home</a>
                <a href="shoe">Shoe</a>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/contact">Contact Us</a>
                <a href="about">About</a>
            </div>
        </nav>
    );
};

export default Header;