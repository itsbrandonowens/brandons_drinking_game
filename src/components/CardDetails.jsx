import React from 'react'
import '../styles/DeckDetails.css'
import { useState, } from 'react';
import card_back_fiftytwo from "./images/card_back_fiftytwo.png"
import card_back_att from "./images/card_back_att.png"
import card_back_loplus from "./images/card_back_loplus.png"
import ww from "./images/shearer.png"
import eq from "./images/earthquake_image.png"
import bn from "./images/boozenami.png"
import genie from "./images/genie_image.png"
import shield from "./images/reflect_shield.png"
import chest from "./images/chest_full.png"
import gamble from "./images/gamble_image.png"
import { useNavigate } from 'react-router-dom';

const CardDetails = () => {

    const [count, setCount] = useState(0);

    const navigate = useNavigate();

    const shownFeatures = [
        <div className='feature_details_container'>
            <div className='feature_individual_container'>
                <img src={ww} className="feature_image" alt="WW"></img>
                <p className="feature_text">Walan Wearer will appear and allow someone to dish out 4 drinks to anybody they want. This can be 4 drinks to 1 person, or spread out between any player/s</p>
            </div>

            <div className='feature_individual_container'>
                <img src={eq} className="feature_image" alt="EQ"></img>
                <p className="feature_text">The screen will start to shake and ALL players must finish their drink and then click next card</p>
            </div>

            <div className='feature_individual_container'>
                <img src={bn} className="feature_image" alt="BN"></img>
                <p className="feature_text">Waves will flood the screen and all players must switch drinks with another player, and finish their drink</p>
            </div>

            <div className='feature_individual_container'>
                <img src={genie} className="feature_image" alt="Genie"></img>
                <p className="feature_text">The genie will grant a player 3 wishes! They can make 1 person drink, create 1 rule that must be followed until another genie appears AND they can choose to nullify thier next forfeit</p>
            </div>
        </div>
        ,

        <div className='feature_details_container'>
            <div className='feature_individual_container'>
                <img src={shield} className="feature_image" alt="Shield"></img>
                <p className="feature_text">The shield allows a player to pass their next forfeit onto another player</p>
            </div>
            <div className='feature_individual_container'>
                <img src={chest} className="feature_image" alt="Chest"></img>
                <p className="feature_text">Pick a chest, whatever is inside the chest you must do. The other 2 chests will then open revealing what could have been your fate</p>
            </div>
            <div className='feature_individual_container'>
                <img src={gamble} className="feature_image" alt="Gamble"></img>
                <p className="feature_text">There will be a forfeit on the bottom. Choose between the red chip or the blue chip. Whatever multiplier you get, you must multiply by the forfeit and drink that many drinks. If its 0x, you are one lucky player</p>
            </div>
        </div>
    ]


    return (
        <div className='cards_rules_container'>
            <h1 className='cards_rules_title'> Deck and Feature Details </h1>
            <button className="cards_rules_home" onClick={() => navigate(-1)}> 🔙 </button>

            <button className="left_button_deck" > ⬅️ </button>
            <div className='deck_details_container'>
                <div className='deck_individual_container'>
                    <img src={card_back_loplus} className="deck_image" alt="LO+"></img>
                    <p className="deck_text">Last Orders +. This deck includes several mini game cards to the game. Such as, The Wheel of Booze, The D20 of Drinks and Rock, Paper, Scissors.</p>
                </div>

                <div className='deck_individual_container'>
                    <img src={card_back_fiftytwo} className="deck_image" alt="52 Deck"></img>
                    <p className="deck_text">52 Cards Deck. Includes games that would use a deck of 52 cards. This includes, Ring of Fire, Park the Bus and Higher or Lower</p>
                </div>

                <div className='deck_individual_container'>
                    <img src={card_back_att} className="deck_image" alt="At The Tavern"></img>
                    <p className="deck_text"> At The Tavern. This means you should only play this deck if you are in a bar. They are filled with forfeits and challenges that you can only do in a pub or bar</p>
                </div>
            </div>
            <button className="right_button_deck"> ➡️ </button>

            {count > 0 && <button className="left_button_feature" onClick={() => setCount(count - 1)}>⬅️ </button>}
            {shownFeatures[count]} 
            {count < shownFeatures.length - 1 && <button className="right_button_feature" onClick={() => setCount(count + 1)}>➡️ </button>}

        </div>
    );
}




export default CardDetails
