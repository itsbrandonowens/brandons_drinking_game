import React from 'react'
import '../styles/GameCards.css'
import blue_card from "./images/blue_card.png"

const BlueGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))
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
            title: 'Categories ',
            description: 'You must pick a category, then everyone goes around in a circle naming things from that category. First person who cant, drinks... just like in Ring of Fire'
        },
        { 
            title: 'RPS',
            description: 'You and the player on your left must play rock paper scissors, the loser must drink'
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
        {
            title: 'Get down Mr President!',
            description: 'Everyone hit the deck! Last one to get to the floor has been shot... they must drink'
        },
        {
            title: 'BANNED!',
            description: 'You can pick a word that is banned for 10 minutes, if anyone says this word they must drink!'
        },
        {
            title: 'ET Phone Home!',
            description: 'Everyone must try to phone this player, first to succeed must choose someone to drink'
        },
        {
            title: 'Ow me dich',
            description: 'Starting with you, take it in turns to say another name for a penis, first person to fail drinks'
        },
        {
            title: 'Touch me Daddy ',
            description: 'First person to touch this player, gives out 2 drinks'
        },
        { 
            title: 'Rule 2',
            description: 'You must create another rule for everyone to follow for the rest of the game, if they fail they drink. Only 2 rules can be active at one time'
        },
        { 
            title: "No E's'",
            description: 'You are not allowed to say words containing the letter E for 10 minutes. If you do, you drink'
        },
        { 
            title: "Don't Move!",
            description: 'Stay completely still until your next turn! Or drink 5 times'
        },
        { 
            title: "Fists of Five!",
            description: 'On the count of 3, everyone must show a number on their hand 1 to 5. Any players with the same number as somebody else must drink'
        },
        { 
            title: "Animal Bluff!",
            description: 'You must write an animal in your notes. Give all players a hint about this animal and everyone must take a guess at what animal you wrote. Anyone who doesnt guess it must drink'
        },
        { 
            title: "Quippy Locked Up",
            description: 'This player has been arrested. Every OTHER player must think of a reason why. The player who has been arrested must say whos answer is the funniest. That person gives out a drink.'
        },
        
    
        
        

    ]
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={blue_card} className="cards" alt="blue_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default BlueGameCards