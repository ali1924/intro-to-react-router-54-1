import React from 'react';
import './Friend.css';
const Friend = ({ friend }) => {
    console.log(friend);
    // const {id,name,address,company,email,phone,username,website}=friend;
    // const {street,suite,city,geo,zipcode}=address;
    // const {lat,lng}=geo;
    // const {name,catchPhrase,bs}=company;

    const { email, name, id, phone } = friend;
    return (
        <div className='friend'> 
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Friend;