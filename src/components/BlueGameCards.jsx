import React from 'react'
import '../styles/GameCards.css'
import blue_card from "./images/blue_card.png"
import blue_card_mobile from "./images/blue_card_mobile.png"
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
            description: 'Everyone pour some of your drink in a pint glass and place your finger on the rim. Each player can either leave their finger, or take it off the glass and Player 1 must guess how many are left on the glass. If you get it right, you are out of the game. Last person standing must drink the pint!'
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
            description: 'Last person to touch this player must drink'
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
            title: "Medusa!",
            description: 'Each player must put their heads down, on the count of 3, everyone must raise their head and stare directly at someone else. If you lock eyes with another player you must drink.'
        },
        { 
            title: "Paranoia!",
            description: 'You must whisper a question about the group into the person on your lefts ear, for example "Who is the ugliest?". This person then must answer the question out loud. If you want to know the answer, you must take a drink. The person who said the name can then choose to either respond or take a drink.'
        },
        { 
            title: "Arrogance!",
            description: 'You must pour as much of your drink into a glass as you want then flip a coin. If you get it wrong, you must drink the whole glass. If you get it right, the person to your left must play. Keep going until someone has to drink it.'
        },                                          
        {                               
            title: "Lord of the Light!",
            description: 'You can now tell anyone to turn the lights on or off, if they dont comply they must drink'
        },
        

    ]
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={window.innerWidth > 767 ? blue_card : blue_card_mobile} className="cards" alt="blue_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default BlueGameCards