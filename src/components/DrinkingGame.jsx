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
    const [num, setNum] = useState(2);
    const [shearerNum, setShearerNum] = useState(0);
    const storedNames = JSON.parse(localStorage.getItem("player names"))
   
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };


    const OnClick = () => {
        setNum(randomNumberInRange(1, 30));
        console.log(num)
        setShearerNum(randomNumberInRange(1, 25));
        console.log(shearerNum)
    }


    return (
        <div className="game_container" >
            <Link to='/homepage'> <button className="home_button"> 🏠 </button> </Link>

            {num == 1 ?
                <BlackGameCards /> : null
            }
            {num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9 || num == 10 || num == 11   ?
                <GreenGameCards /> : null
            }
            {num == 12 || num == 13 || num == 14 || num == 15 ?
                <OrangeGameCards /> : null
            }
            {num == 16 || num == 17 || num == 18 || num == 19 || num == 20 || num == 21?
                <BlueGameCards /> : null
            }
            {num == 22 || num == 23 || num == 24 ?
                <RedGameCards /> : null
            }
            {num == 25 || num == 26 ?
                <PinkGameCards /> : null
            }
            {num == 27 || num == 28 ?
                <YellowGameCards /> : null
            }
            {num == 29 || num == 30 ?
                <WhiteGameCards /> : null
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
