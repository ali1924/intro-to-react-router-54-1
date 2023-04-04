import React from 'react';
import './PostDetail.css';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postData = useLoaderData();
    console.log(postData);
    return (
        <div className='post-detail'>
            <h3>Post Details</h3>
            <h3>ID:{postData.id}</h3>
            <p>{postData.title}</p>
            <p>{postData.body}</p>
        </div>
    );
};

export default PostDetail;