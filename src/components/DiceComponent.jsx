import React from 'react'
import '../styles/GameCards.css'
import { useState, useEffect } from 'react';
import d1 from "./images/dice/one.png"
import d2 from "./images/dice/two.png"
import d3 from "./images/dice/three.png"
import d4 from "./images/dice/four.png"
import d5 from "./images/dice/five.png"
import d6 from "./images/dice/six.png"
import d7 from "./images/dice/seven.png"
import d8 from "./images/dice/eight.png"
import d9 from "./images/dice/nine.png"
import d10 from "./images/dice/ten.png"
import d11 from "./images/dice/eleven.png"
import d12 from "./images/dice/twelve.png"
import d13 from "./images/dice/thirteen.png"
import d14 from "./images/dice/fourteen.png"
import d15 from "./images/dice/fifteen.png"
import d16 from "./images/dice/sixteen.png"
import d17 from "./images/dice/seventeen.png"
import d18 from "./images/dice/eighteen.png"
import d19 from "./images/dice/nineteen.png"
import d20 from "./images/dice/twenty.png"
import base from "./images/dice/base.png"
import Confetti from "react-confetti";
import useWindowSize from 'react-use/lib/useWindowSize'
import nat1wizard from './images/nat1wizard.png'
import nat20wizard from './images/nat20wizard.png'


const DiceComponent = () => {
    const die_faces = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20]
    const [randomDice, setRandomDice] = useState(base)
    const [wobble, setWobble] = useState(0)
    const { width, height } = useWindowSize()


    const diceHandler = () => {
        setTimeout(() => {
            setRandomDice(die_faces[Math.floor(Math.random() * die_faces.length)]);
        }, "1500");

        setWobble(1);
    }


    
    return (
        <div className="dice_container">
            <img src={randomDice} className={"dice_image"} alt="dice_image" onClick={diceHandler} wobble={wobble} onAnimationEnd={() => setWobble(0)}></img>
            {
                randomDice == d20 ?
                    <div>
                       
                        <div className="nat20_container">
                        <img src={nat20wizard} className="natwizard" alt="dice_image"></img>
                        <h2 className="dice_nat20_desc">Congrats! Give the punishment to a player of your choosing </h2>
                          

                        </div>
                    </div> : null
            }

            {
                randomDice == d1 ?
                    <div className="nat20_container"> 
                        <img src={nat1wizard} className="natwizard" alt="dice_image"></img>
                        <h2 className="dice_nat20_desc">Unlucky! Double your punishment! </h2>
                    </div> : null
            }
        </div>

    )
}

export default DiceComponent 
