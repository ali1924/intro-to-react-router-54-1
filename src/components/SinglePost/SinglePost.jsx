import React from 'react';
import './SinglePost.css';
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
    // console.log(post);
    const { id, title, body } = post;
    return (
        <div className='post'>
            <h5>ID:{id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Details</Link>
            <button>Show Post Details</button>
        </div>
    );
};

export default SinglePost;