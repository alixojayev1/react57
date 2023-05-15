import { useReducer, useState } from "react"
import '../commponent/Temp.css';
const Temp = () => {
    const [count, setCount] = useState(10);
    const [temp, setTemp] = useState(false);
    const handleCount = () => {
        setCount(count + 1);
    }
    const handleMinusCount = () => {
        setCount(count - 1)
    }
    return (
        <div className="effect">
            <h2  className={count > 15 ? "extra" : "temp"}>
                {
                    count
                    
                }
                <sup>o</sup>
                C


            </h2>
            <div className="radius">
                <button className="plus" onClick={handleCount} >+</button>
                <button className="minus" onClick={handleMinusCount}>-</button>
            </div>

        </div>
    )
}

export default Temp