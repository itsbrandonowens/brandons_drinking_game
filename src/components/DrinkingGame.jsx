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
import PurpleGameCards from './PurpleGameCards';


const DrinkingGame = () => {
    const [num, setNum] = useState(5);
    const [prevNum, setPrevNum] = useState(5);
    const [shearerNum, setShearerNum] = useState(0);
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    const [shearerStyle, setShearerStyle] = useState("shearer_popup_gone")
    const [speechBubbleStyle, setSpeechBubbleStyle] = useState("speech_bubble_gone")
    const [shearerTextStyle, setShearerTextStyle] = useState("shearer_text_gone")
    const [shearerNameStyle, setShearerNameStyle] = useState("shearer_text_name_gone")

    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    const [assignedName, setAssignedName] = useState(0)

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;


    };
    const shearerPopupFunction = () => {
        if (shearerNum == 1) {
            setShearerStyle("shearer_popup")
        } else {
            setShearerStyle("shearer_popup_gone")
        }

    }

    const OnClick = () => {
        setPrevNum(num);
        setNum(randomNumberInRange(1, 100));
        console.log("The previous number is " + prevNum)
        console.log("The current number is " + num)
        if (num >= 83 && num <= 92 && prevNum >= 83 && prevNum <= 92) {
            setNum(randomNumberInRange(1, 100));
            //This prevents the wheel from spinning twice in a row  
        }
        setShearerNum(randomNumberInRange(1, 3));

        if (shearerNum == 1) {
            setShearerStyle("shearer_popup")
            setSpeechBubbleStyle("speech_bubble")
            setShearerNameStyle("shearer_text_name")
            setShearerTextStyle("shearer_text")
        } else {
            setShearerStyle("shearer_popup_gone")
            setSpeechBubbleStyle("speech_bubble_gone")
            setShearerNameStyle("shearer_text_name_gone")
            setShearerTextStyle("shearer_text_gone")
        }

        setAssignedName(prev => ([prev + 1] % storedNames.length))
        localStorage.setItem("assignedName", JSON.stringify(assignedName))

    }

    return (
        <div className="game_container" >


            <Link to='/homepage'> <button className="home_button"> 🏠 </button> </Link>
            {num >= 1 && num <= 4 ?
                <BlackGameCards /> : null // Black -  4% chance
            }
            {num >= 5 && num <= 23 ?
                <GreenGameCards /> : null  // Green -  19% chance
            }
            {num >= 24 && num <= 32 ?
                <OrangeGameCards /> : null // Orange -  9% chance
            }
            {num >= 33 && num <= 51 ?
                <BlueGameCards /> : null // Blue -  19% chance
            }
            {num >= 52 && num <= 65 ?
                <RedGameCards /> : null // Red -  14% chance
            }
            {num >= 66 && num <= 74 ?
                <PinkGameCards /> : null // Pink -  9% chance
            }
            {num >= 75 && num <= 82 ?
                <YellowGameCards /> : null // Yellow -  8% chance
            }
            {num >= 83 && num <= 92 ?
                <WhiteGameCards /> : null // White -  10% chance
            }
            {num >= 93 && num <= 100 ?
                <PurpleGameCards /> : null // Purple -  8% chance
            }


            
            <img src={shearer_image} className={shearerStyle} alt="shearer"></img>
            <img src={speech_bubble} className={speechBubbleStyle} alt="speech_bubble"></img>
            <p className={shearerNameStyle}> {randomName}!</p>
            <p className={shearerTextStyle}> Give out 4 drinks!</p>
            



            <button className="next_card_button2" onClick={OnClick}>Next Card</button>
        </div>





    )
}

export default DrinkingGame
