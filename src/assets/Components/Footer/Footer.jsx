import React from "react";

import footerCSS from './../Footer/Footer.module.css'
import logo from './../../Images/logo.svg'

function Footer() {
    return(
        <div className={footerCSS.footerWrapper}>
            <img src={logo} alt="" />

            <div className={footerCSS.social}>
                <i className="ri-facebook-fill"></i>
                <i className="ri-instagram-fill"></i>
                <i className="ri-twitter-x-fill"></i>
                <i className="ri-youtube-fill"></i>
            </div>

            <p>© Copyright 2024 K2infocom</p>
        </div>
    )
}

export default Footer