import React from 'react';

const Navbar = (props) => (

    <nav className='navbar'>
        <ul>
            <li><b>Pokemon Memory Click</b></li>
            <li>{props.message}</li>
            <li>Score: {props.score} | Hi-Score: {props.hiScore}</li>
        </ul>
    </nav>
)

export default Navbar;