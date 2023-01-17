import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>
                Hello
            </h1>
            <div>
                <a href="/home">Home</a>
                 <a href="/aboutus">About Us</a>
                 <a href="/contactus">Contact Us</a>
            </div>
        </nav>
    );
};

export default Header;