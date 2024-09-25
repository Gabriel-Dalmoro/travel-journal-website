import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Travels of Apollo',
    description:
        'A travel journal website to document and share travel experiences, photos, and journal entries.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <header className='flex justify-between items-center py-4 border-b border-gray-200'>
                    <h1 className='text-3xl font-bold'>Your Logo</h1>
                    <nav className='flex space-x-4'>
                        <Link
                            href='/'
                            className='text-gray-600 hover:text-black'
                        >
                            Home
                        </Link>
                        <Link
                            href='/blog'
                            className='text-gray-600 hover:text-black'
                        >
                            Blog
                        </Link>
                        <Link
                            href='/photos'
                            className='text-gray-600 hover:text-black'
                        >
                            Photos
                        </Link>
                        <Link
                            href='/contact'
                            className='text-gray-600 hover:text-black'
                        >
                            Contact
                        </Link>
                    </nav>
                </header>
                <main className={inter.className}>{children}</main>
            </body>
        </html>
    );
}
