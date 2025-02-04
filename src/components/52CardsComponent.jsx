import React, { useState } from 'react';
import '../styles/GameCards.css'
import back_of_card from "./images/cards/card_back.png"

const FiftyTwoCardsComponent = () => {

  //Imports all card images from the ""./cards" folder
  function importAll(r) {
    let cards = {};
    r.keys().map((item, index) => { cards[item.replace('./', '')] = r(item); });
    return cards;
  }
  const cards = importAll(require.context('./images/cards/', false, /\.png/));
  // To call image refer it as cards["imagehere.png"]

  function makeDeck() {
    const cardDeck = ["2C.png", "2D.png", "2H.png", "2S.png", "3C.png", "3D.png", "3H.png", "3S.png", "4C.png", "4D.png", "4H.png", "4S.png", "5C.png",
      "5D.png", "5H.png", "5S.png", "6C.png", "6D.png", "6H.png", "6S.png", "7C.png", "7D.png", "7H.png", "7S.png", "8C.png", "8D.png", "8H.png", "8S.png",
      "9C.png", "9D.png", "9H.png", "9S.png", "10C.png", "10D.png", "10H.png", "10S.png", "AC.png", "AD.png", "AH.png", "AS.png", "JC.png", "JD.png", "JH.png",
      "JS.png", "KC.png", "KD.png", "KH.png", "KS.png", "QC.png", "QD.png", "QH.png", "QS.png"];
    return cardDeck;
  }

  //"Fisher–Yates shuffle" algorithmn to shuffle the cards
  function shuffleDeck(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue
    }
    //console.log("Deck shuffled");
    return array;
  }
  function shuffledDeck() {
    return shuffleDeck(makeDeck());
  }
  
  const playDeck = shuffledDeck();
  const [backOfCardStyle, setBackOfCardStyle] = useState("fiftytwocard_back")
  const backOfCardHandler = () => { 
    setBackOfCardStyle("fiftytwocard_back_gone")
  
  }
  function Deck() {
    const [draftedCard, draftCard] = useState(0);
    return (
      <div>
        <img src={back_of_card} className={backOfCardStyle} alt="playing_card" onClick={backOfCardHandler}></img>
        <img src={cards[playDeck[draftedCard]]} className="fiftytwocards" alt="" onClick={() => draftCard(draftedCard + 1)}  />
        
      </div>
    );
  }
  return (
    <Deck />
  );
}

export default FiftyTwoCardsComponent;