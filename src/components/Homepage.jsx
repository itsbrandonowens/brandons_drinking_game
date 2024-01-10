import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { useState, } from 'react';


import DrinkingGame from './DrinkingGame';
import LastOrdersLogo from "./images/LastOrdersLogo.png"
const Home = () => {
    /* Logo Page -->  Rules Page --> Add Players*/

    const [rulesStyle, setRulesStyle] = useState("rules_container_gone")
    const [enterNamesStyle, setEnterNamesStyle] = useState("enter_names_gone");
    const [secondButtonStyle, setSecondButtonStyle] = useState("start_game_button");
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
                        <p className="rules_text">You must do what the card says, some cards may last a certain amount of minutes so use the timer when necessary.</p>
                        <ul>
                            <li className="rules_text_list"> Black Cards - Cards of Death: Avoid these at ALL costs! </li>
                            <li className="rules_text_list"> Green Cards - Cards that involve every, or most players </li>
                            <li className="rules_text_list"> Blue Cards - Mini Game cards, these involve every player </li>
                            <li className="rules_text_list"> Orange Cards - Solo Drink Cards, just for the current player </li>
                            <li className="rules_text_list"> Yellow Cards - Cards involving playing Cards </li>
                            <li className="rules_text_list"> Pink Cards - Video Cards, play the video along with the card </li>
                            <li className="rules_text_list"> White Cards - Spin the WHEEL, and find your fortune </li>
                            <li className="rules_text_list"> Purple Cards - Roll The Dice and decide your fate </li>
                            <li className="rules_text_list"> Red Cards - Versus Cards, puts players against each other </li>
                        </ul>
                        <p className="rules_text"> If a card requires you to take a shot, this can be replaced with a full drink if required.  </p>


                    </div>
                    <div className="rules_grid_item">
                        <p className="rules_text">Everyone playing must be over the age of 18</p>
                        <p className="rules_text">Everyone must drink responsibly</p>
                        <p className="rules_text">Continue if you agree to our Privacy and Cookie Policy</p>
                    </div>
                </div>
                <button className="add_players_button" onClick={secondTransition}> Continue </button>
            </div>
            <div className={enterNamesStyle}>
                <AddPlayerNames />

            </div>


        </div>





    )
}

export default Home
