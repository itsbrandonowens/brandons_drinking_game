import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, } from 'react';
import '../styles/Rules.css'

import shearer_image from './images/shearer.png'
import earthquake_image from './images/earthquake_image.png'
import boozenami_image from './images/boozenami.png'
import genie_image from './images/genie_image.png'
import shield_image from './images/reflect_shield.png'
import LastOrdersLogo from "./images/LastOrdersLogo.png"
const Rules = () => {
    //Go Back Function
    const navigate = useNavigate();

    //Next Set of Rules
    let [isActive2, setActive2] = useState(false)
    let next_rules = () => {
        setActive2(!isActive2);

    };
  

    return (

        <div className="rules_page_container">
            <button className="go_back_button" onClick={() => navigate(-1)}> 📜 Go Back </button>
            <img src={LastOrdersLogo} className="lologo_rules" alt="last_orders_logo"></img>
            <h1 className="rules_title"> Last Orders Rules </h1>
            <button className="next_button" onClick={next_rules} > 🃏 Next </button>

            <div className={isActive2 ? "rules_1_gone" : "rules_1"}>
                <div className="rules_page_grid">
                    <div className="rules_page_grid_item">
                        <div className="rules_page_grid2">
                            <img src={shearer_image} className="rules_image" alt="shearer"></img>
                            <h2 className="rules_page_text">Walan Wearer will appear and allow someone to dish out 4 drinks to anybody they want. This can be 4 drinks to 1 person, or spread out between any player/s</h2>
                        </div>
                    </div>
                    <div className="rules_page_grid_item">
                        <div className="rules_page_grid2">
                            <img src={earthquake_image} className="rules_image" alt="shearer"></img>
                            <h2 className="rules_page_text">The screen will start to shake and ALL players must finish their drink and then click next card.</h2>
                        </div>
                    </div>
                    <div className="rules_page_grid_item">
                        <div className="rules_page_grid2">
                            <img src={boozenami_image} className="rules_image" alt="shearer"></img>
                            <h2 className="rules_page_text">Waves will flood the screen and all players must switch drinks with another player, and finish their drink</h2>
                        </div>
                    </div>
                    <div className="rules_page_grid_item">
                        <div className="rules_page_grid2">
                            <img src={genie_image} className="rules_image" alt="shearer"></img>
                            <h2 className="rules_page_text">The genie will grant a player 3 wishes! They can make 1 person drink, create 1 rule that must be followed until another genie appears AND they can choose to
                                nullify thier next forfeit</h2>
                        </div>
                    </div>
                    <div className="rules_page_grid_item">
                        <div className="rules_page_grid2">
                            <img src={shield_image} className="rules_image" alt="shearer"></img>
                            <h2 className="rules_page_text">The shield allows a player to pass their next forfeit onto another player</h2>
                        </div>
                    </div>
                </div>




            </div>
            <div className={isActive2 ? "rules_1" : "rules_1_gone"}>
                <div className="rules_page_grid_item">
                    <ul className="rules_page_list">
                        <li className="rules_page_list_item"> Black Cards - Cards of Death: Avoid these at ALL costs! </li>
                        <li className="rules_page_list_item"> Green Cards - Cards that involve every, or most players </li>
                        <li className="rules_page_list_item"> Blue Cards - Mini Game cards, these involve every player </li>
                        <li className="rules_page_list_item"> Orange Cards - Solo Drink Cards, just for the current player </li>
                        <li className="rules_page_list_item"> Yellow Cards - Cards involving playing Cards </li>
                        <li className="rules_page_list_item"> Pink Cards - Video Cards, play the video along with the card </li>
                        <li className="rules_page_list_item"> White Cards - Spin the WHEEL, and find your fortune </li>
                        <li className="rules_page_list_item"> Purple Cards - Roll The Dice and decide your fate </li>
                        <li className="rules_page_list_item"> Red Cards - Versus Cards, puts players against each other </li>
                    </ul>
                </div>

            </div>




        </div >
    )
}

export default Rules