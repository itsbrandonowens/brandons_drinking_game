import React, { useState, useRef} from 'react'
import '../styles/GameCards.css'


const TimerComponent = () => {
  const Ref = useRef(null);
 
    // The state for our timer
    const [timer, setTimer] = useState('00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);

        return {
            total, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer10mins = (e) => {
 
        setTimer('10:00');
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime10mins = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 600);
        return deadline;
    }

    const clearTimer5mins = (e) => {
 
        setTimer('05:00');
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime5mins = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 300);
        return deadline;
    }

    const clearTimerClear = (e) => {
 
        setTimer('00:00');
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTimeClear = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 0);
        return deadline;
    }

    const onClickReset10mins = () => {
        clearTimer10mins(getDeadTime10mins());
    }
    const onClickReset5mins = () => {
        clearTimer5mins(getDeadTime5mins());
    }

    const onClickResetClear = () => {
        clearTimerClear(getDeadTimeClear());
    }


    return (

        <div className="timer_container">
            <h2 className="timer_function">{timer}</h2>
            <button className = "timer_button" onClick={onClickReset10mins}>10 Minutes</button>
            <button className = "timer_button" onClick={onClickReset5mins}>05 Minutes</button>
            <button className = "timer_button" onClick={onClickResetClear}>Clear Time</button>
        </div>





    )
}

export default TimerComponent