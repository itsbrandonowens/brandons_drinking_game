import React, { useState } from 'react';
import '../styles/GameCards.css'
import black_card from "./images/black_card.png"
import black_card_mobile from "./images/black_card_mobile.png"
import blue_card from "./images/blue_card.png"
import blue_card_mobile from "./images/blue_card_mobile.png"
import green_card from "./images/green_card.png"
import green_card_mobile from "./images/green_card_mobile.png"
import orange_card from "./images/orange_card.png"
import orange_card_mobile from "./images/orange_card_mobile.png"

const OriginalDeck = () => {
    //This is for JSON Local Storage for names entered 
    const storedNames = JSON.parse(localStorage.getItem("player names"))
    let randomName = storedNames[Math.floor(Math.random() * storedNames.length)];
    let assignedNameCard = JSON.parse(localStorage.getItem("assignedName"))

    //Setting the random number to pick a card colour
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const num = randomNumberInRange(1,100);

    

    //All Card Colours with their respective cards
    const black_cards = [
        {
            title: 'Black Card #1',
            description: 'Finish your drink, no matter how full!'
        },
        {
            title: 'Black Card #2',
            description: 'Take a shot, of any spirit you like!'
        },
        {
            title: 'Black Card #3',
            description: 'Finish your drink, no matter how full and take a shot of any spirit you like!'
        },
        {
            title: 'Black Card #4',
            description: 'Pour yourself a new, full drink, and take a shot!'
        },
        {
            title: 'Black Card #5',
            description: 'Everybody finish your drinks! '
        },
        {
            title: 'Black Card #6',
            description: 'Your off the hook, pick someone to down their drink!'
        },
        {
            title: 'Black Card #7',
            description: 'Play Rock, Paper, Scissors with everyone in the room, do a shot for every player you lose too!'
        },
        {
            title: 'Black Card #8',
            description: 'You may shout "Chug!" at any point and everyone has to finish their drinks! Can only be used once!'
        },
        {
            title: 'Black Card #9',
            description: 'Whoever has the MOST drink left, must finish it!'
        },

    ]

    const blue_cards = [ 
        { 
            title: '21',
            description: 'Go round in a circle counting up from 1-21. You may only add a max of 3 to the number, whoever says 21...Drinks!'
        },
        { 
            title: 'Read your texts',
            description: 'Every player must read their last text out loud or drink!'
        },
        { 
            title: 'Categories ',
            description: 'You must pick a category, then everyone goes around in a circle naming things from that category. First person who cant, drinks... just like in Ring of Fire'
        },
        { 
            title: 'RPS',
            description: 'You and the player on your left must play rock paper scissors, the loser must drink'
        },
        { 
            title: 'Rule 1',
            description: 'You must create a rule for everyone to follow for the rest of the game, if they fail they drink'
        },
        {
            title: 'Question Master',
            description: 'You are now the question master! Catch anyone answering your question? They must drink!'
        },
        {
            title: 'Heaven',
            description: 'Anytime you raise your hand, everyone must copy. Last person who does, drinks!'
        },
        {
            title: 'Thumb War',
            description: 'Everyone have a thumb war with the closest player. Losers drink'
        },
        {
            title: 'Boulder',
            description: 'You must drink once, and then the player to your left must drink twice and so on until it comes back to you'
        },                           
        { 
            title: 'Finger Game',
            description: 'Everyone pour some of your drink in a pint glass and place your finger on the rim. Each player can either leave their finger, or take it off the glass and Player 1 must guess how many are left on the glass. If you get it right, you are out of the game. Last person standing must drink the pint!'
        },
        {
            title: 'Waterfall',
            description: 'Everyone starts to drink, you cant stop until the person before you has stopped'
        },
        {
            title: '2 Truths, 1 Lie',
            description: 'Tell everyone 2 truths and 1 lie, they must guess the lie, if they get it wrong they drink.'
        },
        {
            title: 'Get down Mr President!',
            description: 'Everyone hit the deck! Last one to get to the floor has been shot... they must drink'
        },
        {
            title: 'BANNED!',
            description: 'You can pick a word that is banned for 10 minutes, if anyone says this word they must drink!'
        },
        {
            title: 'ET Phone Home!',
            description: 'Everyone must try to phone this player, first to succeed must choose someone to drink'
        },
        {
            title: 'Ow me dich',
            description: 'Starting with you, take it in turns to say another name for a penis, first person to fail drinks'
        },
        {
            title: 'Touch me Daddy ',
            description: 'Last person to touch this player must drink'
        },
        { 
            title: 'Rule 2',
            description: 'You must create another rule for everyone to follow for the rest of the game, if they fail they drink. Only 2 rules can be active at one time'
        },
        { 
            title: "No E's'",
            description: 'You are not allowed to say words containing the letter E for 10 minutes. If you do, you drink'
        },
        { 
            title: "Don't Move!",
            description: 'Stay completely still until your next turn! Or drink 5 times'
        },
        { 
            title: "Medusa!",
            description: 'Each player must put their heads down, on the count of 3, everyone must raise their head and stare directly at someone else. If you lock eyes with another player you must drink.'
        },
        { 
            title: "Paranoia!",
            description: 'You must whisper a question about the group into the person on your lefts ear, for example "Who is the ugliest?". This person then must answer the question out loud. If you want to know the answer, you must take a drink. The person who said the name can then choose to either respond or take a drink.'
        },
        { 
            title: "Arrogance!",
            description: 'You must pour as much of your drink into a glass as you want then flip a coin. If you get it wrong, you must drink the whole glass. If you get it right, the person to your left must play. Keep going until someone has to drink it.'
        },                                          
    ]

    const green_cards = [ 
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
        { 
            title: 'Papped',
            description: 'Take a photo on your phone, anybody in that photo must drink 3 times'
        } 
    ]

    const orange_cards = [ 
        { 
            title: '3 Big Sips',
            description: 'Take 3 big sips of your drink',
        },
        {
            title: 'Just Drink',
            description: 'Just Drink'
        },
        {
            title: 'Right Handed',
            description: 'If youre holding your drink with you right hand, drink!'
        },
        {
            title: 'Left Handed',
            description: 'If you are holding your drink with you left hand, drink!'
        },
        {
            title: 'Vapist',
            description: 'If you are holding a vape right now, drink!'
        },
        {
            title: 'Drink Swappers',
            description: 'Take some of the drink from the player on your right and pour it into your drink'
        },
        {
            title: 'Sober Guys',
            description: 'Are you drunk? If not, drink twice'
        },
        {
            title: 'Seeing Double',
            description: 'You must drink double for 5 minutes'
        },
        {
            title: 'Free Pass!',
            description: 'You have a free pass for any future forfeit!'
        },
        { 
            title: 'Dead Fish',
            description: 'Lie on your back and take a drink'
        },
        { 
            title: 'No Hands',
            description: 'Take a drink without using your hands or arms!'
        },
        { 
            title: 'Cheers!!',
            description: 'Everyone raise your drinks, cheers and take a drink!'
        },
        { 
            title: 'Heres to you',
            description: 'Pick a buddy to take a drink with'
        },
        { 
            title: "Three's a crowd",
            description: 'Choose 3 people to drink'
        },
        { 
            title: "Dual Weild",
            description: 'Take a drink from the players to your left and right'
        },
        { 
            title: "Hand Holders",
            description: 'You must hold hands with the player to your right for one round'
        },
        { 
            title: "Dare",
            description: 'Do whatever the player on your right wants, if you cant then drink'
        },
        { 
            title: "Right is Right",
            description: 'The player on your right can choose someone to drink'
        },
        { 
            title: "Safety Partner",
            description: 'Choose a player, everyone BUT you and that person must drink'
        },
        { 
            title: "Pinkys Out",
            description: 'You must hold your pinky finger under your drink for the rest of the game. If you are caught not doing it, you must drink'
        },
        
    ]


    let randomBlackCardValue = black_cards[Math.floor(Math.random() * black_cards.length)];
    let randomBlueCardValue = blue_cards[Math.floor(Math.random() * blue_cards.length)];
    let randomGreenCardValue = green_cards[Math.floor(Math.random() * green_cards.length)];
    let randomOrangeCardValue = orange_cards[Math.floor(Math.random() * orange_cards.length)];

    return (
        <div>
            { // Black Cards
                num >= 1 && num <= 5 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? black_card : black_card_mobile} className="cards" alt="black_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomBlackCardValue.title} </h2>
                            <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                            <p className="card_description">{randomBlackCardValue.description}</p>
                        </div>
                    </div>

                    : null
            }

            { // Blue Cards
                num >= 6 && num <= 35 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? blue_card : blue_card_mobile} className="cards" alt="blue_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomBlueCardValue.title} </h2>
                            <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                            <p className="card_description">{randomBlueCardValue.description}</p>
                        </div>
                    </div>

                    : null
            }

            {// Green Cards
                num >= 36 && num <= 80 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? green_card : green_card_mobile} className="cards" alt="green_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomGreenCardValue.title} </h2>
                            <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                            <p className="card_description">{randomGreenCardValue.description}</p>
                        </div>
                    </div>

                    : null
            }

            { // Orange Cards
                num >= 81 && num <= 100 ?
                    <div className="card_container">
                        <img src={window.innerWidth > 767 ? orange_card : orange_card_mobile} className="cards" alt="orange_card"></img>
                        <div className="card_contents">
                            <h2 className="card_title"> {randomOrangeCardValue.title} </h2>
                            <p className="card_player_name">{storedNames[assignedNameCard]}</p>
                            <p className="card_description">{randomOrangeCardValue.description}</p>
                        </div>
                    </div>

                    : null
            }


        </div>

    );
}

export default OriginalDeck;