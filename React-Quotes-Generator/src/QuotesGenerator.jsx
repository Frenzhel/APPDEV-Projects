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
export default function QuotesGenerator(){
    const [quote,setQuote] = useState("When granted everything, you can’t do anything. \n -Gojo Satoru")
    function getRandomQuoteSenecca() {
        let randomQuote;
        let newQuote;
        do {
          randomQuote = Math.floor(Math.random() * seneccaquotes.length);
          newQuote = seneccaquotes[randomQuote];
        } while (newQuote === quote); 
        return newQuote;
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
        setQuote(getRandomQuoteSenecca())
    }
    function randomQuoteChange (){
        setQuote(getRandomQuoteMarcus())
    }
    return(
        <>
        <div className="quotes-generator-container">
            <h1>Quotes Generator</h1>
            <div className="quote-display">
                <div className="quote-container">
                    <p>{quote}</p>
                </div>
            </div>
            <div className="button-container">
                <button className="senecca" onClick={randomQuoteChangeSenecca}>Senecca</button>
                <button className="marcus" onClick={randomQuoteChange}>Marcus</button>
            </div>
        </div>
        </>
    )
}