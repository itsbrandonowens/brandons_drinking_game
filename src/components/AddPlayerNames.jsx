import React, { useEffect, useState } from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
import privacy_policy from './images/privacy_policy.pdf';
import cookie_policy from './images/cookie_policy.pdf';

const loadPlayers = () => {
    try {
        const savedPlayers = localStorage.getItem('player names');
        return savedPlayers ? JSON.parse(savedPlayers) : [];
    } catch (error) {
        return [];
    }
};

const AddPlayerNames = () => {
    const [playerName, setPlayerName] = useState(loadPlayers);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('player names', JSON.stringify(playerName));
    }, [playerName]);

    const handleAddItem = () => {
        const trimmedValue = inputValue.trim();

        if (!trimmedValue) {
            return;
        }

        setPlayerName((prevItems) => [...prevItems, trimmedValue]);
        setInputValue('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddItem();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddItem();
        }
    };

    return (
        <div>
            <div className="legal_rules_container">
                <p className="legal_text">⛔ Everyone playing must be 18 or over</p>
                <p className="legal_text">🍻 Everyone must drink responsibly</p>
                <p className="legal_text">
                    🍪 By clicking Start Game, you agree to our{' '}
                    <a href={privacy_policy} className="policy_links" target="_blank" rel="noreferrer">
                        Privacy
                    </a>{' '}
                    and{' '}
                    <a href={cookie_policy} className="policy_links" target="_blank" rel="noreferrer">
                        Cookie
                    </a>{' '}
                    Policy
                </p>
            </div>

            <div className="add_players_container">
                <div className="button_form_container">
                    <Link to="/drinking_game">
                        <button type="button" className="start_game_button">
                            Start Game
                        </button>
                    </Link>
                    <form className="add_players_form" onSubmit={handleSubmit}>
                        <input
                            className="add_players_input"
                            id="playerName"
                            type="text"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Add a player"
                        />
                        <button type="submit" className="add_players_button">
                            Add Player
                        </button>
                    </form>
                </div>

                <div className="player_list_container">
                    <ul className="added_players_list">
                        {playerName.map((item, index) => (
                            <li className="each_player_names_list" key={`${item}-${index}`}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddPlayerNames;
