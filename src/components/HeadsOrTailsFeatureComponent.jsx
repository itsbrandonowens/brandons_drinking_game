import React, { useState } from 'react';
import headsCoinImage from './images/heads_tails_coin_h.svg';
import tailsCoinImage from './images/heads_tails_coin_t.svg';

const HeadsOrTailsFeatureComponent = ({ currentName }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [result, setResult] = useState('');
    const [hasFlipped, setHasFlipped] = useState(false);

    const handleFlip = () => {
        if (hasFlipped) {
            return;
        }

        const nextResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
        const finalState = nextResult === 'Tails';
        const spinSequence = [true, false, true, false, true];

        setResult(nextResult);

        spinSequence.forEach((state, index) => {
            window.setTimeout(() => {
                setIsFlipped(state);
            }, index * 180);
        });

        window.setTimeout(() => {
            setIsFlipped(finalState);
            setHasFlipped(true);
        }, spinSequence.length * 180 + 120);
    };

    return (
        <div className="heads_tails_feature_block">
            <div className="heads_tails_container">
                <h1 className="heads_tails_title">{currentName} flips the coin!</h1>
                <button
                    type="button"
                    className={`heads_tails_coin_button ${isFlipped ? 'flipped' : ''}`}
                    onClick={handleFlip}
                    aria-label="Flip the coin"
                >
                    <span className="heads_tails_coin_side heads">
                        <img src={headsCoinImage} alt="" className="heads_tails_coin_image" />
                    </span>
                    <span className="heads_tails_coin_side tails">
                        <img src={tailsCoinImage} alt="" className="heads_tails_coin_image" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default HeadsOrTailsFeatureComponent;
