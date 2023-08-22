import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { useState, } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleButtonClick = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    }; // 

    

    return (


        <div className="home_container">
            <h1 className="homepage_title"> Brandon's Drinking Game </h1>
            
            <div className="enter_names">
                <AddPlayerNames />
            </div>
            <div className="button_holders">
                <button className="start_game_button" onClick={handleButtonClick}> Card Rules </button>
                <Link to='/drinking_game'><button className="start_game_button"> Start Game </button></Link>
            </div>
            {isPopupOpen && (
                <div className="rules_popup">
                    <ul className="rules_list">
                        <li> <span className="black"> Black </span> Cards - Cards of Death</li>
                        <li><span className="orange"> Orange </span> Cards - Cards that affect yourself</li>
                        <li><span className="green"> Green </span> Cards - Cards you can give to other people</li>
                        <li><span className="blue"> Blue </span> Cards - Mini Game Cards</li>
                        <li><span className="red"> Red </span> Cards - 1v1 Cards </li>
                        <li><span className="pink"> Pink </span> Cards - Video Cards</li>
                        <li><span className="yellow"> Yellow </span> Cards - Cards Cards</li>
                    </ul>
                    <button className="start_game_button" onClick={closePopup}>Close</button>
                </div>
            )}
        </div>





    )
}

export default Home
