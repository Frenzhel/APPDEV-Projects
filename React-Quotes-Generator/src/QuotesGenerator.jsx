import React,{useState} from 'react';
const marcusquotes = ["The happiness of your life depends upon the quality of your thoughts.",
"Waste no more time arguing about what a good man should be. Be one.",
"The best revenge is to be unlike him who performed the injury.",
"The soul becomes dyed with the color of its thoughts.",
"If it is not right do not do it; if it is not true do not say it."]
const seneccaquotes = ["If you don't know, ask. You will be a fool for the moment, but a wise man for the rest of your life.",
"The important thing about a problem is not its solution, but the strength we gain in finding the solution",
"We suffer more in imagination than in reality.",
"Men can be divided into 2 groups:  one that goes ahead and achieves something, and one that comes after and criticizes.",
"It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult"]
let m = 0;
let x = [];
export default function QuotesGenerator(){
    const [marcus,setMarcus] = useState(" ")
    const [senecca,setSenecca] = useState(" ")
    function getRandomNumber (){
        return Math.floor(Math.random() *seneccaquotes.length)
    }

    function getRandomQuoteSenecca() {
        let y = "";
        let quote;
        if (x==seneccaquotes.length){
            x = []
        }
        
        do{
            quote = seneccaquotes[Math.floor(Math.random() * seneccaquotes.length)];
        }while (x.includes(quote));
        x.push(quote);
        return quote
    }
    function getRandomQuoteMarcus() {
        let y = "";
        if (m>=marcusquotes.length){
            m=0
        };
        y = marcusquotes[m]
        m++
        return y
    }
    function randomQuoteChangeSenecca (){
        setSenecca(getRandomQuoteSenecca())
    }
    function randomQuoteChange (){
        setMarcus(getRandomQuoteMarcus())
    }
    return(
        <>
        <div className="quotes-generator-container">
            <h1>Quotes Generator</h1>
            <div className="senecca-quotes">
                <h2>Senecca's Quotes</h2>
                <div className="senecca-display">
                    <p>{senecca}</p>
                </div>
                <label></label>
                <button className="senecca" onClick={randomQuoteChangeSenecca}>Senecca</button>
            </div>
            <div className="marcus-quotes">
                <h2>Marcus Aurelius's Quotes</h2>
                <div className="marcus-display">
                    <p>{marcus}</p>
                </div>
                <label></label>
                <button className="marcus" onClick={randomQuoteChange}>Marcus</button>
            </div>
        </div>
        </>
    )
}