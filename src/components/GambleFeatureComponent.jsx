import React, { useState, useEffect } from 'react';
import gamble_image from "./images/gamble_image.png";
import poker_chip_red from "./images/poker_chip_red.png";
import poker_chip_blue from "./images/poker_chip_blue.png";
import FallingChips from './FallingChips';
const GambleFeatureComponent = () => {
    // Retrieve stored names from local storage
    const storedNames = JSON.parse(localStorage.getItem("player names")) || [];
    
    // Initialize state to store the random values on first render
    const [randomName] = useState(() => storedNames[Math.floor(Math.random() * storedNames.length)]);

    const [randomMultRed] = useState(() => {
        const chipMults = ["0x", "1x", "1x", "2x", "2x", "3x"];
        return chipMults[Math.floor(Math.random() * chipMults.length)];
    });
    const [randomMultBlue] = useState(() => {
        const chipMults = ["0x", "0x", "1x", "1x", "2x", "2x", "3x"];
        return chipMults[Math.floor(Math.random() * chipMults.length)];
    });
    const [randomForfeit] = useState(() => {
        const forfeits = ["1 Drink", "2 Drinks", "3 Drinks", "Half a Drink"];
        return forfeits[Math.floor(Math.random() * forfeits.length)];
    });

    const [redChipStyle, setRedChipStyle] = useState("poker_chip_red");
    const [blueChipStyle, setBlueChipStyle] = useState("poker_chip_blue");

    const OnRedClick = () => {
        if (blueChipStyle=="poker_chip_blue"){
            setRedChipStyle("gone");
        }
        
    };

    const OnBlueClick = () => {
        if (redChipStyle=="poker_chip_red"){
            setBlueChipStyle("gone");
        }
        
    };

    return (
        <div className="gamble_container">
            <h1 className="gamble_title">{randomName}! Red or Blue, Choose Wisely.</h1>
            <img src={gamble_image} className="gamble_image" alt="Gamble Image" />
            <img src={poker_chip_red} className={redChipStyle} alt="Red Poker Chip" onClick={OnRedClick} />
            <img src={poker_chip_blue} className={blueChipStyle} alt="Blue Poker Chip" onClick={OnBlueClick} />
            <h1 className='mult_red'>{randomMultRed}</h1>
            <h1 className='mult_blue'>{randomMultBlue}</h1>
            <h1 className='forfeit_text'>{randomForfeit}</h1>
            <FallingChips />
        </div>
    );
};

export default GambleFeatureComponent;
