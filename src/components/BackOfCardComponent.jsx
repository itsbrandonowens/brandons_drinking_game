import React from 'react'
import '../styles/GameCards.css'
import card_back from "./images/card_back.png"

const BackOfCardComponent = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))


   
    
    

    return (

        <div className="card_container">
           <img src={window.innerWidth > 767 ? card_back : card_back} className="cards" alt="black_card"></img>
           <div className="card_contents">

           </div>     
        </div>





    )
}

export default BackOfCardComponent