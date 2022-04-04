import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/post';
import PostCard from './PostCard';

let pageNo = 0;
const POST_LIMIT = 9;

export default function Home() {

    const [posts, setPosts] = useState([]);
    const [totalPostCount, setTotalPostCount] = useState([]);


    const fetchPosts = async () => {
        const { error, posts, postCount } = await getPosts(pageNo, POST_LIMIT);

        if(error) return console.log(error);


        console.log(posts); 
        setPosts(posts);
        setTotalPostCount(postCount);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-3 gap-3 pb-5">
            {
                posts.map((post) => {
                    return <PostCard key={post.id} post={post} />
                }) 
            }
            </div>
            
        </div>
        // <div>Home | Working</div>
    )
}
