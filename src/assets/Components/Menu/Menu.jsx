import React from "react";
import menuCSS from './../Menu/Menu.module.css'

import arrowSVG from './../../Images/arrow.svg'
import Category1 from './../../Images/category1.png'
import Category2 from './../../Images/category3.png'
import Category3 from './../../Images/category2.png'
import Category4 from './../../Images/category4.png'

function Menu() {
    return(
        <div className={`${menuCSS.menuWrapper} section`} id="menu">
            <div className="section_title">
                <h2>What Do you Like Today?</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sed.</p>

                    <button><img src={arrowSVG} alt="" />Shopping now</button>
                </div>
            </div>
            <div className={menuCSS.menuCards}>
                <div className={menuCSS.menuCard}>
                    <img src={Category1} alt="" />
                   <div>
                        <h3>Staters</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   </div>
                </div>
                <div className={menuCSS.menuCard}>
                    <img src={Category2} alt="" />
                   <div>
                        <h3>Drinks</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   </div>
                </div>
                <div className={menuCSS.menuCard}>
                    <img src={Category3} alt="" />
                   <div>
                        <h3>Main Deshes</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   </div>
                </div>
                <div className={menuCSS.menuCard}>
                    <img src={Category4} alt="" />
                   <div>
                        <h3>Desserts</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default Menu