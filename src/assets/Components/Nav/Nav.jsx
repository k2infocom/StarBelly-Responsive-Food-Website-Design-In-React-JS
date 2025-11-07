import React, { useRef } from "react";
import navcss from './../Nav/Nav.module.css';

import logo from './../../Images/logo.svg'

function Nav() {

    const menu = useRef();

    const showMenu = () =>{
        menu.current.classList.toggle(navcss.showMenu);
    }

    return(
        <div>
            <div className={navcss.nav}>
                <div className={navcss.logo}>
                    <img src={logo} alt="" />
                </div>
                <ul ref={menu}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#Dishes">Popular Dishes</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
                <i className="ri-shopping-bag-line"></i>
                <i className="ri-menu-line" id={navcss.bars} onClick={showMenu}></i>
            </div>
        </div>
    )
}

export default Nav