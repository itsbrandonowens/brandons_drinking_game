import React from 'react'
import '../styles/GameCards.css'
import white_card from "./images/white_card.png"
import SpinningWheel from './SpinningWheel'

const WhiteGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];

    const cards = [
        {
            title: 'The Wheel!',
        },
    ]

    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
            <img src={white_card} className="cards" alt="white_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{randomName}</p>
                <div className="white_wheel_container">
                    <SpinningWheel />
                </div>
            </div>
        </div>





    )
}

export default WhiteGameCards