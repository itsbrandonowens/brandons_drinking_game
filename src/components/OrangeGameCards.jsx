import React from 'react'
import '../styles/GameCards.css'
import orange_card from "./images/orange_card.png"
import orange_card_mobile from "./images/orange_card_mobile.png"

const OrangeGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))
    
    const cards = [ 
        { 
            title: '3 Big Sips',
            description: 'Take 3 big sips of your drink',
        },
        {
            title: 'Just Drink',
            description: 'Just Drink'
        },
        {
            title: 'Right Handed',
            description: 'If youre holding your drink with you right hand, drink!'
        },
        {
            title: 'Left Handed',
            description: 'If you are holding your drink with you left hand, drink!'
        },
        {
            title: 'Vapist',
            description: 'If you are holding a vape right now, drink!'
        },
        {
            title: 'Drink Swappers',
            description: 'Take some of the drink from the player on your right and pour it into your drink'
        },
        {
            title: 'Sober Guys',
            description: 'Are you drunk? If not, drink twice'
        },
        {
            title: 'Seeing Double',
            description: 'You must drink double for 5 minutes'
        },
        {
            title: 'Free Pass!',
            description: 'You have a free pass for any future forfeit!'
        },
        { 
            title: 'Dead Fish',
            description: 'Lie on your back and take a drink'
        },
        { 
            title: 'No Hands',
            description: 'Take a drink without using your hands or arms!'
        },
        { 
            title: 'Cheers!!',
            description: 'Everyone raise your drinks, cheers and take a drink!'
        },
        { 
            title: 'Heres to you',
            description: 'Pick a buddy to take a drink with'
        },
        { 
            title: "Three's a crowd",
            description: 'Choose 3 people to drink'
        },
        { 
            title: "Dual Weild",
            description: 'Take a drink from the players to your left and right'
        },
        { 
            title: "Hand Holders",
            description: 'You must hold hands with the player to your right for one round'
        },
        { 
            title: "Dare",
            description: 'Do whatever the player on your right wants, if you cant then drink'
        },
        { 
            title: "Right is Right",
            description: 'The player on your right can choose someone to drink'
        },
        { 
            title: "Safety Partner",
            description: 'Choose a player, everyone BUT you and that person must drink'
        },
        
    ]
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={window.innerWidth > 767 ? orange_card : orange_card_mobile} className="cards" alt="orange_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default OrangeGameCards