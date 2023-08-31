import React from 'react'
import '../styles/GameCards.css'
import orange_card from "./images/orange_card.png"

const OrangeGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    
    const cards = [ 
        { 
            title: '3 Big Sips',
            description: 'Take 3 big sips of your drink',
        },
        {  
            title: 'Half of your drink',
            description: 'Neck half of your drink, now!'
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
        
    ]
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={orange_card} className="cards" alt="orange_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{randomName}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default OrangeGameCards