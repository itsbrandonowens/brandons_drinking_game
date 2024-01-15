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
import PurpleGameCards from './PurpleGameCards';
import rotate_device from './images/rotate_device.png'
import earthquake_image from './images/earthquake_image.png'
import boozenami_image from './images/boozenami.png'

const DrinkingGame = () => {
    const [num, setNum] = useState(5);
    const [prevNum, setPrevNum] = useState(5);
    const [shearerNum, setShearerNum] = useState(0);
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    const [shearerStyle, setShearerStyle] = useState("shearer_popup_gone")
    const [speechBubbleStyle, setSpeechBubbleStyle] = useState("speech_bubble_gone")
    const [shearerTextStyle, setShearerTextStyle] = useState("shearer_text_gone")
    const [shearerNameStyle, setShearerNameStyle] = useState("shearer_text_name_gone")
    const [cardStyle, setCardStyle] = useState("game_container")
    const [earthquakeDetailsStyle, setEarthquakeDetailsStyle] = useState("earthquake_container_gone")
    const [earthquakeNum, setEarthquakeNum] = useState(0);
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    const [assignedName, setAssignedName] = useState(0);
    

    // Random Number Function 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;


    };

    //Boozenami Function - (EVERYONE NECK SOMEONE ELSES DRINK)


    // Earthquake Function
    const earthquakeFunction = () => {
        setEarthquakeNum(randomNumberInRange(1, 2));

        if (earthquakeNum == 1) {
            setCardStyle("game_container_earthquake")
            setTimeout(() => {
                setEarthquakeDetailsStyle("earthquake_container")
            }, "2000");

        } else {
            setCardStyle("game_container")
            setEarthquakeDetailsStyle("earthquake_container_gone")

        }

    }
    //Shearer Function
    const shearerFunction = () => {
        setShearerNum(randomNumberInRange(1, 30));

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

    }
    // This is called everytime the "next card" button is pressed  
    const OnClick = () => {
        setPrevNum(num);
        setNum(randomNumberInRange(1, 100));
        console.log("The previous number is " + prevNum)
        console.log("The current number is " + num)
        if (num >= 83 && num <= 92 && prevNum >= 83 && prevNum <= 92) {
            setNum(randomNumberInRange(1, 100));
            //This prevents the wheel from spinning twice in a row  
        }
        shearerFunction();
        earthquakeFunction();
        setAssignedName(prev => ([prev + 1] % storedNames.length))
        localStorage.setItem("assignedName", JSON.stringify(assignedName))
    }

    return (
        <div className={cardStyle} >

            <div className="force_orientation">
                <img src={rotate_device} className="force_orientation_image" ></img>
            </div>

            <div className={earthquakeDetailsStyle}>
                <h1 className="earthquake_title">  EARTHQUAKE</h1>
                <img src={earthquake_image} className="earthquake_image" ></img>
                <h2 className="earthquake_description">  NECK YOUR DRINK QUICK!</h2>
            </div>

            

            
            <div className="all_cards">
                <Link to='/homepage'> <button className="home_button"> 🏠 </button> </Link>
                {num >= 1 && num <= 2 ?
                    <BlackGameCards /> : null // Black -  2% chance
                }
                {num >= 3 && num <= 23 ?
                    <GreenGameCards /> : null  // Green -  21% chance
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
            </div>


            <img src={shearer_image} className={shearerStyle} alt="shearer"></img>
            <img src={speech_bubble} className={speechBubbleStyle} alt="speech_bubble"></img>
            <p className={shearerNameStyle}> {randomName}!</p>
            <p className={shearerTextStyle}> Give out 4 drinks!</p>




            <button className="next_card_button2" onClick={OnClick}>Next Card</button>
        </div>





    )
}

export default DrinkingGame
