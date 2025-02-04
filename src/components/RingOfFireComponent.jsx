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

const RingOfFireComponent = () => {
    const playing_cards = [two_of_spades, three_of_spades, four_of_spades, five_of_spades, six_of_spades, seven_of_spades, eight_of_spades, nine_of_spades, ten_of_spades, eleven_of_spades, twelve_of_spades, thirteen_of_spades, fourteen_of_spades]
    const finalRandomCard = playing_cards[Math.floor(Math.random() * playing_cards.length)];
    const [randomCard, setRandomCard] = useState(back_of_card)


    let checkCardHandler = () => {
        setRandomCard(finalRandomCard)
        console.log(randomCard)
    }

    return (
        <div className="cards_and_button_container">
            <img src={randomCard} className="rof_card" alt="playing_card" onClick={checkCardHandler}></img>
            {
                randomCard == two_of_spades ?
                    <p className="rof_description"> Choose : Choose someone to drink </p>
                    : null
            }
            {
                randomCard == three_of_spades ?
                    <p className="rof_description"> Me : Take a drink! </p>
                    : null
            }

            {
                randomCard == four_of_spades ?
                    <p className="rof_description"> Whore : Girls Drink! </p>
                    : null
            }
            {
                randomCard == five_of_spades ?
                    <p className="rof_description"> Thumb Master : Everyone put your thumb on the table, last to do so must drink! </p>
                    : null
            }
            {
                randomCard == six_of_spades ?
                    <p className="rof_description"> Dicks : All Men Drink! </p>
                    : null
            }
            {
                randomCard == seven_of_spades ?
                    <p className="rof_description"> Heaven : Everyone raise your hand, last person to do so must drink! </p>
                    : null
            }
            {
                randomCard == eight_of_spades ?
                    <p className="rof_description"> Mate : Choose someone to drink with you! </p>
                    : null
            }
            {
                randomCard == nine_of_spades ?
                    <p className="rof_description"> Rhyme : You must pick a word, the next person must think of a word that rhymes with it, this keeps going until someone can't. They must drink! </p>
                    : null
            }
            {
                randomCard == ten_of_spades ?
                    <p className="rof_description"> Make a Rule : You can make up any rule that everyone must follow for 10 minutes! </p>
                    : null
            }
            {
                randomCard == eleven_of_spades ?
                    <p className="rof_description"> Jack : You can give out 5 drinks! </p>
                    : null
            }
            {
                randomCard == twelve_of_spades ?
                    <p className="rof_description"> Queen : You and a buddy must drink twice! </p>
                    : null
            }
            {
                randomCard == thirteen_of_spades ?
                    <p className="rof_description"> King : You must drink half of your drink! </p>
                    : null
            }
            {
                randomCard == fourteen_of_spades ?
                    <p className="rof_description"> Waterfall : Everyone must keep drinking until the person who picked the card stops! </p>
                    : null
            }
        </div>
    )
}

export default RingOfFireComponent