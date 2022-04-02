import React, { useEffect } from 'react';
import { getPosts } from '../api/post';

let pageNo = 0;
const POST_LIMIT = 9;

export default function Home() {


    const fetchPosts = async () => {
        const { error, posts } = await getPosts(pageNo, POST_LIMIT);

        if(error) return console.log(error);

        //ISSUE: Logs an empty array
        console.log(posts); 
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            Home
        </div>
    )
}
