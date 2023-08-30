import React from 'react'
import '../styles/DrinkingGame.css'
import { Link } from 'react-router-dom';
import { useState, } from 'react';

import BlackGameCards from './BlackGameCards';
import OrangeGameCards from './OrangeGameCards';
import BlueGameCards from './BlueGameCards';
import GreenGameCards from './GreenGameCards';
import RedGameCards from './RedGameCards';
import PinkGameCards from './PinkGameCards';
import YellowGameCards from './YellowGameCards';
import shearer_image from './images/shearer.png'
import speech_bubble from './images/speech_bubble.png'
import WhiteGameCards from './WhiteGameCards';
import TimerComponent from './TimerComponent';
const DrinkingGame = () => {
    const [num, setNum] = useState(5);
    const [shearerNum, setShearerNum] = useState(0);
    const storedNames = JSON.parse(localStorage.getItem("player names"))
   
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };


    const OnClick = () => {
        setNum(randomNumberInRange(1, 100));
        console.log(num)
        setShearerNum(randomNumberInRange(1, 25));
        
    }


    return (
        <div className="game_container" >
            <Link to='/homepage'> <button className="home_button"> 🏠 </button> </Link>

            {num >= 1 && num <= 4 ? 
                <BlackGameCards /> : null // Black -  4% chance
            }
            {num >= 5 && num <= 24  ?
                <GreenGameCards /> : null  // Green -  20% chance
            }
            {num >= 25 && num <= 34?
                <OrangeGameCards /> : null // Orange -  10% chance
            }
            {num >= 35 && num <= 54?
                <BlueGameCards /> : null // Blue -  20% chance
            }
            {num >= 55 && num <= 69?
                <RedGameCards /> : null // Red -  15% chance
            }
            {num >= 70 && num <= 79 ?
                <PinkGameCards /> : null // Pink -  10% chance
            }
            {num >= 80 && num <= 88 ?
                <YellowGameCards /> : null // Yellow -  9% chance
            }
            {num >= 89 && num <= 100 ?
                <WhiteGameCards /> : null // White -  12% chance
            }

            {shearerNum == 1 ?
                <div className="shearer_popup">
                    <img src={shearer_image} className="shearer_image" alt="shearer"></img>
                    <img src={speech_bubble} className="speech_bubble" alt="speech_bubble"></img>
                    <p className="shearer_text_name"> {randomName}!</p>
                    <p className="shearer_text"> Give out 5 drinks!</p>
                </div>
                : null
            }
                <TimerComponent/>
                <button className="next_card_button" onClick={OnClick}>Next Card</button>
        

        </div>





    )
}

export default DrinkingGame
