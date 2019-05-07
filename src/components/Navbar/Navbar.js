import React from 'react';
import { NavLink } from 'react-router-dom'
import Search from '../../containers/Search';

import './Navbar.css';

const Navbar = () => (
    <nav>
        <ul>
            <li id="home"><NavLink to="/" exact>Home</NavLink></li>
            <li id="form"><Search /></li>
        </ul>
    </nav>
);

export default Navbar;