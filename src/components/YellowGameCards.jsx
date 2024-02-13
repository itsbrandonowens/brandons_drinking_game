import React from 'react'
import '../styles/GameCards.css'
import yellow_card from "./images/yellow_card.png"
import yellow_card_mobile from "./images/yellow_card_mobile.png"
import HigherOrLowerComponent from './HigherOrLowerComponent'
import RingOfFireComponent from './RingOfFireComponent'

const YellowGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))

    const cards = [
        {
            title: 'Higher or Lower',
            description: 'Guess if the covered card is higher or lower, drink if you are wrong. Ace is Low. Click the card to find out!',
            game: 'h_l'
        },
        {
            title: 'Mini Ring of Fire',
            description: '',
            game: 'rof'
        },       
     
    ] 

    let randomValue = cards[Math.floor(Math.random() * cards.length)];

    return ( 

        <div className="card_container">
            <img src={window.innerWidth > 767 ? yellow_card : yellow_card_mobile} className="cards" alt="yellow_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="higher_or_lower_description">{randomValue.description}</p>
                {
                    randomValue.game == "h_l" ?
                        <HigherOrLowerComponent /> : null
                }  
                {
                    randomValue.game == "rof" ?
                        <RingOfFireComponent /> : null
                }

            </div>
        </div>





    )
}

export default YellowGameCards