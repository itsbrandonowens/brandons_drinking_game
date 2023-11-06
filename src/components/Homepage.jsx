import React from 'react'
import '../styles/Homepage.css'
import AddPlayerNames from './AddPlayerNames';
import { Link } from 'react-router-dom';
import geordie_monster from "./images/geordie_monster.jpg"
import dirty_mackems from "./images/dirty_mackems.jpg"

const Home = () => {
    return (


        <div className="home_container">
            <h1 className="homepage_title"> Brandon's Drinking Game </h1>

            <div className="enter_names">
                <AddPlayerNames />
            </div>
            <div className="button_holders">
                <Link to='/drinking_game'><button className="start_game_button"> Start Game </button></Link>
                
            </div>
            <img src={geordie_monster} className="geordie_monster" alt="geordie_monster"></img>
            <img src={dirty_mackems} className="dirty_mackems" alt="dirty_mackems"></img>
        </div>





    )
}

export default Home
