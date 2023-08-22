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

const DrinkingGame = () => {
    const [num, setNum] = useState(2);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const OnClick = () => {
        setNum(randomNumberInRange(1, 22));
        console.log(num)
    }

    return (
        <div className="game_container">
            <Link to='/homepage'> <button className="home_button"> 🏠 </button> </Link>
            {num == 1 ?
                <BlackGameCards /> : null
            }
            {num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 || num == 8 ?
                <GreenGameCards /> : null
            }
            {num == 9 || num == 10 || num == 11 || num == 12 || num == 13 ?
                <OrangeGameCards /> : null
            }
            {num == 14 || num == 15 || num == 16 || num == 17 || num == 18?
                <BlueGameCards /> : null
            }
            {num == 19 || num ==20 || num==21 ?
                <RedGameCards /> : null
            }
            {num == 22?
                <PinkGameCards /> : null
            }

            <button className="next_card_button" onClick={OnClick}>Next Card</button>
            
        </div>





    )
}

export default DrinkingGame
