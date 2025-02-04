import React, { useState } from 'react';
import '../styles/GameCards.css'
import purple_card from "./images/purple_card.png"
import purple_card_mobile from "./images/purple_card_mobile.png"
import DiceComponent from './DiceComponent';
import red_card from "./images/red_card.png"
import red_card_mobile from "./images/red_card_mobile.png"
import LOWheelComponent from "./LOWheelComponent";
import RPSComponent from "./RPSComponent";


const LOPlusDeck = () => {
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
    //Stuff for Red Cards
    function arrayRemove(storedNames, value) {

        return storedNames.filter(function (geeks) {
            return geeks != value
        });
    }

    let storedNames2 = arrayRemove(storedNames, randomName);
    let randomName2 = storedNames2[Math.floor(Math.random() * storedNames2.length)];
    

    //All Card Colours with their respective cards
    const purple_cards = [
        {
            title: 'Your Knicked!',
            description: 'You have been caught by the guard and sentenced to 3 drinks! ',
            dice_roll_desc: 'Roll above a 15 to escape!'
        },
        {
            title: 'Goblin Boss!',
            description: 'You have stumbled upon the goblin boss, he tells you to neck your poisoned drink! ',
            dice_roll_desc: 'Roll above a 6 to defeat him! or else, neck your poisoned drink'
        },
        {
            title: 'The Bartender!',
            description: 'You approach the bartender and ask for your order! ',
            dice_roll_desc: 'Roll 10 or below to drink once, drink 3 times if its 11 or above'
        },
        {
            title: 'Sneak 100!',
            description: 'You have been caught stealing! ',
            dice_roll_desc: 'Roll 16 or above to get away with it! Or else, take 2 drinks.'
        },
        {
            title: 'Cthulu!',
            description: 'You have been found by The Almighty Cthulu! ',
            dice_roll_desc: 'Roll 10 or above to defeat him! Or else, take a shot!'
        },
        {
            title: 'Frost Giant!',
            description: 'You have been challenged by the Frost Giant!',
            dice_roll_desc: 'Roll a 13 or above to avoid your next forfeit! Or else, you must drink double for 5 minutes'
        },
        {
            title: 'Magic Missile!',
            description: 'You have been approached by a Mage',
            dice_roll_desc: 'Roll above a 5 to free yourself! Or else, neck half of your drink'
        },
        {
            title: 'The Dancing Tramp!',
            description: 'You have found a Hobo on the street, you give him 20p to dance',
            dice_roll_desc: 'If you roll a 1, The Hobo kicks the shit out of you, neck your drink and do a shot.'
        },
        {
            title: 'Bellend Bouncer!',
            description: 'The bouncer wont let you in, because your too pissed',
            dice_roll_desc: 'Roll above a 15 to recieve a free pass for the next forfeit and sober yourself up!'
        },


    ]

    const red_cards = [
        {
            title: 'Race for a spoon',
            description: 'First person to come back with a spoon wins! The loser must do 5 sips'
        },
        {
            title: 'Race to neck!',
            description: 'First person to neck the rest of their drink wins! Loser must do a shot (or a full drink if no shots)'
        },
        {
            title: 'Race to call!',
            description: 'First person to call someone not in this room and get an answer wins! Loser must do 3 sips'
        },
        {
            title: 'Race for a dildo',
            description: 'You have 30 seconds to find an item that could be used as a dildo, person with the least pleasurable item must drink. If you find an actual dildo, the other player must finish their drink'
        },
        {
            title: 'Most Likely To: Get an STD',
            description: 'Everyone must vote who, out of these two players, is most likely to get an STD, loser must drink'
        },
        {
            title: 'Most Likely To: Be a Nonce',
            description: 'Everyone must vote who, out of these two players, is most likely to be a nonce, loser must drink'
        },
        {
            title: 'Most Likely To: Get Arrested',
            description: 'Everyone must vote who, out of these two players, is most likely to get arrested, loser must drink'
        },
        {
            title: 'Most Likely To: Be Kicked of a Plane',
            description: 'Everyone must vote who, out of these two players, is most likely to be kicked off a plane, loser must drink '
        },
        {
            title: 'Short Arse',
            description: 'Shortest player out of you two must drink, tallest player then gives out 2 drinks'
        },
        {
            title: 'Blockbuster',
            description: 'Both players must say their favourite movies, everyone else vote which movie is worst, the player with the most votes must drink!'
        },
        {
            title: '1337 Gamer',
            description: 'Both players must say their favourite game, everyone else vote which game is worst, the player with the most votes must drink!'
        },
        {
            title: 'Most Likely To: Win in a Fight',
            description: 'Everyone must vote who, out of these two players, is most likely to win in a fight. Loser must drink.'
        },
        {
            title: 'Awful Lodger',
            description: 'Everyone must vote who, out of these two players, would be the most annoying person to live with, they must drink.'
        },
        {
            title: 'Dont Drop The Soap!',
            description: 'Everyone must vote, if these two players were in prison, who would be the prison bitch? They must drink'
        },
        {
            title: 'Reeel Badman!',
            description: 'Everyone must vote who, out of these two players, could end up having a kid first? They must drink'
        },
        {
            title: 'Cereal Categories!',
            description: 'These 2 players must go back and forth naming types or brands of cereal, first to mess up, drinks!'
        },
        {
            title: 'Currency Categories!',
            description: 'These 2 players must go back and forth naming as many currencies as they can, first to mess up, drinks!'
        },
    ]

    let randomPurpleCardValue = purple_cards[Math.floor(Math.random() * purple_cards.length)];
    let randomRedCardValue = red_cards[Math.floor(Math.random() * red_cards.length)];

    return (
        <div>
            { // Purple Cards
                num >= 1 && num <= 30 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? purple_card : purple_card_mobile} className="cards" alt="purple_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomPurpleCardValue.title} </h2>
                            <p className="card_player_name">{storedNames[assignedNameCard]}</p>

                            <p className="dice_description">{randomPurpleCardValue.description}</p>
                            <p className="dice_roll_desc">{randomPurpleCardValue.dice_roll_desc}</p>
                            <DiceComponent />
                        </div>
                    </div>

                    : null
            }

            { // Red Cards
                num >= 31 && num <= 45 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? red_card : red_card_mobile} className="cards" alt="red_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomRedCardValue.title} </h2>
                            <p className="card_player_name">{randomName} <span className="versus_label"> vs </span> {randomName2}</p>
                            <p className="card_description">{randomRedCardValue.description}</p>
                        </div>
                    </div>

                    : null
            }

            {// White Cards
                num >= 46 && num <= 90 ?
                    <LOWheelComponent/>

                    : null
            }

            { // Rock, Paper, Scissors White Cards
                num >= 91 && num <= 100 ?
                    <RPSComponent />

                    : null
            }


        </div>

    );
}

export default LOPlusDeck;