import React, { useState } from 'react';
import '../styles/GameCards.css'
import chest_top from './images/chest_top.png'
import chest_bottom from './images/chest_bottom.png'
import chest_full from './images/chest_full.png'

const ChestFeatureComponent = () => {
    //This is for JSON Local Storage for names entered 
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    const [chestTitleStyle, setChestTitleStyle] = useState("chest_title")
    const [chestForfeitStyle, setChestForfeitStyle] = useState("chest_title_gone")
    const [chestTopStyle1, setChestTopStyle1] = useState("chest_top_image")
    const [chestTopStyle2, setChestTopStyle2] = useState("chest_top_image")
    const [chestTopStyle3, setChestTopStyle3] = useState("chest_top_image")
    const [chest1Container, setChest1Container] = useState("chest_individual_container")
    const [chest2Container, setChest2Container] = useState("chest_individual_container")
    const [chest3Container, setChest3Container] = useState("chest_individual_container")
    const chest_forfeits = ["Free Pass", "1 Drink", "2 Drinks", "3 Drinks", "Give out 4 drinks", "Give out 2 drinks", "You and a friend drink", "Drink half ", "Finish your drink", "Do a Shot", "1 Drink", "Free Pass", "2 Drinks", "3 Drinks"]
    const [randomForfeit, setRandomForfeit] = useState("")
    const [randomForfeit2, setRandomForfeit2] = useState("")
    const [randomForfeit3, setRandomForfeit3] = useState("")



    //Chest1 Function 
    const OnChestClick1 = () => {
        //Show Chest 1 - The Forfeit you got
        setChestTopStyle1("chest_top_image_moved")
        setChestTitleStyle("chest_title_gone")
        setChestForfeitStyle("random_forfeit_text")
        setChest2Container("chest_individual_container_not_picked")
        setChest3Container("chest_individual_container_not_picked")
        setTimeout(() => {
            setRandomForfeit(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
        }, "1000");

        //Reveal the other two chests - The Forfeit you could have got
        setTimeout(() => {
            setChestTopStyle2("chest_top_image_moved")
            setChestTopStyle3("chest_top_image_moved")
            setTimeout(() => {
                setRandomForfeit2(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
                setRandomForfeit3(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
            }, "1000");
        }, "3000");
    }

    //Chest2 Function 
    const OnChestClick2 = () => {
        //Show Chest 2 - The Forfeit you got
        setChestTopStyle2("chest_top_image_moved")
        setChestTitleStyle("chest_title_gone")
        setChestForfeitStyle("random_forfeit_text")
        setChest1Container("chest_individual_container_not_picked")
        setChest3Container("chest_individual_container_not_picked")
        setTimeout(() => {
            setRandomForfeit2(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
        }, "1000");

        //Reveal the other two chests - The Forfeit you could have got
        setTimeout(() => {
            setChestTopStyle1("chest_top_image_moved")
            setChestTopStyle3("chest_top_image_moved")
            setTimeout(() => {
                setRandomForfeit(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
                setRandomForfeit3(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
            }, "1000");
        }, "3000");
    }
    //Chest3 Function    
    const OnChestClick3 = () => {
        //Show Chest 3 - The Forfeit you got
        setChestTopStyle3("chest_top_image_moved")
        setChestTitleStyle("chest_title_gone")
        setChestForfeitStyle("random_forfeit_text")
        setChest1Container("chest_individual_container_not_picked")
        setChest2Container("chest_individual_container_not_picked")
        setTimeout(() => {
            setRandomForfeit3(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
        }, "1000");

        //Reveal the other two chests - The Forfeit you could have got
        setTimeout(() => {
            setChestTopStyle1("chest_top_image_moved")
            setChestTopStyle2("chest_top_image_moved")
            setTimeout(() => {
                setRandomForfeit(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
                setRandomForfeit2(chest_forfeits[Math.floor(Math.random() * chest_forfeits.length)]);
            }, "1000");
        }, "3000");

    }

    return (

        <div className="chest_container">
            <div className="chest_title_container">
                <h1 className={chestTitleStyle}> {randomName} Pick a chest!</h1>
            </div>

            <div className="chest_grid_item" onClick={OnChestClick1}>
                <div className={chest1Container}>
                    <div className="forfeit_container">
                        <h1 className={chestForfeitStyle}> {randomForfeit} </h1>
                    </div>
                    <img src={chest_top} id="1" className={chestTopStyle1}></img>
                    <img src={chest_bottom} id="2" className="chest_bottom_image"></img>
                </div>
            </div>


            <div className="chest_grid_item" onClick={OnChestClick2}>
                <div className={chest2Container}>
                    <div className="forfeit_container">
                        <h1 className={chestForfeitStyle}> {randomForfeit2} </h1>
                    </div>
                    <img src={chest_top} className={chestTopStyle2}></img>
                    <img src={chest_bottom} className="chest_bottom_image"></img>
                </div>
            </div>


            <div className="chest_grid_item" onClick={OnChestClick3}>
                <div className={chest3Container}>
                    <div className="forfeit_container">
                        <h1 className={chestForfeitStyle}> {randomForfeit3} </h1>
                    </div>
                    <img src={chest_top} className={chestTopStyle3}></img>
                    <img src={chest_bottom} className="chest_bottom_image"></img>
                </div>
            </div>
        </div>

    );
}



export default ChestFeatureComponent;