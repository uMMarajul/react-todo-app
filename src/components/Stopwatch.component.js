import { useRef, useState } from "react";

const StopWatch = () => {
    

    const [time,setTime] = useState(0);
    const [isRunning,setIsRunning] = useState(false);
    
    let intarval = useRef();

    const increaseTime = () => {
        setTime((previousValue)=>{
            return previousValue + 1;
        });
    }
    const handleStart = () => {
        intarval.current = setInterval(increaseTime,1000);
        console.log(intarval);
        setIsRunning(true);
    }
    const handleStop  = ()=>{
        console.log("handle stop")
        setIsRunning(false);
        console.log( intarval.current);
        clearInterval( intarval.current);
    }


    return ( 
        <div>
            <div className="my-3">
                time: <span className="timerClass">{time}</span> 
            </div> 
            <button 
                className={isRunning?"btn btn-warning":"btn btn-primary"} 
                onClick={isRunning?handleStop:handleStart}
            >
                {isRunning?"Stop":"Start"}
            </button>
        </div>
     );
}
 
export default StopWatch;