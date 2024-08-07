import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { useState, } from 'react';
import DrinkingGame from './DrinkingGame';
import LastOrdersLogo from "./images/LastOrdersLogo.png"
import { Link } from 'react-router-dom';
import privacy_policy from "./images/privacy_policy.pdf"
import cookie_policy from "./images/cookie_policy.pdf"
import x_logo from "./images/x_logo.png"
import facebook_logo from "./images/facebook_logo.png"
import tiktok_logo from "./images/tiktok_logo.png"
import lastOrdersATTLogo from "./images/lastOrdersATTLogo.png"


const Home = () => {
    const [rulesStyle, setRulesStyle] = useState("rules_container_gone")
    const [enterNamesStyle, setEnterNamesStyle] = useState("enter_names_gone");
    const [homeStyle, setHomeStyle] = useState("home_style")

    //Moves the Logo up and shows the Rules section
    const firstTransition = () => {
        setHomeStyle("home_style_gone")
        setRulesStyle("rules_container")
    };
    //Moves the Rules up and shows the Add Players section
    const secondTransition = () => {
        setRulesStyle("rules_container_gone2");
        setEnterNamesStyle("enter_names");
    };


    return (

        <div className="home_container">
            
            <div className={homeStyle}>
                <p className="version_text"> version 2.5 </p>
                <a href="https://twitter.com/LastOrdersGame" target="_blank"> <img src={x_logo} className="x_logo_homepage" alt="x_logo"></img> </a>
                <a href="https://www.facebook.com/profile.php?id=61556201727778" target="_blank"> <img src={facebook_logo} className="facebook_logo_homepage" alt="facebook_logo"></img> </a>
                <a href="https://www.tiktok.com/@lastordersgame" target="_blank"> <img src={tiktok_logo} className="tiktok_logo_homepage" alt="tiktok_logo"></img> </a>
                
                
                <img src={LastOrdersLogo} className="lologo" alt="last_orders_logo"></img>
                <button className="start_game_button" onClick={firstTransition}> Click Here to Start </button>
            </div>
            <div className={rulesStyle}>

                <div className="rules_grid">
                    <div className="rules_grid_item">
                        <p className="rules_text">Follow the instructions on each card. Click the button below to see the rules for each in-game feature.</p>
                        <Link style={{ color: "black", textDecoration: 'none' }} to='/rules'><li className="rules_page_button"> 📜 Click for all Rules </li> </Link>
                        <p className="rules_text"> If a card requires you to take a shot, this can be replaced with a full drink if required.  </p>

                    </div>
                    <div className="rules_grid_item">
                        <div className="legal_rules_container">
                            <p className="rules_text_legal">⛔ Everyone playing must be 18 or over</p>
                            <p className="rules_text_legal">🍻 Everyone must drink responsibly</p>
                            <p className="rules_text_legal">🍪 Continue if you agree to our <a href={privacy_policy} className="policy_links" target="_blank" > Privacy</a>  and <a href={cookie_policy} className="policy_links" target="_blank"> Cookie</a>  Policy</p>
                        </div>
                    </div>
                </div>
                <button className="rules_continue_button" onClick={secondTransition}> Continue </button>
            </div>
            <div className={enterNamesStyle}>
                <AddPlayerNames />
            </div>


        </div>





    )
}

export default Home
