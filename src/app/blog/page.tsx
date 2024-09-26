'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../../../lib/fetchData';

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
            <section className='mt-8 p-4'>
                <h3 className='text-3xl font-bold'>All blog posts</h3>
                <p className='mt-2'>Sorted from latest to oldest</p>
            </section>

            <section className='p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    {posts.map((post) => (
                        <div
                            key={post._id}
                            className='post bg-white p-6 shadow-lg rounded-lg hover:p-7'
                        >
                            <h4 className='text-xl font-bold text-gray-800'>
                                {post.title}
                            </h4>
                            <p className='mt-2 text-gray-600'>
                                {post.content[0].children[0].text}
                            </p>
                            <Link
                                href={`/blog/${post.slug.current}`}
                                className='text-blue-500 mt-4 inline-block'
                            >
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
