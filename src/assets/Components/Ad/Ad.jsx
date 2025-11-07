import React from "react";
import adCSS from './../Ad/Ad.module.css'

import adPhoto from './../../Images/phones.png'
import playStore from './../../Images/playstore.svg'
import appStore from './../../Images/appstore.svg'

import shape1 from './../../Images/1.svg'
import shape2 from './../../Images/2.svg'
import shape3 from './../../Images/3.svg'

function Ad() {
    return(
        <div className={`section ${adCSS.adWrapper}`}>
            <div className={adCSS.content}>
                <h1>Download Our Mobile App</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt cumque sed ducimus officiis dolore quas incidunt hic sit.</p>

                <div className={adCSS.store}>
                    <img src={playStore} alt="" />
                    <img src={appStore} alt="" />
                </div>
            </div>
            <div className={adCSS.adImg}>
                <img src={adPhoto} alt="" />

                <img src={shape1} className={`${adCSS.shape} ${adCSS.shape1}`} alt="" />
                <img src={shape2} className={`${adCSS.shape} ${adCSS.shape2}`} alt="" />
                <img src={shape3} className={`${adCSS.shape} ${adCSS.shape3}`} alt="" />

                <span className={`${adCSS.Spanshape} ${adCSS.shape4}`}></span>
            </div>
        </div>
    )
}

export default Ad