import React from 'react'
import '../styles/GameCards.css'
import ReactPlayer from "react-player";
import pink_card from "./images/pink_card.png"

const PinkGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let newNames = storedNames.slice(randomName)
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))

    const cards = [
        {
            title: 'Jai Ho!',
            description: 'Starting with you, you must drink until the next time Jai Ho is said. The next person in the circle must do the same and so on.',
            video: 'https://www.youtube.com/watch?v=Yc5OyXmHD0w'
        },
        {
            title: 'The Curry Song!',
            description: 'You must call someone not in the room and play this down the phone to them, or finish your drink',
            video: 'https://www.youtube.com/watch?v=BRjLgSkBOGU&t'
        },
        {
            title: 'Nee Mackems!',
            description: 'Drink if your a mackem, or dont watch football ... and watch these worldies while you do it',
            video: 'https://www.youtube.com/watch?v=RmN8oMJ8Y5A'        
        },
        {
            title: 'SAMBUCA ALARM!',
            description: 'You must have a shot! Preferably Sambuca, but anything will do!',
            video: 'https://www.youtube.com/watch?v=8luGR0ylVuI'
        },
        {
            title: 'Get Coconut Malled!',
            description: '5 drinks for being totally coconut malled',
            video: 'https://www.youtube.com/watch?v=2qgxAHW1w78'
        },     
        {      
            title: 'You Hit the Bonus!',  
            description: 'Congratulations! Fishing Frankie reels in 5 sips for you to give out!',
            video: 'https://youtu.be/gDWHcRjXBGM?t=6'
        },   
        {
            title: 'SUPER Bonus!',
            description: 'Congratulations! Horus demands you tell someone to neck a full drink!',
            video: 'https://youtu.be/tVTYxjudOww?t=149'
        },                           
        {             
            title: 'Im Blue!',
            description: 'Starting with you, you must drink until the next time Blue is said. The next person in the circle must do the same and so on until the chorus is over',
            video: 'https://www.youtube.com/watch?v=4T3AoFe1Hpk'
        }, 
        

        

        
        
        /*
        <iframe className='card_video' title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/${randomValue.video}?autoplay=0`} ></iframe>
        */



    ]

    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
            <img src={pink_card} className="cards" alt="pink_card"></img>
            <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description_video">{randomValue.description}</p>
                <div className='card_video'>
                <ReactPlayer
                    url={randomValue.video} 
                    playing={true}          
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
        </div >





    )
}

export default PinkGameCards