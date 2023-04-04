import React from 'react';
import './PostDetail.css';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postData = useLoaderData();
    console.log(postData);
    

    // navigate
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='post-detail'>
            <h3>Post Details</h3>
            <h3>ID:{postData.id}</h3>
            <p>{postData.title}</p>
            <p>{postData.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;