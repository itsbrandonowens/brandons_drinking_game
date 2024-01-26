import React from 'react'
import '../styles/GameCards.css'
import purple_card from "./images/purple_card.png"
import DiceComponent from './DiceComponent';
import { useState, useEffect } from 'react';

const PurpleGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    const randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))

    const cards = [
        {
            title: 'Your Knicked!',
            description: 'You have been caught by the guard and sentenced to 5 drinks! ',
            dice_roll_desc: 'Roll above a 15 to escape!'
        },
        {
            title: 'Goblin Boss!',
            description: 'You have stumbled upon the goblin boss, he tells you to neck your poisoned drink! ',
            dice_roll_desc: 'Roll above a 10 to defeat him! or else, neck your poisoned drink'
        }, 
        { 
            title: 'The Bartender!', 
            description: 'You approach the bartender and ask for your order! ',
            dice_roll_desc: 'Roll 10 or below to drink once, drink 3 times if its 11 or above'
        },
        { 
            title: 'Sneak 100!', 
            description: 'You have been caught stealing! ',
            dice_roll_desc: 'Roll 16 or above to get away with it! Or else, drink 3 times.'
        },
        { 
            title: 'Cthulu!', 
            description: 'You have been found by The Almighty Cthulu! ',
            dice_roll_desc: 'Roll 10 or above to defeat him! Or else, take a shot!'
        },    
        { 
            title: 'Hail Mary!', 
            description: 'You have been approached by The Queen!',
            dice_roll_desc: 'Roll a Nat 20 to tell someone to neck their drink for rizzing up the Queen! Or else, you drink once to gain some confidence'
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

    const randomValue = cards[Math.floor(Math.random() * cards.length)]
   

    return (

        <div className="card_container">
            <img src={purple_card} className="cards" alt="purple_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>

                <p className="dice_description">{randomValue.description}</p>
                <p className="dice_roll_desc">{randomValue.dice_roll_desc}</p>
            <DiceComponent/>
            </div>
        </div>





    )
}

export default PurpleGameCards