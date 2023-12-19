import React from 'react'
import '../styles/Homepage.css'
import { useState, } from 'react';
import { Link } from 'react-router-dom';

const AddPlayerNames = () => {
    const [playerName, setPlayerName] = useState([]);
    const [inputValue, setInputValue] = useState(''); // State to hold the input field value



    const handleInputChange = (event) => {
        localStorage.setItem("player names", JSON.stringify(playerName))
        setInputValue(event.target.value);

    };



    const handleAddItem = () => {
        if (inputValue.trim() !== '') {

            setPlayerName((prevItems) => [...prevItems, inputValue]);
            setInputValue(''); // Clear the input field after adding the item
            localStorage.setItem("player names", JSON.stringify(playerName))
        }
        console.log(playerName)
    };



    const OnClick = () => {
        handleAddItem();
        OnFinish();
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            OnClick()
        }
    };

    const OnFinish = () => {
        localStorage.setItem("player names", JSON.stringify(playerName))
    }

    setTimeout(OnFinish, 200);

    return (
        <div>
            
            <div className='add_players_container'>
                <div className="add_players_grid">
                    <div className="add_players_grid_item">

                        <div className='add_players_form'>
                            <input className='add_players_input' id="playerName" type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                            <button className="add_players_button" onClick={OnClick}>Add Player</button>
                            <Link to='/drinking_game'><button className="start_game_button_last"> Start Game </button></Link>
                        </div>
                        
                    </div>
                    <div className="add_players_grid_item">
                        <ul className="added_players_list">
                            {playerName.map((item, index) => (
                                <li className="each_player_names_list" key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}




export default AddPlayerNames
