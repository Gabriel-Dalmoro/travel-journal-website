import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import supabase from '../lib/supabaseClient';

export default function Home() {
    return (
        <div className='container mx-auto px-4'>
            <Head>
                <title>Your Journey</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header className='flex justify-between items-center py-4'>
                <h1 className='text-3xl font-bold'>Your Logo</h1>
                <nav>
                    <Link href='/' className='px-4'>
                        Home
                    </Link>
                    <Link href='/blog' className='px-4'>
                        Blog
                    </Link>
                    <Link href='/photos' className='px-4'>
                        Photos
                    </Link>
                    <Link href='/contact' className='px-4'>
                        Contact
                    </Link>
                </nav>
            </header>

            <main>
                <section className='hero bg-gray-200 p-8 text-center'>
                    <h2 className='text-4xl font-bold'>
                        Welcome to My Journey
                    </h2>
                    <p className='mt-4'>
                        Follow my adventures through South America
                    </p>
                </section>

                <section className='map mt-8 p-4'>
                    <h3 className='text-2xl font-bold'>Travel Map</h3>
                    <div className='map-placeholder bg-gray-300 h-64'></div>
                </section>

                <section className='about mt-8 p-4 flex items-center'>
                    <Image
                        src='/profile.jpg'
                        alt='Profile'
                        width={150}
                        height={150}
                        className='rounded-full'
                    />
                    <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>About Me</h3>
                        <p className='mt-2'>
                            Brief bio and purpose of the trip.
                        </p>
                    </div>
                </section>

                <section className='latest-posts mt-8 p-4'>
                    <h3 className='text-2xl font-bold'>Latest Blog Entries</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                        <div className='post bg-white p-4 shadow'>
                            <h4 className='text-xl font-bold'>Post Title 1</h4>
                            <p className='mt-2'>Excerpt from blog post...</p>
                        </div>
                        <div className='post bg-white p-4 shadow'>
                            <h4 className='text-xl font-bold'>Post Title 2</h4>
                            <p className='mt-2'>Excerpt from blog post...</p>
                        </div>
                        <div className='post bg-white p-4 shadow'>
                            <h4 className='text-xl font-bold'>Post Title 3</h4>
                            <p className='mt-2'>Excerpt from blog post...</p>
                        </div>
                    </div>
                </section>

                <section className='gallery mt-8 p-4'>
                    <h3 className='text-2xl font-bold'>Photo Gallery</h3>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                        <div className='photo bg-gray-300 h-32'></div>
                        <div className='photo bg-gray-300 h-32'></div>
                        <div className='photo bg-gray-300 h-32'></div>
                        <div className='photo bg-gray-300 h-32'></div>
                    </div>
                </section>

                <section className='contact mt-8 p-4'>
                    <h3 className='text-2xl font-bold'>Contact Me</h3>
                    <form className='mt-4'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='block w-full p-2 mb-4 border rounded'
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            className='block w-full p-2 mb-4 border rounded'
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            className='block w-full p-2 mb-4 border rounded'
                        ></textarea>
                        <button
                            type='submit'
                            className='bg-blue-500 text-white p-2 rounded'
                        >
                            Send
                        </button>
                    </form>
                    <div className='social-media mt-4'>
                        <a href='#' className='px-2'>
                            Facebook
                        </a>
                        <a href='#' className='px-2'>
                            Twitter
                        </a>
                        <a href='#' className='px-2'>
                            Instagram
                        </a>
                    </div>
                </section>
            </main>

            <footer className='py-4 text-center'>
                <p>&copy; 2023 Your Journey</p>
            </footer>
        </div>
    );
}
