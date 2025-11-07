import React from "react";
import dishesCSS from './../Dishes/Dishes.module.css'

import MenuSVG from './../../Images/menu.svg'
import {Swiper , SwiperSlide} from "swiper/react";

import { Autoplay } from "swiper/modules";
import 'swiper/css'


import img1 from './../../Images/menu1.jpg'
import img2 from './../../Images/menu2.jpg'
import img3 from './../../Images/menu3.jpg'
import img4 from './../../Images/menu4.jpg'
import img5 from './../../Images/menu5.jpg'
import img6 from './../../Images/menu6.jpg'



function Dishes() {
    return (
        <div className={`${dishesCSS.dishesWrapper} section`} id="Dishes">
            <div className="section_title">
                <h2>Most Popular Dishes</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus?</p>

                    <button>
                        <img src={MenuSVG} alt="" /> Get Menu
                    </button>
                </div>
            </div>

        <Swiper 
            slidesPerView={4}
            spaceBetween={40}
            breakpoints={
                {
                    0:{slidesPerView:1},
                    600:{slidesPerView:2},
                    1024:{slidesPerView:3},
                    1400:{slidesPerView:4},
                }
            }
            autoplay={
                {delay:2000}
            }

            modules={[Autoplay]}
            id={dishesCSS.swiper}
        >
            <SwiperSlide>
                <div className={dishesCSS.card}>
                    <img src={img1} alt="" />

                    <div className={dishesCSS.content}>
                        <div className={dishesCSS.primDetail}>
                            <h3>Carpachhio</h3>
                            <h5>$19</h5>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className={dishesCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i> <span>( 5star )</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={dishesCSS.card}>
                    <img src={img2} alt="" />

                    <div className={dishesCSS.content}>
                        <div className={dishesCSS.primDetail}>
                            <h3>Cheverfrit au miel</h3>
                            <h5>$25</h5>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className={dishesCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>  <span>( 5star )</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={dishesCSS.card}>
                    <img src={img3} alt="" />

                    <div className={dishesCSS.content}>
                        <div className={dishesCSS.primDetail}>
                            <h3>Saumon Garvlax</h3>
                            <h5>$30</h5>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className={dishesCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>  <span>( 5star )</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={dishesCSS.card}>
                    <img src={img4} alt="" />

                    <div className={dishesCSS.content}>
                        <div className={dishesCSS.primDetail}>
                            <h3>Garvlax Cheverfrit</h3>
                            <h5>$30</h5>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className={dishesCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>  <span>( 5star )</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={dishesCSS.card}>
                    <img src={img5} alt="" />

                    <div className={dishesCSS.content}>
                        <div className={dishesCSS.primDetail}>
                            <h3>Cheverfrit Garvlax</h3>
                            <h5>$30</h5>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className={dishesCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i> <span>( 5star )</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={dishesCSS.card}>
                    <img src={img6} alt="" />

                    <div className={dishesCSS.content}>
                        <div className={dishesCSS.primDetail}>
                            <h3>Carpachhio Garvlax</h3>
                            <h5>$30</h5>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <div className={dishesCSS.ratings}>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i> <span>( 5star )</span> 
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        </div>
    )
}

export default Dishes