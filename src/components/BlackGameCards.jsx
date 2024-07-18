import React from 'react'
import '../styles/GameCards.css'
import black_card from "./images/black_card.png"
import black_card_mobile from "./images/black_card_mobile.png"
import { useState, } from 'react';

const BlackGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))
    

    const cards = [ 
        { 
            title: 'Black Card #1',
            description: 'Finish your drink, no matter how full!'
        },
        {
            title: 'Black Card #2',
            description: 'Take a shot, of any spirit you like!'
        },
        { 
            title: 'Black Card #3',
            description: 'Finish your drink, no matter how full and take a shot of any spirit you like!'
        },
        { 
            title: 'Black Card #4',
            description: 'Pour yourself a new, full drink, and take a shot!'
        },
        {
            title: 'Black Card #5',
            description: 'Everybody finish your drinks! '
        },
        {
            title: 'Black Card #6',
            description: 'Your off the hook, pick someone to down their drink!'
        },
        {
            title: 'Black Card #7',
            description: 'Play Rock, Paper, Scissors with everyone in the room, do a shot for every player you lose too!'
        },
        {
            title: 'Black Card #8',
            description: 'You may shout "Chug!" at any point and everyone has to finish their drinks! Can only be used once!'
        },
        {
            title: 'Black Card #9',
            description: 'Whoever has the MOST drink left, must finish it!'
        },
        
    ]
     
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={window.innerWidth > 767 ? black_card : black_card_mobile} className="cards" alt="black_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default BlackGameCards