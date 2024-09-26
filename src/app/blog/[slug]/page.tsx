'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../../../../lib/fetchData';

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPosts() {
            const blogPosts = await fetchBlogPosts();
            setPosts(blogPosts);
            console.log(blogPosts);
            setLoading(false);
        }
        getPosts();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>this a blog entry yo homie</p>
        </div>
    );
}
