import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { useState, } from 'react';
import DrinkingGame from './DrinkingGame';
import LastOrdersLogo from "./images/LastOrdersLogo.png"
import { Link } from 'react-router-dom';
import privacy_policy from "./images/privacy_policy.pdf"
import cookie_policy from "./images/cookie_policy.pdf"
import x_logo from "./images/x_logo.jpg"
import facebook_logo from "./images/facebook_logo.png"
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
                <a href="https://twitter.com/LastOrdersGame" target="_blank"> <img src={x_logo} className="x_logo_homepage" alt="x_logo"></img> </a>
                <a href="https://www.facebook.com/profile.php?id=61556201727778" target="_blank"> <img src={facebook_logo} className="facebook_logo_homepage" alt="x_logo"></img> </a>
                <img src={LastOrdersLogo} className="lologo" alt="last_orders_logo"></img>
                <button className="start_game_button" onClick={firstTransition}> Click Here to Start </button>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3401357378524890"
                crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
                data-ad-client="ca-pub-3401357378524890"
                data-ad-slot="1335311516"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
            <div className={rulesStyle}>

                <div className="rules_grid">
                    <div className="rules_grid_item">
                        <p className="rules_text">Follow the instructions on each card. Click the button below to see the rules for each in-game feature.</p>
                        <Link style={{ color: "black", textDecoration: 'none' }} to='/rules'><li className="rules_page_button"> 📜 Click for all Rules </li> </Link>
                        <p className="rules_text"> If a card requires you to take a shot, this can be replaced with a full drink if required.  </p>

                    </div>
                    <div className="rules_grid_item">
                        <div className="legal_rules_container">
                            <p className="rules_text_legal">⛔ Everyone playing must be over the age of 18</p>
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
