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
    const incrementCountFive = () =>{
        setCount(c => c + 5)
    }
    const decrementCountFive = () =>{
        setCount(c => c - 5)
    }
    function getRandomNum (){
        let Number = count
        if(Number<=0){
            Number = Math.floor(Math.random() * 999)
        }else if(Number>=0){
            Number = Math.floor(Math.random() * -999)
        }
        return Number
    }
    const randomizeCount = () =>{
        setCount(getRandomNum)
            
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
            <br />
            <button className="button-container-decrement-five" onClick={decrementCountFive}>Decrement 5</button>
            <button className="button-container-randomize" onClick={randomizeCount}>Randomize</button>
            <button className="button-container-increment-five" onClick={incrementCountFive}>Increment 5</button>
        </div>
        </>
    )
}