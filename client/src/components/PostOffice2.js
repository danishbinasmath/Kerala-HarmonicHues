import axios from 'axios';
import './css/postoffice.css';
import { useState } from 'react';

const PostOffice2 = () => {
    const [searchQuery, setSearchQuery] = ('');
    const [postoffice, setPostOffices] = ('');

    const getPostOffices = () => {
        axios.get(`https://api.postalpincode.in/pincode/${searchQuery}`)
        .then(res => {
            setPostOffices(res.data[0].PostOffice);
        })
        .catch(err => {
            console.log(err);
        }) 
    }

    const handleRequest = () => {
        getPostOffices();
    }

    return (
        <>
            <div onClick={handleRequest}>
                <input value={searchQuery} onChange={(e) => {setPostOffices(e.value.target)}}></input>
                <button>To Render</button>
                <h1>The value</h1>
                <p>{searchQuery}</p>
            </div>
        </>
    );
};

export default PostOffice2;