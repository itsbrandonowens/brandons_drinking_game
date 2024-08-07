import React from 'react'
import '../styles/GameCards.css'
import green_card from "./images/green_card.png"
import green_card_mobile from "./images/green_card_mobile.png"

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
            description: 'Everyone vote who the smartest player is, they must drink'
        },
        { 
            title: 'my fav colour is carrot',
            description: 'Everyone vote who the thickest player is, they must drink'
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
            description: 'Do 10 pushups then drink! If you cant do it, then 2 drinks'
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
            description: 'All men, take a drink!'
        },
        {
            title: 'I hate women!',
            description: 'All women, take a drink!'
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
        {
            title: 'Serial Vapist',
            description: 'Everyone who vapes or smokes, drink!'
        },
        {
            title: 'You Hottie',
            description: 'Compliment the person on your left, then both drink!'
        },
        {
            title: 'Spice Bomb',
            description: 'You choose the person who smells the nicest, they must drink!'
        },
        {
            title: 'Liquid Ass',
            description: 'You choose the person who smells the worst, they must drink!'
        },
        {
            title: 'Fly for a White Guy',
            description: 'You choose the person who is currently dressed the best, they must drink!'
        },
        {
            title: 'Blocks of Cream',
            description: 'You choose the person who has the nicest smile, they must drink!'
        },
        {
            title: 'Dead Trim',
            description: 'You choose the person who has the worst haircut, they must drink!'
        },
        { 
            title: "Starting with T",
            description: 'Say 5 words starting with T in 5 seconds or drink'
        },
        { 
            title: 'Tastes like pish',
            description: 'The player with the weakest drink must take a drink'
        },
        { 
            title: 'No one loves me',
            description: 'Single people drink'
        },
        { 
            title: 'Wispa Gold',
            description: 'You must only whisper until your next turn'
        },
        { 
            title: 'Je suis une baguette',
            description: 'You must not speak English until your next turn'
        },
        { 
            title: 'No hablo ingles',
            description: 'You must not speak English until your next turn'
        },
        { 
            title: 'Phones on The Table!',
            description: 'Everyone put your phones on the table, next person to get a notification must drink!'
        },
        { 
            title: 'Nutter Ex!',
            description: 'Point to the person with the craziest ex, they must drink!'
        },
        { 
            title: 'Top and Bottom Shaggas!',
            description: 'Players with the highest and lowest body count must drink!'
        },
        { 
            title: 'Say it or drink it!',
            description: 'Say your most embarrasing sex story, or drink half of your drink!'
        },
        { 
            title: 'Say it or drink it!',
            description: 'Say the nastiest thing you have ever done in your life, or drink 5 sips!'
        },
        { 
            title: 'Caught White Handed!',
            description: 'Drink if you have ever been caught masturbating'
        },
        { 
            title: 'Caught Balls Deep!',
            description: 'Drink if you have ever been caught having sex'
        },
        { 
            title: 'Piercings!',
            description: 'Everyone, take a drink for every piercing you have'
        },
        { 
            title: 'Tattoos!',
            description: 'Everyone, take a drink for every tattoo you have'
        },
        { 
            title: 'Hobbit!',
            description: 'Take a drink for every person, in this game, who is taller than you'
        },
        { 
            title: 'High Ceiling!',
            description: 'Try touch the ceiling without jumping, if you cant then drink'
        },
        { 
            title: 'Sock Swappers!',
            description: 'Swap an item of clothing with someone in the room'
        },
        { 
            title: 'The Floor is Lava!',
            description: 'Next person to touch the floor must drink'
        },
        { 
            title: 'Global Knowledge!',
            description: 'Name 10 countries in 10 seconds, if you fail then drink'
        },
        { 
            title: 'Twins!',
            description: 'Choose which 2 players look the most alike, they must both drink'
        },
        { 
            title: 'Childish Occupation!',
            description: 'What did you want to be when you were a kid? If this is your profession now, everyone else must drink. If not, then you drink'
        },
        { 
            title: 'Speccy Git!',
            description: 'Anyone wearing glasses, take a drink'
        },
        { 
            title: 'Fat Scranner!',
            description: 'Anyone who has eaten during this game, take a drink'
        },
        { 
            title: 'Ikea Colour Chart!',
            description: 'Everyone say your favourite colour at the same time, any players who say the same colour as someone else, drink!'
        },
        { 
            title: 'Sharing is Caring!',
            description: 'Everyone must offer you their drink, you can choose one and take a drink from it!'
        },
        { 
            title: 'Im Thinking of a Number!',
            description: 'Think of a number between 1-10, whoever guesses it right can choose someone to drink!'
        },
        { 
            title: 'Pirate!',
            description: 'Stand on one leg and drink!'
        },
        { 
            title: 'Uber Chunder!',
            description: 'Drink if you have ever been sick in a taxi!'
        },
        { 
            title: ';)!',
            description: 'Send a winky face to the last person, not in this room, that you messaged, or drink 5 times!'
        },


    ]
    
    
    let randomValue = cards[Math.floor(Math.random() * cards.length)];
    return (

        <div className="card_container">
           <img src={window.innerWidth > 767 ? green_card : green_card_mobile} className="cards" alt="green_card"></img>
           <div className="card_contents">
                <h2 className="card_title"> {randomValue.title} </h2>
                <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                <p className="card_description">{randomValue.description}</p>
           </div>     
        </div>





    )
}

export default GreenGameCards