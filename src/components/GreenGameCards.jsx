import React from 'react'
import '../styles/GameCards.css'
import green_card from "./images/green_card.png"

const GreenGameCards = () => {
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))

    const cards = [ 
        { 
            title: 'Summer Babies',
            description: 'Anyone born in the summer must drink!'
        },
        { 
            title: 'Winter Babies',
            description: 'Anyone born in the winter must drink!'
        },
        { 
            title: 'On your Left',
            description: 'The person to the left of you must drink!'
        },
        { 
            title: 'Buddies',
            description: 'Pick a player to drink with you!'
        },
        { 
            title: 'Spilt Drinks',
            description: 'Anybody who has spilled a drink tonight, drink!'
        },
        { 
            title: 'Kinky ;) ',
            description: 'Everybody vote who the kinkiest player is! They must then drink and tell everyone their kinkiest fetish'
        },
        { 
            title: 'DOB',
            description: 'You must say the Date of Birth of the person to your right, if you fail you drink, if you get it right they drink'
        },
        { 
            title: 'Everyone point at a player',
            description: 'Everyone point at a player, the player with the most fingers pointed at them must drink'
        },
        { 
            title: 'Spirit Drinkers',
            description: 'Everyone drinking a spirit must drink'
        },
        { 
            title: 'Beer/Cider Drinkers',
            description: 'Everyone drinking a Beer must drink, Cider drinkers drink twice '
        },
        { 
            title: '1,2,3,4,5',
            description: 'Drink for every letter in your name'
        },
        { 
            title: 'Bangers',
            description: 'If you can name the song playing now you can choose someone to drink, if not or there is no music you must drink'
        },
        { 
            title: 'Sharing is caring',
            description: 'Take a drink from the player on your left and the player on your right'
        },
        { 
            title: 'One Syllable',
            description: 'Anybody with a 1 syllable name must drink'
        },
        { 
            title: 'Shaggas',
            description: 'Anybody with a body count more than 10 must drink'
        },
        { 
            title: 'Pished',
            description: 'Everyone vote the drunkest person, they must take another drink'
        },
        { 
            title: 'Muckle heed',
            description: 'The person with the biggest head must drink'
        },
        { 
            title: 'Dumbo',
            description: 'The person with the biggest ears must drink'
        },
        { 
            title: 'Baba',
            description: 'The youngest player must take a drink'
        },
        { 
            title: 'Granda',
            description: 'The oldest player must take a drink'
        },
        { 
            title: 'Memory',
            description: 'Drink 3 if you cant remember what the last card was'
        },
        { 
            title: 'Old Buddies',
            description: 'You and the player you have known the longest must drink'
        },
        { 
            title: 'Unsociable twat',
            description: 'Anyone on their phone right now must drink'
        },
        { 
            title: 'No Style',
            description: 'If your girlfriend or parents bought or suggested you to get the clothes youre wearing now, drink'
        },
        { 
            title: 'No Hands',
            description: 'Take a drink with no hands'
        },
        { 
            title: 'Potty Mouth',
            description: 'You must not swear for 10 minutes, if you do you must drink for each word'
        },
        { 
            title: 'Gruffalo',
            description: 'Hairiest Player Drinks'
        },
        { 
            title: 'Einstein',
            description: 'Everyone vote who the smartest player is, they must down their drink'
        },
        { 
            title: 'my fav colour is carrot',
            description: 'Everyone vote who the thickest player is, they must down their drink'
        },
        { 
            title: 'FULL names',
            description: 'You must go around the room and say everyone FULL names, drink for every one you get wrong'
        },
        {
            title: 'High Five',
            description: 'High five the player to your right then both of you take a drink'
        },
        {
            title: 'Dont leave!',
            description: 'The next person who wants to leave the room must finish their drink before doing so'
        },
        {
            title: 'Dont look!',
            description: 'The next person to make eye contact with you must drink'
        },
        {
            title: 'Hop to it!',
            description: 'Do 10 pushups then drink! If you cant do it, then 4 drinks'
        },
        {
            title: 'Its a Banksy!',
            description: 'Draw something on a player of your choice'
        },
        {
            title: 'T-Minus!',
            description: 'You have 5 seconds to say 5 words starting with T, or drink'
        },
        {
            title: 'Sly Digs!',
            description: 'Write a players name down on your phone and say something about that player, every player must guess who it is. Every wrong player must drink'
        },
        {
            title: 'Men are Pigs!',
            description: 'All men, take 2 drinks!'
        },
        {
            title: 'I hate women!',
            description: 'All women, take 2 drinks!'
        },
        {
            title: 'Short Kings!',
            description: 'Everyone UNDER 6 foot, take a drink and hope you grow!'
        },
        {
            title: 'Giant Chads!',
            description: 'Everyone 6 foot and above, take a drink!'
        },
        {
            title: 'Bus Wankers!',
            description: 'Everyone without a drivers license, drink!'
        },
        
       

        
        

    ]
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={green_card} className="cards" alt="green_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default GreenGameCards