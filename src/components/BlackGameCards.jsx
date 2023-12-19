import React from 'react'
import '../styles/GameCards.css'
import black_card from "./images/black_card.png"
import { useState, } from 'react';

const BlackGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))
    const[score,setScore] = useState(0);

    const cards = [ 
        { 
            title: 'Neck your Drink',
            description: 'Finish your drink, no matter how full!'
        },
        {
            title: 'Take a Shot',
            description: 'Take a shot, of any spirit you like!'
        },
        { 
            title: 'Neck your Drink and Take a Shot',
            description: 'Finish your drink, no matter how full and take a shot of any spirit you like!'
        },
        { 
            title: 'Neck a FULL drink and take a shot!',
            description: 'Pour yourself a new, full drink, and take a shot!'
        },
        {
            title: 'EVERYONE DOWN IT',
            description: 'Everybody finish your drinks! '
        },
        {
            title: 'Lucky Black Card',
            description: 'Your off the hook, pick someone to down their drink!'
        },
        {
            title: 'Deadly Rock Paper Scissors',
            description: 'Play Rock, Paper, Scissors with everyone in the room, do a shot for every player you lose too!'
        },
        {
            title: 'Chug Card',
            description: 'You may shout "Chug!" at any point and everyone has to finish their drinks! Can only be used once!'
        },
        {
            title: 'Tinky Winky',
            description: 'Starting with you, take it in turns to say another name for a penis, first person to fail drink twice'
        },
    ]
    
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={black_card} className="cards" alt="black_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default BlackGameCards