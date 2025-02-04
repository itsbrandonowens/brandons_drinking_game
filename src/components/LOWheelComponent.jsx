import React from 'react'
import '../styles/GameCards.css'
import white_card from "./images/white_card.png"
import white_card_mobile from "./images/white_card_mobile.png"
import wheel_of_pain from "./images/wheel_of_pain.png"
import wheel_stopper from "./images/wheel_stopper.png"

import { useState, } from 'react';

const LOWheelComponent = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))
    const [wheelStyle, setWheelStyle] = useState("wheel_still")
    
    
    const cards = [
        {
            title: 'The Wheel!',
        },
    ]

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    const [wheelNum, setWheelNum] = useState(randomNumberInRange(1,12));
    
    const randomWheelSpin = () => { 
        setWheelNum(randomNumberInRange(1,12))
        setWheelStyle("wheel" + wheelNum)
        
    }


    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
            <img src={window.innerWidth > 767 ? white_card : white_card_mobile} className="cards" alt="white_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>     
                <img src={wheel_of_pain} onClick={randomWheelSpin}  className={wheelStyle} alt="white_card"></img>
                <img src={wheel_stopper} className="wheel_stopper" alt="white_card"></img>
            </div>
        </div>





    )
}

export default LOWheelComponent