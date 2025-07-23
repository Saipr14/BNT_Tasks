import { useEffect, useState } from "react";

const TrafficLight = () => {
    const [currentLight, setCurrentLight] = useState('red');
    const [redTime, setRedTime] = useState(3);
    const [yellowTime, setYellowTime] = useState(2);
    const [greenTime, setGreenTime] = useState(5);

    useEffect(() => {
        let timer;
        if(currentLight === 'red'){
            timer = setTimeout(() => {setCurrentLight('yellow')}, yellowTime>1 ? redTime*1000:setCurrentLight('yellow'))
        }else if(currentLight === 'yellow'){
            timer = setTimeout(() => setCurrentLight('green'), yellowTime>1 ? yellowTime*1000:setCurrentLight('green'))
        }else if(currentLight === 'green'){
            timer = setTimeout(() => setCurrentLight('red'), greenTime>1 ? greenTime*1000:setCurrentLight('red'))
        }
    })




    return ( 
        <div className="place">
         <div className="lightbox">
            <div className= {`light red ${currentLight === "red" ? "on" : ""}`}></div>
            <div className={`light yellow ${currentLight === "yellow" ? "on" : ""}`}></div>
            <div className={`light green ${currentLight === "green" ? "on" : ""}`}></div>
         </div>
         <div className="pole"></div>
         <div className="timer mt-4">
            <div className="redtime mx-4">
                <button onClick={() => setRedTime(prev => Math.max(prev-1, 1))}>-</button>
                <input type="number" value={redTime} onChange={(e) => setRedTime(Number(e.target.value))}/>
                <button onClick={() => setRedTime(prev => Math.max(prev+1, 1))}>+</button>
            </div>
            <div className="yellowtime mx-4">
                <button onClick={() => setYellowTime(prev => Math.max(prev-1, 1))}>-</button>
                <input type="number" value={yellowTime} onChange={(e) => setYellowTime(Number(e.target.value))}/>
                <button onClick={() => setYellowTime(prev => Math.max(prev+1, 1))}>+</button>
            </div>
            <div className="greentime mx-4">
                <button onClick={() => setGreenTime(prev => Math.max(prev-1, 1))}>-</button>
                <input type="number" value={greenTime} onChange={(e) => setGreenTime(Number(e.target.value))}/>
                <button onClick={() => setGreenTime(prev => Math.max(prev+1, 1))}>+</button>
            </div>
         </div>
        </div>
     );
}
 
export default TrafficLight;