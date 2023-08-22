import React from 'react'
import '../styles/GameCards.css'
import blue_card from "./images/blue_card.png"

const BlueGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    const cards = [ 
        { 
            title: '21',
            description: 'Go round in a circle counting up from 1-21. You may only add a max of 3 to the number, whoever says 21...Drinks!'
        },
        { 
            title: 'Read your texts',
            description: 'Every player must read their last text out loud or drink!'
        },
        { 
            title: 'Going to the bar',
            description: 'Starting with you, go around in a circle saying "Im going to the bar and im going to buy..." and add an alcoholic beverage. Keep this going till someone forgets and they must drink'
        },
        { 
            title: 'Categories ',
            description: 'You must pick a category, then everyone goes around in a circle naming things from that category. First person who cant, drinks... just like in Ring of Fire'
        },
        { 
            title: 'RPS',
            description: 'You and the player on your left must play rock paper scissors, the loser must drink'
        },
        { 
            title: 'tebahpla',
            description: 'You have 60 seconds to say the alphabet backwards, if you cant then drink half of your drink'
        },
        { 
            title: 'Rule 1',
            description: 'You must create a rule for everyone to follow for the rest of the game, if they fail they drink'
        },
        {
            title: 'Question Master',
            description: 'You are now the question master! Catch anyone answering your question? They must drink!'
        },
        {
            title: 'Heaven',
            description: 'Anytime you raise your hand, everyone must copy. Last person who does, drinks!'
        },
        {
            title: 'Thumb War',
            description: 'Everyone have a thumb war with the closest player. Losers drink'
        },
        {
            title: 'Boulder',
            description: 'You must drink once, and then the player to your left must drink twice and so on until it comes back to you'
        },
        {
            title: 'Finger Game',
            description: 'Grab a pint glass and play the finger game!'
        },
        {
            title: 'Waterfall',
            description: 'Everyone starts to drink, you cant stop until the person before you has stopped'
        },
        {
            title: '2 Truths, 1 Lie',
            description: 'Tell everyone 2 truths and 1 lie, they must guess the lie, if they get it wrong they drink.'
        },
        
        

    ]
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={blue_card} className="cards" alt="blue_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{randomName}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default BlueGameCards