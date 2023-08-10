import React, { useState } from 'react';
import axios from 'axios';
import './css/postoffice.css';

const PostOffice1 = () => {
    const [postOffices, setPostOffices] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const getPostOffices = () => {
        axios.get(`https://api.postalpincode.in/postoffice/${searchQuery}`)
            .then(res => {
                console.log(res.data[0].PostOffice.Name);
                setPostOffices(res.data[0].PostOffice);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleSearch = () => {
        getPostOffices();
    }

    return (
        <>
            <div className='container postoffice'>
                <div className='pf'>
                    <h1>Post Office Details of Kerala</h1>
                </div>

                <div className="postofficeSearch">
                    <input type="text" 
                    placeholder="Search details by Post Office branch name"
                    value = {searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="button" onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    {postOffices.map((post, index) => (
                        <div className="card postofficecard" key={index} style={{ width: "20rem" }}>
                            <div className="card-body">
                                <h6>Name: {post.Name}</h6>
                                <h6>BranchType: {post.BranchType}</h6>
                                <h6>DeliveryStatus: {post.DeliveryStatus}</h6>
                                <h6>Circle: {post.Circle}</h6>
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
