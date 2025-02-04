import React, { useState } from 'react';
import '../styles/GameCards.css'
import brown_card from "./images/brown_card.png"
import brown_card_mobile from "./images/brown_card_mobile.png"
import brutal_brown_card from "./images/brutal_brown_card.png"
import brutal_brown_card_mobile from "./images/brutal_brown_card_mobile.png"

const ATTDeck = () => {
    //This is for JSON Local Storage for names entered 
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))

    //Setting the random number to pick a card colour
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const num = randomNumberInRange(1, 100);



    //All Card Colours with their respective cards
    const brown_cards = [
        {
            title: 'I Want That One',
            description: 'Order your next drink without saying the name of it, or pointing!'
        },
        {
            title: 'Cheep',
            description: 'For your next drink, order the cheapest pint they have!'
        },
        {
            title: 'Something New',
            description: 'For your next drink, order a drink you have never had before!'
        },
        {
            title: 'Wombo Combo',
            description: 'Order a drink that is 2 pints mixed together, the person to your left must choose the 2 pints'
        },
        {
            title: 'Be Civil',
            description: 'Anyone not using a beer coaster must drink!'
        },
        {
            title: 'Glassie',
            description: 'If the glass collector has taken one of your glasses away today, drink twice!'
        },
        {
            title: 'Bruvva eerrr',
            description: 'Order a drink that is 2 pints mixed together, you choose what pints they are'
        },
        {
            title: 'Alphabetic Pints',
            description: 'Order a drink of something that starts with the letter A. If there is nothing, continue down the alphabet until you get a drink! '
        },



    ]

    const brutal_brown_cards = [
        {
            title: 'Predictable Pubs',
            description: 'If the pub you are in has the words “Queen”, “King”, “White”, “Lion” “Bull” or “Horse” in it. Down your drink.'
        },
        {
            title: 'King Cobrabite',
            description: 'Order a shot of vodka and pour it in your drink'
        },
        {
            title: 'Bartender Rizz',
            description: 'Ask the bartender for their phone number, or take a shot. If you try and fail, take a shot anyways'
        },
        {
            title: '330ml Neck',
            description: 'Everyone buy a 330ml bottle of beer/cider, last person to finish that bottle must do a shot '
        },
        {
            title: 'Shots Shots Shots',
            description: 'Everyone do a shot of the cheapest shot'
        },
        {
            title: 'Pure Ethanol',
            description: 'Do a shot of the strongest shot the pub offers'
        },
        {
            title: 'Random Selfie',
            description: 'Get a photo with a random person at the bar, or neck your drink'
        },
        {
            title: 'Cheap Shot',
            description: 'Order the cheapest shot the bar does, and neck it'
        },
        {
            title: 'Shots all Round',
            description: 'Buy a random person, not in this group a shot'
        },



    ]

    let randomBrownCardValue = brown_cards[Math.floor(Math.random() * brown_cards.length)];
    let randomBrutalBrownCardValue = brutal_brown_cards[Math.floor(Math.random() * brutal_brown_cards.length)];



    return (
        <div>
            { // Brown Cards
                num >= 1 && num <= 85 ?
                    <div className="card_container">
                       <img src={window.innerWidth > 767 ? brown_card : brown_card_mobile} className="cards" alt="black_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomBrownCardValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomBrownCardValue.description}</p>
           </div>   
                    </div>

                    : null
            }
            { // Brutal  Brown Cards
                num >= 86 && num <= 100 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? brutal_brown_card : brutal_brown_card_mobile} className="cards" alt="black_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomBrutalBrownCardValue.title} </h2>
                            <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                            <p className="card_description">{randomBrutalBrownCardValue.description}</p>
                        </div>
                    </div>

                    : null
            }
        </div>

    );
}

export default ATTDeck;