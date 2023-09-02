import { useState } from "react";
import axios from "axios";
import './css/quote.css';

const Quote = () => {
    const [quote, setQuote] = useState("");

    const [author, setAuthor] = useState("");

    const quoteFun = () => {
        // axios.get('').then(res => {}).catch(err => {}).finally(findfsa => {})

        axios.get('https://api.quotable.io/random')
            .then(res => {
                console.log(res.data)
                setQuote(res.data.content)
                setAuthor(res.data.author)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="quoteContainer card">
            

            <h1 className="quoteH1">Quote of the day</h1>
            <button className="quoteButton" onClick={quoteFun}>Get the Quote</button>
            {quote && <p className="quoteP">"{quote}"</p>}
            {author && <h5 className="quoteH3"> By {author}</h5>}

        </div>
    )
}

export default Quote;

