import React from 'react';
import './FriendDetail.css';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendData= useLoaderData();
    // console.log(friendData);
    const { name, phone,email } = friendData;
    return (
        <div className='friend-details'>
            <h3>Details Info</h3>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email:{email}</p>
        </div>
    );
};

export default FriendDetail;