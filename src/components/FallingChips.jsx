import React from "react";
import { motion } from "framer-motion";
import poker_chip_red from "./images/poker_chip_red.png";
import poker_chip_blue from "./images/poker_chip_blue.png";
import { useEffect } from "react";

const chips = [poker_chip_red, poker_chip_blue];

const FallingChips = () => {
    useEffect(() => { // this is for pre-loading the images of the chips to prevent delays in loading 
        const images = [poker_chip_red, poker_chip_blue];
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    const generateChips = () => {
        return Array.from({ length: 30 }).map((_, index) => { // length:20 is for increasing/decreasing the amount of chips falling down the screen
            const randomLeft = Math.random() * 90 + "vw"; // Random horizontal position
            const randomDelay = Math.random() * 2; // Random delay for staggered fall
            const randomSize = Math.random() * 30 + 40; // Random size between 40px and 70px
            const randomImage = chips[Math.floor(Math.random() * chips.length)]; // Pick a red or blue chip




            return (
                <motion.img
                    key={index}
                    src={randomImage}
                    alt="Poker Chip"
                    className="poker-chip"
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: "100vh", opacity: 1 }}
                    transition={{
                        duration: 4 + Math.random() * 2, // Random fall duration (4-6 seconds)
                        ease: "linear",
                        repeat: Infinity,
                        delay: randomDelay,
                    }}
                    style={{
                        position: "absolute",
                        left: randomLeft,
                        width: `${randomSize}px`,
                        height: `${randomSize}px`,
                    }}
                />
            );
        });
    };

    return <div className="falling-chips-container">{generateChips()}</div>;
};

export default FallingChips;
