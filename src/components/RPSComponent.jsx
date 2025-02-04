import React from 'react'
import '../styles/GameCards.css'
import white_card_rps from "./images/white_card_rps.png"
import white_card_rps_mobile from "./images/white_card_rps_mobile.png"
import rock_image from "./images/rock.png"
import scissors_image from "./images/scissors.png"
import paper_image from "./images/paper.png"
 
import { useState, } from 'react';

const RPSComponent = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))
    const rpsImage = [rock_image, paper_image,scissors_image]
    const finalRPSChoice = rpsImage[Math.floor(Math.random() * rpsImage.length)];
    const [rpsImageStyle, setRPSImageStyle] = useState("RPS_before_game_container_gone");
    const [rpsContainerStyle, setRPSContainerStyle] = useState("RPS_before_game_container");
    const [countdownNum, setCountdownNum] = useState("");

    const cards = [
        {
            title: 'Rock, Paper, Scissors!',
        },
    ]
    
    const RPSDecider = () => {
        setRPSContainerStyle("RPS_before_game_container_gone")
        setTimeout(() => {
            setCountdownNum("Rock")
        }, "500");

        setTimeout(() => {
            setCountdownNum("Paper")
        }, "1500");

        setTimeout(() => {
            setCountdownNum("Scissors")
        }, "2500");

        setTimeout(() => {
            setCountdownNum("SHOOT!")
        }, "3500");

        setTimeout(() => {
            setCountdownNum("")      
                setRPSImageStyle("rps_image")     
        }, "4500");
    }



    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
            <img src={window.innerWidth > 767 ? white_card_rps : white_card_rps_mobile} className="cards" alt="white_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <div className={rpsContainerStyle}>
                    <p className="RPS_before_description" > Play Rock, Paper Scissors against this device! If you lose or draw, you drink. If you win, you give out a drink!</p>
                    <h2 className="RPS_before_click" onClick={RPSDecider}> Start </h2>
                </div>
                
                <p className="RPS_countdown"> {countdownNum} </p>
                <img src={finalRPSChoice} className={rpsImageStyle}></img>

            </div>
        </div>





    )
}

export default RPSComponent