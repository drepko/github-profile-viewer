import './globals.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Web App',
  description: 'Welcome to Web App',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='py-8'>
          <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <ul className='flex space-x-6'>
              <li>
                <Link href='/'>HOME</Link>
              </li>
              <li>
                <Link href='/users'>USERS</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {children}
        </main>
      </body>
    </html>
  );
}
