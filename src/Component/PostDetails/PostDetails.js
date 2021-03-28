import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const {id} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then (response=>response.json())
        .then (data => setPost(data));

    },[])
    
useEffect(() => {

},[])
    return (
        <div>
            <h1>This Post Details {id}</h1>
            <h2>user Posted {id}</h2>
            <h3>title; -{post.title}</h3>
            <p> {post.body}</p>
        </div>
    );
};

export default PostDetails;