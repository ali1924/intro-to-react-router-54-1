import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
    const postData = useLoaderData();
    // console.log(postData);
    return (
        <div>
            <h3>All Post Here</h3>
            <div>
                {
                    postData.map(post => <SinglePost
                        key={post.id}
                        post={post}
                    ></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;