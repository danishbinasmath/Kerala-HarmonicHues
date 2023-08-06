import axios from "axios";
import { useState } from "react";
// import './news.css'

const News = () => {
    const [news, setNews] = useState([]);

    //api key
    //https://newsapi.org/v2/everything?q=kerala&apiKey=a8eeeb3c01004f8c9985cc108fbe74db
    //https://newsapi.org/v2/top-headlines?apiKey=020e1d283ee64b97bf32b788a9f44003&q=sports

    const getNews = () => {
        
        axios.get('https://newsapi.org/v2/everything?q=kerala&apiKey=a8eeeb3c01004f8c9985cc108fbe74db')
        .then(
            res => {
                console.log(res.data.articles)
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
                <button className="btn btn-primary" onClick={getNews}> Get News</button>
            </div>

            <div className="container">
                <div className="row">
                    {
                        news.map((value) => (
                            <div className="col-3" key={value.url}>
                                <div className="card" style={{ width: "15rem" }}>
                                    {value.urlToImage && <img src={value.urlToImage} className="card-img-top" alt="..." />}
                                    <div className="card-body">
                                        <h5 className="card-title"> {value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href={value.url} className="btn btn-primary">Read More</a>
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