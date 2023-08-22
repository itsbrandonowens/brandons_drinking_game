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