import React from 'react';
import './SinglePost.css';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

const SinglePost = ({ post }) => {
    // console.log(post);
    const { id, title, body } = post;
    // navigate
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${post.id}`);
    }
    return (
        <div className='post'>
            <h5>ID:{id}</h5>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={handleNavigation}>With Button handler</button>
            
        </div>
    );
};

export default SinglePost;