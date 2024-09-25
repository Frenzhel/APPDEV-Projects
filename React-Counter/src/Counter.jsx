import React, {useState} from 'react';
export default function Counter(){
    //useStae Hook for updating variable or STATEFUL VARIABLES
    const [count, setCount] = useState(0);
    //to increment count
    const incrementCount = () =>{
        //previous state => new state
        setCount(c => c + 1)
    }
    //to decrement count
    const decrementCount = () =>{
        //previous state => new state
        setCount(c => c - 1)
    }
    //to reset count
    const resetCount = () =>{
        //previous state => new state
        setCount(c => c = 0)
    }
    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick={decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick={resetCount}>Reset</button>
            <button className="button-container-increment" onClick={incrementCount}>Increment</button>
        </div>
        </>
    )
}