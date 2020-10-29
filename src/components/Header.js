import React from 'react'
import logo from '../navbar-logo.svg';

export default function Header(){
  return (
    <header className="welcome-header">
        <div className="logo-menu-box">
            <a href='http://localhost:3000'>
                <img className="logo-svg" src={logo}/>
            </a>
            <button className="menu-button-mobile">MENU &#9776;</button>
        </div>
        <ul className="nav-link-box">
            <li className="nav-link">SERVICES</li>
            <li className="nav-link">PORTFOLIO</li>
            <li className="nav-link">ABOUT</li>
            <li className="nav-link">TEAM</li>
            <li className="nav-link">CONTACTS</li>
        </ul>
    </header>
  ) 
}