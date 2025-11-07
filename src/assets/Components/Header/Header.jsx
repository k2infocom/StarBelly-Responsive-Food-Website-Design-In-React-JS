import React from "react";
import headerCSS from './../Header/Header.module.css'

import heroImg from './../../Images/girl.png'
import menuSvg from './../../Images/menu.svg'
import ArrowSVG from './../../Images/arrow.svg'

import shape1 from './../../Images/1.svg'
import shape2 from './../../Images/2.svg'
import shape3 from './../../Images/3.svg'


function Header() {
    return (
        <div className={`${headerCSS.headerwrapper} section`} id="home">
            <div className={headerCSS.content}>
                <h4>Hi, Friends</h4>
                <h1>We Do not Cook ,We Create <span> Your Emotions</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ea earum laudantium minima dignissimos illo!</p>
                <div className={headerCSS.buttons}>
                    <button>
                        <img src={menuSvg} alt="" />
                        Our Menu
                    </button>
                    <button>
                        <img src={ArrowSVG} alt="" />
                        About Us
                    </button>
                </div>
            </div>
            <div className={headerCSS.image}>
                <img src={heroImg} alt="" id={headerCSS.heroImg}/>

        
                    <img src={shape1} alt="" className={`${headerCSS.shape} ${headerCSS.shape1}`} />
                    <img src={shape2} alt="" className={`${headerCSS.shape} ${headerCSS.shape2}`} />
                    <img src={shape3} alt="" className={`${headerCSS.shape} ${headerCSS.shape3}`} />
                
                    <span className={headerCSS.span1}></span>
                    <span className={headerCSS.span2}></span>
              
            </div>
        </div>
    )
}

export default Header