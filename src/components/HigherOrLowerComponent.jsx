import React from 'react'
import '../styles/GameCards.css'
import { useState, } from 'react';
import two_of_spades from "./images/cards/2S.png"
import three_of_spades from "./images/cards/3S.png"
import four_of_spades from "./images/cards/4S.png"
import five_of_spades from "./images/cards/5S.png"
import six_of_spades from "./images/cards/6S.png"
import seven_of_spades from "./images/cards/7S.png"
import eight_of_spades from "./images/cards/8S.png"
import nine_of_spades from "./images/cards/9S.png"
import ten_of_spades from "./images/cards/10S.png"
import eleven_of_spades from "./images/cards/JS.png"
import twelve_of_spades from "./images/cards/QS.png"
import thirteen_of_spades from "./images/cards/KS.png"
import fourteen_of_spades from "./images/cards/AS.png"
import back_of_card from "./images/cards/card_back.png"

const HigherOrLowerComponent = () => {
    const playing_cards = [two_of_spades, three_of_spades, four_of_spades, five_of_spades, six_of_spades, seven_of_spades, eight_of_spades, nine_of_spades, ten_of_spades, eleven_of_spades, twelve_of_spades, thirteen_of_spades, fourteen_of_spades]
    const finalRandomCard2 = playing_cards[Math.floor(Math.random() * playing_cards.length)];
    const [randomCard2, setRandomCard2] = useState(back_of_card)


    let checkCardHandler = () => {
        setRandomCard2(finalRandomCard2)
        console.log(randomCard2)
    }
    return (
        <div className="cards_and_button_container">
            <img src={seven_of_spades} className="playing_card1" alt="playing_card"></img>
            <img src={randomCard2} className="playing_card2" alt="playing_card" onClick={checkCardHandler}></img>
        </div>
    )
}

export default HigherOrLowerComponent