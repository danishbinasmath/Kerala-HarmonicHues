import axios from "axios";
import { useState } from "react";
import './css/news.css'

const News = () => {
    const [news, setNews] = useState([]);

    //api key
    //https://newsapi.org/v2/everything?q=kerala&apiKey=a8eeeb3c01004f8c9985cc108fbe74db
    //https://newsapi.org/v2/top-headlines?apiKey=020e1d283ee64b97bf32b788a9f44003&q=sports

    const getNews = () => {

        axios.get('https://newsapi.org/v2/everything?q=kerala&apiKey=a8eeeb3c01004f8c9985cc108fbe74db')
            .then(
                res => {
                    // console.log(res.data.articles)
                    setNews(res.data.articles)
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
    }


    return (
        <>
            <div className="container my-3">
                <button className="newsButton" onClick={getNews}> Click Here to get the Latest News</button>
            </div>


            <div className="container">
                <div className="row">
                    {
                        //used map function to iterate over the articles and also in the use state the intial value is array[].
                        news.map((value) => (
                            <div className="col" key={value.url}>
                                <div className="card cardNews" style={{ width: "20rem" }}>
                                    {value.urlToImage && <img src={value.urlToImage} className="card-img-top" alt="..." />}
                                    <div className="card-body">
                                        <h5 className="card-title"> {value.title}</h5>
                                        <h6 className="card-text">{value.description}</h6>
                                        <p className="card-text">{value.content}</p>
                                        <a href={value.url} className="newsButton">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default News;