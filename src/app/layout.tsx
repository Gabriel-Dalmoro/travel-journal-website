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
                <header className='flex justify-between items-center py-4 px-2 border-b border-gray-200'>
                    <Link href='/' className='text-3xl font-bold'>
                        Gabriel Dalmoro
                    </Link>
                    <nav className='flex space-x-4'>
                        <Link href='/' className='hover:text-gray-800'>
                            Home
                        </Link>
                        <Link href='/blog' className='hover:text-gray-800'>
                            Blog
                        </Link>
                        <Link href='/photos' className='hover:text-gray-800'>
                            Photos
                        </Link>
                        <Link href='/contact' className='hover:text-gray-800'>
                            Contact
                        </Link>
                    </nav>
                </header>
                <main className={inter.className}>{children}</main>
            </body>
        </html>
    );
}
