/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './Menu.css';
import logo from '../../logo.png';

function Menu ({sticky}) {
    
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);

    return (<nav className={sticky ? "header-bar sticky" : "header-bar"}>
        {sticky ? (<div className="navbar--logo-holder">
            <img src={logo} alt="logo-club-liderazgo" />
            CLUB DE <strong>LIDERAZGO</strong>
            </div>)
        : null}
        <ul className={isToggled ? ('navbar-nav is-active') : 'navbar-nav'}>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon-menu">
                        <img alt="timer" src={require('../../assets/images/bx-home.svg')} />
                    </div>
                    Inicio
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link"  href="#nosotros">
                    <div className="icon-menu">
                        <img alt="timer" src={require('../../assets/images/bx-group.svg')} />
                    </div>
                    Nosotros
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#servicios">
                    <div className="icon-menu">
                        <img alt="timer" src={require('../../assets/images/bx-book-reader.svg')} />
                    </div>
                    Servicios
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#experiencias">
                    <div className="icon-menu">
                        <img alt="timer" src={require('../../assets/images/bx-book-bookmark.svg')} />
                    </div>
                    Experiencias
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link whatsapp" href="https://wa.me/573202367573">
                    <img alt="whatsapp-club-liderazgo" src={require('../../assets/images/bxl-whatsapp.svg')} />
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link contact" href="#contacto">Contáctenos</a>
            </li>
        </ul>
        <div className={isToggled ? ('hamburger is-active') : 'hamburger'} onClick={toggleTrueFalse}>
            <div className="_layer -top"></div>
            <div className="_layer -mid"></div>
            <div className="_layer -bottom"></div>
        </div>
    </nav>)
}
export default Menu;