import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav>
        <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/menu1">Menu1</NavLink></li>
            <li><NavLink to="/menu2">Menu 2</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;