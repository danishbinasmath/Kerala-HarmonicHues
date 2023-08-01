import { useState } from "react";
import axios from "axios";

const Quote = () => {
    const [quote, setQuote] = useState("");

    const quoteFun = () => {
        axios.get('').then(res => {}).catch(err => {}).finally(findfsa => {})

        axios.get()
        .then(res => {
            setQuote(res.data.content)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h1 >Quote of the day</h1>
            <button onClick={quoteFun}>Get the Quote</button>
            {quote && <p>{quote}</p>}

        </div>
    )
}

export default Quote;

