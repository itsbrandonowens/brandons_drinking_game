import React from 'react'
import '../styles/DrinkingGame.css'
import { Link } from 'react-router-dom';
import { useState, } from 'react';
import card_back from "./images/card_back.png"
import card_back_fiftytwo from "./images/card_back_fiftytwo.png"
import card_back_att from "./images/card_back_att.png"
import card_back_loplus from "./images/card_back_loplus.png"
import OriginalDeck from './OriginalDeck';
import LOPlusDeck from './LOPlusDeck';
import FiftyTwoDeck from './52Deck';
import ATTDeck from './ATTDeck';
import shearer_image from './images/shearer.png'
import speech_bubble from './images/speech_bubble.png'
import earthquake_image from './images/earthquake_image.png'
import boozenami_image from './images/boozenami.png'
import waves_image from './images/waves_image.png'
import genie_image from './images/genie_image.png'
import reflect_shield from './images/reflect_shield.png'
import ChestFeatureComponent from './ChestFeatureComponent';
import GambleFeatureComponent from './GambleFeatureComponent';

function DrinkingGame() {
    const [num, setNum] = useState(1000); // Starts the game off in the original deck 

    //This sets the names for the cards
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    const [assignedName, setAssignedName] = useState(0);


    //This is for picking decks that the user has chosen to play with
    const chosenDecks = JSON.parse(localStorage.getItem("decks"))
    const [randomDeck, setRandomDeck] = useState(0);
    const [deckChanceNumber, setDeckChanceNumber] = useState(0); // This allows me to "maniplate" the chances that a deck will appear 

    //This is for picking features that the user has chosen to play with
    const chosenFeatures = JSON.parse(localStorage.getItem("features"))
    const [cardStyle, setCardStyle] = useState("game_container")//for changing the whole container if the feature needs it
    const [fNum, setFnum] = useState(0); // This is to set the correct feature to appear when the odds are hit 
    const [WwNum, setWwNum] = useState(0); //This number is to set the chances of when the Shearer feature appears
    const [eqNum, setEqNum] = useState(0); //"" but Earthquake 
    const [BNum, setBNum] = useState(0); //"" but Boozenami 
    const [GNum, setGNum] = useState(0); //"" but Genie
    const [SNum, setSNum] = useState(0); //"" but Shield
    const [CNum, setCNum] = useState(0); //"" but Chests
    const [GambleNum, setGambleNum] = useState(0); //"" but Gamble

    // Random Number Function 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const OnClick = () => {
        //These functions reset any changes that features have done and allows for new decks to be chosen
        setCardStyle("game_container")
        setFnum(0);
        setRandomDeck(chosenDecks[Math.floor(Math.random() * chosenDecks.length)]);
        setDeckChanceNumber(randomNumberInRange(1, 100));

        // This sets the backs of the cards to the corresponding deck that its about to show 
        if (randomDeck == "Original") {
            setNum(1000);
        } else if (randomDeck == "LO+") {
            setNum(1001);
        } else if (randomDeck == "52Deck" && deckChanceNumber < 33) {
            setNum(1002);
        } else if (randomDeck == "ATT" && deckChanceNumber < 33) {
            setNum(1003);
        } else {
            setNum(1000)
        }


        setTimeout(() => { // This sets the deck, decided by math and what decks the user has chosen to play with 
            if (randomDeck == "Original") {
                setNum(1);
            } else if (randomDeck == "LO+") {
                setNum(2);
            } else if (randomDeck == "52Deck" && deckChanceNumber < 33) {
                setNum(3);
            } else if (randomDeck == "ATT" && deckChanceNumber < 33) {
                setNum(4);
            } else {
                setNum(1)
            }
        }, "1000");


        //This sets the name on the card to the next person on the list
        setAssignedName(prev => ([prev + 1] % storedNames.length))
        localStorage.setItem("assignedName", JSON.stringify(assignedName))


        //This is for setting the odds of when a feature should appear 
        setWwNum(randomNumberInRange(1, 80))
        setEqNum(randomNumberInRange(1, 150))
        setBNum(randomNumberInRange(1, 180))
        setGNum(randomNumberInRange(1, 100))
        setSNum(randomNumberInRange(1, 100))
        setCNum(randomNumberInRange(1, 50))
        setGambleNum(randomNumberInRange(1, 70))

        //This code is for displaying all of the features when they roll in
        if (WwNum == 1 && chosenFeatures.includes("WW")) {
            setFnum(1);
        }
        else if (eqNum == 1 && chosenFeatures.includes("EQ")) {
            setFnum(2);
            setCardStyle("game_container_earthquake ")
        }
        else if (BNum == 1 && chosenFeatures.includes("BN")) {
            setFnum(3);
            setNum(-1);
            setTimeout(() => { // this makes sure that once the card has been removed it doesnt then reset after a second
                setNum(-1);
            }, "1000");
        }
        else if (GNum == 1 && chosenFeatures.includes("Genie")) {
            setFnum(4);
        }
        else if (SNum == 1 && chosenFeatures.includes("Shield")) {
            setFnum(5);
        }
        else if (CNum == 1 && chosenFeatures.includes("Chests")) {
            setFnum(6);
            setNum(-1);
            setTimeout(() => { // this makes sure that once the card has been removed it doesnt then reset after a second
                setNum(-1);
            }, "1000");
        }
        else if (GambleNum == 1 && chosenFeatures.includes("Gamble")) {
            setFnum(7);
            setNum(-1);
            setTimeout(() => { // this makes sure that once the card has been removed it doesnt then reset after a second
                setNum(-1);
            }, "1000");
        }
    }




    return (
        <div className={cardStyle} >
            <Link style={{ color: "white", textDecoration: 'none' }} to="/">
                <button className="home_button">🏠</button>
            </Link>
            <Link style={{ color: "white", textDecoration: 'none' }} to="/card_details">
                <button className="q_button">?</button>
            </Link>

                               
            <div className="card_button_container">
                {                    
                    num == 1000 ?         
                        <div className="card_container">
                            <img src={card_back} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }             
                {                   
                    num == 1001 ?
                        <div className="card_container">
                            <img src={card_back_loplus} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }   
                { 
                    num == 1002 ?
                        <div className="card_container">
                            <img src={card_back_fiftytwo} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }
                {
                    num == 1003 ?
                        <div className="card_container">
                            <img src={card_back_att} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }
                {
                    num == 1 ?
                        <OriginalDeck /> : null
                }
                {
                    num == 2 ?
                        <LOPlusDeck /> : null
                }
                {
                    num == 3 ?
                        <FiftyTwoDeck /> : null
                }
                {
                    num == 4 ?
                        <ATTDeck /> : null
                }
            </div >
            { // Shearer Feature
                fNum == 1 ?
                    <div>
                        <img src={shearer_image} className="shearer_popup" alt="shearer"></img>
                        <img src={speech_bubble} className="speech_bubble" alt="speech_bubble"></img>
                        <p className="shearer_text_name"> {randomName}</p>
                        <p className="shearer_text"> Give out 4 drinks!</p>
                    </div> :
                    null
            }

            {// Earthquake Feature
                fNum == 2 ?
                    <div className="earthquake_container">
                        <h1 className="earthquake_title">  EARTHQUAKE</h1>
                        <img src={earthquake_image} className="earthquake_image" ></img>
                        <h2 className="earthquake_description">  NECK YOUR DRINK QUICK!</h2>
                    </div>
                    : null
            }
            {// Boozenami Feature
                fNum == 3 ?
                    <div>
                        <h1 className="boozenami_title"> Boozenami</h1>
                        <img src={boozenami_image} className="boozenami_image"></img>
                        <img src={waves_image} className="waves_image"></img>
                        <h2 className="boozenami_description">  EVERYONE NECK SOMEONE ELSES DRINK!</h2>

                    </div>
                    : null
            }
            {// Genie Feature
                fNum == 4 ?
                    <div>
                        <h1 className="genie_title"> I grant {randomName}, 3 wishes!</h1>
                        <img src={genie_image} className="genie_image"></img>
                        <h2 className="genie_description">  Give 1 drink out, create 1 rule and refuse your next forfeit!</h2>
                    </div>
                    : null
            }
            {// Shield Feature
                fNum == 5 ?
                    <div>
                        <h1 className={"shield_title"}> {randomName} found a shield!</h1>
                        <img src={reflect_shield} className="shield_image"></img>
                        <h2 className="shield_description"> Pass your next forfeit onto a player of your choosing!</h2>
                    </div>
                    : null
            }
            {// Chests Feature
                fNum == 6 ?
                    <div>
                        <ChestFeatureComponent />
                    </div>
                    : null
            }
             {// Gamble Feature
                fNum == 7 ?
                <div>
                    <GambleFeatureComponent />
                </div>
                : null
        }



            <button className="next_card_button" onClick={OnClick}>Next Card</button>


        </div>

    )
}

export default DrinkingGame
