'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import supabase from '../../lib/supabaseClient';
import { fetchBlogPosts } from '../../lib/fetchData';

export default function Home() {
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

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // console.log(posts[0]);
    return (
        <div className='container'>
            <div className='h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]'>
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div> */}

                <Head>
                    <title>Journals of Apollo</title>
                    <link rel='icon' href='../../public/icon.jpeg' />
                </Head>

                <main>
                    <section className='hero bg-gray-100 p-16 text-center'>
                        <h2 className='text-5xl font-bold text-gray-800'>
                            Welcome to My Journey
                        </h2>
                        <p className='mt-4 text-gray-600'>
                            Follow my adventures through South America
                        </p>
                    </section>

                    <section className='map mt-8 p-4'>
                        <h3 className='text-3xl font-bold text-gray-800'>
                            Travel Map
                        </h3>
                        <div className='map-placeholder bg-gray-300 h-64 mt-4'></div>
                    </section>

                    <section className='about mt-8 p-4 flex items-center'>
                        <Image
                            src='/profile.jpg'
                            alt='Profile'
                            width={150}
                            height={150}
                            className='rounded-full'
                        />
                        <div className='ml-6'>
                            <h3 className='text-3xl font-bold text-gray-800'>
                                About Me
                            </h3>
                            <p className='mt-2 text-gray-600'>
                                Brief bio and purpose of the trip.
                            </p>
                        </div>
                    </section>

                    <section className='latest-posts mt-8 p-4'>
                        <h3 className='text-3xl font-bold text-gray-800'>
                            Latest Blog Entries
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                            {posts.map((post) => (
                                <div
                                    key={post._id}
                                    className='post bg-white p-6 shadow-lg rounded-lg'
                                >
                                    <h4 className='text-xl font-bold text-gray-800'>
                                        {post.title}
                                    </h4>
                                    <p className='mt-2 text-gray-600'>
                                        {post.excerpt}
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

                    <section className='gallery mt-8 p-4'>
                        <h3 className='text-3xl font-bold text-gray-800'>
                            Photo Gallery
                        </h3>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
                            <div className='photo bg-gray-300 h-32 rounded-lg'></div>
                            <div className='photo bg-gray-300 h-32 rounded-lg'></div>
                            <div className='photo bg-gray-300 h-32 rounded-lg'></div>
                            <div className='photo bg-gray-300 h-32 rounded-lg'></div>
                        </div>
                    </section>

                    <section className='contact mt-8 p-4'>
                        <h3 className='text-3xl font-bold text-gray-800'>
                            Contact Me
                        </h3>
                        <form className='mt-6 space-y-4'>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                className='block w-full p-2 border border-gray-300 rounded'
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='block w-full p-2 border border-gray-300 rounded'
                            />
                            <textarea
                                name='message'
                                placeholder='Message'
                                className='block w-full p-2 border border-gray-300 rounded'
                            ></textarea>
                            <button
                                type='submit'
                                className='bg-blue-500 text-white p-2 rounded'
                            >
                                Send
                            </button>
                        </form>
                        <div className='social-media mt-6 flex space-x-4'>
                            <a
                                href='#'
                                className='text-gray-600 hover:text-black'
                            >
                                Facebook
                            </a>
                            <a
                                href='#'
                                className='text-gray-600 hover:text-black'
                            >
                                Twitter
                            </a>
                            <a
                                href='#'
                                className='text-gray-600 hover:text-black'
                            >
                                Instagram
                            </a>
                        </div>
                    </section>
                </main>

                <footer className='py-4 text-center text-gray-600 border-t border-gray-200'>
                    <p>&copy; 2023 Your Journey</p>
                </footer>
            </div>
        </div>
    );
}
