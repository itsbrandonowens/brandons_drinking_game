import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LOPlus from "./images/LOPlus.png"
import LOATT from "./images/LOATT.png"
import FiftyTwoDeck from "./images/FiftyTwoDeck.png"
import shearer_image from './images/shearer.png'
import earthquake_image from './images/earthquake_image.png'
import boozenami_image from './images/boozenami.png'
import genie_image from './images/genie_image.png'
import reflect_shield from './images/reflect_shield.png'
import chest_image from './images/chest_full.png'
import gamble_image from "./images/gamble_image.png"

const CheckboxList = () => {
    const [selectedDecks, setSelectedDecks] = useState(["Original", "LO+"]);
    const [selectedFeatures, setSelectedFeatures] = useState(["WW", "EQ", "BN", "Genie", "Shield", "Chests", "Gamble"]);

    localStorage.setItem("decks", JSON.stringify(selectedDecks))
    localStorage.setItem("features", JSON.stringify(selectedFeatures))
    const handleDeckChange = (event) => {
        const {value} = event.target;
        if (!selectedDecks.includes(value)) {
            // Add word to array if checkbox is checked
            setSelectedDecks((prev) => [...prev, value]);
            localStorage.setItem("decks", JSON.stringify(selectedDecks))
        } else {
            // Remove word from array if checkbox is unchecked
            setSelectedDecks((prev) => prev.filter((word) => word !== value));
        }
    }

    const handleFeatureChange = (event) => {
        const {value} = event.target;
        if (!selectedFeatures.includes(value)) {
            setSelectedFeatures((prev) => [...prev, value]);
            localStorage.setItem("features", JSON.stringify(selectedFeatures))
        } else {
            setSelectedFeatures((prev) => prev.filter((word) => word !== value));
        }

    };

    const handleSelectAllDecks = (event) => {
        const {checked } = event.target;
        if (checked) {
            setSelectedDecks(["Original", "LO+", "52Deck", "ATT"]);
            localStorage.setItem("decks", JSON.stringify(selectedDecks))
        }
    }

    const handleUnselectAllDecks = (event) => {
        const {checked } = event.target;
        if (checked) {
            setSelectedDecks(["Original"]);
            localStorage.setItem("decks", JSON.stringify(selectedDecks))
        }
    }

    const handleSelectAllFeatures = (event) => {
        const {checked } = event.target;
        if (checked) {
            setSelectedFeatures(["WW", "EQ", "BN", "Genie", "Shield", "Chests", "Gamble"]);
            localStorage.setItem("decks", JSON.stringify(selectedDecks))
        }
    }

    const handleUnselectAllFeatures = (event) => {
        const {checked } = event.target;
        if (checked) {
            setSelectedFeatures([""]);
            localStorage.setItem("decks", JSON.stringify(selectedDecks))
        }
    }

  

    return (
        <div className="checkbox_grid">
            <div className="deck_feature_container">
                <span className='deck_set_title'>Decks</span>
                <button value="LO+" onClick={handleDeckChange} className={selectedDecks.includes("LO+") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={LOPlus} className="checkbox_image" alt="LOPlus"></img> </button>
                <button value="ATT" onClick={handleDeckChange} className={selectedDecks.includes("ATT") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={LOATT} className="checkbox_image" alt="ATT"></img> </button>
                <button value="52Deck" onClick={handleDeckChange} className={selectedDecks.includes("52Deck") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={FiftyTwoDeck} className="checkbox_image" alt="52Deck"></img> </button>

                <label className="checkbox_label_selectall"> <input type="checkbox" className="checkbox" value="ATT" onChange={handleSelectAllDecks} checked={selectedDecks.length == 4} /> Select All </label>
                <Link to='/card_details'> <button className="deck_details_button"> Details </button> </Link>
                <label className="checkbox_label_unselectall"> <input type="checkbox" className="checkbox" value="ATT" onChange={handleUnselectAllDecks} checked={selectedDecks.includes("L")} /> Unselect All </label>
            </div>

            <div className="deck_feature_container">
                <span className='deck_set_title'>Features</span>

                <button value="WW" onClick={handleFeatureChange} className={selectedFeatures.includes("WW") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={shearer_image} className="checkbox_image" alt="WW"></img> </button>
                <button value="EQ" onClick={handleFeatureChange} className={selectedFeatures.includes("EQ") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={earthquake_image} className="checkbox_image" alt="EQ"></img> </button>
                <button value="BN" onClick={handleFeatureChange} className={selectedFeatures.includes("BN") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={boozenami_image} className="checkbox_image" alt="BN"></img> </button>
                <button value="Genie" onClick={handleFeatureChange} className={selectedFeatures.includes("Genie") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={genie_image} className="checkbox_image" alt="Genie"></img> </button>
                <button value="Shield" onClick={handleFeatureChange} className={selectedFeatures.includes("Shield") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={reflect_shield} className="checkbox_image" alt="Shield"></img> </button>
                <button value="Chests" onClick={handleFeatureChange} className={selectedFeatures.includes("Chests") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={chest_image} className="checkbox_image" alt="Chests"></img> </button>
                <button value="Gamble" onClick={handleFeatureChange} className={selectedFeatures.includes("Gamble") ? "feature_checkbox_on" : "feature_checkbox_off"}> <img src={gamble_image} className="checkbox_image" alt="Gamble"></img> </button>

                <label className="checkbox_label_selectall"> <input type="checkbox" className="checkbox" value="ATT" onChange={handleSelectAllFeatures} checked={selectedFeatures.length == 7} /> Select All </label>
                <Link to='/card_details'> <button className="deck_details_button"> Details </button> </Link>
                <label className="checkbox_label_unselectall"> <input type="checkbox" className="checkbox" value="ATT" onChange={handleUnselectAllFeatures} checked={selectedFeatures.includes("L")} /> Unselect All </label>
            </div>
        </div>
    );
};

export default CheckboxList;
