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
import waves_image from './images/waves_image.png'
import genie_image from './images/genie_image.png'
import reflect_shield from './images/reflect_shield.png'

const DrinkingGame = () => {
    const [num, setNum] = useState(5);
    const [prevNum, setPrevNum] = useState(5);
    const [shearerNum, setShearerNum] = useState(0);
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    const [assignedName, setAssignedName] = useState(0);
    const [shearerStyle, setShearerStyle] = useState("shearer_popup_gone")
    const [speechBubbleStyle, setSpeechBubbleStyle] = useState("speech_bubble_gone")
    const [shearerTextStyle, setShearerTextStyle] = useState("shearer_text_gone")
    const [shearerNameStyle, setShearerNameStyle] = useState("shearer_text_name_gone")
    const [cardStyle, setCardStyle] = useState("game_container")
    const [earthquakeDetailsStyle, setEarthquakeDetailsStyle] = useState("earthquake_container_gone")
    const [earthquakeNum, setEarthquakeNum] = useState(0);
    const [boozenamiDetailsStyle, setBoozenamiDetailsStyle] = useState("earthquake_container_gone")
    const [boozenamiNum, setBoozenamiNum] = useState(0);
    const [genieNum, setGenieNum] = useState(0);
    const [genieDetailsStyle, setGenieDetailsStyle] = useState("earthquake_container_gone")
    const [shieldNum, setShieldNum] = useState(0);
    const [shieldDetailsStyle, setShieldDetailsStyle] = useState("earthquake_container_gone")
    


    // Random Number Function 
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };


    //HamburgerMenu
    let [isActive, setActive] = useState(false)
    let hamburger_function = () => {
        setActive(!isActive);
        setIsFeatureDisableActive(false)
    };

    /////////////////////////////////////////////////////////////////////////// Disable Features
    let [isFeatureDisableActive, setIsFeatureDisableActive] = useState(false)
    let disable_feature_popup = () => {
        setIsFeatureDisableActive(!isFeatureDisableActive)
    }

    //Disable Shearer
    let [featureDisableS, setFeatureDisableS] = useState(false)
    let disable_shearer = () => {
        setFeatureDisableS(!featureDisableS);
    };

    //Disable Earthquake
    let [featureDisableE, setFeatureDisableE] = useState(false)
    let disable_earthquake = () => {
        setFeatureDisableE(!featureDisableE);
    };

    //Disable Boozenami
    let [featureDisableB, setFeatureDisableB] = useState(false)
    let disable_boozenami = () => {
        setFeatureDisableB(!featureDisableB);
    };

    //Disable Genie
    let [featureDisableG, setFeatureDisableG] = useState(false)
    let disable_genie = () => {
        setFeatureDisableG(!featureDisableG);
    };

    //Disable Shield
    let [featureDisableShield, setFeatureDisableShield] = useState(false)
    let disable_shield = () => {
        setFeatureDisableShield(!featureDisableShield);
    };



    /////////////////////////////////////////////////////////////////////////// Features
    //Shearer Function
    const shearerFunction = () => {
        setShearerNum(randomNumberInRange(1, 50));

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

    // Earthquake Function
    const earthquakeFunction = () => {
        setEarthquakeNum(randomNumberInRange(1, 120));

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


    //Boozenami Function 
    const boozenamiFunction = () => {
        setBoozenamiNum(randomNumberInRange(1, 150));

        if (boozenamiNum == 1 && earthquakeNum !== 1) {
            setBoozenamiDetailsStyle("boozenami_container")
            setNum("101")
        } else {

            setBoozenamiDetailsStyle("earthquake_container_gone")

        }

    }

    //Genie Function 
    const genieFunction = () => {
        setGenieNum(randomNumberInRange(1, 120));
        if (genieNum == 1 && earthquakeNum !== 1 && boozenamiNum !== 1) {
            setGenieDetailsStyle("genie_container")
        } else {
            setGenieDetailsStyle("earthquake_container_gone")
        }
    }

    //Shield Function 
    const shieldFunction = () => {
        setShieldNum(randomNumberInRange(1, 100));
        if (shieldNum == 1 && earthquakeNum !== 1 && boozenamiNum !== 1 && genieNum !== 1) {
            setShieldDetailsStyle("shield_container")
        } else {
            setShieldDetailsStyle("earthquake_container_gone")
        }
    }



    /////////////////////////////////////////////////////////////////////////// Next Card Function 
    const OnClick = () => {
        setPrevNum(num);
        setNum(randomNumberInRange(1, 100));
        console.log("The previous number is " + prevNum)
        console.log("The current number is " + num)
        if (num >= 83 && num <= 92 && prevNum >= 83 && prevNum <= 92) {
            setNum(randomNumberInRange(1, 100));
            //This prevents the wheel from spinning twice in a row  
        }

        //Shearer
        if (featureDisableS === true) {
            setShearerNum(2)
            setShearerStyle("shearer_popup_gone")
            setSpeechBubbleStyle("speech_bubble_gone")
            setShearerNameStyle("shearer_text_name_gone")
            setShearerTextStyle("shearer_text_gone")

        } else {
            shearerFunction();
        }

        //Earthquake
        if (featureDisableE === true) {
            setEarthquakeNum(2)
            setEarthquakeDetailsStyle("earthquake_container_gone")
            setCardStyle("game_container")
        } else {
            earthquakeFunction();
        }

        //Boozenami
        if (featureDisableB === true) {
            setBoozenamiNum(2)
            setBoozenamiDetailsStyle("earthquake_container_gone")
        } else {
            boozenamiFunction();
        }

        //Genie
        if (featureDisableG === true) {
            setGenieNum(2)
            setGenieDetailsStyle("earthquake_container_gone")
        } else {
            genieFunction();
        }

        //Shield
        if (featureDisableShield === true) {
            setShieldNum(2)
            setShieldDetailsStyle("earthquake_container_gone")
        } else {
            shieldFunction();
        }

        //Sets Name
        setAssignedName(prev => ([prev + 1] % storedNames.length))
        localStorage.setItem("assignedName", JSON.stringify(assignedName))
    }

    /////////////////////////////////////////////////////////////////////////// HTML

    return (
        <div className={cardStyle} >

            <div className="force_orientation">
                <img src={rotate_device} className="force_orientation_image" ></img>
            </div>

            <div className="hamburger_icon" onClick={hamburger_function}>
                <div class={isActive ? "bar1change" : "bar1"}></div>
                <div class={isActive ? "bar2change" : "bar2"}></div>
                <div class={isActive ? "bar3change" : "bar3"}></div>
            </div>
            <div className="navbar_container">
                <ul className={isActive ? 'navbar_links_expanded' : 'navbar_links'} >
                    <Link style={{ color: "black", textDecoration: 'none' }} to='/'><li className="menuLinks" onClick={hamburger_function}> 🏠 Home </li> </Link>
                    <Link style={{ color: "black", textDecoration: 'none' }} to='/rules'><li className="menuLinks" onClick={hamburger_function}> 📜 Rules </li> </Link>
                    <li className="menuLinks" onClick={disable_feature_popup}> 📜 Disable Features </li>
                    <a style={{ color: "black", textDecoration: 'none' }} href="https://www.paypal.com/donate/?hosted_button_id=D5BVW5S73QRYE" target="_blank"> <li className="tipLink" onClick={hamburger_function}> 🫙 Leave a tip </li> </a>
                </ul>
            </div>

            <div className={isFeatureDisableActive ? "disable_features_popup" : "disable_features_popup_gone"}>
                <button className={featureDisableS ? "feature_checkbox_off" : "feature_checkbox_on"} onClick={disable_shearer}>  <img src={shearer_image} className="feature_popup_image" />  </button>
                <button className={featureDisableE ? "feature_checkbox_off" : "feature_checkbox_on"} onClick={disable_earthquake}>  <img src={earthquake_image} className="feature_popup_image" />  </button>
                <button className={featureDisableB ? "feature_checkbox_off" : "feature_checkbox_on"} onClick={disable_boozenami}>  <img src={boozenami_image} className="feature_popup_image" />  </button>
                <button className={featureDisableG ? "feature_checkbox_off" : "feature_checkbox_on"} onClick={disable_genie}>  <img src={genie_image} className="feature_popup_image" />  </button>
                <button className={featureDisableShield ? "feature_checkbox_off" : "feature_checkbox_on"} onClick={disable_shield}>  <img src={reflect_shield} className="feature_popup_image" />  </button>
            </div>

            <div className={earthquakeDetailsStyle}>
                <h1 className="earthquake_title">  EARTHQUAKE</h1>
                <img src={earthquake_image} className="earthquake_image" ></img>
                <h2 className="earthquake_description">  NECK YOUR DRINK QUICK!</h2>
            </div>

            <div className={boozenamiDetailsStyle}>
                <h1 className="boozenami_title"> Boozenami</h1>
                <img src={boozenami_image} className="boozenami_image"></img>
                <img src={waves_image} className="waves_image"></img>
                <h2 className="boozenami_description">  EVERYONE NECK SOMEONE ELSES DRINK!</h2>

            </div>

            <div className={genieDetailsStyle}>
                <h1 className="genie_title"> I grant {randomName}, 3 wishes!</h1>
                <img src={genie_image} className="genie_image"></img>

                <h2 className="genie_description">  Give 1 drink out, create 1 rule and refuse your next forfeit!</h2>
            </div>

            <div className={shieldDetailsStyle}>
                <h1 className="shield_title"> {randomName} found a shield!</h1>
                <img src={reflect_shield} className="shield_image"></img>
                <h2 className="shield_description"> Pass your next forfeit onto a player of your choosing!</h2>
                
            </div>



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


            <img src={shearer_image} className={shearerStyle} alt="shearer"></img>
            <img src={speech_bubble} className={speechBubbleStyle} alt="speech_bubble"></img>
            <p className={shearerNameStyle}> {randomName}</p>
            <p className={shearerTextStyle}> Give out 4 drinks!</p>




            <button className="next_card_button" onClick={OnClick}>Next Card</button>
        </div>





    )
}

export default DrinkingGame
