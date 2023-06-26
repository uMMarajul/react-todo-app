import { useState } from "react";

const StopWatch = () => {
    

    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);

    const [interval,setInterval] = useState();

    const increaseTime = () => {
        setTime((time)=>time+1);
    }
    const clickStart = () => {
        setInterval(setInterval(increaseTime,1000))
        
        setIsRunning(true);
    }
    console.log("interval",interval);

    const clickStop = () => {
        setIsRunning(false);

        clearInterval(interval);
    }
    
    

    return ( 
        <div>
            <div className="my-3">
                time: <span className="timerClass">{time}</span> 
            </div> 
            <button 
                className={isRunning?"btn btn-warning":"btn btn-primary"} 
                onClick={isRunning?clickStop:clickStart}
            >
                {isRunning?"Stop":"Start"}
            </button>
        </div>
     );
}
 
export default StopWatch;