import React from 'react'
import '../styles/GameCards.css'
import red_card from "./images/red_card.png"

const RedGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];

    function arrayRemove(storedNames, value) {

        return storedNames.filter(function (geeks) {
            return geeks != value
        });
    }

    let storedNames2 = arrayRemove(storedNames, randomName);
    let randomName2 = storedNames2[Math.floor(Math.random() * storedNames2.length)];
    console.log("Remaining elements: " + randomName2)                                              



    const cards = [
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
            description: 'First person to call someone not in this room and get an answer wins! Loser must do 5 sips'
        },
        {
            title: 'Race for a dildo',
            description: 'You have 30 seconds to find an item that could be used as a dildo, person with the least pleasurable item must drink. If you find an actual dildo, the other player must finish their drink'
        },
        {
            title: 'Most Likely To: Get an STD',
            description: 'Everyone must vote who, out of these two players, is most likely to get an STD, loser must drink twice'
        },
        {
            title: 'Most Likely To: Be a Nonce',
            description: 'Everyone must vote who, out of these two players, is most likely to be a nonce, loser must drink twice'
        },
        {
            title: 'Most Likely To: Get Arrested',
            description: 'Everyone must vote who, out of these two players, is most likely to get arrested, loser must drink twice'
        },
        {
            title: 'Most Likely To: Be Kicked of a Plane',
            description: 'Everyone must vote who, out of these two players, is most likely to be kicked off a plane, loser must drink twice'
        },
        {
            title: 'Short Arse',
            description: 'Shortest player out of you two must drink twice, tallest player then gives out 2 drinks'
        },
        {
            title: 'Blockbuster',
            description: 'Both players must say their favourite movies, everyone else vote which movie is worst, the player with the most votes must drink!'
        },
        {
            title: '1337 Gamer',
            description: 'Both players must say their favourite game, everyone else vote which game is worst, the player with the most votes must drink!'
        },




    ]

    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
            <img src={red_card} className="cards" alt="red_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{randomName} <span className="versus_label"> vs </span> {randomName2}</p>
                <p className="card_description">{randomValue.description}</p>
            </div>
        </div>





    )
}

export default RedGameCards