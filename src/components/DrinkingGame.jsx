import React from 'react'
import '../styles/DrinkingGame.css'
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
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
import HeadsOrTailsFeatureComponent from './HeadsOrTailsFeatureComponent';

const DECK_BACK_ORIGINAL = 1000;
const DECK_BACK_LO_PLUS = 1001;
const DECK_BACK_FIFTY_TWO = 1002;
const DECK_BACK_ATT = 1003;
const DECK_ORIGINAL = 1;
const DECK_LO_PLUS = 2;
const DECK_FIFTY_TWO = 3;
const DECK_ATT = 4;
const FEATURE_SHEARER = 1;
const FEATURE_EARTHQUAKE = 2;
const FEATURE_BOOZENAMI = 3;
const FEATURE_GENIE = 4;
const FEATURE_SHIELD = 5;
const FEATURE_CHESTS = 6;
const FEATURE_GAMBLE = 7;
const FEATURE_HEADS_OR_TAILS = 8;
const CARD_FLIP_DELAY_MS = 1000;
const DECK_CHANCE_THRESHOLD = 33;
const RANDOM_DECK_RANGE_MIN = 1;
const RANDOM_DECK_RANGE_MAX = 100;
const SHEARER_ODDS_MAX = 80;
const EARTHQUAKE_ODDS_MAX = 150;
const BOOZENAMI_ODDS_MAX = 180;
const GENIE_ODDS_MAX = 100;
const SHIELD_ODDS_MAX = 100;
const CHESTS_ODDS_MAX = 50;
const GAMBLE_ODDS_MAX = 70;
const HEADS_OR_TAILS_ODDS_MAX = 1;
const DEFAULT_CARD_STYLE = 'game_container';
const DEFAULT_FEATURE_ID = 0;
const HIDDEN_CARD_STATE = -1;
const DEFAULT_DECK_NAME = 'Original';

const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getDeckSelection = (deckName, chanceNumber) => {
    if (deckName === 'LO+') {
        return { back: DECK_BACK_LO_PLUS, face: DECK_LO_PLUS };
    }

    if (deckName === '52Deck' && chanceNumber < DECK_CHANCE_THRESHOLD) {
        return { back: DECK_BACK_FIFTY_TWO, face: DECK_FIFTY_TWO };
    }

    if (deckName === 'ATT' && chanceNumber < DECK_CHANCE_THRESHOLD) {
        return { back: DECK_BACK_ATT, face: DECK_ATT };
    }

    return { back: DECK_BACK_ORIGINAL, face: DECK_ORIGINAL };
};

const getFeatureOutcome = (featureRolls, chosenFeatures) => {
    if (featureRolls.shearer === 1 && chosenFeatures.includes('WW')) {
        return { featureId: FEATURE_SHEARER, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: false };
    }

    if (featureRolls.earthquake === 1 && chosenFeatures.includes('EQ')) {
        return { featureId: FEATURE_EARTHQUAKE, cardStyle: 'game_container_earthquake ', shouldHideCard: false };
    }

    if (featureRolls.boozenami === 1 && chosenFeatures.includes('BN')) {
        return { featureId: FEATURE_BOOZENAMI, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: true };
    }

    if (featureRolls.genie === 1 && chosenFeatures.includes('Genie')) {
        return { featureId: FEATURE_GENIE, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: false };
    }

    if (featureRolls.shield === 1 && chosenFeatures.includes('Shield')) {
        return { featureId: FEATURE_SHIELD, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: false };
    }

    if (featureRolls.chests === 1 && chosenFeatures.includes('Chests')) {
        return { featureId: FEATURE_CHESTS, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: true };
    }

    if (featureRolls.gamble === 1 && chosenFeatures.includes('Gamble')) {
        return { featureId: FEATURE_GAMBLE, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: true };
    }

    if (featureRolls.headsOrTails === 1 && chosenFeatures.includes('HeadsOrTails')) {
        return { featureId: FEATURE_HEADS_OR_TAILS, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: true };
    }

    return { featureId: DEFAULT_FEATURE_ID, cardStyle: DEFAULT_CARD_STYLE, shouldHideCard: false };
};

function DrinkingGame() {
    const [num, setNum] = useState(DECK_BACK_ORIGINAL);
    const [assignedName, setAssignedName] = useState(0);
    const [cardStyle, setCardStyle] = useState(DEFAULT_CARD_STYLE);
    const [fNum, setFnum] = useState(DEFAULT_FEATURE_ID);
    const [featureRolls, setFeatureRolls] = useState({
        shearer: 0,
        earthquake: 0,
        boozenami: 0,
        genie: 0,
        shield: 0,
        chests: 0,
        gamble: 0,
        headsOrTails: 0,
    });

    const resetFeatureState = () => {
        setCardStyle(DEFAULT_CARD_STYLE);
        setFnum(DEFAULT_FEATURE_ID);
        setFeatureRolls({
            shearer: 0,
            earthquake: 0,
            boozenami: 0,
            genie: 0,
            shield: 0,
            chests: 0,
            gamble: 0,
            headsOrTails: 0,
        });
    };

    const storedNames = useMemo(() => {
        const savedNames = localStorage.getItem('player names');
        return savedNames ? JSON.parse(savedNames) : [];
    }, []);

    const chosenDecks = useMemo(() => {
        const savedDecks = localStorage.getItem('decks');
        return savedDecks ? JSON.parse(savedDecks) : [];
    }, []);

    const chosenFeatures = useMemo(() => {
        const savedFeatures = localStorage.getItem('features');
        return savedFeatures ? JSON.parse(savedFeatures) : [];
    }, []);

    const currentName = storedNames.length > 0 ? storedNames[assignedName % storedNames.length] : 'Player';

    const OnClick = () => {
        resetFeatureState();

        const nextDeckName = chosenDecks[Math.floor(Math.random() * chosenDecks.length)] ?? DEFAULT_DECK_NAME;
        const nextDeckChance = getRandomNumberInRange(RANDOM_DECK_RANGE_MIN, RANDOM_DECK_RANGE_MAX);
        const nextDeckSelection = getDeckSelection(nextDeckName, nextDeckChance);
        const nextFeatureRolls = {
            shearer: getRandomNumberInRange(1, SHEARER_ODDS_MAX),
            earthquake: getRandomNumberInRange(1, EARTHQUAKE_ODDS_MAX),
            boozenami: getRandomNumberInRange(1, BOOZENAMI_ODDS_MAX),
            genie: getRandomNumberInRange(1, GENIE_ODDS_MAX),
            shield: getRandomNumberInRange(1, SHIELD_ODDS_MAX),
            chests: getRandomNumberInRange(1, CHESTS_ODDS_MAX),
            gamble: getRandomNumberInRange(1, GAMBLE_ODDS_MAX),
            headsOrTails: getRandomNumberInRange(1, HEADS_OR_TAILS_ODDS_MAX),
        };
        const nextFeatureOutcome = getFeatureOutcome(nextFeatureRolls, chosenFeatures);

        setFeatureRolls(nextFeatureRolls);
        setCardStyle(nextFeatureOutcome.cardStyle);
        setFnum(nextFeatureOutcome.featureId);

        setNum(nextFeatureOutcome.shouldHideCard ? HIDDEN_CARD_STATE : nextDeckSelection.back);
        setTimeout(() => {
            setNum(nextFeatureOutcome.shouldHideCard ? HIDDEN_CARD_STATE : nextDeckSelection.face);
        }, CARD_FLIP_DELAY_MS);

        const nextAssignedName = storedNames.length > 0 ? (assignedName + 1) % storedNames.length : 0;
        setAssignedName(nextAssignedName);
        localStorage.setItem('assignedName', JSON.stringify(nextAssignedName));
    };

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
                    num === DECK_BACK_ORIGINAL ?
                        <div className="card_container">
                            <img src={card_back} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }
                {
                    num === DECK_BACK_LO_PLUS ?
                        <div className="card_container">
                            <img src={card_back_loplus} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }
                {
                    num === DECK_BACK_FIFTY_TWO ?
                        <div className="card_container">
                            <img src={card_back_fiftytwo} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }
                {
                    num === DECK_BACK_ATT ?
                        <div className="card_container">
                            <img src={card_back_att} className="cards" alt="Back Of Card"></img>
                        </div> : null
                }
                {
                    num === DECK_ORIGINAL ?
                        <OriginalDeck /> : null
                }
                {
                    num === DECK_LO_PLUS ?
                        <LOPlusDeck /> : null
                }
                {
                    num === DECK_FIFTY_TWO ?
                        <FiftyTwoDeck /> : null
                }
                {
                    num === DECK_ATT ?
                        <ATTDeck /> : null
                }
            </div >
            { // Shearer Feature
                fNum === FEATURE_SHEARER ?
                    <div>
                        <img src={shearer_image} className="shearer_popup" alt="shearer"></img>
                        <img src={speech_bubble} className="speech_bubble" alt="speech_bubble"></img>
                        <p className="shearer_text_name"> {currentName}</p>
                        <p className="shearer_text"> Give out 4 drinks!</p>
                    </div> :
                    null
            }

            {// Earthquake Feature
                fNum === FEATURE_EARTHQUAKE ?
                    <div className="earthquake_container">
                        <h1 className="earthquake_title">  EARTHQUAKE</h1>
                        <img src={earthquake_image} className="earthquake_image" ></img>
                        <h2 className="earthquake_description">  NECK YOUR DRINK QUICK!</h2>
                    </div>
                    : null
            }
            {// Boozenami Feature
                fNum === FEATURE_BOOZENAMI ?
                    <div>
                        <h1 className="boozenami_title"> Boozenami</h1>
                        <img src={boozenami_image} className="boozenami_image"></img>
                        <img src={waves_image} className="waves_image"></img>
                        <h2 className="boozenami_description">  EVERYONE NECK SOMEONE ELSES DRINK!</h2>

                    </div>
                    : null
            }
            {// Genie Feature
                fNum === FEATURE_GENIE ?
                    <div>
                        <h1 className="genie_title"> I grant {currentName}, 3 wishes!</h1>
                        <img src={genie_image} className="genie_image"></img>
                        <h2 className="genie_description">  Give 1 drink out, create 1 rule and refuse your next forfeit!</h2>
                    </div>
                    : null
            }
            {// Shield Feature
                fNum === FEATURE_SHIELD ?
                    <div>
                        <h1 className={"shield_title"}> {currentName} found a shield!</h1>
                        <img src={reflect_shield} className="shield_image"></img>
                        <h2 className="shield_description"> Pass your next forfeit onto a player of your choosing!</h2>
                    </div>
                    : null
            }
            {// Chests Feature
                fNum === FEATURE_CHESTS ?
                    <div>
                        <ChestFeatureComponent />
                    </div>
                    : null
            }
            {// Gamble Feature
                fNum === FEATURE_GAMBLE ?
                    <div>
                        <GambleFeatureComponent />
                    </div>
                    : null
            }
            {// Heads or Tails Feature
                fNum === FEATURE_HEADS_OR_TAILS ?
                    <div>
                        <HeadsOrTailsFeatureComponent currentName={currentName} />
                    </div>
                    : null
            }

            <button className="next_card_button" onClick={OnClick}>Next Card</button>
        </div>
    )
}

export default DrinkingGame
