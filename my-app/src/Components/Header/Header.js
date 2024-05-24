import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <>
        <nav>
        <h3>Travel Destination</h3>
        <Link to={"/"}>Home</Link>
        </nav>
        </>
    );
}

export default Header;