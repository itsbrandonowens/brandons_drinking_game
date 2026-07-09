import React, { useState } from 'react';
import '../styles/Homepage.css';
import AddPlayerNames from './AddPlayerNames';
import LastOrdersLogo from './images/LastOrdersLogo.png';
import x_logo from './images/x_logo.png';
import facebook_logo from './images/facebook_logo.png';
import tiktok_logo from './images/tiktok_logo.png';
import CheckboxList from './CheckboxListComponent';

const Home = () => {
    const [screen, setScreen] = useState('welcome');

    const screenClassMap = {
        welcome: {
            first: 'first_screen',
            second: 'second_screen_gone',
            third: 'third_screen_gone',
        },
        settings: {
            first: 'first_screen_gone',
            second: 'second_screen',
            third: 'third_screen_gone',
        },
        players: {
            first: 'first_screen_gone',
            second: 'second_screen_gone_2',
            third: 'third_screen',
        },
    };

    const classes = screenClassMap[screen];

    return (
        <div className="home_container">
            <div className={classes.first}>
                <p className="version_text">version 3.0</p>
                <a href="https://twitter.com/LastOrdersGame" target="_blank" rel="noreferrer">
                    <img src={x_logo} className="x_logo_homepage" alt="x_logo" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556201727778" target="_blank" rel="noreferrer">
                    <img src={facebook_logo} className="facebook_logo_homepage" alt="facebook_logo" />
                </a>
                <a href="https://www.tiktok.com/@lastordersgame" target="_blank" rel="noreferrer">
                    <img src={tiktok_logo} className="tiktok_logo_homepage" alt="tiktok_logo" />
                </a>
                <img src={LastOrdersLogo} className="lologo" alt="last_orders_logo" />
                <button className="click_here_to_start_button" onClick={() => setScreen('settings')}>
                    Click Here to Start
                </button>
            </div>

            <div className={classes.second}>
                <CheckboxList />
                <button className="second_page_continue_button" onClick={() => setScreen('players')}>
                    Continue
                </button>
            </div>

            <div className={classes.third}>
                <AddPlayerNames />
            </div>
        </div>
    );
};

export default Home;
