import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { useState, } from 'react';
import LastOrdersLogo from "./images/LastOrdersLogo.png"
import x_logo from "./images/x_logo.png"
import facebook_logo from "./images/facebook_logo.png"
import tiktok_logo from "./images/tiktok_logo.png"
import CheckboxList from './CheckboxListComponent';

const Home = () => {
    const [firstScreenStyle, setFirstScreenStyle] = useState("first_screen")
    const [secondScreenStyle, setSecondScreenStyle] = useState("second_screen_gone")
    const [thirdScreenStyle, setThirdScreenStyle] = useState("third_screen_gone");

    //Moves the Logo up and shows the Rules section
    const firstTransition = () => {
        setFirstScreenStyle("first_screen_gone")
        setSecondScreenStyle("second_screen")
    };
    //Moves the Rules up and shows the Add Players section
    const secondTransition = () => {
        setSecondScreenStyle("second_screen_gone_2");
        setThirdScreenStyle("third_screen");
    };

    return (

        <div className="home_container">
            <div className={firstScreenStyle}>
                <p className="version_text"> version 3.0 </p>
                <a href="https://twitter.com/LastOrdersGame" target="_blank"> <img src={x_logo} className="x_logo_homepage" alt="x_logo"></img> </a>
                <a href="https://www.facebook.com/profile.php?id=61556201727778" target="_blank"> <img src={facebook_logo} className="facebook_logo_homepage" alt="facebook_logo"></img> </a>
                <a href="https://www.tiktok.com/@lastordersgame" target="_blank"> <img src={tiktok_logo} className="tiktok_logo_homepage" alt="tiktok_logo"></img> </a>
                <img src={LastOrdersLogo} className="lologo" alt="last_orders_logo"></img>
                <button className="click_here_to_start_button" onClick={firstTransition}> Click Here to Start </button>
            </div>

            <div className={secondScreenStyle}>
                <CheckboxList />
                <button className="second_page_continue_button" onClick={secondTransition}> Continue </button>
            </div>

            <div className={thirdScreenStyle}>
                <AddPlayerNames />
            </div>
        </div>





    )
}

export default Home
