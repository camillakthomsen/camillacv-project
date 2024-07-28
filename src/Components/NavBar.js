// src/Components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css';

export function NavBar() {
    return (
        <nav className='navbar'>
            <div className="nav-left">
                <NavLink to="/home" className="navItem">
                    Forside
                </NavLink>
                <NavLink to="/uddannelse" className="navItem">
                    Uddannelse
                </NavLink>
                <NavLink to="/jobs" className="navItem">
                    Jobs
                </NavLink>
                <NavLink to="/personlig" className="navItem">
                    Personlig
                </NavLink>
            </div>
            <div className="nav-center">
                <span>CAMILLA KOLBY THOMSEN</span>
            </div>
            <div className="nav-right">
                <NavLink to="/kontakt" className="navItem">
                    Kontakt
                </NavLink>
            </div>
        </nav>
    );
}
