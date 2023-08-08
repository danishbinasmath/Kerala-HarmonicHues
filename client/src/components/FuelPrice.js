import './css/fuelprice.css';
import axios from 'axios';
import { useState } from 'react';

const FuelPrice = () => {
    const [Petrolprice, setPetrolprice] = useState(0);
    const [Dieselprice, setDieselprice] = useState(0);
    const [LPGprice, setLPGprice] = useState(0);

    const getPrice = () => {
        const headers = {
            'X-RapidAPI-Key': 'e23734a960mshd7866f6155069dep11aabfjsn53694007c25a',
            'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com'
        };

        axios.get('https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/kerala', { headers })
            .then(res => {
                // console.log(res.data.fuel.petrol.retailPrice);
                console.log(res.data)
                setPetrolprice(res.data.fuel.petrol)
                setDieselprice(res.data.fuel.diesel)
                setLPGprice(res.data.fuel.lpg)
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>

            <div className='container'>

                <div className="FuelPrice-container button-88">
                    <h1> Kerala Fuel Prices for Petrol, Diesal and LPG of Kerala </h1>
                </div>

                <button className='fuelButton' onClick={getPrice}>Click Here to Know the Price</button>

                <div className='card petrolCard'>
                    <h3>Price of Petrol is: {Petrolprice.retailPrice} {Petrolprice.currency}</h3>
                    <h5>Retail Price Change: {Petrolprice.retailPriceChange}</h5>
                    <h5>Retail Price Change Interval: {Petrolprice.retailPriceChangeInterval}</h5>
                    <h5>Retail Unit: {Petrolprice.retailUnit}</h5>
                </div>

                <div className='card lpgCard'>
                    <h3>Price of LPG is: {LPGprice.retailPrice} {LPGprice.currency}</h3>
                    <h5>Retail Price Change: {LPGprice.retailPriceChange}</h5>
                    <h5>Retail Price Change Interval: {LPGprice.retailPriceChangeInterval}</h5>
                    <h5>Retail Unit: {LPGprice.retailUnit}</h5>
                </div>

                <div className='card dieselCard'>
                    <h3>Price of Diesal is: {Dieselprice.retailPrice} {Dieselprice.currency}</h3>
                    <h5>Retail Price Change: {Dieselprice.retailPriceChange}</h5>
                    <h5>Retail Price Change Interval: {Dieselprice.retailPriceChangeInterval}</h5>
                    <h5>Retail Unit: {Dieselprice.retailUnit}</h5>
                </div>

            </div>
        </>

    );
}

export default FuelPrice;