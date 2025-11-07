import React from "react";
import arrowSVG from './../../Images/arrow.svg'

import teamCSS from './../Team/Team.module.css'

import TeamCardImg1 from './../../Images/Team1.png'
import TeamCardImg2 from './../../Images/Team2.png'
import TeamCardImg3 from './../../Images/Team3.png'
import TeamCardImg4 from './../../Images/Team4.png'

function Team() {
    return (
        <div className={`section ${teamCSS.TeamWrapper}`} id="team">
            <div className="section_title">
                <h2>They will Cook for You</h2>

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, minima.</p>

                    <button>
                        <img src={arrowSVG} alt="" /> More About
                    </button>
                </div>
            </div>

            <div className={teamCSS.TeamCards}>
                <div className={teamCSS.TeamCard}>
                   <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg1} alt="" />
                   </div>

                    <h3>Paul Trueman</h3>
                    <p>Chef</p>
                    <div className={teamCSS.social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-x-fill"></i>
                        <i className="ri-github-fill"></i>
                    </div>
                </div>
                <div className={teamCSS.TeamCard}>
                   <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg2} alt="" />
                   </div>

                    <h3>Emma Newman</h3>
                    <p>Assistant Chef</p>
                    <div className={teamCSS.social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-x-fill"></i>
                        <i className="ri-github-fill"></i>
                    </div>
                </div>
                <div className={teamCSS.TeamCard}>
                   <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg3} alt="" />
                   </div>

                    <h3>Paul Trueman</h3>
                    <p>Chef</p>
                    <div className={teamCSS.social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-x-fill"></i>
                        <i className="ri-github-fill"></i>
                    </div>
                </div>
                <div className={teamCSS.TeamCard}>
                   <div className={teamCSS.TeamImg}>
                        <img src={TeamCardImg4} alt="" />
                   </div>

                    <h3>Oscar Oldman</h3>
                    <p>Chef</p>
                    <div className={teamCSS.social}>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-twitter-x-fill"></i>
                        <i className="ri-github-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team 