import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg from './../../Images/interior.jpg'

function About() {
    return(
        <div className={`${aboutCSS.aboutwrapper} section`} id="about">
            <div className={aboutCSS.img}>
                <img src={aboutImg} alt="" />

                <div className={aboutCSS.experiCard}>
                    <h2>17</h2>
                    <p>Experience</p>
                </div>
            </div>

            <div className={aboutCSS.content}>
                <h2>We Are Dong More then You Expect</h2>

                <div className={aboutCSS.aboutCard}>
                    <h5>01</h5>

                    <div>
                        <h3>We Are located the city center</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab! Ipsum repellendus corrupti voluptate cupiditate veritatis veniam temporibus sunt nemo expedita soluta. Placeat.</p>
                    </div>
                </div>

                <div className={aboutCSS.aboutCard}>
                    <h5>02</h5>

                    <div>
                        <h3>Fresh , Organic Ingredients</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab! Ipsum repellendus corrupti voluptate cupiditate veritatis veniam temporibus sunt nemo expedita soluta. Placeat.</p>
                    </div>
                </div>

                <div className={aboutCSS.aboutCard}>
                    <h5>03</h5>

                    <div>
                        <h3>Own Fast Delivery</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ab! Ipsum repellendus corrupti voluptate cupiditate veritatis veniam temporibus sunt nemo expedita soluta. Placeat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About