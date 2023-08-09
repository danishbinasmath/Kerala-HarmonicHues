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



    return (
        <>
            <div>
                <button>To Render</button>
            </div>
        </>
    );
};

export default PostOffice2;