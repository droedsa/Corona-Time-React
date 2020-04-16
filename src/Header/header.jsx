import React from "react";
import './header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return <nav className="navbar navbar-expand-sm navbar-dark bg-dark header">
        <h2 className="navbar-brand">Corona-Time</h2>

        <div  >
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className='nav-link' to='/'>Countries Statistic</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='/last-statistic'>Quick search</NavLink>
                </li>
            </ul>
        </div>
    </nav>
};

export default Header;