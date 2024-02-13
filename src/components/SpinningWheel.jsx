import React from 'react'
import WheelComponent from "react-wheel-of-prizes";
import '../styles/GameCards.css'


const SpinningWheel = () => {
    const segments = [
        "Finish your drink",
        "Drink with a buddy",
        "Give out 5 drinks",
        "Free Pass!",
        "Drink 2",
        "Half of your drink",
        "Drink 1",
        "Give out 2 drinks",
        "Drink 2",
        "Do a Shot",
        "Drink 2 with a buddy",
        "Player to your left drink"
    ];

    const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F","#34B5AF","#E24220","#14A8B8","#CA45DE","#E2157F","#33D017","#AB124B"];
    const onFinished = (winner) => {
        console.log(winner);
    };
    
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
    
    const generateWheelSize = (wheelSize) => {

        if (window.innerWidth<768 ){
            return 100;
        }

        if (window.innerWidth>768 && window.innerWidth<992){
            return 100;
        }

        if (window.innerWidth>991){
            return 200;
        }


    }
    

    return (

        <div className="wheel_container">
            <WheelComponent
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Spin"
                isOnlyOnce={true}
                size={generateWheelSize()}
                upDuration={randomNumberInRange(1, 500)}
                downDuration={randomNumberInRange(1, 500)}
                fontFamily="Arial"
                width = "100"
                height = "100"
            />
        </div>

    )
}

export default SpinningWheel