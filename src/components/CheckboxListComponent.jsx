import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LOPlus from './images/LOPlus.png';
import LOATT from './images/LOATT.png';
import FiftyTwoDeck from './images/FiftyTwoDeck.png';
import shearer_image from './images/shearer.png';
import earthquake_image from './images/earthquake_image.png';
import boozenami_image from './images/boozenami.png';
import genie_image from './images/genie_image.png';
import reflect_shield from './images/reflect_shield.png';
import chest_image from './images/chest_full.png';
import gamble_image from './images/gamble_image.png';
import heads_tails_image from './images/heads_tails_coin.svg';

const defaultDecks = ['Original', 'LO+'];
const defaultFeatures = ['WW', 'EQ', 'BN', 'Genie', 'Shield', 'Chests', 'Gamble', 'HeadsOrTails'];

const deckOptions = [
    { value: 'LO+', image: LOPlus, alt: 'LO+' },
    { value: 'ATT', image: LOATT, alt: 'ATT' },
    { value: '52Deck', image: FiftyTwoDeck, alt: '52Deck' },
];

const featureOptions = [
    { value: 'WW', image: shearer_image, alt: 'WW' },
    { value: 'EQ', image: earthquake_image, alt: 'EQ' },
    { value: 'BN', image: boozenami_image, alt: 'BN' },
    { value: 'Genie', image: genie_image, alt: 'Genie' },
    { value: 'Shield', image: reflect_shield, alt: 'Shield' },
    { value: 'Chests', image: chest_image, alt: 'Chests' },
    { value: 'Gamble', image: gamble_image, alt: 'Gamble' },
    { value: 'HeadsOrTails', image: heads_tails_image, alt: 'HeadsOrTails' },
];

const loadFromStorage = (key, fallback) => {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        return fallback;
    }
};

const CheckboxList = () => {
    const [selectedDecks, setSelectedDecks] = useState(() => loadFromStorage('decks', defaultDecks));
    const [selectedFeatures, setSelectedFeatures] = useState(() => loadFromStorage('features', defaultFeatures));

    useEffect(() => {
        localStorage.setItem('decks', JSON.stringify(selectedDecks));
    }, [selectedDecks]);

    useEffect(() => {
        localStorage.setItem('features', JSON.stringify(selectedFeatures));
    }, [selectedFeatures]);

    const toggleSelection = (value, list, setter) => {
        setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
    };

    const handleDeckChange = (value) => {
        toggleSelection(value, selectedDecks, setSelectedDecks);
    };

    const handleFeatureChange = (value) => {
        toggleSelection(value, selectedFeatures, setSelectedFeatures);
    };

    const handleSelectAllDecks = () => {
        setSelectedDecks(['Original', 'LO+', '52Deck', 'ATT']);
    };

    const handleUnselectAllDecks = () => {
        setSelectedDecks(['Original']);
    };

    const handleSelectAllFeatures = () => {
        setSelectedFeatures(defaultFeatures);
    };

    const handleUnselectAllFeatures = () => {
        setSelectedFeatures([]);
    };

    return (
        <div className="checkbox_grid">
            <div className="deck_feature_container">
                <span className="deck_set_title">Decks</span>
                {deckOptions.map(({ value, image, alt }) => (
                    <button
                        key={value}
                        type="button"
                        value={value}
                        onClick={() => handleDeckChange(value)}
                        className={selectedDecks.includes(value) ? 'feature_checkbox_on' : 'feature_checkbox_off'}
                    >
                        <img src={image} className="checkbox_image" alt={alt} />
                    </button>
                ))}

                <div className="button_row">
                    <button type="button" className="checkbox_helper_button" onClick={handleSelectAllDecks}>
                        Select All
                    </button>
                    <Link to="/card_details">
                        <button type="button" className="deck_details_button">Details</button>
                    </Link>
                    <button type="button" className="checkbox_helper_button" onClick={handleUnselectAllDecks}>
                        Clear Decks
                    </button>
                </div>
            </div>

            <div className="deck_feature_container">
                <span className="deck_set_title">Features</span>
                {featureOptions.map(({ value, image, alt }) => (
                    <button
                        key={value}
                        type="button"
                        value={value}
                        onClick={() => handleFeatureChange(value)}
                        className={selectedFeatures.includes(value) ? 'feature_checkbox_on' : 'feature_checkbox_off'}
                    >
                        <img src={image} className="checkbox_image" alt={alt} />
                    </button>
                ))}

                <div className="button_row">
                    <button type="button" className="checkbox_helper_button" onClick={handleSelectAllFeatures}>
                        Select All
                    </button>
                    <Link to="/card_details">
                        <button type="button" className="deck_details_button">Details</button>
                    </Link>
                    <button type="button" className="checkbox_helper_button" onClick={handleUnselectAllFeatures}>
                        Clear Features
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckboxList;
