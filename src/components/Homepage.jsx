import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { useState, } from 'react';
import DrinkingGame from './DrinkingGame';
import LastOrdersLogo from "./images/LastOrdersLogo.png"
import { Link } from 'react-router-dom';
import privacy_policy from "./images/privacy_policy.pdf"

const Home = () => {


    const [rulesStyle, setRulesStyle] = useState("rules_container_gone")
    const [enterNamesStyle, setEnterNamesStyle] = useState("enter_names_gone");
    const [homeStyle, setHomeStyle] = useState("home_style")


    const firstTransition = () => {
        setHomeStyle("home_style_gone")
        setRulesStyle("rules_container")
    };

    const secondTransition = () => {
        setRulesStyle("rules_container_gone2");
        setEnterNamesStyle("enter_names");
    };


    return (

        <div className="home_container">
            <div className={homeStyle}>
                <img src={LastOrdersLogo} className="lologo" alt="last_orders_logo"></img>
                <button className="start_game_button1" onClick={firstTransition}> Click Here to Start </button>
            </div>
            <div className={rulesStyle}>

                <div className="rules_grid">
                    <div className="rules_grid_item">
                        <p className="rules_text">You must do what the card says, some cards may last a certain amount of minutes so use a timer if necessary.</p>
                        <Link style={{ color: "black", textDecoration: 'none' }} to='/rules'><li className="rules_page_button"> 📜 Click for all Rules </li> </Link>
                        <p className="rules_text"> If a card requires you to take a shot, this can be replaced with a full drink if required.  </p>

                    </div>
                    <div className="rules_grid_item">
                        <p className="rules_text_legal">⛔ Everyone playing must be over the age of 18</p>
                        <p className="rules_text_legal">🍻 Everyone must drink responsibly</p>
                        <p className="rules_text_legal">🍪 Continue if you agree to our <a href={privacy_policy} className="policy_links" target="_blank" > Privacy</a>  and <a href={privacy_policy} className="policy_links" target="_blank"> Cookie</a>  Policy</p>
                    </div>
                </div>
                <button className="rules_button" onClick={secondTransition}> Continue </button>
            </div>
            <div className={enterNamesStyle}>
                <AddPlayerNames />

            </div>


        </div>





    )
}

export default Home
