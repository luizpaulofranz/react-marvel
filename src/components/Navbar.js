import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import Search from './Search';

import './Navbar.css';

const Navbar = () => (
    <nav>
        <ul>
            <li style={{width: "33.33%"}}><NavLink to="/" exact>Home</NavLink></li>
            <li style={{width: "66.66%"}}><Search /></li>
        </ul>
    </nav>
);

export default Navbar;