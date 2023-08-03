import { useState } from "react";
import axios from "axios";
import './quote.css';

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
        <div className="quoteContainer">

            <h1 >Quote of the day</h1>
            <button className="btn-grad" onClick={quoteFun}>Get the Quote</button>
            {quote && <p>{quote}</p>}
            <h3> By {author}</h3>

        </div>
    )
}

export default Quote;

