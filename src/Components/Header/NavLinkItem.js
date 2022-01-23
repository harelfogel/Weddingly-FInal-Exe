import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const NavLinkItem = ({text, to}) => {
        return (
            <NavLink
                className={({ isActive }) => `nav-button-light ${isActive ? 'active-light' : ''}`}
                to={to}
            >
                {text}
            </NavLink>)
}

export default NavLinkItem;
