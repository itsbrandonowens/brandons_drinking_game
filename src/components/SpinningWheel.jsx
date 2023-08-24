import React from 'react'
import WheelComponent from "react-wheel-of-prizes";

const SpinningWheel = () => {
    const segments = [
        "Finish your drink",
        "Drink with a buddy",
        "Give out 5 drinks",
        "Free Pass!",
        "Drink 2",
        "Half of your drink"
    ];

    const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F","#34B5AF" ];
    const onFinished = (winner) => {
        console.log(winner);
    };
    
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
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
                size={200}
                upDuration={randomNumberInRange(1, 500)}
                downDuration={randomNumberInRange(1, 500)}
                fontFamily="Arial"
            />
        </div>

    )
}

export default SpinningWheel