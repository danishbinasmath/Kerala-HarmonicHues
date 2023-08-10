import React, { useState } from 'react';
import axios from 'axios';
import './css/postoffice.css';

const PostOffice1 = () => {
    const [postOffices, setPostOffices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const getPostOffices = () => {
        axios.get(`https://api.postalpincode.in/pincode/${searchQuery}`)
            .then(res => {
                if (res.data && res.data[0].PostOffice) {
                    setPostOffices(res.data[0].PostOffice);
                    setErrorMessage('');
                } else {
                    setPostOffices([]);
                    setErrorMessage('No results found');
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage('An error occurred');
            });
    };

    const handleSearch = () => {
        getPostOffices();
    }

    return (
        <>
            <div className='container postoffice2'>
                <div className='pf2'>
                    <h1>Post Office Details of Kerala</h1>
                </div>

                <div className="postofficeSearch2">
                    <input type="text" 
                        placeholder="Search details by PinCode"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="button" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {errorMessage && <p>{errorMessage}</p>}

                    {postOffices.map((post, index) => (
                        <div className="card postofficecard2" key={index} style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h6>Name: {post.Name}</h6>
                                <h6>BranchType: {post.BranchType}</h6>
                                <h6>DeliveryStatus: {post.DeliveryStatus}</h6>
                                <h6>Circle: {post.Circle}</h6>
                                <h6>Block: {post.Block}</h6>
                                <h6>District: {post.District}</h6>
                                <h6>Division: {post.Division}</h6>
                                <h6>Region: {post.Region}</h6>
                                <h6>State: {post.State}</h6>
                                <h6>Country: {post.Country}</h6>
                                <h6>Pincode: {post.Pincode}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostOffice1;
